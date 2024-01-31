export const queryUserXPDiv1 = `
  query {
    user {
      xpAmount: transactions_aggregate(where: { type: { _eq: "xp" }, path: { _ilike: "%div-01%", _nilike: "%piscine%" } }) {
        aggregate {
          sum {
            amount
          }
        }
      }
    }
  }
`;

export const queryUserXPJs = `
  query {
    user {
      xpAmount: transactions_aggregate(where: { type: { _eq: "xp" }, path: { _ilike: "%piscine-js%" } }) {
        aggregate {
          sum {
            amount
          }
        }
      }
    }
  }
`;

export const queryUserXPGo = `
  query {
    user {
      xpAmount: transactions_aggregate(where: { type: { _eq: "xp" }, path: { _ilike: "%piscine-go%" } }) {
        aggregate {
          sum {
            amount
          }
        }
      }
    }
  }
`;

export const queryAuditsDone = `
  query {
    transaction(where: {type: {_eq: "up"}} order_by: {createdAt: desc}) {
      amount
      type
      path
    }
  }
`;

export const queryAuditsReceived = `
  query {
    transaction(where: {type: {_eq: "down"}}) {
      amount
      type
    }
  }
`;

export const queryUserInfo = `
  query {
    user {
      id
      login
      firstName
      lastName
      email
    }
  }
`;

export const queryLast3tasks = `
query {
	user {
    transactions(
      where:
      {path:{_ilike:"%div-01%", _nlike: "%piscine%"}, type:{_eq: "xp"}}
    	order_by: {createdAt: desc}
      limit: 5
    ){
      path
    }
  }
}
`;

export const queryGOTasksFailed = `
query {
  user{
    results (where: {path: {_ilike: "%piscine-go/%"}, grade:{_eq: 0}}){
         path
      grade
    }
  }
}`;

export const queryJSTasksFailed = `
query {
  user{
    results (where: {path: {_ilike: "%piscine-js/%"}, grade:{_eq: 0}}){
         path
      grade
    }
  }
}`;