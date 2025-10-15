import { useState } from 'react';
import WelcomeScreen from './components/WelcomeScreen';
import TheorySection from './components/TheorySection';
import MiniGame from './components/MiniGame';
import CompletionScreen from './components/CompletionScreen';

type GameStage = 'welcome' | 'theory' | 'game' | 'completion';

function App() {
  const [stage, setStage] = useState<GameStage>('welcome');

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-400 via-blue-500 to-cyan-500">
      {stage === 'welcome' && <WelcomeScreen onStart={() => setStage('theory')} />}
      {stage === 'theory' && <TheorySection onComplete={() => setStage('game')} />}
      {stage === 'game' && <MiniGame onComplete={() => setStage('completion')} />}
      {stage === 'completion' && <CompletionScreen onRestart={() => setStage('welcome')} />}
    </div>
  );
}

export default App;
