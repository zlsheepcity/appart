/**/ // ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ Genetics

const GeneticsLibrary = function
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

    // ['RGFH','RHFG',...]
    Gen.Acid = level => base => {
        const r = Array(level||0).fill(0)
        const g = r => r.map(f)
        const f = x => Gen.Gene(base)
        return g(r);
        };

    // {R:[],G:[],F:[],H:[]}
    Gen.Nuke = level => {
        const  r = [...Gen.SEED]
        const  g = x => x.reduce(f, {})
        const  f = (a,G) => (a[G]=h(G),a)
        const  h = G => Gen.Acid(level)(G)
        return g(r);
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

    // {R:[],F:[],G:[],H:[]}
    Gen.BabyNuke = level => {
        const  r = Gen.Nuke(level)
        const  g = G => Gen.AcidWeed(r[G])
        const  f = (n,G) => ({...n, [G]:g(G)})
        const  h = Object.keys(r).reduce(f,{})
        return h; // {}
        };

    // ({H:['HHHH'],G:['GGGH']})('H') = 5
    Gen.NukeStimul = nuke => G =>
        Object.keys(nuke).reduce(
            (power,g) => power+
            Gen.AcidStimul(nuke[g])(G)
            ,0);

    // oO{RGFH} + {RGFH} = oO{RGFH}
    Gen.NukeFill = oO => fill => {
        const acid = G => Gen.AcidWeed([...oO.nuke[G], ...fill[G]])
        return Object.keys(fill).map( G=> {oO.nuke[G] = acid(G)} );
    }


    // ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ Artefacts

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

    // ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~
};

let Gen = new GeneticsLibrary()
let testGen = f => {
    const n = Gen.Nuke(3)
    const m = Gen.Nuke(3)
    const o = {nuke:{...m}}
    const d = Gen.NukeFill(o)(n)
    const b = o.nuke
  f?console.groupCollapsed('testGen...')
   :console.group('testGen')
    console.log('Gene', Gen.Gene())
    console.log('Acid', Gen.Acid(3)('R'))
    console.log('Nuke / NukeStimul / NukeFill')
    console.log('...'); for (G in n)
    console.log(G, Gen.NukeStimul(n)(G), n[G])
    console.log('...'); for (G in m)
    console.log(G, Gen.NukeStimul(m)(G), m[G])
    console.log('...'); for (G in b)
    console.log(G, Gen.NukeStimul(b)(G), b[G])
    console.groupEnd()
    return 'testOK'
};  console.log('testGen()');

const NameWizard = base => {
    const Header = 'DMNLTGH'
    const Bodies = ['INA','ORA','ANA','IKO']
    const f = oo => oo[Math.floor( Math.random()*oo.length )]
    return (base || f(Header)) + f(Bodies);
};

const GMO = function GeneticallyModifiedObject
(dna) {
    let GMO = Object.assign(this,dna)
    let NukeStimul = Gen.NukeStimul
    let NukeFill   = Gen.NukeFill
    GMO.nuke       = Gen.BabyNuke(GMO.level||0)
    GMO.name       = GMO.name || NameWizard()

    GMO.Stimul = function (G) { return NukeStimul(this.nuke)(G) }

    GMO.Run  = function (oO) { this.Fill(oO,['R']) }
    GMO.Get  = function (oO) { this.Fill(oO,['G']) }
    GMO.Fix  = function (oO) { this.Fill(oO,['F']) }
    GMO.Hit  = function (oO) { this.Fill(oO,['H']) }
    GMO.Fill = function (oO, keys) {
        let N = {...this.nuke}
        let K = keys || Object.keys(N)
        K.map( G=> NukeFill(oO)({[G]:N[G]}) );
        };

    GMO.Profile = function (s) {
        console[s?'groupCollapsed':'group']('oO:'+this.name)
        for (G in this.nuke)
        console.log(G, NukeStimul(this.nuke)(G), this.nuke[G])
        console.groupEnd()
        return 'Looks good' ;};
};

const GameState = function
(dna) {
    const State = Object.assign(this,dna)
    State.Reset = function () {
        State.currentPoint = 0
        State.currentTouch = 0
        State.currentStage = 0
        State.currentSquad = 0
        State.currentSheep = [0,0]
        State.currentScore = [0,0]
    };
    State.Balls = []
    State.Teams = [[],[]]
    State.Squad = f => State.Teams[State.currentSquad]
    State.Sheep = f => State.Squad()[State.currentSheep[State.currentSquad]]

    State.Start = function (dna) {

        // init
        Object.assign(State,dna)
        logGameStateStarted(State)

        // run
        State.Stage()
    };

    State.Stage = function () {

        // play
        const AllStages = ['StageRun','StageGet','StageFix','StageHit']
        const PlayStage = State[AllStages[State.currentStage]]
        PlayStage()

        // check score
        const scoreContinue = S=> (M=> S[0]<M && S[1]<M)
        const winnerDecided = !scoreContinue(State.currentScore)(3)
        if (winnerDecided) return State.StageComplete();
        logGameStateCheckScore(State)

    };
    State.StageRun = function () {

        // init
        const BallRefreshProfile = {level:1,name:'Ball-'+State.currentPoint}
        State.Balls[State.currentPoint] = new GMO(BallRefreshProfile)
        const Ball = State.Balls[State.currentPoint]
        const Sheep = State.Sheep()
        logGameStateStageRunBall(State)

        // hit
        Sheep.Hit(Ball)
        logGameStateStageRunHit(State)
    };

    // Servants

    State.StageComplete = function () {
        logGameStateStageComplete(State)
    };

    State.QuickStart = function () {
        const level = 3
        const Teams = [
            [new GMO({level}), new GMO({level}), new GMO({level})],
            [new GMO({level}), new GMO({level}), new GMO({level})]]
        State.Start({Teams});
    };

    // init
    State.Reset()
};
let testGame = f => {
  f?console.groupCollapsed('testGame...')
   :console.group('testGame')
    let Game = new GameState()
    Game.QuickStart()
    console.groupEnd()
    return 'testOK'
};  console.log('testGame()');
  //console.log('g=new GameState();g.QuickStart()')

let logGameStateStarted = game => {
    log('~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~')
    log('Game Start')
    log('Score:',game.currentScore)
    log('Teams:',game.Teams)
};
let logGameStateCheckScore = game => {
    log('Game continues. Score:',game.currentScore)
};
let logGameStateStageComplete = game => {
    log('Game ended.', 'Stage:', game.currentStage)
    log('Score:',game.currentScore)
};
let logGameStateStageRunBall = game => {
    log('StageRun - Ball prepare')
    game.Balls[game.currentPoint].Profile(1)
    game.Sheep().Profile(1)
};
let logGameStateStageRunHit = game => {
    log('StageRun - Hit')
    game.Balls[game.currentPoint].Profile(1)
};
