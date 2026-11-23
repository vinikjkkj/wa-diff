__d(
  "adsExperimentsPortfolioOptimizerWinnerAnalysis",
  [
    "fbt",
    "AdsCurrencyFormatter",
    "AdsExperimentsPortfolioOptimizerEstimatedResultTooltip.react",
    "GeoBaseText.react",
    "GeoLink.react",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react"));
    function c(e) {
      var t,
        n,
        o = e.campaignAdgroupIDs,
        a = e.primaryRecommendedResult,
        i = e.testAdgroupPrimaryIDs,
        l = new Set(i),
        c =
          o.length > 0 &&
          o.every(function (e) {
            return l.has(e);
          }),
        d =
          (t =
            a == null || (n = a.breakdown) == null
              ? void 0
              : n.creative_combination) != null
            ? t
            : [],
        m = new Set(d),
        p =
          m.size > 0 &&
          i.length > 0 &&
          m.size === i.length &&
          d.every(function (e) {
            return l.has(e);
          }),
        _ =
          d.length > 0 &&
          d.every(function (e) {
            return !l.has(e);
          }),
        f =
          d.length > 0 &&
          i.length > d.length &&
          d.every(function (e) {
            return l.has(e);
          }),
        g = function (t) {
          var e,
            n,
            o = t.campaignEditURI,
            i = t.campaignName,
            l = t.cpaImprovementPercent,
            d = t.currency,
            m = t.objectiveName,
            g =
              o != null
                ? u.jsx(r("GeoLink.react"), {
                    href: o.toString(),
                    target: "_blank",
                    children: i,
                  })
                : i,
            h = l != null ? l + "%" : null,
            y = u.jsx(
              r("AdsExperimentsPortfolioOptimizerEstimatedResultTooltip.react"),
              {},
            ),
            C =
              l != null
                ? u.jsx(r("GeoBaseText.react"), {
                    color: "value",
                    size: "value",
                    weight: "bold",
                    children: s._(/*BTDS*/ "", [
                      s._param("cpaImprovementPercent", h),
                      s._param("objectiveName", m),
                    ]),
                  })
                : null,
            b = r("AdsCurrencyFormatter").formatCurrencyWithOptionalDecimals(
              d,
              ((e = a == null || (n = a.metrics) == null ? void 0 : n.cpa) !=
              null
                ? e
                : 0) * 100,
              !0,
            );
          return _
            ? u.jsxs(u.Fragment, {
                children: [
                  s._(/*BTDS*/ "", [
                    s._param("campaignName", g),
                    s._param("objectiveName", m),
                    s._param("cpa", b),
                  ]),
                  y,
                ],
              })
            : p && c
              ? u.jsxs(u.Fragment, {
                  children: [
                    s._(/*BTDS*/ "", [
                      s._param("campaignName", g),
                      s._param("objectiveName", m),
                      s._param("cpa", b),
                    ]),
                    y,
                  ],
                })
              : l == null || l === 0
                ? u.jsxs(u.Fragment, {
                    children: [
                      s._(/*BTDS*/ "", [
                        s._param("campaignName", g),
                        s._param("objectiveName", m),
                        s._param("cpa", b),
                      ]),
                      y,
                    ],
                  })
                : f && c
                  ? u.jsxs(u.Fragment, {
                      children: [
                        s._(/*BTDS*/ "", [
                          s._param("campaignName", g),
                          s._param("cpaImprovementText", C),
                        ]),
                        y,
                      ],
                    })
                  : u.jsxs(u.Fragment, {
                      children: [
                        s._(/*BTDS*/ "", [
                          s._param("campaignName", g),
                          s._param("cpaImprovementText", C),
                        ]),
                        y,
                      ],
                    });
        },
        h;
      _ || (p && c)
        ? (h = null)
        : f && c
          ? (h = s._(/*BTDS*/ ""))
          : (h = s._(/*BTDS*/ ""));
      var y = (p && c) || _;
      return {
        getComparisonText: g,
        comparisonChipText: h,
        hasTestAdgroupsOnlyInCampaign: c,
        isWinnerAllTestAdgroups: p,
        isWinnerBAUOnly: _,
        isWinnerPartialTestAdgroups: f,
        shouldHideWinningConfidence: y,
      };
    }
    l.default = c;
  },
  226,
);
