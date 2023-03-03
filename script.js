let stocks = {
    fruits : ["Strawberry", "Grapes", "Orange", "Banana", "Apple"],
    liquid : ["Water", "Ice"],
    holder: ["Cone", "Cup", "Stick"],
    topping : ["Peanut", "Choclate"]
}

/*
let order = (fruit_name, call_production)=>{

    setTimeout(() => {
        console.log(`${stocks.fruits[fruit_name]} Was selected`)
        call_production( )
    }, 2000);
}
let production = ( )=>{

    setTimeout(() => {
        console.log("Production has started")

        setTimeout(() => {
            console.log("Fruit has been chopped")

            setTimeout(() => {
                console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} Was added`)

                setTimeout(() => {
                    console.log("Start the Machine")
                    
                    setTimeout(() => {
                        console.log(`${stocks.holder[1]} Was picked`)

                        setTimeout(() => {
                            console.log(`${stocks.topping[0]} topping was selected`)

                            setTimeout(() => {
                                console.log("Ice Cream was served")
                            }, 2000);
                        }, 3000);
                    }, 2000);
                }, 1000);
            }, 1000);
        }, 2000);
    }, 0000);
}
order("0",production);
*/

let is_shop_open = true;

/*
let order = (time, work)=>{
    return new Promise((resolve, reject) => {
        if (is_shop_open) {

            setTimeout(() => {
                resolve(work( ))
            }, time);
           
        } else {
            reject(console.log("Shop has been closed"))
        }
    })
}
order( 2000, ( )=>console.log(`${stocks.fruits[1]} was selected`))

.then(()=>{
    return order(0000, ( )=>console.log("Production has started"))
})
.then(()=>{
    return order(2000, ( )=>console.log("Fruits has been chopped"))
})
.then(()=>{
    return order(1000, ( )=>console.log(`Add ${stocks.liquid[0]} and ${stocks.liquid[1]}`))
})
.then(()=>{
    return order(1000, ( )=>console.log("Start the machine"))
})
.then(()=>{
    return order(2000, ( )=>console.log(`${stocks.holder[2]} are selected`))
})
.then(()=>{
    return order(3000, ( )=>console.log(`${stocks.topping[1]} are selected`))
})
.then(()=>{
    return order(2000, ( )=>console.log("Serve the Ice cream"))
})

.catch(( )=>{
    console.log("Customer left")
})

.finally(( )=>{
    console.log("Day ended, shop is closed")
})
*/


/*
let order = ( )=>{
    return new Promise((resolve, reject) => {
        if () {
            resolve( )
        } else {
            reject( )
        }
    })
}
order( )
.then( )
.then( )
.then( )
.catch( )
.finally( )

async function order( ){
    try {
        await abc
    } catch (error) {
        console.log("Abc doesn't exist", Error)
    }
    finally{
        console.log("Run code anyways")
    }
}
order( )
 */


/*
let topping_choice = ( )=>{
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(
                console.log("Which topping would you want?")
            )
        }, 3000);
    })
}
async function kitchen( ){
    console.log("a")
    console.log("b")
    console.log("c")

    await topping_choice( )
    console.log("d")
    console.log("e")
}
kitchen( )
console.log("Cleaning the dishes")
console.log("Cleaning the tables")
console.log("Taking order")

*/

function time(ms){
    return new Promise((resolve, reject) => {
        if (is_shop_open) {
            setTimeout(resolve, ms)
        } else {
            reject(console.log("Shop is closed"))
        }
    })
}
async function kitchen( ){
    try{ 
        await time(2000)
        console.log(`${stocks.fruits[0]}`)

        await time(0000)
        console.log("Start the production")
        
        await time(0000)
        console.log("Cut the fruits")

        await time(1000)
        console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} are added`)

        await time(1000)
        console.log("Start the Machine")

        await time(2000)
        console.log(`${stocks.holder[0]} are selected`)

        await time(3000)
        console.log(`${stocks.topping[1]} are selected`)

        await time(2000)
        console.log("Serve the ice cream")
    }
    catch(error){
        console.log("Customer left", error)
     }
    finally{
        console.log("Day ended Shop is closed")
    }
}
kitchen( )