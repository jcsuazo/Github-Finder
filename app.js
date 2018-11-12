//int github
const github = new Github();
//int ui
const ui = new UI();

//variables
const searchInput = document.querySelector('#searchUser');

//search user event 
searchInput.addEventListener('keyup', searcchUsersData);

function searcchUsersData(e) {
    //validation
    if (e.target.value === '') {
        console.log('no input');
    } else {
        github.getGitData(searchInput.value).then((data) => {
            console.log(data.repos);
            ui.setProfileData(data.profile);
            ui.setReposData(data.repos);
        });
    }
        
}







//alert alert-danger





























/* 
// Init GitHub
const github = new Github();
// Init UI
const ui = new UI();

//Search input
const searchUser = document.querySelector('#searchUser');



//Search input event listener
searchUser.addEventListener('keyup', (e) => {
    // Get input text
    const userText = e.target.value;
    if (userText !== '') {
        //Make http call
        github.getUser(userText)
            .then((data) => {
                console.log(data);
                if (data.profile.message === 'Not Found') {
                    //Show alert
                    ui.showAlert('User Not Found', 'alert alert-danger');
                } else {
                    //show profile
                    ui.showProfile(data.profile);
                    ui.showRepos(data.repos);
                    
                }
            })
    } else {
        ui.clearProfile();
    }
});
 */