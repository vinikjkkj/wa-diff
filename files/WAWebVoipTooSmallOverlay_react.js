__d(
  "WAWebVoipTooSmallOverlay.react",
  ["fbt", "WDSButton.react", "WDSIconIcFullscreen.react", "react"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react")),
      c = 200;
    function d(e) {
      var t = e.children,
        n = e.isVisible,
        o = e.onRestoreSize;
      return u.jsxs(
        "div",
        babelHelpers.extends(
          {},
          {
            0: {
              className:
                "xixxii4 x13vifvy x1ey2m1c x1o0tod xtijo5x x78zum5 xdt5ytf x6s0dn4 xl56j7k x1qvou4u x1s70e7g x1od0jb8 xfo81ep x1p57kb1 xvtqlqk xvpt6g3 xdx6fka x1b959el xg01cxk x47corl",
            },
            1: {
              className:
                "xixxii4 x13vifvy x1ey2m1c x1o0tod xtijo5x x78zum5 xdt5ytf x6s0dn4 xl56j7k x1qvou4u x1s70e7g x1od0jb8 xfo81ep x1p57kb1 xvtqlqk xvpt6g3 xdx6fka x1b959el x1hc1fzr x67bb7w",
            },
          }[!!n << 0],
          {
            role: "status",
            children: [
              o != null &&
                u.jsx(r("WDSButton.react"), {
                  variant: "borderless",
                  onPress: o,
                  Icon: r("WDSIconIcFullscreen.react"),
                  size: "medium",
                  "aria-label": s._(/*BTDS*/ "Restore window size"),
                }),
              u.jsx("span", {
                className: "x14ug900 x1f6kntn x2b8uid x1mzt3pk x193iq5w",
                children: s._(
                  /*BTDS*/ "Your call is still active. Make this window larger.",
                ),
              }),
              t,
            ],
          },
        ),
      );
    }
    ((d.displayName = d.name + " [from " + i.id + "]"),
      (l.WAWebVoipTooSmallOverlay = d));
  },
  226,
);
