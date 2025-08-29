// __________________________________ CONTENTS ___________________________________
// 
//    This is a KaTeX setup for rendering LaTeX formulas in documentation.
//    
//    See: https://squidfunk.github.io/mkdocs-material/reference/math/
// _______________________________________________________________________________

document$.subscribe(({ body }) => {
    renderMathInElement(body, {
        delimiters: [
            { left: "$$", right: "$$", display: true },
            { left: "$", right: "$", display: false },
            { left: "\\(", right: "\\)", display: false },
            { left: "\\[", right: "\\]", display: true }
        ],
    })
})