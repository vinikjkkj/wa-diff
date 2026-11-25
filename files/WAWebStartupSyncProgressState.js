__d(
  "WAWebStartupSyncProgressState",
  ["WAWebCmd", "WAWebOfflineHandler", "WAWebOfflineResumeProgress"],
  function (t, n, r, o, a, i, l) {
    var e = 5e3;
    function s() {
      return o("WAWebCmd").Cmd.isOfflineDeliveryEnd ||
        (o(
          "WAWebOfflineHandler",
        ).OfflineMessageHandler.hasInitOfflineResumeManager() &&
          o(
            "WAWebOfflineHandler",
          ).OfflineMessageHandler.isResumeOnSocketDisconnectInProgress())
        ? null
        : o("WAWebOfflineResumeProgress").getOfflineResumeProgress();
    }
    function u(e) {
      return e != null && e.total !== 0;
    }
    function c(e, t) {
      return u(e) && !t.isNewsletter();
    }
    ((l.LONG_LOAD_TOAST_DELAY_MS = e),
      (l.readStartupSyncProgress = s),
      (l.hasStartupSyncBacklog = u),
      (l.isConversationSyncChipVisible = c));
  },
  98,
);
