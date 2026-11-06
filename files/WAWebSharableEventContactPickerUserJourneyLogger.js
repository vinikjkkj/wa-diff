__d(
  "WAWebSharableEventContactPickerUserJourneyLogger",
  [
    "WAWebEventV2ContactPickerUserJourneyWamEvent",
    "WAWebGetSharedSessionId",
    "WAWebPonyfillsCryptoRandomUUID",
    "WAWebSharableEventWamActionTs",
    "WAWebSharableEventWamErrorType",
    "WAWebWamEnumEventV2ContactPickerActionType",
    "WAWebWamEnumEventV2ErrorType",
  ],
  function (t, n, r, o, a, i, l) {
    var e = (function () {
      function e(e, t) {
        ((this.$3 = r("WAWebPonyfillsCryptoRandomUUID")()),
          (this.$4 = !1),
          (this.$5 = !1),
          (this.$2 = e),
          (this.$1 = t));
      }
      var t = e.prototype;
      return (
        (t.start = function () {
          this.$5 ||
            ((this.$5 = !0),
            this.$6(
              o("WAWebWamEnumEventV2ContactPickerActionType")
                .EVENT_V2_CONTACT_PICKER_ACTION_TYPE.ENTRY_POINT_STARTED,
            ),
            this.$6(
              o("WAWebWamEnumEventV2ContactPickerActionType")
                .EVENT_V2_CONTACT_PICKER_ACTION_TYPE.INVITATION_PICKER_SHOWN,
            ));
        }),
        (t.selected = function () {
          this.$6(
            o("WAWebWamEnumEventV2ContactPickerActionType")
              .EVENT_V2_CONTACT_PICKER_ACTION_TYPE.INVITATION_SELECTED,
          );
        }),
        (t.unselected = function () {
          this.$6(
            o("WAWebWamEnumEventV2ContactPickerActionType")
              .EVENT_V2_CONTACT_PICKER_ACTION_TYPE.INVITATION_UNSELECTED,
          );
        }),
        (t.sendTapped = function (t) {
          this.$6(
            o("WAWebWamEnumEventV2ContactPickerActionType")
              .EVENT_V2_CONTACT_PICKER_ACTION_TYPE
              .INVITATION_MESSAGE_SEND_TAPPED,
            { waUserCount: t },
          );
        }),
        (t.addPartiallyFailed = function () {
          this.$6(
            o("WAWebWamEnumEventV2ContactPickerActionType")
              .EVENT_V2_CONTACT_PICKER_ACTION_TYPE.INVITATION_ADD_FAILED,
            {
              errorType: o("WAWebWamEnumEventV2ErrorType").EVENT_V2_ERROR_TYPE
                .PARTIALLY_ADDED,
            },
          );
        }),
        (t.addFailed = function (t) {
          this.$6(
            o("WAWebWamEnumEventV2ContactPickerActionType")
              .EVENT_V2_CONTACT_PICKER_ACTION_TYPE.INVITATION_ADD_FAILED,
            {
              errorType: o(
                "WAWebSharableEventWamErrorType",
              ).getSharableEventWamErrorType(t),
            },
          );
        }),
        (t.messageSent = function (t) {
          this.$6(
            o("WAWebWamEnumEventV2ContactPickerActionType")
              .EVENT_V2_CONTACT_PICKER_ACTION_TYPE
              .INVITATION_MESSAGE_SENT_COMPLETED,
            { waUserCount: t },
          );
        }),
        (t.messageFailed = function () {
          this.$6(
            o("WAWebWamEnumEventV2ContactPickerActionType")
              .EVENT_V2_CONTACT_PICKER_ACTION_TYPE
              .INVITATION_MESSAGE_SENT_FAILED,
          );
        }),
        (t.dismissed = function () {
          !this.$5 ||
            this.$4 ||
            ((this.$4 = !0),
            this.$6(
              o("WAWebWamEnumEventV2ContactPickerActionType")
                .EVENT_V2_CONTACT_PICKER_ACTION_TYPE
                .INVITATION_PICKER_DISMISSED,
            ));
        }),
        (t.$6 = function (t, n) {
          var e = {
            actionTs: o(
              "WAWebSharableEventWamActionTs",
            ).getSharableEventWamActionTs(),
            appSessionId: o("WAWebGetSharedSessionId").getSharedSessionId(),
            eventV2ContactPickerActionType: t,
            eventV2ContactPickerEntryPoint: this.$1,
            userJourneyFunnelId: this.$3,
            waEventId: this.$2,
          };
          ((n == null ? void 0 : n.waUserCount) != null &&
            ((e.eventV2ContactPickerWaUserCount = n.waUserCount),
            (e.eventV2ContactPickerNonWaUserCount = 0)),
            (n == null ? void 0 : n.errorType) != null &&
              (e.eventV2ErrorType = n.errorType),
            new (o(
              "WAWebEventV2ContactPickerUserJourneyWamEvent",
            ).EventV2ContactPickerUserJourneyWamEvent)(e).commit());
        }),
        e
      );
    })();
    l.SharableEventContactPickerUserJourney = e;
  },
  98,
);
