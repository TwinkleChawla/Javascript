function displayInformation(obj) {
     // var library is defined, use it to print the information
    for (var i=0; i<obj.length; i++)
        {
        if (obj.readingStatus)
            alert("Already read '" + obj[i].title + "' by" + obj[i].author + ".");
        else
            alert("You still need to read '" + obj[i].title + "' by" + obj[i].author + ".");
        }

// tail starts here
var library = [ 
    {
        title: 'Bill Gates',
        author: 'The Road Ahead',
        readingStatus: true
    },
    {
        title: 'Steve Jobs',
        author: 'Walter Isaacson',
        readingStatus: true
    },
    {
        title: 'Mockingjay: The Final Book of The Hunger Games',
        author: 'Suzanne Collins',
        readingStatus: false
    }
];

displayInformation(library);