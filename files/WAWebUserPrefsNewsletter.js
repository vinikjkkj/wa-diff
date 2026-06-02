__d(
  "WAWebUserPrefsNewsletter",
  [
    "$InternalEnum",
    "WAWebNewsletterGatingUtils",
    "WAWebTimedCache",
    "WAWebUserPrefsIndexedDBStorage",
    "WAWebUserPrefsKeys",
    "WAWebUserPrefsStore",
  ],
  function (t, n, r, o, a, i, l) {
    function e() {
      var e = r("WAWebUserPrefsStore").get(
          o("WAWebUserPrefsKeys").MD_KEYS.NEWSLETTER_TAB_LAST_SEEN_TIMESTAMP,
        ),
        t = typeof e == "number" ? e : 0;
      return t;
    }
    function s(e) {
      r("WAWebUserPrefsStore").set(
        o("WAWebUserPrefsKeys").MD_KEYS.NEWSLETTER_TAB_LAST_SEEN_TIMESTAMP,
        e,
      );
    }
    function u() {
      var e = o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.get(
        o("WAWebUserPrefsKeys").KEYS.WA_WEB_CACHED_RECOMMENDED_NEWSLETTERS,
      );
      return o("WAWebTimedCache").getTimedCacheItemValue(
        e,
        o(
          "WAWebNewsletterGatingUtils",
        ).getRecommendedNewslettersRefreshInterval(),
      );
    }
    function c(e) {
      var t = o("WAWebTimedCache").createTimedCacheItem(e);
      return o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.set(
        o("WAWebUserPrefsKeys").KEYS.WA_WEB_CACHED_RECOMMENDED_NEWSLETTERS,
        t,
      );
    }
    var d = n("$InternalEnum").Mirrored(["FULL", "LIMITED"]),
      m = new (o("WAWebTimedCache").TimedMapCache)({
        mapLoad: function () {
          return o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.get(
            o("WAWebUserPrefsKeys").KEYS.WA_WEB_CACHED_NEWSLETTERS_SUBSCRIBERS,
          );
        },
        mapStore: function (t) {
          return o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.set(
            o("WAWebUserPrefsKeys").KEYS.WA_WEB_CACHED_NEWSLETTERS_SUBSCRIBERS,
            t,
          );
        },
        getCacheTtlMs: o("WAWebNewsletterGatingUtils")
          .getNewsletterSubscriberListCacheRefreshMs,
      });
    async function p(e) {
      var t = { view: d.LIMITED, newsletterJid: e },
        n = { view: d.FULL, newsletterJid: e };
      (await m.remove(t), await m.remove(n));
    }
    var _ = new (o("WAWebTimedCache").TimedMapCache)({
        mapLoad: function () {
          return o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.get(
            o("WAWebUserPrefsKeys").KEYS
              .WA_WEB_CACHED_NEWSLETTER_DIRECTORY_PAGES,
          );
        },
        mapStore: function (t) {
          return o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.set(
            o("WAWebUserPrefsKeys").KEYS
              .WA_WEB_CACHED_NEWSLETTER_DIRECTORY_PAGES,
            t,
          );
        },
        getCacheTtlMs: o("WAWebNewsletterGatingUtils")
          .getNewsletterDirectoryPageRefreshInterval,
      }),
      f = new (o("WAWebTimedCache").TimedMapCache)({
        mapLoad: function () {
          return o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.get(
            o("WAWebUserPrefsKeys").KEYS
              .WA_WEB_CACHED_NEWSLETTER_DIRECTORY_CATERGORY_PREVIEW,
          );
        },
        mapStore: function (t) {
          return o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.set(
            o("WAWebUserPrefsKeys").KEYS
              .WA_WEB_CACHED_NEWSLETTER_DIRECTORY_CATERGORY_PREVIEW,
            t,
          );
        },
        getCacheTtlMs: o("WAWebNewsletterGatingUtils")
          .getNewsletterDirectoryCategoriesPreviewRefreshIntervalMs,
      });
    ((l.getNewsletterTabLastSeenTimestamp = e),
      (l.setNewsletterTabLastSeenTimestamp = s),
      (l.getCachedRecommendedNewsletters = u),
      (l.setCachedRecommendedNewsletters = c),
      (l.ValidCachedNewsletterSubscriberKeys = d),
      (l.NewsletterSubscribersCache = m),
      (l.flushCachedNewsletterSubscribers = p),
      (l.NewsletterDirectoryPageCache = _),
      (l.NewsletterDirectoryCategoriesPreviewCache = f));
  },
  98,
);
