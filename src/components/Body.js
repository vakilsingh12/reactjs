import RestrauntCard from "./RestrauntCard";
import { restrauntList } from "../constants";
const Body = () => {
  return (
    <div className="restrauntList">
      {restrauntList.map((restraunt) => (
        <RestrauntCard restraunt={restraunt?.info} key={restraunt?.info?.id} />
      ))}
    </div>
  );
};
export default Body;
