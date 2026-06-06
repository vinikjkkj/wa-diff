__d(
  "WAWebThreadJourneyLogger",
  [
    "WALogger",
    "WAWebAiThreadsUserJourneyWamEvent",
    "WAWebBotJourneyLogger",
    "WAWebBotLoggingUtils",
    "WAWebChatThreadLogging",
    "WAWebGetSharedSessionId",
    "WAWebPonyfillsCryptoRandomUUID",
    "WAWebWamEnumMetaAiActionEntryPoint",
    "WAWebWamEnumThreadActionTypes",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = (function () {
        function t() {
          var e = this;
          this.logFirstPromptSent = function (t, n) {
            ((e.$3 = t),
              e.log({
                threadActionType: o("WAWebWamEnumThreadActionTypes")
                  .THREAD_ACTION_TYPES.FIRST_PROMPT_SENT,
                threadCreationTs: n == null ? void 0 : n.toString(),
                threadId: t,
              }));
          };
        }
        var n = t.prototype;
        return (
          (n.maybeGenAiSessionId = function () {
            this.$1 == null &&
              ((this.$1 = r("WAWebPonyfillsCryptoRandomUUID")()),
              o("WAWebBotJourneyLogger").BotJourneyLogger.setAiSessionId(
                this.$1,
              ));
          }),
          (n.getAiSessionId = function () {
            return this.$1;
          }),
          (n.getLastMessageSentAiThreadId = function () {
            return this.$3;
          }),
          (n.clearAiThreadLoggingContext = function () {
            ((this.$1 = null),
              (this.$3 = null),
              o("WAWebBotJourneyLogger").BotJourneyLogger.setAiSessionId(null));
          }),
          (n.log = async function (n) {
            var t,
              r = n.entryPoint,
              a = n.hashedThreadId,
              i = n.threadActionType,
              l = n.threadCreationTs,
              u = n.threadId,
              c = this.$1;
            if (c == null) {
              o("WALogger").LOG(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "ThreadJourneyWamEvent:skipped - aiSessionId is null",
                  ])),
              );
              return;
            }
            var d = (t = r != null ? r : this.$2) != null ? t : void 0;
            r != null && (this.$2 = r);
            var m = o("WAWebBotJourneyLogger").BotJourneyLogger.getEntryPoint(),
              p =
                m != null
                  ? o(
                      "WAWebBotLoggingUtils",
                    ).getBotMetricsEntryPointFromBotEntryPoint(m)
                  : void 0,
              _ =
                p != null
                  ? o(
                      "WAWebBotLoggingUtils",
                    ).getBotOriginFromBotMetricsEntryPoint(p)
                  : void 0,
              f =
                a != null
                  ? a
                  : u != null
                    ? await o("WAWebChatThreadLogging").getThreadIDHMAC(u)
                    : void 0,
              g = new (o(
                "WAWebAiThreadsUserJourneyWamEvent",
              ).AiThreadsUserJourneyWamEvent)({
                aiSessionId: c,
                appSessionId: o("WAWebGetSharedSessionId").getSharedSessionId(),
                conversationThreadCreationTs: l != null ? l : void 0,
                conversationThreadId: f != null ? f : void 0,
                eventTsMs: Date.now(),
                metaAiActionEntryPoint: d,
                rawBotEntryPoint: _ != null ? _ : void 0,
                threadActionType: i,
              }),
              h = o("WAWebBotLoggingUtils").getMetaAiActionEntryPointName(d),
              y = o("WAWebBotLoggingUtils").getThreadActionTypeName(i);
            (o("WALogger").LOG(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "ThreadJourneyWamEvent:commit entryPoint=",
                  " actionType=",
                  "",
                ])),
              h,
              y,
            ),
              g.commit());
          }),
          (n.logNewChatClick = function (t) {
            this.log({
              entryPoint: t,
              threadActionType: o("WAWebWamEnumThreadActionTypes")
                .THREAD_ACTION_TYPES.CLICK_NEW_CHAT,
            });
          }),
          (n.logThreeDotMenuClick = function () {
            this.log({
              entryPoint: o("WAWebWamEnumMetaAiActionEntryPoint")
                .META_AI_ACTION_ENTRY_POINT.THREE_DOT_MENU,
              threadActionType: o("WAWebWamEnumThreadActionTypes")
                .THREAD_ACTION_TYPES.THREE_DOT_MENU,
            });
          }),
          (n.logThreadEnter = function (t, n, r) {
            this.log({
              entryPoint: n,
              threadActionType: o("WAWebWamEnumThreadActionTypes")
                .THREAD_ACTION_TYPES.THREAD_ENTER,
              threadCreationTs: r == null ? void 0 : r.toString(),
              threadId: t,
            });
          }),
          (n.logThreadRename = function (t, n) {
            this.log({
              threadActionType: o("WAWebWamEnumThreadActionTypes")
                .THREAD_ACTION_TYPES.RENAME,
              threadCreationTs: n == null ? void 0 : n.toString(),
              threadId: t,
            });
          }),
          (n.logThreadPin = function (t, n) {
            this.log({
              threadActionType: o("WAWebWamEnumThreadActionTypes")
                .THREAD_ACTION_TYPES.PIN,
              threadCreationTs: n == null ? void 0 : n.toString(),
              threadId: t,
            });
          }),
          (n.logThreadUnpin = function (t, n) {
            this.log({
              threadActionType: o("WAWebWamEnumThreadActionTypes")
                .THREAD_ACTION_TYPES.UNPIN,
              threadCreationTs: n == null ? void 0 : n.toString(),
              threadId: t,
            });
          }),
          (n.logThreadDelete = function (t, n) {
            var e = this;
            (async function () {
              var r = await Promise.all(
                t.map(function (e) {
                  return o("WAWebChatThreadLogging").getThreadIDHMAC(e);
                }),
              );
              await Promise.all(
                r.map(function (t, r) {
                  var a;
                  return e.log({
                    hashedThreadId: t,
                    threadActionType: o("WAWebWamEnumThreadActionTypes")
                      .THREAD_ACTION_TYPES.DELETE,
                    threadCreationTs:
                      n == null || (a = n[r]) == null ? void 0 : a.toString(),
                  });
                }),
              );
            })();
          }),
          (n.logSearchResultShown = function () {
            this.log({
              threadActionType: o("WAWebWamEnumThreadActionTypes")
                .THREAD_ACTION_TYPES.SEARCH_RESULT_SHOWN,
            });
          }),
          (n.logSearchResultClick = function (t, n) {
            this.log({
              threadActionType: o("WAWebWamEnumThreadActionTypes")
                .THREAD_ACTION_TYPES.SEARCH_RESULT_CLICK,
              threadCreationTs: n == null ? void 0 : n.toString(),
              threadId: t,
            });
          }),
          t
        );
      })(),
      c = new u();
    l.ThreadJourneyLogger = c;
  },
  98,
);
