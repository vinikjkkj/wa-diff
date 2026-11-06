__d(
  "WAWebEventV2CreationUserJourneyWamEvent",
  [
    "WAWebWamCodegenUtils",
    "WAWebWamEnumEventV2CreationActionType",
    "WAWebWamEnumEventV2CreationEntryPoint",
    "WAWebWamEnumEventV2ErrorType",
    "WAWebWamEnumGroupTypeClient",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e = o("WAWebWamCodegenUtils")).defineEvents(
        {
          EventV2CreationUserJourney: [
            8514,
            {
              actionTs: [1, e.TYPES.TIMER],
              appSessionId: [2, e.TYPES.STRING],
              dedupKey: [14, e.TYPES.INTEGER],
              eventV2CreationActionType: [
                3,
                o("WAWebWamEnumEventV2CreationActionType")
                  .EVENT_V2_CREATION_ACTION_TYPE,
              ],
              eventV2CreationEntryPoint: [
                4,
                o("WAWebWamEnumEventV2CreationEntryPoint")
                  .EVENT_V2_CREATION_ENTRY_POINT,
              ],
              eventV2CreationFilledFields: [5, e.TYPES.STRING],
              eventV2CreationIsFrom1x1Chat: [6, e.TYPES.BOOLEAN],
              eventV2CreationIsFromGroupChat: [7, e.TYPES.BOOLEAN],
              eventV2ErrorType: [
                13,
                o("WAWebWamEnumEventV2ErrorType").EVENT_V2_ERROR_TYPE,
              ],
              groupSize: [8, e.TYPES.INTEGER],
              groupTypeClient: [
                9,
                o("WAWebWamEnumGroupTypeClient").GROUP_TYPE_CLIENT,
              ],
              threadId: [10, e.TYPES.STRING],
              userJourneyFunnelId: [11, e.TYPES.STRING],
              waEventId: [12, e.TYPES.STRING],
            },
            [1, 1, 1],
            "regular",
          ],
        },
        { EventV2CreationUserJourney: [] },
      );
    l.EventV2CreationUserJourneyWamEvent = s;
  },
  98,
);
