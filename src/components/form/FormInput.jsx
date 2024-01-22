const FormInput = ({ label, name, type, defaultValue, size }) => {
  return (
    <div className="form-control">
      <label className="label capitalize">
        <span className="label-text">{label}</span>
      </label>

      <input
        type={type}
        name={name}
        placeholder="Type here"
        defaultValue={defaultValue}
        className={`input input-bordered ${size}`}
        autoComplete="false"
      />
    </div>
  );
};

export default FormInput;
