class Github {
    constructor() {
        // this.user = document.querySelector('searchUser');
        this.clientId = 'client_id=815274a6d36ad9cf644f';
        this.clientSecret = 'client_secret=b4d5e7b0d51e0ba821acf5890467489b708235ea';
        this.sort = 'sort=created asc';
        this.perPage = 'per_page=5';
    }
    async getGitData(user){
        const profileResponse = await fetch(`https://api.github.com/users/${user}?${this.clientId}&${this.clientSecret}`);
        const profile = await profileResponse.json();


        const reposResponse = await fetch(`https://api.github.com/users/${user}/repos?${this.perPage}&${this.sort}&${this.clientId}&${this.clientSecret}`);
        const repos = await reposResponse.json();
        return {
            profile,
            repos
        }
    }
}




 //https://api.github.com/users/bradtraversy?client_id=815274a6d36ad9cf644f&client_secret=b4d5e7b0d51e0ba821acf5890467489b708235ea
 //https://api.github.com/users/bradtraversy/repos?per_page=10&sort=created: asc&client_id=815274a6d36ad9cf644f&client_secret=b4d5e7b0d51e0ba821acf5890467489b708235ea

//'https://api.github.com/user/repos?page=2&per_page=100&sort=created asc'
//'https://api.github.com/users/whatever?client_id=xxxx&client_secret=yyyy'
//























/* 
class Github {
    constructor(){
        this.client_id = '815274a6d36ad9cf644f';
        this.client_secret = 'b4d5e7b0d51e0ba821acf5890467489b708235ea';
        this.repos_count = 5;
        this.repos_sort = 'created: asc';
    }
    async getUser(user) {
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const profile = await profileResponse.json();
        
        const repos = await repoResponse.json();
        return {
            profile : profile,
            repos : repos
        }
    }
}
 */
























