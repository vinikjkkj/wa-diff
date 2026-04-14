__d(
  "CometFeedMessageQuote.react",
  ["FDSText.react", "react", "react-compiler-runtime", "react-strict-dom"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = {
        blockquote: {
          borderInlineStartColor: "x12u81az",
          borderInlineStartStyle: "x1t7ytsu",
          borderInlineStartWidth: "x56jcm7",
          marginInlineEnd: "x14z9mp",
          marginInlineStart: "x1lziwak",
          marginBottom: "xieb3on",
          marginTop: "x1gslohp",
          paddingInlineEnd: "xv54qhq",
          paddingInlineStart: "xf7dkkf",
          $$css: !0,
        },
        withLeadingSpace: { marginInlineStart: "xyqm7xq", $$css: !0 },
      };
    function c(e) {
      var t = o("react-compiler-runtime").c(8),
        n = e.children,
        a = e.leadingSpace,
        i = e.xstyle,
        l = a === void 0 ? !0 : a,
        c = l && u.withLeadingSpace,
        d;
      t[0] !== c || t[1] !== i
        ? ((d = [u.blockquote, c, i]), (t[0] = c), (t[1] = i), (t[2] = d))
        : (d = t[2]);
      var m;
      t[3] !== n
        ? ((m = s.jsx(r("FDSText.react"), { type: "body3", children: n })),
          (t[3] = n),
          (t[4] = m))
        : (m = t[4]);
      var p;
      return (
        t[5] !== d || t[6] !== m
          ? ((p = s.jsx(o("react-strict-dom").html.blockquote, {
              style: d,
              children: m,
            })),
            (t[5] = d),
            (t[6] = m),
            (t[7] = p))
          : (p = t[7]),
        p
      );
    }
    l.default = c;
  },
  98,
);
