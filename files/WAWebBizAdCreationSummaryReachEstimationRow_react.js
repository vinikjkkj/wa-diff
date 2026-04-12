__d(
  "WAWebBizAdCreationSummaryReachEstimationRow.react",
  [
    "fbt",
    "WAWebBizAdCreationConfigContext",
    "WAWebBizAdCreationEUCountryUtils",
    "WAWebBizAdCreationSummaryLineItem.react",
    "WAWebBizAdCreationSummaryReachEstimationInfoModal.react",
    "WAWebModalManager",
    "WDSButton.react",
    "WDSIconIcInfo.react",
    "react",
    "useWAWebEstimatedDailyReach",
    "withWAWebBizAdCreationSpecContext",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react")),
      c = e.useContext;
    function d(e) {
      var t = e.audienceOption,
        n = e.currency,
        a = e.dailyBudget,
        i = e.legacyAdAccountID,
        l = e.selectedPublisherPlatforms,
        d = e.targetingSpec,
        m = c(r("WAWebBizAdCreationConfigContext")),
        _ = m != null ? m : {},
        f = _.flow,
        g = _.flowID,
        h = _.pageID,
        y = _.product,
        C = {
          objective: o("WAWebBizAdCreationEUCountryUtils").getAdObjective(d),
          page_id: h,
          product: y != null ? y : "BOOSTED_MESSAGE",
        },
        b = r("useWAWebEstimatedDailyReach")({
          legacyAdAccountID: i,
          targetingSpecAudience: JSON.stringify(d),
          optimizationGoalInput: C,
          audienceOptionAudience: t,
          selectedPublisherPlatforms: l,
          currency: n,
          postID: null,
          flowID: g,
          flow: f,
          dailyBudget: a,
        }),
        v = function () {
          o("WAWebModalManager").ModalManager.open(
            u.jsx(
              r("WAWebBizAdCreationSummaryReachEstimationInfoModal.react"),
              {},
            ),
          );
        },
        S = u.jsx(r("WDSButton.react"), {
          Icon: p,
          variant: "borderless",
          size: "small",
          onPress: v,
        });
      return u.jsx(r("WAWebBizAdCreationSummaryLineItem.react"), {
        label: s._(/*BTDS*/ "Estimated daily impressions"),
        labelAccessory: S,
        value: b,
      });
    }
    d.displayName = d.name + " [from " + i.id + "]";
    var m = r("withWAWebBizAdCreationSpecContext")(d, function (e) {
      return {
        audienceOption: e.audienceData.audienceOption,
        dailyBudget: e.budgetData.budget,
        currency: e.adAccountData.currency,
        legacyAdAccountID: e.adAccountData.legacyAccountID,
        selectedPublisherPlatforms: e.placementData.selectedPublisherPlatforms,
        targetingSpec: e.audienceData.targetSpec,
      };
    });
    function p() {
      return u.jsx(r("WDSIconIcInfo.react"), {
        height: 20,
        width: 20,
        colorName: "contentDeemphasized",
      });
    }
    ((p.displayName = p.name + " [from " + i.id + "]"), (l.default = m));
  },
  226,
);
