const catList = {
  redFemale: {
    chroma: ["red", "red"],
    patches: "none",
  },
  blackFemale: {
    chroma: ["black", "black"],
    patches: "none",
  },
  redMale: {
    chroma: ["red", "Y"],
    patches: "none",
  },
  blackMale: {
    chroma: ["black", "Y"],
    patches: "none",
  },
  redFemalePatches: {
    chroma: ["red", "red"],
    patches: "white",
  },
  blackFemalePatches: {
    chroma: ["black", "black"],
    patches: "white",
  },
  redMalePatches: {
    chroma: ["red", "Y"],
    patches: "white",
  },
  blackMalePatches: {
    chroma: ["black", "Y"],
    patches: "white",
  },
  tortie: {
    chroma: ["black", "red"],
    patches: "none",
  },
  calico: {
    chroma: ["black", "red"],
    patches: "white",
  },
};



const radioButtons = document.querySelectorAll('input[name="cat"]');
const secondRadioButtons = document.querySelectorAll('input[name="male"]');
const thirdButtons = document.querySelectorAll('input[name="motherTwo"]');
const fourthButtons = document.querySelectorAll('input[name="maleTwo"]');


const congrats = document.querySelector('#congrats');

const submitButton = document.querySelector("#tortieButton");
const secondSubmitButton = document.querySelector("#calicoButton");

const firstKitten = document.querySelector("#firstKitten");
const secondKitten = document.querySelector("#secondKitten");
const thirdKitten= document.querySelector("#thirdKitten");
const fourthKitten = document.querySelector("#fourthKitten");




submitButton.addEventListener('click', () => {

  const selectedCat = document.querySelector('input[name="cat"]:checked').value;
  const secondSelectedCat = document.querySelector('input[name="male"]:checked').value;

let results= [];

for (let i = 0; i < 4; i++) {


  const kitten = {
    chroma: [catList[selectedCat].chroma[Math.round(Math.random()*1)], 
    catList[secondSelectedCat].chroma[Math.round(Math.random()*1)]]
  };


  if (kitten.chroma.includes("red") && kitten.chroma.includes("black")) {
    results.push("-265px -1825px");
  } else if (kitten.chroma.includes("red") && kitten.chroma.includes("Y")) {
    results.push("-5px -1825px");
  } else if (kitten.chroma.includes("black") && kitten.chroma.includes("Y")) {
    results.push("-135px -1825px");
  } else if (kitten.chroma.includes("red")) {
    results.push("-5px -1825px");
  } else {
    results.push("-135px -1825px");
  };

};

firstKitten.textContent = results[0];
secondKitten.textContent = results[1];
thirdKitten.textContent = results[2];
fourthKitten.textContent = results[3];


document.getElementById("kitten1").style.backgroundPosition = results[0];

document.getElementById("kitten2").style.backgroundPosition = results[1];

document.getElementById("kitten3").style.backgroundPosition = results[2];

document.getElementById("kitten4").style.backgroundPosition = results[3];

});




secondSubmitButton.addEventListener('click', () => {

let coatOneColor= [];

for (let i = 0; i < 4; i++) {

  const selectedMother = document.querySelector('input[name="motherTwo"]:checked').value;
  const selectedFather = document.querySelector('input[name="maleTwo"]:checked').value;

  const kittenOnePatches = [catList[selectedMother].patches, catList[selectedFather].patches];
  const kittenOne = {
    chroma: [catList[selectedMother].chroma[Math.round(Math.random()*1)], 
      catList[selectedFather].chroma[Math.round(Math.random()*1)]], 
    patches: kittenOnePatches[Math.round(Math.random()*1)]
  };

    if (kittenOne.chroma.includes("red") && kittenOne.chroma.includes("black") && kittenOne.patches === "white") {
        coatOneColor.push("-265px -2025px");
    } else if (kittenOne.chroma.includes("red") && kittenOne.chroma.includes("black")) {
      coatOneColor.push("-265px -2025px");
    } else if (kittenOne.chroma.includes("red") && kittenOne.chroma.includes("Y") && kittenOne.patches === "white") {
      coatOneColor.push("-5px -2025px");
    } else if (kittenOne.chroma.includes("black") && kittenOne.chroma.includes("Y") && kittenOne.patches === "white") {
      coatOneColor.push("-135px -2025px");
    } else if (kittenOne.chroma.includes("red") && kittenOne.patches === "white") {
        coatOneColor.push("-5px -2025px");
    } else if (kittenOne.chroma.includes("black") && kittenOne.patches === "white") {
        coatOneColor.push("-135px -2025px");
    } else if (kittenOne.chroma.includes("red") && kittenOne.chroma.includes("Y")) {
      coatOneColor.push("-5px -1825px");
    } else if (kittenOne.chroma.includes("black") && kittenOne.chroma.includes("Y")) {
      coatOneColor.push("-135px -1825px");
    } else if (kittenOne.chroma.includes("red")) {
      coatOneColor.push("-5px -1825px");
    } else {
     coatOneColor.push("-135px -1825px");
    };
};
  
    let calicoCount = coatOneColor.filter(coat => coat === "-265px -2025px").length;
    
    if (calicoCount === 1) {
      congrats.textContent = "Congratulations! Your litter contains a calico.";}
      else if ( calicoCount > 1) {congrats.textContent = "Congratulations! Your litter contains multiple calicos.";}
      else { congrats.textContent = "Sorry, there are no calicos in your litter. Press submit again or try different parents.";}

document.getElementById("kitten5").style.backgroundPosition = coatOneColor[0];

document.getElementById("kitten6").style.backgroundPosition = coatOneColor[1];

document.getElementById("kitten7").style.backgroundPosition = coatOneColor[2];

document.getElementById("kitten8").style.backgroundPosition = coatOneColor[3];



});
