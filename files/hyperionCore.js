__d(
  "hyperionCore",
  ["Promise", "__debug", "hyperionGlobals", "hyperionHook"],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d,
      m = (function () {
        function e(e) {
          ((this.status = 0), (this.name = e));
        }
        var t = e.prototype;
        return ((t.interceptObjectOwnProperties = function (t) {}), e);
      })();
    function p(e, t) {
      for (var n; e && !n; )
        ((n = Object.getOwnPropertyDescriptor(e, t)),
          n && (n.container = e),
          (e = Object.getPrototypeOf(e)));
      return n;
    }
    function _(e, t, n) {
      try {
        Object.defineProperty(e, t, n);
      } catch (e) {}
    }
    var f = Object.prototype.hasOwnProperty;
    function g(e, t) {
      return f.call(e, t);
    }
    function h(e, t, n) {
      if (!(!e || !t)) {
        for (
          var r = Object.getOwnPropertyNames(e), a = 0, i = r.length;
          a < i;
          ++a
        ) {
          var l = r[a];
          if (!(l in t)) {
            var s = Object.getOwnPropertyDescriptor(e, l);
            o("hyperionGlobals").assert(
              s != null,
              "Unexpected situation, we should have own property for " + l,
            );
            try {
              Object.defineProperty(t, l, s);
            } catch (e) {}
          }
        }
        {
          ((t.toString = function () {
            return e.toString();
          }),
            Object.prototype.hasOwnProperty.call(e, "valueOf") &&
              (t.valueOf = function () {
                return e.valueOf();
              }),
            (t.prototype = e.prototype));
          var u = Object.getOwnPropertyDescriptor(e, "name");
          try {
            Object.defineProperty(t, "name", u);
          } catch (e) {}
        }
      }
    }
    var y = "__ext",
      C = "__sproto",
      b = 0,
      v = [];
    function S(e) {
      return (
        v.push(e),
        function () {
          var t = v.indexOf(e);
          t > -1 && v.splice(t, 1);
        }
      );
    }
    function R(e) {
      var t = Object.getOwnPropertyDescriptor(e, C);
      return t == null ? void 0 : t.value;
    }
    function L(e, t) {
      return (Object.defineProperty(e, C, { value: t }), t);
    }
    var E = {};
    function k(e) {
      var t = typeof e;
      return e && (t === "object" || t === "function");
    }
    function I(e) {
      return g(e, y);
    }
    function T(e, t) {
      if (k(e) && !I(e)) {
        for (var n = t, r = 0; !n && r < v.length; ++r) n = v[r](e);
        if ((n || (n = e[C]), n)) {
          var o = { virtualPropertyValues: {}, shadowPrototype: n, id: b++ };
          ((E.value = o), Object.defineProperty(e, y, E), n.interceptObject(e));
        }
      }
      return e;
    }
    function D(e, t) {
      var n = e[y];
      return (!n && t && (T(e), (n = e[y])), n);
    }
    function x(e, t) {
      var n = D(e, !0);
      return n == null ? void 0 : n.virtualPropertyValues[t];
    }
    function $(e, t, n) {
      var r = D(e, !0);
      return (
        r
          ? (r.virtualPropertyValues[t] = n)
          : o("hyperionGlobals").assert(
              !!r,
              "Could not get extension for the object",
            ),
        n
      );
    }
    var P = "__ext",
      N = function () {},
      M = (function (e) {
        function t() {
          return e.apply(this, arguments) || this;
        }
        babelHelpers.inheritsLoose(t, e);
        var n = t.prototype;
        return (
          (n.createMultiCallbackCall = function (t) {
            return function (e) {
              for (var n = e, r = 0, o = t.length; r < o; ++r)
                n = t[r].call(this, n);
              return n;
            };
          }),
          t
        );
      })((d || (d = o("hyperionHook"))).Hook),
      w = (function (e) {
        function t() {
          return e.apply(this, arguments) || this;
        }
        babelHelpers.inheritsLoose(t, e);
        var n = t.prototype;
        return (
          (n.createMultiCallbackCall = function (t) {
            return function () {
              for (var e = !1, n = 0, r = t.length; n < r; ++n) {
                var o = t[n];
                e = o.apply(this, arguments) || e;
              }
              return e;
            };
          }),
          t
        );
      })(d.Hook),
      A = (function (e) {
        function t() {
          return e.apply(this, arguments) || this;
        }
        babelHelpers.inheritsLoose(t, e);
        var n = t.prototype;
        return (
          (n.createMultiCallbackCall = function (t) {
            return function (e) {
              for (var n = e, r = 0, o = t.length; r < o; ++r)
                n = t[r].call(this, n);
              return n;
            };
          }),
          t
        );
      })(d.Hook),
      F = (function (e) {
        function t() {
          return e.apply(this, arguments) || this;
        }
        return (babelHelpers.inheritsLoose(t, e), t);
      })(d.Hook),
      O = (function (e) {
        function t() {
          return e.apply(this, arguments) || this;
        }
        babelHelpers.inheritsLoose(t, e);
        var n = t.prototype;
        return (
          (n.createMultiCallbackCall = function (t) {
            return function () {
              for (var e = [], n = 0, r = t.length; n < r; ++n) {
                var o = t[n];
                e.push(o.apply(this, arguments));
              }
              return function (t) {
                for (var n = t, r = 0, o = e.length; r < o; ++r) {
                  var a = e[r];
                  n = a.call(this, n);
                }
                return n;
              };
            };
          }),
          t
        );
      })(d.Hook),
      B = (function (e) {
        function t(t, n, r) {
          var o;
          (n === void 0 && (n = N),
            r === void 0 && (r = !1),
            (o = e.call(this, t) || this),
            (o.original = N));
          var a = o;
          return (
            (o.interceptor = r
              ? function () {
                  var e = a.dispatcherFunc.apply(this, arguments);
                  return T(e);
                }
              : function () {
                  var e = a.dispatcherFunc.apply(this, arguments);
                  return e;
                }),
            q(o.interceptor, o),
            (o.implementation = n),
            (o.dispatcherFunc = o.original),
            o.setOriginal(n),
            o
          );
        }
        babelHelpers.inheritsLoose(t, e);
        var n = t.prototype;
        return (
          (n.getOriginal = function () {
            return this.original;
          }),
          (n.setOriginal = function (t) {
            this.original !== t &&
              ((this.original = t),
              this.customFunc || (this.implementation = t),
              h(t, this.interceptor),
              q(t, this),
              this.updateDispatcherFunc());
          }),
          (n.setCustom = function (t) {
            ((this.customFunc = t),
              (this.implementation = t),
              this.updateDispatcherFunc());
          }),
          (n.updateDispatcherFunc = function () {
            var e = 0;
            ((e |= this.onBeforeCallMapper ? 8 : 0),
              (e |= this.onBeforeCallObserver ? 4 : 0),
              (e |= this.onAfterCallMapper ? 2 : 0),
              (e |= this.onAfterCallObserver ? 1 : 0),
              (e |= this.onBeforeAndAterCallMapper ? 16 : 0));
            var n = t.dispatcherCtors[e];
            (o("hyperionGlobals").assert(
              !!n,
              "unhandled interceptor state " + e,
            ),
              (this.dispatcherFunc = n(this)));
          }),
          (n.onBeforeCallMapperAdd = function (t) {
            return (
              this.onBeforeCallMapper ||
                ((this.onBeforeCallMapper = new M()),
                this.updateDispatcherFunc()),
              this.onBeforeCallMapper.add(t)
            );
          }),
          (n.onBeforeCallMapperRemove = function (t) {
            var e;
            return (
              (e = this.onBeforeCallMapper) != null &&
                e.remove(t) &&
                (this.onBeforeCallMapper.hasCallback() ||
                  (this.onBeforeCallMapper = null),
                this.updateDispatcherFunc()),
              t
            );
          }),
          (n.onBeforeCallObserverAdd = function (t) {
            return (
              this.onBeforeCallObserver ||
                ((this.onBeforeCallObserver = new w()),
                this.updateDispatcherFunc()),
              this.onBeforeCallObserver.add(t)
            );
          }),
          (n.onBeforeCallObserverRemove = function (t) {
            var e;
            return (
              (e = this.onBeforeCallObserver) != null &&
                e.remove(t) &&
                (this.onBeforeCallObserver.hasCallback() ||
                  (this.onBeforeCallObserver = null),
                this.updateDispatcherFunc()),
              t
            );
          }),
          (n.onAfterCallMapperAdd = function (t) {
            return (
              this.onAfterCallMapper ||
                ((this.onAfterCallMapper = new A()),
                this.updateDispatcherFunc()),
              this.onAfterCallMapper.add(t)
            );
          }),
          (n.onAfterCallMapperRemove = function (t) {
            var e;
            return (
              (e = this.onAfterCallMapper) != null &&
                e.remove(t) &&
                (this.onAfterCallMapper.hasCallback() ||
                  (this.onAfterCallMapper = null),
                this.updateDispatcherFunc()),
              t
            );
          }),
          (n.onAfterCallObserverAdd = function (t) {
            return (
              this.onAfterCallObserver ||
                ((this.onAfterCallObserver = new F()),
                this.updateDispatcherFunc()),
              this.onAfterCallObserver.add(t)
            );
          }),
          (n.onAfterCallObserverRemove = function (t) {
            var e;
            return (
              (e = this.onAfterCallObserver) != null &&
                e.remove(t) &&
                this.updateDispatcherFunc(),
              t
            );
          }),
          (n.onBeforeAndAfterCallMapperAdd = function (t) {
            return (
              this.onBeforeAndAterCallMapper ||
                ((this.onBeforeAndAterCallMapper = new O()),
                this.updateDispatcherFunc()),
              this.onBeforeAndAterCallMapper.add(t)
            );
          }),
          (n.onBeforeAndAfterCallMapperRemove = function (t) {
            var e;
            return (
              (e = this.onBeforeAndAterCallMapper) != null &&
                e.remove(t) &&
                (this.onBeforeAndAterCallMapper.hasCallback() ||
                  (this.onBeforeAndAterCallMapper = null),
                this.updateDispatcherFunc()),
              t
            );
          }),
          (n.getData = function (t) {
            var e;
            return (e = this.data) == null ? void 0 : e[t];
          }),
          (n.setData = function (t, n) {
            (this.data || (this.data = {}), (this.data[t] = n));
          }),
          (n.testAndSet = function (t) {
            var e = this.getData(t) || !1;
            return (e || this.setData(t, !0), e);
          }),
          t
        );
      })(m);
    B.dispatcherCtors = (function (e) {
      var t =
        ((e = {}),
        (e[0] = function (t) {
          var e;
          return (e = t.customFunc) != null ? e : t.original;
        }),
        (e[1] = function (t) {
          return function () {
            var e;
            return (
              (e = t.implementation.apply(this, arguments)),
              t.onAfterCallObserver.call.call(this, e),
              e
            );
          };
        }),
        (e[2] = function (t) {
          return function () {
            var e;
            return (
              (e = t.implementation.apply(this, arguments)),
              (e = t.onAfterCallMapper.call.call(this, e)),
              e
            );
          };
        }),
        (e[3] = function (t) {
          return function () {
            var e;
            return (
              (e = t.implementation.apply(this, arguments)),
              (e = t.onAfterCallMapper.call.call(this, e)),
              t.onAfterCallObserver.call.call(this, e),
              e
            );
          };
        }),
        (e[4] = function (t) {
          return function () {
            var e;
            return (
              t.onBeforeCallObserver.call.apply(this, arguments) ||
                (e = t.implementation.apply(this, arguments)),
              e
            );
          };
        }),
        (e[5] = function (t) {
          return function () {
            var e;
            return (
              t.onBeforeCallObserver.call.apply(this, arguments) ||
                ((e = t.implementation.apply(this, arguments)),
                t.onAfterCallObserver.call.call(this, e)),
              e
            );
          };
        }),
        (e[6] = function (t) {
          return function () {
            var e;
            return (
              t.onBeforeCallObserver.call.apply(this, arguments) ||
                ((e = t.implementation.apply(this, arguments)),
                (e = t.onAfterCallMapper.call.call(this, e))),
              e
            );
          };
        }),
        (e[7] = function (t) {
          return function () {
            var e;
            return (
              t.onBeforeCallObserver.call.apply(this, arguments) ||
                ((e = t.implementation.apply(this, arguments)),
                (e = t.onAfterCallMapper.call.call(this, e)),
                t.onAfterCallObserver.call.call(this, e)),
              e
            );
          };
        }),
        (e[8] = function (t) {
          return function () {
            var e,
              n = t.onBeforeCallMapper.call.call(this, arguments);
            return ((e = t.implementation.apply(this, n)), e);
          };
        }),
        (e[9] = function (t) {
          return function () {
            var e,
              n = t.onBeforeCallMapper.call.call(this, arguments);
            return (
              (e = t.implementation.apply(this, n)),
              t.onAfterCallObserver.call.call(this, e),
              e
            );
          };
        }),
        (e[10] = function (t) {
          return function () {
            var e,
              n = t.onBeforeCallMapper.call.call(this, arguments);
            return (
              (e = t.implementation.apply(this, n)),
              (e = t.onAfterCallMapper.call.call(this, e)),
              e
            );
          };
        }),
        (e[11] = function (t) {
          return function () {
            var e,
              n = t.onBeforeCallMapper.call.call(this, arguments);
            return (
              (e = t.implementation.apply(this, n)),
              (e = t.onAfterCallMapper.call.call(this, e)),
              t.onAfterCallObserver.call.call(this, e),
              e
            );
          };
        }),
        (e[12] = function (t) {
          return function () {
            var e,
              n = t.onBeforeCallMapper.call.call(this, arguments);
            return (
              t.onBeforeCallObserver.call.apply(this, n) ||
                (e = t.implementation.apply(this, n)),
              e
            );
          };
        }),
        (e[13] = function (t) {
          return function () {
            var e,
              n = t.onBeforeCallMapper.call.call(this, arguments);
            return (
              t.onBeforeCallObserver.call.apply(this, n) ||
                ((e = t.implementation.apply(this, n)),
                t.onAfterCallObserver.call.call(this, e)),
              e
            );
          };
        }),
        (e[14] = function (t) {
          return function () {
            var e,
              n = t.onBeforeCallMapper.call.call(this, arguments);
            return (
              t.onBeforeCallObserver.call.apply(this, n) ||
                ((e = t.implementation.apply(this, n)),
                (e = t.onAfterCallMapper.call.call(this, e))),
              e
            );
          };
        }),
        (e[15] = function (t) {
          return function () {
            var e,
              n = t.onBeforeCallMapper.call.call(this, arguments);
            return (
              t.onBeforeCallObserver.call.apply(this, n) ||
                ((e = t.implementation.apply(this, n)),
                (e = t.onAfterCallMapper.call.call(this, e)),
                t.onAfterCallObserver.call.call(this, e)),
              e
            );
          };
        }),
        (e[16] = function (t) {
          return function () {
            var e,
              n = t.onBeforeAndAterCallMapper.call.call(this, arguments);
            return (
              (e = t.implementation.apply(this, arguments)),
              (e = n.call(this, e)),
              e
            );
          };
        }),
        (e[17] = function (t) {
          return function () {
            var e,
              n = t.onBeforeAndAterCallMapper.call.call(this, arguments);
            return (
              (e = t.implementation.apply(this, arguments)),
              t.onAfterCallObserver.call.call(this, e),
              (e = n.call(this, e)),
              e
            );
          };
        }),
        (e[18] = function (t) {
          return function () {
            var e,
              n = t.onBeforeAndAterCallMapper.call.call(this, arguments);
            return (
              (e = t.implementation.apply(this, arguments)),
              (e = t.onAfterCallMapper.call.call(this, e)),
              (e = n.call(this, e)),
              e
            );
          };
        }),
        (e[19] = function (t) {
          return function () {
            var e,
              n = t.onBeforeAndAterCallMapper.call.call(this, arguments);
            return (
              (e = t.implementation.apply(this, arguments)),
              (e = t.onAfterCallMapper.call.call(this, e)),
              t.onAfterCallObserver.call.call(this, e),
              (e = n.call(this, e)),
              e
            );
          };
        }),
        (e[20] = function (t) {
          return function () {
            var e;
            if (!t.onBeforeCallObserver.call.apply(this, arguments)) {
              var n = t.onBeforeAndAterCallMapper.call.call(this, arguments);
              ((e = t.implementation.apply(this, arguments)),
                (e = n.call(this, e)));
            }
            return e;
          };
        }),
        (e[21] = function (t) {
          return function () {
            var e;
            if (!t.onBeforeCallObserver.call.apply(this, arguments)) {
              var n = t.onBeforeAndAterCallMapper.call.call(this, arguments);
              ((e = t.implementation.apply(this, arguments)),
                t.onAfterCallObserver.call.call(this, e),
                (e = n.call(this, e)));
            }
            return e;
          };
        }),
        (e[22] = function (t) {
          return function () {
            var e;
            if (!t.onBeforeCallObserver.call.apply(this, arguments)) {
              var n = t.onBeforeAndAterCallMapper.call.call(this, arguments);
              ((e = t.implementation.apply(this, arguments)),
                (e = t.onAfterCallMapper.call.call(this, e)),
                (e = n.call(this, e)));
            }
            return e;
          };
        }),
        (e[23] = function (t) {
          return function () {
            var e;
            if (!t.onBeforeCallObserver.call.apply(this, arguments)) {
              var n = t.onBeforeAndAterCallMapper.call.call(this, arguments);
              ((e = t.implementation.apply(this, arguments)),
                (e = t.onAfterCallMapper.call.call(this, e)),
                t.onAfterCallObserver.call.call(this, e),
                (e = n.call(this, e)));
            }
            return e;
          };
        }),
        (e[24] = function (t) {
          return function () {
            var e,
              n = t.onBeforeCallMapper.call.call(this, arguments),
              r = t.onBeforeAndAterCallMapper.call.call(this, arguments);
            return (
              (e = t.implementation.apply(this, n)),
              (e = r.call(this, e)),
              e
            );
          };
        }),
        (e[25] = function (t) {
          return function () {
            var e,
              n = t.onBeforeCallMapper.call.call(this, arguments),
              r = t.onBeforeAndAterCallMapper.call.call(this, arguments);
            return (
              (e = t.implementation.apply(this, n)),
              t.onAfterCallObserver.call.call(this, e),
              (e = r.call(this, e)),
              e
            );
          };
        }),
        (e[26] = function (t) {
          return function () {
            var e,
              n = t.onBeforeCallMapper.call.call(this, arguments),
              r = t.onBeforeAndAterCallMapper.call.call(this, arguments);
            return (
              (e = t.implementation.apply(this, n)),
              (e = t.onAfterCallMapper.call.call(this, e)),
              (e = r.call(this, e)),
              e
            );
          };
        }),
        (e[27] = function (t) {
          return function () {
            var e,
              n = t.onBeforeCallMapper.call.call(this, arguments),
              r = t.onBeforeAndAterCallMapper.call.call(this, arguments);
            return (
              (e = t.implementation.apply(this, n)),
              (e = t.onAfterCallMapper.call.call(this, e)),
              t.onAfterCallObserver.call.call(this, e),
              (e = r.call(this, e)),
              e
            );
          };
        }),
        (e[28] = function (t) {
          return function () {
            var e,
              n = t.onBeforeCallMapper.call.call(this, arguments);
            if (!t.onBeforeCallObserver.call.apply(this, n)) {
              var r = t.onBeforeAndAterCallMapper.call.call(this, arguments);
              ((e = t.implementation.apply(this, n)), (e = r.call(this, e)));
            }
            return e;
          };
        }),
        (e[29] = function (t) {
          return function () {
            var e,
              n = t.onBeforeCallMapper.call.call(this, arguments);
            if (!t.onBeforeCallObserver.call.apply(this, n)) {
              var r = t.onBeforeAndAterCallMapper.call.call(this, arguments);
              ((e = t.implementation.apply(this, n)),
                t.onAfterCallObserver.call.call(this, e),
                (e = r.call(this, e)));
            }
            return e;
          };
        }),
        (e[30] = function (t) {
          return function () {
            var e,
              n = t.onBeforeCallMapper.call.call(this, arguments);
            if (!t.onBeforeCallObserver.call.apply(this, n)) {
              var r = t.onBeforeAndAterCallMapper.call.call(this, arguments);
              ((e = t.implementation.apply(this, n)),
                (e = t.onAfterCallMapper.call.call(this, e)),
                (e = r.call(this, e)));
            }
            return e;
          };
        }),
        (e[31] = function (t) {
          return function () {
            var e,
              n = t.onBeforeCallMapper.call.call(this, arguments);
            if (!t.onBeforeCallObserver.call.apply(this, n)) {
              var r = t.onBeforeAndAterCallMapper.call.call(this, arguments);
              ((e = t.implementation.apply(this, n)),
                (e = t.onAfterCallMapper.call.call(this, e)),
                t.onAfterCallObserver.call.call(this, e),
                (e = r.call(this, e)));
            }
            return e;
          };
        }),
        e);
      return t;
    })();
    function W(e) {
      return e == null ? void 0 : e[P];
    }
    function q(e, t) {
      Object.defineProperty(e, P, {
        value: t,
        writable: !1,
        enumerable: !1,
        configurable: !1,
      });
    }
    function U(e, t, n, r) {
      (t === void 0 && (t = !1),
        r === void 0 && (r = "_annonymous"),
        o("hyperionGlobals").assert(
          typeof e == "function",
          "cannot intercept non-function input",
        ));
      var a = W(e);
      return (a || (a = n ? new n(r, e, t) : new B(r, e, t)), a);
    }
    var V = (function (e) {
      function t(t, n, r, o) {
        var a;
        return (
          r === void 0 && (r = !1),
          (a = e.call(this, t, void 0, r) || this),
          a.interceptProperty(n.targetPrototype, !1, o),
          a.status !== 1 && n.addPendingPropertyInterceptor(a),
          a
        );
      }
      babelHelpers.inheritsLoose(t, e);
      var n = t.prototype;
      return (
        (n.interceptProperty = function (t, n, r) {
          if (((r = r != null ? r : p(t, this.name)), n)) {
            var e;
            r
              ? r.writable &&
                (r.value || Object.prototype.hasOwnProperty.call(r, "value")) &&
                ((e = r.value),
                delete r.value,
                delete r.writable,
                (r.get = function () {
                  return e;
                }),
                (r.set = function (t) {
                  e = t;
                }),
                (r.configurable = !0))
              : (r = {
                  get: function () {
                    return e;
                  },
                  set: function (n) {
                    e = n;
                  },
                  enumerable: !0,
                  configurable: !0,
                  container: t,
                });
          }
          if (r)
            if (r.value)
              (this.setOriginal(r.value),
                (r.value = this.interceptor),
                _(r.container, this.name, r),
                (this.status = 1));
            else if (r.get || r.set) {
              var o = this,
                a = r,
                i = a.get,
                l = a.set;
              (i &&
                ((r.get = function () {
                  var e = i.call(this);
                  return typeof e != "function"
                    ? e
                    : (e !== o.interceptor && o.setOriginal(e), o.interceptor);
                }),
                q(r.get, o)),
                l &&
                  ((r.set = function (e) {
                    return (
                      l.call(this, o.interceptor),
                      e !== o.interceptor &&
                        e !== o.original &&
                        o.setOriginal(e),
                      o.interceptor
                    );
                  }),
                  q(r.set, o)),
                _(r.container, this.name, r),
                (this.status = r.configurable ? 1 : 4));
            } else
              Object.prototype.hasOwnProperty.call(r, "value") &&
                (this.status = 1);
          else this.status = 2;
        }),
        (n.interceptObjectOwnProperties = function (t) {
          this.interceptProperty(t, !0);
        }),
        t
      );
    })(B);
    function H(e, t) {
      var n = p(t.targetPrototype, e),
        r;
      if (n) {
        if (((r = W(n.value)), !r)) {
          var a = W(n.get),
            i = W(n.set);
          (o("hyperionGlobals").assert(
            !(a && i) || a === i,
            "Getter/Setter of method " + e + " have differnt interceptors",
          ),
            (r = a != null ? a : i));
        }
        n.interceptor = r;
      }
      return n;
    }
    function G(e, t, n, r) {
      var o;
      n === void 0 && (n = !1);
      var a = H(e, t);
      return (o = a == null ? void 0 : a.interceptor) != null
        ? o
        : new (r != null ? r : V)(e, t, n, a);
    }
    function z(e) {
      var t = function () {
        var t;
        switch (arguments.length) {
          case 0:
            t = new e();
            break;
          case 1:
            t = new e(arguments[0]);
            break;
          case 2:
            t = new e(arguments[0], arguments[1]);
            break;
          case 3:
            t = new e(arguments[0], arguments[1], arguments[2]);
            break;
          case 4:
            t = new e(arguments[0], arguments[1], arguments[2], arguments[3]);
            break;
          case 5:
            t = new e(
              arguments[0],
              arguments[1],
              arguments[2],
              arguments[3],
              arguments[4],
            );
            break;
          case 6:
            t = new e(
              arguments[0],
              arguments[1],
              arguments[2],
              arguments[3],
              arguments[4],
              arguments[5],
            );
            break;
          default:
            throw "Unsupported case!";
        }
        return t;
      };
      return (h(e, t), t);
    }
    var j = (function (e) {
      function t(t, n) {
        var r;
        return (
          (r = e.call(this, t, n, !0) || this),
          (r.ctorInterceptor = null),
          r
        );
      }
      babelHelpers.inheritsLoose(t, e);
      var n = t.prototype;
      return (
        (n.setOriginal = function (n) {
          return (
            (this.ctorInterceptor = z(n)),
            e.prototype.setOriginal.call(this, this.ctorInterceptor)
          );
        }),
        t
      );
    })(B);
    function K(e, t) {
      return (t === void 0 && (t = "_annonymousCtor"), U(e, !0, j, t));
    }
    var Q = (function (e) {
      function t(t, n, r) {
        var o;
        return (
          (o = e.call(this, t, n, !0, r) || this),
          (o.ctorInterceptor = null),
          o
        );
      }
      babelHelpers.inheritsLoose(t, e);
      var n = t.prototype;
      return (
        (n.setOriginal = function (n) {
          return (
            (this.ctorInterceptor = z(n)),
            e.prototype.setOriginal.call(this, this.ctorInterceptor)
          );
        }),
        t
      );
    })(V);
    function X(e, t) {
      var n,
        r = H(e, t);
      return (n = r == null ? void 0 : r.interceptor) != null
        ? n
        : new Q(e, t, r);
    }
    function Y(e, t) {
      return t != null && t.useCaseInsensitivePropertyName
        ? ("" + e).toLocaleLowerCase()
        : e;
    }
    var J = (function () {
        function e(e, t) {
          var n;
          if (
            ((this.onBeforInterceptObj = new (
              d || (d = o("hyperionHook"))
            ).Hook()),
            (this.onAfterInterceptObj = new d.Hook()),
            (this.targetPrototype = e),
            (this.parentShadowPrototype = t),
            (this.extension = Object.create(
              (n = t == null ? void 0 : t.extension) != null ? n : null,
            )),
            this.parentShadowPrototype)
          ) {
            for (
              var r = this.targetPrototype,
                a = this.parentShadowPrototype.targetPrototype,
                i = !1;
              r && !i;
            )
              ((i = r === a), (r = Object.getPrototypeOf(r)));
            o("hyperionGlobals").assert(i, "Invalid prototype chain");
          }
        }
        var t = e.prototype;
        return (
          (t.callOnBeforeInterceptObject = function (t) {
            var e, n;
            ((e = this.parentShadowPrototype) == null ||
              e.callOnBeforeInterceptObject(t),
              (n = this.onBeforInterceptObj) == null || n.call(t));
          }),
          (t.callOnAfterInterceptObject = function (t) {
            var e, n;
            ((e = this.parentShadowPrototype) == null ||
              e.callOnAfterInterceptObject(t),
              (n = this.onAfterInterceptObj) == null || n.call(t));
          }),
          (t.interceptObjectItself = function (t) {
            var e;
            if (
              ((e = this.parentShadowPrototype) == null ||
                e.interceptObjectItself(t),
              this.pendingPropertyInterceptors)
            )
              for (var n of this.pendingPropertyInterceptors)
                n.interceptObjectOwnProperties(t);
          }),
          (t.interceptObject = function (t) {
            (this.callOnBeforeInterceptObject(t),
              this.interceptObjectItself(t),
              this.callOnAfterInterceptObject(t));
          }),
          (t.addPendingPropertyInterceptor = function (t) {
            (this.pendingPropertyInterceptors ||
              (this.pendingPropertyInterceptors = []),
              this.pendingPropertyInterceptors.push(t));
          }),
          (t.getVirtualProperty = function (t) {
            var e = this.extension,
              n = Y(t, e);
            return e[n];
          }),
          (t.setVirtualProperty = function (t, n) {
            var e = this.extension,
              r = Y(t, e);
            return ((e[r] = n), n);
          }),
          (t.removeVirtualPropery = function (t, n) {
            var e = this.extension,
              r = Y(t, e);
            e[r] === n ? delete e[r] : "" + t;
          }),
          e
        );
      })(),
      Z = (function () {
        function e() {}
        var t = e.prototype;
        return (
          (t.getExports = function (t) {
            return null;
          }),
          (t.updateExports = function (t, n, r, o) {}),
          e
        );
      })(),
      ee = (function (e) {
        function t(t) {
          var n;
          return (
            (n = e.call(this) || this),
            (n.$WebpackModuleRuntime1 = t),
            n
          );
        }
        babelHelpers.inheritsLoose(t, e);
        var n = t.prototype;
        return (
          (n.getExports = function (t) {
            var e = this,
              n = new RegExp(t + "(?:/index)?[.]js$"),
              r = Object.keys(this.$WebpackModuleRuntime1)
                .filter(function (e) {
                  return n.test(e);
                })
                .map(function (t) {
                  return e.$WebpackModuleRuntime1[t];
                });
            if (o("hyperionGlobals").getFlags().safeWebpackModuleExports) {
              var a, i;
              return (a = (i = r[0]) == null ? void 0 : i.exports) != null
                ? a
                : null;
            }
            return r[0].exports;
          }),
          t
        );
      })(Z),
      te = (function (e) {
        function t(t) {
          var n;
          return ((n = e.call(this) || this), (n.$MetaModuleRuntime1 = t), n);
        }
        babelHelpers.inheritsLoose(t, e);
        var n = t.prototype;
        return (
          (n.updateExports = function (t, n, r, o) {
            r.default != null &&
              (this.$MetaModuleRuntime1.modulesMap[t].defaultExport =
                n.default);
          }),
          t
        );
      })(Z),
      ne = null;
    function re() {
      if (ne) return ne;
      var e = o("hyperionGlobals").getFlags();
      if (e.preferMetaModuleRuntime && typeof n == "function")
        try {
          var t = n("__debug");
          if (typeof t == "object") return ((ne = new te(t)), ne);
        } catch (e) {}
      if (typeof __webpack_module_cache__ == "object")
        return ((ne = new ee(__webpack_module_cache__)), ne);
      if (!e.preferMetaModuleRuntime && typeof n == "function")
        try {
          var r = n("__debug");
          if (typeof r == "object") return ((ne = new te(r)), ne);
        } catch (e) {}
      return ((ne = new Z()), ne);
    }
    function oe(e, t, n, r) {
      var o = t,
        a = re().getExports(e);
      a && a !== o && (o = a);
      for (var i = new J(o, null), l = {}, s = 0; s < n.length; ++s) {
        var u = n[s];
        l[u] = G(u, i);
      }
      return (re().updateExports(e, t, l, r), ae(e, t, l, r), l);
    }
    function ae(e, t, n, r) {
      if (Array.isArray(r)) {
        for (var a = Object.keys(n), i = 0; i < a.length; ++i) {
          var l = a[i];
          t[l] !== n[l].interceptor && r.push(l);
        }
        o("hyperionGlobals").assert(
          r.length === 0,
          r
            .map(function (t) {
              return "could not intercept " + e + "." + t;
            })
            .join("\n"),
        );
      }
    }
    var ie = Object.freeze({
        __proto__: null,
        interceptModuleExports: oe,
        validateModuleInterceptor: ae,
      }),
      le =
        (e = R(o("hyperionGlobals").globalScope)) != null
          ? e
          : new J(o("hyperionGlobals").globalScope, null),
      se = G("setInterval", le),
      ue = G("setTimeout", le),
      ce = X("Promise", le),
      de = Object.freeze({
        __proto__: null,
        IPromiseConstructor: ce,
        setInterval: se,
        setTimeout: ue,
      }),
      me = Object.getPrototypeOf((c || (c = n("Promise"))).resolve()),
      pe = (s = R(me)) != null ? s : L(me, new J(me, null)),
      _e = ce,
      fe = G("then", pe),
      ge = G("catch", pe),
      he = G("finally", pe),
      ye =
        (u = R(c || (c = n("Promise")))) != null
          ? u
          : L(c || (c = n("Promise")), new J(c || (c = n("Promise")), null)),
      Ce = G("all", ye),
      be = G("allSettled", ye),
      ve = G("any", ye),
      Se = G("race", ye),
      Re = G("reject", ye),
      Le = G("resolve", ye),
      Ee = Object.freeze({
        __proto__: null,
        Catch: ge,
        Finally: he,
        IPromisePrototype: pe,
        all: Ce,
        allSettled: be,
        any: ve,
        constructor: _e,
        race: Se,
        reject: Re,
        resolve: Le,
        then: fe,
      }),
      ke = "__attributeInterceptor",
      Ie = (function (e) {
        function t(t, n, r) {
          var o;
          return (
            (o = e.call(this, t) || this),
            (o.getter = new B(t, n)),
            (o.setter = new B(t, r)),
            o.getter.setData(ke, o),
            o.setter.setData(ke, o),
            o
          );
        }
        return (babelHelpers.inheritsLoose(t, e), t);
      })(m),
      Te = (function (e) {
        function t(t, n, r) {
          var o;
          return (
            (o = e.call(this, t) || this),
            o.interceptProperty(n.targetPrototype, !1, r),
            o.status !== 1 && n.addPendingPropertyInterceptor(o),
            o
          );
        }
        babelHelpers.inheritsLoose(t, e);
        var n = t.prototype;
        return (
          (n.interceptProperty = function (t, n, r) {
            if (((r = r != null ? r : p(t, this.name)), n)) {
              var e,
                o = function () {
                  return e;
                },
                a = function (n) {
                  e = n;
                };
              r
                ? r.value &&
                  r.writable &&
                  ((e = r.value),
                  delete r.value,
                  delete r.writable,
                  (r.get = o),
                  (r.set = a),
                  (r.configurable = !0))
                : (r = {
                    get: o,
                    set: a,
                    enumerable: !0,
                    configurable: !0,
                    container: t,
                  });
            }
            if (r)
              if (r.get || r.set) {
                var i = r,
                  l = i.get,
                  s = i.set;
                (l &&
                  (this.getter.setOriginal(l),
                  (r.get = this.getter.interceptor)),
                  s &&
                    (this.setter.setOriginal(s),
                    (r.set = this.setter.interceptor)),
                  _(r.container, this.name, r),
                  (this.status = r.configurable ? 1 : 4));
              } else r.value && ("" + this.name, (this.status = 3));
            else this.status = 2;
          }),
          (n.interceptObjectOwnProperties = function (t) {
            return this.interceptProperty(t, !0);
          }),
          t
        );
      })(Ie);
    function De(e, t) {
      var n = p(t.targetPrototype, e);
      if (n) {
        var r = W(n.get),
          a = W(n.set),
          i = r == null ? void 0 : r.getData(ke),
          l = a == null ? void 0 : a.getData(ke);
        (o("hyperionGlobals").assert(
          !(i && l) || i === l,
          "Getter/Setter of attribute " + e + " have differnt interceptors",
        ),
          (n.interceptor = i != null ? i : l));
      }
      return n;
    }
    function xe(e, t, n) {
      var r,
        o = De(e, t);
      return (r = o == null ? void 0 : o.interceptor) != null
        ? r
        : new n(e, t, o);
    }
    function $e(e, t) {
      return xe(e, t, Te);
    }
    ((l.AttributeInterceptor = Te),
      (l.AttributeInterceptorBase = Ie),
      (l.Catch = ge),
      (l.IGlobalThis = de),
      (l.IPromise = Ee),
      (l.IPromisePrototype = pe),
      (l.IRequire = ie),
      (l.ShadowPrototype = J),
      (l.all = Ce),
      (l.allSettled = be),
      (l.any = ve),
      (l.constructor = _e),
      (l.getFunctionInterceptor = W),
      (l.getObjectExtension = D),
      (l.getOwnShadowPrototypeOf = R),
      (l.getVirtualPropertyValue = x),
      (l.intercept = T),
      (l.interceptAttribute = $e),
      (l.interceptAttributeBase = xe),
      (l.interceptConstructor = K),
      (l.interceptConstructorMethod = X),
      (l.interceptFunction = U),
      (l.interceptMethod = G),
      (l.interceptModuleExports = oe),
      (l.race = Se),
      (l.registerShadowPrototype = L),
      (l.registerShadowPrototypeGetter = S),
      (l.reject = Re),
      (l.resolve = Le),
      (l.setInterval = se),
      (l.setTimeout = ue),
      (l.setVirtualPropertyValue = $),
      (l.then = fe),
      (l.validateModuleInterceptor = ae));
  },
  98,
);
