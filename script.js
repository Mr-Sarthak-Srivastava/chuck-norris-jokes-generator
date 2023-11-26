const btn=document.querySelector('#joke-btn');

function getJoke(){
    document.querySelector('#joke').innerText='Loading...';
    const xhr=new XMLHttpRequest();

    xhr.open('GET', 'https://api.chucknorris.io/jokes/random');

    xhr.onreadystatechange=function(){
        if(this.readyState===4){
            if(this.status===200){
                const data=JSON.parse(this.responseText);
                //document.querySelector('#joke').innerText=data.value;
                // above is just an alternate of the below.
                document.querySelector('#joke').innerHTML=`<strong>${data.value}</strong>`;
            }
            else{
                document.querySelector('#joke').innerText='Something went wrong, Please try again.';
            }
        }
    }
    xhr.send();
}
btn.addEventListener('click', getJoke);
document.addEventListener('DOMContentLoaded', getJoke);