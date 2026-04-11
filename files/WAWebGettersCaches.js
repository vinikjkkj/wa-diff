__d(
  "WAWebGettersCaches",
  ["WAWebABProps", "WAWebDummyCacheMap", "WAWebEnvironment"],
  function (t, n, r, o, a, i, l) {
    var e = function () {
        return r("WAWebEnvironment").isWindows
          ? o("WAWebABProps").getABPropConfigValue(
              "web_hybrid_getters_cache_enabled",
            )
            ? new Map()
            : new (o("WAWebDummyCacheMap").FakeCacheMap)()
          : new Map();
      },
      s = e,
      u = e,
      c = e,
      d = e,
      m = function () {
        return new Map();
      },
      p = function () {
        return new Map();
      },
      _ = e,
      f = e,
      g = e,
      h = e,
      y = e,
      C = e,
      b = e,
      v = e,
      S = e,
      R = e,
      L = e,
      E = e,
      k = e,
      I = e,
      T = e,
      D = e,
      x = e,
      $ = e,
      P = e,
      N = e,
      M = e,
      w = e,
      A = e;
    ((l.createMessagesCache = s),
      (l.createFrontendMessagesCache = u),
      (l.createChatCache = c),
      (l.createFrontendChatCache = d),
      (l.createContactsCache = m),
      (l.createFrontendContactsCache = p),
      (l.createLabelsCache = _),
      (l.createMuteCache = f),
      (l.createPinInChatsCache = g),
      (l.createFrontendPinInChatsCache = h),
      (l.createMsgInfosCache = y),
      (l.createPollVotesCache = C),
      (l.createFrontendPollVotesCache = b),
      (l.createNewsletterPollVotesCache = v),
      (l.createFrontendNewsletterPollVotesCache = S),
      (l.createSettingsCache = R),
      (l.createStickerModelMdCache = L),
      (l.createMediaEditControllerCache = E),
      (l.createOrderCache = k),
      (l.createOrderItemCache = I),
      (l.createQuickReplyCache = T),
      (l.createFrontendQuickReplyCache = D),
      (l.createStatusCache = x),
      (l.createFrontendStatusCache = $),
      (l.createRecordingSessionCache = P),
      (l.createEventResponseCache = N),
      (l.createFrontendEventResponseCache = M),
      (l.createCartCache = w),
      (l.createCatalogCache = A));
  },
  98,
);
