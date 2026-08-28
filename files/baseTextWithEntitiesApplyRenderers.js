__d(
  "baseTextWithEntitiesApplyRenderers",
  ["react"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = s.Fragment;
    function c(e, t, n, r, o, a, i, l, c, d) {
      var m = e.__typename,
        p = Object.prototype.hasOwnProperty.call(l, m) ? l[m].concat(c) : c;
      return s.jsx(
        u,
        {
          children:
            p && p.length > 0
              ? p.reduce(function (r, a) {
                  return a(r, e, n, o, t, d);
                }, a)
              : r,
        },
        i,
      );
    }
    ((c.displayName = c.name + " [from " + i.id + "]"), (l.default = c));
  },
  98,
);
