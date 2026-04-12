__d(
  "useWAWebStableArrayModelState",
  ["react", "useStable"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = s.useCallback,
      c = s.useRef,
      d = s.useState,
      m = function (t) {
        return t.id.toString();
      };
    function p() {
      var e = r("useStable")(function () {
          return [];
        }),
        t = d(),
        n = t[0],
        o = t[1],
        a = c(new Map()),
        i = u(function (e) {
          var t = e.reduce(function (e, t) {
              return e + m(t);
            }, ""),
            n = a.current.get(t);
          n == null ? (a.current.set(t, e), o(e)) : o(n);
        }, []),
        l = n != null ? n : e;
      return [l, i];
    }
    l.default = p;
  },
  98,
);
