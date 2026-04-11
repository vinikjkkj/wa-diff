__d(
  "resize-observer-polyfill-1.5.1",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = {},
      l = { exports: e };
    function s() {
      (function (t, n) {
        typeof e == "object" && typeof l != "undefined"
          ? (l.exports = n())
          : (t.ResizeObserver = n());
      })(this, function () {
        var e = (function () {
            if (typeof Map != "undefined") return Map;
            function e(e, t) {
              var n = -1;
              return (
                e.some(function (e, r) {
                  return e[0] === t ? ((n = r), !0) : !1;
                }),
                n
              );
            }
            return (function () {
              function t() {
                this.__entries__ = [];
              }
              return (
                Object.defineProperty(t.prototype, "size", {
                  get: function () {
                    return this.__entries__.length;
                  },
                  enumerable: !0,
                  configurable: !0,
                }),
                (t.prototype.get = function (t) {
                  var n = e(this.__entries__, t),
                    r = this.__entries__[n];
                  return r && r[1];
                }),
                (t.prototype.set = function (t, n) {
                  var r = e(this.__entries__, t);
                  ~r
                    ? (this.__entries__[r][1] = n)
                    : this.__entries__.push([t, n]);
                }),
                (t.prototype.delete = function (t) {
                  var n = this.__entries__,
                    r = e(n, t);
                  ~r && n.splice(r, 1);
                }),
                (t.prototype.has = function (t) {
                  return !!~e(this.__entries__, t);
                }),
                (t.prototype.clear = function () {
                  this.__entries__.splice(0);
                }),
                (t.prototype.forEach = function (e, t) {
                  t === void 0 && (t = null);
                  for (var n = 0, r = this.__entries__; n < r.length; n++) {
                    var o = r[n];
                    e.call(t, o[1], o[0]);
                  }
                }),
                t
              );
            })();
          })(),
          n =
            typeof window != "undefined" &&
            typeof document != "undefined" &&
            window.document === document,
          r = (function () {
            return typeof t != "undefined" && t.Math === Math
              ? t
              : typeof self != "undefined" && self.Math === Math
                ? self
                : typeof window != "undefined" && window.Math === Math
                  ? window
                  : Function("return this")();
          })(),
          o = (function () {
            return typeof requestAnimationFrame == "function"
              ? requestAnimationFrame.bind(r)
              : function (e) {
                  return setTimeout(function () {
                    return e(Date.now());
                  }, 1e3 / 60);
                };
          })(),
          a = 2;
        function i(e, t) {
          var n = !1,
            r = !1,
            i = 0;
          function l() {
            (n && ((n = !1), e()), r && u());
          }
          function s() {
            o(l);
          }
          function u() {
            var e = Date.now();
            if (n) {
              if (e - i < a) return;
              r = !0;
            } else ((n = !0), (r = !1), setTimeout(s, t));
            i = e;
          }
          return u;
        }
        var l = 20,
          s = [
            "top",
            "right",
            "bottom",
            "left",
            "width",
            "height",
            "size",
            "weight",
          ],
          u = typeof MutationObserver != "undefined",
          c = (function () {
            function e() {
              ((this.connected_ = !1),
                (this.mutationEventsAdded_ = !1),
                (this.mutationsObserver_ = null),
                (this.observers_ = []),
                (this.onTransitionEnd_ = this.onTransitionEnd_.bind(this)),
                (this.refresh = i(this.refresh.bind(this), l)));
            }
            return (
              (e.prototype.addObserver = function (e) {
                (~this.observers_.indexOf(e) || this.observers_.push(e),
                  this.connected_ || this.connect_());
              }),
              (e.prototype.removeObserver = function (e) {
                var t = this.observers_,
                  n = t.indexOf(e);
                (~n && t.splice(n, 1),
                  !t.length && this.connected_ && this.disconnect_());
              }),
              (e.prototype.refresh = function () {
                var e = this.updateObservers_();
                e && this.refresh();
              }),
              (e.prototype.updateObservers_ = function () {
                var e = this.observers_.filter(function (e) {
                  return (e.gatherActive(), e.hasActive());
                });
                return (
                  e.forEach(function (e) {
                    return e.broadcastActive();
                  }),
                  e.length > 0
                );
              }),
              (e.prototype.connect_ = function () {
                !n ||
                  this.connected_ ||
                  (document.addEventListener(
                    "transitionend",
                    this.onTransitionEnd_,
                  ),
                  window.addEventListener("resize", this.refresh),
                  u
                    ? ((this.mutationsObserver_ = new MutationObserver(
                        this.refresh,
                      )),
                      this.mutationsObserver_.observe(document, {
                        attributes: !0,
                        childList: !0,
                        characterData: !0,
                        subtree: !0,
                      }))
                    : (document.addEventListener(
                        "DOMSubtreeModified",
                        this.refresh,
                      ),
                      (this.mutationEventsAdded_ = !0)),
                  (this.connected_ = !0));
              }),
              (e.prototype.disconnect_ = function () {
                !n ||
                  !this.connected_ ||
                  (document.removeEventListener(
                    "transitionend",
                    this.onTransitionEnd_,
                  ),
                  window.removeEventListener("resize", this.refresh),
                  this.mutationsObserver_ &&
                    this.mutationsObserver_.disconnect(),
                  this.mutationEventsAdded_ &&
                    document.removeEventListener(
                      "DOMSubtreeModified",
                      this.refresh,
                    ),
                  (this.mutationsObserver_ = null),
                  (this.mutationEventsAdded_ = !1),
                  (this.connected_ = !1));
              }),
              (e.prototype.onTransitionEnd_ = function (e) {
                var t = e.propertyName,
                  n = t === void 0 ? "" : t,
                  r = s.some(function (e) {
                    return !!~n.indexOf(e);
                  });
                r && this.refresh();
              }),
              (e.getInstance = function () {
                return (
                  this.instance_ || (this.instance_ = new e()),
                  this.instance_
                );
              }),
              (e.instance_ = null),
              e
            );
          })(),
          d = function (e, t) {
            for (var n = 0, r = Object.keys(t); n < r.length; n++) {
              var o = r[n];
              Object.defineProperty(e, o, {
                value: t[o],
                enumerable: !1,
                writable: !1,
                configurable: !0,
              });
            }
            return e;
          },
          m = function (e) {
            var t = e && e.ownerDocument && e.ownerDocument.defaultView;
            return t || r;
          },
          p = R(0, 0, 0, 0);
        function _(e) {
          return parseFloat(e) || 0;
        }
        function f(e) {
          for (var t = [], n = 1; n < arguments.length; n++)
            t[n - 1] = arguments[n];
          return t.reduce(function (t, n) {
            var r = e["border-" + n + "-width"];
            return t + _(r);
          }, 0);
        }
        function g(e) {
          for (
            var t = ["top", "right", "bottom", "left"], n = {}, r = 0, o = t;
            r < o.length;
            r++
          ) {
            var a = o[r],
              i = e["padding-" + a];
            n[a] = _(i);
          }
          return n;
        }
        function h(e) {
          var t = e.getBBox();
          return R(0, 0, t.width, t.height);
        }
        function y(e) {
          var t = e.clientWidth,
            n = e.clientHeight;
          if (!t && !n) return p;
          var r = m(e).getComputedStyle(e),
            o = g(r),
            a = o.left + o.right,
            i = o.top + o.bottom,
            l = _(r.width),
            s = _(r.height);
          if (
            (r.boxSizing === "border-box" &&
              (Math.round(l + a) !== t && (l -= f(r, "left", "right") + a),
              Math.round(s + i) !== n && (s -= f(r, "top", "bottom") + i)),
            !b(e))
          ) {
            var u = Math.round(l + a) - t,
              c = Math.round(s + i) - n;
            (Math.abs(u) !== 1 && (l -= u), Math.abs(c) !== 1 && (s -= c));
          }
          return R(o.left, o.top, l, s);
        }
        var C = (function () {
          return typeof SVGGraphicsElement != "undefined"
            ? function (e) {
                return e instanceof m(e).SVGGraphicsElement;
              }
            : function (e) {
                return (
                  e instanceof m(e).SVGElement && typeof e.getBBox == "function"
                );
              };
        })();
        function b(e) {
          return e === m(e).document.documentElement;
        }
        function v(e) {
          return n ? (C(e) ? h(e) : y(e)) : p;
        }
        function S(e) {
          var t = e.x,
            n = e.y,
            r = e.width,
            o = e.height,
            a =
              typeof DOMRectReadOnly != "undefined" ? DOMRectReadOnly : Object,
            i = Object.create(a.prototype);
          return (
            d(i, {
              x: t,
              y: n,
              width: r,
              height: o,
              top: n,
              right: t + r,
              bottom: o + n,
              left: t,
            }),
            i
          );
        }
        function R(e, t, n, r) {
          return { x: e, y: t, width: n, height: r };
        }
        var L = (function () {
            function e(e) {
              ((this.broadcastWidth = 0),
                (this.broadcastHeight = 0),
                (this.contentRect_ = R(0, 0, 0, 0)),
                (this.target = e));
            }
            return (
              (e.prototype.isActive = function () {
                var e = v(this.target);
                return (
                  (this.contentRect_ = e),
                  e.width !== this.broadcastWidth ||
                    e.height !== this.broadcastHeight
                );
              }),
              (e.prototype.broadcastRect = function () {
                var e = this.contentRect_;
                return (
                  (this.broadcastWidth = e.width),
                  (this.broadcastHeight = e.height),
                  e
                );
              }),
              e
            );
          })(),
          E = (function () {
            function e(e, t) {
              var n = S(t);
              d(this, { target: e, contentRect: n });
            }
            return e;
          })(),
          k = (function () {
            function t(t, n, r) {
              if (
                ((this.activeObservations_ = []),
                (this.observations_ = new e()),
                typeof t != "function")
              )
                throw new TypeError(
                  "The callback provided as parameter 1 is not a function.",
                );
              ((this.callback_ = t),
                (this.controller_ = n),
                (this.callbackCtx_ = r));
            }
            return (
              (t.prototype.observe = function (e) {
                if (!arguments.length)
                  throw new TypeError(
                    "1 argument required, but only 0 present.",
                  );
                if (
                  !(
                    typeof Element == "undefined" ||
                    !(Element instanceof Object)
                  )
                ) {
                  if (!(e instanceof m(e).Element))
                    throw new TypeError(
                      'parameter 1 is not of type "Element".',
                    );
                  var t = this.observations_;
                  t.has(e) ||
                    (t.set(e, new L(e)),
                    this.controller_.addObserver(this),
                    this.controller_.refresh());
                }
              }),
              (t.prototype.unobserve = function (e) {
                if (!arguments.length)
                  throw new TypeError(
                    "1 argument required, but only 0 present.",
                  );
                if (
                  !(
                    typeof Element == "undefined" ||
                    !(Element instanceof Object)
                  )
                ) {
                  if (!(e instanceof m(e).Element))
                    throw new TypeError(
                      'parameter 1 is not of type "Element".',
                    );
                  var t = this.observations_;
                  t.has(e) &&
                    (t.delete(e),
                    t.size || this.controller_.removeObserver(this));
                }
              }),
              (t.prototype.disconnect = function () {
                (this.clearActive(),
                  this.observations_.clear(),
                  this.controller_.removeObserver(this));
              }),
              (t.prototype.gatherActive = function () {
                var e = this;
                (this.clearActive(),
                  this.observations_.forEach(function (t) {
                    t.isActive() && e.activeObservations_.push(t);
                  }));
              }),
              (t.prototype.broadcastActive = function () {
                if (this.hasActive()) {
                  var e = this.callbackCtx_,
                    t = this.activeObservations_.map(function (e) {
                      return new E(e.target, e.broadcastRect());
                    });
                  (this.callback_.call(e, t, e), this.clearActive());
                }
              }),
              (t.prototype.clearActive = function () {
                this.activeObservations_.splice(0);
              }),
              (t.prototype.hasActive = function () {
                return this.activeObservations_.length > 0;
              }),
              t
            );
          })(),
          I = typeof WeakMap != "undefined" ? new WeakMap() : new e(),
          T = (function () {
            function e(t) {
              if (!(this instanceof e))
                throw new TypeError("Cannot call a class as a function.");
              if (!arguments.length)
                throw new TypeError("1 argument required, but only 0 present.");
              var n = c.getInstance(),
                r = new k(t, n, this);
              I.set(this, r);
            }
            return e;
          })();
        ["observe", "unobserve", "disconnect"].forEach(function (e) {
          T.prototype[e] = function () {
            var t;
            return (t = I.get(this))[e].apply(t, arguments);
          };
        });
        var D = (function () {
          return typeof r.ResizeObserver != "undefined" ? r.ResizeObserver : T;
        })();
        return D;
      });
    }
    var u = !1;
    function c() {
      return (u || ((u = !0), s()), l.exports);
    }
    function d(e) {
      switch (e) {
        case void 0:
          return c();
      }
    }
    a.exports = d;
  },
  null,
);
