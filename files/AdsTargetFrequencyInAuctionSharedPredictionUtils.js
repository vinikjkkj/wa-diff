__d(
  "AdsTargetFrequencyInAuctionSharedPredictionUtils",
  [
    "AdsAPIOptimizationGoals",
    "AdsReservationInAuctionConstants",
    "AdsTargetFrequencyInAuctionUtils",
    "DateTime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = function (t, n) {
        var e = n != null ? n : r("AdsAPIOptimizationGoals").NONE,
          a = [
            [
              r("AdsAPIOptimizationGoals").REACH,
              [
                r("AdsAPIOptimizationGoals").REACH,
                r("AdsAPIOptimizationGoals").IMPRESSIONS,
              ],
            ],
            [
              r("AdsAPIOptimizationGoals").THRUPLAY,
              [r("AdsAPIOptimizationGoals").THRUPLAY],
            ],
          ];
        (o(
          "AdsTargetFrequencyInAuctionUtils",
        ).isEligibleForTargetFrequencyAuctionExpansionGoal(
          r("AdsAPIOptimizationGoals").AD_RECALL_LIFT,
        ) &&
          a.push([
            r("AdsAPIOptimizationGoals").AD_RECALL_LIFT,
            [r("AdsAPIOptimizationGoals").AD_RECALL_LIFT],
          ]),
          o(
            "AdsTargetFrequencyInAuctionUtils",
          ).isEligibleForTargetFrequencyAuctionExpansionGoal(
            r("AdsAPIOptimizationGoals").SIX_SECOND_VIDEO_VIEWS,
          ) &&
            a.push([
              r("AdsAPIOptimizationGoals").SIX_SECOND_VIDEO_VIEWS,
              [r("AdsAPIOptimizationGoals").SIX_SECOND_VIDEO_VIEWS],
            ]));
        var i = new Map(a),
          l = i.get(t);
        return l != null && l.includes(e);
      },
      s = function (t) {
        var e,
          n = (e = t.error_user_msg) != null && e.endsWith(".") ? "" : ".";
        return t.error_user_title + ": " + t.error_user_msg + n;
      },
      u = function (t, n, r, a) {
        return (
          o(
            "AdsTargetFrequencyInAuctionUtils",
          ).isCompatibleWithTargetFrequencyInAuction(t, n, r) && a != null
        );
      };
    function c(e, t) {
      if (e == null) return null;
      var n = r("DateTime").fromDate(e, t.timezone_id),
        o = r("DateTime").now(t.timezone_id),
        a = n.isBefore(o);
      return a ? o.addDays(1).startOfDay().toDate() : null;
    }
    function d(e, t, n) {
      if (
        e == null ||
        t >=
          o("AdsReservationInAuctionConstants")
            .MINIMUM_TARGET_FREQUENCY_IN_AUCTION_CAMPAIGN_DURATION
      )
        return e;
      var a = r("DateTime").fromDate(e, n.timezone_id),
        i = a.addDays(
          o("AdsReservationInAuctionConstants")
            .MINIMUM_TARGET_FREQUENCY_IN_AUCTION_CAMPAIGN_DURATION - t,
        );
      return i.toDate();
    }
    ((l.selectedOptimizationMatchesPrediction = e),
      (l.getTargetFrequencyInAuctionErrorMessage = s),
      (l.isTargetFrequencyInAuction = u),
      (l.getStartOfNextDayIfCampaignStartTimeInPast = c),
      (l.getUpdatedEndDateIfCampaignTooShort = d));
  },
  98,
);
