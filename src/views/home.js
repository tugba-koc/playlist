export default () => {
  const views = `
        <h1>Home</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem!</p>
        `;
  let divElement = document.createElement("div");
  divElement.innerHTML = views;
  return divElement;
};
