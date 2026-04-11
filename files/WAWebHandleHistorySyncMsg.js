__d(
  "WAWebHandleHistorySyncMsg",
  [
    "Promise",
    "WAFilteredCatch",
    "WALogger",
    "WAWebAddonProcessMsgs",
    "WAWebBackendErrors",
    "WAWebCheckUpdateOrphanReactions",
    "WAWebDBProcessRecentAndFullHistorySyncMessage",
    "WAWebNoop",
    "WAWebSyncdOrphanFactory",
    "WAWebWorkerSafeBackendApi",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u;
    function c(e, t, n, r, o, a, i, l, s) {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (t, a, i, l, c, d, m, p, _) {
            return (
              o("WALogger").LOG(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[history sync] handling recent/full/on-demand sync msgs",
                  ])),
              ),
              yield (u || (u = n("Promise"))).resolve(),
              o("WAWebDBProcessRecentAndFullHistorySyncMessage")
                .storeRecentAndFullHistSyncMessages(t, a, c, d, m, p, _)
                .then(function () {
                  var e = a.map(function (e) {
                      return e;
                    }),
                    n = t.map(function (e) {
                      return e.id.toString();
                    });
                  return (
                    o(
                      "WAWebCheckUpdateOrphanReactions",
                    ).checkUpdateForOrphanReactions(n),
                    o("WAWebSyncdOrphanFactory").checkOrphanMutations(n, e)
                  );
                })
                .then(function () {
                  return (u || (u = n("Promise"))).all(i).then(function (e) {
                    var t;
                    return o("WAWebAddonProcessMsgs").processHistoryMsgs(
                      (t = []).concat.apply(t, e),
                    );
                  });
                })
                .then(
                  n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
                    for (var e of l) {
                      if (!e || !e.id || !e.id.remote) return;
                      var t = e.id.remote;
                      if (t.isNewsletter()) return;
                      yield o(
                        "WAWebWorkerSafeBackendApi",
                      ).workerSafeSendAndReceive("processLastMsgs", {
                        chatId: t,
                        msgObjs: [e],
                        meta: { add: "last", isHistory: !0 },
                        processMessagesOrigin: "historyMsgHandlerAction",
                        chatMsgsCollection: null,
                      });
                    }
                  }),
                )
                .catch(
                  o("WAFilteredCatch").filteredCatch(
                    o("WAWebBackendErrors").LogoutDrop,
                    r("WAWebNoop"),
                  ),
                )
                .catch(function (e) {
                  o("WALogger")
                    .ERROR(
                      s ||
                        (s = babelHelpers.taggedTemplateLiteralLoose([
                          "[history sync] error occurred",
                        ])),
                    )
                    .catching(e)
                    .sendLogs(
                      "handleProgressiveHistorySyncMsgs: error storing/processing multiple messages",
                    );
                })
            );
          },
        )),
        d.apply(this, arguments)
      );
    }
    l.handleProgressiveHistorySyncMsgs = c;
  },
  98,
);
