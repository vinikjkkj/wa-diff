__d(
  "WAWebPDFNContentElement.react",
  ["WAWebDomSanitize", "react", "react-compiler-runtime", "stylex"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = s || (s = o("react"));
    function c(t) {
      var n = o("react-compiler-runtime").c(10),
        a = t.as,
        i = t.content,
        l = t.xstyle,
        s;
      n[0] !== i
        ? ((s = o("WAWebDomSanitize").sanitizeNoticeText(i)),
          (n[0] = i),
          (n[1] = s))
        : (s = n[1]);
      var c = s,
        d;
      n[2] !== l
        ? ((d = (e || (e = r("stylex"))).props(l)), (n[2] = l), (n[3] = d))
        : (d = n[3]);
      var m;
      n[4] !== c ? ((m = { __html: c }), (n[4] = c), (n[5] = m)) : (m = n[5]);
      var p;
      return (
        n[6] !== a || n[7] !== d || n[8] !== m
          ? ((p = u.jsx(
              a,
              babelHelpers.extends({}, d, { dangerouslySetInnerHTML: m }),
            )),
            (n[6] = a),
            (n[7] = d),
            (n[8] = m),
            (n[9] = p))
          : (p = n[9]),
        p
      );
    }
    l.default = c;
  },
  98,
);
