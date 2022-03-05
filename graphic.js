require(["esri/config",
"esri/Map", 
"esri/views/MapView", 
"esri/Graphic", 
"esri/layers/GraphicsLayer"],

function (esriConfig,Map, MapView, Graphic, GraphicsLayer) {

esriConfig.apiKey = "AAPK9ca944980eca424fa85987bf7d82aeb3wMoJtpXRkcwuTGlK6R4nOPeuC2BVb__0s-iEVcxNGpFGyNmq9eiNP5N50K60CLRk";

const map = new Map({
    basemap: "arcgis-topographic" // Basemap layer service
});

const view = new MapView({
    map: map,
    center: [-111.78, 43.827], // Longitude, latitude
    zoom: 15, // Zoom level
    container: "viewDiv" // Div element
});

const graphicsLayer = new GraphicsLayer();
map.add(graphicsLayer);

// const point = { //Create a point
//     type: "point",
//     longitude: -111.78,
//     latitude: 43.827
// };

// const broulums = {
//     type: "point",
//     longitude: -11.7,
//     latitude: 43.8
// }

const simpleMarkerSymbol = {
    type: "simple-marker",
    color: [226, 119, 40],  // Orange
    outline: {
        color: [255, 255, 255], // White
        width: 1
    }
};

let gas = {
    type: "picture-marker",  // autocasts as new PictureMarkerSymbol()
    url: "./gas.png",
    width: "20px",
    height: "20px",
    
};

let food = {
    type: "picture-marker",  // autocasts as new PictureMarkerSymbol()
    url: "./fork.png",
    width: "20px",
    height: "20px",
    
};

let shopping = {
    type: "picture-marker",  // autocasts as new PictureMarkerSymbol()
    url: "./shopping.png",
    width: "20px",
    height: "20px",
    
};


const popupTemplate = {
    title: "{Name}",
    content: "{Description}"
}
// const attributes = {
//     Name: "Graphic",
//     Description: "I am a polygon"
// }

const porterPark = new Graphic({
    geometry: { //Create a point
    type: "point",
    longitude: -111.79,
    latitude: 43.8225
    },
    symbol: simpleMarkerSymbol,
    attributes: {Name: "Porter Park", Description: "Porter park is a great place to throw a frisbee or hang a hammock. It is very popular when the weather gets warm."},
    popupTemplate: popupTemplate
});

const broulums = new Graphic({
    geometry: { //Create a point
    type: "point",
    longitude: -111.7876,
    latitude: 43.8274
    },
    symbol: shopping,
    attributes: {Name: "Broulims", Description: "Great place to shop. With a town full of college students everyone goes to WalMart. Because of this Broulims can be a quiet and less crouded alternative. Also within walking distance of most student housing units."},
    popupTemplate: popupTemplate
});

const freddys = new Graphic({
    geometry: { //Create a point
    type: "point",
    longitude: -111.7776,
    latitude: 43.827
    },
    symbol: food,
    attributes: {Name: "Freddy's", Description: "Freddy's is a fast casual resturant with great burgers and frozen custard. This is the perfect place to take a date as it is a good middle between fast food and sit-down."},
    popupTemplate: popupTemplate
});

const byu = new Graphic({
    geometry: { //Create a point
    type: "point",
    longitude: -111.7825,
    latitude: 43.8185
    },
    symbol: simpleMarkerSymbol,
    attributes: {Name: "BYU-I", Description: "This is the Student Center for Brigham Young University-Idaho. Complete with an info desk, food court, and even a bowling alley."},
    popupTemplate: popupTemplate
});

const hospital = new Graphic({
    geometry: { //Create a point
    type: "point",
    longitude: -111.772,
    latitude: 43.826
    },
    symbol: simpleMarkerSymbol,
    attributes: {Name: "hospital", Description: "Always good to know where the closest hospital is. "},
    popupTemplate: popupTemplate
});

const smith = new Graphic({
    geometry: { //Create a point
    type: "point",
    longitude: -111.774,
    latitude: 43.8275
    },
    symbol: simpleMarkerSymbol,
    attributes: {Name: "Smith Park", Description: "Smith park is a great place to go for a walk or pic-nic. Smith park typically has fewer people than porter park."},
    popupTemplate: popupTemplate
});

const walmart = new Graphic({
    geometry: { //Create a point
    type: "point",
    longitude: -111.7755,
    latitude: 43.8555
    },
    symbol: shopping,
    attributes: {Name: "WalMart", Description: "WalMart has the lowest grocery prices in town. Great place to go if you have a big grocery list. It is almost always busy with its wide audience. WARNING do not plan on coming here during BYU-I's move in weekend. Lots of items run out of stock and if you do find the things you need it could take 30+ minutes to get through checkout."},
    popupTemplate: popupTemplate
});

const taco = new Graphic({
    geometry: { //Create a point
    type: "point",
    longitude: -111.7845,
    latitude: 43.8263
    },
    symbol: food,
    attributes: {Name: "Taco Bell", Description: "Popular choice because they are open late."},
    popupTemplate: popupTemplate
});

const red = new Graphic({
    geometry: { //Create a point
    type: "point",
    longitude: -111.78843,
    latitude: 43.8251
    },
    symbol: food,
    attributes: {Name: "Red Rabbit Grill", Description: "This is a great place to sit down and eat. They have delicious fries and offer some fun and creative burgers."},
    popupTemplate: popupTemplate
});

const panda = new Graphic({
    geometry: { //Create a point
    type: "point",
    longitude: -111.7772,
    latitude: 43.8568
    },
    symbol: food,
    attributes: {Name: "Panda Express", Description: "Great place to get lunch before grocery shopping."},
    popupTemplate: popupTemplate
});

const mavL = new Graphic({
    geometry: { //Create a point
    type: "point",
    longitude: -111.8085,
    latitude: 43.82575
    },
    symbol: gas,
    attributes: {Name: "Maverick", Description: "Gas station on your way out of town."},
    popupTemplate: popupTemplate
});

const mavR = new Graphic({
    geometry: { //Create a point
    type: "point",
    longitude: -111.7785,
    latitude: 43.828
    },
    symbol: gas,
    attributes: {Name: "Maverick", Description: "Gas station in the middle of town"},
    popupTemplate: popupTemplate
});

const conoco = new Graphic({
    geometry: { //Create a point
    type: "point",
    longitude: -111.81138,
    latitude: 43.8049
    },
    symbol: gas,
    attributes: {Name: "Conoco", Description: "If you use the south exit this is the right place to go. "},
    popupTemplate: popupTemplate
});

const burger_king = new Graphic({
    geometry: { //Create a point
    type: "point",
    longitude: -111.8117,
    latitude: 43.8049
    },
    symbol: food,
    attributes: {Name: "Burger King", Description: "Good location for some food on the road"},
    popupTemplate: popupTemplate
});

const fat = new Graphic({
    geometry: { //Create a point
    type: "point",
    longitude: -111.7806,
    latitude: 43.8361
    },
    symbol: simpleMarkerSymbol,
    attributes: {Name: "Fat Cats", Description: "Fun place for a date night. They have movie theaters, bowling, an arcade and more."},
    popupTemplate: popupTemplate
});

const costa = new Graphic({
    geometry: { //Create a point
    type: "point",
    longitude: -111.7787,
    latitude: 43.8366
    },
    symbol: food,
    attributes: {Name: "Costa Vida", Description: "Nacos with sweet pork are increadible."},
    popupTemplate: popupTemplate
});

const wendys = new Graphic({
    geometry: { //Create a point
    type: "point",
    longitude: -111.809,
    latitude: 43.8025
    },
    symbol: food,
    attributes: {Name: "Wendys", Description: "Wendys is a great choice if you don't want to spend too much. They also have some really tasty limited time offers."},
    popupTemplate: popupTemplate
});

const macdonaldL = new Graphic({
    geometry: { //Create a point
    type: "point",
    longitude: -111.8081,
    latitude: 43.804
    },
    symbol: food,
    attributes: {Name: "Macdonalds", Description: "Good location for food on the go"},
    popupTemplate: popupTemplate
});

const macdonaldU = new Graphic({
    geometry: { //Create a point
    type: "point",
    longitude: -111.7786,
    latitude: 43.8339
    },
    symbol: food,
    attributes: {Name: "Macdonalds", Description: "Good place to stop if your out and about"},
    popupTemplate: popupTemplate
});

const temple = new Graphic({
    geometry: { //Create a point
    type: "point",
    longitude: -111.779,
    latitude: 43.8109
    },
    symbol: simpleMarkerSymbol,
    attributes: {Name: "LDS Temple", Description: "This is where Member of The Church Of Jesus Christ Of Latter-Day Saints worship. Its grounds are a peaceful place to meditate."},
    popupTemplate: popupTemplate
});

const dominos = new Graphic({
    geometry: { //Create a point
    type: "point",
    longitude: -111.7886,
    latitude: 43.8257
    },
    symbol: food,
    attributes: {Name: "Dominos", Description: "Yummy pizza! They have a great 2 medium pizza takeout deal."},
    popupTemplate: popupTemplate
});

const america = new Graphic({
    geometry: { //Create a point
    type: "point",
    longitude: -111.7776,
    latitude: 43.8264
    },
    symbol: simpleMarkerSymbol,
    attributes: {Name: "America First", Description: "Good to know where your bank is."},
    popupTemplate: popupTemplate
});

const fields = new Graphic({
    geometry: { //Create a point
    type: "point",
    longitude: -111.7842,
    latitude: 43.8109
    },
    symbol: simpleMarkerSymbol,
    attributes: {Name: "BYU-Idaho fields", Description: "These fields are used for the BYU-Idaho intermural sports. As a student this could be a great way to meet new people and get some healthy excercise. "},
    popupTemplate: popupTemplate
});

const mobil = new Graphic({
    geometry: { //Create a point
    type: "point",
    longitude: -111.81826,
    latitude: 43.82633
    },
    symbol: simpleMarkerSymbol,
    attributes: {Name: "Mobil", Description: "Good gas prices."},
    popupTemplate: popupTemplate
});

const blisters = new Graphic({
    geometry: { //Create a point
    type: "point",
    longitude: -111.8185,
    latitude: 43.8264
    },
    symbol: food,
    attributes: {Name: "Blisters BBQ", Description: "Some say its the best BBQ in Idaho. The fries and fry sauce are also to die for."},
    popupTemplate: popupTemplate
});

const paramount = new Graphic({
    geometry: { //Create a point
    type: "point",
    longitude: -111.78405,
    latitude: 43.8258
    },
    symbol: simpleMarkerSymbol,
    attributes: {Name: "Paramount 5", Description: "Fun hometown movie theatre. With cheap tickets and comfy chairs this is a must try movie experience. "},
    popupTemplate: popupTemplate
});



graphicsLayer.add(porterPark);
graphicsLayer.add(broulums);
graphicsLayer.add(freddys);
graphicsLayer.add(byu);
graphicsLayer.add(hospital);
graphicsLayer.add(smith);
graphicsLayer.add(walmart);
graphicsLayer.add(taco);
graphicsLayer.add(red);
graphicsLayer.add(panda);
graphicsLayer.add(mavL);
graphicsLayer.add(mavR);
graphicsLayer.add(conoco);
graphicsLayer.add(burger_king);
graphicsLayer.add(fat);
graphicsLayer.add(costa);
graphicsLayer.add(wendys);
graphicsLayer.add(macdonaldL);
graphicsLayer.add(macdonaldU);
graphicsLayer.add(temple);
graphicsLayer.add(dominos);
graphicsLayer.add(america);
graphicsLayer.add(fields);
graphicsLayer.add(mobil);
graphicsLayer.add(blisters);
graphicsLayer.add(paramount);

});
