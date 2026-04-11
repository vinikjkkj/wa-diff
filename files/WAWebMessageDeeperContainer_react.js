__d(
  "WAWebMessageDeeperContainer.react",
  ["react", "react-compiler-runtime", "stylex"],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = s || (s = o("react")),
      c = {
        posBottom: {
          borderStartStartRadius: "x1bczwif",
          borderStartEndRadius: "x17un8ov",
          $$css: !0,
        },
        posTop: {
          borderEndStartRadius: "x11o6v7j",
          borderEndEndRadius: "x1e7945m",
          $$css: !0,
        },
        wrapper: {
          borderStartStartRadius: "xaejkm2",
          borderStartEndRadius: "x1uuy6ko",
          borderEndEndRadius: "x1gfim23",
          borderEndStartRadius: "xqfj769",
          cursor: "x1ypdohk",
          overflowX: "x6ikm8r",
          overflowY: "x10wlt62",
          textDecoration: "x1hl2dhg",
          width: "xh8yej3",
          $$css: !0,
        },
        wrapperIn: { backgroundColor: "x1bu39yj", $$css: !0 },
        wrapperOut: { backgroundColor: "x1bu39yj", $$css: !0 },
      };
    function d(t) {
      var n = o("react-compiler-runtime").c(7),
        a = t.children,
        i = t.outgoingMsg,
        l = t.position,
        s = t.xstyle,
        d;
      n[0] !== i || n[1] !== l || n[2] !== s
        ? ((d = (e || (e = r("stylex"))).props(
            c.wrapper,
            l === "bottom" && c.posBottom,
            l === "top" && c.posTop,
            !i && c.wrapperIn,
            i && c.wrapperOut,
            s,
          )),
          (n[0] = i),
          (n[1] = l),
          (n[2] = s),
          (n[3] = d))
        : (d = n[3]);
      var m;
      return (
        n[4] !== a || n[5] !== d
          ? ((m = u.jsx("div", babelHelpers.extends({}, d, { children: a }))),
            (n[4] = a),
            (n[5] = d),
            (n[6] = m))
          : (m = n[6]),
        m
      );
    }
    l.default = d;
  },
  98,
);
