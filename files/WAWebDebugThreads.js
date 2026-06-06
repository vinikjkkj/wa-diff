__d(
  "WAWebDebugThreads",
  [
    "WALogger",
    "WAWebBotUtils",
    "WAWebChatCollection",
    "WAWebChatEntryPoint",
    "WAWebCmd",
    "WAWebDeleteAiThreadsAction",
    "WAWebFindChatAction",
    "WAWebRenameAiThreadAction",
    "WAWebThreadId",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c,
      d,
      m,
      p,
      _ = {
        openChatWithThread: (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(
            function* (e, t) {
              var n = o("WAWebWidFactory").createWid(e),
                a = yield o("WAWebFindChatAction").findOrCreateLatestChat(
                  n,
                  "debugCreateChat",
                ),
                i = a.chat,
                l = r("WAWebThreadId").from(t);
              yield o("WAWebCmd").Cmd.openChatBottom({
                chat: i,
                chatEntryPoint: o("WAWebChatEntryPoint").ChatEntryPoint
                  .Chatlist,
                threadId: l,
              });
            },
          );
          function t(t, n) {
            return e.apply(this, arguments);
          }
          return t;
        })(),
        openMetaAiChatThread: (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
            var t = yield o("WAWebFindChatAction").findOrCreateLatestChat(
                o("WAWebBotUtils").META_BOT_PN_WID,
                "debugCreateChat",
              ),
              n = t.chat,
              a = r("WAWebThreadId").from(e);
            yield o("WAWebCmd").Cmd.openChatBottom({
              chat: n,
              chatEntryPoint: o("WAWebChatEntryPoint").ChatEntryPoint
                .BotChatListShortcut,
              threadId: a,
            });
          });
          function t(t) {
            return e.apply(this, arguments);
          }
          return t;
        })(),
        deleteAiThreads: (function () {
          var t = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
            o("WALogger").LOG(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[debug][deleteThreads] Starting deletion of ",
                  " threads",
                ])),
              t.length,
            );
            var n = o("WAWebChatCollection").ChatCollection.get(
              o("WAWebBotUtils").META_BOT_PN_WID,
            );
            if (!n) {
              o("WALogger").LOG(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "[debug][deleteAiThreads] failed to get chat for ",
                    "",
                  ])),
                o("WAWebBotUtils").META_BOT_PN_WID,
              );
              return;
            }
            var a = t.map(function (e) {
              return r("WAWebThreadId").from(e);
            });
            (yield o("WAWebDeleteAiThreadsAction").deleteAiThreadsAction(
              n.id,
              a,
            ),
              o("WALogger").LOG(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "[debug][deleteThreads] Completed deletion",
                  ])),
              ));
          });
          function a(e) {
            return t.apply(this, arguments);
          }
          return a;
        })(),
        renameAiThread: (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(
            function* (e, t) {
              o("WALogger").LOG(
                c ||
                  (c = babelHelpers.taggedTemplateLiteralLoose([
                    "[debug][renameAiThread] Renaming thread ",
                    ' to "',
                    '"',
                  ])),
                e,
                t,
              );
              var n = o("WAWebChatCollection").ChatCollection.get(
                o("WAWebBotUtils").META_BOT_PN_WID,
              );
              if (!n || !n.aiThreads) {
                o("WALogger").LOG(
                  d ||
                    (d = babelHelpers.taggedTemplateLiteralLoose([
                      "[debug][renameAiThread] failed to get chat or aiThreads for ",
                      "",
                    ])),
                  o("WAWebBotUtils").META_BOT_PN_WID,
                );
                return;
              }
              var r = n.aiThreads.get(e);
              if (!r) {
                o("WALogger").LOG(
                  m ||
                    (m = babelHelpers.taggedTemplateLiteralLoose([
                      "[debug][renameAiThread] failed to get AI thread for ",
                      "",
                    ])),
                  e,
                );
                return;
              }
              (yield o("WAWebRenameAiThreadAction").renameAiThreadAction(
                r,
                t,
                n.id,
              ),
                o("WALogger").LOG(
                  p ||
                    (p = babelHelpers.taggedTemplateLiteralLoose([
                      "[debug][renameAiThread] Completed rename",
                    ])),
                ));
            },
          );
          function t(t, n) {
            return e.apply(this, arguments);
          }
          return t;
        })(),
      };
    l.default = _;
  },
  98,
);
