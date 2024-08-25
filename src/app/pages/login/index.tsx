import { useRouter } from "next/router"
import { useState } from "react";


const LoginPage = () => {
    const router = useRouter();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");   

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();

        if (email === "admin@example.com" && password === "password") {
            localStorage.setItem("user", "admin");
            router.push("/admin");
          } else {
            alert("Credenciais inválidas");
        }
    };

    return (
        <main>
            <h1>Login</h1>
            <form onSubmit={handleLogin}>
                <div>
                    <label>Email</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required

                    />
                </div>
                <div>
                    <label>Password:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required

                    />
                </div>
                <button type="submit">Login</button>
            </form>
        </main>
    );
};
export default LoginPage;