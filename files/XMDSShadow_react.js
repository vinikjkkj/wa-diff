__d(
  "XMDSShadow.react",
  ["react", "react-compiler-runtime", "stylex"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = s || (s = o("react")),
      c = {
        shadow: {
          borderTopWidth: "x972fbf",
          borderInlineEndWidth: "x10w94by",
          borderBottomWidth: "x1qhh985",
          borderInlineStartWidth: "x14e42zd",
          boxShadow: "xi1c1fh",
          boxSizing: "x1afcbsf",
          height: "x5yr21d",
          insetInlineStart: "x1o0tod",
          position: "x10l6tqk",
          top: "x13vifvy",
          width: "xh8yej3",
          zIndex: "x8knxv4",
          $$css: !0,
        },
      };
    function d(t) {
      var n = o("react-compiler-runtime").c(4),
        a = t.xstyle,
        i;
      n[0] !== a
        ? ((i = (e || (e = r("stylex"))).props([c.shadow, a])),
          (n[0] = a),
          (n[1] = i))
        : (i = n[1]);
      var l;
      return (
        n[2] !== i
          ? ((l = u.jsx("div", babelHelpers.extends({}, i))),
            (n[2] = i),
            (n[3] = l))
          : (l = n[3]),
        l
      );
    }
    l.default = d;
  },
  98,
);
