import partener1 from "../../public/images/partener (1).png";
import partener2 from "../../public/images/partener (2).png";
import partener3 from "../../public/images/partener (3).png";
import partener4 from "../../public/images/partener (4).png";

type partenerType = {
  id: number;
  image: string;
};

const partenersData: partenerType[] = [
  {
    id: 1,
    image: partener1.src,
  },
  {
    id: 2,
    image: partener2.src,
  },
  {
    id: 3,
    image: partener3.src,
  },
  {
    id: 4,
    image: partener4.src,
  },
];

export default partenersData;
