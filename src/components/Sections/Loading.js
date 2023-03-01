import React from "react";
import { InfinitySpin } from "react-loader-spinner";
import { colors } from "../../utils/constants";

const LoadingSection = () => {
  return (
    <div className="flex items-center justify-center w-full h-full bg-background-white dark:bg-background-dark ">
      <InfinitySpin width="200" height="300" color={colors.primary} />
    </div>
  );
};

export default LoadingSection;
