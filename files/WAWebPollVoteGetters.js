__d(
  "WAWebPollVoteGetters",
  ["WAWebGetters", "WAWebGettersCaches"],
  function (t, n, r, o, a, i, l) {
    var e = o("WAWebGetters").createGetterFactories({
        createCache: o("WAWebGettersCaches").createPollVotesCache,
      }),
      s = e.clearCacheFor,
      u = e.computed,
      c = e.field,
      d = e.unsafeIdentityGetter,
      m = s,
      p = d,
      _ = c("parentMsgKey"),
      f = c("sender"),
      g = c("ack"),
      h = c("t"),
      y = c("senderTimestampMs"),
      C = c("selectedOptionLocalIds"),
      b = u(
        function (e) {
          var t = e[0];
          return t.length === 0;
        },
        [C],
      ),
      v = u(
        function (e) {
          var t = e[0],
            n = e[1];
          return t == null || t === 0 ? n : t * 1e3;
        },
        [h, y],
      );
    ((l.clearPollVoteGetterCacheFor = m),
      (l.getPollVoteUnsafe = p),
      (l.getParentMsgKey = _),
      (l.getSender = f),
      (l.getAck = g),
      (l.getIsUnvote = b),
      (l.getTimestamp = v));
  },
  98,
);
