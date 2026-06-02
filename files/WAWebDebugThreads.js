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
        openChatWithThread: async function (t, n) {
          var e = o("WAWebWidFactory").createWid(t),
            a = await o("WAWebFindChatAction").findOrCreateLatestChat(
              e,
              "debugCreateChat",
            ),
            i = a.chat,
            l = r("WAWebThreadId").from(n);
          await o("WAWebCmd").Cmd.openChatBottom({
            chat: i,
            chatEntryPoint: o("WAWebChatEntryPoint").ChatEntryPoint.Chatlist,
            threadId: l,
          });
        },
        openMetaAiChatThread: async function (t) {
          var e = await o("WAWebFindChatAction").findOrCreateLatestChat(
              o("WAWebBotUtils").META_BOT_PN_WID,
              "debugCreateChat",
            ),
            n = e.chat,
            a = r("WAWebThreadId").from(t);
          await o("WAWebCmd").Cmd.openChatBottom({
            chat: n,
            chatEntryPoint: o("WAWebChatEntryPoint").ChatEntryPoint
              .BotChatListShortcut,
            threadId: a,
          });
        },
        deleteAiThreads: async function (n) {
          o("WALogger").LOG(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "[debug][deleteThreads] Starting deletion of ",
                " threads",
              ])),
            n.length,
          );
          var t = o("WAWebChatCollection").ChatCollection.get(
            o("WAWebBotUtils").META_BOT_PN_WID,
          );
          if (!t) {
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
          var a = n.map(function (e) {
            return r("WAWebThreadId").from(e);
          });
          (await o("WAWebDeleteAiThreadsAction").deleteAiThreadsAction(t.id, a),
            o("WALogger").LOG(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "[debug][deleteThreads] Completed deletion",
                ])),
            ));
        },
        renameAiThread: async function (t, n) {
          o("WALogger").LOG(
            c ||
              (c = babelHelpers.taggedTemplateLiteralLoose([
                "[debug][renameAiThread] Renaming thread ",
                ' to "',
                '"',
              ])),
            t,
            n,
          );
          var e = o("WAWebChatCollection").ChatCollection.get(
            o("WAWebBotUtils").META_BOT_PN_WID,
          );
          if (!e || !e.aiThreads) {
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
          var r = e.aiThreads.get(t);
          if (!r) {
            o("WALogger").LOG(
              m ||
                (m = babelHelpers.taggedTemplateLiteralLoose([
                  "[debug][renameAiThread] failed to get AI thread for ",
                  "",
                ])),
              t,
            );
            return;
          }
          (await o("WAWebRenameAiThreadAction").renameAiThreadAction(
            r,
            n,
            e.id,
          ),
            o("WALogger").LOG(
              p ||
                (p = babelHelpers.taggedTemplateLiteralLoose([
                  "[debug][renameAiThread] Completed rename",
                ])),
            ));
        },
      };
    l.default = _;
  },
  98,
);
