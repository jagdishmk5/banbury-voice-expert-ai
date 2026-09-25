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

  return "PROBLEM:\nNot Identified\n\nMESSAGE:\nBanbury AI could not identify the problem.\n\nCONFIDENCE:\n0%";
}
``
