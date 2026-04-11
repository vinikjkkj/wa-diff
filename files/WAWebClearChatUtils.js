__d(
  "WAWebClearChatUtils",
  [
    "WAFilteredCatch",
    "WAWebBackendErrors",
    "WAWebChatClearBridge",
    "WAWebMaybeClearChatAiThreads",
    "WAWebNoop",
    "WAWebStatusCollection",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      if (
        e &&
        t &&
        (e.deleteMessages(t), e.id && e.id.isGroup() && t.length > 0)
      ) {
        var n = o("WAWebStatusCollection").StatusCollection.get(e.id);
        (n == null || n.revokeMsgs(t),
          (n == null ? void 0 : n.totalCount) === 0 && n.delete());
      }
    }
    function s(e, t) {
      var n = e.promises;
      if (n.sendClear) return n.sendClear;
      var r = e.getLastMsgKeyForAction();
      return (
        (n.sendClear = o("WAWebChatClearBridge").sendClear(e, r, t)),
        n.sendClear
      );
    }
    function u(t, n) {
      return n
        .then(function (n) {
          n.result &&
            (e(t, n.result),
            o("WAWebMaybeClearChatAiThreads").maybeClearAiThreadsForChat(t));
        })
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
    ((l.initClearChat = s), (l.finalizeClearChat = u));
  },
  98,
);
