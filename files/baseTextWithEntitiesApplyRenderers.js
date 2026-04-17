__d(
  "baseTextWithEntitiesApplyRenderers",
  ["react"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = s.Fragment;
    function c(e, t, n, r, o, a, i, l, c) {
      var d = e.__typename,
        m = Object.prototype.hasOwnProperty.call(l, d) ? l[d].concat(c) : c;
      return s.jsx(
        u,
        {
          children:
            m && m.length > 0
              ? m.reduce(function (r, a) {
                  return a(r, e, n, o, t);
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
