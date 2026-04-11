__d(
  "WAWebPinInChatGetters",
  ["WAWebGetters", "WAWebGettersCaches"],
  function (t, n, r, o, a, i, l) {
    var e = o("WAWebGetters").createGetterFactories({
        createCache: o("WAWebGettersCaches").createPinInChatsCache,
      }),
      s = e.clearCacheFor,
      u = e.field,
      c = e.unsafeIdentityGetter,
      d = s,
      m = c,
      p = u("sender"),
      _ = u("ack");
    ((l.clearPinInChatGetterCacheFor = d),
      (l.getPinInChatUnsafe = m),
      (l.getSender = p),
      (l.getAck = _));
  },
  98,
);
