__d(
  "WAWebReconcileMetaAiUnreadCountHelper",
  [
    "Promise",
    "WALogger",
    "WAWebBackendApi",
    "WAWebBotGating",
    "WAWebBotUtils",
    "WAWebReconcileUnreadCountsForBotJob",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s;
    function u(e) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield o(
            "WAWebReconcileUnreadCountsForBotJob",
          ).reconcileForBot(e);
          t != null &&
            o("WAWebBackendApi").frontendFireAndForget(
              "updateChatUnreadCount",
              { chatId: e, unreadCount: t.unreadCount },
            );
        })),
        c.apply(this, arguments)
      );
    }
    function d() {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          if (o("WAWebBotGating").isAiChatThreadsEnabled())
            for (
              var t = [
                  o("WAWebBotUtils").META_BOT_PN_WID,
                  o("WAWebBotUtils").META_BOT_FBID_WID,
                ],
                r = yield (s || (s = n("Promise"))).allSettled(
                  t.map(function (e) {
                    return u(e);
                  }),
                ),
                a = 0;
              a < r.length;
              a++
            ) {
              var i = r[a];
              i.status === "rejected" &&
                o("WALogger").LOG(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "[reconcile-unread] reconcileForBotAndNotifyFrontend failed for bot ",
                      ": ",
                      "",
                    ])),
                  t[a].toString(),
                  String(i.reason),
                );
            }
        })),
        m.apply(this, arguments)
      );
    }
    l.reconcileMetaAiUnreadCounts = d;
  },
  98,
);
