let candidateReq = ["driver's license", 'bike'];

const companies = [
  {
    id: 1,
    name: 'Company A',
    optionalReq: ['apartment', 'house'],
    mustReq: ['property insurance']
  },
  {
    id: 2,
    name: 'Company B',
    optionalReq: ['5 door car', '4 door car'],
    mustReq: ["driver's license", 'car insurance']
  },
  {
    id: 3,
    name: 'Company C',
    optionalReq: [],
    mustReq: ['social security number', 'work permit']
  },
  {
    id: 4,
    name: 'Company D',
    optionalReq: ['apartment', 'flat', 'house'],
    mustReq: []
  },
  {
    id: 5,
    name: 'Company E',
    optionalReq: ['2 door car', '3 door car', '4 door car', '5 door car'],
    mustReq: ["driver's license", 'property insurance']
  },
  {
    id: 6,
    name: 'Company F',
    optionalReq: ['scooter', 'bike', 'motorcycle'],
    mustReq: ["driver's license", 'motocycle insurance']
  },
  {
    id: 7,
    name: 'Company G',
    optionalReq: [],
    mustReq: ['massage qualification certificate', 'liability insurance']
  },
  {
    id: 8,
    name: 'Company H',
    optionalReq: ['storage place', 'garage'],
    mustReq: []
  },
  {
    id: 9,
    name: 'Company I',
    optionalReq: [],
    mustReq: []
  },
  {
    id: 10,
    name: 'Company J',
    optionalReq: [],
    mustReq: ['PayPal Account']
  }
];

const checkStatus = candidate => {
  let candidateLength = candidate.length;
  let list = companies.map(item => {
    let optionalAccess = false;
    let requiredAccess = true;
    let error = [];
    if (item.optionalReq.length > 0) {
      for (let i = 0; i < candidateLength && !optionalAccess; i++) {
        if (item.optionalReq.includes(candidate[i])) {
          optionalAccess = true;
        }
      }
    } else {
      optionalAccess = true;
    }
    if (optionalAccess === false) {
      error.push(...item.optionalReq);
    }
    if (item.mustReq.length > 0) {
      item.mustReq.forEach(text => {
        if (!candidate.includes(text)) {
          error.push(text);
          requiredAccess = false;
        }
      });
    }
    return {
      id: item.id,
      name: item.name,
      access: optionalAccess && requiredAccess,
      error
    };
  });
  let answer = list.map(company => {
    if (company.access) {
      return {
        id: company.id,
        message: `${company.name}: You are qualified to apply.`
      };
    } else {
      return {
        id: company.id,
        message: `${company.name}: You are not qualified to apply, missing requirement(s) ${company.error}`
      };
    }
  });
  console.log(answer);
  return answer;
};

checkStatus(candidateReq);
