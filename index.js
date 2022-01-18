const bodyParser = require("body-parser");
const express = require('express');
const cors = require('cors');
const fs = require('fs');

function objToString(obj) {
        let str = '';
        for (const [p, val] of Object.entries(obj)) {
                str += `${p}::${val}\n`;
        }
        return str;
}
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
				content: "Test",
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
				content: "Test",
			},
			]
			},
			]
let comments = {"comments":""};
let thread = {"threads":""};
let getThread = {"getThread":""};
let app = express();
app.use(cors());
app.use(express.json()); //.urlencoded({ extended: true }));
app.get("/", (req, res) => res.send("test"));
app.post("/", (req, res) => {
	console.log(req.body)
	console.log("req.body")
	for (var key in req.body) {
	}

	if (key === "threadfo") {
		console.log("RANNNNNNNNNNN")
		console.log(req.body.threadfo)
		defaultThreads.push(req.body.threadfo)
		console.log(defaultThreads);
		
	}
        else if(JSON.stringify(req.body) === JSON.stringify(comments)) {
                console.log("ran")
		console.log(req.body)
                try {
                        
                        fs.readFile('file.txt', 'utf8' , (err, data) => {
                                if (err) {
                                console.error(err)
                                return
                                }
                                
                                data =  { "comments": data}
                                
                        });
                } catch (err) {
                        console.log("yep")
                }
	}

        else if(JSON.stringify(req.body) === JSON.stringify(getThread)) {
                console.log("ran42")
                try {
			console.log(defaultThreads)
                        res.json(defaultThreads)
		
                } catch (err) {
                        console.log("yep")
                }
	}
        else {
		console.log("ran41234")
		console.log(req.body)
		let comment = req.body
		//this makes sense and doesn't it adds the comment which is a json into  an array in a json in an array
		function findStuff(ids) {
			console.log("!!!!!!!!!!!!!!!!!!")
			console.log(ids)
			console.log(ids.id)
			console.log(comment)
			console.log(comment.comment)
			console.log(comment.comment.id)
			if(ids.id == comment.comment.id ) {
				let x = JSON.stringify(ids.id);
				console.log(x+("!!!!!!!!!!!"))
				let z = defaultThreads[x-1]
				z['comments'].push(comment.comments)
					
				return x;
				}

			}
		console.log(defaultThreads.find(findStuff));
		console.log("!!!!!!!!!!!!!!!!!!!!!!!!")
		console.log(defaultThreads)

		
		res.send(req.body)
                let info = JSON.stringify(req.body)

                fs.appendFile('file.txt', info + "\n", err => {
                        if (err) {
                                console.error(err)
                                return
                        }
                })
        }

});
app.get('/post', (req, res) => {
        console.log(req, res)
})

app.listen(3001, () => console.log("Server Running"));
