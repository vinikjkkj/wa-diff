__d(
  "WAWebSharableEventAddToCalendarUserJourneyLogger",
  [
    "WAWebEventV2AddToCalendarUserJourneyWamEvent",
    "WAWebGetSharedSessionId",
    "WAWebPonyfillsCryptoRandomUUID",
    "WAWebSharableEventGatingUtils",
    "WAWebSharableEventWamActionTs",
    "WAWebWamEnumEventV2AddToCalendarEntryPoint",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      e !== "" &&
        new (o(
          "WAWebEventV2AddToCalendarUserJourneyWamEvent",
        ).EventV2AddToCalendarUserJourneyWamEvent)({
          actionTs: o(
            "WAWebSharableEventWamActionTs",
          ).getSharableEventWamActionTs(),
          appSessionId: o("WAWebGetSharedSessionId").getSharedSessionId(),
          eventV2AddToCalendarEntryPoint: s(t),
          userJourneyFunnelId: r("WAWebPonyfillsCryptoRandomUUID")(),
          waEventId: e,
        }).commit();
    }
    function s(e) {
      return e ===
        o("WAWebSharableEventGatingUtils").SharableEventAddToCalendarEntryPoint
          .MessageBubble
        ? o("WAWebWamEnumEventV2AddToCalendarEntryPoint")
            .EVENT_V2_ADD_TO_CALENDAR_ENTRY_POINT.EVENT_MESSAGE_CTA
        : e ===
            o("WAWebSharableEventGatingUtils")
              .SharableEventAddToCalendarEntryPoint.MessageContextMenu
          ? o("WAWebWamEnumEventV2AddToCalendarEntryPoint")
              .EVENT_V2_ADD_TO_CALENDAR_ENTRY_POINT.EVENT_MESSAGE_CONTEXT_MENU
          : e ===
              o("WAWebSharableEventGatingUtils")
                .SharableEventAddToCalendarEntryPoint.EventDetails
            ? o("WAWebWamEnumEventV2AddToCalendarEntryPoint")
                .EVENT_V2_ADD_TO_CALENDAR_ENTRY_POINT.EVENT_DETAILS
            : e ===
                o("WAWebSharableEventGatingUtils")
                  .SharableEventAddToCalendarEntryPoint.RsvpConfirmation
              ? o("WAWebWamEnumEventV2AddToCalendarEntryPoint")
                  .EVENT_V2_ADD_TO_CALENDAR_ENTRY_POINT
                  .RSVP_SUCCESS_BOTTOM_SHEET
              : (function () {
                  throw Error(
                    "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                      e,
                  );
                })();
    }
    l.logSharableEventAddedToCalendar = e;
  },
  98,
);
