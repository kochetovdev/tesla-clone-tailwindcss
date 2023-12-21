import { IoChevronDownSharp } from "react-icons/io5";

interface Props {
  showArrow: boolean;
}

const ButtonSection = ({ showArrow }: Props) => {
  return (
    <>
      <article className="absolute bottom-[80px] left-[50%] translate-x-[-50%] flex flex-col md:flex-row md:space-x-4">
        <button className="uppercase bg-gray-800 w-96 text-white rounded-full h-10 md:w-60">
          Custom Order
        </button>
        <button className="mt-2 uppercase bg-slate-200 w-96 text-gray-900 rounded-full h-10 md:mt-0 md:w-60">
          Custom Order
        </button>
      </article>
      {showArrow && (
        <div className="absolute left-[50%] translate-x-[-50%] bottom-3">
          <IoChevronDownSharp className="w-8 h-8 text-white animate-bounce cursor-pointer" />
        </div>
      )}
    </>
  );
};

export default ButtonSection;
