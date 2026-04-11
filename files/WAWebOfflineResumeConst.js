__d(
  "WAWebOfflineResumeConst",
  ["$InternalEnum"],
  function (t, n, r, o, a, i) {
    var e = n("$InternalEnum").Mirrored([
        "INIT",
        "RESUME_ON_RESTART",
        "RESUME_WITH_OPEN_TAB",
        "COMPLETE",
      ]),
      l = 2e4,
      s = 100,
      u = 2e3,
      c = 6e4,
      d = 1e3,
      m = 1e3;
    ((i.ResumeStatus = e),
      (i.OFFLINE_STANZA_COUNT_CHECK_TIMEOUT_MS = l),
      (i.OFFLINE_STANZA_COUNT_LIMIT = s),
      (i.OFFLINE_DEVICE_SYNC_DELAY = u),
      (i.OFFLINE_STANZA_TIMEOUT_MS = c),
      (i.OFFLINE_PREVIEW_PERIOD_MS = d),
      (i.UI_UPDATE_TIME_MS = m));
  },
  66,
);
