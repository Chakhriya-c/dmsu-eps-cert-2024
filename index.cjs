const express = require('express');
const cors = require('cors');
const axios = require('axios');
const validator = require('validator');

const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());

// Fetch and print the first participant when the server starts
app.get('/api/participants', async (req, res) => {
  try {
    const response = await axios.post(
      'https://ap-southeast-1.aws.data.mongodb-api.com/app/data-ukbtx/endpoint/data/v1/action/findOne',
      {
        collection: 'participant',
        database: 'participant_data',
        dataSource: 'eps2024-certificate',
        projection: {
          _id: 1,
          firstname: 1,
          surname: 1,
          phonenumber: 1,
          rank: 1,
        },
      },
      {
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Request-Headers': '*',
          'api-key': 'ZuLrJ1ZHSqWR4lKr5zSaTCPJXiwYBYzPO9mvq56FXYktpSkqR45LPjwDfBeAW2ZC',
        },
      }
    );

    const firstParticipant = response.data;
    console.log('First participant:', firstParticipant);
    res.json(firstParticipant);
  } catch (error) {
    console.error('Error fetching participant data:', error);
    res.status(500).send('Internal Server Error');
  }
});

// Login endpoint to check if the input phone number matches the database
app.post('/api/login', async (req, res) => {
  try {
    const { phoneNumber } = req.body;

    if (!phoneNumber || !validator.isMobilePhone(phoneNumber, 'any', { strictMode: false })) {
      return res.status(400).json({ success: false, message: 'Invalid phone number format' });
    }

    const response = await axios.post(
      'https://ap-southeast-1.aws.data.mongodb-api.com/app/data-ukbtx/endpoint/data/v1/action/find',
      {
        collection: 'participant',
        database: 'participant_data',
        dataSource: 'eps2024-certificate',
        filter: { phonenumber: phoneNumber, rank: 'participant' },
        limit: 1,
      },
      {
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Request-Headers': '*',
          'api-key': 'ZuLrJ1ZHSqWR4lKr5zSaTCPJXiwYBYzPO9mvq56FXYktpSkqR45LPjwDfBeAW2ZC',
        },
      }
    );

    const participants = response.data.documents;

    if (participants && participants.length > 0) {
      const firstParticipant = participants[0];
      console.log('Participant data:', firstParticipant);
      return res.json({ success: true, participant: firstParticipant });
    } else {
      return res.json({ success: false, message: 'Invalid phone number' });
    }
  } catch (error) {
    console.error('Error during login:', error);
    return res.status(500).json({ success: false, message: 'Internal Server Error' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
