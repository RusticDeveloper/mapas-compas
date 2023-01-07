var mapa = L.map('mapa').setView([-0.2247332, -78.5179488], 11);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(mapa);
var casas = [
    { "nombre": "Jhon Acosta", "latlong": [-0.207011, -78.524207] },
    { "nombre": "Paola Franco", "latlong": [-0.046725, -78.453815] },
    { "nombre": "Angie Pacas", "latlong": [-0.260210, -78.516659] },
    { "nombre": "Abraham Gavilanes", "latlong": [-0.283192, -78.557777] },
    { "nombre": "Daniel Rivas", "latlong": [-0.271304, -78.559721] },
    { "nombre": "Josue", "latlong": [-0.312669, -78.550302] },
    { "nombre": "Carolina Chamorro", "latlong": [-0.332741, -78.547371] },
    { "nombre": "Joel Valencia", "latlong": [-0.026166, -78.452163] },
    { "nombre": "Jonathan Sanches", "latlong": [-0.316082, -78.534104] },
    { "nombre": "Gibran Gusman", "latlong": [-0.255524, -78.518390] },
    { "nombre": "Kevin Torres", "latlong": [-0.288825, -78.531923] },
    { "nombre": "Andy de la Cruz", "latlong": [-0.355130, -78.378926] },
    { "nombre": "Jhonathan Chiliquinga", "latlong": [-0.230180, -78.526758] },
    { "nombre": "Edison Ruales", "latlong": [-0.241846, -78.511766] }
];
class mapallenar {
    agregarMapa() {
        for (let i = 0; i < casas.length; i++) {
            L.marker(casas[i].latlong).addTo(mapa)
                .bindPopup(`La casa de ${casas[i].nombre}`);
        }
    }
}
var mp = new mapallenar;
/*
L.marker([-0.2247332, -78.5179488]).addTo(map)
    .bindPopup('El Yavirac.<br> a donde va la people.')
    .openPopup();
    L.marker([-0.271239, -78.559852]).addTo(map)
    .bindPopup('Mi potrerito.<br> de mi mismo y mi persona.')
    .openPopup();
    var circle = L.circle([-0.271239, -78.559852], {
    color: 'purple',
    fillColor: '#f03',
    fillOpacity: 0.1,
    radius: 500
}).addTo(map)
.bindPopup(popup);
var polygon = L.polygon([
    [-0.271239, -78.559852],
    [-0.2247332, -78.5179488]
],{color:'magenta'}).addTo(map);
var latlng=[-0.271239, -78.559852];
var popup = L.popup()
    .setLatLng(latlng)
    .setContent('Hello world!<br/>This is a nice popup.')
    .openOn(map);
*/