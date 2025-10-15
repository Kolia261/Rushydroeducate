import { useState } from 'react';
import { ChevronRight } from 'lucide-react';

interface TheorySectionProps {
  onComplete: () => void;
}

interface DialogueStep {
  speaker: 'beaver' | 'child';
  text: string;
  title?: string;
  childImage?: string;
}

const dialogueSteps: DialogueStep[] = [
  {
    speaker: 'beaver',
    text: 'Привет, друзья! Я бобр-энергетик. Знаете ли вы, что электричество проделывает огромный путь, прежде чем зажечь лампочку в вашей комнате? Давайте отправимся в это путешествие вместе!',
    title: 'Знакомство'
  },
  {
    speaker: 'beaver',
    text: 'Всё начинается на электростанции! Там огромные генераторы вырабатывают электричество.',
    title: '1. Электростанция'
  },
  {
    speaker: 'child',
    text: 'А как именно работает электростанция?',
    childImage: '68d30f9c-b495-406a-ac85-ec3769eb0928.jpg'
  },
  {
    speaker: 'beaver',
    text: 'Отличный вопрос! На электростанции турбины вращаются с огромной скоростью. Их могут крутить вода (на ГЭС), пар от сжигания топлива (на ТЭС) или ветер (на ветряных станциях). Когда турбина вращается, она крутит генератор, который и создает электричество!'
  },
  {
    speaker: 'child',
    text: 'А сколько электричества производит одна станция?',
    childImage: 'a8c464db-834a-41b1-ba57-604d9972c450.jpg'
  },
  {
    speaker: 'beaver',
    text: 'Прекрасный вопрос! Большая электростанция может производить столько энергии, что её хватит на целый город! Например, крупная ГЭС может обеспечить электричеством до миллиона домов одновременно. Это очень много!'
  },
  {
    speaker: 'beaver',
    text: 'После выработки электричество имеет очень высокое напряжение - до 500 000 вольт! Это в 2000 раз больше, чем в вашей розетке!',
    title: '2. Высокое напряжение'
  },
  {
    speaker: 'child',
    text: 'Зачем нужно такое высокое напряжение?',
    childImage: 'a8c464db-834a-41b1-ba57-604d9972c450.jpg'
  },
  {
    speaker: 'beaver',
    text: 'Умный вопрос! Высокое напряжение помогает передавать энергию на большие расстояния. Чем выше напряжение, тем меньше энергии теряется в проводах. Это как ехать на машине по автобану - быстрее и эффективнее!'
  },
  {
    speaker: 'child',
    text: 'А это не опасно для людей?',
    childImage: '68d30f9c-b495-406a-ac85-ec3769eb0928.jpg'
  },
  {
    speaker: 'beaver',
    text: 'Очень важный вопрос! Да, такое напряжение очень опасно! Поэтому провода с высоким напряжением всегда подвешивают очень высоко на специальных опорах ЛЭП, куда никто не может добраться. А перед домами напряжение обязательно понижают до безопасного!'
  },
  {
    speaker: 'beaver',
    text: 'Дальше ток попадает на трансформаторную подстанцию. Трансформатор - это специальное устройство, которое может изменять напряжение!',
    title: '3. Трансформатор'
  },
  {
    speaker: 'child',
    text: 'Как трансформатор изменяет напряжение?',
    childImage: '68d30f9c-b495-406a-ac85-ec3769eb0928.jpg'
  },
  {
    speaker: 'beaver',
    text: 'Интересный вопрос! Трансформатор работает как волшебник! Внутри него есть специальные катушки с проводом. Когда электричество проходит через одну катушку, оно создает магнитное поле, которое передает энергию на другую катушку, но уже с другим напряжением!'
  },
  {
    speaker: 'beaver',
    text: 'По линиям электропередачи (ЛЭП) - это высокие опоры с проводами - электричество путешествует к городам и посёлкам!',
    title: '4. ЛЭП'
  },
  {
    speaker: 'child',
    text: 'Почему провода висят так высоко?',
    childImage: 'a8c464db-834a-41b1-ba57-604d9972c450.jpg'
  },
  {
    speaker: 'beaver',
    text: 'Супер-вопрос! Провода висят высоко по двум причинам: во-первых, это безопасность - никто не может случайно к ним прикоснуться. Во-вторых, между проводами и землей должно быть достаточно воздуха, чтобы электричество не "прыгнуло" вниз!'
  },
  {
    speaker: 'child',
    text: 'А птицы не получают удар током на проводах?',
    childImage: '68d30f9c-b495-406a-ac85-ec3769eb0928.jpg'
  },
  {
    speaker: 'beaver',
    text: 'Отличное наблюдение! Птицы не получают удар, потому что они касаются только одного провода. Ток опасен, когда проходит через тело - от провода к земле или между двумя проводами. А птица просто сидит на одном проводе, и ток через неё не течет!'
  },
  {
    speaker: 'beaver',
    text: 'Перед тем как попасть в дома, напряжение в последний раз понижается - до 220 вольт. Это происходит на трансформаторных подстанциях в вашем районе.',
    title: '5. Районная подстанция'
  },
  {
    speaker: 'child',
    text: 'Почему именно 220 вольт?',
    childImage: '68d30f9c-b495-406a-ac85-ec3769eb0928.jpg'
  },
  {
    speaker: 'beaver',
    text: 'Классный вопрос! 220 вольт - это золотая середина. Этого достаточно для работы всех домашних приборов: холодильника, телевизора, компьютера. При этом такое напряжение относительно безопасно при правильном использовании. В разных странах могут быть другие стандарты!'
  },
  {
    speaker: 'beaver',
    text: 'И наконец, по проводам электричество попадает в вашу квартиру, в розетки! Теперь вы можете включить свет, компьютер или зарядить телефон. Весь этот путь занимает доли секунды!',
    title: '6. Твой дом'
  },
  {
    speaker: 'beaver',
    text: 'Отлично! Теперь вы знаете весь путь электричества от электростанции до вашей розетки. А теперь давайте проверим, как вы запомнили эту цепочку!',
    title: 'Готовы к испытанию?'
  }
];

