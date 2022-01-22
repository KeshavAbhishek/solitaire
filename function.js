document.querySelector('.btn:nth-child(1)').addEventListener('click',()=>{
    document.querySelector('.btn:nth-child(1)').style.transform = 'translateX(-3px) translateY(3px)';
    document.querySelector('.btn:nth-child(1)').style.boxShadow = '0 0 0 #000';

    setTimeout(() => {
        document.querySelector('.btn:nth-child(1)').style.transform = 'translateX(0) translateY(0)';
        document.querySelector('.btn:nth-child(1)').style.boxShadow = '-3px 3px 0 #000';
    }, 100);
})

document.querySelector('.btn:nth-child(2)').addEventListener('click',()=>{
    document.querySelector('.btn:nth-child(2)').style.transform = 'translateX(3px) translateY(3px)';
    document.querySelector('.btn:nth-child(2)').style.boxShadow = '0 0 0 #000';

    setTimeout(() => {
        document.querySelector('.btn:nth-child(2)').style.transform = 'translateX(0) translateY(0)';
        document.querySelector('.btn:nth-child(2)').style.boxShadow = '3px 3px 0 #000';
    }, 100);
})

const cardsList = new Array('10_of_clubs.png', '10_of_diamonds.png', '10_of_hearts.png', '10_of_spades.png', '11_of_clubs.png', '11_of_diamonds.png', '11_of_hearts.png', '11_of_spades.png', '12_of_clubs.png', '12_of_diamonds.png', '12_of_hearts.png', '12_of_spades.png', '13_of_clubs.png', '13_of_diamonds.png', '13_of_hearts.png', '13_of_spades.png', '14_of_clubs.png', '14_of_diamonds.png', '14_of_hearts.png', '14_of_spades.png', '2_of_clubs.png', '2_of_diamonds.png', '2_of_hearts.png', '2_of_spades.png', '3_of_clubs.png', '3_of_diamonds.png', '3_of_hearts.png', '3_of_spades.png', '4_of_clubs.png', '4_of_diamonds.png', '4_of_hearts.png', '4_of_spades.png', '5_of_clubs.png', '5_of_diamonds.png', '5_of_hearts.png', '5_of_spades.png', '6_of_clubs.png', '6_of_diamonds.png', '6_of_hearts.png', '6_of_spades.png', '7_of_clubs.png', '7_of_diamonds.png', '7_of_hearts.png', '7_of_spades.png', '8_of_clubs.png', '8_of_diamonds.png', '8_of_hearts.png', '8_of_spades.png', '9_of_clubs.png', '9_of_diamonds.png', '9_of_hearts.png', '9_of_spades.png');

function getCards(){
    var a = Math.random();
    var pos = Math.floor(a*cardsList.length);
    document.getElementById('dealerCards').style.backgroundImage=`url(cards/${cardsList[pos]})`;

    cardsList.pop(pos)
    
    var b = Math.random();
    var pos = Math.floor(b*cardsList.length);
    document.getElementById('playerCards').style.backgroundImage=`url(cards/${cardsList[pos]})`;

    cardsList.pop(pos)

    if(cardsList.length==0){
        document.getElementById('getCardsButton').setAttribute('disabled',true)
    }
}

function shuffleCards(){
    document.location.reload();
}