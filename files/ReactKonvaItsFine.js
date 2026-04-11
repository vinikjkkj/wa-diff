__d(
  "ReactKonvaItsFine",
  ["react"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e, l;
    Object.defineProperties(
      i,
      ((e = { __esModule: { value: !0 } }),
      (e[typeof Symbol == "function" ? Symbol.toStringTag : "@@toStringTag"] = {
        value: "Module",
      }),
      e),
    );
    var s = l || (l = n("react"));
    function u(e) {
      var t;
      if (e && e.__esModule) return e;
      var n = Object.create(
        null,
        ((t = {}),
        (t[typeof Symbol == "function" ? Symbol.toStringTag : "@@toStringTag"] =
          { value: "Module" }),
        t),
      );
      if (e) {
        var r = function (r) {
          if (r !== "default") {
            var t = Object.getOwnPropertyDescriptor(e, r);
            Object.defineProperty(
              n,
              r,
              t.get
                ? t
                : {
                    enumerable: !0,
                    get: function () {
                      return e[r];
                    },
                  },
            );
          }
        };
        for (var o in e) r(o);
      }
      return ((n.default = e), Object.freeze(n));
    }
    var c = u(s),
      d = Object.defineProperty,
      m = Object.defineProperties,
      p = Object.getOwnPropertyDescriptors,
      _ = Object.getOwnPropertySymbols,
      f = Object.prototype.hasOwnProperty,
      g = Object.prototype.propertyIsEnumerable,
      h = function (t, n, r) {
        return n in t
          ? d(t, n, {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: r,
            })
          : (t[n] = r);
      },
      y = function (t, n) {
        for (var e in n || (n = {})) f.call(n, e) && h(t, e, n[e]);
        if (_) for (var e of _(n)) g.call(n, e) && h(t, e, n[e]);
        return t;
      },
      C = function (t, n) {
        return m(t, p(n));
      },
      b,
      v,
      S =
        typeof window != "undefined" &&
        (((b = window.document) != null && b.createElement) ||
          ((v = window.navigator) == null ? void 0 : v.product) ===
            "ReactNative")
          ? c.useLayoutEffect
          : c.useEffect;
    function R(e, t, n) {
      if (e) {
        if (n(e) === !0) return e;
        for (var r = t ? e.return : e.child; r; ) {
          var o = R(r, t, n);
          if (o) return o;
          r = t ? null : r.sibling;
        }
      }
    }
    function L(e) {
      try {
        return Object.defineProperties(e, {
          _currentRenderer: {
            get: function () {
              return null;
            },
            set: function () {},
          },
          _currentRenderer2: {
            get: function () {
              return null;
            },
            set: function () {},
          },
        });
      } catch (t) {
        return e;
      }
    }
    var E = console.error;
    console.error = function () {
      var e = Array.prototype.slice.call(arguments).join("");
      if (e != null && e.startsWith("Warning:") && e.includes("useContext")) {
        console.error = E;
        return;
      }
      return E.apply(this, arguments);
    };
    var k = L(c.createContext(null)),
      I = (function (e) {
        function t() {
          return e.apply(this, arguments) || this;
        }
        babelHelpers.inheritsLoose(t, e);
        var n = t.prototype;
        return (
          (n.render = function () {
            return c.createElement(
              k.Provider,
              { value: this.$FiberProvider1 },
              this.props.children,
            );
          }),
          t
        );
      })(c.Component);
    function T() {
      var e = c.useContext(k);
      if (e === null)
        throw new Error(
          "its-fine: useFiber must be called within a <FiberProvider />!",
        );
      var t = c.useId(),
        n = c.useMemo(
          function () {
            for (var n of [e, e == null ? void 0 : e.alternate])
              if (n) {
                var r = R(n, !1, function (e) {
                  for (var n = e.memoizedState; n; ) {
                    if (n.memoizedState === t) return !0;
                    n = n.next;
                  }
                });
                if (r) return r;
              }
          },
          [e, t],
        );
      return n;
    }
    function D() {
      var e = T(),
        t = c.useMemo(
          function () {
            return R(e, !0, function (e) {
              var t;
              return (
                ((t = e.stateNode) == null ? void 0 : t.containerInfo) != null
              );
            });
          },
          [e],
        );
      return t == null ? void 0 : t.stateNode.containerInfo;
    }
    function x(e) {
      var t = T(),
        n = c.useRef();
      return (
        S(
          function () {
            var r;
            n.current =
              (r = R(t, !1, function (t) {
                return (
                  typeof t.type == "string" && (e === void 0 || t.type === e)
                );
              })) == null
                ? void 0
                : r.stateNode;
          },
          [t],
        ),
        n
      );
    }
    function $(e) {
      var t = T(),
        n = c.useRef();
      return (
        S(
          function () {
            var r;
            n.current =
              (r = R(t, !0, function (t) {
                return (
                  typeof t.type == "string" && (e === void 0 || t.type === e)
                );
              })) == null
                ? void 0
                : r.stateNode;
          },
          [t],
        ),
        n
      );
    }
    function P() {
      var e = T(),
        t = c.useState(function () {
          return new Map();
        }),
        n = t[0];
      n.clear();
      for (var r = e; r; ) {
        if (r.type && typeof r.type == "object") {
          var o = r.type._context === void 0 && r.type.Provider === r.type,
            a = o ? r.type : r.type._context;
          a && a !== k && !n.has(a) && n.set(a, c.useContext(L(a)));
        }
        r = r.return;
      }
      return n;
    }
    function N() {
      var e = P();
      return c.useMemo(
        function () {
          return Array.from(e.keys()).reduce(
            function (t, n) {
              return function (r) {
                return c.createElement(
                  t,
                  null,
                  c.createElement(n.Provider, C(y({}, r), { value: e.get(n) })),
                );
              };
            },
            function (e) {
              return c.createElement(I, y({}, e));
            },
          );
        },
        [e],
      );
    }
    ((i.FiberProvider = I),
      (i.traverseFiber = R),
      (i.useContainer = D),
      (i.useContextBridge = N),
      (i.useContextMap = P),
      (i.useFiber = T),
      (i.useNearestChild = x),
      (i.useNearestParent = $));
  },
  null,
);
