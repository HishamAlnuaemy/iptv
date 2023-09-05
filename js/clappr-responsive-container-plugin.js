! function(e, t) {
    "object" == typeof exports && "object" == typeof module ? module.exports = t(require("Clappr")) : "function" == typeof define && define.amd ? define(["Clappr"], t) : "object" == typeof exports ? exports.ResponsiveContainer = t(require("Clappr")) : e.ResponsiveContainer = t(e.Clappr)
}(this, function(e) {
    return function(e) {
        function t(n) {
            if (r[n]) return r[n].exports;
            var o = r[n] = {
                exports: {},
                id: n,
                loaded: !1
            };
            return e[n].call(o.exports, o, o.exports, t), o.loaded = !0, o.exports
        }
        var r = {};
        return t.m = e, t.c = r, t.p = "", t(0)
    }([function(e, t, r) {
        "use strict";

        function n(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function o(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" != typeof t && "function" != typeof t ? e : t
        }

        function i(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var a = function() {
                function e(e, t) {
                    for (var r = 0; r < t.length; r++) {
                        var n = t[r];
                        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                    }
                }
                return function(t, r, n) {
                    return r && e(t.prototype, r), n && e(t, n), t
                }
            }(),
            p = r(1),
            s = function(e) {
                function t(e) {
                    n(this, t);
                    var r = o(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
                    return r.playerInfo = p.PlayerInfo.getInstance(r.options.playerId), r.playerWrapper = r.playerInfo.options.parentElement, (0, p.$)(document).ready(function() {
                        setTimeout(r._onResize(), 500)
                    }), r
                }
                return i(t, e), a(t, [{
                    key: "name",
                    get: function() {
                        return "responsive_container"
                    }
                }]), a(t, [{
                    key: "bindEvents",
                    value: function() {
                        var e = this;
                        (0, p.$)(window).resize(function() {
                            setTimeout(e._onResize(), 500)
                        })
                    }
                }, {
                    key: "_onResize",
                    value: function() {
                        console.log(this.playerWrapper.clientWidth);
                        var e = 0 === this.playerWrapper.clientWidth ? this.options.width : this.playerWrapper.clientWidth;
                        this.resizeByWidth(e)
                    }
                }, {
                    key: "resizeByWidth",
                    value: function(e) {
                        var t = Math.floor(this.options.height / this.options.width * e);
                        this.playerInfo.currentSize = {
                            width: e,
                            height: t
                        }, this.triggerResize(this.playerInfo.currentSize)
                    }
                }, {
                    key: "triggerResize",
                    value: function(e) {
                        p.Mediator.trigger(this.options.playerId + ":" + p.Events.PLAYER_RESIZE, e);
                        var t = (0, p.$)(this.playerWrapper).children("[data-player]");
                        console.log(t), t.width(e.width), t.height(e.height)
                    }
                }]), t
            }(p.UIContainerPlugin);
        t.default = s, e.exports = t.default
    }, function(t, r) {
        t.exports = e
    }])
});