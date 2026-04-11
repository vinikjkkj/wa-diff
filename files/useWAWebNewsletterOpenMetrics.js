__d(
  "useWAWebNewsletterOpenMetrics",
  [
    "WAWebChannelOpenWamEvent",
    "WAWebChatEntryPoint",
    "WAWebChatGetters",
    "WAWebNewsletterAttributionLogging",
    "WAWebNewsletterGatingUtils",
    "WAWebNewsletterLoggingUtils",
    "WAWebNewsletterWamoSubUtils",
    "WAWebWamEnumChannelEntryPoint",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e || (e = o("react"))).useEffect;
    function u(e) {
      var t = e.chat,
        n = e.chatEntryPoint;
      s(function () {
        var e, r, a, i;
        if (o("WAWebChatGetters").getIsNewsletter(t)) {
          var l = t.newsletterMetadata;
          if (l != null) {
            var s = Math.round(Math.random() * 1e9),
              u = o("WAWebNewsletterLoggingUtils").getChannelEntryPoint(n),
              c = o(
                "WAWebNewsletterAttributionLogging",
              ).getDiscoverySurfaceFromChannelEntryPoint(u),
              d = o("WAWebNewsletterLoggingUtils").getChannelEntryPointMetadata(
                n,
              );
            (o(
              "WAWebNewsletterAttributionLogging",
            ).NewsletterCoreEventLogger.setChannelEntryPoint(u),
              o(
                "WAWebNewsletterAttributionLogging",
              ).NewsletterCoreEventLogger.setChannelEntryPointMetadata(d));
            var m = o("WAWebNewsletterLoggingUtils").getChannelUserType(
                l.membershipType,
              ),
              p =
                n === o("WAWebChatEntryPoint").ChatEntryPoint.SimilarNewsletters
                  ? o(
                      "WAWebNewsletterAttributionLogging",
                    ).NewsletterCoreEventLogger.getSimilarChannelsSessionIdForLogging()
                  : void 0;
            p != null &&
              o(
                "WAWebNewsletterAttributionLogging",
              ).NewsletterCoreEventLogger.setSimilarChannelsSessionId(null);
            var _ = [
                o("WAWebWamEnumChannelEntryPoint").CHANNEL_ENTRY_POINT
                  .DIRECTORY,
                o("WAWebWamEnumChannelEntryPoint").CHANNEL_ENTRY_POINT
                  .DIRECTORY_SEARCH,
                o("WAWebWamEnumChannelEntryPoint").CHANNEL_ENTRY_POINT
                  .DIRECTORY_CATEGORIES,
                o("WAWebWamEnumChannelEntryPoint").CHANNEL_ENTRY_POINT
                  .DIRECTORY_CATEGORIES_SEARCH,
                o("WAWebWamEnumChannelEntryPoint").CHANNEL_ENTRY_POINT
                  .UPDATES_TAB_SEARCH,
              ].includes(u),
              f = o("WAWebNewsletterGatingUtils").isWamoSubLoggingEnabled()
                ? o(
                    "WAWebNewsletterWamoSubUtils",
                  ).newsletterSupportsSubscriptions(l)
                : void 0,
              g = o(
                "WAWebNewsletterAttributionLogging",
              ).NewsletterCoreEventLogger.getNewsletterDirectoryLoggingData(),
              h = JSON.stringify({
                directory_category_name:
                  (e = g.directoryCategoryName) != null ? e : void 0,
                directory_category_index:
                  (r = g.directoryCategoryIndex) != null ? r : void 0,
                directory_channel_index:
                  (a = g.directoryChannelIndex) != null ? a : void 0,
              }),
              y = new (o("WAWebChannelOpenWamEvent").ChannelOpenWamEvent)(
                babelHelpers.extends(
                  {
                    channelSessionId: s,
                    channelEntryPoint: u,
                    channelUserType: m,
                    cid: t.id.user,
                    unreadMessages: t.unreadCount,
                    channelEntryPointMetadata: d,
                    similarChannelsSessionId: p != null ? p : void 0,
                    discoverySurface: c,
                    isPremium: f,
                  },
                  _ && {
                    channelDirectorySessionId:
                      (i = o(
                        "WAWebNewsletterAttributionLogging",
                      ).NewsletterCoreEventLogger.getDirectorySessionIdForLogging()) !=
                      null
                        ? i
                        : void 0,
                    entryPointMetadata: h,
                  },
                ),
              );
            y.commit();
          }
        }
      }, []);
    }
    l.useNewsletterOpenMetrics = u;
  },
  98,
);
