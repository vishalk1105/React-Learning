import { useEffect, useState } from "react";
import { MENU_API } from "../utils/constants";
const useResMenu = (resId) => {
  const [resMenu, setResMenu] = useState([]);

  useEffect(() => {
    fetchMenu();
  }, []);
  const fetchMenu = async () => {
    const menu = await fetch(MENU_API + resId);
    const json = await menu.json();
    setResMenu(json.data);
  };
  return resMenu;
};

export default useResMenu;
