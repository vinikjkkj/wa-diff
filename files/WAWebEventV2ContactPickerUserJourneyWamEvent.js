__d(
  "WAWebEventV2ContactPickerUserJourneyWamEvent",
  [
    "WAWebWamCodegenUtils",
    "WAWebWamEnumEventV2ContactPickerActionType",
    "WAWebWamEnumEventV2ContactPickerEntryPoint",
    "WAWebWamEnumEventV2ErrorType",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e = o("WAWebWamCodegenUtils")).defineEvents(
        {
          EventV2ContactPickerUserJourney: [
            8556,
            {
              actionTs: [1, e.TYPES.TIMER],
              appSessionId: [2, e.TYPES.STRING],
              dedupKey: [10, e.TYPES.INTEGER],
              eventV2ContactPickerActionType: [
                3,
                o("WAWebWamEnumEventV2ContactPickerActionType")
                  .EVENT_V2_CONTACT_PICKER_ACTION_TYPE,
              ],
              eventV2ContactPickerEntryPoint: [
                4,
                o("WAWebWamEnumEventV2ContactPickerEntryPoint")
                  .EVENT_V2_CONTACT_PICKER_ENTRY_POINT,
              ],
              eventV2ContactPickerNonWaUserCount: [5, e.TYPES.INTEGER],
              eventV2ContactPickerWaUserCount: [6, e.TYPES.INTEGER],
              eventV2ErrorType: [
                9,
                o("WAWebWamEnumEventV2ErrorType").EVENT_V2_ERROR_TYPE,
              ],
              userJourneyFunnelId: [7, e.TYPES.STRING],
              waEventId: [8, e.TYPES.STRING],
            },
            [1, 1, 1],
            "regular",
          ],
        },
        { EventV2ContactPickerUserJourney: [] },
      );
    l.EventV2ContactPickerUserJourneyWamEvent = s;
  },
  98,
);
