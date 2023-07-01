import { Fragment } from "react"
import { NavBarInicio } from "../components/NavBarInicio"
import '../styles/Nav.css';
import { Carousel } from "../components/Carousel";
import { Description } from "../components/Description";
import { Services } from "../components/Services";

export const Principal = () => {
  return (
    <>
    <NavBarInicio />
    {/* <Carousel /> */}
    <Description />
    <Services />
    </>
  )
}
