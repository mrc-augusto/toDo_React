import type { ComponentProps } from "react";
import { Icon } from "../icon";
import { buttonIconVariants } from "./button-icon-variants";
import type { VariantProps } from "class-variance-authority";
import { buttonIconIconVariants } from "./button-icon-icon-variants";
import { Skeleton } from "../skeleton";
import SpinnerIcon from "@/assets/icons/spinner.svg?react";

interface ButtonIconProps
  extends
    VariantProps<typeof buttonIconVariants>,
    Omit<ComponentProps<"button">, "size" | "disabled"> {
  icon: ComponentProps<typeof Icon>["svg"];
  loading?: boolean;
  handling?: boolean;
}

export function ButtonIcon({
  variant,
  size,
  disabled,
  className,
  icon,
  loading,
  handling,
  ...props
}: ButtonIconProps) {
  if (loading) {
    return (
      <Skeleton
        rounded="sm"
        className={buttonIconVariants({
          variant: "none",
          size,
          className,
        })}
      />
    );
  }
  return (
    <button
      className={buttonIconVariants({
        variant,
        size,
        disabled,
        className,
        handling,
      })}
      {...props}
    >
      <Icon
        svg={handling ? SpinnerIcon : icon}
        animate={handling}
        className={buttonIconIconVariants({ variant, size })}
      />
    </button>
  );
}
