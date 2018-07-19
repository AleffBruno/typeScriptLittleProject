"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var User = /** @class */ (function () {
    function User() {
    }
    User.prototype.saySomeMessage = function (message) {
        return message;
    };
    User.prototype.standardName = function () {
        return this.name.toUpperCase();
    };
    return User;
}());
