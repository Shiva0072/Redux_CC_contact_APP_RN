export const getUsers = async () => {
  try {
    const users = await (await fetch('https://reqres.in/api/users/')).json();
    // console.log(users);
    return users;
  } catch (err) {
    err = 'error in fetching users ' + err;
    console.log(err);
    return err;
  }
};

export const getUserDetails = async id => {
  try {
    const details = await (
      await fetch(`https://reqres.in/api/users/${id}`)
    ).json();
    // console.log('det = ', details);
    return details;
  } catch (err) {
    err = ' error in fetching user details ' + err;
    console.log(err);
    return err;
  }
};
