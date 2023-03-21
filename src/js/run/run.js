import { navbarMenuEvents } from "../navbarButtons/navBarButtonsEvents.js";
import { responsiveActions } from "../responsive/responsive.js";
import { createNavbarMenu } from "../navbarMenu/navbarMenu.js";
import { changeVideo, rotateVideo } from "../carrousel/carrousel.js";
import { firstPopup } from "../popup/popup.js";

createNavbarMenu()
navbarMenuEvents()
firstPopup()
changeVideo()
// rotateVideo()
responsiveActions()