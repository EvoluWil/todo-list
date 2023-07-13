import { ButtonHTMLAttributes } from "react";
import "./Button.css"

export function Button(props: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button className="button" {...props} />
  )
}