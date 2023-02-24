import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';
import {
  Configuration,
  OpenAIApi
} from 'openai';

dotenv.config()

// open ai config
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

// new open ai instance
const openai = new OpenAIApi(configuration);

const app = express();
app.use(cors());
app.use(express.json());

app.get('/', async (req, res) => {
  res.status(200).send({
    message: 'API running...'
  })
})

app.post('/getImage', async (req, res) => {
  try {
    // user messsage
    const prompt = req.body.prompt;

    const response = await openai.createImage({
      prompt: `${prompt}`,
      n: 1,
      size: `1024x1024`,
    });

    const image_url = response.data.data[0].url;
    res.status(200).send({
      response: image_url,
    })
  } catch (error) {
    // Consider adjusting the error handling logic for your use case
    if (error.response) {
      console.error(error.response.status, error.response.data);
      res.status(error.response.status).json(error.response.data);
    } else {
      console.error(`Error with OpenAI API request: ${error.message}`);
      res.status(500).json({
        error: {
          message: 'An error occurred during your request.',
        }
      });
    }
  }
})

// app.post('/editImage', async (req, res) => {
//   try {
//     // user messsage
//     const prompt = req.body.prompt;
//     console.log(prompt)

//     const response = await openai.createImage({
//       prompt: `${prompt}`,
//       n: 1,
//       size: `1024x1024`,
//     });

//     const image_url = response.data.data[0].url;
//     res.status(200).send({
//       response: image_url,
//     })
//   } catch (error) {
//     // Consider adjusting the error handling logic for your use case
//     if (error.response) {
//       console.error(error.response.status, error.response.data);
//       res.status(error.response.status).json(error.response.data);
//     } else {
//       console.error(`Error with OpenAI API request: ${error.message}`);
//       res.status(500).json({
//         error: {
//           message: 'An error occurred during your request.',
//         }
//       });
//     }
//   }
// })
app.listen(5000, () => console.log(`server listening on http://localhost:5000`))