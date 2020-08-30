console.log("Start");


function loginUser(email, password) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Data time");
            resolve( { email, password });
        }, 3000);
    });
}

function getVideos(email) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Video time");
            resolve( ['video1', 'video2', 'video3']);
        }, 2000);
    });
    
}

function getDetail(video) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Detail time");
            resolve( {video});
        }, 2000);
    });
}
   
loginUser('tan@man.com', 123456)
.then(user => getVideos(user.email))
.then(videos => getDetail(videos[0]))
.then(detail => console.log(detail));

console.log('Finish');

console.log('Start all Promise');

const yt = new Promise(resolve => {
    setTimeout(() => {
        console.log("Getting stuff from promise 1");
        resolve([1,2,3,4,5])
    },1000);
});

const fb = new Promise(resolve => {
    setTimeout(() => {
        console.log("Getting stuff from promise 2");
        resolve({user: 'Tanmay'})
    },2000);
});

Promise.all([yt, fb].then(result => console.log(result)));