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
    "react-compiler-runtime",
    "useWAWebEstimatedDailyReach",
    "withWAWebBizAdCreationSpecContext",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react")),
      c = e.useContext;
    function d(e) {
      var t = o("react-compiler-runtime").c(24),
        n = e.audienceOption,
        a = e.currency,
        i = e.dailyBudget,
        l = e.legacyAdAccountID,
        d = e.selectedPublisherPlatforms,
        p = e.targetingSpec,
        f = c(r("WAWebBizAdCreationConfigContext")),
        g;
      t[0] !== f
        ? ((g = f != null ? f : {}), (t[0] = f), (t[1] = g))
        : (g = t[1]);
      var h = g,
        y = h.flow,
        C = h.flowID,
        b = h.pageID,
        v = h.product,
        S;
      t[2] !== p
        ? ((S = o("WAWebBizAdCreationEUCountryUtils").getAdObjective(p)),
          (t[2] = p),
          (t[3] = S))
        : (S = t[3]);
      var R = v != null ? v : "BOOSTED_MESSAGE",
        L;
      t[4] !== b || t[5] !== S || t[6] !== R
        ? ((L = { objective: S, page_id: b, product: R }),
          (t[4] = b),
          (t[5] = S),
          (t[6] = R),
          (t[7] = L))
        : (L = t[7]);
      var E = L,
        k;
      t[8] !== p
        ? ((k = JSON.stringify(p)), (t[8] = p), (t[9] = k))
        : (k = t[9]);
      var I;
      t[10] !== n ||
      t[11] !== a ||
      t[12] !== i ||
      t[13] !== y ||
      t[14] !== C ||
      t[15] !== l ||
      t[16] !== E ||
      t[17] !== d ||
      t[18] !== k
        ? ((I = {
            legacyAdAccountID: l,
            targetingSpecAudience: k,
            optimizationGoalInput: E,
            audienceOptionAudience: n,
            selectedPublisherPlatforms: d,
            currency: a,
            postID: null,
            flowID: C,
            flow: y,
            dailyBudget: i,
          }),
          (t[10] = n),
          (t[11] = a),
          (t[12] = i),
          (t[13] = y),
          (t[14] = C),
          (t[15] = l),
          (t[16] = E),
          (t[17] = d),
          (t[18] = k),
          (t[19] = I))
        : (I = t[19]);
      var T = r("useWAWebEstimatedDailyReach")(I),
        D = m,
        x;
      t[20] === Symbol.for("react.memo_cache_sentinel")
        ? ((x = u.jsx(r("WDSButton.react"), {
            Icon: _,
            variant: "borderless",
            size: "small",
            onPress: D,
          })),
          (t[20] = x))
        : (x = t[20]);
      var $ = x,
        P;
      t[21] === Symbol.for("react.memo_cache_sentinel")
        ? ((P = s._(/*BTDS*/ "Estimated daily impressions")), (t[21] = P))
        : (P = t[21]);
      var N;
      return (
        t[22] !== T
          ? ((N = u.jsx(r("WAWebBizAdCreationSummaryLineItem.react"), {
              label: P,
              labelAccessory: $,
              value: T,
            })),
            (t[22] = T),
            (t[23] = N))
          : (N = t[23]),
        N
      );
    }
    function m() {
      o("WAWebModalManager").ModalManager.open(
        u.jsx(r("WAWebBizAdCreationSummaryReachEstimationInfoModal.react"), {}),
      );
    }
    var p = r("withWAWebBizAdCreationSpecContext")(d, function (e) {
      return {
        audienceOption: e.audienceData.audienceOption,
        dailyBudget: e.budgetData.budget,
        currency: e.adAccountData.currency,
        legacyAdAccountID: e.adAccountData.legacyAccountID,
        selectedPublisherPlatforms: e.placementData.selectedPublisherPlatforms,
        targetingSpec: e.audienceData.targetSpec,
      };
    });
    function _() {
      return u.jsx(r("WDSIconIcInfo.react"), {
        height: 20,
        width: 20,
        colorName: "contentDeemphasized",
      });
    }
    ((_.displayName = _.name + " [from " + i.id + "]"), (l.default = p));
  },
  226,
);
