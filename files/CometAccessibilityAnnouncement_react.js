__d(
  "CometAccessibilityAnnouncement.react",
  ["react", "react-compiler-runtime", "react-strict-dom"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = {
        offscreenAccessibilityElement: {
          clip: "xzpqnlu",
          clipPath: "x1hyvwdk",
          height: "xjm9jq1",
          overflowX: "x6ikm8r",
          overflowY: "x10wlt62",
          position: "x10l6tqk",
          userSelect: "x87ps6o",
          width: "x1i1rx1s",
          $$css: !0,
        },
      };
    function c(e) {
      var t = o("react-compiler-runtime").c(7),
        n = e.assertive,
        r = e.children,
        a = e.isVisible,
        i = e.role,
        l = n === void 0 ? !1 : n,
        c = r === void 0 ? null : r,
        d = a === void 0 ? !1 : a,
        m = i === void 0 ? "alert" : i,
        p = l ? "assertive" : "polite",
        _ = d === !1 && u.offscreenAccessibilityElement,
        f;
      t[0] !== _ ? ((f = [_]), (t[0] = _), (t[1] = f)) : (f = t[1]);
      var g;
      return (
        t[2] !== c || t[3] !== m || t[4] !== p || t[5] !== f
          ? ((g = s.jsx(o("react-strict-dom").html.div, {
              "aria-atomic": !0,
              "aria-live": p,
              role: m,
              style: f,
              children: c,
            })),
            (t[2] = c),
            (t[3] = m),
            (t[4] = p),
            (t[5] = f),
            (t[6] = g))
          : (g = t[6]),
        g
      );
    }
    l.default = c;
  },
  98,
);
