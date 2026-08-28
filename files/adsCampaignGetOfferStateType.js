__d(
  "adsCampaignGetOfferStateType",
  ["AdsOfferState", "isTruthy"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t,
        n = (t = e.promoted_object) == null ? void 0 : t.offer_id;
      return r("isTruthy")(n)
        ? r("AdsOfferState").HAS_OFFER
        : r("AdsOfferState").NO_OFFER;
    }
    l.default = e;
  },
  98,
);
