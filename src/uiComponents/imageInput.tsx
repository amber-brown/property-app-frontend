import "./input.css";

interface ImageInputProps {
  inputName: string;
  errorMsg?: string;
  handleChange: (value: File | undefined) => void;
}

const ImageInput = ({
  inputName,
  errorMsg = "",
  handleChange,
}: ImageInputProps) => {
  return (
    <div className="field-wrapper">
      <label htmlFor={inputName}>Upload Image</label>
      <input
        name={inputName}
        type="file"
        accept="image/*"
        onChange={(event) =>
          handleChange(event.currentTarget.files?.[0] ?? undefined)
        }
      />
      <p className="field-error-message">{errorMsg}</p>
    </div>
  );
};

export default ImageInput;
