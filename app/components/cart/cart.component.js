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
var router_1 = require("@angular/router");
var product_service_1 = require("../../services/product.service");
var CartComponent = (function () {
    function CartComponent(productService, activateRoute) {
        this.productService = productService;
        this.activateRoute = activateRoute;
        this.items = [];
        this.total = 0;
    }
    CartComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activateRoute.params.subscribe(function (params) {
            var id = params['id'];
            if (id) {
                var item = {
                    product: _this.productService.find(id),
                    quantity: 1
                };
                if (localStorage.getItem('cart') == null) {
                    var cart = [];
                    cart.push(JSON.stringify(item));
                    localStorage.setItem('cart', JSON.stringify(cart));
                }
                else {
                    var cart = JSON.parse(localStorage.getItem('cart'));
                    var index = -1;
                    for (var i = 0; i < cart.length; i++) {
                        var item_1 = JSON.parse(cart[i]);
                        if (item_1.product.id == id) {
                            index = i;
                            break;
                        }
                    }
                    if (index == -1) {
                        cart.push(JSON.stringify(item));
                        localStorage.setItem('cart', JSON.stringify(cart));
                    }
                    else {
                        var item_2 = JSON.parse(cart[index]);
                        item_2.quantity += 1;
                        cart[index] = JSON.stringify(item_2);
                        localStorage.setItem('cart', JSON.stringify(cart));
                    }
                }
                _this.loadCart();
            }
            else {
                _this.loadCart();
            }
        });
    };
    CartComponent.prototype.loadCart = function () {
        this.total = 0;
        this.items = [];
        var cart = JSON.parse(localStorage.getItem('cart'));
        for (var i = 0; i < cart.length; i++) {
            var item = JSON.parse(cart[i]);
            this.items.push({
                product: item.product,
                quantity: item.quantity
            });
            this.total += item.product.price * item.quantity;
        }
    };
    CartComponent.prototype.remove = function (id) {
        var cart = JSON.parse(localStorage.getItem('cart'));
        var index = -1;
        for (var i = 0; i < cart.length; i++) {
            var item = JSON.parse(cart[i]);
            if (item.product.id == id) {
                cart.splice(i, 1);
                break;
            }
        }
        localStorage.setItem('cart', JSON.stringify(cart));
        this.loadCart();
    };
    CartComponent.prototype.removeAll = function () {
        var cart = [];
        localStorage.setItem('cart', JSON.stringify(cart));
        this.loadCart();
    };
    CartComponent.prototype.saveAll = function () {
        alert('STORE ON DB... PUT IN QUEUE');
        //call service which calls a REST Service on Jboss. This Service saves the data
        //on DB and put a message in the queue for sending an email. [USE TRANSACTION]
    };
    return CartComponent;
}());
CartComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        templateUrl: 'index.component.html'
    }),
    __metadata("design:paramtypes", [product_service_1.ProductService,
        router_1.ActivatedRoute])
], CartComponent);
exports.CartComponent = CartComponent;
//# sourceMappingURL=cart.component.js.map