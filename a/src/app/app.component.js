"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var navigation_bar_component_1 = require('./navigation-bar/navigation-bar.component');
var content_component_1 = require('./content/content.component');
var router_1 = require('@angular/router');
var AppComponent = (function () {
    function AppComponent() {
        this.isTestable = true;
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-component',
            template: "\n    <navigation-bar></navigation-bar>\n    <content></content>\n    ",
            directives: [navigation_bar_component_1.NavigationBarComponent, content_component_1.ContentComponent, router_1.ROUTER_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
