__d(
  "WAWebBotJourneyLogger",
  [
    "WALogger",
    "WAWebBotJourneyWamEvent",
    "WAWebBotLoggingUtils",
    "WAWebGetSharedSessionId",
    "WAWebWamEnumBotEntryPointType",
    "WAWebWamEnumChatFilterActionTypes",
    "WAWebWamEnumTsSurface",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(e) {
      var t =
        e != null
          ? o("WAWebBotLoggingUtils").getBotMetricsEntryPointFromBotEntryPoint(
              e,
            )
          : void 0;
      return t != null
        ? o("WAWebBotLoggingUtils").getBotOriginFromBotMetricsEntryPoint(t)
        : void 0;
    }
    var u = (function () {
        function t() {
          this.$1 = null;
        }
        var n = t.prototype;
        return (
          (n.setAiSessionId = function (t) {
            this.$5 = t;
          }),
          (n.setEntryPoint = function (t) {
            this.$1 = t;
          }),
          (n.getEntryPoint = function () {
            return this.$1;
          }),
          (n.setBotMetricsEntryPoint = function (t) {
            this.$2 = t;
          }),
          (n.getBotMetricsEntryPoint = function () {
            return this.$2;
          }),
          (n.setDestinationId = function (t) {
            this.$3 = t;
          }),
          (n.getDestinationId = function () {
            return this.$3;
          }),
          (n.setBotPersonaId = function (t) {
            this.$4 = t;
          }),
          (n.log = function (n) {
            var t,
              r,
              a = n.actionType,
              i = n.additionalCategory,
              l = n.aiSessionId,
              u = n.conversationStarterIndex,
              c = n.conversationStarterName,
              d = n.entryPoint,
              m = n.eventTsMs,
              p = n.originEntryPoint,
              _ = n.uiSurface,
              f = (t = d != null ? d : this.$1) != null ? t : void 0,
              g = s(p !== void 0 ? p : f),
              h = new (o("WAWebBotJourneyWamEvent").BotJourneyWamEvent)({
                appSessionId: o("WAWebGetSharedSessionId").getSharedSessionId(),
                actionType: a,
                botEntryPoint: f,
                rawBotEntryPoint: g != null ? g : void 0,
                botPersonaId: (r = this.$4) != null ? r : void 0,
                uiSurface: _,
                aiSessionId: l,
                eventTsMs: m,
                additionalCategory: i,
                conversationStarterName: c,
                conversationStarterIndex: u,
              }),
              y = o("WAWebBotLoggingUtils").getBotEntryPointTypeName(f),
              C = o("WAWebBotLoggingUtils").getChatFilterActionTypeName(a);
            (o("WALogger").LOG(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "BotJourneyWamEvent:commit entryPoint=",
                  " actionType=",
                  "",
                ])),
              y,
              C,
            ),
              h.commit());
          }),
          (n.logAiChatClick = function () {
            this.log({
              actionType: o("WAWebWamEnumChatFilterActionTypes")
                .CHAT_FILTER_ACTION_TYPES.AI_CHAT_CLICK,
            });
          }),
          (n.logTosView = function (t) {
            this.log({
              actionType: o("WAWebWamEnumChatFilterActionTypes")
                .CHAT_FILTER_ACTION_TYPES.AI_TOS_VIEW,
              entryPoint: t,
            });
          }),
          (n.logTosAccept = function (t) {
            this.log({
              actionType: o("WAWebWamEnumChatFilterActionTypes")
                .CHAT_FILTER_ACTION_TYPES.AI_TOS_ACCEPT_CLICK,
              entryPoint: t,
            });
          }),
          (n.logTosDismiss = function (t) {
            this.log({
              actionType: o("WAWebWamEnumChatFilterActionTypes")
                .CHAT_FILTER_ACTION_TYPES.AI_TOS_DISMISS_CLICK,
              entryPoint: t,
            });
          }),
          (n.logNullStatePromptSend = function (t, n) {
            var e,
              r,
              a = Date.now();
            (this.log({
              actionType: o("WAWebWamEnumChatFilterActionTypes")
                .CHAT_FILTER_ACTION_TYPES.CONVERSATION_STARTER_TAP,
              uiSurface: o("WAWebWamEnumTsSurface").TS_SURFACE.META_AI_CHAT,
              aiSessionId: (e = this.$5) != null ? e : void 0,
              conversationStarterName: t != null ? t : void 0,
              conversationStarterIndex: n,
              eventTsMs: a,
            }),
              this.log({
                actionType: o("WAWebWamEnumChatFilterActionTypes")
                  .CHAT_FILTER_ACTION_TYPES.AI_NULL_STATE_PROMPT_SEND,
                entryPoint: o("WAWebWamEnumBotEntryPointType")
                  .BOT_ENTRY_POINT_TYPE.AI_NULL_STATE,
                originEntryPoint: this.$1,
                uiSurface: o("WAWebWamEnumTsSurface").TS_SURFACE.META_AI_CHAT,
                aiSessionId: (r = this.$5) != null ? r : void 0,
                eventTsMs: a,
              }));
          }),
          (n.logModeSelectionImpression = function (t) {
            var e;
            t === void 0 &&
              (t = o("WAWebWamEnumTsSurface").TS_SURFACE.META_AI_CHAT_COMPOSER);
            var n = this.$1;
            n != null &&
              this.log({
                actionType: o("WAWebWamEnumChatFilterActionTypes")
                  .CHAT_FILTER_ACTION_TYPES.MODE_SELECTION_IMPRESSION,
                entryPoint: n,
                uiSurface: t,
                aiSessionId: (e = this.$5) != null ? e : void 0,
                eventTsMs: Date.now(),
              });
          }),
          (n.logModeSelectionClick = function (t) {
            var e;
            (t === void 0 &&
              (t = o("WAWebWamEnumTsSurface").TS_SURFACE
                .META_AI_MODE_SELECTION_BOTTOM_SHEET),
              this.$1 != null &&
                this.log({
                  actionType: o("WAWebWamEnumChatFilterActionTypes")
                    .CHAT_FILTER_ACTION_TYPES.MODE_SELECTION_CLICK,
                  uiSurface: t,
                  aiSessionId: (e = this.$5) != null ? e : void 0,
                  eventTsMs: Date.now(),
                }));
          }),
          t
        );
      })(),
      c = new u();
    l.BotJourneyLogger = c;
  },
  98,
);
