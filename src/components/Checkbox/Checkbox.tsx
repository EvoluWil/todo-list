import { InputHTMLAttributes } from "react";
import "./Checkbox.css"

type InputWithoutType = Omit<InputHTMLAttributes<HTMLInputElement>, 'type'>

export function Checkbox(props: InputWithoutType) {
  return (
    <input {...props} type='checkbox' className="checkbox"/>
  )
}
