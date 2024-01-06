import React from "react";

export default function FormInput({ label, name, type, defaultValue }) {
  return (
    <div className="form-control">
      <label className="label">
        <span className="label-text">{label}</span>
      </label>

      <input
        type={type}
        name={name}
        placeholder="Type here"
        defaultValue={defaultValue}
        className="input input-bordered"
      />
    </div>
  );
}