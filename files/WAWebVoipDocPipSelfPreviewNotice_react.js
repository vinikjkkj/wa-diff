__d(
  "WAWebVoipDocPipSelfPreviewNotice.react",
  [
    "fbt",
    "WAWebFlex.react",
    "WDSIconIcBackToTab.react",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react")),
      c = {
        container: {
          rowGap: "x1qvou4u",
          columnGap: "x1s70e7g",
          backgroundColor: "x1od0jb8",
          borderStartStartRadius: "xyi3aci",
          borderStartEndRadius: "xwf5gio",
          borderEndEndRadius: "x1p453bz",
          borderEndStartRadius: "x1suzm8a",
          paddingTop: "x1p57kb1",
          paddingInlineEnd: "xvtqlqk",
          paddingBottom: "xvpt6g3",
          paddingInlineStart: "xdx6fka",
          width: "xh8yej3",
          height: "x5yr21d",
          boxSizing: "x9f619",
          $$css: !0,
        },
        icon: { color: "x14ug900", $$css: !0 },
      };
    function d() {
      var e = o("react-compiler-runtime").c(1),
        t;
      return (
        e[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((t = u.jsxs(o("WAWebFlex.react").FlexColumn, {
              align: "center",
              justify: "center",
              role: "status",
              xstyle: c.container,
              children: [
                u.jsx(o("WAWebFlex.react").FlexItem, {
                  xstyle: c.icon,
                  children: u.jsx(r("WDSIconIcBackToTab.react"), {
                    height: 24,
                    width: 24,
                  }),
                }),
                u.jsx("span", {
                  className: "x14ug900 x1f6kntn x2b8uid x1mzt3pk x193iq5w",
                  children: s._(
                    /*BTDS*/ "Open WhatsApp to see your video preview",
                  ),
                }),
              ],
            })),
            (e[0] = t))
          : (t = e[0]),
        t
      );
    }
    l.WAWebVoipDocPipSelfPreviewNotice = d;
  },
  226,
);
