export default () => {
    const token = localStorage.getItem("auth_token");
    if (!token) return null;
    const user = JSON.parse(atob(token));
    return user;
}