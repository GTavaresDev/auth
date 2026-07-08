import { ComponentProps } from "react";
import type { FC } from "react";

type ButtonProps = ComponentProps<"button"> & {
  text: string;
};

const Button: FC<ButtonProps> = ({ text, ...rest }) => {
  return (
    <button
      {...rest}
      type={rest.type ?? "submit"}
      className="px-4 py-1.5 rounded-xl border border-zinc-900 bg-white hover:bg-gray-50 text-zinc-800 text-sm font-medium transition-colors duration-150"
    >
      {text}
    </button>
  );
};

export default Button;
