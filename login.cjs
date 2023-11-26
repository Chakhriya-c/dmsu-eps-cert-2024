const express = require('express');
const { MongoClient } = require('mongodb');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3001;

app.use(cors());
app.use(bodyParser.json());

const uri = "mongodb+srv://kirin6320:Ployploy123@eps2024-certificate.u7qirdg.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

app.post('/api/login', async (req, res) => {
  try {
    await client.connect();
    const database = client.db('eps2024-certificate');
    const collection = database.collection('participant_data');

    const { phoneNumber } = req.body;

    if (!phoneNumber || !validator.isMobilePhone(phoneNumber, 'any', { strictMode: false })) {
      return res.status(400).json({ success: false, message: 'Invalid phone number format' });
    }

    const participant = await collection.findOne({ phonenumber: phoneNumber, rank: 'participant' });

    if (participant) {
      // Successfully logged in, you can now generate the certificate
      const certificate = generateCertificate(participant);

      return res.json({ success: true, participant, certificate });
    } else {
      return res.json({ success: false, message: 'Invalid phone number' });
    }
  } catch (error) {
    console.error('Error during login:', error);
    return res.status(500).json({ success: false, message: 'Internal Server Error' });
  } finally {
    await client.close();
  }
});

// Function to generate a certificate (you need to implement this)
function generateCertificate(participant) {
  // Implement your certificate generation logic here
  // You can use a PDF generation library like jsPDF or any other method
  const certificate = `Certificate for ${participant.firstname} ${participant.surname}`;

  // Return the generated certificate
  return certificate;
}

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
