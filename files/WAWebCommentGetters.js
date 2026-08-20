__d(
  "WAWebCommentGetters",
  ["WAWebAck", "WAWebGetters", "WAWebGettersCaches", "WAWebUserPrefsMeUser"],
  function (t, n, r, o, a, i, l) {
    var e = o("WAWebGetters").createGetterFactories({
        createCache: o("WAWebGettersCaches").createCommentCache,
      }),
      s = e.clearCacheFor,
      u = e.computed,
      c = e.field,
      d = s,
      m = c("ack"),
      p = c("author"),
      _ = c("isSendFailure"),
      f = u(
        function (e) {
          var t = e[0],
            n = e[1],
            r = e[2],
            a =
              o("WAWebUserPrefsMeUser").isMeAccount(r) &&
              t != null &&
              t < o("WAWebAck").ACK.CLOCK;
          return a || !!n;
        },
        [m, _, p],
      );
    ((l.clearCommentGetterCacheFor = d),
      (l.getAck = m),
      (l.getAuthor = p),
      (l.getIsSendFailure = _),
      (l.getIsFailed = f));
  },
  98,
);
