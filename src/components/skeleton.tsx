import { twMerge } from "tailwind-merge";
import { mergeUI } from "../utils/helpers";
import clsx from "clsx";

export interface ISkeletonUI {
  base?: string;
  background?: string;
  rounded?: string;
}

export interface ISkeletonProps {
  className?: string;
  ui?: ISkeletonUI;
}

const Skeleton = ({ className, ui }: ISkeletonProps) => {
  const defaultUI: ISkeletonUI = {
    base: "animate-pulse",
    background: "bg-gray-100 dark:bg-gray-800",
    rounded: "rounded-md",
  };

  ui = mergeUI<ISkeletonUI>(defaultUI, ui);

  return <div className={twMerge(clsx(ui.base, ui.background, ui.rounded), className)}></div>;
};

export default Skeleton;
