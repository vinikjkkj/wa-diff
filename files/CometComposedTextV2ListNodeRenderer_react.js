__d(
  "CometComposedTextV2ListNodeRenderer.react",
  [
    "BaseHtmlOrderedList.react",
    "BaseHtmlUnorderedList.react",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = {
        default: {
          marginTop: "xdj266r",
          marginInlineEnd: "x14z9mp",
          marginBottom: "xat24cr",
          marginInlineStart: "x1lziwak",
          $$css: !0,
        },
      };
    function c(e) {
      var t = o("react-compiler-runtime").c(5),
        n = e.children,
        a = e.node,
        i;
      t[0] !== a ? ((i = a.getState()), (t[0] = a), (t[1] = i)) : (i = t[1]);
      var l = i,
        c = l.tag,
        d;
      return (
        t[2] !== n || t[3] !== c
          ? ((d =
              c === "ol"
                ? s.jsx(r("BaseHtmlOrderedList.react"), {
                    children: n,
                    xstyle: u.default,
                  })
                : s.jsx(r("BaseHtmlUnorderedList.react"), {
                    children: n,
                    xstyle: u.default,
                  })),
            (t[2] = n),
            (t[3] = c),
            (t[4] = d))
          : (d = t[4]),
        d
      );
    }
    l.default = c;
  },
  98,
);
