__d(
  "WAWebHandleHistorySyncMsg",
  [
    "WAFilteredCatch",
    "WALogger",
    "WAWebAddonProcessMsgs",
    "WAWebBackendErrors",
    "WAWebCallsOnlyGating",
    "WAWebCheckUpdateOrphanReactions",
    "WAWebDBDrainBotOrphansForHistoryMsgs",
    "WAWebDBProcessRecentAndFullHistorySyncMessage",
    "WAWebNoop",
    "WAWebSyncdOrphanWorkerCompatible",
    "WAWebWorkerSafeBackendApi",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u;
    async function c(t) {
      var n = t.associatedMsgs,
        a = t.chatsWithRecentOrFullSyncMsgs,
        i = t.chunkOrder,
        l = t.lastMsgs,
        c = t.missingParentsCache,
        d = t.recentOrFullSyncMsgs,
        m = t.syncType,
        p = t.threadMsgs,
        _ = t.unifiedAddons;
      if (
        (o("WALogger").LOG(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "[history sync] handling recent/full/on-demand sync msgs",
            ])),
        ),
        !o("WAWebCallsOnlyGating").isCallsOnlyModeEnabled())
      )
        return (
          await Promise.resolve(),
          o("WAWebDBProcessRecentAndFullHistorySyncMessage")
            .storeRecentAndFullHistSyncMessages(d, a, m, i, n, c, p)
            .then(function () {
              var e = a.map(function (e) {
                  return e;
                }),
                t = d.map(function (e) {
                  return e.id.toString();
                });
              o("WAWebCheckUpdateOrphanReactions")
                .checkUpdateForOrphanReactions(t)
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
                      "handleProgressiveHistorySyncMsgs: error checking orphan reactions",
                    );
                });
              var n = p.flatMap(function (e) {
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
              return o(
                "WAWebDBDrainBotOrphansForHistoryMsgs",
              ).drainBotOrphansForHistoryMsgs(d);
            })
            .then(function () {
              return Promise.all(_).then(function (e) {
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
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
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
    l.handleProgressiveHistorySyncMsgs = c;
  },
  98,
);
