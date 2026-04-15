__d(
  "WAWebBusinessBroadcastHomeEmptyState.react",
  [
    "WAWebBizBroadcastHomeCreateAudienceButton.react",
    "WAWebBizBroadcastsHomeStrings",
    "WAWebBusinessBroadcastUserJourneyLogger",
    "WAWebFaqUrl",
    "WAWebFlex.react",
    "WAWebWamEnumSurfaceType",
    "WAWebWdsIllMarketingMessagesIcon.react",
    "WDSButton.react",
    "WDSText.react",
    "WDSTextualLink.react",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = {
        buttonsContainer: {
          rowGap: "x1f0uite",
          columnGap: "xs2akgl",
          $$css: !0,
        },
        content: {
          alignItems: "x6s0dn4",
          rowGap: "xka5s13",
          columnGap: "xeah0mx",
          maxWidth: "x1j9u4d2",
          $$css: !0,
        },
        subtitleContainer: {
          rowGap: "x129bwdz",
          columnGap: "x1trrmfo",
          $$css: !0,
        },
        textContainer: { rowGap: "x1f0uite", columnGap: "xs2akgl", $$css: !0 },
      };
    function c(e) {
      var t = o("react-compiler-runtime").c(19),
        n = e.entryPoint,
        a = e.onCreateAudience,
        i = e.onCreateBroadcast,
        l = e.onUploadSuccess,
        c = e.showFooterButtons,
        d;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((d = o("WAWebFaqUrl").getBusinessBroadcastsLearnMoreUrl()),
          (t[0] = d))
        : (d = t[0]);
      var m = d,
        p;
      t[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((p = { className: "x6s0dn4 x1280gxy x78zum5 x1iyjqo2 xl56j7k" }),
          (t[1] = p))
        : (p = t[1]);
      var _;
      t[2] === Symbol.for("react.memo_cache_sentinel")
        ? ((_ = s.jsx(
            o("WAWebWdsIllMarketingMessagesIcon.react")
              .WdsIllMarketingMessagesIcon,
            { name: "biz-broadcast-home-empty-state-icon" },
          )),
          (t[2] = _))
        : (_ = t[2]);
      var f;
      t[3] === Symbol.for("react.memo_cache_sentinel")
        ? ((f = s.jsx(r("WDSText.react"), {
            type: "Headline1",
            colorName: "contentDefault",
            textAlign: "center",
            testid: void 0,
            children: o("WAWebBizBroadcastsHomeStrings").getEmptyStateTitle(),
          })),
          (t[3] = f))
        : (f = t[3]);
      var g;
      t[4] === Symbol.for("react.memo_cache_sentinel")
        ? ((g = o("WAWebBizBroadcastsHomeStrings").getEmptyStateSubtitle()),
          (t[4] = g))
        : (g = t[4]);
      var h;
      t[5] !== n
        ? ((h = function () {
            o(
              "WAWebBusinessBroadcastUserJourneyLogger",
            ).BusinessBroadcastUserJourneyLogger.homeLearnMoreClicked(n);
          }),
          (t[5] = n),
          (t[6] = h))
        : (h = t[6]);
      var y;
      t[7] === Symbol.for("react.memo_cache_sentinel")
        ? ((y = o(
            "WAWebBizBroadcastsHomeStrings",
          ).getEmptyStateLearnMoreLinkText()),
          (t[7] = y))
        : (y = t[7]);
      var C;
      t[8] !== h
        ? ((C = s.jsxs(o("WAWebFlex.react").FlexColumn, {
            align: "center",
            xstyle: u.textContainer,
            children: [
              f,
              s.jsx(o("WAWebFlex.react").FlexRow, {
                align: "center",
                justify: "center",
                xstyle: u.subtitleContainer,
                children: s.jsxs(r("WDSText.react"), {
                  type: "Body2",
                  colorName: "contentDeemphasized",
                  textAlign: "center",
                  testid: void 0,
                  children: [
                    g,
                    " ",
                    s.jsx(r("WDSTextualLink.react"), {
                      textConfig: "Body2",
                      href: m,
                      onClick: h,
                      children: y,
                    }),
                  ],
                }),
              }),
            ],
          })),
          (t[8] = h),
          (t[9] = C))
        : (C = t[9]);
      var b;
      t[10] !== n || t[11] !== a || t[12] !== i || t[13] !== l || t[14] !== c
        ? ((b =
            c &&
            s.jsx("div", {
              "data-testid": void 0,
              children: s.jsxs(o("WAWebFlex.react").FlexRow, {
                align: "center",
                xstyle: u.buttonsContainer,
                children: [
                  s.jsx(r("WAWebBizBroadcastHomeCreateAudienceButton.react"), {
                    onUploadSuccess: l,
                    onCreateAudience: a,
                    entryPoint: n,
                  }),
                  s.jsx(r("WDSButton.react"), {
                    label: o(
                      "WAWebBizBroadcastsHomeStrings",
                    ).getCreateBroadcastButtonLabel(),
                    onPress: function () {
                      (o(
                        "WAWebBusinessBroadcastUserJourneyLogger",
                      ).BusinessBroadcastUserJourneyLogger.createBroadcastButtonClicked(
                        n,
                        o("WAWebWamEnumSurfaceType").SURFACE_TYPE.BB_HOME,
                        { is_bb_home_empty_state: !0 },
                      ),
                        i());
                    },
                    variant: "filled",
                    size: "medium",
                    testid: void 0,
                  }),
                ],
              }),
            })),
          (t[10] = n),
          (t[11] = a),
          (t[12] = i),
          (t[13] = l),
          (t[14] = c),
          (t[15] = b))
        : (b = t[15]);
      var v;
      return (
        t[16] !== C || t[17] !== b
          ? ((v = s.jsx(
              "div",
              babelHelpers.extends({}, p, {
                children: s.jsxs(o("WAWebFlex.react").FlexColumn, {
                  xstyle: u.content,
                  children: [_, C, b],
                }),
              }),
            )),
            (t[16] = C),
            (t[17] = b),
            (t[18] = v))
          : (v = t[18]),
        v
      );
    }
    l.default = c;
  },
  98,
);
