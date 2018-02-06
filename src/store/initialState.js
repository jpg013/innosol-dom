const initialState = {
  auth : {
    user: undefined,
    token: undefined,
    status: 'initial',  // intitial, authenticating, error, authenticated
    msg: '' // error messages, etc...
  },
  institutionList: {
    collection: [],
    status: 'initial'
  },
  institutionDetails: {
    details: undefined,
    status: 'initial',
    id: undefined
  }
};

export default initialState;
