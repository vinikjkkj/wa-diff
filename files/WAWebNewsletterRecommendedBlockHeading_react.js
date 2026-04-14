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
      var t = e.xstyle,
        n = c.jsx(o("WAWebText.react").WAWebTextLarge, {
          children: s._(/*BTDS*/ "Stay updated on your favorite topics"),
        });
      return c.jsxs(o("WAWebKeyboardHotKeys.react").HotKeys, {
        xstyle: [d.headingContainerForNewsletterTab, t],
        children: [
          n,
          c.jsx(o("WAWebText.react").WAWebTextTitle, {
            margin: 8,
            color: "secondary",
            children: s._(/*BTDS*/ "Find channels to follow below"),
          }),
        ],
      });
    }
    m.displayName = m.name + " [from " + i.id + "]";
    function p() {
      var t = s._(
          /*BTDS*/ "Stay updated on topics that matter to you. Find channels to follow below.",
        ),
        n = s._(/*BTDS*/ "Find channels to follow");
      return c.jsx(o("WAWebKeyboardHotKeys.react").HotKeys, {
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
                  children: t,
                }),
                c.jsx(r("WDSText.react"), {
                  type: "Body2",
                  colorName: "contentDeemphasized",
                  xstyle: d.followChannelsHeader,
                  children: n,
                }),
              ],
            },
          ),
        ),
      });
    }
    p.displayName = p.name + " [from " + i.id + "]";
    function _(e) {
      var t = e.xstyle;
      return o("WAWebStatusGatingUtils").isUpdatesTabInNavigationBarEnabled()
        ? c.jsx(p, {})
        : c.jsx(m, { xstyle: t });
    }
    ((_.displayName = _.name + " [from " + i.id + "]"), (l.default = _));
  },
  226,
);
