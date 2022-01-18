
        
var defaultThreads = [
    {
        id: 1,
        title: "Test Thread 1",
        author: "Anonymous",
        date: Date.now(),
        content: "Thread content",
	comments: [
            {
		id:1,
		author: "Stuff",
                date: Date.now(),
                content: "Test"
            },
        ]
 
    },
    {
        id: 2,
        title: "Test Thread 2",
        author: "Anonymous",
        date: Date.now(),
        content: "Thread content",
	comments: [
            {
		id:2,
		author: "Stuff",
                date: Date.now(),
                content: "Test"
            },
        ]

    }
]
function getThread(ayaya){
        const data = {"getThread":""};
        const options = {
                method: 'POST',
                mode: 'cors',
                headers: {
                        'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
        };
        console.log("posted to server");
        fetch('https://StrikingHappyPixel.1el680103.repl.co', options)
        .then(response => response.json())
        .then(data => {
        console.log('Success:', data);
	console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!")
	threadMaker(data);
	var threads = data
	console.log(threads)
	console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!")
        })
        .catch((error) => {
        console.error('Error:', error);
        });
}
function makeThread(){
        const data = info;
        const options = {
                method: 'POST',
                mode: 'cors',
                headers: {
                        'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
        };
        console.log("posted to server");
        fetch('https://StrikingHappyPixel.1el680103.repl.co', options)
        .then(response => response.json())
        .then(data => {
        console.log('Success:', data);
	
        })
        .catch((error) => {
        console.error('Error:', error);
        });
	
}
function getComment(){
        const data = {"comments":""};
        postInfo(data);
}
var threads = getThread()

function postInfo(info) {
        const data = info;
	console.log(data)
        const options = {
                method: 'POST',
                mode: 'cors',
                headers: {
                        'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
        };
        console.log("posted to server");
        fetch('https://StrikingHappyPixel.1el680103.repl.co', options)
        .then(response => response.json())
        .then(data => {
        console.log('Success:', data);
        })
        .catch((error) => {
        console.error('Error:', error);
        });
}
