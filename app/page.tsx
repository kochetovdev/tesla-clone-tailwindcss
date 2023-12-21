import Accessories from "./componenst/Accessories";
import CarModel from "./componenst/CarModel";

export default function Home() {
  return (
    <article>
      <div className="relative">
        <CarModel
          title="Model Y"
          background="background-model-Y"
          showArrow={false}
        />
      </div>
      <Accessories />
    </article>
  );
}
