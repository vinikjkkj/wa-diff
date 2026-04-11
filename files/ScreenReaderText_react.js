__d(
  "ScreenReaderText.react",
  ["WebView.react", "react", "react-compiler-runtime"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = ["text"],
      s,
      u = s || (s = o("react")),
      c = {
        visuallyHidden: {
          clip: "xzpqnlu",
          clipPath: "x1hyvwdk",
          fontSize: "x14bfe9o",
          height: "xjm9jq1",
          overflowX: "x6ikm8r",
          overflowY: "x10wlt62",
          position: "x10l6tqk",
          width: "x1i1rx1s",
          $$css: !0,
        },
      };
    function d(t) {
      var n = o("react-compiler-runtime").c(6),
        a,
        i;
      n[0] !== t
        ? ((i = t.text),
          (a = babelHelpers.objectWithoutPropertiesLoose(t, e)),
          (n[0] = t),
          (n[1] = a),
          (n[2] = i))
        : ((a = n[1]), (i = n[2]));
      var l;
      return (
        n[3] !== a || n[4] !== i
          ? ((l = u.jsx(
              r("WebView.react"),
              babelHelpers.extends({}, a, {
                xstyle: c.visuallyHidden,
                children: i,
              }),
            )),
            (n[3] = a),
            (n[4] = i),
            (n[5] = l))
          : (l = n[5]),
        l
      );
    }
    l.default = d;
  },
  98,
);
