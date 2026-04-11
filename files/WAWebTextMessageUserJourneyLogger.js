__d(
  "WAWebTextMessageUserJourneyLogger",
  [
    "WALogger",
    "WATimeUtils",
    "WAWebABProps",
    "WAWebGetSharedSessionId",
    "WAWebPonyfillsCryptoRandomUUID",
    "WAWebTextMessageUserJourneyWamEvent",
    "WAWebUnifiedSession",
    "WAWebWamEnumChatbarInitialState",
    "WAWebWamEnumTextMessageUserJourneyAction",
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
            (this.loggingEnabled = o("WAWebABProps").getABPropConfigValue(
              "text_user_journey_logging_wam_enabled",
            )),
            (this.$1 = e));
        }
        var n = t.prototype;
        return (
          (n.log = function (n) {
            if (this.loggingEnabled) {
              var t = o(
                "WAWebUnifiedSession",
              ).UnifiedSessionManager.getSessionId();
              if (t == null) {
                o("WALogger").WARN(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "[uj] [text message] Unified session ID is null",
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
                  l = m(n.chatId),
                  s = new (o(
                    "WAWebTextMessageUserJourneyWamEvent",
                  ).TextMessageUserJourneyWamEvent)();
                ((s.appSessionId = this.$1),
                  (s.unifiedSessionId = t),
                  (s.userJourneyFunnelId = a),
                  (s.uiSurface = l),
                  (s.textMessageUserJourneyAction = n.action),
                  n.containsQuotedItem != null &&
                    (s.textMessageUserJourneyContainsQuotedItem =
                      n.containsQuotedItem),
                  (s.userJourneyChatType = i),
                  (s.userJourneyEventMs = o("WATimeUtils").unixTimeMs()),
                  (s.chatbarInitialState = n.hasDraft
                    ? o("WAWebWamEnumChatbarInitialState").CHATBAR_INITIAL_STATE
                        .CONTAINS_DRAFT
                    : o("WAWebWamEnumChatbarInitialState").CHATBAR_INITIAL_STATE
                        .EMPTY),
                  s.commit(),
                  c(n.action) && (this.$2 = null));
              }
            }
          }),
          t
        );
      })();
    function u(e) {
      return e ===
        o("WAWebWamEnumTextMessageUserJourneyAction")
          .TEXT_MESSAGE_USER_JOURNEY_ACTION.TYPING_START ||
        e ===
          o("WAWebWamEnumTextMessageUserJourneyAction")
            .TEXT_MESSAGE_USER_JOURNEY_ACTION.CLEARED ||
        e ===
          o("WAWebWamEnumTextMessageUserJourneyAction")
            .TEXT_MESSAGE_USER_JOURNEY_ACTION.CLICK_ON_COMPOSER ||
        e ===
          o("WAWebWamEnumTextMessageUserJourneyAction")
            .TEXT_MESSAGE_USER_JOURNEY_ACTION.SENT
        ? !0
        : e ===
              o("WAWebWamEnumTextMessageUserJourneyAction")
                .TEXT_MESSAGE_USER_JOURNEY_ACTION.DELIVERED ||
            e ===
              o("WAWebWamEnumTextMessageUserJourneyAction")
                .TEXT_MESSAGE_USER_JOURNEY_ACTION.DRAFT_SAVED ||
            e ===
              o("WAWebWamEnumTextMessageUserJourneyAction")
                .TEXT_MESSAGE_USER_JOURNEY_ACTION.DRAFT_LOADED ||
            e ===
              o("WAWebWamEnumTextMessageUserJourneyAction")
                .TEXT_MESSAGE_USER_JOURNEY_ACTION.EXIT
          ? !1
          : (function () {
              throw Error(
                "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                  e,
              );
            })();
    }
    function c(e) {
      return e ===
        o("WAWebWamEnumTextMessageUserJourneyAction")
          .TEXT_MESSAGE_USER_JOURNEY_ACTION.DRAFT_SAVED ||
        e ===
          o("WAWebWamEnumTextMessageUserJourneyAction")
            .TEXT_MESSAGE_USER_JOURNEY_ACTION.DRAFT_LOADED ||
        e ===
          o("WAWebWamEnumTextMessageUserJourneyAction")
            .TEXT_MESSAGE_USER_JOURNEY_ACTION.SENT ||
        e ===
          o("WAWebWamEnumTextMessageUserJourneyAction")
            .TEXT_MESSAGE_USER_JOURNEY_ACTION.EXIT
        ? !0
        : e ===
              o("WAWebWamEnumTextMessageUserJourneyAction")
                .TEXT_MESSAGE_USER_JOURNEY_ACTION.CLEARED ||
            e ===
              o("WAWebWamEnumTextMessageUserJourneyAction")
                .TEXT_MESSAGE_USER_JOURNEY_ACTION.CLICK_ON_COMPOSER ||
            e ===
              o("WAWebWamEnumTextMessageUserJourneyAction")
                .TEXT_MESSAGE_USER_JOURNEY_ACTION.DELIVERED ||
            e ===
              o("WAWebWamEnumTextMessageUserJourneyAction")
                .TEXT_MESSAGE_USER_JOURNEY_ACTION.TYPING_START
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
            : o("WAWebWamEnumUserJourneyChatType").USER_JOURNEY_CHAT_TYPE
                .MULTIPLE;
    }
    function m(e) {
      return e.isGroup()
        ? o("WAWebWamEnumTsSurface").TS_SURFACE.GROUP_CHAT
        : o("WAWebWamEnumTsSurface").TS_SURFACE.CHAT_THREAD;
    }
    var p = new s();
    l.TextMessageUserJourneyLogger = p;
  },
  98,
);
