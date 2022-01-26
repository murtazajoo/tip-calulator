
// per peson bill


// percentage of tip selected

function costum() {
  let cost = document.getElementById('costum').value
  percentage(cost)
}

function percentage(ptage) {

  let bill = document.getElementById('billval').value
  let noPerson = document.getElementById('noperval').value
  let billPerPerson = bill / noPerson



  if (bill == "") {

    if (noPerson !== "") {
      document.getElementById('personcon').classList.remove("cantzero")
    }


    document.getElementById('billcon').classList.add("cantzero")
    console.log(document.getElementById('personcon').classList)
  }
  else if (noPerson == "") {

    if (bill !== "") {
      document.getElementById('billcon').classList.remove("cantzero")
    }
    document.getElementById('personcon').classList.add("cantzero")
    console.log(document.getElementById('personcon').classList)
    console.log(ptage)


  }

  else {
    document.getElementById('personcon').classList.remove("cantzero")
    document.getElementById('billcon').classList.remove("cantzero")

    // assign the value
let value =  ptage / 100 * billPerPerson

    document.getElementById('tipperson').innerHTML =    value.toFixed(2)
    ;
let totalval =  value
* noPerson
    document.getElementById('tiptotal').innerHTML =  totalval.toFixed(2)   ;

    
  }

}

function reset() {
 document.getElementById('billval').value=""
 document.getElementById('noperval').value=""
  document.getElementById('tipperson').innerHTML = "0.00"
  document.getElementById('tiptotal').innerHTML = "0.00"
  document.getElementById('costum').value= ""
}




  //  document.getElementById('tipperson').innerHTML =     ptage / 100 * billPerPerson;



 //  else if (noPerson = null) {
  //     let i = ptage / 100 * bill;
  //     document.getElementById('tipperson').innerHTML = i
  //     console.log(i)
  //   }
  //   else{
  //     let j = ptage / 100 * billPerPerson;
  //     document.getElementById('tipperson').innerHTML = j
  //     console.log(j)
  // }

// percentage()