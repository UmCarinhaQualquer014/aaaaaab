document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita o envio padrão do formulário

    // Valores de usuário e senha pré-definidos
    const validUsername = "Kauani";
    const validPassword = "KVforever";

    // Obter os valores inseridos pelo usuário
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Verificar se o usuário e a senha estão corretos
    if (username === validUsername && password === validPassword) {
        // Redireciona para a próxima página
        window.location.href = "livro.html";
    } else {
        // Exibir mensagem de erro
        document.getElementById('errorMessage').style.display = 'block';
    }
});
