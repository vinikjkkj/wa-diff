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
    "useWAWebListener",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = s.useEffect,
      c = s.useState;
    function d() {
      var e = c(0),
        t = e[0],
        n = e[1],
        a = c(!1),
        i = a[0],
        l = a[1],
        s = function () {
          var e = function (t) {
              return (
                t.archive &&
                (o("WAWebFrontendChatGetters").getOptimisticUnreadCount(t) >
                  0 ||
                  o("WAWebFrontendChatGetters").getOptimisticUnreadCount(t) ===
                    r("WAWebConstantsDeprecated").MARKED_AS_UNREAD)
              );
            },
            t = o("WAWebChatCollection").ChatCollection.filter(e).length,
            a = o("WAWebNewsletterGatingUtils").isChannelsInChatListEnabled()
              ? r("WAWebNewsletterCollection").filter(e).length
              : 0;
          n(t + a);
        },
        d = function () {
          var e = o("WAWebChatCollection").ChatCollection.filter(function (e) {
              return (
                e.archive &&
                o("WAWebChatGetters").getIsGroup(e) &&
                (o("WAWebFrontendChatGetters").getOptimisticUnreadCount(e) >
                  0 ||
                  o("WAWebFrontendChatGetters").getOptimisticUnreadCount(e) ===
                    r("WAWebConstantsDeprecated").MARKED_AS_UNREAD)
              );
            }),
            t = e.some(function (e) {
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
            });
          l(t);
        };
      return (
        o("useWAWebListener").useListener(
          o("WAWebChatCollection").ChatCollection,
          "add remove reset change:archive change:unreadCount change:pendingSeenCount change:muteExpiration",
          s,
        ),
        o("useWAWebListener").useListener(
          o("WAWebNewsletterGatingUtils").isChannelsInChatListEnabled()
            ? r("WAWebNewsletterCollection")
            : null,
          "add remove change:archive change:unreadCount",
          s,
        ),
        o("useWAWebListener").useListener(
          o("WAWebChatCollection").ChatCollection,
          "change:archive change:hasUnreadMention change:archiveAtMentionViewedInDrawer",
          d,
        ),
        u(function () {
          (s(), d());
        }, []),
        { unreadCount: t, showUnreadMentionIcon: i }
      );
    }
    l.useArchivedChatsActivityIndicator = d;
  },
  98,
);
