import { Trophy, RotateCcw } from 'lucide-react';

interface CompletionScreenProps {
  onRestart: () => void;
}

export default function CompletionScreen({ onRestart }: CompletionScreenProps) {
  return (
    <div className="min-h-screen flex items-center justify-center p-8">
      <div className="max-w-4xl w-full">
        <div className="bg-white rounded-3xl shadow-2xl p-12 text-center">
          <div className="mb-8">
            <div className="inline-block bg-gradient-to-r from-yellow-400 to-amber-500 p-6 rounded-full mb-6 animate-bounce">
              <Trophy className="w-24 h-24 text-white" />
            </div>
            <h1 className="text-5xl font-bold text-gray-800 mb-6">
              Поздравляем!
            </h1>
          </div>

          <div className="mb-8">
            <img
              src="/862ab574-8210-4d60-bcec-787ee83788cf.jpg"
              alt="Бобр"
              className="w-64 h-64 mx-auto object-contain mb-6"
            />
            <div className="bg-green-50 rounded-2xl p-8 mb-6">
              <p className="text-2xl text-gray-800 leading-relaxed mb-4">
                Ты отлично справился с заданием!
              </p>
              <p className="text-xl text-gray-700 leading-relaxed">
                Теперь ты знаешь, как электричество попадает в твой дом, и можешь рассказать об этом друзьям и семье!
              </p>
            </div>

            <div className="bg-blue-50 rounded-2xl p-6 mb-6">
              <h3 className="text-2xl font-bold text-blue-600 mb-4">Что ты узнал:</h3>
              <ul className="text-left text-lg text-gray-700 space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-green-500 font-bold">✓</span>
                  <span>Электричество начинает свой путь на электростанции</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 font-bold">✓</span>
                  <span>Трансформаторы изменяют напряжение для безопасной передачи</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 font-bold">✓</span>
                  <span>ЛЭП передают энергию на большие расстояния</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 font-bold">✓</span>
                  <span>В твой дом приходит безопасное напряжение 220 вольт</span>
                </li>
              </ul>
            </div>
          </div>

          <button
            onClick={onRestart}
            className="bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-bold text-2xl py-6 px-12 rounded-full shadow-lg transform hover:scale-110 transition-all duration-300 flex items-center gap-3 mx-auto"
          >
            <RotateCcw className="w-8 h-8" />
            Пройти еще раз
          </button>
        </div>
      </div>
    </div>
  );
}
