const networks = async () => {
  const result = await fetch(
    'https://63a82a65f4962215b57c14fa.mockapi.io/api/v1/networks'
  );
  const networks = await result.json();
  console.log(networks);
};
