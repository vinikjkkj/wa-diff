__d(
  "WAWebMessageDeeperContainer.react",
  ["react", "stylex"],
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
      var n = t.children,
        o = t.outgoingMsg,
        a = t.position,
        i = t.xstyle;
      return u.jsx(
        "div",
        babelHelpers.extends(
          {},
          (e || (e = r("stylex"))).props(
            c.wrapper,
            a === "bottom" && c.posBottom,
            a === "top" && c.posTop,
            !o && c.wrapperIn,
            o && c.wrapperOut,
            i,
          ),
          { children: n },
        ),
      );
    }
    ((d.displayName = d.name + " [from " + i.id + "]"), (l.default = d));
  },
  98,
);
