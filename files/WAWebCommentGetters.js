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
      d = e.unsafeIdentityGetter,
      m = s,
      p = d,
      _ = o("WAWebGetters").createGetterFactories({
        root: p,
        createCache: o("WAWebGettersCaches").createFrontendCommentCache,
      }),
      f = _.clearCacheFor,
      g = _.field,
      h = f,
      y = c("ack"),
      C = c("author"),
      b = c("body"),
      v = c("isSendFailure"),
      S = c("parentMsgKey"),
      R = c("protocolMessageKey"),
      L = c("read"),
      E = c("subtype"),
      k = c("t"),
      I = g("links"),
      T = g("linksIndexParsed"),
      D = g("phoneNumbers"),
      x = g("phoneNumbersIndexParsed"),
      $ = g("revokeSender"),
      P = u(
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
        [y, v, C],
      );
    ((l.clearCommentGetterCacheFor = m),
      (l.getCommentUnsafe = p),
      (l.clearFrontendCommentGetterCacheFor = h),
      (l.getAck = y),
      (l.getAuthor = C),
      (l.getBody = b),
      (l.getIsSendFailure = v),
      (l.getParentMsgKey = S),
      (l.getProtocolMessageKey = R),
      (l.getRead = L),
      (l.getSubtype = E),
      (l.getT = k),
      (l.getLinks = I),
      (l.getLinksIndexParsed = T),
      (l.getPhoneNumbers = D),
      (l.getPhoneNumbersIndexParsed = x),
      (l.getRevokeSender = $),
      (l.getIsFailed = P));
  },
  98,
);
