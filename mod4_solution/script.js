(function() {
    var names = ["Sasikanth", "Jendaya", "Jasmine", "Jack", "Ozil", "Messi", "Ronaldo", "Jill", "Charlotte", "Lucifer"];
    for (var i = 0; i < names.length; i++) {
        var firstLetter = names[i].charAt(0).toLowerCase();
        if (firstLetter === 'j') {
            byeSpeaker.speak(names[i]);
        } else {
            helloSpeaker.speak(names[i]);
        }
    }
})();

/*
Module 4 Assignment Solution:

Expected output:

Hello Sasikanth
Good Bye Jendaya
Good Bye Jasmine
Good Bye Jack
Hello Ozil
Hello Messi
Hello Ronaldo
Good Bye Jill
Hello Charlotte
Hello Lucifer
*/
