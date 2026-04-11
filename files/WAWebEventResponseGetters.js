__d(
  "WAWebEventResponseGetters",
  ["WAWebGetters", "WAWebGettersCaches"],
  function (t, n, r, o, a, i, l) {
    var e = o("WAWebGetters").createGetterFactories({
        createCache: o("WAWebGettersCaches").createEventResponseCache,
      }),
      s = e.clearCacheFor,
      u = e.field,
      c = e.unsafeIdentityGetter,
      d = s,
      m = c,
      p = u("sender"),
      _ = u("senderTimestampMs");
    ((l.clearEventResponseGetterCacheFor = d),
      (l.getEventResponseUnsafe = m),
      (l.getSender = p),
      (l.getSenderTimestampMs = _));
  },
  98,
);
