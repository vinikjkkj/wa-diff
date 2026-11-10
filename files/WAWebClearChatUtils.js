__d(
  "WAWebClearChatUtils",
  [
    "WAFilteredCatch",
    "WALogger",
    "WAWebBackendErrors",
    "WAWebBackendRuntime",
    "WAWebChatClearBridge",
    "WAWebChatDeleteService",
    "WAWebChatStoreService",
    "WAWebDBUpdateChatTable",
    "WAWebLimitSharingModelUtils",
    "WAWebMaybeClearChatAiThreads",
    "WAWebNoop",
    "WAWebStatusCollection",
    "WAWebUpdateUnreadChatAction",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(e, t) {
      if (
        e &&
        t &&
        (e.deleteMessages(t),
        o("WAWebLimitSharingModelUtils").createAcp2MsgOnChatClear(e.id),
        e.id && e.id.isGroup() && t.length > 0)
      ) {
        var n = o("WAWebStatusCollection").StatusCollection.get(e.id);
        (n == null || n.revokeMsgs(t),
          (n == null ? void 0 : n.totalCount) === 0 && n.delete());
      }
    }
    function u(e, t) {
      var n = e.promises;
      if (n.sendClear) return n.sendClear;
      var r = e.getLastMsgKeyForAction();
      return (
        (n.sendClear = (
          o("WAWebBackendRuntime").isWebDiBackendEnabled()
            ? o("WAWebBackendRuntime").runtime(
                o("WAWebChatDeleteService").ChatDeleteService,
              ).sendClear
            : o("WAWebChatClearBridge").sendClear
        )(e, r, t)),
        n.sendClear
      );
    }
    function c(t, a, i) {
      return a
        .then(
          (function () {
            var a = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (n) {
                (t.set({ createdLocally: !1 }),
                  n.result &&
                    (s(t, n.result),
                    o(
                      "WAWebMaybeClearChatAiThreads",
                    ).maybeClearAiThreadsForChat(t)),
                  yield (
                    o("WAWebBackendRuntime").isWebDiBackendEnabled()
                      ? o("WAWebBackendRuntime").runtime(
                          o("WAWebChatStoreService").ChatStoreService,
                        ).updateChatTable
                      : o("WAWebDBUpdateChatTable").updateChatTable
                  )(t.id, { createdLocally: !1 }),
                  n.result &&
                    i > 0 &&
                    (yield o("WAWebUpdateUnreadChatAction")
                      .markSeen(t, i)
                      .catch(function (t) {
                        o("WALogger")
                          .WARN(
                            e ||
                              (e = babelHelpers.taggedTemplateLiteralLoose([
                                "finalizeClearChat: markSeen failed",
                              ])),
                          )
                          .catching(r("getErrorSafe")(t))
                          .sendLogs("clear-chat-mark-seen-failed");
                      })));
              },
            );
            return function (e) {
              return a.apply(this, arguments);
            };
          })(),
        )
        .catch(
          o("WAFilteredCatch").filteredCatch(
            o("WAWebBackendErrors").ServerStatusCodeError,
            r("WAWebNoop"),
          ),
        )
        .finally(function () {
          t.promises.sendClear = null;
        });
    }
    ((l.initClearChat = u), (l.finalizeClearChat = c));
  },
  98,
);
