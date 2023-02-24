//API call for one number
const oneFact = (num) => {
    let numFact = axios.get(`http://numbersapi.com/${num}`);
    numFact
    .then(data => console.log(data.data))
    .catch(err => console.log(err));

    return numFact;
}

//API call for multiple numbers
const multiFacts = (arr) => {
    let facts = [];

    for( let num of arr){
        let multiNumFact = axios.get(`http://numbersapi.com/${num}`)
            .then(data => console.log(data.data))
            .catch(err => console.log(err));
        facts.push(multiNumFact);
    }
    return facts;
}

const sameNumFacts = (num) => {
    let facts = [];

    for(let i = 0; i < 4; i ++){
        let multiNumFact = axios.get(`http://numbersapi.com/${num}`)
            .then(data => console.log(data.data))
            .catch(err => console.log(err));
        facts.push(multiNumFact)
    }

    return facts;
}


