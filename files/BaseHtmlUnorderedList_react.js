__d(
  "BaseHtmlUnorderedList.react",
  ["BaseHtmlList.react", "react", "react-compiler-runtime", "react-strict-dom"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react"));
    function u(e) {
      var t = o("react-compiler-runtime").c(4),
        n = e.children,
        a = e.type,
        i = e.xstyle,
        l = a === void 0 ? "disc" : a,
        u;
      return (
        t[0] !== n || t[1] !== l || t[2] !== i
          ? ((u = s.jsx(r("BaseHtmlList.react"), {
              Tag: o("react-strict-dom").html.ul,
              type: l,
              xstyle: i,
              children: n,
            })),
            (t[0] = n),
            (t[1] = l),
            (t[2] = i),
            (t[3] = u))
          : (u = t[3]),
        u
      );
    }
    l.default = u;
  },
  98,
);
