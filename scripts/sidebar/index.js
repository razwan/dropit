import "./style.scss";

import { Fragment } from "@wordpress/element";
import { registerPlugin } from "@wordpress/plugins";

import SidebarUnsplash from "./components/sidebar/unsplash";
import SidebarGiphy from "./components/sidebar/giphy";
import MenuItemUnsplash from "./components/menu-item/unsplash";
import MenuItemGiphy from "./components/menu-item/giphy";

const Dropit = () => (
  <Fragment>
    <SidebarUnsplash />
    <MenuItemUnsplash />
   <SidebarGiphy />
   <MenuItemGiphy />
 </Fragment>
);


registerPlugin("dropit", {
  render: Dropit
});

