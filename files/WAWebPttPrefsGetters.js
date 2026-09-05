__d(
  "WAWebPttPrefsGetters",
  ["WAWebGetters", "WAWebGettersCaches"],
  function (t, n, r, o, a, i, l) {
    var e = o("WAWebGetters").createGetterFactories({
        createCache: o("WAWebGettersCaches").createPttPrefsCache,
      }),
      s = e.clearCacheFor,
      u = e.field,
      c = s,
      d = u("playbackRate"),
      m = u("outOfChatPlayerMessage"),
      p = u("playbackControlMessageId"),
      _ = u("isOocPlayerClosedByUser");
    ((l.clearPttPrefsGetterCacheFor = c),
      (l.getPlaybackRate = d),
      (l.getOutOfChatPlayerMessage = m),
      (l.getPlaybackControlMessageId = p),
      (l.getIsOocPlayerClosedByUser = _));
  },
  98,
);
