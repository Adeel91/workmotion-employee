import React, { useEffect } from "react";
import { Animate } from "react-simple-animate";
import { Logo } from "../components/logo";
import { useNavigate } from "react-router-dom";

const Splash: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate("/admin/dashboard");
    }, Math.floor(Math.random() * 5000) + 2000);
  }, [navigate]);

  return (
    <div className="splash-wrapper">
      <Animate
        play={true as boolean}
        duration={2 as number}
        easeType="cubic-bezier(0.445, 0.05, 0.55, 0.95)"
        end={{ opacity: 1, filter: "blur(0)", transform: "scale(1.5)" }}
        start={{ opacity: 0.75, filter: "blur(1px)", transform: "scale(0.75)" }}
      >
        <Logo />
      </Animate>
    </div>
  );
};

export default Splash;
