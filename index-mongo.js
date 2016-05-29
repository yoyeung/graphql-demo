import express from 'express';
import bodyParser from 'body-parser';

import mongoose from 'mongoose';

import schema from './mongodbSample/schema/schema';
import {graphql} from 'graphql';

const app = express();
const PORT= process.env.PORT || 3000;
const DB_PATH = 'mongodb://localhost:27017/grapql';
mongoose.connect(DB_PATH);

app.use(bodyParser.text({
	type: 'application/graphql'
}));

app.post('/graphql', (req, res) => {

	graphql(schema, req.body).then((result) => {
		console.log(result);
		res.json(result);
	});
});

const server = app.listen(PORT, () => {
	const host = server.address().address;
	const port = server.address().port;
	console.log(`Graphql is listening at https://${host}:${port}`);
});
