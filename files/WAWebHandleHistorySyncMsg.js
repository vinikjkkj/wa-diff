__d(
  "WAWebHandleHistorySyncMsg",
  [
    "WAFilteredCatch",
    "WALogger",
    "WAWebAddonProcessMsgs",
    "WAWebBackendErrors",
    "WAWebCheckUpdateOrphanReactions",
    "WAWebDBProcessRecentAndFullHistorySyncMessage",
    "WAWebNoop",
    "WAWebSyncdOrphanWorkerCompatible",
    "WAWebWorkerSafeBackendApi",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s;
    async function u(t) {
      var n = t.associatedMsgs,
        a = t.chatsWithRecentOrFullSyncMsgs,
        i = t.chunkOrder,
        l = t.lastMsgs,
        u = t.missingParentsCache,
        c = t.recentOrFullSyncMsgs,
        d = t.syncType,
        m = t.threadMsgs,
        p = t.unifiedAddons;
      return (
        o("WALogger").LOG(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "[history sync] handling recent/full/on-demand sync msgs",
            ])),
        ),
        await Promise.resolve(),
        o("WAWebDBProcessRecentAndFullHistorySyncMessage")
          .storeRecentAndFullHistSyncMessages(c, a, d, i, n, u, m)
          .then(function () {
            var e = a.map(function (e) {
                return e;
              }),
              t = c.map(function (e) {
                return e.id.toString();
              });
            o("WAWebCheckUpdateOrphanReactions").checkUpdateForOrphanReactions(
              t,
            );
            var n = m.flatMap(function (e) {
              var t;
              return ((t = e.threadIds) != null ? t : []).map(function (e) {
                return e.toString();
              });
            });
            return o("WAWebSyncdOrphanWorkerCompatible").checkOrphanMutations(
              t,
              e,
              n,
            );
          })
          .then(function () {
            return Promise.all(p).then(function (e) {
              var t;
              return o("WAWebAddonProcessMsgs").processHistoryMsgs(
                (t = []).concat.apply(t, e),
              );
            });
          })
          .then(async function () {
            for (var e of l) {
              if (!e || !e.id || !e.id.remote) return;
              var t = e.id.remote;
              if (t.isNewsletter()) return;
              await o("WAWebWorkerSafeBackendApi").workerSafeSendAndReceive(
                "processLastMsgs",
                {
                  chatId: t,
                  msgObjs: [e],
                  meta: { add: "last", isHistory: !0 },
                  processMessagesOrigin: "historyMsgHandlerAction",
                  chatMsgsCollection: null,
                },
              );
            }
          })
          .catch(
            o("WAFilteredCatch").filteredCatch(
              o("WAWebBackendErrors").LogoutDrop,
              r("WAWebNoop"),
            ),
          )
          .catch(function (e) {
            var t = r("getErrorSafe")(e);
            o("WALogger")
              .ERROR(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "[history sync] error occurred",
                  ])),
              )
              .catching(t)
              .sendLogs(
                "handleProgressiveHistorySyncMsgs: error storing/processing multiple messages",
              );
          })
      );
    }
    l.handleProgressiveHistorySyncMsgs = u;
  },
  98,
);
