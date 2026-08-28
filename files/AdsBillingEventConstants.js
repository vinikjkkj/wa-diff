__d(
  "AdsBillingEventConstants",
  ["AdsAPIBillingEvents", "AdsBuyingTypes"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = new Map([
        [
          r("AdsBuyingTypes").AUCTION,
          [
            (e = r("AdsAPIBillingEvents")).IMPRESSIONS,
            e.LINK_CLICKS,
            e.APP_INSTALLS,
            e.PAGE_LIKES,
            e.POST_ENGAGEMENT,
            e.VIDEO_VIEWS,
            e.TWO_SECOND_CONTINUOUS_VIDEO_VIEWS,
            e.THRUPLAY,
            e.COMPLETED_VIDEO_VIEWS,
            e.SIX_SECOND_VIDEO_VIEWS,
          ],
        ],
        [r("AdsBuyingTypes").FIXED_PRICE, [e.IMPRESSIONS]],
        [r("AdsBuyingTypes").FIXED_PRICE, [e.IMPRESSIONS]],
      ]);
    l.VALID_EVENTS_BY_BUYING_TYPE = s;
  },
  98,
);
