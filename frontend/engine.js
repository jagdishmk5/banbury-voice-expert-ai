function getBanburyAnswer(question) {

  if (!question) {
    return "Please enter a question";
  }

  question = question.toLowerCase();

  for (const topic in dictionary) {

    for (const phrase of dictionary[topic]) {

      if (question.includes(phrase.toLowerCase())) {
        
     
        if (currentLanguage === "hi" &&
            typeof knowledgeBaseHindi !== "undefined" &&
            knowledgeBaseHindi[topic]) {

      
        return knowledgeBaseHindi[topic];

        }

         if (
currentLanguage === "mr" &&
typeof knowledgeBaseMarathi !== "undefined" &&
knowledgeBaseMarathi[topic]
) {
           return knowledgeBaseMarathi[topic];
         }

        if (knowledgeBase[topic]) {

          return knowledgeBase[topic];

        }

      }

    }

  }

  if (currentLanguage === "hi") {

    return `
समस्या:
पहचानी नहीं गई

संदेश:
Banbury AI समस्या पहचान नहीं सका

विश्वास स्तर:
0%
`;

  }

  return `
PROBLEM:
Not Identified

MESSAGE:
Banbury AI could not identify the problem.

CONFIDENCE:
0%
`;

}
