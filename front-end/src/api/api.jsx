export default async function Api(userData, token) {
  if (userData.email) {
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
        if (data.status === 200) return data;
        alert(data.message);
      })
      .catch((error) => console.erro(error));
    if (token !== undefined) {
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
          if (data.status === 200) return data;
          alert(data.message);
        })
        .catch((error) => console.error(error));

      return { profil, token };
    }
  } else {
    const optionsUpdate = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token.token}`,
      },
      body: JSON.stringify({ ...userData }),
    };

    const profilUpdate = await fetch(
      import.meta.env.VITE_URL_PROFIL,
      optionsUpdate
    )
      .then((response) => response.json())
      .then((data) => {
        if (data.status === 200) return data;
        alert(data.message);
      })
      .catch((error) => console.error(error));

    return profilUpdate;
  }
}
