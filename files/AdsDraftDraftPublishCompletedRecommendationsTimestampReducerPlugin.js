__d(
  "AdsDraftDraftPublishCompletedRecommendationsTimestampReducerPlugin",
  [
    "AdsAccountStore",
    "AdsMgmtGuidanceEngineRecommendationsLoadingUtils",
    "JSResource",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: function (t, n) {
          var e = r("AdsAccountStore").getSelectedAccountID();
          return (
            e != null &&
              Date.now() - t >=
                o("AdsMgmtGuidanceEngineRecommendationsLoadingUtils")
                  .REFRESH_TIME_FRAME &&
              r("JSResource").loadAll(
                [
                  r("JSResource")(
                    "AdsMgmtGuidanceEngineRecommendationsRefresher",
                  ).__setRef(
                    "AdsDraftDraftPublishCompletedRecommendationsTimestampReducerPlugin",
                  ),
                ],
                function (t) {
                  t(e);
                },
              ),
            Date.now()
          );
        },
      },
      s = e;
    l.default = s;
  },
  98,
);
