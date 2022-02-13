/**/ // ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ Genetics

const fromGeneticsLibrary = function
(dna) {
    let Gen = Object.assign(this,dna)

    let StimulFrom = oO => ({G:2,H:7})
    Gen.Stimul = oO => StimulFrom(oO)

};