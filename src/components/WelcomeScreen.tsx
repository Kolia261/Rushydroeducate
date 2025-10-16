import { Zap } from 'lucide-react';

interface WelcomeScreenProps {
  onStart: () => void;
}

export default function WelcomeScreen({ onStart }: WelcomeScreenProps) {
  return (
    <div className="min-h-screen flex items-center justify-center p-4 sm:p-6 md:p-8">
      <div className="max-w-4xl w-full">
        <div className="bg-white rounded-3xl shadow-2xl p-4 sm:p-8 md:p-12 text-center transform hover:scale-105 transition-transform duration-300">
          <div className="mb-6 sm:mb-8">
            <div className="inline-block bg-gradient-to-r from-orange-400 to-amber-500 p-3 sm:p-4 rounded-full mb-4 sm:mb-6">
              <Zap className="w-12 h-12 sm:w-16 sm:h-16 text-white" />
            </div>
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-gray-800 mb-2 sm:mb-4">
              Команда <span className="text-orange-500">X</span>
            </h1>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-blue-600 mb-4 sm:mb-6">
              Путешествие Электричества
            </h2>
          </div>

          <div className="mb-6 sm:mb-8">
            <img
              src="862ab574-8210-4d60-bcec-787ee83788cf.jpg"
              alt="Бобр-проводник"
              className="w-40 h-40 sm:w-56 sm:h-56 md:w-64 md:h-64 mx-auto object-contain mb-4 sm:mb-6"
            />
            <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed mb-2 sm:mb-4">
              Привет! Я бобр-энергетик, и я расскажу тебе удивительную историю о том,
            </p>
            <p className="text-lg sm:text-xl md:text-2xl font-semibold text-blue-600">
              Как электричество приходит в твой дом!
            </p>
          </div>

          <button
            onClick={onStart}
            className="bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-bold text-lg sm:text-xl md:text-2xl py-4 sm:py-5 md:py-6 px-8 sm:px-10 md:px-12 rounded-full shadow-lg transform hover:scale-110 transition-all duration-300 hover:shadow-xl"
          >
            Начать приключение!
          </button>
        </div>
      </div>
    </div>
  );
}
