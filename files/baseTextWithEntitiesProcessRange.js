__d(
  "baseTextWithEntitiesProcessRange",
  [
    "UnicodeUtils",
    "baseTextWithEntitiesApplyRenderers",
    "baseTextWithEntitiesApplyTextTransforms",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = e || (e = o("react")),
      c = u.Fragment;
    function d(e, t, n, a, i, l, d, m, p, _, f, g) {
      var h = (s || (s = o("UnicodeUtils"))).substr(e, t, n - t),
        y = p.length;
      h.length > 0 &&
        m.push(
          u.jsx(
            c,
            { children: r("baseTextWithEntitiesApplyTextTransforms")(h, _) },
            "c" + t + "_" + y + "_" + g,
          ),
        );
      var C = p.pop(),
        b = h.trim().length > 0 && h.trim() === e.trim();
      return (
        p[p.length - 1].subElements.push(
          r("baseTextWithEntitiesApplyRenderers")(
            a,
            i,
            l,
            m,
            h,
            m,
            t + "_" + y + "_" + g,
            d,
            f,
            b,
          ),
        ),
        C
      );
    }
    l.default = d;
  },
  98,
);
