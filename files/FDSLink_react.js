__d(
  "FDSLink.react",
  ["CometLink.react", "MetaConfig", "react", "react-compiler-runtime"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = ["ref"],
      s = ["disabled"],
      u,
      c = u || (u = o("react")),
      d = r("MetaConfig")._("338");
    function m(t) {
      var n = o("react-compiler-runtime").c(12),
        a,
        i;
      n[0] !== t
        ? ((i = t.ref),
          (a = babelHelpers.objectWithoutPropertiesLoose(t, e)),
          (n[0] = t),
          (n[1] = a),
          (n[2] = i))
        : ((a = n[1]), (i = n[2]));
      var l, u;
      if (n[3] !== a) {
        var m = a;
        ((l = m.disabled),
          (u = babelHelpers.objectWithoutPropertiesLoose(m, s)),
          (n[3] = a),
          (n[4] = l),
          (n[5] = u));
      } else ((l = n[4]), (u = n[5]));
      var p = u["aria-disabled"] === !0 || l === !0 ? !0 : void 0,
        _ = d ? void 0 : l,
        f = d && l === !0 ? void 0 : a.href,
        g;
      return (
        n[6] !== i || n[7] !== u || n[8] !== p || n[9] !== _ || n[10] !== f
          ? ((g = c.jsx(
              r("CometLink.react"),
              babelHelpers.extends({}, u, {
                "aria-disabled": p,
                disabled: _,
                href: f,
                ref: i,
              }),
            )),
            (n[6] = i),
            (n[7] = u),
            (n[8] = p),
            (n[9] = _),
            (n[10] = f),
            (n[11] = g))
          : (g = n[11]),
        g
      );
    }
    l.default = m;
  },
  98,
);
