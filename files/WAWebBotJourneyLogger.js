__d(
  "WAWebBotJourneyLogger",
  [
    "WALogger",
    "WAWebBotJourneyWamEvent",
    "WAWebBotLoggingUtils",
    "WAWebGetSharedSessionId",
    "WAWebWamEnumChatFilterActionTypes",
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
              i = n.entryPoint,
              l = (t = i != null ? i : this.$1) != null ? t : void 0,
              s = new (o("WAWebBotJourneyWamEvent").BotJourneyWamEvent)({
                appSessionId: o("WAWebGetSharedSessionId").getSharedSessionId(),
                actionType: a,
                botEntryPoint: l,
                botPersonaId: (r = this.$4) != null ? r : void 0,
              }),
              u = o("WAWebBotLoggingUtils").getBotEntryPointTypeName(l),
              c = o("WAWebBotLoggingUtils").getChatFilterActionTypeName(a);
            (o("WALogger").LOG(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "BotJourneyWamEvent:commit entryPoint=",
                  " actionType=",
                  "",
                ])),
              u,
              c,
            ),
              s.commit());
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
          t
        );
      })(),
      u = new s();
    l.BotJourneyLogger = u;
  },
  98,
);
