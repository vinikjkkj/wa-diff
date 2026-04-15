__d(
  "WAWebLidDebugBadge.react",
  ["WAWebUISpacing", "react", "react-compiler-runtime", "stylex"],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = s || (s = o("react")),
      c = {
        lidDebugLabel: {
          fontSize: "x190qgfh",
          background: "x9d0jvq",
          color: "x1pse0pq",
          fontWeight: "x117nqv4",
          $$css: !0,
        },
      };
    function d(t) {
      var n = o("react-compiler-runtime").c(3),
        a = t.isCAG,
        i = t.isParentGroup,
        l;
      i
        ? (l = "Parent Group LID")
        : a === !0
          ? (l = "CAG LID")
          : a === !1
            ? (l = "Group LID")
            : (l = "LID");
      var s;
      n[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((s = (e || (e = r("stylex"))).props(
            c.lidDebugLabel,
            o("WAWebUISpacing").uiPadding.vert0,
            o("WAWebUISpacing").uiPadding.horiz3,
            o("WAWebUISpacing").uiMargin.start6,
          )),
          (n[0] = s))
        : (s = n[0]);
      var d;
      return (
        n[1] !== l
          ? ((d = u.jsx("span", babelHelpers.extends({}, s, { children: l }))),
            (n[1] = l),
            (n[2] = d))
          : (d = n[2]),
        d
      );
    }
    l.default = d;
  },
  98,
);
