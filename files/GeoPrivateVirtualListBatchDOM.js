__d(
  "GeoPrivateVirtualListBatchDOM",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = [],
      l = [],
      s = null;
    function u() {
      return e.length || l.length;
    }
    function c() {
      s == null &&
        (s = window.requestAnimationFrame(function () {
          return d();
        }));
    }
    function d(t) {
      t === void 0 && (t = !1);
      var n = null;
      try {
        for (; u(); ) (m(l), m(e));
      } catch (e) {
        n = e;
      }
      if (((s = null), n)) throw (u() && !t && c(), n);
    }
    function m(e) {
      for (; e.length !== 0; ) {
        var t;
        (t = e.shift()) == null || t();
      }
    }
    function p(t, n) {
      (n === void 0 && (n = !1), e.push(t), n || c());
    }
    function _(e, t) {
      (t === void 0 && (t = !1), l.push(e), t || c());
    }
    function f() {
      (s != null && window.cancelAnimationFrame(s), (s = null));
    }
    ((i.cancel = f), (i.measure = p), (i.mutate = _), (i._flush = d));
  },
  66,
);
