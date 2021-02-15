import Articuno from './models/Articuno.js'
import Blaziken from './models/Blaziken.js'
import Charizard from './models/Charizard.js'
import Dragonite from './models/Dragonite.js'
import Espeon from './models/Espeon.js'
import Feraligatr from './models/Feraligatr.js'
import Garchomp from './models/Garchomp.js'
import Heracross from './models/Heracross.js'
import Impidimp from './models/Impidimp.js'
import Jolteon from './models/Jolteon.js'
import Kartana from './models/Kartana.js'
import Luxray from './models/Luxray.js'
import Moltres from './models/Moltres.js'
import Naganadel from './models/Naganadel.js'
import Obstagoon from './models/Obstagoon.js'
import Primarina from './models/Primarina.js'
import Quagsire from './models/Quagsire.js'
import Rotom from './models/Rotom.js'
import Scizor from './models/Scizor.js'
import Typhlosion from './models/Typhlosion.js'
import Umbreon from './models/Umbreon.js'
import Victini from './models/Victini.js'
import Weavile from './models/Weavile.js'
import Xatu from './models/Xatu.js'
import Yanmega from './models/Yanmega.js'
import Zapdos from './models/Zapdos.js'

let starters = []
let legendaries = []
let pseudoLegendaries = []
let normies = []


let amy = new Articuno('Amy', 'Blue', 'Ice/Flying', 144)
let barry = new Blaziken('Barry', 'Red', 'Fire/Fighting', 257)
let charles = new Charizard('Charles', 'Orange', 'Fire/Flying', 6)
let darryl = new Dragonite('Darryl', 'Brown', 'Dragon/Flying', 149)
let emmy = new Espeon('Emmy', 'Purple', 'Psychic', 196)
let frank = new Feraligatr('Frank', 'Blue', 'Water', 160)
let gary = new Garchomp('Gary', 'Purple', 'Dragon/Ground', 445)
let henry = new Heracross('Henry', 'Blue', 'Bug/Fighting', 214)
let izzy = new Impidimp('Izzy', 'Pink and black', 'Dark/Fairy', 859)
let jenna = new Jolteon('Jenna', 'Yellow', 'Electric', 135)
let kevin = new Kartana('Kevin', 'White, Orange and Yellow', 'Grass/Steel', 798)
let leo = new Luxray('Leo', 'Black, Blue and Yellow', 'Electric', 405)
let monty = new Moltres('Monty', 'Orange and Yellow', 'Fire/Flying', 146)
let noah = new Naganadel('Noah', 'Purple', 'Poison/Dragon', 804)
let ozzy = new Obstagoon('Ozzy', 'Black and White', 'Dark/Normal', 862)
let phoebe = new Primarina('Phoebe', 'White, Blue and Pink', 'Water/Fairy', 730)
let quinn = new Quagsire('Quinn', 'Blue', 'Water/Ground', 195)
let renee = new Rotom('Renee', 'Orange', 'Electric/Ghost', 479)
let sara =  new Scizor('Sara', 'Burgundy', 'Bug/Steel', 212)
let terry = new Typhlosion('Terry', 'Blue, Tan and Red', 'Fire', 157)
let uriel = new Umbreon('Uriel', 'Black', 'Dark', 197)
let vDrive = new Victini('V-Drive', 'Orange and Tan', 'Psychic/Fire', 494)
let winston = new Weavile('Winston', 'Purple and Burgundy', 'Dark/Ice', 461)
let xæaxii = new Xatu('X æ a-xii', 'Green', 'Psychic/Flying', 178)
let yvette = new Yanmega('Yvette', 'Dark Green', 'Bug/Flying', 469)
let zach = new Zapdos('Zach', 'Yellow', 'Electric/Flying', 145)




starters.push(barry, charles, frank, phoebe, terry)
legendaries.push(amy, kevin, monty, renee, vDrive, zach)
pseudoLegendaries.push(darryl, gary, noah)
normies.push(emmy, henry, izzy, jenna, leo, ozzy, quinn, sara, uriel, winston, xæaxii, yvette)
