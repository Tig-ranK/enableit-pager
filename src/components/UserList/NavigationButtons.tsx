import { FC } from "react";

interface Props {
   onPrevious: () => void;
   onNext: () => void;
   isPreviousDisabled: boolean;
}

export const NavigationButtons: FC<Props> = ({
   onPrevious,
   onNext,
   isPreviousDisabled = false,
}) => (
   <div className="button-wrapper">
      <button
         className="button"
         onClick={onPrevious}
         disabled={isPreviousDisabled}
      >
         Previous
      </button>
      <button className="button" onClick={onNext}>
         Next
      </button>
   </div>
);