export default function TheorySection({ onComplete }: TheorySectionProps) {
  const [currentStep, setCurrentStep] = useState(0);

  const handleNext = () => {
    if (currentStep < dialogueSteps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      onComplete();
    }
  };

  const progress = ((currentStep + 1) / dialogueSteps.length) * 100;
  const currentDialogue = dialogueSteps[currentStep];

  return (
    <div className="min-h-screen flex items-center justify-center p-8">
      <div className="max-w-6xl w-full">
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
          <div className="bg-gradient-to-r from-orange-500 to-amber-500 h-3">
            <div
              className="bg-gradient-to-r from-green-400 to-green-600 h-full transition-all duration-500"
              style={{ width: `${progress}%` }}
            />
          </div>

          <div className="p-12">
            {currentDialogue.title && (
              <h2 className="text-3xl font-bold text-blue-600 mb-6 text-center">
                {currentDialogue.title}
              </h2>
            )}

            <div className="flex items-start gap-8 mb-8">
              {currentDialogue.speaker === 'beaver' ? (
                <>
                  <img
                    src="862ab574-8210-4d60-bcec-787ee83788cf.jpg"
                    alt="Бобр"
                    className="w-48 h-48 object-contain flex-shrink-0"
                  />
                  <div className="flex-1">
                    <div className="bg-blue-50 rounded-2xl p-8 relative">
                      <div className="absolute -left-4 top-8 w-8 h-8 bg-blue-50 transform rotate-45" />
                      <p className="text-xl text-gray-800 leading-relaxed">
                        {currentDialogue.text}
                      </p>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div className="flex-1">
                    <div className="bg-yellow-50 rounded-2xl p-8 relative border-2 border-yellow-300">
                      <div className="absolute -right-4 top-8 w-8 h-8 bg-yellow-50 transform rotate-45 border-r-2 border-t-2 border-yellow-300" />
                      <p className="text-xl text-gray-800 leading-relaxed font-medium">
                        {currentDialogue.text}
                      </p>
                    </div>
                  </div>
                  <img
                    src={currentDialogue.childImage}
                    alt="Ребенок"
                    className="w-48 h-48 object-contain flex-shrink-0"
                  />
                </>
              )}
            </div>

            <div className="flex justify-between items-center">
              <div className="text-sm text-gray-500">
                Шаг {currentStep + 1} из {dialogueSteps.length}
              </div>

              <button
                onClick={handleNext}
                className="bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-bold text-xl py-4 px-8 rounded-full shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center gap-2"
              >
                {currentStep < dialogueSteps.length - 1 ? 'Дальше' : 'К игре!'}
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
