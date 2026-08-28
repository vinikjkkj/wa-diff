__d(
  "AdsDMLQueryHandler_DerivedDataBase",
  [
    "invariant",
    "FBLogger",
    "LoadObject",
    "getErrorSafe",
    "nullthrows",
    "promiseDone",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e = function e() {
      ++e.$1 > 1 &&
        r("FBLogger")("dml").mustfix(
          "TDerivedBase & TDerived in DML must be a singleton",
        );
    };
    e.$1 = 0;
    var u = {};
    function c(e) {
      if (e.hasError()) throw e.getError();
      if (e.isLoadingOrEmpty()) throw u;
      return e.getValueEnforcing();
    }
    function d(e, t, n, o) {
      e == null || e.addStores(n);
      var a;
      if (o instanceof r("LoadObject")) {
        var i = c(o);
        a = i;
      } else a = o;
      return t ? t(a) : a;
    }
    function m(e, t) {
      return function (n, r) {
        var o = e(n),
          a = t(n, r);
        return d(this.handler, r, o, a);
      };
    }
    var p = (function () {
        function e() {
          this.$1 = null;
        }
        var t = e.prototype;
        return (
          (t.push = function (t) {
            (this.$1 == null || s(0, 54994), (this.$1 = t));
          }),
          (t.pop = function (t) {
            (this.top() === t || s(0, 54993), (this.$1 = null));
          }),
          (t.top = function () {
            var e = this.$1;
            return r("nullthrows")(
              e,
              "This code should be used inside of DML.Derived",
            );
          }),
          e
        );
      })(),
      _ = new p();
    function f(e, t) {
      return function (n, r) {
        var o = e(n),
          a = t(n, r);
        return d(_.top(), r, o, a);
      };
    }
    function g(e, t) {
      return function (n) {
        var r = e(),
          o = t(n);
        return d(_.top(), n, r, o);
      };
    }
    function h(e, t) {
      return function (n) {
        var r = e(),
          o = t(n);
        return d(this.handler, n, r, o);
      };
    }
    function y(e) {
      return m(function (t) {
        return e.getStores(t);
      }, e);
    }
    function C(e) {
      return h(function () {
        return e.getStores();
      }, e);
    }
    function b(e) {
      var t = null,
        n = null;
      return function (o, a) {
        if (n != null) return n.call(this, o, a);
        throw (
          t ||
            ((t = e()),
            r("promiseDone")(t, function (e) {
              n = y(e);
            })),
          u
        );
      };
    }
    function v(e) {
      var t = {},
        n = new Proxy(t, {
          get: function (t, n, r) {
            return (t[n] = null);
          },
        });
      try {
        e(n);
      } catch (e) {
        var o = r("getErrorSafe")(e);
        r("FBLogger")("dml").warn(
          "[DML] error %s when getting fragment",
          o.message,
        );
      }
      return t;
    }
    function S(e) {
      return function (t, n) {
        var r;
        if (t == null) return null;
        (r = this.handler) == null || r.addStores([e]);
        var o = v(n),
          a = e.getByFields(t, Object.keys(o).length === 0 ? null : o),
          i = c(a);
        return n(i);
      };
    }
    function R(e) {
      return function (t, n) {
        var r;
        if (t == null) return null;
        (r = this.handler) == null || r.addStores([e]);
        for (
          var o = v(n),
            a = e.getAllByFields(t, o),
            i = Object.create(null),
            l = 0;
          l < t.length;
          l++
        ) {
          var s = t[l],
            u = a.get(s);
          i[s] = n(c(u));
        }
        return i;
      };
    }
    ((l.TDerivedBase = e),
      (l.DATA_IS_STILL_LOADING_EXCEPTION = u),
      (l.loader = m),
      (l.currentStoreHandlers = _),
      (l.modularLoader = f),
      (l.modularLoaderWithoutArgs = g),
      (l.selectorLoader = y),
      (l.selectorLoaderWithoutArgs = C),
      (l.deferredSelectorLoader = b),
      (l.storeByIdLoader = S),
      (l.storeByAllIdsLoader = R));
  },
  98,
);
