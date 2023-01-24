import {
  GrHomeRounded,
  GrList,
  GrCreditCard,
  GrUserManager,
  GrUserSettings,
} from "react-icons/gr";
import { MdProductionQuantityLimits } from "react-icons/md";

export const navBarLinks = [
  {
    id: 1,
    label: "Home",
    route: "home",
    icon: <GrHomeRounded />,
  },
  {
    id: 2,
    label: "Categorie",
    route: "categories",
    icon: <GrList />,
  },
  {
    id: 3,
    label: "Prodotti",
    route: "products",
    icon: <MdProductionQuantityLimits />,
  },
  {
    id: 4,
    label: "Ordini",
    route: "orders",
    icon: <GrCreditCard />,
  },
  {
    id: 5,
    label: "Utenti",
    route: "users",
    icon: <GrUserManager />,
  },

  {
    id: 6,
    label: "Impostazioni",
    route: "impostazioni",
    icon: <GrUserSettings />,
  },
];
