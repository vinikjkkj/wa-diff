__d(
  "useWAWebArchivedChatsActivityIndicator",
  [
    "WAWebChatCollection",
    "WAWebChatGetters",
    "WAWebConstantsDeprecated",
    "WAWebFrontendChatGetters",
    "WAWebNewsletterCollection",
    "WAWebNewsletterGatingUtils",
    "react",
    "react-compiler-runtime",
    "useWAWebListener",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = s.useEffect,
      c = s.useState;
    function d() {
      var e = o("react-compiler-runtime").c(7),
        t = c(0),
        n = t[0],
        a = t[1],
        i = c(!1),
        l = i[0],
        s = i[1],
        d;
      e[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((d = function () {
            var e = _,
              t = o("WAWebChatCollection").ChatCollection.filter(e).length,
              n = o("WAWebNewsletterGatingUtils").isChannelsInChatListEnabled()
                ? r("WAWebNewsletterCollection").filter(e).length
                : 0;
            a(t + n);
          }),
          (e[0] = d))
        : (d = e[0]);
      var f = d,
        g;
      e[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((g = function () {
            var e = o("WAWebChatCollection").ChatCollection.filter(p),
              t = e.some(m);
            s(t);
          }),
          (e[1] = g))
        : (g = e[1]);
      var h = g;
      (o("useWAWebListener").useListener(
        o("WAWebChatCollection").ChatCollection,
        "add remove reset change:archive change:unreadCount change:pendingSeenCount change:muteExpiration",
        f,
      ),
        o("useWAWebListener").useListener(
          o("WAWebNewsletterGatingUtils").isChannelsInChatListEnabled()
            ? r("WAWebNewsletterCollection")
            : null,
          "add remove change:archive change:unreadCount",
          f,
        ),
        o("useWAWebListener").useListener(
          o("WAWebChatCollection").ChatCollection,
          "change:archive change:hasUnreadMention change:archiveAtMentionViewedInDrawer",
          h,
        ));
      var y, C;
      (e[2] === Symbol.for("react.memo_cache_sentinel")
        ? ((y = function () {
            (f(), h());
          }),
          (C = []),
          (e[2] = y),
          (e[3] = C))
        : ((y = e[2]), (C = e[3])),
        u(y, C));
      var b;
      return (
        e[4] !== n || e[5] !== l
          ? ((b = { unreadCount: n, showUnreadMentionIcon: l }),
            (e[4] = n),
            (e[5] = l),
            (e[6] = b))
          : (b = e[6]),
        b
      );
    }
    function m(e) {
      var t,
        n,
        r =
          (t =
            (n = e.groupMetadata) == null
              ? void 0
              : n.unreadMentionMetadata.getUnreadMentionCount()) != null
            ? t
            : 0,
        o = !e.archiveAtMentionViewedInDrawer;
      return r > 0 && o;
    }
    function p(e) {
      return (
        e.archive &&
        o("WAWebChatGetters").getIsGroup(e) &&
        (o("WAWebFrontendChatGetters").getOptimisticUnreadCount(e) > 0 ||
          o("WAWebFrontendChatGetters").getOptimisticUnreadCount(e) ===
            r("WAWebConstantsDeprecated").MARKED_AS_UNREAD)
      );
    }
    function _(e) {
      return (
        e.archive &&
        (o("WAWebFrontendChatGetters").getOptimisticUnreadCount(e) > 0 ||
          o("WAWebFrontendChatGetters").getOptimisticUnreadCount(e) ===
            r("WAWebConstantsDeprecated").MARKED_AS_UNREAD)
      );
    }
    l.useArchivedChatsActivityIndicator = d;
  },
  98,
);
