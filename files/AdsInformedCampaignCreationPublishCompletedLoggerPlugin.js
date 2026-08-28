__d(
  "AdsInformedCampaignCreationPublishCompletedLoggerPlugin",
  ["adsInformedCampaignCreationFetchPublishedPredictions"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        log: function (t) {
          t.isInitialRequestFailure ||
            r("adsInformedCampaignCreationFetchPublishedPredictions")();
        },
      },
      s = e;
    l.default = s;
  },
  98,
);
