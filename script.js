
        
function getimage(){

   
    const dispaly = document.getElementById('display');

    const url = 'https://api.thecatapi.com/v1/images/search';
    //for every refresh it will diappear
    display.innerHTML = '';

    
    fetch(url)
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            //creating a variable and adding data to it
            const myimage = data;
            
            for(let i = 0; i< myimage.length ; i++){
                console.log(myimage[i]);
                  //creating adummy variable and adding to it
                const picture = myimage[i];
                
                const li = document.createElement('li');
                 //creating image(you can see id in console)
                const img = document.createElement('img');
                img.src = picture.url;
                img.alt = picture.id;
                //appending image to li
                li.appendChild(img);
                //appending image to url
                display.appendChild(li);

            }

        })
        .catch(function(error){
            console.log(error);
        })

}