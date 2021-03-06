import { CloseButton } from "../../CloseButton";
import success from "../../../assets/success.svg";

interface FeedbackSucsessStepProps {
  onFeedbakRestartRequested: () => void;
}

export function FeedbackSucsessStep({
  onFeedbakRestartRequested,
}: FeedbackSucsessStepProps) {
  return (
    <>
      <header>
        <CloseButton />
      </header>
      <div className="flex flex-col items-center py-10 w-[304px]">
        <img src={success} alt="Imagem de conslusão do feedback" />
        <span className="text-xl mt-2">Agradecemos o feedback!</span>
        <button
          type="button"
          onClick={onFeedbakRestartRequested}
          className="py-2 px-6 mt-6 bg-zinc-800 rounded-md border-transparent text-sm leading-6 bg-zinc-700 transition-colors focus:border-brand-500 focus:ring-brand-500 focus:ring-1 focus:outline-none "
        >
          Quero enviar outro
        </button>
      </div>
    </>
  );
}
