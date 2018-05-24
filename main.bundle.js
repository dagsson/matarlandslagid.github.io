webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = "@import \"https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700\";\n\n@import url('https://fonts.googleapis.com/css?family=Questrial|Raleway|Source+Sans+Pro');\n\nbody { margin:0;\n    padding:0;\n    font-family: 'Poppins', sans-serif;\n    background: #fafafa;}\n\n.wrapper {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: stretch;\n        -ms-flex-align: stretch;\n            align-items: stretch;\n    height: 100vh !important;    \n}\n\n#menu > .list-group-item {\n    color: black !important;\n    border: none !important;\n    margin-bottom: none !important;\n}\n\n#menu > .list-group-item:first-child {\n    border-top-left-radius: 0px !important;\n    border-top-right-radius: 0px !important;\n}\n\n#content {\n    padding: 0px;\n}\n\n#sidebar {\n    position: absolute;\n    z-index: 1000;\n    text-align: center !important;\n    width: 100%;\n    top: 16px;\n}\n\n#menu .pp-tab {\n    background-color: white !important;\n    padding: 10px !important;\n}\n\n#sidebar ul li a {\n    font-family: 'Questrial', sans-serif !important;\n}\n\nbody {\n    font-family: 'Source Sans Pro', sans-serif;\n    background: #fafafa;\n}\n\np {\n    font-family: 'Source Sans Pro', sans-serif;\n    font-size: 1.1em;\n    font-weight: 300;\n    line-height: 1.7em;\n    color: #999;\n}\n\n.mapboxgl-popup {\n    max-width: 400px;\n    font-family: 'Source Sans Pro', sans-serif;\n}\n\n#sidebar .active {\n    background-color: #30AABB !important;\n    border-color: #30AABB !important;\n}\n\n#map .mapboxgl-ctrl-bottom-right {\n    display: none !important;\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"wrapper\">\n        \n            <!-- Sidebar -->\n            <nav id=\"sidebar\">\n                <app-list></app-list>\n            </nav>\n        \n            <!-- Page Content -->\n            <div id=\"content\" class=\"col-sm-12\">\n                    <button type=\"button\" id=\"sidebarCollapse\" class=\"navbar-btn\">\n                            <span></span>\n                            <span></span>\n                            <span></span>\n                    </button>\n                <app-map></app-map>\n            </div>\n        \n</div>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__list_list_component__ = __webpack_require__("./src/app/list/list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__map_map_component__ = __webpack_require__("./src/app/map/map.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_food_service__ = __webpack_require__("./src/app/services/food.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_map_service__ = __webpack_require__("./src/app/services/map.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["E" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_3__list_list_component__["a" /* ListComponent */],
                __WEBPACK_IMPORTED_MODULE_4__map_map_component__["a" /* MapComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_5__services_food_service__["a" /* FoodService */], __WEBPACK_IMPORTED_MODULE_6__services_map_service__["a" /* MapService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/list/list.component.css":
/***/ (function(module, exports) {

module.exports = ".sidebar-header {\n    padding: 5%;\n    text-align: center;\n}\n\n.sidebar-header h3 {\n    font-family: 'Source Sans Pro', sans-serif;\n    color: white;\n}\n\n#menu {\n    text-align: center;\n    margin-bottom: 5px;\n    display: -webkit-inline-box;\n    cursor: pointer;\n}\n\n#menu[_ngcontent-c1] > li {\n    cursor: pointer !important;\n}\n\n#menu > .list-group-item {\n    color: black !important;\n    border: none !important;\n    margin-bottom: none !important;\n}\n\n#menu[_ngcontent-c1] .list-group-item:first-child {\n    border-top-left-radius: 0px !important;\n    border-top-right-radius: 0px !important;\n}\n\n#sidebar[_ngcontent-c0] #menu .pp-tab {\n    background-color: white !important;\n    padding: 10px;\n}\n\n"

/***/ }),

/***/ "./src/app/list/list.component.html":
/***/ (function(module, exports) {

module.exports = "\n          <!-- Sidebar Links -->\n              \n              <div role=\"tablist\" id=\"menu\">\n                  \n              </div>\n              <!--<a class=\"list-group-item active\" id=\"selectall\">Velja allt</a>-->\n\n              \n  \n              \n              \n  \n\n\n"

/***/ }),

/***/ "./src/app/list/list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_mock_food__ = __webpack_require__("./src/app/shared/mock-food.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_map_service__ = __webpack_require__("./src/app/services/map.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_jquery__ = __webpack_require__("./node_modules/jquery/dist/jquery.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_jquery__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ListComponent = /** @class */ (function () {
    function ListComponent(_mapService) {
        this._mapService = _mapService;
        this.food = __WEBPACK_IMPORTED_MODULE_1__shared_mock_food__["a" /* FOOD_LIST */];
    }
    ListComponent.prototype.ngOnInit = function () {
        __WEBPACK_IMPORTED_MODULE_3_jquery__(document).ready(function () {
            __WEBPACK_IMPORTED_MODULE_3_jquery__('#sidebarCollapse').on('click', function () {
                __WEBPACK_IMPORTED_MODULE_3_jquery__('#sidebar').toggleClass('active');
                __WEBPACK_IMPORTED_MODULE_3_jquery__(this).toggleClass('active');
            });
        });
    };
    ListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-list',
            template: __webpack_require__("./src/app/list/list.component.html"),
            styles: [__webpack_require__("./src/app/list/list.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_map_service__["a" /* MapService */]])
    ], ListComponent);
    return ListComponent;
}());



/***/ }),

/***/ "./src/app/map/map.component.css":
/***/ (function(module, exports) {

module.exports = "\n#map { position:absolute; top:0; bottom:0; width:100%; }\n\n#station_card {\n    position: absolute;\n    z-index: 100;\n    background-color: white;\n    opacity: 0.9;\n    bottom: 0px;\n    padding: 3%;\n    color: #818182;\n    -webkit-transition: .2;\n    transition: .2;\n    width: 100%;\n    text-align: center;\n}\n\n#station_card h3 {\n    color: black;\n    font-family: montserrat;\n}\n\n#station_card h2 {\nfont-size: 2rem;\ncolor: #17a2b8;\ntext-transform: uppercase;\nletter-spacing: 3px;\nfont-family: montserrat;\npadding-bottom: 5px;\n}\n\n#location {\n    font-weight: bold;\n}\n\n#tagline {\n    text-align: center;\n    font-family: sans-serif;\n    color: rgb(180, 180, 180);\n    font-weight: 100;\n    letter-spacing: .6px;\n    padding: 5px;\n}\n\n.iconwrap {\n    text-align: center;\n}\n\n.iconwrap img {\n    height: 70px;\n}\n\n#foodinc {\n    height: 50px;\n    margin-bottom: 15px;\n}\n\n#primary-producer {\n    display: -webkit-inline-box;\n    list-style: none;\n    padding-left: 0px;\n}\n\n#primary-producer li {\n    margin-right: 15px;\n}"

/***/ }),

/***/ "./src/app/map/map.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"map\">\n    <div id=\"station_card\">\n        <div id=\"station_info row\">\n            <!--<h2>Matarlandslagið</h2>-->\n            <div class=\"row\">\n                <div class=\"col-sm-12\">\n                <img id=\"foodinc\" src=\"\"/>\n                <h3 id=\"info\"></h3>\n                <h5 id=\"location\"></h5>\n                <h5 id=\"foodtype\"></h5>\n                <h5 id=\"foodtypeII\"></h5>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/map/map.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_map_service__ = __webpack_require__("./src/app/services/map.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MapComponent = /** @class */ (function () {
    function MapComponent(_mapService) {
        this._mapService = _mapService;
    }
    MapComponent.prototype.ngOnInit = function () {
        this._mapService.getMap();
    };
    MapComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-map',
            template: __webpack_require__("./src/app/map/map.component.html"),
            styles: [__webpack_require__("./src/app/map/map.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_map_service__["a" /* MapService */]])
    ], MapComponent);
    return MapComponent;
}());



/***/ }),

