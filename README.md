
# Quiz Question API

This API provides access to quiz questions on various computer science and programming topics. The questions are sourced from the [Sanfoundry API](https://github.com/owaisansarii/sanfoundry-api).

## API Endpoint

The base URL for the API is:

```
https://quizzbackend.onrender.com/api/questions/
```

To fetch questions for a specific topic, append the topic name to the base URL:

```
https://quizzbackend.onrender.com/api/questions/topic_name
```

## Available Topics

The following topics are currently available:

1. AI
2. BasicDSA-I
3. BasicDSA-II
4. CPP
5. DBMS
6. DataScience
7. Js
8. MongoDBMCQs
9. MySQL
10. RDBMS

## Usage Example

To fetch questions on AI, you would use:

```
https://quizzbackend.onrender.com/api/questions/AI
```

## Response

The API returns a set of 15 questions for the requested topic in JSON format. Each question object in the array has the following structure:

```json
{
  "id": 667,
  "Question": "A network with named nodes and labeled arcs that can be used to represent certain natural language grammars to facilitate parsing.",
  "Options": [
    "a) Tree Network",
    "b) Star Network",
    "c) Transition Network",
    "d) Complete Network"
  ],
  "Answer": " Answer: c\nExplanation: None."
}
```

### Response Fields

- `id`: A unique identifier for the question
- `Question`: The text of the question
- `Options`: An array of possible answers
- `Answer`: The correct answer and explanation (if available)

## Note

This API is for educational purposes. Please ensure you comply with the terms of use of the original source material.

## Legal Notice

This project does not currently have a specific license. Users should be aware that in the absence of a license, default copyright laws apply, meaning that the creator retains all rights to their source code and no one may reproduce, distribute, or create derivative works from this work without permission.

## Contributions

If you'd like to contribute additional topics or improve the API, please submit a pull request or open an issue on the project repository.
```
