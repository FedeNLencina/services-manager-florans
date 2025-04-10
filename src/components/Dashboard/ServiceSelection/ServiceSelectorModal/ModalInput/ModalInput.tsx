interface ModalInputProps {
  label: string;
  setValue?: Function;
}

export const ModalInput = ({ label, setValue }: ModalInputProps) => {
  return (
    <div>
      <label htmlFor="recipient-name" className="col-form-label">
        {label}:
      </label>
      <input
        type="text"
        className="form-control"
        id="recipient-name"
        onChange={(e) => {
          e?.preventDefault;
          setValue ? setValue(parseInt(e.target.value)) : undefined;
        }}
      />
    </div>
  );
};
