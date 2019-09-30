//small function to make my life easier
const log = e => { console.log(e); return e }

//dependencies
const { createServer } = require('http');
const { existsSync, lstatSync, readFileSync} = require('fs')
const { parse } = require('url')
const { extname } = require('path')
const { decode, verify, sign } = require('jsonwebtoken')

//port on which the server will run
const port = process.env.PORT || 3000

//responce type to match file type
const headers = {
	'.html': 'text/html',
	'.js': 'application/javascript',
	'.svg': 'image/svg+xml'
}

//function to handle http server request event
const requestHandler = (req, res) => {

	//filter resquest types by url
	

	//file queried; if none get index.html
	let pathname = parse(req.url).pathname.substring(1) || 'index.html'

	//add proper header for file type sent
	res.setHeader('Content-Type', headers[ extname( pathname)] || '')

	//Try get file, write file, set status... Really not efficient but good for now
	if( existsSync(pathname) && lstatSync(pathname).isFile() ){
		res.write( readFileSync(pathname) )
		res.statusCode = 200
	}
	else res.statusCode = 404

  	res.end()
}

createServer( requestHandler).listen( port)