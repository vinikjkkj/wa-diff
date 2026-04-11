__d(
  "BaseDialogTitle.react",
  [
    "BaseDialogLabelIDProvider",
    "BasePlaceholderContext",
    "react",
    "react-compiler-runtime",
    "react-strict-dom",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = e.useContext;
    function c(e) {
      var t = o("react-compiler-runtime").c(4),
        n = e.asBox,
        a = e.children,
        i = n === void 0 ? !1 : n,
        l = o("BaseDialogLabelIDProvider").useDialogHeaderID(),
        c = u(r("BasePlaceholderContext")),
        d = c === !0 ? null : l,
        m;
      return (
        t[0] !== i || t[1] !== a || t[2] !== d
          ? ((m = i
              ? s.jsx(o("react-strict-dom").html.div, { id: d, children: a })
              : s.jsx(o("react-strict-dom").html.span, { id: d, children: a })),
            (t[0] = i),
            (t[1] = a),
            (t[2] = d),
            (t[3] = m))
          : (m = t[3]),
        m
      );
    }
    l.default = c;
  },
  98,
);
