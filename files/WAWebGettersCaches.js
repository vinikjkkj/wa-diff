__d(
  "WAWebGettersCaches",
  [
    "WAWebABProps",
    "WAWebDummyCacheMap",
    "WAWebEnvironment",
    "WAWebLruCacheMap",
  ],
  function (t, n, r, o, a, i, l) {
    var e = function () {
        var e = o("WAWebABProps").getABPropConfigValue(
          "web_getters_lru_cache_size_limit",
        );
        return e > 0
          ? new (o("WAWebLruCacheMap").LruCacheMap)({ sizeLimit: e })
          : new Map();
      },
      s = function () {
        return r("WAWebEnvironment").isWindows
          ? o("WAWebABProps").getABPropConfigValue(
              "web_hybrid_getters_cache_enabled",
            )
            ? e()
            : new (o("WAWebDummyCacheMap").FakeCacheMap)()
          : e();
      },
      u = s,
      c = s,
      d = s,
      m = s,
      p = e,
      _ = e,
      f = s,
      g = s,
      h = s,
      y = s,
      C = s,
      b = s,
      v = s,
      S = s,
      R = s,
      L = s,
      E = s,
      k = s,
      I = s,
      T = s,
      D = s,
      x = s,
      $ = s,
      P = s,
      N = s,
      M = s,
      w = s,
      A = s,
      F = s;
    ((l.createMessagesCache = u),
      (l.createFrontendMessagesCache = c),
      (l.createChatCache = d),
      (l.createFrontendChatCache = m),
      (l.createContactsCache = p),
      (l.createFrontendContactsCache = _),
      (l.createLabelsCache = f),
      (l.createMuteCache = g),
      (l.createPinInChatsCache = h),
      (l.createFrontendPinInChatsCache = y),
      (l.createMsgInfosCache = C),
      (l.createPollVotesCache = b),
      (l.createFrontendPollVotesCache = v),
      (l.createNewsletterPollVotesCache = S),
      (l.createFrontendNewsletterPollVotesCache = R),
      (l.createSettingsCache = L),
      (l.createStickerModelMdCache = E),
      (l.createMediaEditControllerCache = k),
      (l.createOrderCache = I),
      (l.createOrderItemCache = T),
      (l.createQuickReplyCache = D),
      (l.createFrontendQuickReplyCache = x),
      (l.createStatusCache = $),
      (l.createFrontendStatusCache = P),
      (l.createRecordingSessionCache = N),
      (l.createEventResponseCache = M),
      (l.createFrontendEventResponseCache = w),
      (l.createCartCache = A),
      (l.createCatalogCache = F));
  },
  98,
);
