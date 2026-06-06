__d(
  "WAWebReconcileMetaAiUnreadCountHelper",
  [
    "WALogger",
    "WAWebBackendApi",
    "WAWebBotGating",
    "WAWebBotUtils",
    "WAWebReconcileUnreadCountsForBotJob",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    async function s(e) {
      var t = await o("WAWebReconcileUnreadCountsForBotJob").reconcileForBot(e);
      t != null &&
        o("WAWebBackendApi").frontendFireAndForget("updateChatUnreadCount", {
          chatId: e,
          unreadCount: t.unreadCount,
        });
    }
    async function u() {
      if (o("WAWebBotGating").isAiChatThreadsEnabled())
        for (
          var t = [
              o("WAWebBotUtils").META_BOT_PN_WID,
              o("WAWebBotUtils").META_BOT_FBID_WID,
            ],
            n = await Promise.allSettled(
              t.map(function (e) {
                return s(e);
              }),
            ),
            r = 0;
          r < n.length;
          r++
        ) {
          var a = n[r];
          if (a.status === "rejected") {
            var i = t[r].toString(),
              l = String(a.reason);
            o("WALogger").LOG(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[reconcile-unread] reconcileForBotAndNotifyFrontend failed ",
                  " ",
                  "",
                ])),
              i,
              l,
            );
          }
        }
    }
    l.reconcileMetaAiUnreadCounts = u;
  },
  98,
);
