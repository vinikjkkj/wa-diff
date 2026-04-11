__d(
  "BaseHScrollPeek.react",
  ["react", "react-compiler-runtime"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react"));
    function u(e) {
      var t = o("react-compiler-runtime").c(4),
        n = e.maxContentWindowWidth,
        r = e.padding,
        a = e.width,
        i;
      return (
        t[0] !== n || t[1] !== r || t[2] !== a
          ? ((i =
              n != null && r == null
                ? s.jsx("span", {
                    style: {
                      flexShrink: 0,
                      minWidth: a,
                      width: "calc((100% - " + n + "px) / 2)",
                    },
                  })
                : s.jsx("span", { style: { minWidth: r != null ? r : a } })),
            (t[0] = n),
            (t[1] = r),
            (t[2] = a),
            (t[3] = i))
          : (i = t[3]),
        i
      );
    }
    l.default = u;
  },
  98,
);
