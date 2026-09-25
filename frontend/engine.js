function getBanburyAnswer(question) {

  if (!question) {
    return "Please enter a question";
  }

  question = question.toLowerCase();

  for (const topic in dictionary) {

    for (const phrase of dictionary[topic]) {

      if (question.includes(phrase.toLowerCase())) {

        if (knowledgeBase[topic]) {
          return knowledgeBase[topic];
        }

      }

    }

  }

  return
PROBLEM:
Not Identified

MESSAGE:
Banbury AI could not identify the problem.

CONFIDENCE:
0%
`;
}
