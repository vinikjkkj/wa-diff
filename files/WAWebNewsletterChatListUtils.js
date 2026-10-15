__d(
  "WAWebNewsletterChatListUtils",
  [
    "WATimeUtils",
    "WAWebChatComparator",
    "WAWebChatGetters",
    "WAWebChatMessageSearch",
    "WAWebChatSearchFilters",
    "WAWebContactSearchGatingUtils",
    "WAWebNewsletterCollection",
    "WAWebNewsletterGatingUtils",
    "WAWebNewsletterMetadataGetters",
  ],
  function (t, n, r, o, a, i, l) {
    var e = new Set([
      o("WAWebChatSearchFilters").SearchFilters.UNREAD,
      o("WAWebChatSearchFilters").SearchFilters.CHANNELS,
    ]);
    function s(e) {
      var t = e.newsletterMetadata;
      return (
        t != null &&
        o("WAWebNewsletterMetadataGetters").getIsSubscribedOrOwned(t) &&
        !e.isLocked
      );
    }
    function u(e) {
      return s(e) && !e.archive;
    }
    function c(e) {
      return s(e) && e.archive;
    }
    function d(t) {
      return t == null
        ? !0
        : t.label != null && t.label !== ""
          ? !1
          : t.kind == null || e.has(t.kind);
    }
    function m(e) {
      var t = e.activeChat,
        n = e.includeArchived,
        r = n === void 0 ? !1 : n,
        a = e.matchesFilter,
        i = e.newsletters,
        l = e.searchText,
        c = e.stickyIds,
        d = function (n) {
          return i.flatMap(function (e) {
            var o = r ? s(e) : u(e);
            if (!o) return [];
            if (t === e || (c != null && c.has(e.id.toString())))
              return [{ chat: e }];
            if (!a(e)) return [];
            if (n == null) return [{ chat: e }];
            var i = n(e);
            return i != null ? [{ chat: e, searchMatch: i }] : [];
          });
        };
      if (!l) return d(null);
      var m = d(function (e) {
        var t;
        return (t = e.newsletterMetadata) == null
          ? void 0
          : t.searchMatchExact(l);
      });
      return m.length > 0 ||
        !o("WAWebContactSearchGatingUtils").canTermsMeetFuzzySearchThreshold(
          l.split(/\s+/).filter(Boolean),
        )
        ? m
        : d(function (e) {
            var t;
            return (t = e.newsletterMetadata) == null
              ? void 0
              : t.searchMatchFuzzy(l);
          });
    }
    function p(e, t) {
      return t.length === 0
        ? e
        : [].concat(e, t).sort(function (e, t) {
            return r("WAWebChatComparator")(e.chat, t.chat);
          });
    }
    function _() {
      return o("WAWebNewsletterGatingUtils").isChannelsInChatListEnabled()
        ? r("WAWebNewsletterCollection").countWhere(function (e) {
            return s(e) && e.showUnreadInTitle;
          })
        : 0;
    }
    function f() {
      var e = 0,
        t = 0;
      return o("WAWebNewsletterGatingUtils").isChannelsInChatListEnabled()
        ? (r("WAWebNewsletterCollection").forEach(function (n) {
            u(n) &&
              (o("WAWebChatMessageSearch").matchFilter(n, {
                kind: o("WAWebChatSearchFilters").SearchFilters.UNREAD,
              }) && t++,
              o("WAWebChatGetters").getHasUnread(n) && e++);
          }),
          { channelsPillCount: e, unreadPillCount: t })
        : { channelsPillCount: e, unreadPillCount: t };
    }
    function g(e) {
      return e.map(function (e) {
        var t,
          n =
            (t = r("WAWebNewsletterCollection").get(e.id)) == null
              ? void 0
              : t.t;
        return n == null || (e.t != null && e.t >= n)
          ? e
          : babelHelpers.extends({}, e, {
              t: o("WATimeUtils").castToUnixTime(n),
            });
      });
    }
    ((l.isUnlockedSubscribedOrOwnedChannel = s),
      (l.isChatListChannel = u),
      (l.isArchivedChatListChannel = c),
      (l.shouldIncludeChannelsForFilter = d),
      (l.getChatListChannelResults = m),
      (l.mergeChatListResults = p),
      (l.getChannelsTitleUnreadCount = _),
      (l.getChannelsFilterPillUnreadCounts = f),
      (l.getNewsletterChatsWithLatestTimestamps = g));
  },
  98,
);
