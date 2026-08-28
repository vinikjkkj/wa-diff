__d(
  "adsCreateSelector",
  [
    "AdsSelectorDebug",
    "AdsSelectorInstrumentation",
    "AdsSelectorNameUtils",
    "AdsSelectorUtils",
    "LRUKeyedCache",
    "adsCacheSelector",
    "adsMemoizeSelectorGetStores",
    "adsSelectorDisposal",
    "getErrorSafe",
    "makeStringifier",
    "shallowArrayEqual",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e, s, u;
    function c(e, t, n) {
      return e && n(e[0], t) ? e : [t];
    }
    function d(e, t, n) {}
    function m(e, t, n, r, o) {}
    function p(e, t, n) {}
    function _(e, t) {}
    function f(e, t) {}
    function g(e) {}
    function h(e) {}
    function y(e, t, n, o) {
      var a;
      return t
        ? function (n) {
            return (a || (a = e(n)), a);
          }
        : r("adsMemoizeSelectorGetStores")(n, e, o);
    }
    function C(e, t) {
      return (
        e === t ||
        (Array.isArray(e) && Array.isArray(t) && r("shallowArrayEqual")(e, t))
      );
    }
    function b(e) {
      return e
        ? function (t, n) {
            return t === n || e(t, n);
          }
        : C;
    }
    function v(e) {
      return typeof e.getStores == "function" ? e : null;
    }
    function S(t, n, a, i, l, s, u, c) {
      var d = { cacheHit: !0 },
        m = t.bind(void 0, d);
      (o("AdsSelectorNameUtils").nameSelector(m, s + "-instrumentedSelectFn"),
        o("AdsSelectorNameUtils").nameSelector(t, s + "-selectFn"));
      var p = r("adsCacheSelector")(m, a, i, c, s),
        _ = Object.assign(
          function (t) {
            d.cacheHit = !0;
            var n = (
                e || (e = o("AdsSelectorInstrumentation"))
              ).onSelectorCall(),
              r = p(t);
            return (n && n({ name: s, cacheHit: d.cacheHit }), r);
          },
          {
            getStores: y(a, i, l, s),
            equal: u,
            isGetStoresStatic: i,
            isGetStoresPure: l,
            rawSelectFn: n,
          },
        );
      return (
        o("adsSelectorDisposal").registerAdsSelectorDisposer(_, p.dispose),
        o("AdsSelectorNameUtils").nameSelector(_, s),
        _
      );
    }
    function R(e, t, n, r, a) {
      var i = null;
      return S(
        function (n, o) {
          n.cacheHit = !1;
          var a = t.apply(
            void 0,
            e.map(function (e) {
              return e(o);
            }),
          );
          return ((i = c(i, a, r)), i[0]);
        },
        t,
        function (n) {
          return (s || (s = o("AdsSelectorUtils"))).getStores(
            [].concat(e, [t]),
            n,
          );
        },
        e.every(function (e) {
          return e.isGetStoresStatic;
        }) && t.isGetStoresStatic,
        e.every(function (e) {
          return e.isGetStoresPure && t.isGetStoresPure;
        }),
        n,
        r,
        a,
      );
    }
    function L(e, t, n, r) {
      e.set(t, { lastInputsForProps: n, lastResultForProps: r });
    }
    var E = 1e3;
    function k(e, t, n, a, i) {
      var l = new (r("LRUKeyedCache"))(
          i != null
            ? i
            : function (e) {
                return e;
              },
          E,
        ),
        u = null,
        y = null,
        C = function (o, i) {
          var n = [];
          n.length = e.length;
          for (var s = !1, C = 0; C < e.length; C++)
            ((n[C] = e[C](i)), (!y || y[C] !== n[C]) && (s = !0));
          var b = l.get(i);
          if (b == null);
          else {
            var v = b.lastInputsForProps,
              S = b.lastResultForProps;
            if (r("shallowArrayEqual")(v, n)) return ((y = v), (u = [S]), u[0]);
          }
          if (b == null && !s && y != null && u != null) {
            var R = y,
              E = u;
            return (L(l, i, R, E[0]), E[0]);
          }
          o.cacheHit = !1;
          try {
            var k = t.apply(void 0, n);
            (b != null && (u = [b.lastResultForProps]), (u = c(u, k, a)));
            var I = u;
            return ((y = n), L(l, i, y, u[0]), I[0]);
          } catch (e) {
            throw (r("getErrorSafe")(e), e);
          }
        };
      return S(
        C,
        t,
        function (t) {
          return (s || (s = o("AdsSelectorUtils"))).getStores(e, t);
        },
        e.every(function (e) {
          return e != null && e.isGetStoresStatic;
        }),
        e.every(function (e) {
          return e != null && e.isGetStoresPure;
        }),
        n,
        a,
        i,
      );
    }
    function I(e, t, n, r) {
      var o = null,
        a = [];
      return S(
        function (t) {
          t.cacheHit = !1;
          var r = e();
          return ((o = c(o, r, n)), o[0]);
        },
        e,
        function () {
          return a;
        },
        !0,
        !0,
        t,
        n,
        r,
      );
    }
    function T(e, t, n) {
      var a, i;
      n === void 0 && (n = {});
      var l =
          (a = (i = n.name) != null ? i : t.name) != null
            ? a
            : "unnamedSelector",
        s = n.hashProps,
        u = s != null ? r("makeStringifier")(s) : void 0,
        c = b(n.equal),
        d = v(t),
        m;
      return (
        d
          ? (m = R(e, d, l, c, u))
          : e.length
            ? (m = k(e, t, l, c, u))
            : (m = I(t, l, c, u)),
        o("AdsSelectorNameUtils").nameSelector(m, l + "-wrappedSelector"),
        m
      );
    }
    l.default = T;
  },
  98,
);
