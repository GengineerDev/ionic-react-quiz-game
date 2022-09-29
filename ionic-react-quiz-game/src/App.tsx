import { 
  IonApp, 
  setupIonicReact, 
  useIonAlert
} from '@ionic/react';


/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

/* Components */
import Header from './components/Header';
import Main from './components/Main';
import Result from './components/Results';
import { useRef, useState } from 'react';

setupIonicReact();

const App: React.FC = () => {

const [showResult, setShowResult] = useState(false);
const [score, setScore] = useState(0);

const firstAnswerRef = useRef<HTMLIonInputElement>(null);
const secondAnswerRef = useRef<HTMLIonInputElement>(null);
const thirdAnswerRef = useRef<HTMLIonInputElement>(null);
const fourthAnswerRef = useRef<HTMLIonInputElement>(null);
const fifthAnswerRef = useRef<HTMLIonInputElement>(null);

const [presentAlert] = useIonAlert();

let count = 0;
function verifyAnswers() {
  const firstAnswer = firstAnswerRef.current!.value;
  const secondAnswer = secondAnswerRef.current!.value;
  const thirdAnswer = thirdAnswerRef.current!.value;
  const fourthAnswer = fourthAnswerRef.current!.value;
  const fifthAnswer = fifthAnswerRef.current!.value;

  let quizAnswers = [firstAnswer, secondAnswer, thirdAnswer, fourthAnswer, fifthAnswer];
  const answers = ['3', '4', 'Philippines', 'Facebook', 'Ionic']

  if (!firstAnswer || 
    !secondAnswer || 
    !thirdAnswer || 
    !fourthAnswer || 
    !fifthAnswer) {
      presentAlert({
        header: 'Warning',
        subHeader: 'Make sure to write valid answers.',
        message: 'Do not leave blank fields!',
        buttons: ['OK'],
      });
      setShowResult(false);
      return; 
    }     
  
  for (let i = 0; i < quizAnswers.length; i++) {
    if (quizAnswers[i] === answers [i])
      setScore(prevCount => prevCount + 1);
  }

  setShowResult(true);
}

console.log(score);

return (
    <IonApp>
      <Header />
      <Main 
        verifyAnswers={verifyAnswers}
        firstAnswerRef={firstAnswerRef}
        secondAnswerRef={secondAnswerRef}
        thirdAnswerRef={thirdAnswerRef}
        fourthAnswerRef={fourthAnswerRef}
        fifthAnswerRef={fifthAnswerRef}
      />
      {showResult && <Result />}
    </IonApp>
  );
};



export default App;
