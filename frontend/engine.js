function getBanburyAnswer(question) {

  if (!question) {
    return "Please enter a question";
  }

  question = question.toLowerCase();

  let results = [];

  for (const topic in dictionary) {

    for (const phrase of dictionary[topic]) {

      if (question.includes(phrase.toLowerCase())) {

        if (
          currentLanguage === "hi" &&
          typeof knowledgeBaseHindi !== "undefined" &&
          knowledgeBaseHindi[topic]
        ) {

          results.push(knowledgeBaseHindi[topic]);
          break;

        }

        if (
          currentLanguage === "mr" &&
          typeof knowledgeBaseMarathi !== "undefined" &&
          knowledgeBaseMarathi[topic]
        ) {

          results.push(knowledgeBaseMarathi[topic]);
          break;

        }

        if (knowledgeBase[topic]) {

          results.push(knowledgeBase[topic]);
          break;

        }

      }

    }

  }

  if (results.length > 0) {

    return results.join("\n\n================================\n\n");

  }

  if (currentLanguage === "hi") {

    return `
समस्या:
पहचानी नहीं गई

विश्वास स्तर:
0%
`;

  }

  if (currentLanguage === "mr") {

    return `
समस्या:
ओळखता आली नाही

विश्वास पातळी:
0%
`;

  }

  return `
PROBLEM:
Not Identified

CONFIDENCE:
0%
`;

}
