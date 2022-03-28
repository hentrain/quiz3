window.onload = () => {
  render();
};

const models = [
  {
    url: './assets/myModel/scene.gltf',
    scale: '0.5 0.5 0.5',
    rotation: '0 225 0'
  },
];

let modelIndex = 0;
const setModel = (model, entity) => {
  if (model.position) {
    entity.setAttribute('position', model.position);
  }

  entity.setAttribute('gltf-model', model.url);
};

function render() {
  const scene = document.querySelector('a-scene');

  navigator.geolocation.getCurrentPosition(function (position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;

    const model = document.createElement('a-entity');
    model.setAttribute('gps-entity-place', `latitude: ${latitude}; longitude: ${longitude};`);

    setModel(models[modelIndex], model);

    model.setAttribute('animation-mixer', '');

    scene.appendChild(model);
  });
}
/*Indicate how and where you would handle a model's scale, and rotation, in code.
    under const models, change the value stored in scale and rotation.
How would you add more models, and where would you need to add code to handle them?
    add aditional {} including model url and attribute after 
    {
    url: './assets/myModel/scene.gltf',
    scale: '0.5 0.5 0.5',
    rotation: '0 225 0'
    },
How and where would you add event listeners? buttons for interaction? There are some snippets you could look at. You don't have to integrate them for now. */
