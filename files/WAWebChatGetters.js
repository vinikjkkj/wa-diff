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
      b = c("aeaThreadState"),
      v = c("muteExpiration", { default: 0 }),
      S = c("isAutoMuted", { default: !1 }),
      R = c("name"),
      L = c("pin"),
      E = c("labels"),
      k = c("endOfHistoryTransferType"),
      I = c("pendingInitialLoading", { default: !1 }),
      T = c("changeNumberOldJid"),
      D = c("changeNumberNewJid"),
      x = c("chatlistPreview"),
      $ = c("lastReactionPreview"),
      P = c("draftMessage"),
      N = c("capiThreadControl"),
      M = c("suggestedRepliesEnabled"),
      w = c("aiLastHandoffActor"),
      A = c("bbProEntrypointEnabled", { default: !1 }),
      F = c("tcToken"),
      O = c("tcTokenTimestamp"),
      B = c("previewT"),
      W = u(
        function (e) {
          var t = e[0];
          return r("WAWebWid").isUser(t);
        },
        [_],
      ),
      q = u(
        function (e) {
          var t = e[0];
          return r("WAWebWid").isPSA(t);
        },
        [_],
      ),
      U = u(
        function (e) {
          var t = e[0];
          return r("WAWebWid").isIAS(t);
        },
        [_],
      ),
      V = u(
        function (e) {
          var t = e[0];
          return r("WAWebWid").isMetaForBusiness(t);
        },
        [_],
      ),
      H = u(
        function (e) {
          var t = e[0];
          return r("WAWebWid").isGroup(t);
        },
        [_],
      ),
      G = u(
        function (e) {
          var t = e[0];
          return r("WAWebWid").isBroadcast(t);
        },
        [_],
      ),
      z = u(
        function (e) {
          var t = e[0];
          return r("WAWebWid").isNewsletter(t);
        },
        [_],
      ),
      j = u(
        function (e) {
          var t = e[0];
          return r("WAWebWid").isBot(t);
        },
        [_],
      ),
      K = u(
        function (e) {
          var t = e[0];
          return o("WAWebBotUtils").isMetaAiBot(t);
        },
        [_],
      ),
      Q = u(
        function (e) {
          var t = e[0];
          return o("WAWebBotUtils").isBusinessAssistantBot(t);
        },
        [_],
      ),
      X = u(
        function (e) {
          var t = e[0];
          return o("WAWebBotUtils").isHatchBot(t);
        },
        [_],
      ),
      Y = u(
        function (e) {
          var t = e[0];
          return o("WAWebBotUtils").isBotChannelFBID(t);
        },
        [_],
      ),
      J = u(
        function (e) {
          var t = e[0],
            n = e[1];
          return !t && !n;
        },
        [G, q],
      ),
      Z = u(o("WAWebBoolFunc").returnTrue, [G]),
      ee = u(
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
      (l.getAeaThreadState = b),
      (l.getMuteExpiration = v),
      (l.getIsAutoMuted = S),
      (l.getName = R),
      (l.getPin = L),
      (l.getLabels = E),
      (l.getEndOfHistoryTransferType = k),
      (l.getPendingInitialLoading = I),
      (l.getChangeNumberOldJid = T),
      (l.getChangeNumberNewJid = D),
      (l.getChatlistPreview = x),
      (l.getLastReactionPreview = $),
      (l.getDraftMessage = P),
      (l.getCapiThreadControl = N),
      (l.getSuggestedRepliesEnabled = M),
      (l.getAiLastHandoffActor = w),
      (l.getBBProEntrypointEnabled = A),
      (l.getTcToken = F),
      (l.getTcTokenTimestamp = O),
      (l.getPreviewT = B),
      (l.getIsUser = W),
      (l.getIsPSA = q),
      (l.getIsIAS = U),
      (l.getIsMetaForBusiness = V),
      (l.getIsGroup = H),
      (l.getIsBroadcast = G),
      (l.getIsNewsletter = z),
      (l.getIsBot = j),
      (l.getIsMetaAiBot = K),
      (l.getIsBusinessAssistantBot = Q),
      (l.getIsHatchBot = X),
      (l.getIsBotChannel = Y),
      (l.getIsEligibleForContactSync = J),
      (l.getCanUnread = Z),
      (l.getHasUnread = ee));
  },
  98,
);
