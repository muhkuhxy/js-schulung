////////////////////////
// SLIDE CODE //////////
////////////////////////

function foo() { }

const adviser = {
   foo: foo
}

const adviser2 = {
   foo
}



const adviser3 = {
   foo: function () {
   }
}



const adviser4 = {
   foo() {
   }
}


const adviser5 = {
   name: 'Adam Adviser',
   clients: [
      { name: 'Lady Brittany' }
   ]
}

const adviserName = adviser5.name;
const adviserClientName = adviser5.clients[0].name


const { name, clients } = adviser5

const [firstClient, secondClient] = clients




function adviser6(names) {
   const firstName = names[0]
   const lastName = names[1]
   // ...
}

function adviser7([firstName, lastName]) {
   // ...
}
const actions = {
   doSomething(context) {
      context.commit('myMutation')
   }
}

const actions = {
   doSomething({ commit }) {
      commit('myMutation')
   }
}




const apiResult = {
   client: null
}

const client = {}

const { client: clientResult } = apiResult
// clientResult definiert


const adviser8 = {
   name: 'Adam Adviser',
   clients: [
      { name: 'Lady Brittany' }
   ]
}

const { name, clients: [first] } = adviser8
// name und first definiert, clients aber nichts


// file: library.js

function foo() {
   // ...
}

function bar() {
   // ...
}

export {
   foo,
   bar
}



// file: app.js

import { foo, bar } from './library'

foo()
bar()

// oder

import * as lib from './library'

lib.foo()
lib.bar()



// file: library.js

export function foo() { }

export function bar() { }

export const ANSWER = 42


// file: library.js

export default function veryImportantFunction() { }



// file: app.js

import nameCanBeDifferentForDefaultExports from './library'




function oldVarArgFunction(first, second) {
   const third = arguments[2]
   const rest =
      Array.prototype.slice.call(arguments, 2)
   // rest.map( ... )
}

myVarArgFunction(1, 2, 3, 4)
// in der function ist third = 3
// rest = [3,4]


function myEs6VarArgFunction(first, second, ...rest) {
   // rest ist ein array
   // rest.map( ... )
}


const clients = api.getClients()

const [first, second, ...rest] = clients


const resource = {
   main: ...,
   spouse: ....,
   furtherInformation: ...,
   anotherKey: ...
               }

const { main, spouse, ...foo } = resource
// foo = {
//    furtherInformation,
//    anotherKey
// }



const foo = [1, 2, 3]
const bar = [4, 5, 6]

const qux = [...foo, ...bar]
// qux = [1, 2, 3, 4, 5, 6]



// in Component.vue
updateItem({ commit, actions, state },
   { index: 3, furtherInformation: 'text' })

// in store.js
async updateItem({ commit, ...context },
   { index, ...changes }) {

   commit('setFields', {
      _itemsKey: 'pensions',
      _index: index,
      ...changes
   });

   savePensions(context);
},



function greet(name) {
   if (name == null) {
      ...
   }
}


function greet(name = 'Adviser') {
   return `Hello, ${name}`
}



const error = 'Error occured while performing ' + action +
   ' against URL ' + url + ' resulting in status code ' +
   statusCode

// syntax fehler
const multiline = 'foo
bar'


// multiline ist kein syntax fehler
const error = `Error occured while performing ${action} 
                     against URL ${url} resulting in status code ${statusCode}`


[1, 2, 3].map(function (x) { return x * x })


[1, 2, 3].map((x) => { return x * x })

// bei genau einem parameter können () weg

[1, 2, 3].map(x => { return x * x })

// wenn body genau ein statement ist können {} weg
// und return ist implizit

[1, 2, 3].map(x => x * x)


loadPensions({ commit }, { sessionId }) {
   api.loadPensions().then(result => {
      // success, do something with result
   }, error => {
      // handle error
   }).then(... )

   async loadPensions({ commit }, { sessionId }) {
      const pensions = await api.loadPensions(sessionId);
                     ...
   }
