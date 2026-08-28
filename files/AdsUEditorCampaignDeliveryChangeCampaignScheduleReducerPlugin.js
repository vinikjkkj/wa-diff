__d(
  "AdsUEditorCampaignDeliveryChangeCampaignScheduleReducerPlugin",
  [
    "AdsCampaignRecordAccessors",
    "AdsMutators",
    "AdsUEditorCampaignDeliveryChangeCampaignScheduleActionFlux",
    "AdsUEditorCampaignReducerUtils",
    "CTXDaypartingOnAMUtils",
    "immutable",
    "unixTimestampFromDate",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorCampaignReducerUtils").createReducer(
          {},
          function (e, t) {
            return o("AdsMutators").mutateEach(
              e,
              t.campaignIDs,
              function (e, n) {
                var a = e.adset_schedule;
                if (
                  t.adsetSchedule.length === 0 &&
                  a != null &&
                  a.size > 0 &&
                  !o("CTXDaypartingOnAMUtils").isFullDaySchedule(a.toJS()) &&
                  t.pacingType != null &&
                  t.pacingType.some(function (e) {
                    return e === "day_parting";
                  })
                )
                  return e;
                var i = t.adsetSchedule,
                  l = t.timezoneID;
                if (
                  l != null &&
                  o("CTXDaypartingOnAMUtils").isScheduleTrimmingEnabled()
                ) {
                  var s = e.start_time,
                    u = e.end_time;
                  if (i.length > 0 && s != null && u != null) {
                    var c = r("unixTimestampFromDate")(s),
                      d = r("unixTimestampFromDate")(u),
                      m = o("CTXDaypartingOnAMUtils").getCampaignDateRangeDays(
                        c,
                        d,
                        l,
                      );
                    if (m.size < 7) {
                      var p = o(
                        "CTXDaypartingOnAMUtils",
                      ).trimScheduleToCampaignDays(i, m);
                      p != null && p.length > 0 && (i = p);
                    }
                  }
                }
                return o("AdsMutators").chain(
                  r("AdsCampaignRecordAccessors").adset_schedule.set(
                    r("immutable").fromJS(i),
                  ),
                  function (e) {
                    return (e.lifetime_budget != null &&
                      e.lifetime_budget > 0) ||
                      (e.daily_budget != null && e.daily_budget > 0)
                      ? r("AdsCampaignRecordAccessors").pacing_type.set(
                          r("immutable").List(t.pacingType),
                          e,
                        )
                      : e;
                  },
                )(e);
              },
            );
          },
          o("AdsUEditorCampaignDeliveryChangeCampaignScheduleActionFlux")
            .actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
