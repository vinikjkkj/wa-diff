__d(
  "CometNUXManagerContext",
  ["emptyFunction", "react"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = new Set(),
      c = new Map(),
      d = s.createContext({
        registerNUX: function (t, n, o) {
          var e;
          return (
            o === void 0 && (o = !1),
            u.has(t) || (!o && c.has(t))
              ? r("emptyFunction")
              : (c.has(t) || c.set(t, []),
                (e = c.get(t)) == null || e.push(n),
                n(!0),
                function () {
                  var e, r, o;
                  (c.set(
                    t,
                    (e =
                      (r = c.get(t)) == null
                        ? void 0
                        : r.filter(function (e) {
                            return e !== n;
                          })) != null
                      ? e
                      : [],
                  ),
                    ((o = c.get(t)) == null ? void 0 : o.length) === 0 &&
                      c.delete(t));
                })
          );
        },
        removeNUX: function (t) {
          u.add(t);
          var e = c.get(t);
          e != null &&
            e.forEach(function (e) {
              return e(!1);
            });
        },
      });
    l.default = d;
  },
  98,
);
