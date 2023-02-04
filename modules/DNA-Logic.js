// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

function pAequorFactory(num, dna) {
  return {
    specimenNum: num,
    DNA: dna,
    mutate() {
      let i = Math.floor(Math.random() * 15);
      if (this.DNA[i] != returnRandBase()) {
        return this.DNA[i] = returnRandBase()
      } else {
        while (this.DNA[i] === returnRandBase()){
          if (this.DNA[i] != returnRandBase()) {
            return this.DNA[i] = returnRandBase()
          }
        }
      }
      },
      compareDNA(pAequor) {
        let sameCount = 0;
        for (let i = 0; i < this.DNA.length; i++) {
          if (this.DNA[i] === pAequor.DNA[i]) {
            sameCount++;
          }
        }
        return `speciment #1 and speciment #2 have ${Math.floor((sameCount / 15) *100)}% DNA in common`;
      },
      willLikelySurvive() {
        let surviveCount = 0;
        for (let i = 0; i < this.DNA.length; i++) {
          if (this.DNA[i] == 'C' || this.DNA[i] == 'G') {
            surviveCount += 1;
          }
        };
        if (surviveCount >= 9)/* 9 is 60% of 15 for the threshold of survivability */ {
          return true;
        } else {
          return false;
        }
      },
      complementStrand() {
        let complementArr = [];
        for (let i = 0; i < this.DNA.length; i++) {
          if (this.DNA[i] == 'C') {
            complementArr.push('G');
          } else if (this.DNA[i] == 'G'){
            complementArr.push('C')
          } else if (this.DNA[i] == 'A'){
            complementArr.push('T')
          } else if (this.DNA[i] == 'T'){
            complementArr.push('A')
          } else {
            return 'error'
          };
        }
        return complementArr;
        },
      }
    };

  function createAndPushSurvivingPAequor(survivalList) {
    let pAequorX = pAequorFactory(5, mockUpStrand());
    if (pAequorX.willLikelySurvive()) {
      survivalList.push(pAequorX.DNA);
    }
  }
  
  let survivalList = [];
  while (survivalList.length < 30) {
    createAndPushSurvivingPAequor(survivalList);
  };

let pq1 = pAequorFactory(1, mockUpStrand());
let survivablePQ1 = survivalList[1];
console.log(pq1.DNA)
console.log(pq1.complementStrand());
console.log(pq1.DNA[1])
console.log(pq1.complementStrand()[1]);







