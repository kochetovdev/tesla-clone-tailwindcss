interface Props {
  title: string;
}

const TopSection = ({ title }: Props) => {
  return (
    <article className="flex flex-col absolute top-20 left-[50%] translate-x-[-50%]">
      <h1 className="text-[40px] m-auto font-semibold">{title}</h1>
      <p className="whitespace-nowrap pt-1 text-[16px] text-[#e3e5e1] font-semibold">
        Order Online{" "}
        <span className="underline underline-offset-4 hover:decoration-2 cursor-pointer text-white">
          Touchless Delivery
        </span>
      </p>
    </article>
  );
};

export default TopSection;
