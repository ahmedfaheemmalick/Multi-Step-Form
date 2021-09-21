import { Typography } from "@material-ui/core";
import StepperComponent from "./Components/Stepper/Stepper";
import styles from './App.module.css'

const App = () => {
  return (
    <div>
      <Typography className={styles.title} variant="h5">
        MULTI STEP FORM
      </Typography>
      <StepperComponent />
    </div>
  );
};

export default App;
