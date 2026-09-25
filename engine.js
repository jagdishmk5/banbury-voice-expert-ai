function getBanburyAnswer(question){

if(!question){
return `
PROBLEM:
No Question Entered

MESSAGE:
Please type or speak your question.
`;
}

question = question.toLowerCase().trim();

for(const topic in dictionary){

for(const phrase of dictionary[topic]){

if(
question.includes(
phrase.toLowerCase()
)
){

if(knowledgeBase[topic]){
return knowledgeBase[topic];
}

}

}

}

return `
PROBLEM:
Not Identified

MESSAGE:
Banbury AI could not identify the problem.

TRY EXAMPLES:

• Compound hard hai
• Compound soft hai
• Density high hai
• SG high hai
• Mooney high hai
• Viscosity high hai
• Black dots aa rahe hai
• Compound lumpy hai
• Rheo fail hai
• MDR fail hai
• Torque high hai
• Dump temperature issue hai
• Carbon black high hai
• Oil low hai

CONFIDENCE:
0%
`;

}
