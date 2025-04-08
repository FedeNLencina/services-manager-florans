import React from "react";

interface ModalInputProps {
  label: string;
}

export const ModalInput = ({ label }: ModalInputProps) => {
  return (
    <div>
      <label for="recipient-name" className="col-form-label">
        {label}:
      </label>
      <input type="text" className="form-control" id="recipient-name" />
    </div>
  );
};
