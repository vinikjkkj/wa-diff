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
      f = u("recordingUserIds"),
      g = u("typingUserIds"),
      h = u("withholdDisplayStage");
    ((l.clearFrontendPresenceGetterCacheFor = c),
      (l.getChatstate = d),
      (l.getForceDisplay = m),
      (l.getGroupOnlineCount = p),
      (l.getHasData = _),
      (l.getRecordingUserIds = f),
      (l.getTypingUserIds = g),
      (l.getWithholdDisplayStage = h));
  },
  98,
);
