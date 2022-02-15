/**/ // ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ Genetics

const fromGeneticsLibrary = function
(dna) {
    let Gen = Object.assign(this,dna)

    Gen.SEED ='RGFH'

    // 'RGFH'
    Gen.Gene = base => {
        const  r = Gen.SEED
        const  g = r => f(h)+f(h+r)+f(h+r)+f(h+r)
        const  f = x => x[Math.floor( Math.random()*x.length )]
        const  h = base || f(r)
        return g(r);
        };

    // ['RGFH','RHFG']
    Gen.Acid = level => base => {
        const r = Array(level||0).fill(0)
        const g = r => r.map(f)
        const f = x => Gen.Gene(base)
        return g(r);
        };

    // {R:[],F:[],G:[],H:[]}
    Gen.Nuke = level => {
        const  r = [...Gen.SEED]
        const  g = x => x.reduce(f, {})
        const  f = (a,G) => (a[G]=h(G),a)
        const  h = G => Gen.Acid(level)(G)
        return g(r); // {}
        };

    // ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ Gene

    Gen.GeneMask =
        o => [...Gen.Gene()]
               .fill(o||'O')
                .join('');

    Gen.PairLoveStimul =
        (AAAA,BBBB) => [...AAAA].reduce(
            (p,g,i) => BBBB[i] === g? ++p :p
                ,0);
};
