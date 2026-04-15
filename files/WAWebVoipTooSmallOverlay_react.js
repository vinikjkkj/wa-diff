__d(
  "WAWebVoipTooSmallOverlay.react",
  [
    "fbt",
    "WDSButton.react",
    "WDSIconIcFullscreen.react",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react")),
      c = 200;
    function d(e) {
      var t = o("react-compiler-runtime").c(9),
        n = e.children,
        a = e.isVisible,
        i = e.onRestoreSize,
        l;
      t[0] !== a
        ? ((l = {
            0: {
              className:
                "xixxii4 x13vifvy x1ey2m1c x1o0tod xtijo5x x78zum5 xdt5ytf x6s0dn4 xl56j7k x1qvou4u x1s70e7g x1od0jb8 xfo81ep x1p57kb1 xvtqlqk xvpt6g3 xdx6fka x1b959el xg01cxk x47corl",
            },
            1: {
              className:
                "xixxii4 x13vifvy x1ey2m1c x1o0tod xtijo5x x78zum5 xdt5ytf x6s0dn4 xl56j7k x1qvou4u x1s70e7g x1od0jb8 xfo81ep x1p57kb1 xvtqlqk xvpt6g3 xdx6fka x1b959el x1hc1fzr x67bb7w",
            },
          }[!!a << 0]),
          (t[0] = a),
          (t[1] = l))
        : (l = t[1]);
      var c;
      t[2] !== i
        ? ((c =
            i != null &&
            u.jsx(r("WDSButton.react"), {
              variant: "borderless",
              onPress: i,
              Icon: r("WDSIconIcFullscreen.react"),
              size: "medium",
              "aria-label": s._(/*BTDS*/ "Restore window size"),
            })),
          (t[2] = i),
          (t[3] = c))
        : (c = t[3]);
      var d;
      t[4] === Symbol.for("react.memo_cache_sentinel")
        ? ((d = u.jsx("span", {
            className: "x14ug900 x1f6kntn x2b8uid x1mzt3pk x193iq5w",
            children: s._(
              /*BTDS*/ "Your call is still active. Make this window larger.",
            ),
          })),
          (t[4] = d))
        : (d = t[4]);
      var m;
      return (
        t[5] !== n || t[6] !== l || t[7] !== c
          ? ((m = u.jsxs(
              "div",
              babelHelpers.extends({}, l, {
                role: "status",
                children: [c, d, n],
              }),
            )),
            (t[5] = n),
            (t[6] = l),
            (t[7] = c),
            (t[8] = m))
          : (m = t[8]),
        m
      );
    }
    l.WAWebVoipTooSmallOverlay = d;
  },
  226,
);
