'use strict'

import { selectorBodyAdjacent, init } from "./modules/tabs/index.js"

document.addEventListener("DOMContentLoaded", () => {

    const { headers, bodies }  = selectorBodyAdjacent("h3")

    init(headers, bodies, "tabs-container", "/css/test.css")


})