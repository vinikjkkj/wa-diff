__d(
  "WAWebEventV2AddToCalendarUserJourneyWamEvent",
  ["WAWebWamCodegenUtils", "WAWebWamEnumEventV2AddToCalendarEntryPoint"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e = o("WAWebWamCodegenUtils")).defineEvents(
        {
          EventV2AddToCalendarUserJourney: [
            8544,
            {
              actionTs: [1, e.TYPES.TIMER],
              appSessionId: [2, e.TYPES.STRING],
              dedupKey: [6, e.TYPES.INTEGER],
              eventV2AddToCalendarEntryPoint: [
                3,
                o("WAWebWamEnumEventV2AddToCalendarEntryPoint")
                  .EVENT_V2_ADD_TO_CALENDAR_ENTRY_POINT,
              ],
              userJourneyFunnelId: [4, e.TYPES.STRING],
              waEventId: [5, e.TYPES.STRING],
            },
            [1, 1, 1],
            "regular",
          ],
        },
        { EventV2AddToCalendarUserJourney: [] },
      );
    l.EventV2AddToCalendarUserJourneyWamEvent = s;
  },
  98,
);
