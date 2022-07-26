
document.getElementById('molly').addEventListener('click',apiRequest)
document.getElementById('wendy').addEventListener('click',apiRequest)
document.getElementById('phaedra').addEventListener('click',apiRequest)
document.getElementById('butters').addEventListener('click',apiRequest)
document.getElementById('charlotte and kittens').addEventListener('click',apiRequest)
document.getElementById('gigi').addEventListener('click',apiRequest)
document.getElementById('mrMystery').addEventListener('click',apiRequest)
document.getElementById('mama and kittens').addEventListener('click',apiRequest)
document.getElementById('cricket').addEventListener('click',apiRequest)
document.getElementById('cole').addEventListener('click',apiRequest)
document.getElementById('elmer').addEventListener('click',apiRequest)
document.getElementById('abe').addEventListener('click',apiRequest)
document.getElementById('alice').addEventListener('click',apiRequest)
document.getElementById('june').addEventListener('click',apiRequest)
document.getElementById('daniel').addEventListener('click',apiRequest)
document.getElementById('hans').addEventListener('click',apiRequest)
document.getElementById('heidi').addEventListener('click',apiRequest)
document.getElementById('sienna').addEventListener('click',apiRequest)
document.getElementById('aspen').addEventListener('click',apiRequest)
document.getElementById('henry').addEventListener('click',apiRequest)
document.getElementById('holden').addEventListener('click',apiRequest)
document.getElementById('ellen').addEventListener('click',apiRequest)
document.getElementById('gemma').addEventListener('click',apiRequest)
document.getElementById('piper').addEventListener('click',apiRequest)

        // <button id='hans'> Hans </button>
        // <button id='heidi'> Heidi </button>
        // <button id='fiona'> Fiona </button>
        // <button id='sienna'> Sienna </button>
        // <button id='aspen'> Aspen </button>
        // <button id='henry'> Henry </button>
        // <button id='holden'> Holden </button>
        // <button id='ellen'> Ellen </button>
        // <button id='gemma'> Gemma </button>
        // <button id='piper'> Piper </button>


async function apiRequest(){
    try{
    let ID= this.id
    const response= await fetch(`https://foster-cat-api.herokuapp.com/api/${ID}`)
    const data= await response.json()
    console.log(data)
    document.querySelector('h2').innerText=data.catName
    document.querySelector('img').src=data.image
    document.querySelector('h3').innerText=data.story

    }catch(error){
        console.log(error)


    }

}