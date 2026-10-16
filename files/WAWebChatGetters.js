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
      M = c("aiLastHandoffActor"),
      w = c("bbProEntrypointEnabled", { default: !1 }),
      A = c("tcToken"),
      F = c("tcTokenTimestamp"),
      O = c("previewT"),
      B = u(
        function (e) {
          var t = e[0];
          return r("WAWebWid").isUser(t);
        },
        [_],
      ),
      W = u(
        function (e) {
          var t = e[0];
          return r("WAWebWid").isPSA(t);
        },
        [_],
      ),
      q = u(
        function (e) {
          var t = e[0];
          return r("WAWebWid").isIAS(t);
        },
        [_],
      ),
      U = u(
        function (e) {
          var t = e[0];
          return r("WAWebWid").isMetaForBusiness(t);
        },
        [_],
      ),
      V = u(
        function (e) {
          var t = e[0];
          return r("WAWebWid").isGroup(t);
        },
        [_],
      ),
      H = u(
        function (e) {
          var t = e[0];
          return r("WAWebWid").isBroadcast(t);
        },
        [_],
      ),
      G = u(
        function (e) {
          var t = e[0];
          return r("WAWebWid").isNewsletter(t);
        },
        [_],
      ),
      z = u(
        function (e) {
          var t = e[0];
          return r("WAWebWid").isBot(t);
        },
        [_],
      ),
      j = u(
        function (e) {
          var t = e[0];
          return o("WAWebBotUtils").isMetaAiBot(t);
        },
        [_],
      ),
      K = u(
        function (e) {
          var t = e[0];
          return o("WAWebBotUtils").isBusinessAssistantBot(t);
        },
        [_],
      ),
      Q = u(
        function (e) {
          var t = e[0];
          return o("WAWebBotUtils").isHatchBot(t);
        },
        [_],
      ),
      X = u(
        function (e) {
          var t = e[0];
          return o("WAWebBotUtils").isBotChannelFBID(t);
        },
        [_],
      ),
      Y = u(
        function (e) {
          var t = e[0],
            n = e[1];
          return !t && !n;
        },
        [H, W],
      ),
      J = u(o("WAWebBoolFunc").returnTrue, [H]),
      Z = u(
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
      (l.getAiLastHandoffActor = M),
      (l.getBBProEntrypointEnabled = w),
      (l.getTcToken = A),
      (l.getTcTokenTimestamp = F),
      (l.getPreviewT = O),
      (l.getIsUser = B),
      (l.getIsPSA = W),
      (l.getIsIAS = q),
      (l.getIsMetaForBusiness = U),
      (l.getIsGroup = V),
      (l.getIsBroadcast = H),
      (l.getIsNewsletter = G),
      (l.getIsBot = z),
      (l.getIsMetaAiBot = j),
      (l.getIsBusinessAssistantBot = K),
      (l.getIsHatchBot = Q),
      (l.getIsBotChannel = X),
      (l.getIsEligibleForContactSync = Y),
      (l.getCanUnread = J),
      (l.getHasUnread = Z));
  },
  98,
);
