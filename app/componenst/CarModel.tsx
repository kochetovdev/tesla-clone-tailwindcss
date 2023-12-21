import ButtonSection from "./ButtonSection";
import TopSection from "./TopSection";

interface Props {
  title: string
  background?: string;
  showArrow: boolean;
}

const CarModel = ({title, background, showArrow }: Props) => {
  return (
    <article className={background}>
      <TopSection title={title} />
      <ButtonSection showArrow={showArrow} />
    </article>
  );
};

export default CarModel;
