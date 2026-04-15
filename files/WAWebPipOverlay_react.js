__d(
  "WAWebPipOverlay.react",
  ["react", "react-compiler-runtime"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react"));
    function u(e) {
      var t = o("react-compiler-runtime").c(9),
        n = e.children,
        r = e.icon,
        a;
      t[0] !== r
        ? ((a = r
            ? s.jsx("div", {
                className: "x17t9dm2 xyorhqc x1rdy4ex",
                children: r,
              })
            : null),
          (t[0] = r),
          (t[1] = a))
        : (a = t[1]);
      var i = a,
        l;
      t[2] === Symbol.for("react.memo_cache_sentinel")
        ? ((l = {
            className:
              "x6s0dn4 xjpg5jv x1ey2m1c x9f619 x78zum5 xdt5ytf xl56j7k x1o0tod x1xpjyb3 xyo0t3i xk85y76 xb0esv5 x10l6tqk xtijo5x x13vifvy xeut3pp",
          }),
          (t[2] = l))
        : (l = t[2]);
      var u;
      t[3] === Symbol.for("react.memo_cache_sentinel")
        ? ((u = {
            className:
              "x1riek7e xt0e3qv x1c4vz4f x2lah0s xdl72j9 x1nxh6w3 x1iikomf x1u7k74 x2b8uid x1kkjihi",
          }),
          (t[3] = u))
        : (u = t[3]);
      var c;
      t[4] !== n
        ? ((c = s.jsx("div", babelHelpers.extends({}, u, { children: n }))),
          (t[4] = n),
          (t[5] = c))
        : (c = t[5]);
      var d;
      return (
        t[6] !== i || t[7] !== c
          ? ((d = s.jsxs(
              "div",
              babelHelpers.extends({}, l, { children: [i, c] }),
            )),
            (t[6] = i),
            (t[7] = c),
            (t[8] = d))
          : (d = t[8]),
        d
      );
    }
    l.default = u;
  },
  98,
);
