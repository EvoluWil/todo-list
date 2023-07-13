import { InputHTMLAttributes } from "react";
import "./Input.css"

type InputProps = {
  label: string
  id: string
} & InputHTMLAttributes<HTMLInputElement>

export function Input({label, id, ...rest}: InputProps) {

  return (
    <label htmlFor={id}>
      {label}
      <input className="input" id={id} {...rest} />
    </label>
  )
}

