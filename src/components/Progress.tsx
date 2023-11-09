type ProgressProps = {
  totalSteps: number;
  currentStepIndex: number;
};

const Progress = ({ currentStepIndex, totalSteps }: ProgressProps) => {
  return (
    <div className="flex justify-center items-center mb-8">
      <div className="w-full h-2 bg-secondary rounded-full">
        <div
          className="h-full bg-progress-fg rounded-full"
          style={{
            width: `${((currentStepIndex + 1) / totalSteps) * 100}%`,
          }}
        ></div>
      </div>
    </div>
  );
};

export default Progress;
