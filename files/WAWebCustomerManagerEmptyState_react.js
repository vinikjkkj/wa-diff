__d(
  "WAWebCustomerManagerEmptyState.react",
  [
    "fbt",
    "WAWebABProps",
    "WAWebEmptyStateActionTile.react",
    "WAWebLabelOutlineIcon.react",
    "WAWebListPeopleRefreshedIcon.react",
    "WAWebListsGatingUtils",
    "WAWebWdsPictoUserCheckFeedbackPositiveIcon.react",
    "WDSButton.react",
    "WDSFlex.stylex",
    "WDSIconIcPersonAdd.react",
    "WDSText.react",
    "react",
    "stylex",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u,
      c = u || (u = o("react")),
      d = {
        wrapper: {
          backgroundColor: "x6egj2d",
          width: "xh8yej3",
          height: "x5yr21d",
          textAlign: "x2b8uid",
          $$css: !0,
        },
        titleCard: {
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
          boxSizing: "x9f619",
          height: "xg7h5cd",
          $$css: !0,
        },
        textGroup: { rowGap: "x1qvou4u", $$css: !0 },
      };
    function m(t) {
      var n = t.onAddCustomer,
        a = t.onLearnMore,
        i = t.onManageLabels;
      return c.jsxs(
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
              c.jsxs(
                "div",
                babelHelpers.extends(
                  {},
                  e.props(
                    d.titleCard,
                    o("WDSFlex.stylex").wdsFlex.flexColumn,
                    o("WDSFlex.stylex").wdsFlex.alignCenter,
                  ),
                  {
                    children: [
                      c.jsx(
                        o("WAWebWdsPictoUserCheckFeedbackPositiveIcon.react")
                          .WdsPictoUserCheckFeedbackPositiveIcon,
                        {},
                      ),
                      c.jsxs(
                        "div",
                        babelHelpers.extends(
                          {},
                          e.props(
                            o("WDSFlex.stylex").wdsFlex.flexColumn,
                            d.textGroup,
                          ),
                          {
                            children: [
                              c.jsx(r("WDSText.react"), {
                                colorName: "contentDefault",
                                type: "Headline2",
                                robotoPropValue:
                                  o("WAWebABProps").getABPropConfigValue(
                                    "wds_web_roboto",
                                  ),
                                children: s._(
                                  /*BTDS*/ "Keep every customer conversation organized",
                                ),
                              }),
                              c.jsx(r("WDSText.react"), {
                                colorName: "contentDeemphasized",
                                type: "Body2",
                                children: s._(
                                  /*BTDS*/ "Label, filter, and pick up any thread instantly\u2014with a workflow designed for businesses.",
                                ),
                              }),
                            ],
                          },
                        ),
                      ),
                      c.jsx(r("WDSButton.react"), {
                        type: "default",
                        variant: "tonal",
                        size: "small",
                        label: s._(/*BTDS*/ "Learn more"),
                        onPress: a != null ? a : p,
                        testid: void 0,
                      }),
                    ],
                  },
                ),
              ),
              c.jsxs(
                "div",
                babelHelpers.extends(
                  {},
                  e.props(o("WDSFlex.stylex").wdsFlex.flex),
                  {
                    children: [
                      c.jsx(r("WAWebEmptyStateActionTile.react"), {
                        Icon: r("WDSIconIcPersonAdd.react"),
                        title: s._(/*BTDS*/ "Add customer"),
                        clickHandler: n,
                        testid: void 0,
                      }),
                      c.jsx(r("WAWebEmptyStateActionTile.react"), {
                        Icon: o("WAWebListsGatingUtils").isListsEnabled()
                          ? o("WAWebListPeopleRefreshedIcon.react")
                              .ListPeopleRefreshedIcon
                          : o("WAWebLabelOutlineIcon.react").LabelOutlineIcon,
                        title: o("WAWebListsGatingUtils").isListsEnabled()
                          ? s._(/*BTDS*/ "Manage lists")
                          : s._(/*BTDS*/ "Manage labels"),
                        clickHandler: i,
                        testid: void 0,
                      }),
                    ],
                  },
                ),
              ),
            ],
          },
        ),
      );
    }
    m.displayName = m.name + " [from " + i.id + "]";
    function p() {}
    l.default = m;
  },
  226,
);
