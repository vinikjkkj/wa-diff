__d(
  "WAWebChatGetters",
  [
    "WAWebBoolFunc",
    "WAWebBotUtils",
    "WAWebGetters",
    "WAWebGettersCaches",
    "WAWebWid",
  ],
  function (t, n, r, o, a, i, l) {
    var e = o("WAWebGetters").createGetterFactories({
        createCache: o("WAWebGettersCaches").createChatCache,
      }),
      s = e.clearCacheFor,
      u = e.computed,
      c = e.field,
      d = e.unsafeIdentityGetter,
      m = s,
      p = d,
      _ = c("id"),
      f = c("t"),
      g = c("unreadCount", { default: 0 }),
      h = c("archive"),
      y = c("isReadOnly"),
      C = c("isLocked"),
      b = c("muteExpiration", { default: 0 }),
      v = c("isAutoMuted", { default: !1 }),
      S = c("name"),
      R = c("pin"),
      L = c("labels"),
      E = c("endOfHistoryTransferType"),
      k = c("pendingInitialLoading", { default: !1 }),
      I = c("changeNumberOldJid"),
      T = c("changeNumberNewJid"),
      D = c("chatlistPreview"),
      x = c("lastReactionPreview"),
      $ = c("draftMessage"),
      P = c("capiThreadControl"),
      N = c("suggestedRepliesEnabled"),
      M = c("bbProStatus"),
      w = c("tcToken"),
      A = c("tcTokenTimestamp"),
      F = c("previewT"),
      O = u(
        function (e) {
          var t = e[0];
          return r("WAWebWid").isUser(t);
        },
        [_],
      ),
      B = u(
        function (e) {
          var t = e[0];
          return r("WAWebWid").isPSA(t);
        },
        [_],
      ),
      W = u(
        function (e) {
          var t = e[0];
          return r("WAWebWid").isIAS(t);
        },
        [_],
      ),
      q = u(
        function (e) {
          var t = e[0];
          return r("WAWebWid").isGroup(t);
        },
        [_],
      ),
      U = u(
        function (e) {
          var t = e[0];
          return r("WAWebWid").isBroadcast(t);
        },
        [_],
      ),
      V = u(
        function (e) {
          var t = e[0];
          return r("WAWebWid").isNewsletter(t);
        },
        [_],
      ),
      H = u(
        function (e) {
          var t = e[0];
          return r("WAWebWid").isBot(t);
        },
        [_],
      ),
      G = u(
        function (e) {
          var t = e[0];
          return o("WAWebBotUtils").isMetaAiBot(t);
        },
        [_],
      ),
      z = u(
        function (e) {
          var t = e[0];
          return o("WAWebBotUtils").isBusinessAssistantBot(t);
        },
        [_],
      ),
      j = u(
        function (e) {
          var t = e[0];
          return o("WAWebBotUtils").isHatchBot(t);
        },
        [_],
      ),
      K = u(
        function (e) {
          var t = e[0];
          return o("WAWebBotUtils").isBotChannelFBID(t);
        },
        [_],
      ),
      Q = u(
        function (e) {
          var t = e[0],
            n = e[1];
          return !t && !n;
        },
        [U, B],
      ),
      X = u(o("WAWebBoolFunc").returnTrue, [U]),
      Y = u(
        function (e) {
          var t = e[0];
          return t !== 0;
        },
        [g],
      );
    ((l.clearChatGetterCacheFor = m),
      (l.getChatUnsafe = p),
      (l.getId = _),
      (l.getT = f),
      (l.getUnreadCount = g),
      (l.getArchive = h),
      (l.getIsReadOnly = y),
      (l.getIsLocked = C),
      (l.getMuteExpiration = b),
      (l.getIsAutoMuted = v),
      (l.getName = S),
      (l.getPin = R),
      (l.getLabels = L),
      (l.getEndOfHistoryTransferType = E),
      (l.getPendingInitialLoading = k),
      (l.getChangeNumberOldJid = I),
      (l.getChangeNumberNewJid = T),
      (l.getChatlistPreview = D),
      (l.getLastReactionPreview = x),
      (l.getDraftMessage = $),
      (l.getCapiThreadControl = P),
      (l.getSuggestedRepliesEnabled = N),
      (l.getBBProStatus = M),
      (l.getTcToken = w),
      (l.getTcTokenTimestamp = A),
      (l.getPreviewT = F),
      (l.getIsUser = O),
      (l.getIsPSA = B),
      (l.getIsIAS = W),
      (l.getIsGroup = q),
      (l.getIsBroadcast = U),
      (l.getIsNewsletter = V),
      (l.getIsBot = H),
      (l.getIsMetaAiBot = G),
      (l.getIsBusinessAssistantBot = z),
      (l.getIsHatchBot = j),
      (l.getIsBotChannel = K),
      (l.getIsEligibleForContactSync = Q),
      (l.getCanUnread = X),
      (l.getHasUnread = Y));
  },
  98,
);
