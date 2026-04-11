__d(
  "WAWebNewsletterRecommendedBlockHeading.react",
  [
    "fbt",
    "WAWebKeyboardHotKeys.react",
    "WAWebStatusGatingUtils",
    "WAWebText.react",
    "WDSFlex.stylex",
    "WDSText.react",
    "react",
    "react-compiler-runtime",
    "stylex",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c = u || (u = o("react")),
      d = {
        headingContainerForNewsletterTab: { textAlign: "x2b8uid", $$css: !0 },
        headingContainerForUpdatesTab: {
          fontSize: "x1jchvi3",
          marginInlineStart: "x6pxu1d",
          $$css: !0,
        },
        infoText: { marginTop: "x1380le5", marginBottom: "xefnzgg", $$css: !0 },
        followChannelsHeader: {
          marginTop: "x1nmyh1g",
          marginBottom: "xefnzgg",
          $$css: !0,
        },
      };
    function m(e) {
      var t = o("react-compiler-runtime").c(6),
        n = e.xstyle,
        r;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((r = c.jsx(o("WAWebText.react").WAWebTextLarge, {
            children: s._(/*BTDS*/ "Stay updated on your favorite topics"),
          })),
          (t[0] = r))
        : (r = t[0]);
      var a = r,
        i;
      t[1] !== n
        ? ((i = [d.headingContainerForNewsletterTab, n]),
          (t[1] = n),
          (t[2] = i))
        : (i = t[2]);
      var l;
      t[3] === Symbol.for("react.memo_cache_sentinel")
        ? ((l = c.jsx(o("WAWebText.react").WAWebTextTitle, {
            margin: 8,
            color: "secondary",
            children: s._(/*BTDS*/ "Find channels to follow below"),
          })),
          (t[3] = l))
        : (l = t[3]);
      var u;
      return (
        t[4] !== i
          ? ((u = c.jsxs(o("WAWebKeyboardHotKeys.react").HotKeys, {
              xstyle: i,
              children: [a, l],
            })),
            (t[4] = i),
            (t[5] = u))
          : (u = t[5]),
        u
      );
    }
    function p() {
      var t = o("react-compiler-runtime").c(3),
        n;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((n = s._(
            /*BTDS*/ "Stay updated on topics that matter to you. Find channels to follow below.",
          )),
          (t[0] = n))
        : (n = t[0]);
      var a = n,
        i;
      t[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((i = s._(/*BTDS*/ "Find channels to follow")), (t[1] = i))
        : (i = t[1]);
      var l = i,
        u;
      return (
        t[2] === Symbol.for("react.memo_cache_sentinel")
          ? ((u = c.jsx(o("WAWebKeyboardHotKeys.react").HotKeys, {
              className: (e || (e = r("stylex")))(
                o("WDSFlex.stylex").wdsFlex.selfStretch,
              ),
              children: c.jsxs(
                "div",
                babelHelpers.extends(
                  {},
                  e.props(
                    d.headingContainerForUpdatesTab,
                    o("WDSFlex.stylex").wdsFlex.flexColumn,
                  ),
                  {
                    children: [
                      c.jsx(r("WDSText.react"), {
                        type: "Body1",
                        colorName: "contentDeemphasized",
                        xstyle: d.infoText,
                        children: a,
                      }),
                      c.jsx(r("WDSText.react"), {
                        type: "Body2",
                        colorName: "contentDeemphasized",
                        xstyle: d.followChannelsHeader,
                        children: l,
                      }),
                    ],
                  },
                ),
              ),
            })),
            (t[2] = u))
          : (u = t[2]),
        u
      );
    }
    function _(e) {
      var t = o("react-compiler-runtime").c(3),
        n = e.xstyle;
      if (o("WAWebStatusGatingUtils").isUpdatesTabInNavigationBarEnabled()) {
        var r;
        return (
          t[0] === Symbol.for("react.memo_cache_sentinel")
            ? ((r = c.jsx(p, {})), (t[0] = r))
            : (r = t[0]),
          r
        );
      }
      var a;
      return (
        t[1] !== n
          ? ((a = c.jsx(m, { xstyle: n })), (t[1] = n), (t[2] = a))
          : (a = t[2]),
        a
      );
    }
    l.default = _;
  },
  226,
);
