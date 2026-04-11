__d(
  "WAWebFrontendPollVoteGetters",
  [
    "WANullthrows",
    "WAWebAck",
    "WAWebContactCollection",
    "WAWebFrontendMsgGetters",
    "WAWebGetters",
    "WAWebGettersCaches",
    "WAWebMsgCollection",
    "WAWebPollVoteGetters",
    "WAWebUserPrefsMeUser",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = o("WAWebGetters").createGetterFactories({
        root: (e = o("WAWebPollVoteGetters")).getPollVoteUnsafe,
        createCache: o("WAWebGettersCaches").createFrontendPollVotesCache,
      }),
      u = s.clearCacheFor,
      c = s.computed,
      d = s.field,
      m = u,
      p = d("isSendFailure", { default: !1 }),
      _ = c(
        function (e) {
          var t = e[0],
            n = r("WANullthrows")(o("WAWebMsgCollection").MsgCollection.get(t));
          return r("WANullthrows")(
            o("WAWebFrontendMsgGetters").getAsPollCreation(n),
          );
        },
        [e.getParentMsgKey],
      ),
      f = c(
        function (e) {
          var t = e[0];
          return o("WAWebContactCollection").ContactCollection.gadd(t);
        },
        [e.getSender],
      ),
      g = c(
        function (e) {
          var t = e[0],
            n = e[1],
            r = e[2],
            a =
              o("WAWebUserPrefsMeUser").isMeAccount(t) &&
              n != null &&
              n < o("WAWebAck").ACK.CLOCK;
          return a || !!r;
        },
        [e.getSender, e.getAck, p],
      );
    ((l.clearFrontendPollVoteGetterCacheFor = m),
      (l.getParentMsg = _),
      (l.getSenderObj = f),
      (l.getIsFailed = g));
  },
  98,
);
