//Material-UI
import { Box, Typography, Grid } from "@mui/material";

//Styles
import styles from "./Content.module.css";

//React-Slick-Styles
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

//React-circular-progressbar Styles
import "react-circular-progressbar/dist/styles.css";

//Components
import CustomSlider from "./Slider/Slider";
import CardContent from "./Content/ContentCard";

//Redux
import { useSelector } from "react-redux";

const Content = () => {
  const userDetailState = useSelector(
    (state) => state.userDetail.result?.userDetail
  );

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div className={styles.container}>
        <Grid sx={{ marginLeft: "3rem" }}>
          <CustomSlider settings={settings} />
        </Grid>
        <Box className={styles.content}>
          <Typography sx={{ marginTop: "2rem" }}>
            {userDetailState.name + " " + userDetailState.surname}
          </Typography>
          <Typography>Meta CV</Typography>
          {userDetailState?.motivations.map((value, index) => {
            return (
              <CardContent
                key={index}
                title={value.name}
                percentage={value.rate}
                description={value.description}
              />
            );
          })}
        </Box>
      </div>
    </>
  );
};

export default Content;
