__d(
  "CometComposedTextV2LinkNodeRenderer.react",
  ["BaseInlinePressable.react", "react", "react-compiler-runtime"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = { link: { textDecoration: "x1bvjpef", $$css: !0 } };
    function c(e) {
      switch (e) {
        case "alternate":
        case "author":
        case "bookmark":
        case "external":
        case "help":
        case "license":
        case "next":
        case "nofollow":
        case "noopener":
        case "noreferrer":
        case "prev":
        case "search":
        case "tag":
          return !0;
        default:
          return !1;
      }
    }
    function d(e) {
      var t = o("react-compiler-runtime").c(11),
        n = e.children,
        a = e.node,
        i,
        l,
        d;
      if (t[0] !== a) {
        var m = a.getState(),
          p = m.rel,
          _ = m.url;
        ((d = _),
          (i = r("BaseInlinePressable.react")),
          (l = c(p) ? p : void 0),
          (t[0] = a),
          (t[1] = i),
          (t[2] = l),
          (t[3] = d));
      } else ((i = t[1]), (l = t[2]), (d = t[3]));
      var f;
      t[4] !== l || t[5] !== d
        ? ((f = { rel: l, target: "_blank", url: d }),
          (t[4] = l),
          (t[5] = d),
          (t[6] = f))
        : (f = t[6]);
      var g;
      return (
        t[7] !== i || t[8] !== n || t[9] !== f
          ? ((g = s.jsx(i, { linkProps: f, xstyle: u.link, children: n })),
            (t[7] = i),
            (t[8] = n),
            (t[9] = f),
            (t[10] = g))
          : (g = t[10]),
        g
      );
    }
    l.default = d;
  },
  98,
);
