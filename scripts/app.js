document.addEventListener("DOMContentLoaded", () => {
    // Validação de login
    const loginForm = document.querySelector("form");
    if (loginForm) {
        loginForm.addEventListener("submit", (e) => {
            e.preventDefault(); 
            const email = document.getElementById("email").value;
            const password = document.getElementById("password").value;

            if (email === "joao@email.com" && password === "123456") {
                alert("Login bem-sucedido!");
                // Certifique-se de que o caminho é correto
                window.location.href = "./livros.html"; 
            } else {
                alert("Credenciais inválidas. Tente novamente.");
            }
        });
    }

    // Exibição de livros
    const livrosContainer = document.getElementById("livros-container");
    if (livrosContainer) {
        const livros = [
            { titulo: "Java para Iniciantes", autor: "Autor X", disponivel: true },
            { titulo: "Aprendendo HTML e CSS", autor: "Autor Y", disponivel: false },
        ];

        livros.forEach((livro) => {
            const livroElement = document.createElement("div");
            livroElement.classList.add("livro");
            livroElement.innerHTML = `
                <h3>${livro.titulo}</h3>
                <p>Autor: ${livro.autor}</p>
                <p>Disponível: ${livro.disponivel ? "Sim" : "Não"}</p>
            `;
            livrosContainer.appendChild(livroElement);
        });
    }
});
