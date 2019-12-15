/*  App Core, 8002
 *  2019.7.17
 */


        /* ༼°▽°༽ app boot */
        function BootKing() {
            let  King = this
            King.has  =  {
                 Queens: ['mutate','onload'],
                 Memory: [],
                 toRemember: (something) => King.has.Memory.push(something) }
            function KeepInMemory(responsible) {
                 return (dna) => King.has.toRemember({dna,for:responsible}) }
            King.has.Queens.map( (queen)=>King[queen]=KeepInMemory(queen) ) }

        let app = new BootKing()

function x () {}


function AppKing (dna) {
    const ModelDNA = { has: { Memory:[], Queens:[] }}
    let King = this
}


/*





*/


/*  EOF App Core */
