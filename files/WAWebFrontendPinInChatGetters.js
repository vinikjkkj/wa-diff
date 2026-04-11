__d(
  "WAWebFrontendPinInChatGetters",
  [
    "WAWebAck",
    "WAWebGetters",
    "WAWebGettersCaches",
    "WAWebPinInChatGetters",
    "WAWebUserPrefsMeUser",
  ],
  function (t, n, r, o, a, i, l) {
    var e = o("WAWebGetters").createGetterFactories({
        root: o("WAWebPinInChatGetters").getPinInChatUnsafe,
        createCache: o("WAWebGettersCaches").createFrontendPinInChatsCache,
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
            r = e[2],
            a =
              o("WAWebUserPrefsMeUser").isMeAccount(t) &&
              n != null &&
              n < o("WAWebAck").ACK.CLOCK;
          return a || !!r;
        },
        [
          o("WAWebPinInChatGetters").getSender,
          o("WAWebPinInChatGetters").getAck,
          m,
        ],
      );
    ((l.clearFrontendPinInChatGetterCacheFor = d), (l.getIsFailed = p));
  },
  98,
);
