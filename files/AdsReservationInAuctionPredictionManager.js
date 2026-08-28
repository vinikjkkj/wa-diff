__d(
  "AdsReservationInAuctionPredictionManager",
  ["AdsReservationInAuctionConstants", "ReservationInAuctionEstimatesClient"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function () {
        function e() {
          this.$1 = new Map();
        }
        var t = e.prototype;
        return (
          (t.predictTargetFrequencyInAuction = function (t, n, r, a) {
            var e = this,
              i = this.$1.get(t);
            (i && window.clearTimeout(i),
              (i = window.setTimeout(function () {
                return e.$2(t, n, r, a);
              }, o("AdsReservationInAuctionConstants").TARGET_FREQUENCY_IN_AUCTION_DELAY)),
              this.$1.set(t, i));
          }),
          (t.$2 = function (t, n, r, a) {
            (this.$1.set(t, null),
              o("ReservationInAuctionEstimatesClient").callPredictionAPI(
                n,
                r,
                a,
              ));
          }),
          e
        );
      })(),
      s = new e();
    l.default = s;
  },
  98,
);
