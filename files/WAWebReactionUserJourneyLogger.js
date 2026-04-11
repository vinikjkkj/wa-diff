__d(
  "WAWebReactionUserJourneyLogger",
  [
    "WALogger",
    "WATimeUtils",
    "WAWebABProps",
    "WAWebGetSharedSessionId",
    "WAWebPonyfillsCryptoRandomUUID",
    "WAWebReactionUserJourneyWamEvent",
    "WAWebReactionsCollection",
    "WAWebUnifiedSession",
    "WAWebWamEnumReactionUserJourneyAction",
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
              "reaction_user_journey_logging_enabled",
            )),
            (this.$1 = e));
        }
        var n = t.prototype;
        return (
          (n.trayOpen = function (t, n, r) {
            this.$10({
              chatId: t,
              message: n,
              entryPoint: r,
              uiSurface: m(t),
              action: o("WAWebWamEnumReactionUserJourneyAction")
                .REACTION_USER_JOURNEY_ACTION.TRAY_OPEN,
            });
          }),
          (n.searchOpen = function () {
            this.$10({
              action: o("WAWebWamEnumReactionUserJourneyAction")
                .REACTION_USER_JOURNEY_ACTION.SEARCH_OPEN,
            });
          }),
          (n.reactionSelect = function (t) {
            this.$10({
              action:
                t.length === 0
                  ? o("WAWebWamEnumReactionUserJourneyAction")
                      .REACTION_USER_JOURNEY_ACTION.REACTION_UNSELECT
                  : o("WAWebWamEnumReactionUserJourneyAction")
                      .REACTION_USER_JOURNEY_ACTION.REACTION_SELECT,
            });
          }),
          (n.reactionUnselect = function () {
            this.$10({
              action: o("WAWebWamEnumReactionUserJourneyAction")
                .REACTION_USER_JOURNEY_ACTION.REACTION_UNSELECT,
            });
          }),
          (n.reactionSearch = function () {
            this.$10({
              action: o("WAWebWamEnumReactionUserJourneyAction")
                .REACTION_USER_JOURNEY_ACTION.REACTION_SEARCH,
            });
          }),
          (n.trayClose = function () {
            this.$10({
              action: o("WAWebWamEnumReactionUserJourneyAction")
                .REACTION_USER_JOURNEY_ACTION.TRAY_CLOSE,
            });
          }),
          (n.reactionDetails = function (t, n, r) {
            this.$10({
              chatId: t,
              message: n,
              entryPoint: r,
              uiSurface: m(t),
              action: o("WAWebWamEnumReactionUserJourneyAction")
                .REACTION_USER_JOURNEY_ACTION.REACTION_DETAILS,
            });
          }),
          (n.selectProfile = function () {
            this.$10({
              action: o("WAWebWamEnumReactionUserJourneyAction")
                .REACTION_USER_JOURNEY_ACTION.SELECT_PROFILE,
            });
          }),
          (n.detailsDismiss = function () {
            this.$10({
              action: o("WAWebWamEnumReactionUserJourneyAction")
                .REACTION_USER_JOURNEY_ACTION.DETAILS_DISMISS,
            });
          }),
          (n.selectAlbumThumbnail = function () {
            this.$10({
              action: o("WAWebWamEnumReactionUserJourneyAction")
                .REACTION_USER_JOURNEY_ACTION.SELECT_ALBUM_THUMBNAIL,
            });
          }),
          (n.selectTabInReactionDetails = function () {
            this.$10({
              action: o("WAWebWamEnumReactionUserJourneyAction")
                .REACTION_USER_JOURNEY_ACTION.SELECT_TAB_IN_REACTION_DETAILS,
            });
          }),
          (n.$10 = function (n) {
            if (this.loggingEnabled) {
              var t = o(
                "WAWebUnifiedSession",
              ).UnifiedSessionManager.getSessionId();
              if (t == null) {
                o("WALogger").WARN(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "[uj] [reaction] Unified session ID is null",
                    ])),
                );
                return;
              }
              if (u(n.action) && this.$2 == null) {
                ((this.$2 = r("WAWebPonyfillsCryptoRandomUUID")()),
                  n.chatId != null && (this.$3 = d(n.chatId)),
                  (this.$4 = n.uiSurface),
                  (this.$5 = n.entryPoint));
                var a = n.message;
                if (a != null && a.id != null) {
                  var i,
                    l = o("WAWebReactionsCollection").ReactionsCollection.get(
                      a.id,
                    );
                  ((this.$7 = (l == null ? void 0 : l.reactionByMe) != null),
                    (this.$6 =
                      ((i = l == null ? void 0 : l.reactions.length) != null
                        ? i
                        : 0) > 0),
                    (this.$8 = o("WAWebWamMsgUtils").getWamMediaType(a)),
                    (this.$9 = o("WAWebWamMsgUtils").getWamMessageType(a)));
                }
              }
              var s = this.$2;
              if (s != null) {
                var m = new (o(
                  "WAWebReactionUserJourneyWamEvent",
                ).ReactionUserJourneyWamEvent)();
                ((m.appSessionId = this.$1),
                  (m.unifiedSessionId = t),
                  (m.userJourneyFunnelId = s),
                  this.$4 != null && (m.uiSurface = this.$4),
                  this.$3 != null && (m.userJourneyChatType = this.$3),
                  (m.userJourneyEventMs = o("WATimeUtils").unixTimeMs()),
                  (m.reactionUserJourneyAction = n.action),
                  this.$5 != null &&
                    (m.reactionUserJourneyEntryPoint = this.$5),
                  this.$7 != null && (m.messageHasReaction = this.$7),
                  this.$6 != null && (m.messageHasOwnReaction = this.$6),
                  this.$8 != null && (m.messageMediaType = this.$8),
                  this.$9 != null && (m.messageType = this.$9),
                  m.commit(),
                  c(n.action) &&
                    ((this.$2 = null),
                    (this.$3 = null),
                    (this.$4 = null),
                    (this.$5 = null),
                    (this.$7 = null),
                    (this.$6 = null),
                    (this.$8 = null),
                    (this.$9 = null)));
              }
            }
          }),
          t
        );
      })();
    function u(e) {
      return (
        e ===
          o("WAWebWamEnumReactionUserJourneyAction")
            .REACTION_USER_JOURNEY_ACTION.TRAY_OPEN ||
        e ===
          o("WAWebWamEnumReactionUserJourneyAction")
            .REACTION_USER_JOURNEY_ACTION.REACTION_DETAILS
      );
    }
    function c(e) {
      return (
        e ===
          o("WAWebWamEnumReactionUserJourneyAction")
            .REACTION_USER_JOURNEY_ACTION.TRAY_CLOSE ||
        e ===
          o("WAWebWamEnumReactionUserJourneyAction")
            .REACTION_USER_JOURNEY_ACTION.REACTION_UNSELECT ||
        e ===
          o("WAWebWamEnumReactionUserJourneyAction")
            .REACTION_USER_JOURNEY_ACTION.REACTION_SELECT ||
        e ===
          o("WAWebWamEnumReactionUserJourneyAction")
            .REACTION_USER_JOURNEY_ACTION.DETAILS_DISMISS ||
        e ===
          o("WAWebWamEnumReactionUserJourneyAction")
            .REACTION_USER_JOURNEY_ACTION.SELECT_PROFILE
      );
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
    l.ReactionUserJourneyLogger = p;
  },
  98,
);
