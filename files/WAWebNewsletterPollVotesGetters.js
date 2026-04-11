__d(
  "WAWebNewsletterPollVotesGetters",
  ["WAWebGetters", "WAWebGettersCaches"],
  function (t, n, r, o, a, i, l) {
    var e = o("WAWebGetters").createGetterFactories({
        createCache: o("WAWebGettersCaches").createNewsletterPollVotesCache,
      }),
      s = e.clearCacheFor,
      u = e.field,
      c = e.unsafeIdentityGetter,
      d = s,
      m = c,
      p = u("ack");
    ((l.clearNewsletterPollVotesGetterCacheFor = d),
      (l.getNewsletterPollVotesUnsafe = m),
      (l.getAck = p));
  },
  98,
);
