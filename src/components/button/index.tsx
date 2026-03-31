import type { ComponentProps } from "react";
import { Icon } from "../icon";
import type { VariantProps } from "class-variance-authority";
import { buttonVariants } from "./button-variants";
import { buttonIconVariants } from "./button-icon-variants";
import { buttonTextVariants } from "./button-text-variants";
import { Text } from "../text";
import SpinnerIcon from "@/assets/icons/spinner.svg?react";

interface ButtonProps
  extends
    Omit<ComponentProps<"button">, "size" | "disabled">,
    VariantProps<typeof buttonVariants> {
  icon?: ComponentProps<typeof Icon>["svg"];
  handling?: boolean;
}

export function Button({
  variant,
  size,
  disabled,
  className,
  children,
  icon,
  handling,
  ...props
}: ButtonProps) {
  return (
    <button
      className={buttonVariants({
        variant,
        size,
        disabled,
        className,
        handling,
      })}
      {...props}
    >
      {icon && (
        <Icon
          svg={handling ? SpinnerIcon : icon}
          animate={handling}
          className={buttonIconVariants({ variant, size })}
        />
      )}
      <Text
        variant={"body-md-bold"}
        className={buttonTextVariants({ variant })}
      >
        {children}
      </Text>
    </button>
  );
}
