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
  const secondradioButtons = document.querySelectorAll('input[name="male"]');
  const thirdButtons = document.querySelectorAll('input[name="motherTwo"]');
  const fourthButtons = document.querySelectorAll('input[name="maleTwo"]');
  

  const testerSpan = document.querySelector('#tester');
  
  const submitButton = document.querySelector("#tortieButton");
  const secondsubmitButton = document.querySelector("#calicoButton");

const firstKitten = document.querySelector("#firstKitten");
const secondKitten = document.querySelector("#secondKitten");
const thirdKitten= document.querySelector("#thirdKitten");
const fourthKitten = document.querySelector("#fourthKitten");




  submitButton.addEventListener('click', () => {
  
    const selectedCat = document.querySelector('input[name="cat"]:checked').value;
    const secondselectedCat = document.querySelector('input[name="male"]:checked').value;
  
let results= [];

for (let i = 0; i < 4; i++) {


    const kitten = {
      chroma: [catList[selectedCat].chroma[Math.round(Math.random()*1)], 
      catList[secondselectedCat].chroma[Math.round(Math.random()*1)]]
    };
  
 
    if (kitten.chroma.includes("red") && kitten.chroma.includes("black")) {
      results.push(" tortoiseshell female");
    } else if (kitten.chroma.includes("red") && kitten.chroma.includes("Y")) {
      results.push("red male");
    } else if (kitten.chroma.includes("black") && kitten.chroma.includes("Y")) {
      results.push("black male");
    } else if (kitten.chroma.includes("red")) {
      results.push("red female");
    } else {
      results.push("black female");
    };

};

firstKitten.textContent = results[0];
secondKitten.textContent = results[1];
thirdKitten.textContent = results[2];
fourthKitten.textContent = results[3];
  });


  

  secondsubmitButton.addEventListener('click', () => {

    const selectedMother = document.querySelector('input[name="motherTwo"]:checked').value;
    const selectedFather = document.querySelector('input[name="maleTwo"]:checked').value;
  
    const kittenOnePatches = [catList[selectedMother].patches, catList[selectedFather].patches];
    const kittenOne = {
      chroma: [catList[selectedMother].chroma[Math.round(Math.random()*1)], 
        catList[selectedFather].chroma[Math.round(Math.random()*1)]], 
      patches: kittenOnePatches[Math.round(Math.random()*1)]
    };


  
    let coatOneColor;
      if (kittenOne.chroma.includes("red") && kittenOne.chroma.includes("black") && kittenOne.patches === "white") {
          coatOneColor = "female calico";
      } else if (kittenOne.chroma.includes("red") && kittenOne.chroma.includes("black")) {
        coatOneColor = "female tortoiseshell";
      } else if (kittenOne.chroma.includes("red") && kittenOne.chroma.includes("Y") && kittenOne.patches === "white") {
        coatOneColor = "red and white Male";
      } else if (kittenOne.chroma.includes("black") && kittenOne.chroma.includes("Y") && kittenOne.patches === "white") {
        coatOneColor = "black and white male";
      } else if (kittenOne.chroma.includes("red") && kittenOne.patches === "white") {
          coatOneColor = "female red and white";
      } else if (kittenOne.chroma.includes("black") && kittenOne.patches === "white") {
          coatOneColor = "female black and white";
      } else if (kittenOne.chroma.includes("red") && kittenOne.chroma.includes("Y")) {
        coatOneColor = "male red";
      } else if (kittenOne.chroma.includes("black") && kittenOne.chroma.includes("Y")) {
        coatOneColor = "black male";
      } else if (kittenOne.chroma.includes("red")) {
        coatOneColor= "red female";
      } else {
        coatOneColor= "black female";
      };
    
      testerSpan.textContent = coatOneColor;
    
  });
