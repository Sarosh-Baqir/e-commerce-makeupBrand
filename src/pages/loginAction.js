export async function loginAction({ request, dispatch, state }) {
  const formData = new FormData(request);
  const email = formData.get("email");
  const password = formData.get("password");

  const allUsers = state || [];

  const userObj = allUsers.find(
    (userObj) => userObj.user && userObj.user.email === email
  );

  if (userObj && userObj.user.password === password) {
    dispatch({
      type: "loginSuccess",
      payload: { email, password },
    });
    return { success: true };
  } else {
    dispatch({
      type: "loginFailure",
      payload: { error: "Invalid email or password" },
    });
    return { success: false };
  }
}
