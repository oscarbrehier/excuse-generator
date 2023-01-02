const { Configuration, OpenAIApi } = require("openai");

export default async function handler(req, res) {

	const configuration = new Configuration({
		apiKey: process.env.API_KEY,
	});

	const openai = new OpenAIApi(configuration);

	const {query} = JSON.parse(req.body);

	const prompt = await openai.createCompletion({
		model: 'text-davinci-003',
		prompt: `Can you make an excuse for this situation. ${query}`,
		temperature: 0.7,
		max_tokens: 256,
		top_p: 1,
		frequency_penalty: 0,
		presence_penalty: 0
	});

	res.status(200).json({
		answer: prompt.data.choices[0].text.split('\n')[2]
	});

}