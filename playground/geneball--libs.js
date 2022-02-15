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

    Gen.GeneLoveStimul =
        (AAAA,BBBB) => [...AAAA].reduce(
            (p,g,i) => BBBB[i] === g? ++p :p
                ,0);

    // ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ Acid

    // ['RRRR','HHHH','RRFF'] => ['RRRR','RRFF']
    Gen.AcidWeed = acid => acid.reduce(
       (AcW,G) => {
            const b = Gen.GeneMask(AcW[0] && AcW[0][0])
            const h = AcW.length >1 ? AcW.slice(-2)[0]:b
            const r = AcW.slice(0, -1)
            const g = AcW.slice(-1)[0]
            const f = Gen.AcidChallenge
            return !!!AcW.length? [G] :[...r,...f(h,g,G)];
        },[]);

    Gen.AcidChallenge =
       (a,b,c) => {
        if (Array.isArray(a)) [a,b,c] = a
        let h = Gen.GeneLoveStimul
        let friendly = h(c,b) > 1
        let winner =
          1 < h(c,a) && Math.random()*h(c,a)
            > Math.random()*h(b,a)
            ? c:b;
        return friendly ? [b,c] : [winner] ;
        };

    // (['HHHH','HGGG'])('H') = 5
    Gen.AcidStimul = acid => G =>
        [...G].reduce(
            (power,g) => power+
            (acid.join('')
                .match(new RegExp(g,'g')) || [])
                    .length
            ,0);


    // ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ Nuke

    // ({H:['HHHH'],G:['GGGH']})('H') = 5
    Gen.NukeStimul = nuke => G =>
        Object.keys(nuke).reduce(
            (power,g) => power+
            Gen.AcidStimul(nuke[g])(G)
            ,0);

    // ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~

            Gen.Fill = oO => Oo => {
                const acid = G => Gen.AcidWeed([...oO.nuke[G], ...Oo.nuke[G]])
                Object.keys(Oo.nuke).map( G=> {oO.nuke[G]=acid(G)} )
            }

            Gen.Welcome = o =>
                Object.assign( o,{
                    nuke: Gen.Nuke(),
                    Fill: function (oO, keys) {
                        (keys || Object.keys(this.nuke))
                        .map( G => {
                            let fill = {nuke:{ [G]:this.nuke[G] }}
                            Gen.Fill(oO)(fill)
                        });
                        },
                    Hit: function (oO) { this.Fill(oO,['H']) },
                    Get: function (oO) { this.Fill(oO,['G']) },
                    Stimul: function (G) { return Gen.NukeStimul(this.nuke)(G) },
                });
};
