import { User } from "./types/IUser"

//New comment _ HI!!

function helloWorld() {
    console.log("Hello world! :")
}

function testDataTypes() {

    const name: string = ""
    const name2: String = "" // NOT recommended (capital S)
    
    const age: number = 15
    const currency: number = 289.5

    const isTired: boolean = true
    const isLoggedIn: boolean = false

    const highScoreList: number[] = [250, 150, 0]
    const userNameList: Array<string> = ["Benny", "Lia","Bob"]
  
  //avoid use any
  let anyDataType: any = ""
  anyDataType = 0
  anyDataType = true


  function returnNothing() {} // void by default
  function returnNothingExplicit(): void {}
  function additionExample(): number {
    return 2+2
  }

  const userWithoutInterface: {username: string, password: string} = {
    username: "",
    password: "",
  }

  const user: User = {
    username: "",
    password:""
  }
   
  //approach without interface
  function printCurrentUserWhitoutInterface(user: {username: string, password: string}){
    console.log(user)
  }

  function printCurrentUser(user: User) {
    console.log(user.username)
  }

}

const benny: User = {
    username: "Benny",
    password: "123"
}
function subtractionExample(x: number, y:number) {
    return x-y
}

const sum = subtractionExample(20, 25)
console.log(sum)
helloWorld()
subtractionExample(50,25)