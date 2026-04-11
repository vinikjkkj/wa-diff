__d(
  "BaseLinkV2.react",
  ["BaseLinkInternal.react", "react", "react-compiler-runtime"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = ["ref", "children", "variant"],
      s,
      u = s || (s = o("react"));
    function c(t) {
      var n,
        a = o("react-compiler-runtime").c(10),
        i,
        l,
        s,
        c;
      a[0] !== t
        ? ((s = t.ref),
          (i = t.children),
          (c = t.variant),
          (l = babelHelpers.objectWithoutPropertiesLoose(t, e)),
          (a[0] = t),
          (a[1] = i),
          (a[2] = l),
          (a[3] = s),
          (a[4] = c))
        : ((i = a[1]), (l = a[2]), (s = a[3]), (c = a[4]));
      var d = (n = c.xstyleConfig) == null ? void 0 : n.link,
        m;
      return (
        a[5] !== i || a[6] !== l || a[7] !== s || a[8] !== d
          ? ((m = u.jsx(
              r("BaseLinkInternal.react"),
              babelHelpers.extends({}, l, { ref: s, style: d, children: i }),
            )),
            (a[5] = i),
            (a[6] = l),
            (a[7] = s),
            (a[8] = d),
            (a[9] = m))
          : (m = a[9]),
        m
      );
    }
    l.default = c;
  },
  98,
);
