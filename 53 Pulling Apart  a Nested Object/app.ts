// A  list showing a programmer's skills in details
let develporSkills={
    languages:["TypeScript","JavaScript","Python"],
    frameWorks:["React","Angular","Vue"],
    tools:["Git","Webpack","Docker"],
};

//Getting specific skills from the list 
let{languages,frameWorks,tools}=develporSkills;

//showing a skill from each category
console.log(`Languages: ${languages[1]},
FrameWork: ${frameWorks[1]},
Tools:  ${tools[1]} `);
