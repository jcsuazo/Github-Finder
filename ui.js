class UI {
    constructor() {
        this.profileDiv = document.querySelector('#profile');
    }
    //Set Profile html on ui
    setProfileData(profile) {
        let output = `
            <div class="card card-body mb3">
                <div class="row">
                    <div class="col-md-3">
                        <img src="${profile.avatar_url}" class="img-fluid mb-2">
                        <a href="${profile.html_url}" target="_blank" class="btn btn-primary btn-block mb-4">View Profile</a>
                    </div>
                    <div class="col-md-9">
                        <span class="badge badge-primary">Public Repos: ${profile.public_repos}</span>
                        <span class="badge badge-secondary">Public Gists: ${profile.public_gists}</span>
                        <span class="badge badge-success">Followers: ${profile.followers}</span>
                        <span class="badge badge-info">Following: ${profile.following}</span>
                        <br><br>
                        <ul class="list-group">
                            <li class="list-group-item">Company: ${profile.company}</li>
                            <li class="list-group-item">Website/Blog: ${profile.blog}</li>
                            <li class="list-group-item">Location: ${profile.location}</li>
                            <li class="list-group-item">Member Since: ${profile.created_at}</li>
                        </ul>
                    </div>
                </div>
            </div>
            <h3 class="page-heading mb-3">Latest Repos</h3>
            <div id="repos"></div>
        `;
        this.profileDiv.innerHTML = output;
    }
    //Set repos html on ui
    setReposData(repos){
        let output = '';
        repos.forEach(o => {
            output += `
                <div class="card card-body mb-2">
                    <div class="row">
                        <div class="col-md-6">
                            <a href="${o.html_url}">${o.name}</a>
                        </div>
                        <div class="col-md-6">
                            <span class="badge badge-primary mb-1">Stars: ${o.stargazers_count}</span>
                            <span class="badge badge-secondary mb-1">Watchers: ${o.watchers_count}</span>
                            <span class="badge badge-success mb-1">Forks: ${o.forks_count}</span>
                        </div>
                    </div>
                </div>
            `;
            document.querySelector('#repos').innerHTML = output;
        });
    }
}
































/* 
class UI {
    constructor() {
        this.profile = document.querySelector('#profile');
        this.container = document.querySelector('.searchContainer');
        this.search = document.querySelector('.search');
    }
    //show profile in ui
    showProfile(user){
        this.profile.innerHTML = `
        <div class="card card-body mb3">
            <div class="row">
                <div class="col-md-3">
                    <img src="${user.avatar_url}" class="img-fluid mb-2">
                    <a href="${user.html_url}" target="_blank" class="btn btn-primary btn-block mb-4">View Profile</a>
                </div>
                <div class="col-md-9">
                    <span class="badge badge-primary">Public Repos: ${user.public_repos}</span>
                    <span class="badge badge-secondary">Public Gists: ${user.public_gists}</span>
                    <span class="badge badge-success">Followers: ${user.followers}</span>
                    <span class="badge badge-info">Following: ${user.following}</span>
                    <br><br>
                    <ul class="list-group">
                        <li class="list-group-item">Company: ${user.company}</li>
                        <li class="list-group-item">Website/Blog: ${user.blog}</li>
                        <li class="list-group-item">Location: ${user.location}</li>
                        <li class="list-group-item">Member Since: ${user.created_at}</li>
                    </ul>
                </div>
            </div>
        </div>
        <h3 class="page-heading mb-3">Latest Repos</h3>
        <div id="repos"></div>
        `;
    }
    //Show repository
    showRepos(repos){
        let output = '';
        repos.forEach(o => {
            output += `
                <div class="card card-body mb-2">
                    <div class="row">
                        <div class="col-md-6">
                            <a href="${o.html_url}">${o.name}</a>
                        </div>
                        <div class="col-md-6">
                            <span class="badge badge-primary mb-1">Stars: ${o.stargazers_count}</span>
                            <span class="badge badge-secondary mb-1">Watchers: ${o.watchers_count}</span>
                            <span class="badge badge-success mb-1">Rorks: ${o.forms_count}</span>
                        </div>
                    </div>
                </div>
            `;
        });
        // Output repository
        document.querySelector('#repos').innerHTML = output;
    }
    //Show alert message
    showAlert(message, className){
        // Clear any remaining alerts
        this.clearAlert();
        //create div
        const div = document.createElement('div');
        //Add Classes
        div.className = className;
        //add Text
        div.appendChild(document.createTextNode(message));
        // Insert alert
        this.container.insertBefore(div, this.search);
        //time after 3 seconds
        setTimeout(() => {this.clearAlert()}, 3000);
    }
    //Clear alert message
    clearAlert(){
        const currentAlert = document.querySelector('.alert');
        if (currentAlert) {
            currentAlert.remove();
        }
    }
    //Clear profile
    clearProfile() {
        this.profile.innerHTML = '';
    }
} */

/*PROFILE HTML
<div class="card card-body mb3">
    <div class="row">
        <div class="col-md-3">
            <img src="" class="img-fluid mb-2">
            <a href="" target="_blank" class="btn btn-primary btn-block mb-4">View Profile</a>
        </div>
        <div class="col-md-9">
            <span class="badge badge-primary">Public Repos: </span>
            <span class="badge badge-secondary">Public Gists: </span>
            <span class="badge badge-success">Followers: </span>
            <span class="badge badge-info">Following: </span>
            <br><br>
            <ul class="list-group">
                <li class="list-group-item">Company: </li>
                <li class="list-group-item">Website/Blog: </li>
                <li class="list-group-item">Location: </li>
                <li class="list-group-item">Member Since: </li>
            </ul>
        </div>
    </div>
</div>
<h3 class="page-heading mb-3">Latest Repos</h3>
<div id="repos"></div>
*/
/* REPOS HTML
<div class="card card-body mb-2">
    <div class="row">
        <div class="col-md-6">
            <a href=""></a>
        </div>
        <div class="col-md-6">
            <span class="badge badge-primary mb-1">Stars: </span>
            <span class="badge badge-secondary mb-1">Watchers: </span>
            <span class="badge badge-success mb-1">Rorks: </span>
        </div>
    </div>
</div>
 */