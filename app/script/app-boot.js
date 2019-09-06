/** app boot
 *  core interface function & window.onload
 *  better if pasted in html head
 *  2019.9.6
 */


/* ༼°▽°༽ app boot */
function AppBoot() {

 // The Noble Blastula
    let app = this
    app.has = { memory: [], arrived:true }
    /*
    King has arrived.
    Take the Queen.
    Keep in memory.
    Execute later.
    2019.9.5
    */

 // The Noble Provocator
    const proteinProvoker = function ForceErrorsIfShouldBe () {
      let tpp = new this.__proto__.constructor()
      let must_have_a_memory = tpp.has.memory.push('something')
      let must_accept_queens = like_this_one => true
      tpp.attach('queen_id')(must_accept_queens)
      tpp.queen_id('try this')
    }

 // Define responsibility
    const TakeTheQueen = (queen) =>
        {
            app[queen] =  ExecuteLater(queen)
            return (f) => ExecuteLater('update')({name:queen,f})
        }
    const KeepInMemory = (dna) => app.has.memory.push(dna)
    const ExecuteLater =
         (responsible) =>
                 (dna) => KeepInMemory({dna,for:responsible})

 // Apply responsibility
    app.attach = TakeTheQueen
    app.ForceErrorsIfShouldBe = proteinProvoker

 // Prepare Primary Queens
    const queens = ['onload', 'mutate']
    queens.map( queen => app.attach(queen) )
}
//  -------------------------------- AppBoot run immideately
let app = new AppBoot()
app.ForceErrorsIfShouldBe()



/* ༼°▽°༽ usage example */
/*
    let custom_function = like_this_one => true

    app.onload(custom_function)

    app.onload(()=>custom_function('data'))

    tpp.attach('function_id')(custom_function)
    tpp.function_id('data')
*/
