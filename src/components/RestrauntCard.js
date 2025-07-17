import { IMG_CDN_URL } from "../constants";
const RestrauntCard = ({ restraunt }) => {
  const { name, cuisines, cloudinaryImageId, avgRating, costForTwo } =
    restraunt;
  return (
    <div className="card">
      <img src={`${IMG_CDN_URL}${cloudinaryImageId}`} alt="restraunt-img" />
      <h2>{name}</h2>
      <h3>{cuisines.join(", ")}</h3>
      <h4>{avgRating} Star</h4>
      <p>{costForTwo}</p>
    </div>
  );
};
export default RestrauntCard;
