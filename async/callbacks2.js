console.log("Start");


function loginUser(email, password, callback) {
    setTimeout(() => {
        console.log("Data time");
        callback( { email, password });
    }, 3000);
}

function getVideos(email, callback) {
    setTimeout(() => {
        console.log("Video time");
        callback( ['video1', 'video2', 'video3']);
    }, 2000);
}

function getDetail(email, callback) {
    setTimeout(() => {
        console.log("Detail time");
        callback( {email, detail:"This is video 1"});
    }, 2000);
}

loginUser("tan@goomail.com", 123456, (user) => {
    console.log(user);
    getVideos(user.email, (videos) => {
        console.log(videos);
        getDetail(user.email, (detail) => {
            console.log(detail);
        });
    });
});

console.log('Finish');