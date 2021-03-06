import Home from "./views/Home.vue";
import Device from "./views/Device.vue";
import Changelog from "./views/Changelog.vue";

// eslint-disable-next-line import/prefer-default-export
export const routes = [
  { path: "/", component: Home, name: "home" },
  { path: "/changelog", component: Changelog, name: "changelog" },
  {
    path: "/:codename",
    component: Device,
    name: "device",
    children: [
      { path: ":filename?", name: "filename" },
    ],
  },
];
