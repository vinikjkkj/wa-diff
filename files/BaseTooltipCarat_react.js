__d(
  "BaseTooltipCarat.react",
  [
    "BaseTooltipAboveCarat.svg.react",
    "BaseTooltipBelowCarat.svg.react",
    "BaseTooltipEndCarat.svg.react",
    "BaseTooltipStartCarat.svg.react",
    "react",
    "react-compiler-runtime",
    "react-strict-dom",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = { caratContainer: { display: "x78zum5", $$css: !0 } },
      c = function (t) {
        switch (t) {
          case "below":
            return r("BaseTooltipBelowCarat.svg.react");
          case "above":
            return r("BaseTooltipAboveCarat.svg.react");
          case "start":
            return r("BaseTooltipStartCarat.svg.react");
          case "end":
            return r("BaseTooltipEndCarat.svg.react");
          default:
            return r("BaseTooltipBelowCarat.svg.react");
        }
      };
    function d(e) {
      var t = o("react-compiler-runtime").c(11),
        n = e.fillXStyle,
        r = e.position,
        a = e.shouldFadeIn,
        i = e.transitionInXStyle,
        l = e.transitionOutXStyle,
        d = a === void 0 ? !1 : a,
        m;
      t[0] !== r ? ((m = c(r)), (t[0] = r), (t[1] = m)) : (m = t[1]);
      var p = m,
        _ = d && i,
        f;
      t[2] !== _ || t[3] !== l
        ? ((f = [u.caratContainer, l, _]), (t[2] = _), (t[3] = l), (t[4] = f))
        : (f = t[4]);
      var g;
      t[5] !== p || t[6] !== n
        ? ((g = s.jsx(p, { fillXStyle: n })),
          (t[5] = p),
          (t[6] = n),
          (t[7] = g))
        : (g = t[7]);
      var h;
      return (
        t[8] !== f || t[9] !== g
          ? ((h = s.jsx(o("react-strict-dom").html.div, {
              style: f,
              children: g,
            })),
            (t[8] = f),
            (t[9] = g),
            (t[10] = h))
          : (h = t[10]),
        h
      );
    }
    l.default = d;
  },
  98,
);
