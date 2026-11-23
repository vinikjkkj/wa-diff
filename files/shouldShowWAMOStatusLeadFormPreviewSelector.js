__d(
  "shouldShowWAMOStatusLeadFormPreviewSelector",
  [
    "AdsUEditorCampaignSelectors",
    "WAMOStatusAdsManagerUtils",
    "adsChooseSelector",
    "adsCreateSelector",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("adsCreateSelector")(
        [o("AdsUEditorCampaignSelectors").eligibilityInformationArray],
        function (t) {
          return o(
            "WAMOStatusAdsManagerUtils",
          ).shouldShowWAMOStatusLeadFormPreview(
            t.map(function (e) {
              return e.spec;
            }),
          );
        },
        { name: i.id + ".shouldShowWAMOStatusLeadFormPreviewSelector" },
      ),
      s = r("adsChooseSelector")(
        function () {
          return o(
            "WAMOStatusAdsManagerUtils",
          ).isAdAccountEligibleForLeadGenExpansion();
        },
        e,
        r("adsCreateSelector")(
          [],
          function () {
            return !1;
          },
          { name: i.id },
        ),
        !0,
        i.id + ".shouldShowWAMOStatusLeadFormPreviewSelectorGated",
      ),
      u = s;
    l.default = u;
  },
  98,
);
