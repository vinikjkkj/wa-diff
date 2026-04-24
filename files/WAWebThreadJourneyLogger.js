__d(
  "WAWebThreadJourneyLogger",
  [
    "Promise",
    "WALogger",
    "WAWebAiThreadsUserJourneyWamEvent",
    "WAWebBotJourneyLogger",
    "WAWebBotLoggingUtils",
    "WAWebChatThreadLogging",
    "WAWebGetSharedSessionId",
    "WAWebPonyfillsCryptoRandomUUID",
    "WAWebWamEnumMetaAiActionEntryPoint",
    "WAWebWamEnumThreadActionTypes",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c = (function () {
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
        var a = t.prototype;
        return (
          (a.maybeGenAiSessionId = function () {
            this.$1 == null &&
              (this.$1 = r("WAWebPonyfillsCryptoRandomUUID")());
          }),
          (a.getAiSessionId = function () {
            return this.$1;
          }),
          (a.getLastMessageSentAiThreadId = function () {
            return this.$3;
          }),
          (a.clearAiThreadLoggingContext = function () {
            ((this.$1 = null), (this.$3 = null));
          }),
          (a.log = (function () {
            var t = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (t) {
                var n,
                  r = t.entryPoint,
                  a = t.hashedThreadId,
                  i = t.threadActionType,
                  l = t.threadCreationTs,
                  u = t.threadId,
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
                var d = (n = r != null ? r : this.$2) != null ? n : void 0;
                r != null && (this.$2 = r);
                var m = o(
                    "WAWebBotJourneyLogger",
                  ).BotJourneyLogger.getEntryPoint(),
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
                        ? yield o("WAWebChatThreadLogging").getThreadIDHMAC(u)
                        : void 0,
                  g = new (o(
                    "WAWebAiThreadsUserJourneyWamEvent",
                  ).AiThreadsUserJourneyWamEvent)({
                    aiSessionId: c,
                    appSessionId: o(
                      "WAWebGetSharedSessionId",
                    ).getSharedSessionId(),
                    conversationThreadCreationTs: l != null ? l : void 0,
                    conversationThreadId: f != null ? f : void 0,
                    eventTsMs: Date.now(),
                    metaAiActionEntryPoint: d,
                    rawBotEntryPoint: _ != null ? _ : void 0,
                    threadActionType: i,
                  }),
                  h = o("WAWebBotLoggingUtils").getMetaAiActionEntryPointName(
                    d,
                  ),
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
              },
            );
            function r(e) {
              return t.apply(this, arguments);
            }
            return r;
          })()),
          (a.logNewChatClick = function (t) {
            this.log({
              entryPoint: t,
              threadActionType: o("WAWebWamEnumThreadActionTypes")
                .THREAD_ACTION_TYPES.CLICK_NEW_CHAT,
            });
          }),
          (a.logThreeDotMenuClick = function () {
            this.log({
              entryPoint: o("WAWebWamEnumMetaAiActionEntryPoint")
                .META_AI_ACTION_ENTRY_POINT.THREE_DOT_MENU,
              threadActionType: o("WAWebWamEnumThreadActionTypes")
                .THREAD_ACTION_TYPES.THREE_DOT_MENU,
            });
          }),
          (a.logThreadEnter = function (t, n, r) {
            this.log({
              entryPoint: n,
              threadActionType: o("WAWebWamEnumThreadActionTypes")
                .THREAD_ACTION_TYPES.THREAD_ENTER,
              threadCreationTs: r == null ? void 0 : r.toString(),
              threadId: t,
            });
          }),
          (a.logThreadRename = function (t, n) {
            this.log({
              threadActionType: o("WAWebWamEnumThreadActionTypes")
                .THREAD_ACTION_TYPES.RENAME,
              threadCreationTs: n == null ? void 0 : n.toString(),
              threadId: t,
            });
          }),
          (a.logThreadPin = function (t, n) {
            this.log({
              threadActionType: o("WAWebWamEnumThreadActionTypes")
                .THREAD_ACTION_TYPES.PIN,
              threadCreationTs: n == null ? void 0 : n.toString(),
              threadId: t,
            });
          }),
          (a.logThreadUnpin = function (t, n) {
            this.log({
              threadActionType: o("WAWebWamEnumThreadActionTypes")
                .THREAD_ACTION_TYPES.UNPIN,
              threadCreationTs: n == null ? void 0 : n.toString(),
              threadId: t,
            });
          }),
          (a.logThreadDelete = function (t, r) {
            var e = this;
            n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              var a = yield (u || (u = n("Promise"))).all(
                t.map(function (e) {
                  return o("WAWebChatThreadLogging").getThreadIDHMAC(e);
                }),
              );
              yield u.all(
                a.map(function (t, n) {
                  var a;
                  return e.log({
                    hashedThreadId: t,
                    threadActionType: o("WAWebWamEnumThreadActionTypes")
                      .THREAD_ACTION_TYPES.DELETE,
                    threadCreationTs:
                      r == null || (a = r[n]) == null ? void 0 : a.toString(),
                  });
                }),
              );
            })();
          }),
          (a.logSearchResultShown = function () {
            this.log({
              threadActionType: o("WAWebWamEnumThreadActionTypes")
                .THREAD_ACTION_TYPES.SEARCH_RESULT_SHOWN,
            });
          }),
          (a.logSearchResultClick = function (t, n) {
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
      d = new c();
    l.ThreadJourneyLogger = d;
  },
  98,
);
