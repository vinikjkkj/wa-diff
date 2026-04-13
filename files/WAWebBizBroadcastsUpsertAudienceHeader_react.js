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
    "react-compiler-runtime",
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
      var t = o("react-compiler-runtime").c(16),
        n = e.entryPoint,
        a = e.isEdit,
        i = e.onBack,
        l;
      t[0] !== n || t[1] !== i
        ? ((l = function () {
            (o(
              "WAWebBusinessBroadcastUserJourneyLogger",
            ).BusinessBroadcastUserJourneyLogger.createAudienceBackClicked(n),
              i());
          }),
          (t[0] = n),
          (t[1] = i),
          (t[2] = l))
        : (l = t[2]);
      var c = l,
        m;
      t[3] === Symbol.for("react.memo_cache_sentinel")
        ? ((m = s._(/*BTDS*/ "Go back")), (t[3] = m))
        : (m = t[3]);
      var p;
      t[4] !== c
        ? ((p = u.jsx(r("WDSButton.react"), {
            "aria-label": m,
            Icon: r("WDSIconIcArrowBack.react"),
            directional: !0,
            onPress: c,
            size: "medium",
            variant: "borderless",
          })),
          (t[4] = c),
          (t[5] = p))
        : (p = t[5]);
      var _;
      t[6] !== a
        ? ((_ = a
            ? o(
                "WAWebBizBroadcastsAudienceSelectionStrings",
              ).getEditAudienceTitle()
            : o(
                "WAWebBizBroadcastsAudienceSelectionStrings",
              ).getNewAudienceTitle()),
          (t[6] = a),
          (t[7] = _))
        : (_ = t[7]);
      var f;
      t[8] !== _
        ? ((f = u.jsx(r("WDSText.react"), {
            colorName: "contentDefault",
            type: "Body1",
            testid: void 0,
            children: _,
          })),
          (t[8] = _),
          (t[9] = f))
        : (f = t[9]);
      var g;
      t[10] === Symbol.for("react.memo_cache_sentinel")
        ? ((g = u.jsx(r("WDSText.react"), {
            colorName: "contentDeemphasized",
            type: "Body3",
            testid: void 0,
            children: o(
              "WAWebBizBroadcastsAudienceSelectionStrings",
            ).getNewAudienceSubtitle(),
          })),
          (t[10] = g))
        : (g = t[10]);
      var h;
      t[11] !== f
        ? ((h = u.jsxs(o("WAWebFlex.react").FlexColumn, { children: [f, g] })),
          (t[11] = f),
          (t[12] = h))
        : (h = t[12]);
      var y;
      return (
        t[13] !== p || t[14] !== h
          ? ((y = u.jsxs(o("WAWebFlex.react").FlexRow, {
              xstyle: d.header,
              align: "center",
              gap: 12,
              children: [p, h],
            })),
            (t[13] = p),
            (t[14] = h),
            (t[15] = y))
          : (y = t[15]),
        y
      );
    }
    l.default = m;
  },
  226,
);
