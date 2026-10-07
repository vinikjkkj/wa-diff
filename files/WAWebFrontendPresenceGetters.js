__d(
  "WAWebFrontendPresenceGetters",
  ["WAWebGetters", "WAWebGettersCaches", "WAWebPresenceGetters"],
  function (t, n, r, o, a, i, l) {
    var e = o("WAWebGetters").createGetterFactories({
        root: o("WAWebPresenceGetters").getPresenceUnsafe,
        createCache: o("WAWebGettersCaches").createFrontendPresenceCache,
      }),
      s = e.clearCacheFor,
      u = e.field,
      c = s,
      d = u("chatstate"),
      m = u("forceDisplay"),
      p = u("groupOnlineCount"),
      _ = u("hasData"),
      f = u("isOnline"),
      g = u("recordingUserIds"),
      h = u("typingUserIds"),
      y = u("withholdDisplayStage");
    ((l.clearFrontendPresenceGetterCacheFor = c),
      (l.getChatstate = d),
      (l.getForceDisplay = m),
      (l.getGroupOnlineCount = p),
      (l.getHasData = _),
      (l.getIsOnline = f),
      (l.getRecordingUserIds = g),
      (l.getTypingUserIds = h),
      (l.getWithholdDisplayStage = y));
  },
  98,
);
