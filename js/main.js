

function randomQuotes() {

    //                    0               1                     2               3                  4                5                6           
    var author = ["Hermione Granger", "Albus Dumbledore", "Sirius Black", "Luna Lovegood", "Ginny Weasley", "Harry Potter", "Rubeus Hagrid"]
    //                       0                                                                 1                                                                                                         2                                                                                                                               3                                                                                         4                                                          5                                                                         6                                                                                                                       
    var quotes = ["Fear of a name only increases fear of the thing itself.", "It takes a great deal of bravery to stand up to our enemies, but just as much to stand up to our friends.", "We have all got both light and dark inside us. What matters is the part we choose to act on. That is who we really are", "Things we lose have a way of coming back to us in the end, if not always in the way we expect.", "Anything is possible if you have got enough nerve.", "Parents should not leave their kids unless —unless they have got to.", "What’s comin’ will come, and we’ll meet it when it does."]


    var num = Math.floor(Math.random() * author.length & quotes.length)

    document.getElementById("quotes").innerHTML = quotes[num];
    document.getElementById("author").innerHTML = author[num];
}

randomQuotes()
