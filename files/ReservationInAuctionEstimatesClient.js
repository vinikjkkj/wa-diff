__d(
  "ReservationInAuctionEstimatesClient",
  ["AdsGraphAPI", "promiseDone"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = "reachfrequencypredictions";
    function s(t, n, a) {
      r("promiseDone")(
        o("AdsGraphAPI").get(i.id).adaccount(t.account_id).edge(e).post(t),
        function (e) {
          n(e, t);
        },
        function (e) {
          a(e, t);
        },
      );
    }
    l.callPredictionAPI = s;
  },
  98,
);
