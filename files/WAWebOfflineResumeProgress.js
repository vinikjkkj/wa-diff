__d(
  "WAWebOfflineResumeProgress",
  ["fbt", "WAWebOfflineHandler"],
  function (t, n, r, o, a, i, l, s) {
    var e = { processed: null, total: null };
    function u() {
      var t =
        o(
          "WAWebOfflineHandler",
        ).OfflineMessageHandler.hasInitOfflineResumeManager() &&
        o(
          "WAWebOfflineHandler",
        ).OfflineMessageHandler.hasReceivedOfflinePreviewIb();
      if (!t) return e;
      var n = o(
        "WAWebOfflineHandler",
      ).OfflineMessageHandler.getOfflineMessageCount();
      return {
        processed: Math.min(
          o(
            "WAWebOfflineHandler",
          ).OfflineMessageHandler.getProcessedOfflineMessageCount(),
          n,
        ),
        total: n,
      };
    }
    function c(e, t) {
      return e == null || t == null || t === 0
        ? s._(/*BTDS*/ "Syncing messages")
        : s._(
            /*BTDS*/ '_j{"*":{"*":"Syncing messages {processed message count} \\\/ {total message count}"}}',
            [
              s._param("processed message count", e, [0]),
              s._param("total message count", t, [0]),
            ],
          );
    }
    ((l.getOfflineResumeProgress = u), (l.getSyncingMessagesLabel = c));
  },
  226,
);
