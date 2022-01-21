
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
  
export default function ScrollToTop() {
  const routePath = useLocation();
  const onTop = () => {
      window.scrollTo({
          top: 0,
          behavior: "smooth"
      });
      
  }
  useEffect(() => {
    onTop()
  }, [routePath]);
  
  return null;
}