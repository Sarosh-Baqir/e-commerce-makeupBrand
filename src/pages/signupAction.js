export async function signupAction({ request, dispatch, state }) {
  const formData = new FormData(request);

  const newUser = {
    name: formData.get("name"),
    email: formData.get("email"),
    password: formData.get("password"),
  };
  console.log(newUser);

  const allUsers = state || [];

  const userExists = allUsers.some(
    (userObj) => userObj.user && userObj.user.email === newUser.email
  );
  console.log(userExists);

  if (userExists) {
    dispatch({
      type: "addUserFailure",
      payload: { error: "User already exists" },
    });
  } else {
    dispatch({
      type: "addUser",
      payload: {
        user: newUser,
        isAuthenticated: false,
        error: null,
      },
    });
  }

  return { success: !userExists };
}