/***/ "./src/app/services/food.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FoodService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_mock_food__ = __webpack_require__("./src/app/shared/mock-food.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FoodService = /** @class */ (function () {
    function FoodService() {
    }
    FoodService.prototype.getFood = function () {
        console.log(__WEBPACK_IMPORTED_MODULE_1__shared_mock_food__["a" /* FOOD_LIST */]);
        return __WEBPACK_IMPORTED_MODULE_1__shared_mock_food__["a" /* FOOD_LIST */];
    };
    FoodService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], FoodService);
    return FoodService;
}());



/***/ }),

/***/ "./src/app/services/map.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var apiToken = __WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].MAPBOX_API_KEY;
var MapService = /** @class */ (function () {
    function MapService() {
    }
    MapService.prototype.getMap = function () {
        var mapboxgl = __webpack_require__("./node_modules/mapbox-gl/dist/mapbox-gl.js");
        mapboxgl.accessToken = apiToken;
        var map = new mapboxgl.Map({
            container: 'map',
            style: 'mapbox://styles/dagsson/cj99p8osy3in82smvtx2ie7x8',
            zoom: 5.55,
            minZoom: 5.6,
            center: [-19.058391, 64.970529]
        });
        var popup = new mapboxgl.Popup({
            closeButton: false,
            closeOnClick: false
        });
        map.on('load', function () {
            map.addControl(new mapboxgl.GeolocateControl({
                positionOptions: {
                    enableHighAccuracy: true
                },
                trackUserLocation: true
            }));
            map.addSource('naut', {
                type: 'vector',
                url: 'mapbox://dagsson.cj98f0o860q2w33t4cyvvfhib-5qqz2'
            });
            map.addLayer({
                'id': 'Nautgripir',
                'type': 'circle',
                'source': 'naut',
                'imgsource': '../assets/img/cow.png',
                'layout': {
                    'visibility': 'none'
                },
                'paint': {
                    'circle-radius': {
                        'base': 2,
                        'stops': [[8, 3], [16, 180]]
                    },
                    'circle-color': 'rgb(84,48,5)'
                },
                'source-layer': 'nautgripir_merged'
            });
            map.on('click', 'Nautgripir', function (e) {
                document.getElementById('info').innerHTML = e.features[0].properties.Name;
                document.getElementById('foodtype').innerHTML = e.features[0].properties.Product;
                document.getElementById('foodtypeII').innerHTML = e.features[0].properties.ProductII;
                document.getElementById('location').innerHTML = e.features[0].properties.Area;
                document.getElementById('foodinc').setAttribute('src', '../assets/img/011-animals.png');
            });
            // Change the cursor to a pointer when the mouse is over the states layer.
            map.on('mouseenter', 'Nautgripir', function (e) {
                map.getCanvas().style.cursor = 'pointer';
                var coordinates = e.features[0].geometry.coordinates.slice();
                var description = e.features[0].properties.description;
                // Ensure that if the map is zoomed out such that multiple
                // copies of the feature are visible, the popup appears
                // over the copy being pointed to.
                while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
                    coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
                }
                // Populate the popup and set its coordinates
                // based on the feature found.
                popup.setLngLat(coordinates)
                    .setHTML(e.features[0].properties.Name)
                    .addTo(map);
            });
            // Change it back to a pointer when it leaves.
            map.on('mouseleave', 'Nautgripir', function () {
                map.getCanvas().style.cursor = '';
                popup.remove();
            });
            map.addSource('kind', {
                type: 'vector',
                url: 'mapbox://dagsson.cjgxs52m90blu2wqn6cn9zm7y-3zxws'
            });
            map.addLayer({
                'id': 'Sauðfé',
                'icon': '',
                'type': 'circle',
                'source': 'kind',
                'layout': {
                    'visibility': 'none'
                },
                'paint': {
                    'circle-radius': {
                        'base': 2,
                        'stops': [[8, 3], [16, 180]]
                    },
                    'circle-color': '#8c510a'
                },
                'source-layer': 'Saudfe_merged'
            });
            map.on('click', 'Sauðfé', function (e) {
                document.getElementById('info').innerHTML = e.features[0].properties.Name;
                document.getElementById('foodtype').innerHTML = e.features[0].properties.Product;
                document.getElementById('foodtypeII').innerHTML = e.features[0].properties.ProductII;
                document.getElementById('location').innerHTML = e.features[0].properties.Place;
                document.getElementById('foodinc').setAttribute('src', '../assets/img/007-animals-5.png');
            });
            // Change the cursor to a pointer when the mouse is over the states layer.
            map.on('mouseenter', 'Sauðfé', function (e) {
                map.getCanvas().style.cursor = 'pointer';
                var coordinates = e.features[0].geometry.coordinates.slice();
                var description = e.features[0].properties.description;
                // Ensure that if the map is zoomed out such that multiple
                // copies of the feature are visible, the popup appears
                // over the copy being pointed to.
                while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
                    coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
                }
                // Populate the popup and set its coordinates
                // based on the feature found.
                popup.setLngLat(coordinates)
                    .setHTML(e.features[0].properties.Name)
                    .addTo(map);
            });
            // Change it back to a pointer when it leaves.
            map.on('mouseleave', 'Sauðfé', function () {
                map.getCanvas().style.cursor = '';
                popup.remove();
            });
            // Thorungar
            map.addSource('thorungar', {
                type: 'vector',
                url: 'mapbox://dagsson.cjgxsaywq0bdn32mswtdla8f4-8ocuk'
            });
            map.addLayer({
                'id': 'Þörungar',
                'icon': '',
                'type': 'circle',
                'source': 'thorungar',
                'layout': {
                    'visibility': 'none'
                },
                'paint': {
                    'circle-radius': {
                        'base': 2,
                        'stops': [[8, 3], [16, 180]]
                    },
                    'circle-color': '#bf812d'
                },
                'source-layer': 'Thorungar_merged'
            });
            map.on('click', 'Þörungar', function (e) {
                new mapboxgl.Popup()
                    .setLngLat(e.lngLat)
                    .setHTML(e.features[0].properties.Name)
                    .addTo(map);
                document.getElementById('info').innerHTML = e.features[0].properties.Name;
                document.getElementById('foodtype').innerHTML = e.features[0].properties.Product;
                document.getElementById('foodtypeII').innerHTML = e.features[0].properties.Info;
                document.getElementById('location').innerHTML = e.features[0].properties.Area;
                document.getElementById('foodinc').setAttribute('src', '../assets/img/003-sea.png');
            });
            // Change the cursor to a pointer when the mouse is over the states layer.
            map.on('mouseenter', 'Þörungar', function () {
                map.getCanvas().style.cursor = 'pointer';
            });
            // Change it back to a pointer when it leaves.
            map.on('mouseleave', 'Þörungar', function () {
                map.getCanvas().style.cursor = '';
            });
            // Hross
            map.addSource('hross', {
                type: 'vector',
                url: 'mapbox://dagsson.cjgxrynuy1nhn2wmoqz4sn8fu-74xa4'
            });
            map.addLayer({
                'id': 'Hestar',
                'icon': '',
                'type': 'circle',
                'source': 'hross',
                'layout': {
                    'visibility': 'none'
                },
                'paint': {
                    'circle-radius': {
                        'base': 2,
                        'stops': [[8, 3], [16, 180]]
                    },
                    'circle-color': '#dfc27d'
                },
                'source-layer': 'Hross_merged'
            });
            map.on('click', 'Hestar', function (e) {
                document.getElementById('info').innerHTML = e.features[0].properties.Name;
                document.getElementById('foodtype').innerHTML = e.features[0].properties.Product;
                document.getElementById('foodtypeII').innerHTML = e.features[0].properties.Info;
                document.getElementById('location').innerHTML = e.features[0].properties.Area;
                document.getElementById('foodinc').setAttribute('src', '../assets/img/009-animals-3.png');
            });
            // Change the cursor to a pointer when the mouse is over the states layer.
            map.on('mouseenter', 'Hestar', function () {
                map.getCanvas().style.cursor = 'pointer';
            });
            // Change it back to a pointer when it leaves.
            map.on('mouseleave', 'Hestar', function () {
                map.getCanvas().style.cursor = '';
            });
            // Fiskeldi
            map.addSource('fiskeldi', {
                type: 'vector',
                url: 'mapbox://dagsson.cjgxrxq5x0bpb2wosmeh8jjvi-7q4sm'
            });
            map.addLayer({
                'id': 'Fiskeldi',
                'icon': '',
                'type': 'circle',
                'source': 'fiskeldi',
                'layout': {
                    'visibility': 'none'
                },
                'paint': {
                    'circle-radius': {
                        'base': 2,
                        'stops': [[8, 3], [16, 180]]
                    },
                    'circle-color': '#f6e8c3'
                },
                'source-layer': 'Fiskeldi_merged'
            });
            map.on('click', 'Fiskeldi', function (e) {
                new mapboxgl.Popup()
                    .setLngLat(e.lngLat)
                    .setHTML(e.features[0].properties.Name)
                    .addTo(map);
                document.getElementById('info').innerHTML = e.features[0].properties.Name;
                document.getElementById('foodtype').innerHTML = e.features[0].properties.Product;
                document.getElementById('foodtypeII').innerHTML = e.features[0].properties.Info;
                document.getElementById('location').innerHTML = e.features[0].properties.Area;
                document.getElementById('foodinc').setAttribute('src', '../assets/img/006-food-1.png');
            });
            // Change the cursor to a pointer when the mouse is over the states layer.
            map.on('mouseenter', 'Fiskeldi', function () {
                map.getCanvas().style.cursor = 'pointer';
            });
            // Change it back to a pointer when it leaves.
            map.on('mouseleave', 'Fiskeldi', function () {
                map.getCanvas().style.cursor = '';
            });
            // Alifuglar
            map.addSource('alifuglar', {
                type: 'vector',
                url: 'mapbox://dagsson.cjgxqopwj0acw2wpew0uzhyxk-6eb44'
            });
            map.addLayer({
                'id': 'Alifuglar',
                'icon': '',
                'type': 'circle',
                'source': 'alifuglar',
                'layout': {
                    'visibility': 'none'
                },
                'paint': {
                    'circle-radius': {
                        'base': 2,
                        'stops': [[8, 3], [16, 180]]
                    },
                    'circle-color': '#b1200f'
                },
                'source-layer': 'Alifuglar_merged'
            });
            map.on('click', 'Alifuglar', function (e) {
                new mapboxgl.Popup()
                    .setLngLat(e.lngLat)
                    .setHTML(e.features[0].properties.Name)
                    .addTo(map);
                document.getElementById('info').innerHTML = e.features[0].properties.Name;
                document.getElementById('foodtype').innerHTML = e.features[0].properties.Product;
                document.getElementById('foodtypeII').innerHTML = e.features[0].properties.Info;
                document.getElementById('location').innerHTML = e.features[0].properties.Area;
                document.getElementById('foodinc').setAttribute('src', '../assets/img/008-animals-4.png');
            });
            // Change the cursor to a pointer when the mouse is over the states layer.
            map.on('mouseenter', 'Alifuglar', function () {
                map.getCanvas().style.cursor = 'pointer';
            });
            // Change it back to a pointer when it leaves.
            map.on('mouseleave', 'Alifuglar', function () {
                map.getCanvas().style.cursor = '';
            });
            // Skip
            map.addSource('skip', {
                type: 'vector',
                url: 'mapbox://dagsson.cjgxs9knd0b292xo8mn0yql01-93dnm'
            });
            map.addLayer({
                'id': 'Skip',
                'icon': '',
                'type': 'circle',
                'source': 'skip',
                'layout': {
                    'visibility': 'none'
                },
                'paint': {
                    'circle-radius': {
                        'base': 2,
                        'stops': [[8, 3], [16, 180]]
                    },
                    'circle-color': '#fa482e'
                },
                'source-layer': 'Skip_merged'
            });
            map.on('click', 'Skip', function (e) {
                new mapboxgl.Popup()
                    .setLngLat(e.lngLat)
                    .setHTML(e.features[0].properties.Name)
                    .addTo(map);
                document.getElementById('info').innerHTML = e.features[0].properties.Name;
                document.getElementById('foodtype').innerHTML = e.features[0].properties.Product;
                document.getElementById('foodtypeII').innerHTML = e.features[0].properties.Info;
                document.getElementById('location').innerHTML = e.features[0].properties.Area;
                document.getElementById('foodinc').setAttribute('src', '../assets/img/001-transport.png');
            });
            // Change the cursor to a pointer when the mouse is over the states layer.
            map.on('mouseenter', 'Skip', function () {
                map.getCanvas().style.cursor = 'pointer';
            });
            // Change it back to a pointer when it leaves.
            map.on('mouseleave', 'Skip', function () {
                map.getCanvas().style.cursor = '';
            });
            // Geitur
            map.addSource('geitur', {
                type: 'vector',
                url: 'mapbox://dagsson.cjgxs6mf10b7m33osu7vpoe1u-5mgi9'
            });
            map.addLayer({
                'id': 'Geitur',
                'icon': '',
                'type': 'circle',
                'source': 'geitur',
                'layout': {
                    'visibility': 'none'
                },
                'paint': {
                    'circle-radius': {
                        'base': 2,
                        'stops': [[8, 3], [16, 180]]
                    },
                    'circle-color': '#f4a32e'
                },
                'source-layer': 'Geitur_merged'
            });
            map.on('click', 'Geitur', function (e) {
                new mapboxgl.Popup()
                    .setLngLat(e.lngLat)
                    .setHTML(e.features[0].properties.Name)
                    .addTo(map);
                document.getElementById('info').innerHTML = e.features[0].properties.Name;
                document.getElementById('foodtype').innerHTML = e.features[0].properties.Product;
                document.getElementById('foodtypeII').innerHTML = e.features[0].properties.Info;
                document.getElementById('location').innerHTML = e.features[0].properties.Area;
                document.getElementById('foodinc').setAttribute('src', '../assets/img/002-animals-1.png');
            });
            // Change the cursor to a pointer when the mouse is over the states layer.
            map.on('mouseenter', 'Geitur', function () {
                map.getCanvas().style.cursor = 'pointer';
            });
            // Change it back to a pointer when it leaves.
            map.on('mouseleave', 'Geitur', function () {
                map.getCanvas().style.cursor = '';
            });
            // Matjurtir
            map.addSource('matjurtir', {
                type: 'vector',
                url: 'mapbox://dagsson.cjgxs04570gnp2qqtqgco9o1z-45m5i'
            });
            map.addLayer({
                'id': 'Matjurtir',
                'icon': '',
                'type': 'circle',
                'source': 'matjurtir',
                'layout': {
                    'visibility': 'none'
                },
                'paint': {
                    'circle-radius': {
                        'base': 2,
                        'stops': [[8, 3], [16, 180]]
                    },
                    'circle-color': '#80cdc1'
                },
                'source-layer': 'Matjurtir_merged'
            });
            map.on('click', 'Matjurtir', function (e) {
                new mapboxgl.Popup()
                    .setLngLat(e.lngLat)
                    .setHTML(e.features[0].properties.Name)
                    .addTo(map);
                document.getElementById('info').innerHTML = e.features[0].properties.Name;
                document.getElementById('foodtype').innerHTML = e.features[0].properties.Product;
                document.getElementById('foodtypeII').innerHTML = e.features[0].properties.Info;
                document.getElementById('location').innerHTML = e.features[0].properties.Area;
                document.getElementById('foodinc').setAttribute('src', '../assets/img/004-nature.png');
            });
            // Change the cursor to a pointer when the mouse is over the states layer.
            map.on('mouseenter', 'Matjurtir', function () {
                map.getCanvas().style.cursor = 'pointer';
            });
            // Change it back to a pointer when it leaves.
            map.on('mouseleave', 'Matjurtir', function () {
                map.getCanvas().style.cursor = '';
            });
            // Svin
            map.addSource('svin', {
                type: 'vector',
                url: 'mapbox://dagsson.cjgxsaekx0cdv33o8zncly704-062up'
            });
            map.addLayer({
                'id': 'Svín',
                'icon': '',
                'type': 'circle',
                'source': 'svin',
                'layout': {
                    'visibility': 'none'
                },
                'paint': {
                    'circle-radius': {
                        'base': 2,
                        'stops': [[8, 3], [16, 180]]
                    },
                    'circle-color': '#35978f'
                },
                'source-layer': 'Svin_merged'
            });
            map.on('click', 'Svín', function (e) {
                new mapboxgl.Popup()
                    .setLngLat(e.lngLat)
                    .setHTML(e.features[0].properties.Name)
                    .addTo(map);
                document.getElementById('info').innerHTML = e.features[0].properties.Name;
                document.getElementById('foodtype').innerHTML = e.features[0].properties.Product;
                document.getElementById('foodtypeII').innerHTML = e.features[0].properties.Info;
                document.getElementById('location').innerHTML = e.features[0].properties.Area;
                document.getElementById('foodinc').setAttribute('src', '../assets/img/010-animals-3.png');
            });
            // Change the cursor to a pointer when the mouse is over the states layer.
            map.on('mouseenter', 'Svín', function (e) {
                map.getCanvas().style.cursor = 'pointer';
                var coordinates = e.features[0].geometry.coordinates.slice();
                var description = e.features[0].properties.description;
                // Ensure that if the map is zoomed out such that multiple
                // copies of the feature are visible, the popup appears
                // over the copy being pointed to.
                while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
                    coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
                }
                // Populate the popup and set its coordinates
                // based on the feature found.
                popup.setLngLat(coordinates)
                    .setHTML(e.features[0].properties.Name)
                    .addTo(map);
            });
            // Change it back to a pointer when it leaves.
            map.on('mouseleave', 'Svín', function () {
                map.getCanvas().style.cursor = '';
                popup.remove();
            });
            // Skelfiskur
            map.addSource('skelfiskur', {
                type: 'vector',
                url: 'mapbox://dagsson.cjgxs7hoc07ly2wmx7wc7qjz9-134iq'
            });
            map.addLayer({
                'id': 'Skelfiskur',
                'icon': '',
                'type': 'circle',
                'source': 'skelfiskur',
                'layout': {
                    'visibility': 'none'
                },
                'paint': {
                    'circle-radius': {
                        'base': 2,
                        'stops': [[8, 3], [16, 180]]
                    },
                    'circle-color': '#01665e'
                },
                'source-layer': 'Skelfiskur_merged'
            });
            map.on('click', 'Skelfiskur', function (e) {
                document.getElementById('info').innerHTML = e.features[0].properties.Name;
                document.getElementById('foodtype').innerHTML = e.features[0].properties.Product;
                document.getElementById('foodtypeII').innerHTML = e.features[0].properties.Info;
                document.getElementById('location').innerHTML = e.features[0].properties.Area;
                document.getElementById('foodinc').setAttribute('src', '../assets/img/005-food.png');
            });
            // Change the cursor to a pointer when the mouse is over the states layer.
            map.on('mouseenter', 'Skelfiskur', function (e) {
                map.getCanvas().style.cursor = 'pointer';
                var coordinates = e.features[0].geometry.coordinates.slice();
                var description = e.features[0].properties.description;
                // Ensure that if the map is zoomed out such that multiple
                // copies of the feature are visible, the popup appears
                // over the copy being pointed to.
                while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
                    coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
                }
                // Populate the popup and set its coordinates
                // based on the feature found.
                popup.setLngLat(coordinates)
                    .setHTML(e.features[0].properties.Name)
                    .addTo(map);
            });
            // Change it back to a pointer when it leaves.
            map.on('mouseleave', 'Skelfiskur', function () {
                map.getCanvas().style.cursor = '';
                popup.remove();
            });
        });
        var toggleableLayerIds = ['Nautgripir', 'Sauðfé', 'Þörungar', 'Hestar', 'Fiskeldi', 'Alifuglar', 'Skip', 'Geitur', 'Matjurtir', 'Svín', 'Skelfiskur'];
        for (var i = 0; i < toggleableLayerIds.length; i++) {
            var id = toggleableLayerIds[i];
            var foodicon = document.createElement('img');
            var link = document.createElement('a');
            link.textContent = id;
            link.appendChild(foodicon);
            link.style.color = "black";
            link.style.backgroundColor = "white";
            link.style.padding = "20px";
            link.style.fontFamily = "Source Sans Pro";
            link.className = 'pp-tab';
            link.onclick = function (e) {
                var clickedLayer = this.textContent;
                e.preventDefault();
                e.stopPropagation();
                var bgColor = map.getPaintProperty(clickedLayer, 'circle-color');
                var visibility = map.getLayoutProperty(clickedLayer, 'visibility');
                if (visibility === 'none') {
                    this.className = 'pp-tab';
                    map.setLayoutProperty(clickedLayer, 'visibility', 'visible');
                    this.style.color = "white";
                    this.style.backgroundColor = bgColor;
                }
                else {
                    this.className = 'pp-tab active';
                    map.setLayoutProperty(clickedLayer, 'visibility', 'none');
                    this.style.color = "black";
                    this.style.borderColor = "lightgray";
                    this.style.backgroundColor = "white";
                }
            };
            var layers = document.getElementById('menu');
            layers.appendChild(link);
        }
    };
    MapService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], MapService);
    return MapService;
}());



/***/ }),

/***/ "./src/app/shared/mock-food.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FOOD_LIST; });
var FOOD_LIST = [
    {
        "id": 1,
        "name": "Cattle",
        "comments": 'Nice',
        "gpxData": '../../assets/gpx/2.gpx'
    },
    {
        "id": 2,
        "name": "Sheep",
        "comments": 'Nice',
        "gpxData": '../../assets/gpx/2.gpx'
    },
    {
        "id": 3,
        "name": "Fish",
        "comments": 'Nice',
        "gpxData": '../../assets/gpx/2.gpx'
    }
];


/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false,
    MAPBOX_API_KEY: 'pk.eyJ1IjoiZGFnc3NvbiIsImEiOiJjajk0MTRqdWIzZGxwMzNycGtreDhxMmRxIn0.0zk_7FSvF_LlQ0AD2cChWQ'
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map