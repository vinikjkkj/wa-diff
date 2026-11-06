__d(
  "WAWebSharableEventInviteeUserJourneyLogger",
  [
    "$InternalEnum",
    "WAWebEventV2DetailsInviteeUserJourneyWamEvent",
    "WAWebGetSharedSessionId",
    "WAWebPonyfillsCryptoRandomUUID",
    "WAWebSharableEventPageSource",
    "WAWebSharableEventWamActionTs",
    "WAWebSharableEventWamErrorType",
    "WAWebWamEnumEventV2InviteeActionType",
    "WAWebWamEnumEventV2InviteeEntryPoint",
    "WAWebWamEnumEventV2InviteeRsvpValue",
  ],
  function (t, n, r, o, a, i, l) {
    var e = null,
      s = n("$InternalEnum")({ EventMessage: "event_message" });
    function u(t, n, a) {
      var i;
      ((i = e) == null ? void 0 : i.eventId) !== t &&
        ((e = {
          entryPoint: n == null ? null : b(n),
          eventId: t,
          id: r("WAWebPonyfillsCryptoRandomUUID")(),
          isPreview: a,
        }),
        C(
          t,
          o("WAWebWamEnumEventV2InviteeActionType").EVENT_V2_INVITEE_ACTION_TYPE
            .ENTRY_POINT_STARTED,
        ),
        C(
          t,
          a
            ? o("WAWebWamEnumEventV2InviteeActionType")
                .EVENT_V2_INVITEE_ACTION_TYPE.PREVIEW_PAGE_SHOWN
            : o("WAWebWamEnumEventV2InviteeActionType")
                .EVENT_V2_INVITEE_ACTION_TYPE.DETAIL_PAGE_SHOWN,
        ));
    }
    function c(t) {
      var n = e;
      n == null ||
        n.eventId !== t ||
        (C(
          t,
          n.isPreview
            ? o("WAWebWamEnumEventV2InviteeActionType")
                .EVENT_V2_INVITEE_ACTION_TYPE.PREVIEW_PAGE_DISMISSED
            : o("WAWebWamEnumEventV2InviteeActionType")
                .EVENT_V2_INVITEE_ACTION_TYPE.DETAIL_PAGE_DISMISSED,
        ),
        (e = null));
    }
    function d(e) {
      C(
        e,
        o("WAWebWamEnumEventV2InviteeActionType").EVENT_V2_INVITEE_ACTION_TYPE
          .RSVP_SHEET_SHOWN,
      );
    }
    function m(e) {
      C(
        e,
        o("WAWebWamEnumEventV2InviteeActionType").EVENT_V2_INVITEE_ACTION_TYPE
          .RSVP_SHEET_DISMISSED,
      );
    }
    function p(e, t) {
      C(
        e,
        o("WAWebWamEnumEventV2InviteeActionType").EVENT_V2_INVITEE_ACTION_TYPE
          .RSVP_SHEET_OPTION_TAPPED,
        { rsvpValue: v(t) },
      );
    }
    function _(e, t) {
      C(
        e,
        o("WAWebWamEnumEventV2InviteeActionType").EVENT_V2_INVITEE_ACTION_TYPE
          .RSVP_COMPLETED,
        { rsvpValue: v(t) },
      );
    }
    function f(e, t) {
      C(
        e,
        o("WAWebWamEnumEventV2InviteeActionType").EVENT_V2_INVITEE_ACTION_TYPE
          .RSVP_FAILED,
        {
          errorType: o(
            "WAWebSharableEventWamErrorType",
          ).getSharableEventWamErrorType(t),
        },
      );
    }
    function g(t) {
      var n;
      ((n = e) == null ? void 0 : n.isPreview) === !0 &&
        C(
          t,
          o("WAWebWamEnumEventV2InviteeActionType").EVENT_V2_INVITEE_ACTION_TYPE
            .INVITED_ROW_TAPPED,
        );
    }
    function h(e) {
      (C(
        e,
        o("WAWebWamEnumEventV2InviteeActionType").EVENT_V2_INVITEE_ACTION_TYPE
          .NMORE_ROW_TAPPED,
      ),
        C(
          e,
          o("WAWebWamEnumEventV2InviteeActionType").EVENT_V2_INVITEE_ACTION_TYPE
            .UNKNOWN_GUEST_SHEET_SHOWN,
        ));
    }
    function y(e) {
      C(
        e,
        o("WAWebWamEnumEventV2InviteeActionType").EVENT_V2_INVITEE_ACTION_TYPE
          .UNKNOWN_GUEST_SHEET_DISMISSED,
      );
    }
    function C(t, n, r) {
      var a = e;
      if (!(a == null || a.eventId !== t)) {
        var i = {
          actionTs: o(
            "WAWebSharableEventWamActionTs",
          ).getSharableEventWamActionTs(),
          appSessionId: o("WAWebGetSharedSessionId").getSharedSessionId(),
          eventV2InviteeActionType: n,
          userJourneyFunnelId: a.id,
          waEventId: t,
        };
        (a.entryPoint != null && (i.eventV2InviteeEntryPoint = a.entryPoint),
          (r == null ? void 0 : r.rsvpValue) != null &&
            (i.eventV2InviteeRsvpValue = r.rsvpValue),
          (r == null ? void 0 : r.errorType) != null &&
            (i.eventV2ErrorType = r.errorType),
          new (o(
            "WAWebEventV2DetailsInviteeUserJourneyWamEvent",
          ).EventV2DetailsInviteeUserJourneyWamEvent)(i).commit());
      }
    }
    function b(e) {
      return e ===
        o("WAWebSharableEventPageSource").SharableEventPageSource.EventList
        ? o("WAWebWamEnumEventV2InviteeEntryPoint").EVENT_V2_INVITEE_ENTRY_POINT
            .EVENT_LIST
        : e ===
            o("WAWebSharableEventPageSource").SharableEventPageSource.EventLink
          ? o("WAWebWamEnumEventV2InviteeEntryPoint")
              .EVENT_V2_INVITEE_ENTRY_POINT.EVENT_LINK
          : e ===
              o("WAWebSharableEventPageSource").SharableEventPageSource
                .Notification
            ? o("WAWebWamEnumEventV2InviteeEntryPoint")
                .EVENT_V2_INVITEE_ENTRY_POINT.NOTIFICATION
            : e === s.EventMessage
              ? o("WAWebWamEnumEventV2InviteeEntryPoint")
                  .EVENT_V2_INVITEE_ENTRY_POINT.EVENT_MESSAGE
              : e ===
                    o("WAWebSharableEventPageSource").SharableEventPageSource
                      .EventCreation ||
                  e ===
                    o("WAWebSharableEventPageSource").SharableEventPageSource
                      .EventMessageEdit
                ? null
                : (function () {
                    throw Error(
                      "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                        e,
                    );
                  })();
    }
    function v(e) {
      return e === "going"
        ? o("WAWebWamEnumEventV2InviteeRsvpValue").EVENT_V2_INVITEE_RSVP_VALUE
            .GOING
        : e === "going_with_guest"
          ? o("WAWebWamEnumEventV2InviteeRsvpValue").EVENT_V2_INVITEE_RSVP_VALUE
              .GOING_WITH_GUEST
          : e === "maybe"
            ? o("WAWebWamEnumEventV2InviteeRsvpValue")
                .EVENT_V2_INVITEE_RSVP_VALUE.MAYBE
            : e === "not_going"
              ? o("WAWebWamEnumEventV2InviteeRsvpValue")
                  .EVENT_V2_INVITEE_RSVP_VALUE.NOT_GOING
              : (function () {
                  throw Error(
                    "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                      e,
                  );
                })();
    }
    ((l.SharableEventInviteeSurface = s),
      (l.startSharableEventInviteeJourney = u),
      (l.endSharableEventInviteeJourney = c),
      (l.logSharableEventInviteeRsvpMenuShown = d),
      (l.logSharableEventInviteeRsvpMenuDismissed = m),
      (l.logSharableEventInviteeRsvpOptionTapped = p),
      (l.logSharableEventInviteeRsvpCompleted = _),
      (l.logSharableEventInviteeRsvpFailed = f),
      (l.logSharableEventInviteeInvitedRowTapped = g),
      (l.logSharableEventInviteeHiddenGuestsShown = h),
      (l.logSharableEventInviteeHiddenGuestsDismissed = y));
  },
  98,
);
