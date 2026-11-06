__d(
  "WAWebEventV2ListUserJourneyWamEvent",
  [
    "WAWebWamCodegenUtils",
    "WAWebWamEnumEventV2ErrorType",
    "WAWebWamEnumEventV2ListActionType",
    "WAWebWamEnumEventV2ListEntryPoint",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e = o("WAWebWamCodegenUtils")).defineEvents(
        {
          EventV2ListUserJourney: [
            8540,
            {
              actionTs: [1, e.TYPES.TIMER],
              appSessionId: [2, e.TYPES.STRING],
              dedupKey: [8, e.TYPES.INTEGER],
              eventV2ErrorType: [
                7,
                o("WAWebWamEnumEventV2ErrorType").EVENT_V2_ERROR_TYPE,
              ],
              eventV2ListActionType: [
                3,
                o("WAWebWamEnumEventV2ListActionType")
                  .EVENT_V2_LIST_ACTION_TYPE,
              ],
              eventV2ListEntryPoint: [
                4,
                o("WAWebWamEnumEventV2ListEntryPoint")
                  .EVENT_V2_LIST_ENTRY_POINT,
              ],
              eventV2ListIsNullState: [5, e.TYPES.BOOLEAN],
              userJourneyFunnelId: [6, e.TYPES.STRING],
            },
            [1, 1, 1],
            "regular",
          ],
        },
        { EventV2ListUserJourney: [] },
      );
    l.EventV2ListUserJourneyWamEvent = s;
  },
  98,
);
