__d(
  "WAWebEmptyStateModule.react",
  [
    "WAWebABProps",
    "WAWebEmptyStateActionTile.react",
    "WAWebTabOrder",
    "WDSButton.react",
    "WDSFlex.stylex",
    "WDSText.react",
    "react",
    "stylex",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = s || (s = o("react")),
      c = s.useRef,
      d = {
        wrapper: {
          backgroundColor: "x6egj2d",
          width: "xh8yej3",
          height: "x5yr21d",
          textAlign: "x2b8uid",
          $$css: !0,
        },
        titleCardWrapper: {
          maxWidth: "x1rjt51p",
          backgroundColor: "x16w0wmm",
          borderStartStartRadius: "x1g83kfv",
          borderStartEndRadius: "x3qq2k7",
          borderEndEndRadius: "x2x8art",
          borderEndStartRadius: "x1qor8vf",
          paddingTop: "xl7twdi",
          paddingInlineEnd: "xyo0t3i",
          paddingBottom: "xvg22vi",
          paddingInlineStart: "xb0esv5",
          marginTop: "x98l61r",
          marginInlineEnd: "xviac27",
          marginBottom: "x1ua1l7f",
          marginInlineStart: "xlese2p",
          rowGap: "x1j3ira4",
          columnGap: "xrdqr27",
          boxSizing: "x9f619",
          height: "xg7h5cd",
          $$css: !0,
        },
      };
    function m(t) {
      var n = t.titleCard,
        a = c(null),
        i;
      return (
        n.Illustration
          ? (i = u.jsx(n.Illustration, { height: 88, width: 132 }))
          : n.animation && (i = n.animation),
        u.jsxs(
          "div",
          babelHelpers.extends(
            {},
            (e || (e = r("stylex"))).props(
              d.titleCardWrapper,
              o("WDSFlex.stylex").wdsFlex.flexColumn,
              o("WDSFlex.stylex").wdsFlex.alignCenter,
            ),
            {
              children: [
                i,
                u.jsxs(
                  "div",
                  babelHelpers.extends(
                    {},
                    e.props(
                      o("WDSFlex.stylex").wdsFlex.flexColumn,
                      o("WDSFlex.stylex").wdsFlex.gapSingle,
                    ),
                    {
                      children: [
                        u.jsx(r("WDSText.react"), {
                          colorName: "contentDefault",
                          type: "Headline2",
                          robotoPropValue:
                            o("WAWebABProps").getABPropConfigValue(
                              "wds_web_roboto",
                            ),
                          children: n.title,
                        }),
                        u.jsx(r("WDSText.react"), {
                          colorName: "contentDeemphasized",
                          type: "Body2",
                          children: n.description,
                        }),
                      ],
                    },
                  ),
                ),
                u.jsx(r("WDSButton.react"), {
                  tabOrder: o("WAWebTabOrder").TAB_ORDER.EMPTY_STATE,
                  ref: a,
                  type: "default",
                  variant: "tonal",
                  size: "small",
                  label: n.actionButtonLabel,
                  onPress: n.actionButtonClickHandler,
                }),
              ],
            },
          ),
        )
      );
    }
    m.displayName = m.name + " [from " + i.id + "]";
    function p(t) {
      var n = t.actions,
        a = t.titleCard;
      return u.jsxs(
        "section",
        babelHelpers.extends(
          { "data-testid": void 0 },
          (e || (e = r("stylex"))).props(
            d.wrapper,
            o("WDSFlex.stylex").wdsFlex.flexCenter,
            o("WDSFlex.stylex").wdsFlex.flexColumn,
          ),
          {
            children: [
              a && u.jsx(m, { titleCard: a }),
              u.jsx(
                "div",
                babelHelpers.extends(
                  {},
                  e.props(o("WDSFlex.stylex").wdsFlex.flex),
                  {
                    children: n.map(function (e) {
                      return u.jsx(
                        r("WAWebEmptyStateActionTile.react"),
                        babelHelpers.extends({}, e),
                        e.title.toString(),
                      );
                    }),
                  },
                ),
              ),
            ],
          },
        ),
      );
    }
    ((p.displayName = p.name + " [from " + i.id + "]"), (l.default = p));
  },
  98,
);
