__d(
  "WAWebBotJourneyLogger",
  [
    "WALogger",
    "WAWebBotJourneyWamEvent",
    "WAWebBotLoggingUtils",
    "WAWebGetSharedSessionId",
    "WAWebWamEnumChatFilterActionTypes",
    "WAWebWamEnumTsSurface",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = (function () {
        function t() {}
        var n = t.prototype;
        return (
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
              s = n.entryPoint,
              u = n.eventTsMs,
              c = n.uiSurface,
              d = (t = s != null ? s : this.$1) != null ? t : void 0,
              m =
                d != null
                  ? o(
                      "WAWebBotLoggingUtils",
                    ).getBotMetricsEntryPointFromBotEntryPoint(d)
                  : void 0,
              p =
                m != null
                  ? o(
                      "WAWebBotLoggingUtils",
                    ).getBotOriginFromBotMetricsEntryPoint(m)
                  : void 0,
              _ = new (o("WAWebBotJourneyWamEvent").BotJourneyWamEvent)({
                appSessionId: o("WAWebGetSharedSessionId").getSharedSessionId(),
                actionType: a,
                botEntryPoint: d,
                rawBotEntryPoint: p != null ? p : void 0,
                botPersonaId: (r = this.$4) != null ? r : void 0,
                uiSurface: c,
                aiSessionId: l,
                eventTsMs: u,
                additionalCategory: i,
              }),
              f = o("WAWebBotLoggingUtils").getBotEntryPointTypeName(d),
              g = o("WAWebBotLoggingUtils").getChatFilterActionTypeName(a);
            (o("WALogger").LOG(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "BotJourneyWamEvent:commit entryPoint=",
                  " actionType=",
                  "",
                ])),
              f,
              g,
            ),
              _.commit());
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
          (n.logModeSelectionImpression = function (t) {
            var e = t.aiSessionId,
              n = t.uiSurface,
              r =
                n === void 0
                  ? o("WAWebWamEnumTsSurface").TS_SURFACE.META_AI_CHAT_COMPOSER
                  : n;
            this.log({
              actionType: o("WAWebWamEnumChatFilterActionTypes")
                .CHAT_FILTER_ACTION_TYPES.MODE_SELECTION_IMPRESSION,
              uiSurface: r,
              aiSessionId: e != null ? e : void 0,
              eventTsMs: Date.now(),
            });
          }),
          (n.logModeSelectionClick = function (t) {
            var e = t.aiSessionId,
              n = t.uiSurface,
              r =
                n === void 0
                  ? o("WAWebWamEnumTsSurface").TS_SURFACE
                      .META_AI_MODE_SELECTION_BOTTOM_SHEET
                  : n;
            this.log({
              actionType: o("WAWebWamEnumChatFilterActionTypes")
                .CHAT_FILTER_ACTION_TYPES.MODE_SELECTION_CLICK,
              uiSurface: r,
              aiSessionId: e != null ? e : void 0,
              eventTsMs: Date.now(),
            });
          }),
          t
        );
      })(),
      u = new s();
    l.BotJourneyLogger = u;
  },
  98,
);
