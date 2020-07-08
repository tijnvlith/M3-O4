
const age = 30;
const isFemale = true;
const driverStatus = "bob";
const name = "Bram";
const totalAmount = 4;

if (age >= 18) {
  console.log("Top! Jij mag naar binnen");
} else {
  console.log("Sorry, jij mag niet naar binnen");
}

if (age >= 18 && age <= 25) {
  console.log("Je krijgt 50% korting!");
} else {
  console.log("Sorry, jij krijgt geen korting")
}

if (isFemale) {
  console.log("Je bent een vrouw, welkom!");
} else {
  console.log(
    "je bent een man, je mag helaas niet naar binnen"
  );
}

if (driverStatus === "bob") {
  console.log("Je bent de bob, je mag autorijden");
} else {
  console.log("Je bent geen bob, hier met die autosleutels");
}

if (name === "Sarah" || "Bram") {
  console.log("Je krijgt een gratis biertje!");
}

if (totalAmount >= 25 && totalAmount <= 50) {
  console.log("Je betaald meer dan 25 euro, hier is een gratis portie (vega)bitterballen!");
} else if (totalAmount >= 50 && totalAmount <= 100) {
  console.log("Je betaald meer dan 50 euro, hier is een gratis portie nachos!");
} else if (totalAmount >= 100) {
  console.log("Je betaald meer dan 100 euro, hier is een gratis flesje champagne!");
} else {
  console.log("Sorry, je hebt niet genoeg uitgegeven");
}