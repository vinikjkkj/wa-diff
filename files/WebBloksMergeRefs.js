__d(
  "WebBloksMergeRefs",
  ["WebBloksErrors", "react"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = (e || (e = o("react"))).useMemo;
    function u() {
      for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
        t[n] = arguments[n];
      return s(function () {
        return c.apply(void 0, t);
      }, [].concat(t));
    }
    function c() {
      for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
        t[n] = arguments[n];
      return function (e) {
        t.forEach(function (t) {
          if (t != null) {
            if (typeof t == "function") {
              t(e);
              return;
            }
            if (typeof t == "object") {
              t.current = e;
              return;
            }
          }
        });
      };
    }
    l.default = u;
  },
  98,
);
