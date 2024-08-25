import PostForm from "@/app/components/PostForm"
import PostList from "@/app/components/PostList"
import { useRouter } from "next/router";
import { useEffect } from "react";


const AdminPage = () => {
    const router = useRouter();
  
    useEffect(() => {
      const user = localStorage.getItem("user"); // Exemplo de verificação de autenticação
      if (!user) {
        router.push("/login"); // Redireciona se o usuário não estiver autenticado
      }
    }, [router]);
  
    return (
      <main>
        <h1>Admin Dashboard</h1>
        {/* Conteúdo aqui */}
      </main>
    );
  };
  
export default AdminPage;