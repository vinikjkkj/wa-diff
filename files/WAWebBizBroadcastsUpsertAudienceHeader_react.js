__d(
  "WAWebBizBroadcastsUpsertAudienceHeader.react",
  [
    "fbt",
    "WAWebBizBroadcastsAudienceSelectionStrings",
    "WAWebBusinessBroadcastUserJourneyLogger",
    "WAWebFlex.react",
    "WDSButton.react",
    "WDSIconIcArrowBack.react",
    "WDSText.react",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react")),
      c = e.useCallback,
      d = {
        header: {
          backgroundColor: "x1280gxy",
          height: "x1peatla",
          paddingInlineStart: "x1iw51ew",
          paddingInlineEnd: "xde1mab",
          paddingLeft: null,
          paddingRight: null,
          $$css: !0,
        },
      };
    function m(e) {
      var t = e.entryPoint,
        n = e.isEdit,
        a = e.onBack,
        i = c(
          function () {
            (o(
              "WAWebBusinessBroadcastUserJourneyLogger",
            ).BusinessBroadcastUserJourneyLogger.createAudienceBackClicked(t),
              a());
          },
          [t, a],
        );
      return u.jsxs(o("WAWebFlex.react").FlexRow, {
        xstyle: d.header,
        align: "center",
        gap: 12,
        children: [
          u.jsx(r("WDSButton.react"), {
            "aria-label": s._(/*BTDS*/ "Go back"),
            Icon: r("WDSIconIcArrowBack.react"),
            directional: !0,
            onPress: i,
            size: "medium",
            variant: "borderless",
          }),
          u.jsxs(o("WAWebFlex.react").FlexColumn, {
            children: [
              u.jsx(r("WDSText.react"), {
                colorName: "contentDefault",
                type: "Body1",
                testid: void 0,
                children: n
                  ? o(
                      "WAWebBizBroadcastsAudienceSelectionStrings",
                    ).getEditAudienceTitle()
                  : o(
                      "WAWebBizBroadcastsAudienceSelectionStrings",
                    ).getNewAudienceTitle(),
              }),
              u.jsx(r("WDSText.react"), {
                colorName: "contentDeemphasized",
                type: "Body3",
                testid: void 0,
                children: o(
                  "WAWebBizBroadcastsAudienceSelectionStrings",
                ).getNewAudienceSubtitle(),
              }),
            ],
          }),
        ],
      });
    }
    ((m.displayName = m.name + " [from " + i.id + "]"), (l.default = m));
  },
  226,
);
