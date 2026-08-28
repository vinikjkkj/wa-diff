__d(
  "adsTargetFrequencyInAuctionMutationUtils",
  [
    "AdsCampaignRecordAccessors",
    "AdsFrequencyControlEditorConstants",
    "AdsReservationInAuctionConstants",
    "DateTime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      var n = r("DateTime").now(t),
        a = n.addDays(1).startOfDay(),
        i = r("AdsCampaignRecordAccessors").start_time.get(e),
        l = i != null ? r("DateTime").fromISOString(i, t) : null,
        s = e,
        u = l != null && !l.isBefore(a) ? l : a;
      (l == null || l.isBefore(a)) &&
        (s = r("AdsCampaignRecordAccessors").start_time.set(
          a.toDate().toISOString(),
          s,
        ));
      var c = r("AdsCampaignRecordAccessors").end_time.get(s),
        d = c != null ? r("DateTime").fromISOString(c, t) : null;
      return (
        (d == null ||
          d.isBefore(
            u.addDays(
              o("AdsReservationInAuctionConstants")
                .MINIMUM_TARGET_FREQUENCY_IN_AUCTION_CAMPAIGN_DURATION,
            ),
          ) ||
          d.isAfter(
            u.addDays(
              o("AdsFrequencyControlEditorConstants")
                .DEFAULT_MAX_FREQUENCY_RESET_PERIOD,
            ),
          )) &&
          (s = r("AdsCampaignRecordAccessors").end_time.set(
            u
              .addDays(
                o("AdsReservationInAuctionConstants")
                  .DEFAULT_TARGET_FREQUENCY_END_DATE_DURATION,
              )
              .toDate()
              .toISOString(),
            s,
          )),
        s
      );
    }
    l.maybeDefaultScheduleForTargetFrequencyAuction = e;
  },
  98,
);
