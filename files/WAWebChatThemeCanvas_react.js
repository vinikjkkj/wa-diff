__d(
  "WAWebChatThemeCanvas.react",
  [
    "WAWebUnstyledButton.react",
    "WAWebUseChatTheme",
    "WDSFlex.stylex",
    "react",
    "stylex",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = s || (s = o("react")),
      c = {
        themeCardWrapper: {
          marginBottom: "xcytdqz",
          marginInlineStart: "x1uvdrpn",
          $$css: !0,
        },
        themeCard: {
          boxSizing: "x9f619",
          width: "x1pigqs1",
          height: "xn6wvy2",
          borderTopWidth: "x178xt8z",
          borderInlineEndWidth: "x1lun4ml",
          borderBottomWidth: "xso031l",
          borderInlineStartWidth: "xpilrb4",
          borderTopStyle: "x13fuv20",
          borderInlineEndStyle: "x18b5jzi",
          borderBottomStyle: "x1q0q8m5",
          borderInlineStartStyle: "x1t7ytsu",
          borderTopColor: "xnj1f2r",
          borderInlineEndColor: "x2uibgs",
          borderBottomColor: "xkveyfu",
          borderInlineStartColor: "x12llq9",
          borderStartStartRadius: "xlr9sxt",
          borderStartEndRadius: "xvvg52n",
          borderEndEndRadius: "xwd4zgb",
          borderEndStartRadius: "xq8v1ta",
          cursor: "x1ypdohk",
          overflowX: "x6ikm8r",
          overflowY: "x10wlt62",
          paddingTop: "xexx8yu",
          paddingInlineEnd: "xyri2b",
          paddingBottom: "x18d9i69",
          paddingInlineStart: "x1c1uobl",
          backgroundColor: "x1q80dvb",
          $$css: !0,
        },
        themeCardSelected: {
          borderTopWidth: "xmn4e3e",
          borderInlineEndWidth: "x1if355w",
          borderBottomWidth: "x2x41l1",
          borderInlineStartWidth: "xct1zlm",
          borderTopColor: "xlze6vy",
          borderInlineEndColor: "x47fsot",
          borderBottomColor: "x1rrvw3c",
          borderInlineStartColor: "x18djku1",
          $$css: !0,
        },
        bubbleRow: {
          paddingTop: "x1tiyuxx",
          paddingBottom: "x1nbhmlj",
          paddingInlineStart: "x12w63v0",
          paddingInlineEnd: "x1nzty39",
          paddingLeft: null,
          paddingRight: null,
          marginTop: "xr1yuqi",
          $$css: !0,
        },
        bubbleIncoming: {
          width: "x14qfxbe",
          height: "x170jfvy",
          borderStartStartRadius: "xbrszos",
          borderStartEndRadius: "xea3l6g",
          borderEndEndRadius: "x18isctg",
          borderEndStartRadius: "x2q3nzr",
          backgroundColor: "x1ew7x2d",
          $$css: !0,
        },
        bubbleOutgoing: {
          width: "x14qfxbe",
          height: "x170jfvy",
          borderStartStartRadius: "xbrszos",
          borderStartEndRadius: "xea3l6g",
          borderEndEndRadius: "x18isctg",
          borderEndStartRadius: "x2q3nzr",
          backgroundColor: "x1g5lz36",
          $$css: !0,
        },
      };
    function d(t) {
      var n = t.isSelected,
        a = t.onFocusChange,
        i = t.onPreview,
        l = t.onSelect,
        s = t.ref,
        d = t.tabIndex,
        m = t.themeId,
        p = t.themeMode,
        _ = o("WAWebUseChatTheme").useLazyChatThemeDefinitions({
          isChatThemeEnabled: !0,
        });
      if (_ == null) return null;
      var f = _.getChatTheme(m, p),
        g = _.getColorSchemeName(m);
      return u.jsx(r("WAWebUnstyledButton.react"), {
        ref: s,
        role: "radio",
        "aria-checked": n,
        tabIndex: d,
        testid: void 0,
        xstyle: c.themeCardWrapper,
        onClick: function () {
          return l(m);
        },
        onMouseEnter: function () {
          return i(m);
        },
        onMouseLeave: function () {
          return i(null);
        },
        onFocus: function () {
          return a(m);
        },
        onBlur: function () {
          return a(null);
        },
        children: u.jsxs(
          "span",
          babelHelpers.extends(
            {},
            (e || (e = r("stylex"))).props(
              o("WDSFlex.stylex").wdsFlex.flexColumnCenter,
            ),
            {
              children: [
                u.jsx(
                  "span",
                  babelHelpers.extends(
                    {},
                    e.props(
                      o("WDSFlex.stylex").wdsFlex.flexColumn,
                      o("WDSFlex.stylex").wdsFlex.justifyEnd,
                      c.themeCard,
                      n && c.themeCardSelected,
                      f,
                    ),
                    {
                      children: u.jsxs(
                        "div",
                        babelHelpers.extends(
                          {},
                          e.props(
                            o("WDSFlex.stylex").wdsFlex.flexColumn,
                            o("WDSFlex.stylex").wdsFlex.rowGapQuarter,
                            c.bubbleRow,
                          ),
                          {
                            children: [
                              u.jsx(
                                "div",
                                babelHelpers.extends(
                                  {},
                                  e.props(
                                    o("WDSFlex.stylex").wdsFlex.selfStart,
                                    c.bubbleIncoming,
                                  ),
                                ),
                              ),
                              u.jsx(
                                "div",
                                babelHelpers.extends(
                                  {},
                                  e.props(
                                    o("WDSFlex.stylex").wdsFlex.selfEnd,
                                    c.bubbleOutgoing,
                                  ),
                                ),
                              ),
                            ],
                          },
                        ),
                      ),
                    },
                  ),
                ),
                u.jsx(
                  "span",
                  babelHelpers.extends(
                    {},
                    {
                      0: {
                        className: "x1ncwhqj x1chcg4z x2b8uid xav9cv8 x14ug900",
                      },
                      1: {
                        className:
                          "x1ncwhqj x1chcg4z x2b8uid xav9cv8 x14ug900 x117nqv4",
                      },
                    }[!!n << 0],
                    { children: g },
                  ),
                ),
              ],
            },
          ),
        ),
      });
    }
    ((d.displayName = d.name + " [from " + i.id + "]"), (l.default = d));
  },
  98,
);
