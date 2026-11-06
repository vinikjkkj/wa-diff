__d(
  "WAWebSharableEventCreationUserJourneyLogger",
  [
    "WAWebChatThreadLogging",
    "WAWebEventV2CreationUserJourneyWamEvent",
    "WAWebGetSharedSessionId",
    "WAWebGroupMetadataGetters",
    "WAWebGroupType",
    "WAWebPonyfillsCryptoRandomUUID",
    "WAWebSharableEventWamActionTs",
    "WAWebSharableEventWamErrorType",
    "WAWebSharableEventWamFields",
    "WAWebWamEnumEventV2CreationActionType",
    "WAWebWamEnumEventV2CreationEntryPoint",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return e == null
        ? o("WAWebWamEnumEventV2CreationEntryPoint")
            .EVENT_V2_CREATION_ENTRY_POINT.EVENTS_LIST_PAGE
        : e.id.isGroup()
          ? o("WAWebWamEnumEventV2CreationEntryPoint")
              .EVENT_V2_CREATION_ENTRY_POINT.GROUP_CHAT_ATTACHMENT_TRAY
          : o("WAWebWamEnumEventV2CreationEntryPoint")
              .EVENT_V2_CREATION_ENTRY_POINT.INDIVIDUAL_CHAT_ATTACHMENT_TRAY;
    }
    var s = (function () {
      function e(e, t) {
        ((this.$2 = null),
          (this.$4 = r("WAWebPonyfillsCryptoRandomUUID")()),
          (this.$5 = !1),
          (this.$6 = !1),
          (this.$7 = null),
          (this.$3 = e),
          (this.$1 = u(t)));
      }
      var t = e.prototype;
      return (
        (t.start = function () {
          this.$6 ||
            ((this.$6 = !0),
            this.$8(
              o("WAWebWamEnumEventV2CreationActionType")
                .EVENT_V2_CREATION_ACTION_TYPE.ENTRY_POINT_STARTED,
            ),
            this.$8(
              o("WAWebWamEnumEventV2CreationActionType")
                .EVENT_V2_CREATION_ACTION_TYPE.SCREEN_LOADED,
            ));
        }),
        (t.updateDraft = function (t) {
          this.$2 = t;
        }),
        (t.submitted = function () {
          this.$8(
            o("WAWebWamEnumEventV2CreationActionType")
              .EVENT_V2_CREATION_ACTION_TYPE.CREATION_SUBMITTED,
          );
        }),
        (t.completed = function (t) {
          ((this.$7 = t),
            this.$8(
              o("WAWebWamEnumEventV2CreationActionType")
                .EVENT_V2_CREATION_ACTION_TYPE.CREATION_COMPLETED,
              { eventV2CreationFilledFields: this.$9() },
            ));
        }),
        (t.failed = function (t) {
          this.$8(
            o("WAWebWamEnumEventV2CreationActionType")
              .EVENT_V2_CREATION_ACTION_TYPE.CREATION_FAILED,
            {
              eventV2CreationFilledFields: this.$9(),
              eventV2ErrorType: o(
                "WAWebSharableEventWamErrorType",
              ).getSharableEventWamErrorType(t),
            },
          );
        }),
        (t.cancelled = function () {
          this.$8(
            o("WAWebWamEnumEventV2CreationActionType")
              .EVENT_V2_CREATION_ACTION_TYPE.CREATION_CANCELLED,
            { eventV2CreationFilledFields: this.$9() },
          );
        }),
        (t.dismissed = function () {
          !this.$6 ||
            this.$5 ||
            ((this.$5 = !0),
            this.$8(
              o("WAWebWamEnumEventV2CreationActionType")
                .EVENT_V2_CREATION_ACTION_TYPE.SCREEN_DISMISSED,
              { eventV2CreationFilledFields: this.$9() },
            ));
        }),
        (t.$9 = function () {
          var e = this.$2;
          return e == null
            ? null
            : o("WAWebSharableEventWamFields").getSharableEventWamFilledFields(
                e,
              );
        }),
        (t.$8 = function (t, n) {
          var e = {
            actionTs: o(
              "WAWebSharableEventWamActionTs",
            ).getSharableEventWamActionTs(),
            appSessionId: o("WAWebGetSharedSessionId").getSharedSessionId(),
            eventV2CreationActionType: t,
            userJourneyFunnelId: this.$4,
          };
          (this.$3 != null && (e.eventV2CreationEntryPoint = this.$3),
            this.$7 != null && (e.waEventId = this.$7),
            (n == null ? void 0 : n.eventV2CreationFilledFields) != null &&
              (e.eventV2CreationFilledFields = n.eventV2CreationFilledFields),
            (n == null ? void 0 : n.eventV2ErrorType) != null &&
              (e.eventV2ErrorType = n.eventV2ErrorType),
            this.$1.then(function (t) {
              return new (o(
                "WAWebEventV2CreationUserJourneyWamEvent",
              ).EventV2CreationUserJourneyWamEvent)(
                babelHelpers.extends({}, e, t),
              ).commit();
            }));
        }),
        e
      );
    })();
    function u(e) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          if (e == null) return {};
          var t = e.id.isGroup(),
            n = {
              eventV2CreationIsFrom1x1Chat: !t,
              eventV2CreationIsFromGroupChat: t,
            },
            r = yield o("WAWebChatThreadLogging")
              .getChatThreadID(e.id.toJid())
              .catch(function () {
                return null;
              });
          r != null && (n.threadId = r);
          var a = e.groupMetadata;
          return (
            t &&
              a != null &&
              ((n.groupTypeClient = o(
                "WAWebGroupType",
              ).groupTypeToGroupTypeClient(
                o("WAWebGroupMetadataGetters").getGroupType(a),
              )),
              (n.groupSize = a.size > 0 ? a.size : a.participants.length)),
            n
          );
        })),
        c.apply(this, arguments)
      );
    }
    ((l.getSharableEventCreationEntryPoint = e),
      (l.SharableEventCreationUserJourney = s));
  },
  98,
);
