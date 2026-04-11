__d(
  "WAWebForwardActionUserJourneyLogger",
  [
    "WALogger",
    "WAWebABProps",
    "WAWebForwardActionUserJourneyWamEvent",
    "WAWebGetSharedSessionId",
    "WAWebPonyfillsCryptoRandomUUID",
    "WAWebShareContentUserJourneyLogger",
    "WAWebUnifiedSession",
    "WAWebWamEnumForwardActionUserJourneyAction",
    "WAWebWamEnumShareContentUserJourneyEntryPoint",
    "WAWebWamEnumTsSurface",
    "WAWebWamEnumUserJourneyChatType",
    "WAWebWamMsgUtils",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = (function () {
        function t(e) {
          (e === void 0 &&
            (e = o("WAWebGetSharedSessionId").getSharedSessionId()),
            (this.loggingEnabled = !1),
            (this.loggingEnabled = o("WAWebABProps").getABPropConfigValue(
              "forwarded_message_user_journey_logging_enabled",
            )),
            (this.$1 = e));
        }
        var n = t.prototype;
        return (
          (n.contextMenuShownWithForward = function (t, n) {
            this.$9({
              chatId: t,
              message: n,
              uiSurface: p(t),
              action: o("WAWebWamEnumForwardActionUserJourneyAction")
                .FORWARD_ACTION_USER_JOURNEY_ACTION
                .CONTEXT_MENU_SHOWN_WITH_FORWARD,
            });
          }),
          (n.contextMenuShownWithoutForward = function (t, n) {
            this.$9({
              chatId: t,
              message: n,
              uiSurface: p(t),
              action: o("WAWebWamEnumForwardActionUserJourneyAction")
                .FORWARD_ACTION_USER_JOURNEY_ACTION
                .CONTEXT_MENU_SHOWN_WITHOUT_FORWARD,
            });
          }),
          (n.forwardTappedInContextMenu = function () {
            this.$9({
              action: o("WAWebWamEnumForwardActionUserJourneyAction")
                .FORWARD_ACTION_USER_JOURNEY_ACTION
                .FORWARD_TAPPED_IN_CONTEXT_MENU,
            });
          }),
          (n.fastForwardButtonTapped = function (t, n) {
            this.$9({
              chatId: t,
              message: n,
              selectedMessages: [n],
              uiSurface: p(t),
              action: o("WAWebWamEnumForwardActionUserJourneyAction")
                .FORWARD_ACTION_USER_JOURNEY_ACTION.FAST_FORWARD_BUTTON_TAPPED,
            });
          }),
          (n.messageForwardSelect = function (t) {
            this.$9({
              action: t
                ? o("WAWebWamEnumForwardActionUserJourneyAction")
                    .FORWARD_ACTION_USER_JOURNEY_ACTION.MESSAGE_FORWARD_SELECT
                : o("WAWebWamEnumForwardActionUserJourneyAction")
                    .FORWARD_ACTION_USER_JOURNEY_ACTION
                    .MESSAGE_FORWARD_UNSELECT,
            });
          }),
          (n.cancelInForwardToolbar = function () {
            this.$9({
              action: o("WAWebWamEnumForwardActionUserJourneyAction")
                .FORWARD_ACTION_USER_JOURNEY_ACTION.CANCEL_IN_FORWARD_TOOLBAR,
            });
          }),
          (n.contextMenuDismissed = function () {
            this.$9({
              action: o("WAWebWamEnumForwardActionUserJourneyAction")
                .FORWARD_ACTION_USER_JOURNEY_ACTION.CONTEXT_MENU_DISMISSED,
            });
          }),
          (n.forwardButtonTappedInForwardToolbar = function (t) {
            this.$9({
              action: o("WAWebWamEnumForwardActionUserJourneyAction")
                .FORWARD_ACTION_USER_JOURNEY_ACTION
                .FORWARD_BUTTON_TAPPED_IN_FORWARD_TOOLBAR,
              selectedMessages: t,
            });
          }),
          (n.forwardToolbarDismissed = function () {
            this.$9({
              action: o("WAWebWamEnumForwardActionUserJourneyAction")
                .FORWARD_ACTION_USER_JOURNEY_ACTION.FORWARD_TOOLBAR_DISMISSED,
            });
          }),
          (n.selectTappedInContextMenu = function () {
            this.$9({
              action: o("WAWebWamEnumForwardActionUserJourneyAction")
                .FORWARD_ACTION_USER_JOURNEY_ACTION
                .SELECT_TAPPED_IN_CONTEXT_MENU,
              uiSurface: o("WAWebWamEnumTsSurface").TS_SURFACE.CHAT_THREAD,
            });
          }),
          (n.selectTappedInMoreMenu = function () {
            this.$9({
              action: o("WAWebWamEnumForwardActionUserJourneyAction")
                .FORWARD_ACTION_USER_JOURNEY_ACTION.SELECT_TAPPED_IN_MORE_MENU,
              uiSurface: o("WAWebWamEnumTsSurface").TS_SURFACE.CHAT_THREAD,
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
                      "[uj] [forward] Unified session ID is null",
                    ])),
                );
                return;
              }
              if (c(n.action) && this.$2 == null) {
                ((this.$2 = r("WAWebPonyfillsCryptoRandomUUID")()),
                  (this.$5 = r("WAWebPonyfillsCryptoRandomUUID")()),
                  n.chatId != null && (this.$3 = m(n.chatId)),
                  (this.$4 = n.uiSurface));
                var a = n.message;
                a != null &&
                  a.id != null &&
                  ((this.$6 = a.id.fromMe),
                  (this.$7 = o("WAWebWamMsgUtils").getWamMediaType(a)),
                  (this.$8 = o("WAWebWamMsgUtils").getWamMessageType(a)));
              }
              var i = this.$2;
              if (i != null) {
                var l = new (o(
                  "WAWebForwardActionUserJourneyWamEvent",
                ).ForwardActionUserJourneyWamEvent)();
                ((l.appSessionId = this.$1),
                  (l.unifiedSessionId = t),
                  (l.userJourneyFunnelId = i),
                  this.$4 != null && (l.uiSurface = this.$4),
                  this.$3 != null && (l.userJourneyChatType = this.$3),
                  (l.forwardActionUserJourneyAction = n.action),
                  this.$5 != null && (l.forwardUserJourneyFunnelId = this.$5),
                  this.$6 != null && (l.messageIsFromMe = this.$6),
                  this.$7 != null && (l.messageMediaType = this.$7),
                  this.$8 != null && (l.messageType = this.$8),
                  l.commit(),
                  this.$10(n.action, n.selectedMessages),
                  d(n.action) &&
                    ((this.$2 = null),
                    (this.$3 = null),
                    (this.$4 = null),
                    (this.$5 = null),
                    (this.$6 = null),
                    (this.$7 = null),
                    (this.$8 = null)));
              }
            }
          }),
          (n.$10 = function (t, n) {
            var e =
                t ===
                o("WAWebWamEnumForwardActionUserJourneyAction")
                  .FORWARD_ACTION_USER_JOURNEY_ACTION
                  .FAST_FORWARD_BUTTON_TAPPED,
              r =
                t ===
                o("WAWebWamEnumForwardActionUserJourneyAction")
                  .FORWARD_ACTION_USER_JOURNEY_ACTION
                  .FORWARD_BUTTON_TAPPED_IN_FORWARD_TOOLBAR;
            if (!(n == null || n.length === 0) && (e || r)) {
              this.$5 == null &&
                o("WALogger").WARN(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "[uj] [forward] Shared forward user journey funnel ID is null",
                    ])),
                );
              var a;
              (r
                ? (a = o("WAWebWamEnumShareContentUserJourneyEntryPoint")
                    .SHARE_CONTENT_USER_JOURNEY_ENTRY_POINT.TOOLBAR)
                : (a = o("WAWebWamEnumShareContentUserJourneyEntryPoint")
                    .SHARE_CONTENT_USER_JOURNEY_ENTRY_POINT.FASTFORWARD),
                o(
                  "WAWebShareContentUserJourneyLogger",
                ).ShareContentUserJourneyLogger.funnelStart(
                  this.$4,
                  this.$5,
                  a,
                  n,
                ));
            }
          }),
          t
        );
      })();
    function c(e) {
      return (
        e ===
          o("WAWebWamEnumForwardActionUserJourneyAction")
            .FORWARD_ACTION_USER_JOURNEY_ACTION
            .CONTEXT_MENU_SHOWN_WITH_FORWARD ||
        e ===
          o("WAWebWamEnumForwardActionUserJourneyAction")
            .FORWARD_ACTION_USER_JOURNEY_ACTION
            .CONTEXT_MENU_SHOWN_WITHOUT_FORWARD ||
        e ===
          o("WAWebWamEnumForwardActionUserJourneyAction")
            .FORWARD_ACTION_USER_JOURNEY_ACTION.FAST_FORWARD_BUTTON_TAPPED ||
        e ===
          o("WAWebWamEnumForwardActionUserJourneyAction")
            .FORWARD_ACTION_USER_JOURNEY_ACTION.SELECT_TAPPED_IN_CONTEXT_MENU ||
        e ===
          o("WAWebWamEnumForwardActionUserJourneyAction")
            .FORWARD_ACTION_USER_JOURNEY_ACTION.SELECT_TAPPED_IN_MORE_MENU
      );
    }
    function d(e) {
      return (
        e ===
          o("WAWebWamEnumForwardActionUserJourneyAction")
            .FORWARD_ACTION_USER_JOURNEY_ACTION.CANCEL_IN_FORWARD_TOOLBAR ||
        e ===
          o("WAWebWamEnumForwardActionUserJourneyAction")
            .FORWARD_ACTION_USER_JOURNEY_ACTION.CONTEXT_MENU_DISMISSED ||
        e ===
          o("WAWebWamEnumForwardActionUserJourneyAction")
            .FORWARD_ACTION_USER_JOURNEY_ACTION.FAST_FORWARD_BUTTON_TAPPED ||
        e ===
          o("WAWebWamEnumForwardActionUserJourneyAction")
            .FORWARD_ACTION_USER_JOURNEY_ACTION.FORWARD_TOOLBAR_DISMISSED
      );
    }
    function m(e) {
      return e.isUser()
        ? o("WAWebWamEnumUserJourneyChatType").USER_JOURNEY_CHAT_TYPE.INDIVIDUAL
        : e.isGroup()
          ? o("WAWebWamEnumUserJourneyChatType").USER_JOURNEY_CHAT_TYPE.GROUP
          : e.isNewsletter()
            ? o("WAWebWamEnumUserJourneyChatType").USER_JOURNEY_CHAT_TYPE
                .CHANNEL
            : null;
    }
    function p(e) {
      return e.isGroup()
        ? o("WAWebWamEnumTsSurface").TS_SURFACE.GROUP_CHAT
        : o("WAWebWamEnumTsSurface").TS_SURFACE.CHAT_THREAD;
    }
    var _ = new u();
    l.ForwardActionUserJourneyLogger = _;
  },
  98,
);
