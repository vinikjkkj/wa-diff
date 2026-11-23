__d(
  "MAIBAMessageTrailingSlotContext",
  ["react"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = e,
      c = u.useContext,
      d = u.useSyncExternalStore;
    function m() {
      var e = null,
        t = new Set();
      return {
        attach: function (r) {
          r !== e &&
            ((e = r),
            t.forEach(function (e) {
              return e();
            }));
        },
        getElement: function () {
          return e;
        },
        subscribe: function (n) {
          return (
            t.add(n),
            function () {
              t.delete(n);
            }
          );
        },
      };
    }
    var p = s.createContext(null);
    function _() {
      return function () {};
    }
    function f() {
      return null;
    }
    function g() {
      var e,
        t,
        n = c(p);
      return d(
        (e = n == null ? void 0 : n.subscribe) != null ? e : _,
        (t = n == null ? void 0 : n.getElement) != null ? t : f,
      );
    }
    ((l.createMAIBAMessageTrailingSlotStore = m),
      (l.MAIBAMessageTrailingSlotContext = p),
      (l.useMAIBAMessageTrailingSlot = g));
  },
  98,
);
