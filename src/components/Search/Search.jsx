import { useEffect, useState } from "react";

//Redux
import { useDispatch, useSelector } from "react-redux";

import {
  Grid,
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
  FormGroup,
  FormControlLabel,
  Checkbox,
  Paper,
  InputBase,
  Button,
  IconButton,
} from "@mui/material";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import SearchIcon from "@mui/icons-material/Search";

import SearchCard from "./SearchCard";

import styles from "./Search.module.css";

import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

//Slices
import { getMetaCvUsers } from "../../redux/slices/metaCvUsers";
import { incrementFilterSkipValue } from "../../redux/slices/filterSlice";

const Search = () => {
  const [skip, setSkip] = useState(0);
  const [limit, setLimit] = useState(10);
  const [userinfo, setUserInfo] = useState({
    locations: [],
    workingPreferences: [],
    workingStatus: [],
    language: [],
  });
  const [searcableText, setSearchableText] = useState("");
  const [filter, setFilter] = useState();
  const dispatch = useDispatch();
  const metaCvUsersState = useSelector((state) => state.metaCvUsers.result);
  const filtersState = useSelector((state) => state.filters);

  useEffect(() => {
    incrementFilterSkipValue(10);
    if (metaCvUsersState && metaCvUsersState.length < filtersState.skip) return;
    dispatch(getMetaCvUsers({ skip: skip, limit: limit }));
  }, [dispatch, setSkip, skip]);

  const handleFilterByName = () => {
    setFilter({ name: searcableText });
  };

  const handleChangeLocations = (e) => {
    const { value, checked } = e.target;
    const { locations } = userinfo;

    if (checked) {
      setUserInfo({
        locations: [...locations, value],
        workingPreferences: [],
        workingStatus: [],
        language: [],
      });
    } else {
      setUserInfo({
        locations: locations.filter((e) => e !== value),
        workingPreferences: [],
        workingStatus: [],
        language: [],
      });
    }

    console.log(userinfo);
  };

  const handleChangeOperations = (e) => {
    const { value, checked } = e.target;
    const { workingPreferences } = userinfo;

    if (checked) {
      setUserInfo({
        workingPreferences: [...workingPreferences, value],
        locations: [],
        workingStatus: [],
        language: [],
      });
    } else {
      setUserInfo({
        workingPreferences: workingPreferences.filter((e) => e !== value),
        locations: [],
        workingStatus: [],
        language: [],
      });
    }
  };

  const handleChangeStatus = (e) => {
    const { value, checked } = e.target;
    const { workingStatus } = userinfo;

    if (checked) {
      setUserInfo({
        workingStatus: [...workingStatus, value],
        locations: [],
        workingPreferences: [],
        language: [],
      });
    } else {
      setUserInfo({
        workingStatus: workingStatus.filter((e) => e !== value),
        locations: [],
        workingPreferences: [],
        language: [],
      });
    }
  };

  const handleChangeLanguage = (e) => {
    const { value, checked } = e.target;
    const { language } = userinfo;

    if (checked) {
      setUserInfo({
        language: [...language, value],
        locations: [],
        workingPreferences: [],
        workingStatus: [],
      });
    } else {
      setUserInfo({
        language: language.filter((e) => e !== value),
        locations: [],
        workingPreferences: [],
        workingStatus: [],
      });
    }
  };

  return (
    metaCvUsersState && (
      <Grid container className={styles.container}>
        <Grid item xs={12} sx={12} md={3} lg={3} xl={3}>
          <Accordion sx={{ marginTop: "3rem" }}>
            <AccordionSummary
              sx={{ color: "#fff", backgroundColor: "#09134D" }}
              expandIcon={<ExpandMoreIcon sx={{ color: "#fff" }} />}
            >
              <Typography>Location</Typography>
            </AccordionSummary>
            <AccordionDetails
              sx={{
                overflowY: "scroll",
                maxHeight: "250px",
                position: "relative",
              }}
            >
              <Paper
                component="form"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  width: "100%",
                  position: "sticky",
                  top: 0,
                  left: 0,

                  zIndex: 1,
                }}
              >
                <IconButton sx={{ p: "10px" }} aria-label="menu">
                  <SearchIcon />
                </IconButton>
                <InputBase
                  sx={{ ml: 1, flex: 1 }}
                  placeholder="Title Skills Search"
                  inputProps={{ "aria-label": "search google maps" }}
                />
              </Paper>

              <FormGroup sx={{ height: "500px" }}>
                <FormControlLabel
                  onChange={handleChangeLocations}
                  control={<Checkbox />}
                  label="İzmir"
                  value={"izmir"}
                />
                <FormControlLabel
                  onChange={handleChangeLocations}
                  control={<Checkbox />}
                  label="Ankara"
                  value={"ankara"}
                />
                <FormControlLabel
                  onChange={handleChangeLocations}
                  control={<Checkbox />}
                  label="İstanbul"
                  value={"istanbul"}
                />
              </FormGroup>
            </AccordionDetails>
          </Accordion>
          <Accordion sx={{ marginTop: "1rem" }}>
            <AccordionSummary
              sx={{ color: "#fff", backgroundColor: "#09134D" }}
              expandIcon={<ExpandMoreIcon sx={{ color: "#fff" }} />}
            >
              <Typography>Operation</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <FormGroup>
                <FormControlLabel
                  onChange={handleChangeOperations}
                  control={<Checkbox />}
                  label="Remote-First"
                  value="remote-first"
                />
                <FormControlLabel
                  required
                  onChange={handleChangeOperations}
                  control={<Checkbox />}
                  label="Office-Occasional"
                  value={"office-occasional"}
                />
                <FormControlLabel
                  required
                  onChange={handleChangeOperations}
                  control={<Checkbox />}
                  label="Office-First"
                  value="office-first"
                />
              </FormGroup>
            </AccordionDetails>
          </Accordion>
          <Accordion sx={{ marginTop: "1rem" }}>
            <AccordionSummary
              sx={{ color: "#fff", backgroundColor: "#09134D" }}
              expandIcon={<ExpandMoreIcon sx={{ color: "#fff" }} />}
            >
              <Typography>Working Status</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <FormGroup>
                <FormControlLabel
                  onChange={handleChangeStatus}
                  control={<Checkbox />}
                  label="Working"
                  value={"working"}
                />
                <FormControlLabel
                  onChange={handleChangeStatus}
                  control={<Checkbox />}
                  label="Open To Work"
                  value="open to work"
                />
              </FormGroup>
            </AccordionDetails>
          </Accordion>
          <Accordion sx={{ marginTop: "1rem" }}>
            <AccordionSummary
              sx={{ color: "#fff", backgroundColor: "#09134D" }}
              expandIcon={<ExpandMoreIcon sx={{ color: "#fff" }} />}
            >
              <Typography>Meta CV Update Date</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <FormGroup>
                <FormControlLabel control={<Checkbox />} label="Working" />
                <FormControlLabel control={<Checkbox />} label="Open To Work" />
              </FormGroup>
            </AccordionDetails>
          </Accordion>
          <Accordion sx={{ marginTop: "1rem" }}>
            <AccordionSummary
              sx={{ color: "#fff", backgroundColor: "#09134D" }}
              expandIcon={<ExpandMoreIcon sx={{ color: "#fff" }} />}
            >
              <Typography>Language</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <FormGroup>
                <FormControlLabel
                  onChange={handleChangeLanguage}
                  control={<Checkbox />}
                  label="Turkish"
                  value="Turkish"
                />
                <FormControlLabel
                  required
                  onChange={handleChangeLanguage}
                  control={<Checkbox />}
                  label="English"
                  value="English"
                />
              </FormGroup>
            </AccordionDetails>
          </Accordion>
          <Accordion sx={{ marginTop: "1rem" }}>
            <AccordionSummary
              sx={{ color: "#fff", backgroundColor: "#09134D" }}
              expandIcon={<ExpandMoreIcon sx={{ color: "#fff" }} />}
            >
              <Typography>Education</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <FormGroup>
                <FormControlLabel control={<Checkbox />} label="Working" />
                <FormControlLabel
                  required
                  control={<Checkbox />}
                  label="Open To Work"
                />
              </FormGroup>
            </AccordionDetails>
          </Accordion>
          <Accordion sx={{ marginTop: "1rem" }}>
            <AccordionSummary
              sx={{ color: "#fff", backgroundColor: "#09134D" }}
              expandIcon={<ExpandMoreIcon sx={{ color: "#fff" }} />}
            >
              <Typography>Professional Order</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <FormGroup>
                <FormControlLabel control={<Checkbox />} label="Working" />
                <FormControlLabel
                  required
                  control={<Checkbox />}
                  label="Open To Work"
                />
              </FormGroup>
            </AccordionDetails>
          </Accordion>
        </Grid>
        <Grid item xs={12} sm={12} md={9} lg={9} xl={9}>
          <Paper
            component="form"
            sx={{
              display: "flex",
              alignItems: "center",
              width: "90%",
              marginTop: "3rem",
              marginLeft: "1rem",
              height: "3rem",
            }}
          >
            <IconButton sx={{ p: "10px" }} aria-label="menu">
              <SearchIcon />
            </IconButton>
            <InputBase
              onChange={(e) => setSearchableText(e.target.value.toLowerCase())}
              sx={{ ml: 1, flex: 1 }}
              placeholder="Title Skills Search"
              inputProps={{ "aria-label": "search google maps" }}
            />
            <Button
              onClick={handleFilterByName}
              variant="contained"
              sx={{
                margin: 0,
                padding: "1rem",
                height: "100%",
                backgroundColor: "#EFEFEF",
                color: "#000",
                "&:hover": {
                  backgroundColor: "#09134D",
                  color: "#EFEFEF",
                },
              }}
            >
              Search
            </Button>
          </Paper>

          {metaCvUsersState
            .filter((val) =>
              `${val.name} ${val.surname}`
                .toLowerCase()
                .includes(filter?.name ?? "")
            )
            .filter((val) => val.location.includes(userinfo?.locations ?? ""))
            .filter((val) =>
              val.workingPreferences.includes(
                userinfo?.workingPreferences ?? ""
              )
            )
            .filter((val) =>
              val.workingStatus.includes(userinfo?.workingStatus ?? "")
            )
            .filter((val) => val.languages.includes(userinfo?.language ?? ""))
            .map((value, index) => {
              return <SearchCard key={index} {...value} />;
            })}

          {metaCvUsersState.length < skip ? null : (
            <IconButton
              onClick={() => {
                setSkip(skip + 10);
              }}
              sx={{
                width: "92.5%",
                height: "62px",
                backgroundColor: "#09134D",
                borderRadius: "5px",
                color: "#fff",
                marginLeft: "1rem",
                padding: "1rem",
                marginTop: "1rem",
              }}
            >
              <Typography>Show More</Typography>
              <KeyboardArrowDownIcon sx={{ color: "#fff" }} />
            </IconButton>
          )}
        </Grid>
      </Grid>
    )
  );
};

export default Search;
