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
    app.has.queens = [ 'onload', 'mutate' ]
    /*
    King has arrived --- let app = new AppBoot()
    Take the Queen ----- app.attach('queen_name')(function)
    Keep in memory ----- app.queen_name(function_parameters)
    Execute later ------ app.onload(function)
    2019.9.15
    */

 // The Noble Provocator
    const proteinProvoker = function ImitateCriticalTasks () {
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
    app.has.queens.map( queen => app.attach(queen) )
    app.ForceErrorsIfShouldBe =  proteinProvoker
}

//  -------------------------------- run immidiately
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
