__d(
  "WAWebQuotedMessageUserJourneyLogger",
  [
    "WALogger",
    "WAWebABProps",
    "WAWebGetSharedSessionId",
    "WAWebPonyfillsCryptoRandomUUID",
    "WAWebQuotedMessageUserJourneyWamEvent",
    "WAWebUnifiedSession",
    "WAWebWamEnumQuotedMessageUserJourneyAction",
    "WAWebWamEnumTsSurface",
    "WAWebWamEnumUserJourneyChatType",
    "WAWebWamMsgUtils",
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
              "quoted_message_user_journey_logging_enabled",
            )),
            (this.$1 = e));
        }
        var n = t.prototype;
        return (
          (n.quotedMessageAdded = function (t, n, r) {
            var e = o("WAWebWamEnumQuotedMessageUserJourneyAction")
              .QUOTED_MESSAGE_USER_JOURNEY_ACTION.QUOTED_MESSAGE_ADDED;
            (this.$8 != null &&
              !this.$8.equals(r.id) &&
              (e = o("WAWebWamEnumQuotedMessageUserJourneyAction")
                .QUOTED_MESSAGE_USER_JOURNEY_ACTION.QUOTED_MESSAGE_UPDATED),
              (this.$8 = r.id),
              this.$9({
                chatId: t,
                entryPoint: n,
                action: e,
                quotedMessage: r,
              }));
          }),
          (n.quotedMessageDeleted = function (t) {
            this.$9({
              chatId: t,
              action: o("WAWebWamEnumQuotedMessageUserJourneyAction")
                .QUOTED_MESSAGE_USER_JOURNEY_ACTION.QUOTED_MESSAGE_DELETED,
            });
          }),
          (n.quotedMessageTappedInComposer = function (t) {
            this.$9({
              chatId: t,
              action: o("WAWebWamEnumQuotedMessageUserJourneyAction")
                .QUOTED_MESSAGE_USER_JOURNEY_ACTION
                .QUOTED_MESSAGE_TAPPED_IN_COMPOSER,
            });
          }),
          (n.quotedMessageBubbleTapped = function (t, n) {
            this.$9({
              chatId: t,
              action: o("WAWebWamEnumQuotedMessageUserJourneyAction")
                .QUOTED_MESSAGE_USER_JOURNEY_ACTION
                .QUOTED_MESSAGE_BUBBLE_TAPPED,
              quotedMessage: n,
            });
          }),
          (n.quotedMessageSent = function (t) {
            this.$9({
              chatId: t,
              action: o("WAWebWamEnumQuotedMessageUserJourneyAction")
                .QUOTED_MESSAGE_USER_JOURNEY_ACTION.QUOTED_MESSAGE_SENT,
            });
          }),
          (n.$9 = function (n) {
            if (this.loggingEnabled) {
              var t = o(
                "WAWebUnifiedSession",
              ).UnifiedSessionManager.getSessionId();
              if (t == null) {
                o("WALogger").WARN(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "[uj] [quoted message] Unified session ID is null",
                    ])),
                );
                return;
              }
              if (!(this.$2 != null && u(n.action))) {
                u(n.action) &&
                  this.$2 == null &&
                  ((this.$2 = r("WAWebPonyfillsCryptoRandomUUID")()),
                  (this.$5 = n.entryPoint),
                  n.chatId != null && (this.$3 = d(n.chatId)),
                  (this.$4 = m(n.chatId)));
                var a = this.$2;
                if (a != null) {
                  var i = n.quotedMessage;
                  i != null &&
                    ((this.$6 = o("WAWebWamMsgUtils").getWamMediaType(i)),
                    (this.$7 = o("WAWebWamMsgUtils").getWamMessageType(i)));
                  var l = new (o(
                    "WAWebQuotedMessageUserJourneyWamEvent",
                  ).QuotedMessageUserJourneyWamEvent)();
                  ((l.appSessionId = this.$1),
                    (l.unifiedSessionId = t),
                    (l.userJourneyFunnelId = a),
                    this.$4 != null && (l.uiSurface = this.$4),
                    this.$3 != null && (l.userJourneyChatType = this.$3),
                    this.$6 != null && (l.quotedMediaType = this.$6),
                    this.$7 != null && (l.quotedMessageTypeEnum = this.$7),
                    (l.quotedMessageUserJourneyAction = n.action),
                    this.$5 != null &&
                      (l.quotedMessageUserJourneyEntryPoint = this.$5),
                    l.commit(),
                    c(n.action) &&
                      ((this.$2 = null),
                      (this.$5 = null),
                      (this.$3 = null),
                      (this.$4 = null),
                      (this.$6 = null),
                      (this.$7 = null),
                      (this.$8 = null)));
                }
              }
            }
          }),
          t
        );
      })();
    function u(e) {
      return (
        e ===
          o("WAWebWamEnumQuotedMessageUserJourneyAction")
            .QUOTED_MESSAGE_USER_JOURNEY_ACTION.QUOTED_MESSAGE_ADDED ||
        e ===
          o("WAWebWamEnumQuotedMessageUserJourneyAction")
            .QUOTED_MESSAGE_USER_JOURNEY_ACTION.QUOTED_MESSAGE_BUBBLE_TAPPED
      );
    }
    function c(e) {
      return (
        e ===
          o("WAWebWamEnumQuotedMessageUserJourneyAction")
            .QUOTED_MESSAGE_USER_JOURNEY_ACTION.QUOTED_MESSAGE_BUBBLE_TAPPED ||
        e ===
          o("WAWebWamEnumQuotedMessageUserJourneyAction")
            .QUOTED_MESSAGE_USER_JOURNEY_ACTION.QUOTED_MESSAGE_DELETED ||
        e ===
          o("WAWebWamEnumQuotedMessageUserJourneyAction")
            .QUOTED_MESSAGE_USER_JOURNEY_ACTION.QUOTED_MESSAGE_SENT
      );
    }
    function d(e) {
      return e == null
        ? null
        : e.isUser()
          ? o("WAWebWamEnumUserJourneyChatType").USER_JOURNEY_CHAT_TYPE
              .INDIVIDUAL
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
    ((l.getChatType = d), (l.QuotedMessageUserJourneyLogger = p));
  },
  98,
);
