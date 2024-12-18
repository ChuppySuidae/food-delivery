import Carousel from "./carousel";
import Introduction from "./introduction";
import MenuChild from "./menu-child";
import ShareOpinion from "./share-opinion";
import Welcome from "./welcome";

function Menu() {
  return (
    <div>
      <Introduction />
      <Welcome />
      <MenuChild />
      <Carousel />
      <ShareOpinion />
    </div>
  );
}
export default Menu;
