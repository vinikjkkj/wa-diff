__d(
  "WAWebSharableEventHostUserJourneyLogger",
  [
    "WAWebEventV2DetailsHostUserJourneyWamEvent",
    "WAWebGetSharedSessionId",
    "WAWebPonyfillsCryptoRandomUUID",
    "WAWebSharableEventPageSource",
    "WAWebSharableEventWamActionTs",
    "WAWebSharableEventWamErrorType",
    "WAWebWamEnumEventV2HostActionType",
    "WAWebWamEnumEventV2HostEntryPoint",
  ],
  function (t, n, r, o, a, i, l) {
    var e = null;
    function s(t, n) {
      var a;
      ((a = e) == null ? void 0 : a.eventId) !== t &&
        ((e = {
          entryPoint: n == null ? null : k(n),
          eventId: t,
          hasPageGone: !1,
          id: r("WAWebPonyfillsCryptoRandomUUID")(),
          isDeleting: !1,
          isEditing: !1,
        }),
        E(
          t,
          o("WAWebWamEnumEventV2HostActionType").EVENT_V2_HOST_ACTION_TYPE
            .ENTRY_POINT_STARTED,
        ),
        E(
          t,
          o("WAWebWamEnumEventV2HostActionType").EVENT_V2_HOST_ACTION_TYPE
            .DETAIL_PAGE_SHOWN,
        ));
    }
    function u(t) {
      var n = e;
      if (!(n == null || n.eventId !== t)) {
        if ((m(t), n.isDeleting)) {
          n.hasPageGone = !0;
          return;
        }
        (E(
          t,
          o("WAWebWamEnumEventV2HostActionType").EVENT_V2_HOST_ACTION_TYPE
            .DETAIL_PAGE_DISMISSED,
        ),
          (e = null));
      }
    }
    function c(e) {
      E(
        e,
        o("WAWebWamEnumEventV2HostActionType").EVENT_V2_HOST_ACTION_TYPE
          .EDIT_TAPPED,
      );
    }
    function d(t) {
      var n = e;
      n == null ||
        n.eventId !== t ||
        n.isEditing ||
        ((n.isEditing = !0),
        E(
          t,
          o("WAWebWamEnumEventV2HostActionType").EVENT_V2_HOST_ACTION_TYPE
            .EDIT_PAGE_SHOW,
        ));
    }
    function m(t) {
      var n = e;
      n == null ||
        n.eventId !== t ||
        !n.isEditing ||
        ((n.isEditing = !1),
        E(
          t,
          o("WAWebWamEnumEventV2HostActionType").EVENT_V2_HOST_ACTION_TYPE
            .EDIT_PAGE_DISMISSED,
        ));
    }
    function p(e) {
      E(
        e,
        o("WAWebWamEnumEventV2HostActionType").EVENT_V2_HOST_ACTION_TYPE
          .EDIT_CANCELED,
      );
    }
    function _(e) {
      E(
        e,
        o("WAWebWamEnumEventV2HostActionType").EVENT_V2_HOST_ACTION_TYPE
          .EDIT_SUBMITTED,
      );
    }
    function f(e, t) {
      E(
        e,
        o("WAWebWamEnumEventV2HostActionType").EVENT_V2_HOST_ACTION_TYPE
          .EDIT_COMPLETED,
        { updatedFields: t },
      );
    }
    function g(e, t) {
      E(
        e,
        o("WAWebWamEnumEventV2HostActionType").EVENT_V2_HOST_ACTION_TYPE
          .EDIT_FAILED,
        {
          errorType: o(
            "WAWebSharableEventWamErrorType",
          ).getSharableEventWamErrorType(t),
        },
      );
    }
    function h(e) {
      E(
        e,
        o("WAWebWamEnumEventV2HostActionType").EVENT_V2_HOST_ACTION_TYPE
          .GUEST_LIST_VIEWED,
      );
    }
    function y(e) {
      E(
        e,
        o("WAWebWamEnumEventV2HostActionType").EVENT_V2_HOST_ACTION_TYPE
          .DELETE_INVITEE_TAPPED,
      );
    }
    function C(e) {
      E(
        e,
        o("WAWebWamEnumEventV2HostActionType").EVENT_V2_HOST_ACTION_TYPE
          .DELETE_INVITEE_COMPLETED,
      );
    }
    function b(e, t) {
      E(
        e,
        o("WAWebWamEnumEventV2HostActionType").EVENT_V2_HOST_ACTION_TYPE
          .DELETE_INVITEE_FAILED,
        {
          errorType: o(
            "WAWebSharableEventWamErrorType",
          ).getSharableEventWamErrorType(t),
        },
      );
    }
    function v(t) {
      var n = e;
      n == null ||
        n.eventId !== t ||
        ((n.isDeleting = !0),
        E(
          t,
          o("WAWebWamEnumEventV2HostActionType").EVENT_V2_HOST_ACTION_TYPE
            .DELETE_EVENT_TAPPED,
        ));
    }
    function S(e) {
      (E(
        e,
        o("WAWebWamEnumEventV2HostActionType").EVENT_V2_HOST_ACTION_TYPE
          .DELETE_EVENT_COMPLETED,
      ),
        L(e));
    }
    function R(e, t) {
      (E(
        e,
        o("WAWebWamEnumEventV2HostActionType").EVENT_V2_HOST_ACTION_TYPE
          .DELETE_EVENT_FAILED,
        {
          errorType: o(
            "WAWebSharableEventWamErrorType",
          ).getSharableEventWamErrorType(t),
        },
      ),
        L(e));
    }
    function L(t) {
      var n = e;
      n == null ||
        n.eventId !== t ||
        ((n.isDeleting = !1), n.hasPageGone && u(t));
    }
    function E(t, n, r) {
      var a = e;
      if (!(a == null || a.eventId !== t)) {
        var i = {
          actionTs: o(
            "WAWebSharableEventWamActionTs",
          ).getSharableEventWamActionTs(),
          appSessionId: o("WAWebGetSharedSessionId").getSharedSessionId(),
          eventV2HostActionType: n,
          userJourneyFunnelId: a.id,
          waEventId: t,
        };
        (a.entryPoint != null && (i.eventV2HostEntryPoint = a.entryPoint),
          (r == null ? void 0 : r.updatedFields) != null &&
            r.updatedFields !== "" &&
            (i.eventV2HostUpdatedFields = r.updatedFields),
          (r == null ? void 0 : r.errorType) != null &&
            (i.eventV2ErrorType = r.errorType),
          new (o(
            "WAWebEventV2DetailsHostUserJourneyWamEvent",
          ).EventV2DetailsHostUserJourneyWamEvent)(i).commit());
      }
    }
    function k(e) {
      return e ===
        o("WAWebSharableEventPageSource").SharableEventPageSource.EventList
        ? o("WAWebWamEnumEventV2HostEntryPoint").EVENT_V2_HOST_ENTRY_POINT
            .EVENT_LIST
        : e ===
            o("WAWebSharableEventPageSource").SharableEventPageSource
              .EventCreation
          ? o("WAWebWamEnumEventV2HostEntryPoint").EVENT_V2_HOST_ENTRY_POINT
              .EVENT_CREATION
          : e ===
              o("WAWebSharableEventPageSource").SharableEventPageSource
                .EventLink
            ? o("WAWebWamEnumEventV2HostEntryPoint").EVENT_V2_HOST_ENTRY_POINT
                .EVENT_LINK
            : e ===
                o("WAWebSharableEventPageSource").SharableEventPageSource
                  .Notification
              ? o("WAWebWamEnumEventV2HostEntryPoint").EVENT_V2_HOST_ENTRY_POINT
                  .NOTIFICATION
              : e ===
                  o("WAWebSharableEventPageSource").SharableEventPageSource
                    .EventMessageEdit
                ? o("WAWebWamEnumEventV2HostEntryPoint")
                    .EVENT_V2_HOST_ENTRY_POINT.EVENT_MESSAGE_EDIT_CTA
                : (function () {
                    throw Error(
                      "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                        e,
                    );
                  })();
    }
    ((l.startSharableEventHostJourney = s),
      (l.endSharableEventHostJourney = u),
      (l.logSharableEventHostEditTapped = c),
      (l.logSharableEventHostEditStarted = d),
      (l.logSharableEventHostEditEnded = m),
      (l.logSharableEventHostEditCanceled = p),
      (l.logSharableEventHostEditSubmitted = _),
      (l.logSharableEventHostEditCompleted = f),
      (l.logSharableEventHostEditFailed = g),
      (l.logSharableEventHostGuestListViewed = h),
      (l.logSharableEventHostGuestRemoveTapped = y),
      (l.logSharableEventHostGuestRemoved = C),
      (l.logSharableEventHostGuestRemoveFailed = b),
      (l.logSharableEventHostDeleteTapped = v),
      (l.logSharableEventHostDeleted = S),
      (l.logSharableEventHostDeleteFailed = R));
  },
  98,
);
