__d(
  "AdsCampaignGroupDraftFragmentStore",
  ["AdsBaseDraftFragmentStore", "AdsCampaignGroupDraftFragmentsDataProvider"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function (e) {
        function t() {
          return (
            e.call(
              this,
              r("AdsCampaignGroupDraftFragmentsDataProvider").toFluxStore(),
            ) || this
          );
        }
        return (babelHelpers.inheritsLoose(t, e), t);
      })(r("AdsBaseDraftFragmentStore")),
      s = new e();
    l.default = s;
  },
  98,
);
