__d(
  "FBWebBloksFullScreenNavbarTrailingButton",
  [
    "WebBloksAbstractButton",
    "WebBloksComponentContext",
    "WebBloksEnvironmentContext",
    "react",
    "react-compiler-runtime",
    "useClickablePropsForWebBloks",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = "#",
      c = "&",
      d = "(",
      m = ")";
    function p(e) {
      var t = o("react-compiler-runtime").c(15),
        n = e.node,
        a = o("WebBloksComponentContext").useWebBloksContext(),
        i = a.objectSet,
        l = o("WebBloksEnvironmentContext").useDataBloksName(),
        p;
      t[0] !== n ? ((p = n.get(u)), (t[0] = n), (t[1] = p)) : (p = t[1]);
      var f = p,
        g = n.get(c),
        h;
      t[2] !== n ? ((h = n.get(m)), (t[2] = n), (t[3] = h)) : (h = t[3]);
      var y = h,
        C;
      t[4] !== n
        ? ((C = n.getExpression(d)), (t[4] = n), (t[5] = C))
        : (C = t[5]);
      var b = r("useClickablePropsForWebBloks")(n, C),
        v = _(i, g),
        S;
      t[6] !== l || t[7] !== n.styleId
        ? ((S = l(n.styleId)), (t[6] = l), (t[7] = n.styleId), (t[8] = S))
        : (S = t[8]);
      var R;
      return (
        t[9] !== f || t[10] !== v || t[11] !== b || t[12] !== S || t[13] !== y
          ? ((R = s.jsx(
              r("WebBloksAbstractButton"),
              babelHelpers.extends(
                { trailing: !0 },
                S,
                { icon: v, title: y, accessibility_label: f },
                b,
              ),
            )),
            (t[9] = f),
            (t[10] = v),
            (t[11] = b),
            (t[12] = S),
            (t[13] = y),
            (t[14] = R))
          : (R = t[14]),
        R
      );
    }
    function _(e, t) {
      switch (t) {
        case "nav-cross":
          return e.getAsset("navCross");
        case "nav-dots-3-horizontal":
          return e.getAsset("nav3DotHorizontal");
        case "nav-info-circle":
          return e.getAsset("navInfoCircle");
        case "nav-settings":
          return e.getAsset("settings");
        default:
          return null;
      }
    }
    l.default = p;
  },
  98,
);
