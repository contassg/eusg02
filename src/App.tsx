import { useEffect, useState } from "react";
import Home from "@/pages/Home";
import PrivacyPolicy from "@/pages/PrivacyPolicy";

function getRoute() {
  const path = window.location.pathname;
  if (path === "/privacidade" || path === "/privacidade/") {
    return "/privacidade";
  }
  return "/";
}

function App() {
  const [route, setRoute] = useState(getRoute());

  useEffect(() => {
    const onPopState = () => {
      setRoute(getRoute());
      window.scrollTo(0, 0);
    };
    window.addEventListener("popstate", onPopState);
    return () => window.removeEventListener("popstate", onPopState);
  }, []);

  if (route === "/privacidade") {
    return <PrivacyPolicy />;
  }

  return <Home />;
}

export default App;
