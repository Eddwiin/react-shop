import { Header } from "@react-shop/shared/ui";
import { useTranslation } from "react-i18next";
import { RouterProvider } from "react-router-dom";
import router from "../configs/router";

function App() {
  const { t } = useTranslation();
  const appName = t('AppName').toUpperCase();
  const menus = [t('Menu.Login')];

  return (
    <div className="App">
      <Header appName={appName} menus={menus} />
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
