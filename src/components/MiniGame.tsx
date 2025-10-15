import { useState, useEffect } from 'react';
import { Factory, Zap, Home, ArrowRight, Sparkles, Timer } from 'lucide-react';

interface MiniGameProps {
  onComplete: () => void;
}

interface EnergyElement {
  id: string;
  name: string;
  icon: JSX.Element;
  correctOrder: number;
}

const elements: EnergyElement[] = [
  { id: 'tes', name: 'Электростанция (ТЭС)', icon: <Factory className="w-12 h-12" />, correctOrder: 1 },
  { id: 'transformer1', name: 'Повышающий трансформатор', icon: <Zap className="w-12 h-12" />, correctOrder: 2 },
  { id: 'lep', name: 'Линии электропередачи (ЛЭП)', icon: <Zap className="w-12 h-12" />, correctOrder: 3 },
  { id: 'transformer2', name: 'Понижающий трансформатор', icon: <Zap className="w-12 h-12" />, correctOrder: 4 },
  { id: 'home', name: 'Дом и розетка', icon: <Home className="w-12 h-12" />, correctOrder: 5 }
];

const hints = [
  { step: 0, text: 'С чего всё начинается? Где рождается электричество?', childImage: '/68d30f9c-b495-406a-ac85-ec3769eb0928.jpg' },
  { step: 1, text: 'Нужно поднять напряжение для передачи!', childImage: '/a8c464db-834a-41b1-ba57-604d9972c450.jpg' },
  { step: 2, text: 'Теперь по каким проводам идёт ток?', childImage: '/68d30f9c-b495-406a-ac85-ec3769eb0928.jpg' },
  { step: 3, text: 'Перед домом нужно понизить напряжение до безопасного!', childImage: '/a8c464db-834a-41b1-ba57-604d9972c450.jpg' },
  { step: 4, text: 'И наконец - куда попадает электричество?', childImage: '/68d30f9c-b495-406a-ac85-ec3769eb0928.jpg' }
];

