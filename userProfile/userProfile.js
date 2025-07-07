document.querySelector('.ProfileName').innerHTML="mmv.312"

var random= Math.floor(Math.random()*10);
document.querySelector('.Numofposts').innerHTML= random
document.querySelector('.Followercount').innerHTML=Math.floor(Math.random()*1000);
fetch('https://randomuser.me/api/').then(response=>{
    response.json().then(data=>{
        console.log(data)
        let user=data.results[0];
        document.querySelector('.ProfileName').innerHTML=user.name.first
        document.querySelector('.Bioname').innerHTML=user.name.first+''+user.name.last
        document.querySelector('.Profilepic').src=user.picture.medium
        for(let i=0;i<random;i++){
        let img=document.createElement('img');
        img.src="https://picsum.photos/9"+i;
        document.querySelector('.posts').append(img);
        }
    })
})