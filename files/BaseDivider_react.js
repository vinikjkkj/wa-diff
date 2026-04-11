__d(
  "BaseDivider.react",
  ["react", "react-compiler-runtime", "react-strict-dom"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = {
        divider: {
          backgroundColor: "x14nfmen",
          boxSizing: "x9f619",
          height: "xjm9jq1",
          $$css: !0,
        },
        reset: {
          backgroundColor: "xjbqb8w",
          borderTopWidth: "x972fbf",
          borderInlineEndWidth: "x10w94by",
          borderBottomWidth: "x1qhh985",
          borderInlineStartWidth: "x14e42zd",
          marginTop: "xdj266r",
          marginInlineEnd: "x14z9mp",
          marginBottom: "xat24cr",
          marginInlineStart: "x1lziwak",
          $$css: !0,
        },
      };
    function c(e) {
      var t,
        n = o("react-compiler-runtime").c(6),
        r = e.ariaHidden,
        a = e.variant,
        i = e.xstyle,
        l = a == null || (t = a.xstyleConfig) == null ? void 0 : t.divider,
        c;
      n[0] !== l || n[1] !== i
        ? ((c = [u.reset, u.divider, i, l]), (n[0] = l), (n[1] = i), (n[2] = c))
        : (c = n[2]);
      var d;
      return (
        n[3] !== r || n[4] !== c
          ? ((d = s.jsx(o("react-strict-dom").html.hr, {
              "aria-hidden": r,
              style: c,
            })),
            (n[3] = r),
            (n[4] = c),
            (n[5] = d))
          : (d = n[5]),
        d
      );
    }
    l.default = c;
  },
  98,
);