export default function MiniGame({ onComplete }: MiniGameProps) {
  const [selectedElements, setSelectedElements] = useState<EnergyElement[]>([]);
  const [availableElements, setAvailableElements] = useState<EnergyElement[]>([]);
  const [currentHintIndex, setCurrentHintIndex] = useState(0);
  const [attempts, setAttempts] = useState(0);
  const [showSuccessAnimation, setShowSuccessAnimation] = useState(false);
  const [timer, setTimer] = useState(0);
  const [isTimerRunning, setIsTimerRunning] = useState(true);
  const [showHint, setShowHint] = useState(false);

  useEffect(() => {
    const shuffled = [...elements].sort(() => Math.random() - 0.5);
    setAvailableElements(shuffled);
  }, []);

  useEffect(() => {
    if (isTimerRunning && !showSuccessAnimation) {
      const interval = setInterval(() => {
        setTimer(prev => prev + 1);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [isTimerRunning, showSuccessAnimation]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const handleSelectElement = (element: EnergyElement) => {
    const newSelected = [...selectedElements, element];
    setSelectedElements(newSelected);
    setAvailableElements(availableElements.filter(e => e.id !== element.id));

    const isCorrectChoice = element.correctOrder === newSelected.length;

    if (!isCorrectChoice) {
      setAttempts(prev => prev + 1);
      setTimeout(() => {
        setSelectedElements(newSelected.filter(e => e.id !== element.id));
        setAvailableElements([...availableElements]);
      }, 1000);
    } else {
      if (newSelected.length < elements.length) {
        setCurrentHintIndex(newSelected.length);
      } else {
        setIsTimerRunning(false);
        setShowSuccessAnimation(true);
        setTimeout(() => {
          onComplete();
        }, 3000);
      }
    }
  };

  const handleReset = () => {
    const shuffled = [...elements].sort(() => Math.random() - 0.5);
    setAvailableElements(shuffled);
    setSelectedElements([]);
    setCurrentHintIndex(0);
    setAttempts(0);
    setTimer(0);
    setIsTimerRunning(true);
    setShowSuccessAnimation(false);
  };

  const currentHint = hints[currentHintIndex];

  return (
    <div className="min-h-screen flex items-center justify-center p-8 bg-gradient-to-br from-sky-400 via-blue-500 to-cyan-500">
      <div className="max-w-7xl w-full">
        <div className="bg-white rounded-3xl shadow-2xl p-8 relative overflow-hidden">
          {showSuccessAnimation && (
            <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-emerald-500 flex items-center justify-center z-50 animate-pulse">
              <div className="text-center text-white">
                <Sparkles className="w-32 h-32 mx-auto mb-6 animate-spin" />
                <h2 className="text-6xl font-bold mb-4">Отлично!</h2>
                <p className="text-3xl">Правильная цепочка собрана!</p>
              </div>
            </div>
          )}

          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2 bg-blue-100 px-4 py-2 rounded-full">
                <Timer className="w-5 h-5 text-blue-600" />
                <span className="text-xl font-bold text-blue-600">{formatTime(timer)}</span>
              </div>
              <div className="bg-orange-100 px-4 py-2 rounded-full">
                <span className="text-xl font-bold text-orange-600">Ошибки: {attempts}</span>
              </div>
            </div>
            <img
              src="/862ab574-8210-4d60-bcec-787ee83788cf.jpg"
              alt="Бобр"
              className="w-20 h-20 object-contain"
            />
          </div>

          <div className="text-center mb-6">
            <h2 className="text-4xl font-bold text-blue-600 mb-2">
              Помоги собрать цепочку!
            </h2>
            <p className="text-lg text-gray-600">
              Выбирай элементы по порядку. Если ошибёшься - попробуешь снова!
            </p>
          </div>

          {currentHint && selectedElements.length < elements.length && (
            <div className="mb-8 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-2xl p-6 border-2 border-yellow-300">
              <div className="flex items-center gap-4">
                <img
                  src={currentHint.childImage}
                  alt="Подсказка"
                  className="w-24 h-24 object-contain flex-shrink-0"
                />
                <div className="flex-1">
                  <div className="bg-white rounded-xl p-4 relative shadow-lg">
                    <div className="absolute -left-3 top-6 w-6 h-6 bg-white transform rotate-45" />
                    <p className="text-lg font-medium text-gray-800">
                      {currentHint.text}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          <div className="mb-8">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
              <Sparkles className="w-6 h-6 text-yellow-500" />
              Собранная цепочка:
            </h3>
            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl p-8 min-h-[180px] border-2 border-blue-200">
              {selectedElements.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-center">
                  <p className="text-gray-500 text-xl mb-4">
                    Начни с первого элемента!
                  </p>
                  <ArrowRight className="w-12 h-12 text-gray-400 animate-bounce" />
                </div>
              ) : (
                <div className="flex items-center justify-start gap-3 flex-wrap">
                  {selectedElements.map((element, index) => (
                    <div key={element.id} className="flex items-center gap-3">
                      <div className="bg-white rounded-xl p-4 shadow-lg border-4 border-green-400 transform hover:scale-105 transition-all">
                        <div className="text-green-600 mb-2 flex justify-center">
                          {element.icon}
                        </div>
                        <p className="text-sm font-semibold text-center text-gray-800 min-w-[120px]">
                          {element.name}
                        </p>
                      </div>
                      {index < selectedElements.length - 1 && (
                        <ArrowRight className="w-8 h-8 text-green-500" />
                      )}
                    </div>
                  ))}
                  {selectedElements.length < elements.length && (
                    <div className="text-4xl text-gray-300">?</div>
                  )}
                </div>
              )}
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Выбери следующий элемент:</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {availableElements.map(element => (
                <div
                  key={element.id}
                  onClick={() => handleSelectElement(element)}
                  className="bg-gradient-to-br from-orange-400 to-amber-500 rounded-xl p-4 shadow-lg cursor-pointer hover:shadow-2xl transform hover:scale-110 transition-all duration-300 hover:rotate-3"
                >
                  <div className="text-white mb-2 flex justify-center">
                    {element.icon}
                  </div>
                  <p className="text-sm font-semibold text-center text-white">
                    {element.name}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center gap-4">
            <button
              onClick={handleReset}
              className="bg-gray-500 hover:bg-gray-600 text-white font-bold text-xl py-4 px-8 rounded-full shadow-lg transform hover:scale-105 transition-all duration-300"
            >
              Начать заново
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
