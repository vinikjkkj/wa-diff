__d(
  "BaseGridRow.react",
  [
    "BaseGridFocusTable.react",
    "react",
    "react-compiler-runtime",
    "react-strict-dom",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react"));
    function u(e) {
      var t = o("react-compiler-runtime").c(3),
        n = e.children,
        r = e.xstyle,
        a;
      return (
        t[0] !== n || t[1] !== r
          ? ((a = s.jsx(o("BaseGridFocusTable.react").BaseGridFocusRow, {
              children: s.jsx(o("react-strict-dom").html.div, {
                role: "row",
                style: r,
                children: n,
              }),
            })),
            (t[0] = n),
            (t[1] = r),
            (t[2] = a))
          : (a = t[2]),
        a
      );
    }
    l.default = u;
  },
  98,
);
