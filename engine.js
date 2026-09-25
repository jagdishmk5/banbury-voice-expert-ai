function getBanburyAnswer(question){

question = question.toLowerCase();

for(const topic in dictionary){

for(const phrase of dictionary[topic]){

if(question.includes(phrase.toLowerCase())){

return knowledgeBase[topic];

}

}

}

return `
PROBLEM:
Not Identified

MESSAGE:
Banbury AI could not identify the problem.

Try describing:

- Hard compound
- Soft compound
- Density high
- Mooney high
- Black dots
- Rheo fail

CONFIDENCE:
0%
`;

}
