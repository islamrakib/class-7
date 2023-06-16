//Create a Blood Donation Club members data structure using an array and object. Now find members by blood group those who are ready to donate blood. and also search member by using their phone number with donation history.


/**
 * Donner data structure
 */
const bloodDoner = [
    {
        Id: 1,
        Name: "Rakib",
        BloodGroup: "B+",
        LastDonationDay: 18,
        Phone: "01790968831",
        Location: "Dhanmondi"
    },
    {
        Id: 1,
        Name: "Promis",
        BloodGroup: "O+",
        LastDonationDay: 150,
        Phone: "01956848831",
        Location: "Mirpur"
    },
    {
        Id: 3,
        Name: "Masud",
        BloodGroup: "A+",
        LastDonationDay: 121,
        Phone: "01557848854",
        Location: "Polton"
    },
    {
        Id: 4,
        Name: "Mukul",
        BloodGroup: "O+",
        LastDonationDay: 20,
        Phone: "01769848854",
        Location: "Badda"
    },
    {
        Id: 5,
        Name: "Sumyea",
        BloodGroup: "A-",
        LastDonationDay: 220,
        Phone: "01918502019",
        Location: "Mirpur"
    },
    {
        Id: 6,
        Name: "Rezaul",
        BloodGroup: "B+",
        LastDonationDay: 90,
        Phone: "01854623574",
        Location: "Demra"
    },
    {
        Id: 7,
        Name: "Zaharul",
        BloodGroup: "A+",
        LastDonationDay: 190,
        Phone: "01654871524",
        Location: "Malibag"
    },
    {
        Id: 8,
        Name: "Rajib",
        BloodGroup: "O-",
        LastDonationDay: 230,
        Phone: "01612345678",
        Location: "Uttara"
    },
    {
        Id: 9,
        Name: "Asraful",
        BloodGroup: "AB+",
        LastDonationDay: 128,
        Phone: "01710123456",
        Location: "Mirpur"
    },
    {
        Id: 10,
        Name: "Molla",
        BloodGroup: "AB-",
        LastDonationDay: 428,
        Phone: "01584645484",
        Location: "Polton"
    }
];

//Prompt first search
let howSerch = prompt("how you want to search: group or location or number or available ?")


//second search
let promtgroup;
let promtlocation;
let promtnumber;
let promtavailable;
//condition for search
if(howSerch == "group"){
    promtgroup = prompt("Which Group You want?")
}else if(howSerch == "location"){
    promtlocation = prompt("Which Location You want?")
}else if(howSerch == "number"){
    promtnumber = prompt("type your number?")
}else if(howSerch == "available"){
    promtavailable = prompt("please type a number how man days a donner donate her blood?")
}else{
    console.log("invalid. please search by group, location, number, available  ")
}


//filter donner by there group, location, number and available date
const groupSearch = bloodDoner.filter((data) => data.BloodGroup === promtgroup)
const groupLocation = bloodDoner.filter((data) => data.Location === promtlocation)
const memberPhone = bloodDoner.filter((data) => data.Phone === promtnumber)
const donerHowReady = bloodDoner.filter((data) => data.LastDonationDay >= promtavailable )

// return one variable by if else condition
let defultSrc;
if(howSerch == "group"){
    defultSrc = groupSearch;
}else if(howSerch == "location"){
    defultSrc = groupLocation;
}else if(howSerch == "number"){
    defultSrc = memberPhone;
}else if(howSerch == "available"){
    defultSrc = donerHowReady;
}


//search result shown 
if( defultSrc == groupSearch ){
    //map loop for search blood group
    groupSearch.map((item) => {
        let donerPrint;
    
        if(item.LastDonationDay >= 120 ){
            donerPrint = `Mr ${item.Name} is ready to Blood donate. His Blood Group is ${item.BloodGroup}. He last donate his Blood ${item.LastDonationDay} days before`
        }else{
            donerPrint = `Mr ${item.Name} is not ready to Blood donate. His Blood Group is ${item.BloodGroup}. He need ${120 - item.LastDonationDay} days to donate blood. please search another.`
        }
    
        console.log(donerPrint)
    
    })
}else if( defultSrc == groupLocation ){
    //map loop for search location
    groupLocation.map((item) => {
        let donerPrint;
    
        if(item.LastDonationDay >= 120 ){
            donerPrint = `Mr ${item.Name} is ready to Blood donate. His location is ${item.Location} His Blood Group is ${item.BloodGroup}. He last donate his Blood ${item.LastDonationDay} days before. `
        }else{
            donerPrint = `Mr ${item.Name} is not ready to Blood donate. His location is ${item.Location} His Blood Group is ${item.BloodGroup}. He need ${120 - item.LastDonationDay} days to donate blood. please search another. His phone number is ${item.Phone}`
        }
    
        console.log(donerPrint)
    
    })
}else if( defultSrc == memberPhone ){
    //map loop for search phone number
    memberPhone.map((item) => {
        let donerPrint;
    
        if(item.LastDonationDay >= 120 ){
            donerPrint = `Id ${item.Id}. Mr ${item.Name} is ready to Blood donate. His location is ${item.Location} His Blood Group is ${item.BloodGroup}. He last donate his Blood ${item.LastDonationDay} days before. His phone number is ${item.Phone}`
        }else{
            donerPrint = `Id ${item.Id}. Mr ${item.Name} is not ready to Blood donate. His location is ${item.Location} His Blood Group is ${item.BloodGroup}. He need ${120 - item.LastDonationDay} days to donate blood. please search another. His phone number is ${item.Phone}`
        }
    
        console.log(donerPrint)
    
    })
}else if( defultSrc == donerHowReady) {
    //map loop for search available date
    donerHowReady.map((item) => {
        let donerPrint;
        
            donerPrint = `Id ${item.Id}. Mr ${item.Name} is ready now to Blood donate. His location is ${item.Location} His Blood Group is ${item.BloodGroup}. He last donate his Blood ${item.LastDonationDay} days before. His phone number is ${item.Phone}`
        
    
        console.log(donerPrint)
    
    })
}





