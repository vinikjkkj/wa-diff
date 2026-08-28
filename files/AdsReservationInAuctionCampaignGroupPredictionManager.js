__d(
  "AdsReservationInAuctionCampaignGroupPredictionManager",
  ["ReservationInAuctionEstimatesClient"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      if (e == null) throw new TypeError("Cannot destructure " + e);
    }
    var s = 1e3,
      u = 2e3,
      c = (function () {
        function t() {
          this.$1 = new Map();
        }
        var n = t.prototype;
        return (
          (n.predictTargetFrequencyInAuction = function (t, n, r, o, a) {
            var e = this;
            a === void 0 && (a = "cg_direct");
            var i = this.$1.get(t);
            i && window.clearTimeout(i);
            var l = a === "campaign_data" ? u : s,
              c = window.setTimeout(function () {
                return e.$2(t, n, r, o);
              }, l);
            this.$1.set(t, c);
          }),
          (n.$2 = function (n, r, a, i) {
            this.$1.set(n, null);
            var t = babelHelpers.extends({}, (e(r), r)),
              l = t;
            o("ReservationInAuctionEstimatesClient").callPredictionAPI(
              l,
              function (e) {
                return a(e, r);
              },
              function (e) {
                return i(e, r);
              },
            );
          }),
          t
        );
      })(),
      d = new c();
    l.default = d;
  },
  98,
);
