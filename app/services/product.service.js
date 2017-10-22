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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var ProductService = (function () {
    function ProductService() {
        this.products = [
            { id: 'p01', name: 'name 1', price: 100, photo: 'thumb1.jpg' },
            { id: 'p02', name: 'name 2', price: 200, photo: 'thumb2.jpg' },
            { id: 'p03', name: 'name 3', price: 300, photo: 'thumb3.jpg' }
        ];
    }
    ProductService.prototype.findAll = function () {
        return this.products;
    };
    ProductService.prototype.find = function (id) {
        return this.products[this.getSelectedIndex(id)];
    };
    ProductService.prototype.getSelectedIndex = function (id) {
        for (var i = 0; i < this.products.length; i++) {
            if (this.products[i].id == id) {
                return i;
            }
        }
        return -1;
    };
    return ProductService;
}());
ProductService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [])
], ProductService);
exports.ProductService = ProductService;
//# sourceMappingURL=product.service.js.map