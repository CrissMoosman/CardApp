
/**
 * Global variables
 * Arrays for deckCards, cardSuits and cardValues
 * @deckCards empty array
 * @cardSuits = "clubs", "diamonds", "hearts", "spades"
 * @cardValues = "A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"
 * 
 */
var deckCards = new Array();
var cardSuits = ["clubs", "diamonds", "hearts", "spades"];
var cardValues = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];



/**
 * Event handlers for managing the card app
 * 
 * getDeck() return a full deck in sequential order
 * shuffleDeck() returns a shuffled deck
 * dealCards() deals a hand of 4 random cards
 * 
 */

$(document).ready(function() {
    
    //Get deck event handler
    $("#getDeck").click(function(){
      
    
        //Clear UI before getting new deck 
        $("#fullDeck").val("");
        deckCards = new Array();
        
        //First loop over the cardSuits array
        for(var i = 0; i < cardSuits.length; i++)
        {
            //Second loop over the cardValues array
            for(var j = 0; j < cardValues.length; j++)
            {
                //Create individual cards
                var card = {Value: cardValues[j], Suit: cardSuits[i]};

                //Push them onto the deckCards array
                deckCards.push(card);
            }
        }
       
        //Populate UI with ordered deck
        $("#fullDeck").val(JSON.stringify(deckCards));
        
    });

    //Shuffle event handler
    $("#shuffleDeck").click(function(){

        //Loop current deck and randomize structure
        for (var k = 0; k < 500; k++)
        {
            //Select two random locations in the deck as shuffle point of origin
            var base1 = Math.floor((Math.random() * deckCards.length));
            var base2 = Math.floor((Math.random() * deckCards.length));
            var base = deckCards[base1];
            deckCards[base1] = deckCards[base2];
            deckCards[base2] = base;

            //Populate UI with shuffelled deck
            $("#fullDeck").val(JSON.stringify(deckCards));
        }
    });
    
    //Deal cards event handler
    $("#dealCards").click(function(){
        
        //Clear UI for next hand
        $('#deltHand').val("");

        //Loop current deck for four random cards
        for(var m=0; m<4; m++){
            var card = deckCards[deckCards.length-1];
            deckCards.splice(deckCards.length-1, 1);

            //Populate UI with 4 cards
            $('#deltHand').val($('#deltHand').val()+JSON.stringify(card)); 
            
        }
        
    });
    
  });


