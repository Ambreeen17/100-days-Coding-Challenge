function replaceJavaScriptWithTypeScript(sentence) {
    return sentence.replace(/JavaScript/g, "TypeScript");
    //uses a regular expression with 'g' flag for a global replacement
}
console.log(replaceJavaScriptWithTypeScript("I love JavaScript and JavaScript is awesome!"));
