type FormStepProps = {
  field: string;
  updateFields: (fields: Partial<FormData>) => void;
};

const FormStep = ({ field, updateFields }: FormStepProps) => {
  return (
    <div className="flex flex-col gap-1 mb-3">
      <label htmlFor={field} className="text-primary font-light capitalize">
        {field}:
      </label>
      <input
        className="w-full p-2 focus-visible:outline-none border border-secondary rounded-[5px] ring-offset-white focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
        type={field === 'email' ? 'email' : field === 'phone' ? 'tel' : 'text'}
        id={field}
        name={field}
        required
        onChange={(e) => updateFields({ [field]: e.target.value })}
      />
    </div>
  );
};

export default FormStep;
