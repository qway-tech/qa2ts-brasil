// src/pages/Login/AuthCallback.tsx

import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/context/useAuth";

export default function AuthCallback() {
  const navigate = useNavigate();
  const { login } = useAuth();

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get("code");
    const state = urlParams.get("state");

    if (!code || !state) return;

    // Impede múltiplos envios
    let alreadyCalled = false;
    if (alreadyCalled) return;
    alreadyCalled = true;

    fetch("http://localhost:4000/auth/token", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ code }),
    })
      .then(res => res.json())
      .then(data => {
        if (data.access_token) {
          login(data.access_token, data.user);
          window.history.replaceState({}, "", "/");
          navigate("/");
        } else {
          console.error("Erro ao obter token:", data);
        }
      });
  }, [login, navigate]);

  return <div className="p-4">Aguarde, finalizando login...</div>;
}