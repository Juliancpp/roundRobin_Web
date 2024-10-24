import { useState } from "react";
import { useRouter } from "next/router";
import DefaultLayout from "@/layouts/default";
import { Input } from "@nextui-org/input";
import { Button } from "@nextui-org/button";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const response = await fetch("http://127.0.0.1:8000/api/login/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    });

    if (response.ok) {
      const data = await response.json();
      localStorage.setItem("access", data.access);
      localStorage.setItem("refresh", data.refresh);
      router.push("/"); // Redirigir al usuario a la página principal
    } else {
      const errorData = await response.json();

      setError(
        errorData.username ||
          errorData.email ||
          errorData.password ||
          errorData.non_field_errors
      );
      // Manejar errores
      console.error("Error en el registro");
    }
  };

  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="inline-block max-w-lg text-center justify-center text-xl">
          <h1 className={""}>Iniciar Sesion</h1>
        </div>
        {error && <p>{error}</p>}
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-4 max-w-lg text-center justify-center"
        >
          <Input
            isRequired
            type="username"
            label="Username"
            defaultValue=""
            className="max-w-xs"
            onChange={(e) => setUsername(e.target.value)}
          />
          <Input
            isRequired
            type="password"
            label="Contraseña"
            defaultValue=""
            className="max-w-xs"
            onChange={(e) => setPassword(e.target.value)}
          />

          <Button type="submit" color="primary">
            Iniciar Sesion
          </Button>
        </form>
      </section>
    </DefaultLayout>
  );
};

export default Login;
