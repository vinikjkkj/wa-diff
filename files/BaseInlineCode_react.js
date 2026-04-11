__d(
  "BaseInlineCode.react",
  ["react", "react-compiler-runtime", "react-strict-dom"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = ["children", "variant"],
      s,
      u = s || (s = o("react"));
    function c(t) {
      var n,
        r = o("react-compiler-runtime").c(8),
        a,
        i,
        l;
      r[0] !== t
        ? ((i = t.children),
          (l = t.variant),
          (a = babelHelpers.objectWithoutPropertiesLoose(t, e)),
          (r[0] = t),
          (r[1] = a),
          (r[2] = i),
          (r[3] = l))
        : ((a = r[1]), (i = r[2]), (l = r[3]));
      var s = (n = l.xstyleConfig) == null ? void 0 : n.root,
        c;
      return (
        r[4] !== a || r[5] !== i || r[6] !== s
          ? ((c = u.jsx(
              o("react-strict-dom").html.code,
              babelHelpers.extends({}, a, { style: s, children: i }),
            )),
            (r[4] = a),
            (r[5] = i),
            (r[6] = s),
            (r[7] = c))
          : (c = r[7]),
        c
      );
    }
    l.default = c;
  },
  98,
);
