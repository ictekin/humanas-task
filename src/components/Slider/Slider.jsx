//React-Slick and Styles
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

//Components
import SliderCard from "./SliderCard";

//Redux
import { useSelector } from "react-redux";

const CustomSlider = (props) => {
  const userDetailState = useSelector(
    (state) => state.userDetail.result.userDetail
  );
  return (
    <Slider {...props.settings}>
      {userDetailState?.charts.map((value, index) => {
        return (
          <SliderCard
            key={value.id}
            color={{
              primary: value.bgColor,
              secondary: value.innerBgColor,
              white: "#fff",
            }}
            text={value.title}
            percentage={value.rate}
          />
        );
      })}
    </Slider>
  );
};

export default CustomSlider;
