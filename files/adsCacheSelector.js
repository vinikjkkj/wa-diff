__d(
  "adsCacheSelector",
  ["AdsSelectorDebug", "LRUKeyedCache", "emptyFunction"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = !Map.__isES5 || !Object.isExtensible;
    function u(e) {
      return e != null && (typeof e == "object" || typeof e == "function");
    }
    var c = function (t, n, o, a, i) {
      var e = new (r("LRUKeyedCache"))(
          a != null
            ? a
            : function (e) {
                return e;
              },
        ),
        l = new Set(),
        c = !1,
        m = function () {
          return e.clear();
        },
        p = [],
        _ = !1,
        f = function (t) {
          p.push(t.addListener(m));
        },
        g = new Set(),
        h = t.length > 0;
      o &&
        (n().forEach(function (e) {
          return g.add(e);
        }),
        g.forEach(f));
      var y = o
          ? r("emptyFunction")
          : function (e) {
              n(e).forEach(function (e) {
                g.has(e) || (g.add(e), f(e));
              });
            },
        C = function (r) {
          _ && ((_ = !1), g.forEach(f));
          var n = h ? r : null;
          if (h && !s && u(r) && !Object.isExtensible(r)) return t(n);
          var o = e.get(n);
          if (o != null && !d()) return o;
          y(r);
          var a = t(n);
          return d() && o != null ? o : (e.set(n, a), a);
        },
        b = function () {
          for (var t of p) t.remove();
          ((p.length = 0), e.clear(), (_ = !0));
        },
        v = C;
      return ((v.dispose = b), v);
    };
    function d() {
      return !1;
    }
    var m = c;
    l.default = m;
  },
  98,
);
