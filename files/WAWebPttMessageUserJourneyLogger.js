__d(
  "WAWebPttMessageUserJourneyLogger",
  [
    "WALogger",
    "WATimeUtils",
    "WAWebABProps",
    "WAWebBotUtils",
    "WAWebGetSharedSessionId",
    "WAWebPonyfillsCryptoRandomUUID",
    "WAWebPttMessageUserJourneyWamEvent",
    "WAWebUnifiedSession",
    "WAWebWamEnumChatbarInitialState",
    "WAWebWamEnumPttMessageUserJourneyAction",
    "WAWebWamEnumTsSurface",
    "WAWebWamEnumUserJourneyChatType",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = (function () {
        function t(e) {
          (e === void 0 &&
            (e = o("WAWebGetSharedSessionId").getSharedSessionId()),
            (this.loggingEnabled = !1),
            (this.$3 = !1),
            (this.loggingEnabled = o("WAWebABProps").getABPropConfigValue(
              "ptt_user_journey_logging_wam_enabled",
            )),
            (this.$1 = e));
        }
        var n = t.prototype;
        return (
          (n.setHasDraft = function (t) {
            (t === void 0 && (t = !0), (this.$3 = t));
          }),
          (n.start = function (t, n) {
            ((this.$3 = !1),
              this.$4({
                chatId: t,
                uiSurface: m(t),
                action: o("WAWebWamEnumPttMessageUserJourneyAction")
                  .PTT_MESSAGE_USER_JOURNEY_ACTION.START,
                containsQuotedItem: n,
              }));
          }),
          (n.pause = function (t, n) {
            this.$4({
              chatId: t,
              uiSurface: m(t),
              action: o("WAWebWamEnumPttMessageUserJourneyAction")
                .PTT_MESSAGE_USER_JOURNEY_ACTION.PAUSE,
              containsQuotedItem: n,
            });
          }),
          (n.resume = function (t, n) {
            this.$4({
              chatId: t,
              uiSurface: m(t),
              action: o("WAWebWamEnumPttMessageUserJourneyAction")
                .PTT_MESSAGE_USER_JOURNEY_ACTION.RESUME,
              containsQuotedItem: n,
            });
          }),
          (n.send = function (t, n) {
            (this.$4({
              chatId: t,
              uiSurface: m(t),
              action: o("WAWebWamEnumPttMessageUserJourneyAction")
                .PTT_MESSAGE_USER_JOURNEY_ACTION.SEND,
              containsQuotedItem: n,
            }),
              (this.$3 = !1));
          }),
          (n.delete = function (t, n) {
            (this.$4({
              chatId: t,
              uiSurface: m(t),
              action: o("WAWebWamEnumPttMessageUserJourneyAction")
                .PTT_MESSAGE_USER_JOURNEY_ACTION.DELETE,
              containsQuotedItem: n,
            }),
              (this.$3 = !1));
          }),
          (n.draftSaved = function (t, n) {
            this.$4({
              chatId: t,
              uiSurface: m(t),
              action: o("WAWebWamEnumPttMessageUserJourneyAction")
                .PTT_MESSAGE_USER_JOURNEY_ACTION.DRAFT_SAVED,
              containsQuotedItem: n,
            });
          }),
          (n.$4 = function (n) {
            if (this.loggingEnabled) {
              var t = o(
                "WAWebUnifiedSession",
              ).UnifiedSessionManager.getSessionId();
              if (t == null) {
                o("WALogger").WARN(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "[uj] [ptt message] Unified session ID is null",
                    ])),
                );
                return;
              }
              u(n.action) &&
                this.$2 == null &&
                (this.$2 = r("WAWebPonyfillsCryptoRandomUUID")());
              var a = this.$2;
              if (a != null) {
                var i = d(n.chatId),
                  l = new (o(
                    "WAWebPttMessageUserJourneyWamEvent",
                  ).PttMessageUserJourneyWamEvent)();
                ((l.appSessionId = this.$1),
                  (l.unifiedSessionId = t),
                  (l.userJourneyFunnelId = a),
                  (l.uiSurface = n.uiSurface),
                  i != null && (l.userJourneyChatType = i),
                  (l.userJourneyEventMs = o("WATimeUtils").unixTimeMs()),
                  (l.chatbarInitialState = this.$3
                    ? o("WAWebWamEnumChatbarInitialState").CHATBAR_INITIAL_STATE
                        .CONTAINS_DRAFT
                    : o("WAWebWamEnumChatbarInitialState").CHATBAR_INITIAL_STATE
                        .EMPTY),
                  (l.pttIntensityAggregateValue = 0),
                  (l.pttMessageUserJourneyAction = n.action),
                  (l.pttMessageUserJourneyContainsQuotedItem =
                    n.containsQuotedItem),
                  (l.isMetaAiThread = o("WAWebBotUtils").isMetaAiBot(n.chatId)),
                  l.commit(),
                  c(n.action) && (this.$2 = null));
              }
            }
          }),
          t
        );
      })();
    function u(e) {
      return e ===
        o("WAWebWamEnumPttMessageUserJourneyAction")
          .PTT_MESSAGE_USER_JOURNEY_ACTION.AUTO_CANCEL ||
        e ===
          o("WAWebWamEnumPttMessageUserJourneyAction")
            .PTT_MESSAGE_USER_JOURNEY_ACTION.FAIL ||
        e ===
          o("WAWebWamEnumPttMessageUserJourneyAction")
            .PTT_MESSAGE_USER_JOURNEY_ACTION.DRAFT_SAVED ||
        e ===
          o("WAWebWamEnumPttMessageUserJourneyAction")
            .PTT_MESSAGE_USER_JOURNEY_ACTION.DRAFT_LOADED
        ? !1
        : e ===
              o("WAWebWamEnumPttMessageUserJourneyAction")
                .PTT_MESSAGE_USER_JOURNEY_ACTION.START ||
            e ===
              o("WAWebWamEnumPttMessageUserJourneyAction")
                .PTT_MESSAGE_USER_JOURNEY_ACTION.RESUME ||
            e ===
              o("WAWebWamEnumPttMessageUserJourneyAction")
                .PTT_MESSAGE_USER_JOURNEY_ACTION.PAUSE ||
            e ===
              o("WAWebWamEnumPttMessageUserJourneyAction")
                .PTT_MESSAGE_USER_JOURNEY_ACTION.DELETE ||
            e ===
              o("WAWebWamEnumPttMessageUserJourneyAction")
                .PTT_MESSAGE_USER_JOURNEY_ACTION.SEND ||
            e ===
              o("WAWebWamEnumPttMessageUserJourneyAction")
                .PTT_MESSAGE_USER_JOURNEY_ACTION.LOCK
          ? !0
          : (function () {
              throw Error(
                "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                  e,
              );
            })();
    }
    function c(e) {
      return e ===
        o("WAWebWamEnumPttMessageUserJourneyAction")
          .PTT_MESSAGE_USER_JOURNEY_ACTION.SEND ||
        e ===
          o("WAWebWamEnumPttMessageUserJourneyAction")
            .PTT_MESSAGE_USER_JOURNEY_ACTION.AUTO_CANCEL ||
        e ===
          o("WAWebWamEnumPttMessageUserJourneyAction")
            .PTT_MESSAGE_USER_JOURNEY_ACTION.FAIL ||
        e ===
          o("WAWebWamEnumPttMessageUserJourneyAction")
            .PTT_MESSAGE_USER_JOURNEY_ACTION.DRAFT_SAVED ||
        e ===
          o("WAWebWamEnumPttMessageUserJourneyAction")
            .PTT_MESSAGE_USER_JOURNEY_ACTION.DRAFT_LOADED ||
        e ===
          o("WAWebWamEnumPttMessageUserJourneyAction")
            .PTT_MESSAGE_USER_JOURNEY_ACTION.DELETE
        ? !0
        : e ===
              o("WAWebWamEnumPttMessageUserJourneyAction")
                .PTT_MESSAGE_USER_JOURNEY_ACTION.START ||
            e ===
              o("WAWebWamEnumPttMessageUserJourneyAction")
                .PTT_MESSAGE_USER_JOURNEY_ACTION.RESUME ||
            e ===
              o("WAWebWamEnumPttMessageUserJourneyAction")
                .PTT_MESSAGE_USER_JOURNEY_ACTION.PAUSE ||
            e ===
              o("WAWebWamEnumPttMessageUserJourneyAction")
                .PTT_MESSAGE_USER_JOURNEY_ACTION.LOCK
          ? !1
          : (function () {
              throw Error(
                "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                  e,
              );
            })();
    }
    function d(e) {
      return e.isUser()
        ? o("WAWebWamEnumUserJourneyChatType").USER_JOURNEY_CHAT_TYPE.INDIVIDUAL
        : e.isGroup()
          ? o("WAWebWamEnumUserJourneyChatType").USER_JOURNEY_CHAT_TYPE.GROUP
          : e.isNewsletter()
            ? o("WAWebWamEnumUserJourneyChatType").USER_JOURNEY_CHAT_TYPE
                .CHANNEL
            : null;
    }
    function m(e) {
      return e.isGroup()
        ? o("WAWebWamEnumTsSurface").TS_SURFACE.GROUP_CHAT
        : o("WAWebWamEnumTsSurface").TS_SURFACE.CHAT_THREAD;
    }
    var p = new s();
    l.PttMessageUserJourneyLogger = p;
  },
  98,
);
