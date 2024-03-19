// A  list showing a programmer's skills in details
var develporSkills = {
    languages: ["TypeScript", "JavaScript", "Python"],
    frameWorks: ["React", "Angular", "Vue"],
    tools: ["Git", "Webpack", "Docker"],
};
//Getting specific skills from the list 
var languages = develporSkills.languages, frameWorks = develporSkills.frameWorks, tools = develporSkills.tools;
//showing a skill from each category
console.log("Languages: ".concat(languages[1], ",\nFrameWork: ").concat(frameWorks[1], ",\nTools:  ").concat(tools[1], " "));
