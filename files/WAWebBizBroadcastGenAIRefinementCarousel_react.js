__d(
  "WAWebBizBroadcastGenAIRefinementCarousel.react",
  [
    "fbt",
    "WAWebBizBroadcastGenAIRecommendationModel",
    "WAWebBizBroadcastTextFormatUtils",
    "WAWebEmojiText.react",
    "WAWebFlex.react",
    "WDSButton.react",
    "WDSIconIcChevronLeft.react",
    "WDSIconIcChevronRight.react",
    "react",
    "stylex",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c = u || (u = o("react")),
      d = u.useCallback;
    function m(t) {
      var n = t.history,
        a = t.isRTL,
        i = t.onNavigate,
        l = n.entries[n.currentIndex],
        u = o("WAWebBizBroadcastGenAIRecommendationModel").canNavigate(
          n,
          "prev",
        ),
        m = o("WAWebBizBroadcastGenAIRecommendationModel").canNavigate(
          n,
          "next",
        ),
        p = d(
          function () {
            i(n.currentIndex - 1);
          },
          [n.currentIndex, i],
        ),
        _ = d(
          function () {
            i(n.currentIndex + 1);
          },
          [n.currentIndex, i],
        ),
        g = a ? n.currentIndex * 100 : -(n.currentIndex * 100),
        h =
          l.userPrompt ===
          o("WAWebBizBroadcastGenAIRecommendationModel").FROM_SUGGESTION_PROMPT
            ? s._(/*BTDS*/ "From suggestion")
            : l.userPrompt;
      return c.jsxs(o("WAWebFlex.react").FlexColumn, {
        align: "stretch",
        xstyle: f.carouselContainer,
        children: [
          c.jsx("div", {
            className: "xz65tgg x6ikm8r x10wlt62",
            children: c.jsx(
              "div",
              babelHelpers.extends(
                {},
                (e || (e = r("stylex"))).props(f.track, f.trackOffset(g)),
                {
                  children: n.entries.map(function (e, t) {
                    return c.jsx(
                      "div",
                      {
                        className: "x2lah0s xh8yej3",
                        children: c.jsx("div", {
                          className:
                            "x6s0dn4 x9f619 x78zum5 xz65tgg x16ovd2e x12xbjc7 xdx6fka xvtqlqk",
                          children: c.jsx("div", {
                            className:
                              "x1pyc6se x1mlb2bo x16pkwpw xqe4bef xlr9sxt xvvg52n xwd4zgb xq8v1ta x13fuv20 x18b5jzi x1q0q8m5 x1t7ytsu x178xt8z x1lun4ml xso031l xpilrb4 x9f619 x1f6kntn x37zpob x1i69ec5 x1odjw0f x16ovd2e x12xbjc7 x1iw51ew xde1mab x126k92a xh8yej3 x13faqbe",
                            children: c.jsx(
                              o("WAWebEmojiText.react").EmojiText,
                              {
                                text: e.message,
                                formatters: o(
                                  "WAWebBizBroadcastTextFormatUtils",
                                ).AI_TEXT_FORMATTERS,
                              },
                            ),
                          }),
                        }),
                      },
                      t,
                    );
                  }),
                },
              ),
            ),
          }),
          c.jsxs(o("WAWebFlex.react").FlexRow, {
            align: "center",
            xstyle: f.promptRow,
            children: [
              c.jsx("div", {
                className: "x2lah0s x14qfxbe",
                children:
                  u &&
                  c.jsx(r("WDSButton.react"), {
                    Icon: r("WDSIconIcChevronLeft.react"),
                    "aria-label": s._(/*BTDS*/ "Previous refinement"),
                    onPress: p,
                    size: "small",
                    variant: "outline",
                    xstyle: f.chevronButton,
                  }),
              }),
              c.jsx(o("WAWebFlex.react").FlexRow, {
                align: "center",
                justify: "center",
                xstyle: f.promptCenter,
                children: c.jsx("span", {
                  className:
                    "x1h3rtpe xyi3aci xwf5gio x1p453bz x1suzm8a xhslqc4 x1nxh6w3 x1iorvi4 xjkvuk6 x1g0dm76 xpdmqnj",
                  children: h,
                }),
              }),
              c.jsx("div", {
                className: "x2lah0s x14qfxbe",
                children:
                  m &&
                  c.jsx(r("WDSButton.react"), {
                    Icon: r("WDSIconIcChevronRight.react"),
                    "aria-label": s._(/*BTDS*/ "Next refinement"),
                    onPress: _,
                    size: "small",
                    variant: "outline",
                    xstyle: f.chevronButton,
                  }),
              }),
            ],
          }),
        ],
      });
    }
    m.displayName = m.name + " [from " + i.id + "]";
    var p = 200,
      _ = { transform: "xsqj5wx", $$css: !0 },
      f = {
        carouselContainer: { width: "xh8yej3", $$css: !0 },
        chevronButton: {
          backgroundColor: "x1h3rtpe",
          color: "x14ug900",
          $$css: !0,
        },
        promptCenter: { flexGrow: "x1iyjqo2", $$css: !0 },
        promptRow: {
          boxSizing: "x9f619",
          paddingTop: "x1xrf6ya",
          paddingBottom: "xscbp6u",
          paddingInlineStart: "xdx6fka",
          paddingInlineEnd: "xvtqlqk",
          paddingLeft: null,
          paddingRight: null,
          $$css: !0,
        },
        track: {
          display: "x78zum5",
          transitionDuration: "x1d8287x",
          transitionProperty: "x11xpdln",
          transitionTimingFunction: "xz4gly6",
          width: "xh8yej3",
          $$css: !0,
        },
        trackOffset: function (t) {
          return [
            _,
            {
              "--x-transform":
                "translateX(" + t + "%)" != null
                  ? "translateX(" + t + "%)"
                  : void 0,
            },
          ];
        },
      };
    l.default = m;
  },
  226,
);
