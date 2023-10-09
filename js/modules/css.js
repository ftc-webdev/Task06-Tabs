'use strict'

let cssPrefix   // define the variable - no default value. use init to initialise this var
/*

    allow the user to specify an external optional stylesheet 

    move this to it's own module

*/
const insertExternalStylesheet = (path) => {

    let el = document.createElement("link")
    el.href = path
    el.rel = "stylesheet"
    
    try {
        // it may or may not exist - we can't tell
        document.head.appendChild(el)
    } catch (e) {
        // it prob doesn't exist
        console.error("It probably doesn't exist :" + path, e)
    }

}

const klass = (name) => {
    if(name[0]===".") name = name.substr(1) // strip out . if included by mistake
    return `${cssPrefix}-${name}`   // look, no dot prefix - use with classList
}

const css = (selector) => {
    const firstChar = selector[0]   // . or #
    if(".#".search(firstChar) == -1) console.error("Error: first character of selector must be . or #. User provided "+firstChar)
    selector = selector.substr(1)   // rest of the string
    let str = `${firstChar}${cssPrefix}-${selector}`
    return str
}

const insertCSS = (style) => {
    let el = document.createElement("style")
    el.innerText = style
    document.body.appendChild(el)
}


const cssInit = (initialCssPrefix) => {
    cssPrefix = initialCssPrefix    // this inits the cssPrefix
}

export {
    cssInit,
    css,
    klass,
    insertCSS,
    insertExternalStylesheet
}

