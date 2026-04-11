__d(
  "redux-4.0.4",
  ["symbol-observable-1.2.0"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = n("symbol-observable-1.2.0"),
      l = {},
      s = { exports: l };
    function u() {
      Object.defineProperty(l, "__esModule", { value: !0 });
      function t(e) {
        return e && typeof e == "object" && "default" in e ? e.default : e;
      }
      var n = t(e()),
        r = function () {
          return Math.random().toString(36).substring(7).split("").join(".");
        },
        o = {
          INIT: "@@redux/INIT" + r(),
          REPLACE: "@@redux/REPLACE" + r(),
          PROBE_UNKNOWN_ACTION: function () {
            return "@@redux/PROBE_UNKNOWN_ACTION" + r();
          },
        };
      function a(e) {
        if (typeof e != "object" || e === null) return !1;
        for (var t = e; Object.getPrototypeOf(t) !== null; )
          t = Object.getPrototypeOf(t);
        return Object.getPrototypeOf(e) === t;
      }
      function i(e, t, r) {
        var l;
        if (
          (typeof t == "function" && typeof r == "function") ||
          (typeof r == "function" && typeof arguments[3] == "function")
        )
          throw new Error(
            "It looks like you are passing several store enhancers to createStore(). This is not supported. Instead, compose them together to a single function.",
          );
        if (
          (typeof t == "function" &&
            typeof r == "undefined" &&
            ((r = t), (t = void 0)),
          typeof r != "undefined")
        ) {
          if (typeof r != "function")
            throw new Error("Expected the enhancer to be a function.");
          return r(i)(e, t);
        }
        if (typeof e != "function")
          throw new Error("Expected the reducer to be a function.");
        var s = e,
          u = t,
          c = [],
          d = c,
          m = !1;
        function p() {
          d === c && (d = c.slice());
        }
        function _() {
          if (m)
            throw new Error(
              "You may not call store.getState() while the reducer is executing. The reducer has already received the state as an argument. Pass it down from the top reducer instead of reading it from the store.",
            );
          return u;
        }
        function f(e) {
          if (typeof e != "function")
            throw new Error("Expected the listener to be a function.");
          if (m)
            throw new Error(
              "You may not call store.subscribe() while the reducer is executing. If you would like to be notified after the store has been updated, subscribe from a component and invoke store.getState() in the callback to access the latest state. See https://redux.js.org/api-reference/store#subscribe(listener) for more details.",
            );
          var t = !0;
          return (
            p(),
            d.push(e),
            function () {
              if (t) {
                if (m)
                  throw new Error(
                    "You may not unsubscribe from a store listener while the reducer is executing. See https://redux.js.org/api-reference/store#subscribe(listener) for more details.",
                  );
                ((t = !1), p());
                var n = d.indexOf(e);
                d.splice(n, 1);
              }
            }
          );
        }
        function g(e) {
          if (!a(e))
            throw new Error(
              "Actions must be plain objects. Use custom middleware for async actions.",
            );
          if (typeof e.type == "undefined")
            throw new Error(
              'Actions may not have an undefined "type" property. Have you misspelled a constant?',
            );
          if (m) throw new Error("Reducers may not dispatch actions.");
          try {
            ((m = !0), (u = s(u, e)));
          } finally {
            m = !1;
          }
          for (var t = (c = d), n = 0; n < t.length; n++) {
            var r = t[n];
            r();
          }
          return e;
        }
        function h(e) {
          if (typeof e != "function")
            throw new Error("Expected the nextReducer to be a function.");
          ((s = e), g({ type: o.REPLACE }));
        }
        function y() {
          var e,
            t = f;
          return (
            (e = {
              subscribe: function (n) {
                if (typeof n != "object" || n === null)
                  throw new TypeError("Expected the observer to be an object.");
                function e() {
                  n.next && n.next(_());
                }
                e();
                var r = t(e);
                return { unsubscribe: r };
              },
            }),
            (e[n] = function () {
              return this;
            }),
            e
          );
        }
        return (
          g({ type: o.INIT }),
          (l = { dispatch: g, subscribe: f, getState: _, replaceReducer: h }),
          (l[n] = y),
          l
        );
      }
      function s(e, t) {
        var n = t && t.type,
          r = (n && 'action "' + String(n) + '"') || "an action";
        return (
          "Given " +
          r +
          ', reducer "' +
          e +
          '" returned undefined. To ignore an action, you must explicitly return the previous state. If you want this reducer to hold no value, you can return null instead of undefined.'
        );
      }
      function u(e) {
        Object.keys(e).forEach(function (t) {
          var n = e[t],
            r = n(void 0, { type: o.INIT });
          if (typeof r == "undefined")
            throw new Error(
              'Reducer "' +
                t +
                "\" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined. If you don't want to set a value for this reducer, you can use null instead of undefined.",
            );
          if (
            typeof n(void 0, { type: o.PROBE_UNKNOWN_ACTION() }) == "undefined"
          )
            throw new Error(
              'Reducer "' +
                t +
                '" returned undefined when probed with a random type. ' +
                ("Don't try to handle " +
                  o.INIT +
                  ' or other actions in "redux/*" ') +
                "namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined, but can be null.",
            );
        });
      }
      function c(e) {
        for (var t = Object.keys(e), n = {}, r = 0; r < t.length; r++) {
          var o = t[r];
          typeof e[o] == "function" && (n[o] = e[o]);
        }
        var a = Object.keys(n),
          i;
        try {
          u(n);
        } catch (e) {
          i = e;
        }
        return function (t, r) {
          if ((t === void 0 && (t = {}), i)) throw i;
          for (var e = !1, o = {}, l = 0; l < a.length; l++) {
            var u = a[l],
              c = n[u],
              d = t[u],
              m = c(d, r);
            if (typeof m == "undefined") {
              var p = s(u, r);
              throw new Error(p);
            }
            ((o[u] = m), (e = e || m !== d));
          }
          return e ? o : t;
        };
      }
      function d(e, t) {
        return function () {
          return t(e.apply(this, arguments));
        };
      }
      function m(e, t) {
        if (typeof e == "function") return d(e, t);
        if (typeof e != "object" || e === null)
          throw new Error(
            "bindActionCreators expected an object or a function, instead received " +
              (e === null ? "null" : typeof e) +
              '. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?',
          );
        var n = {};
        for (var r in e) {
          var o = e[r];
          typeof o == "function" && (n[r] = d(o, t));
        }
        return n;
      }
      function p(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      function _(e, t) {
        var n = Object.keys(e);
        return (
          Object.getOwnPropertySymbols &&
            n.push.apply(n, Object.getOwnPropertySymbols(e)),
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
          n
        );
      }
      function f(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = arguments[t] != null ? arguments[t] : {};
          t % 2
            ? _(n, !0).forEach(function (t) {
                p(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : _(n).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(n, t),
                  );
                });
        }
        return e;
      }
      function g() {
        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
          t[n] = arguments[n];
        return t.length === 0
          ? function (e) {
              return e;
            }
          : t.length === 1
            ? t[0]
            : t.reduce(function (e, t) {
                return function () {
                  return e(t.apply(void 0, arguments));
                };
              });
      }
      function h() {
        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
          t[n] = arguments[n];
        return function (e) {
          return function () {
            var n = e.apply(void 0, arguments),
              r = function () {
                throw new Error(
                  "Dispatching while constructing your middleware is not allowed. Other middleware would not be applied to this dispatch.",
                );
              },
              o = {
                getState: n.getState,
                dispatch: function () {
                  return r.apply(void 0, arguments);
                },
              },
              a = t.map(function (e) {
                return e(o);
              });
            return (
              (r = g.apply(void 0, a)(n.dispatch)),
              f({}, n, { dispatch: r })
            );
          };
        };
      }
      ((l.__DO_NOT_USE__ActionTypes = o),
        (l.applyMiddleware = h),
        (l.bindActionCreators = m),
        (l.combineReducers = c),
        (l.compose = g),
        (l.createStore = i));
    }
    var c = !1;
    function d() {
      return (c || ((c = !0), u()), s.exports);
    }
    function m(e) {
      switch (e) {
        case void 0:
          return d();
      }
    }
    a.exports = m;
  },
  null,
);
