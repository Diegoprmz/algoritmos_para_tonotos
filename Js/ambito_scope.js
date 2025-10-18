// Qué es un ámbito o Scope?
/* 
Scope es el contexto en el que los valores, variables y las expresiones son "visibles" o pueden ser referenciados. 
Si una variable o una expresión no está en el Scope actual, no puede ser utilizada o estar disponible para verse o usarse.
*/
/* 
var/let nombre = 'Ana' // Variable global

function saludar() {
    let apellido = 'García' // Variable local
    console.log(nombre + ' ' + apellido) // Puede acceder a ambas
}

saludar() // "Ana García"
console.log(nombre) // "Ana" ✅
console.log(apellido) // ❌ Error: apellido is not defined
┌─────────────────────────────────────────────────────┐
│                 SCOPE GLOBAL                        │
│                                                     │
│  let nombre = 'Ana' ← Accesible desde cualquier     │
│                       lugar del código              │
│                                                     │
│  ┌───────────────────────────────────────────────┐  │
│  │            SCOPE DE FUNCIÓN                   │  │
│  │            function saludar()                 │  │
│  │                                               │  │
│  │  let apellido = 'García' ← Solo accesible     │  │
│  │                            dentro de esta     │  │
│  │                            función            │  │
│  │                                               │  │
│  │  console.log(nombre + apellido)               │  │
│  │              ↑         ↑                      │  │
│  │              │         └─ Variable local      │  │
│  │              └─ Variable global (accesible)   │  │
│  │                                               │  │
│  └───────────────────────────────────────────────┘  │
│                                                     │
│  console.log(nombre) ← ✔︎ Funciona                   │
│  console.log(apellido) ← ✖︎ Error: no existe aquí    │
│                                                     │
└─────────────────────────────────────────────────────┘
*/
/* 
let global = 'Soy global'

function externa() {
    let externa_var = 'Soy de la función externa'

    function interna() {
    let interna_var = 'Soy de la función interna'
    
        // Puede acceder a todas:
        console.log(interna_var)  // "Soy de la función interna"
        console.log(externa_var)  // "Soy de la función externa"  
        console.log(global)       // "Soy global"
    }

    // Aquí sólo puedes acceder a "externa_var" y "global"
    interna() // console.log(interna_var) // ❌ Error: no puede acceder
}

// Aquí sólo puedes acceder a la variable "global"
externa()

┌───────────────────────────────────────────────────────────┐
│                    SCOPE GLOBAL                           │
│                                                           │
│  let global = 'Soy global'                                │
│                                                           │
│  ┌─────────────────────────────────────────────────────┐  │
│  │              SCOPE FUNCIÓN EXTERNA                  │  │
│  │                                                     │  │
│  │  let externa_var = 'Soy de la función externa'      │  │
│  │                                                     │  │
│  │  ┌───────────────────────────────────────────────┐  │  │
│  │  │           SCOPE FUNCIÓN INTERNA               │  │  │
│  │  │                                               │  │  │
│  │  │  let interna_var = 'Soy la función interna    │  │  │
│  │  │                                               │  │  │
│  │  │                                               │  │  │
│  │  │  Puede acceder a:                             │  │  │
│  │  │  ✔︎ interna_var (scope local)                  │  │  │
│  │  │  ✔︎ externa_var (scope padre)                  │  │  │
│  │  │  ✔︎ global (scope global)                      │  │  │
│  │  │                                               │  │  │
│  │  └───────────────────────────────────────────────┘  │  │
│  │                                                     │  │
│  │  Puede acceder a:                                   │  │
│  │  ✔︎ externa_var (scope local)                        │  │
│  │  ✔︎ global (scope global)                            │  │
│  │  ✖︎ interna_var (scope hijo - no accesible)          │  │
│  │                                                     │  │
│  └─────────────────────────────────────────────────────┘  │
│                                                           │
│  Puede acceder a:                                         │
│  ✔︎ global (scope local)                                   │
│  ✖︎ externa_var (scope hijo - no accesible)                │
│  ✖︎ interna_var (scope nieto - no accesible)               │
│                                                           │
└───────────────────────────────────────────────────────────┘

// JERARQUÍA 
1. Scope local
2. Scope de la función o contexto padre
3. Scope global

// TIPOS DE SCOPE
1. Scope Global: Accesible desde cualquier lufgar del documento 
2. Scope de Función (Locales): Son variables declaradas dentro de una función
3. Scope de Bloque (Locales): Variables delcaradas dentro de {} (if, for, while, etc)

*/

// 



// DIEFERNCIA ENTRE VAR Y LET
/* 
var tiene scope solamente de función, es decir, ignora los bloques y solamente respeta el scope de la función
let tiene scope de bloque, respeta tanto el scope de la función como el del bloque
*/
























