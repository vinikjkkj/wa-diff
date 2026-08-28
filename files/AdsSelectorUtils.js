__d(
  "AdsSelectorUtils",
  ["Promise", "performanceNow"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = new Set(),
      c = 0;
    function d(e, t) {
      c += 1;
      var n = [],
        o = new Set();
      try {
        var a = u.size > 0,
          i = a && c === 1,
          l = i ? (s || (s = r("performanceNow")))() : null;
        for (var d of e) {
          var m = d.getStores(t);
          if (m)
            for (var p of m) p != null && !o.has(p) && (o.add(p), n.push(p));
        }
        if (a) {
          var _ = l != null ? (s || (s = r("performanceNow")))() - l : 0;
          for (var f of u) f(_);
        }
      } finally {
        c -= 1;
      }
      return n;
    }
    function m(e, t) {
      return d(e, t).map(function (e) {
        return e.getDispatchToken();
      });
    }
    function p(e, t) {
      return d(e, t).some(function (e) {
        return e.hasChanged();
      });
    }
    function _(t, r, o) {
      return new (e || (e = n("Promise")))(function (e, n) {
        var a = t.getStores(o).map(function (e) {
            return e.addListener(s);
          }),
          i = {
            loading: function () {},
            empty: function () {},
            loaded: function (n) {
              (l(), e(n));
            },
            error: function (t) {
              (l(), n(t));
            },
          };
        s();
        function l() {
          a.forEach(function (e) {
            return e.remove();
          });
        }
        function s() {
          t(r).match(i);
        }
      });
    }
    function f(t, r, o) {
      return new (e || (e = n("Promise")))(function (e, n) {
        var a = t.getStores(o).map(function (e) {
            return e.addListener(s);
          }),
          i = {
            loading: function () {},
            empty: function () {},
            loaded: function (n) {
              (l(), e(n));
            },
            error: function (t) {
              (l(), n(t));
            },
          };
        s();
        function l() {
          a.forEach(function (e) {
            return e.remove();
          });
        }
        function s() {
          t(r)(r).match(i);
        }
      });
    }
    ((l.getStores = d),
      (l.getStoreDispatchTokens = m),
      (l.hasAnyStoreChanged = p),
      (l.loadObjectSelectorToPromise = _),
      (l.loadFunctionObjectSelectorToPromise = f));
  },
  98,
);
