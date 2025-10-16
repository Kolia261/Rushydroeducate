import { Trophy, RotateCcw } from 'lucide-react';

interface CompletionScreenProps {
  onRestart: () => void;
}

export default function CompletionScreen({ onRestart }: CompletionScreenProps) {
  return (
    <div className="min-h-screen flex items-center justify-center p-2 sm:p-4 md:p-8">
      <div className="max-w-4xl w-full">
        <div className="bg-white rounded-3xl shadow-2xl p-4 sm:p-8 md:p-12 text-center">
          <div className="mb-6 sm:mb-8">
            <div className="inline-block bg-gradient-to-r from-yellow-400 to-amber-500 p-4 sm:p-6 rounded-full mb-4 sm:mb-6 animate-bounce">
              <Trophy className="w-16 h-16 sm:w-24 sm:h-24 text-white" />
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-4 sm:mb-6">
              Поздравляем!
            </h1>
          </div>

          <div className="mb-6 sm:mb-8">
            <img
              src="862ab574-8210-4d60-bcec-787ee83788cf.jpg"
              alt="Бобр"
              className="w-40 h-40 sm:w-56 sm:h-56 md:w-64 md:h-64 mx-auto object-contain mb-4 sm:mb-6"
            />
            <div className="bg-green-50 rounded-2xl p-4 sm:p-6 md:p-8 mb-4 sm:mb-6">
              <p className="text-lg sm:text-xl md:text-2xl text-gray-800 leading-relaxed mb-2 sm:mb-4">
                Ты отлично справился с заданием!
              </p>
              <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed">
                Теперь ты знаешь, как электричество попадает в твой дом, и можешь рассказать об этом друзьям и семье!
              </p>
            </div>

            <div className="bg-blue-50 rounded-2xl p-3 sm:p-4 md:p-6 mb-4 sm:mb-6">
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-blue-600 mb-2 sm:mb-4">Что ты узнал:</h3>
              <ul className="text-left text-base sm:text-lg text-gray-700 space-y-1 sm:space-y-2">
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
            className="bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-bold text-lg sm:text-xl md:text-2xl py-4 sm:py-5 md:py-6 px-8 sm:px-10 md:px-12 rounded-full shadow-lg transform hover:scale-110 transition-all duration-300 flex items-center gap-2 sm:gap-3 mx-auto"
          >
            <RotateCcw className="w-6 h-6 sm:w-8 sm:h-8" />
            Пройти еще раз
          </button>
        </div>
      </div>
    </div>
  );
}
