export default async function Api(userData) {
  const optionsLogin = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ ...userData }),
  };

  const token = await fetch(import.meta.env.VITE_URL_LOGIN, optionsLogin)
    .then((response) => response.json())
    .then((data) => {
      return data;
    })
    .catch((error) => console.error(error));

  const optionsProfil = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token.body.token}`,
    },
  };

  const profil = await fetch(import.meta.env.VITE_URL_PROFIL, optionsProfil)
    .then((response) => response.json())
    .then((data) => {
      return data;
    })
    .catch((error) => console.error(error));

  return profil;
}
