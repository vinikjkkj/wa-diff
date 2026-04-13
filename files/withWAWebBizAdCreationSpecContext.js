__d(
  "withWAWebBizAdCreationSpecContext",
  ["WAWebBizAdCreationSpecContext", "react", "react-compiler-runtime"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = ["ref"],
      s,
      u = s || (s = o("react")),
      c = s.useContext;
    function d(t, n) {
      var a = u.memo(t);
      function i(t) {
        var i = o("react-compiler-runtime").c(9),
          l,
          s;
        i[0] !== t
          ? ((s = t.ref),
            (l = babelHelpers.objectWithoutPropertiesLoose(t, e)),
            (i[0] = t),
            (i[1] = l),
            (i[2] = s))
          : ((l = i[1]), (s = i[2]));
        var d = c(r("WAWebBizAdCreationSpecContext")),
          m;
        i[3] !== d.currentValue
          ? ((m = n(d.currentValue)), (i[3] = d.currentValue), (i[4] = m))
          : (m = i[4]);
        var p = m,
          _;
        return (
          i[5] !== p || i[6] !== l || i[7] !== s
            ? ((_ = u.jsx(a, babelHelpers.extends({}, l, p, { ref: s }))),
              (i[5] = p),
              (i[6] = l),
              (i[7] = s),
              (i[8] = _))
            : (_ = i[8]),
          _
        );
      }
      return i;
    }
    l.default = d;
  },
  98,
);
