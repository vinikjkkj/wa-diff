__d(
  "WAWebEventV2DetailsInviteeUserJourneyWamEvent",
  [
    "WAWebWamCodegenUtils",
    "WAWebWamEnumEventV2ErrorType",
    "WAWebWamEnumEventV2InviteeActionType",
    "WAWebWamEnumEventV2InviteeEntryPoint",
    "WAWebWamEnumEventV2InviteeRsvpValue",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e = o("WAWebWamCodegenUtils")).defineEvents(
        {
          EventV2DetailsInviteeUserJourney: [
            8538,
            {
              actionTs: [1, e.TYPES.TIMER],
              appSessionId: [2, e.TYPES.STRING],
              dedupKey: [9, e.TYPES.INTEGER],
              eventV2ErrorType: [
                8,
                o("WAWebWamEnumEventV2ErrorType").EVENT_V2_ERROR_TYPE,
              ],
              eventV2InviteeActionType: [
                3,
                o("WAWebWamEnumEventV2InviteeActionType")
                  .EVENT_V2_INVITEE_ACTION_TYPE,
              ],
              eventV2InviteeEntryPoint: [
                4,
                o("WAWebWamEnumEventV2InviteeEntryPoint")
                  .EVENT_V2_INVITEE_ENTRY_POINT,
              ],
              eventV2InviteeRsvpValue: [
                5,
                o("WAWebWamEnumEventV2InviteeRsvpValue")
                  .EVENT_V2_INVITEE_RSVP_VALUE,
              ],
              userJourneyFunnelId: [6, e.TYPES.STRING],
              waEventId: [7, e.TYPES.STRING],
            },
            [1, 1, 1],
            "regular",
          ],
        },
        { EventV2DetailsInviteeUserJourney: [] },
      );
    l.EventV2DetailsInviteeUserJourneyWamEvent = s;
  },
  98,
);
