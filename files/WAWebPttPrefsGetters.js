__d(
  "WAWebPttPrefsGetters",
  ["WAWebGetters", "WAWebGettersCaches"],
  function (t, n, r, o, a, i, l) {
    var e = o("WAWebGetters").createGetterFactories({
        createCache: o("WAWebGettersCaches").createPttPrefsCache,
      }),
      s = e.field,
      u = s("playbackRate"),
      c = s("outOfChatPlayerMessage"),
      d = s("playbackControlMessageId"),
      m = s("isOocPlayerClosedByUser");
    ((l.getPlaybackRate = u),
      (l.getOutOfChatPlayerMessage = c),
      (l.getPlaybackControlMessageId = d),
      (l.getIsOocPlayerClosedByUser = m));
  },
  98,
);
