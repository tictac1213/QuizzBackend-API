const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;
app.use(cors());

// Endpoint to fetch quiz questions from a specified JSON file
app.get('/api/questions/:filename', (req, res) => {
  const filename = req.params.filename;
  const filePath = path.join(__dirname, 'data', `${filename}.json`);

  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: 'Failed to read file' });
    }

    try {
      const jsonData = JSON.parse(data);

      // Randomly select 12 questions
      const randomQuestions = [];
      const allQuestions = jsonData;
      const numQuestions = allQuestions.length;

      if (numQuestions >= 15) {
        const selectedIndices = new Set();
        while (selectedIndices.size < 15) {
          const randomIndex = Math.floor(Math.random() * numQuestions);
          selectedIndices.add(randomIndex);
        }

        for (const index of selectedIndices) {
          randomQuestions.push(allQuestions[index]);
        }
      } else {
        randomQuestions.push(...allQuestions);
      }

      res.json(randomQuestions);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Failed to parse JSON data' });
    }
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});