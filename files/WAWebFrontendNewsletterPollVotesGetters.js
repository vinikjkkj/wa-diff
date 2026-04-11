__d(
  "WAWebFrontendNewsletterPollVotesGetters",
  [
    "WAWebAck",
    "WAWebGetters",
    "WAWebGettersCaches",
    "WAWebNewsletterPollVotesGetters",
  ],
  function (t, n, r, o, a, i, l) {
    var e = o("WAWebGetters").createGetterFactories({
        root: o("WAWebNewsletterPollVotesGetters").getNewsletterPollVotesUnsafe,
        createCache:
          o("WAWebGettersCaches").createFrontendNewsletterPollVotesCache,
      }),
      s = e.clearCacheFor,
      u = e.computed,
      c = e.field,
      d = s,
      m = c("isSendFailure", { default: !1 }),
      p = u(
        function (e) {
          var t = e[0],
            n = e[1],
            r = t != null && t < o("WAWebAck").ACK.CLOCK;
          return r || !!n;
        },
        [o("WAWebNewsletterPollVotesGetters").getAck, m],
      );
    ((l.clearFrontendNewsletterPollVotesGetterCacheFor = d),
      (l.getIsFailed = p));
  },
  98,
);
