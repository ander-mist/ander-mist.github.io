const users = {
    4: { name: 'Mark' },
    5: { name: 'Paul' }
  };
  
  const findUserById = (id) => {
    return new Promise((resolve, reject) => {
        if (users[id]) {
          return resolve(users[id]);
        }
  
        return reject({ error: 'User with ' + id + ' not found.' });
    });
  }
  
  const getUserName = (userID) => {
    return findUserById(userID).then(user => user.name);
  }

  describe('retrive pepole from data base', () => {

    it('should return a person', () => {
			expect.asserion(2);
			return getUserName(users[4]).then(answer => {
				expect(answer.name).toEqual('Mark')
			})
    })
  })

    