const data = [
    {name: 'Aveyro', img: '/guess-the-celeb/imgs/Aveyro.jpg', hint: ["He's a tunisian trap legend"]},
    {name: 'Chris Evans', img: '/guess-the-celeb/imgs/Chris Evans.jpg', hint: ['He played Captain america']},
    {name: 'Chris Hemsworth', img: '/guess-the-celeb/imgs/Chris Hemsworth.jpg', hint: ['He played Thor']},
    {name: 'Fathi Haddaoui', img: '/guess-the-celeb/imgs/Fathi Haddaoui.jpg', hint: ['He played lhaj']},
    {name: 'Johnny Depp', img: '/guess-the-celeb/imgs/Johnny Depp.jpg', hint: ['He played Captain Sparrow']},
    {name: 'Lotfi Abdelli', img: '/guess-the-celeb/imgs/Lotfi Abdeli.jpg', hint: ['He played Ammar']},
    {name: 'Robert Downey Jr', img: '/guess-the-celeb/imgs/Robert Downey Jr.jpg', hint: ['He played Iron Man']},
    {name: 'Ryan Reynolds', img: '/guess-the-celeb/imgs/Ryan Reynolds.jpg', hint: ['He played Dead Pool']},
    {name: 'Angelina Jolie', img: '/guess-the-celeb/imgs/Angelina Jolie.jpg', hint: ['Famous for roles in Tomb Raider and Maleficent']},
    {name: 'Leonardo DiCaprio', img: '/guess-the-celeb/imgs/Leonardo DiCaprio.jpg', hint: ['Starred in Titanic and The Wolf of Wall Street']},
    {name: 'Emma Watson', img: '/guess-the-celeb/imgs/Emma Watson.jpg', hint: ['Known for playing Hermione Granger in the Harry Potter series']},
    {name: 'Dwayn Johnson', img: '/guess-the-celeb/imgs/Dwayn Johnson.jpg', hint: ['Also known as "The Rock," former wrestler turned actor']},
    {name: 'Scarlett Johansson', img: '/guess-the-celeb/imgs/Scarlett Johnsson.jpg', hint: ['Played Black Widow in the Marvel Cinematic Universe']},
    {name: 'Tom Cruise', img: '/guess-the-celeb/imgs/Tom Cruise.jpg', hint: ['Famous for his roles in Mission Impossible series']},
    {name: 'Jennifer Lawrence', img: '/guess-the-celeb/imgs/Jennifer Lawrence.jpg', hint: ['Starred in The Hunger Games series']},
    {name: 'Will Smith', img: '/guess-the-celeb/imgs/Will Smith.jpg', hint: ['Known for Fresh Prince of Bel-Air and Men in Black']},
    {name: 'Natalie Portman', img: '/guess-the-celeb/imgs/Natalie Portman.jpg', hint: ['Starred in Star Wars prequel trilogy and Black Swan']},
    {name: 'Brad Pitt', img: '/guess-the-celeb/imgs/Brad Pitt.jpg', hint: ['Known for roles in Fight Club and Inglourious Basterds']},
    {name: 'Hugh Jackman', img: '/guess-the-celeb/imgs/Hugh Jackman.jpg', hint: ['Famous for playing Wolverine in X-Men series']},
    {name: 'Anne Hathaway', img: '/guess-the-celeb/imgs/Anne Hathaway.jpg', hint: ['Starred in The Devil Wears Prada and Les Misérables']},
    {name: 'Samuel L. Jackson', img: '/guess-the-celeb/imgs/Samuel L Jackson.jpg', hint: ['Known for his roles in Pulp Fiction and the Marvel movies']},
    {name: 'Cate Blanchett', img: '/guess-the-celeb/imgs/Cate Blanchett.jpg', hint: ['Acclaimed actress in films like Elizabeth and Blue Jasmine']},
    {name: 'Idris Elba', img: '/guess-the-celeb/imgs/Idris Elba.jpg', hint: ['Known for roles in Luther, Thor, and The Wire']}
]

var triesLeft = 5
var index
var score = 0
$('#score').append(score)
$('#losingContainer').hide()


function randInt() {
    index = Math.floor(Math.random() * data.length)
    $('#ingameContainer').html(
        `
        <img id="celebImg" src="${data[index].img}" alt="">
        <br>
        <input id="celebInput" type="text" placeHolder="Name...">
        <button id="tryBtn" class="Btn">${triesLeft}</button>
        `
        )
        $('#tryBtn').click(() => guess())
        console.log(data[index].name);
    }
    
    randInt()
    
    
    function guess() {
        var inputVal = $('#celebInput').val()
        if(inputVal.toLowerCase() === data[index].name.toLowerCase()){
            score++
            triesLeft++
            $('#score').text(`score: ${score}`)
            randInt()
        } else {
            if(triesLeft - 1 === 1){
                triesLeft--
                $('#tryBtn').text(triesLeft)
                $('#celebInput').val('')
                $('#celebInput').attr('placeholder', `Hint: ${data[index].hint}`);
                $('#tryBtn').css({'background' : 'linear-gradient(40deg, rgba(255,12,12,1) 40%, rgba(0,212,255,1) 100%)', 'color' : 'white'})
                $('#tryBtn').hover(()=> {
                    $('#tryBtn').css({'background' : 'rgba(255,12,12,1)', 'color' : 'white'})
                }, () => {
                    $('#tryBtn').css({'background' : 'linear-gradient(40deg, rgba(255,12,12,1) 40%, rgba(0,212,255,1) 100%)', 'color' : 'white'})
                })
            }
            else if(triesLeft - 1 > 0){
                triesLeft--
                $('#tryBtn').text(triesLeft)
                console.log('nope');
            } else {
                $('#ingameContainer').hide()
            $('#losingContainer').show()
            $('#score').hide()
        }
    }
}

function newGame() {
    location.reload()
}


    
console.log('Reached')