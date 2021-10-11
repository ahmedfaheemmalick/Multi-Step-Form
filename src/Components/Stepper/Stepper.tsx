import { useState } from "react";
import { Stepper, Step, StepLabel } from "@material-ui/core";
import PersonalInfo from "../PersonalInfo/PersonalInfo";
import AccountInfo from "../AccountInfo/AccountInfo";
import ReviewInfo from "../ReviewInfo/ReviewInfo";

const steps = [
  "Personal Information",
  "Account Information",
  "Review Your Information",
];

const StepperComponent = () => {
  const formValues = useState({
    firstName: "",
    lastName: "",
    email: "",
    userName: "",
    password: "",
    confirmPassword: "",
  });
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () =>
    setActiveStep((prevActiveStep) => prevActiveStep + 1);

  const handleBack = () =>
    setActiveStep((prevActiveStep) => prevActiveStep - 1);

  const handleReset = () => setActiveStep(0);

  const getStepContent = (stepIndex: number) => {
    switch (stepIndex) {
      case 0:
        return <PersonalInfo formValues={formValues} handleNext={handleNext} />;
      case 1:
        return (
          <AccountInfo
            formValues={formValues}
            handleNext={handleNext}
            handleBack={handleBack}
          />
        );
      case 2:
        return (
          <ReviewInfo
            formValues={formValues}
            handleReset={handleReset}
            handleBack={handleBack}
          />
        );
      default:
        return "Unknown stepIndex";
    }
  };

  return (
    <div>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <div>{getStepContent(activeStep)}</div>
    </div>
  );
};

export default StepperComponent;
