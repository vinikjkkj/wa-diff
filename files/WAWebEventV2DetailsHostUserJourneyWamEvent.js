__d(
  "WAWebEventV2DetailsHostUserJourneyWamEvent",
  [
    "WAWebWamCodegenUtils",
    "WAWebWamEnumEventV2ErrorType",
    "WAWebWamEnumEventV2HostActionType",
    "WAWebWamEnumEventV2HostEntryPoint",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e = o("WAWebWamCodegenUtils")).defineEvents(
        {
          EventV2DetailsHostUserJourney: [
            8546,
            {
              actionTs: [1, e.TYPES.TIMER],
              appSessionId: [2, e.TYPES.STRING],
              dedupKey: [9, e.TYPES.INTEGER],
              eventV2ErrorType: [
                8,
                o("WAWebWamEnumEventV2ErrorType").EVENT_V2_ERROR_TYPE,
              ],
              eventV2HostActionType: [
                3,
                o("WAWebWamEnumEventV2HostActionType")
                  .EVENT_V2_HOST_ACTION_TYPE,
              ],
              eventV2HostEntryPoint: [
                4,
                o("WAWebWamEnumEventV2HostEntryPoint")
                  .EVENT_V2_HOST_ENTRY_POINT,
              ],
              eventV2HostUpdatedFields: [5, e.TYPES.STRING],
              userJourneyFunnelId: [6, e.TYPES.STRING],
              waEventId: [7, e.TYPES.STRING],
            },
            [1, 1, 1],
            "regular",
          ],
        },
        { EventV2DetailsHostUserJourney: [] },
      );
    l.EventV2DetailsHostUserJourneyWamEvent = s;
  },
  98,
);
