// Code your solutions in this file

function writeCards(names, event) {

    let result = []

    for (let i = 0; i < names.length; i++) {
    result.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`)
    }
    return result
}
// const list = ['Tom', 'Pete', 'Mike'];
// const event = "birthday";

// a = writeCards(list, event);

// console.log(a)


function countDown(start) {

    let i = 0
    let number = start

    while (i<=start) {

        console.log(number)
        number -= 1
        i++
    }

}

countDown(10)