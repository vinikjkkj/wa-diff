__d(
  "WAWebStartupSyncProgressState",
  ["WAWebCmd", "WAWebOfflineHandler", "WAWebOfflineResumeProgress"],
  function (t, n, r, o, a, i, l) {
    function e() {
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
    function s(e) {
      return e != null && e.total !== 0;
    }
    function u(e, t) {
      return s(e) && !t.isNewsletter();
    }
    ((l.readStartupSyncProgress = e),
      (l.hasStartupSyncBacklog = s),
      (l.isConversationSyncChipVisible = u));
  },
  98,
);
