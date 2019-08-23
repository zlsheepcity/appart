/** app boot
 *  core interface function & window.onload
 *  2019.8.23
 */


/* ༼°▽°༽ app boot */
function AppKing() {
    let app = this
    app.Has = { Orders: [] }

    function KeepOrder(responsible) {
        return (dna) => app.Has.Orders.push({dna,for:responsible})
    }
    function DelegateOrder(order) {
        if (typeof(app[order.for])==='function') app[order.for](order.dna)
    }
    function ReadOrders() {
        let read  = app.Has.Orders.splice(0, app.Has.Orders.length) // all of them
        read.map((order)=>DelegateOrder(order))
    }
    function QueenUpdate(dna) {
        app[dna.name]=dna.f
    }
    function QueenOnload(dna) {
        if (typeof(dna)==='function') dna();
    }
    app.Welcome = function RunApp() {
        app.loaded = true
        app.update = QueenUpdate
        app.onload = QueenOnload
        ReadOrders()
    }
    app.add = function AddNewFunction(dna) {
        const action = app.loaded ? dna.f : KeepOrder(dna.name)
        app[dna.name] = action
        app.update(dna)
    }

    // use commands
    app.Has.Queens = ['update','onload','mutate']
    app.Has.Queens.map((queen)=>app[queen]=KeepOrder(queen))
}


/* ༼°▽°༽ js runner */
let app = new AppKing()
let run = function apploader (app) {
    let ActivateInterface = () => app.Welcome()
    setTimeout(ActivateInterface, 200)
}

window.onload = run(app)

/* ༼°▽°༽ usage example */
// app.onload(()=>console.log('is-loaded'))

/* ༼°▽°༽ add queen example */
// const custom_function = function SomeFunction(dna){ console.log(dna) }
// app.add({name:'example', f:custom_function})
// app.example('ok-example')
