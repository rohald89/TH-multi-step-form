import { Button } from './ui/Button';

type FormNavigationProps = {
  isFirstStep: boolean;
  isLastStep: boolean;
  back: () => void;
  next: () => void;
};

const FormNavigation = ({
  isFirstStep,
  isLastStep,
  back,
  next,
}: FormNavigationProps) => {
  return (
    <div className="flex gap-4">
      {isFirstStep ? null : (
        <Button variant="secondary" onClick={back} type="button">
          Back
        </Button>
      )}
      {isLastStep ? (
        <Button variant="submit" type="submit" form="about">
          Submit
        </Button>
      ) : (
        <Button onClick={next} type="button">
          Next
        </Button>
      )}
    </div>
  );
};

export default FormNavigation;
