import { type FormEvent, useState } from 'react';
import FormStep from './components/FormStep';
import { useMultiStep } from './hooks/useMultiStep';
import Progress from './components/Progress';
import FormNavigation from './components/FormNavigation';

type FormData = {
  name: string;
  email: string;
  phone: string;
};

const INITIAL_FORM_DATA = {
  name: '',
  email: '',
  phone: '',
};

function App() {
  const [data, setData] = useState<FormData>(INITIAL_FORM_DATA);
  const { steps, currentStepIndex, step, isFirstStep, isLastStep, back, next } =
    useMultiStep(
      // return array of FormStep components for each property in data
      Object.keys(data).map((property, i) => {
        return (
          <FormStep
            key={i}
            field={property}
            {...data}
            updateFields={handleInputChange}
          />
        );
      })
    );

  function handleInputChange(fields: Partial<FormData>) {
    setData((prev) => {
      return { ...prev, ...fields };
    });
  }

  const handleSubmit = (e: FormEvent) => {
    console.log(data);
    e.preventDefault();
  };

  return (
    <main className="bg-background flex items-center justify-center h-screen">
      <div className="bg-white rounded-md max-w-sm p-6">
        <form onSubmit={handleSubmit} id="about">
          <h1 className="text-xl font-semibold text-primary mb-3">
            Tell us a little about yourself
          </h1>
          <Progress
            totalSteps={steps.length}
            currentStepIndex={currentStepIndex}
          />
          {step}
        </form>
        <FormNavigation
          isFirstStep={isFirstStep}
          isLastStep={isLastStep}
          back={back}
          next={next}
        />
      </div>
    </main>
  );
}

export default App;
