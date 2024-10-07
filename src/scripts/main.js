document.addEventListener('DOMContentLoaded', function() {
    const avatar = document.getElementById('avatar');
    const name = document.getElementById('name');
    const username = document.getElementById('username');
    const repositories = document.getElementById('repositories');
    const followers = document.getElementById('followers');
    const following = document.getElementById('following');
    const link = document.getElementById('link');

    fetch('https://api.github.com/users/AsrielDreemurrGM')
        .then(function(answer) {
            return answer.json();
        })
        .then(function(json) {
            avatar.src = json.avatar_url;
            name.innerText = json.name;
            username.innerText = json.login;
            repositories.innerText = json.public_repos;
            followers.innerText = json.followers;
            following.innerText = json.following;
            link.href = json.html_url;
        })
        .catch(function(error) {
            console.error('Houve um Erro:', error);
            alert("Ocorreu um erro ao carregar os dados, por favor, tente novamente mais tarde.");
        })
})