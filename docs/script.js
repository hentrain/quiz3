
/*load the function renderPlaces(places)*/
/*store location lat and lng in places*/
window.onload = () => {
     let places = staticLoadPlaces();
     renderPlaces(places);
};

function staticLoadPlaces() {
    return [
        {
            name: 'MyModel',
            location: {
                lat: 51.0491,
                lng: -0.723,
            }
        },
    ];
}

function renderPlaces(places) {
    let scene = document.querySelector('a-scene');

    places.forEach((place) => {
        let latitude = place.location.lat;
        let longitude = place.location.lng;

        /* corresponding to attribute of a-scene*/
        let model = document.createElement('a-entity');
        /* gps coordinate */
        model.setAttribute('gps-entity-place', `latitude: ${latitude}; longitude: ${longitude};`);
        /* 3D Model gltf */
        model.setAttribute('gltf-model', './assets/MyModel/scene.gltf');
        /*rotation factor */
        model.setAttribute('rotation', '0 180 0');
        model.setAttribute('animation-mixer', '');
        /*scale factor */
        model.setAttribute('scale', '0.5 0.5 0.5');

        /*load gps-entity-place */
        model.addEventListener('loaded', () => {
            window.dispatchEvent(new CustomEvent('gps-entity-place-loaded'))
        });

        scene.appendChild(model);
    });
}