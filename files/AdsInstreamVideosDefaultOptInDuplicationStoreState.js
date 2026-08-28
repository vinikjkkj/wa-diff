__d(
  "AdsInstreamVideosDefaultOptInDuplicationStoreState",
  ["immutable"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = (function (e) {
        function t() {
          return e.apply(this, arguments) || this;
        }
        return (babelHelpers.inheritsLoose(t, e), t);
      })(
        (e = r("immutable")).Record({
          copyCompletedCampaignIDs: e.Set(),
          defaultOptedInCampaignIDs: e.Map(),
          defaultOptedInCampaignGroupIDs: e.Set(),
        }),
      );
    l.default = s;
  },
  98,
);
