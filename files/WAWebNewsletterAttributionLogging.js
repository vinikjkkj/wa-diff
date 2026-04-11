__d(
  "WAWebNewsletterAttributionLogging",
  [
    "WALogger",
    "WAWebChannelCoreEventWamEvent",
    "WAWebCommonNewsletterEnums",
    "WAWebNewsletterCollection",
    "WAWebNewsletterDirectoryFilterUtils",
    "WAWebNewsletterGatingUtils",
    "WAWebSimilarNewsletterSessionId",
    "WAWebWamEnumChannelEntryPoint",
    "WAWebWamEnumChannelEntryPointApp",
    "WAWebWamEnumTsSurface",
  ],
  function (t, n, r, o, a, i, l) {
    var e = [
        "channelCoreEventType",
        "channelRequestMetadata",
        "cid",
        "entryPoint",
        "eventSurface",
        "eventUnit",
        "similarChannelSessionId",
        "unifiedSessionId",
      ],
      s;
    function u(e) {
      switch (e) {
        case o("WAWebWamEnumChannelEntryPoint").CHANNEL_ENTRY_POINT.LINK:
          return o("WAWebWamEnumTsSurface").TS_SURFACE.CHAT_THREAD;
        case o("WAWebWamEnumChannelEntryPoint").CHANNEL_ENTRY_POINT
          .RECOMMENDED_LIST:
        case o("WAWebWamEnumChannelEntryPoint").CHANNEL_ENTRY_POINT.UPDATES_TAB:
          return o("WAWebWamEnumTsSurface").TS_SURFACE.CHANNEL_UPDATES_HOME;
        case o("WAWebWamEnumChannelEntryPoint").CHANNEL_ENTRY_POINT
          .DIRECTORY_CATEGORIES:
          return o("WAWebWamEnumTsSurface").TS_SURFACE
            .CHANNEL_DIRECTORY_CATEGORIES;
        case o("WAWebWamEnumChannelEntryPoint").CHANNEL_ENTRY_POINT
          .FORWARDED_MESSAGE:
          return o("WAWebWamEnumTsSurface").TS_SURFACE.CHAT_THREAD;
        case o("WAWebWamEnumChannelEntryPoint").CHANNEL_ENTRY_POINT
          .DIRECTORY_CATEGORIES_SEARCH:
        case o("WAWebWamEnumChannelEntryPoint").CHANNEL_ENTRY_POINT
          .DIRECTORY_SEARCH:
          return o("WAWebWamEnumTsSurface").TS_SURFACE
            .CHANNEL_DIRECTORY_CATEGORIES_SEARCH;
        case o("WAWebWamEnumChannelEntryPoint").CHANNEL_ENTRY_POINT.STATUS:
          return o("WAWebWamEnumTsSurface").TS_SURFACE.STATUS_VIEWER_SHEET;
        case o("WAWebWamEnumChannelEntryPoint").CHANNEL_ENTRY_POINT
          .ADMIN_INVITE_MESSAGE:
          return o("WAWebWamEnumTsSurface").TS_SURFACE.CHAT_THREAD;
        case o("WAWebWamEnumChannelEntryPoint").CHANNEL_ENTRY_POINT
          .SIMILAR_CHANNEL:
          return o("WAWebWamEnumTsSurface").TS_SURFACE.CHANNEL_PROFILE;
        case o("WAWebWamEnumChannelEntryPoint").CHANNEL_ENTRY_POINT
          .NEWSLETTER_CREATION_UPDATES_TAB:
          return o("WAWebWamEnumTsSurface").TS_SURFACE.CHANNEL_UPDATES_HOME;
        default:
          return (
            o("WALogger")
              .WARN(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "Encountered unexpected entry point: ",
                    "",
                  ])),
                e,
              )
              .tags("newsletter-logging")
              .sendLogs("Unexpected entry point in newsletter open logging"),
            o("WAWebWamEnumTsSurface").TS_SURFACE.UNKNOWN
          );
      }
    }
    function c() {
      return r("WAWebNewsletterCollection").some(function (e) {
        var t;
        return (
          ((t = e.newsletterMetadata) == null ? void 0 : t.membershipType) ===
          o("WAWebCommonNewsletterEnums").NewsletterMembershipType.Subscriber
        );
      })
        ? 1
        : 0;
    }
    var d = (function () {
        function t() {
          this.$6 = {};
        }
        var n = t.prototype;
        return (
          (n.setChannelEntryPoint = function (t) {
            this.$1 = t;
          }),
          (n.setChannelEntryPointMetadata = function (t) {
            this.$4 = t;
          }),
          (n.setSimilarChannelsSessionId = function (t) {
            this.$5 = t;
          }),
          (n.setNewsletterDirectoryLoggingData = function (t) {
            this.$6 = t;
          }),
          (n.getSimilarChannelsSessionId = function () {
            return this.$5;
          }),
          (n.getIsSimilarUnitMountedForChat = function (t) {
            return t.equals(this.$7);
          }),
          (n.setIsSimilarUnitMountedForChat = function (t) {
            this.$7 = t;
          }),
          (n.getSimilarChannelsSessionIdForLogging = function () {
            var e = this.$5;
            if (e != null)
              return o(
                "WAWebSimilarNewsletterSessionId",
              ).newsletterSessionIdToInt(e);
          }),
          (n.setDirectorySessionId = function (t) {
            this.$2 = t;
          }),
          (n.getDirectorySessionIdForLogging = function () {
            return this.$2;
          }),
          (n.getNewsletterDirectoryLoggingData = function () {
            return this.$6;
          }),
          (n.setDirectoryFilter = function (t) {
            if (t == null) {
              this.$3 = null;
              return;
            }
            switch (t) {
              case o("WAWebNewsletterDirectoryFilterUtils")
                .NewsletterDirectoryFilterType.Recommended:
                return (this.$3 = "all");
              case o("WAWebNewsletterDirectoryFilterUtils")
                .NewsletterDirectoryFilterType.New:
                return (this.$3 = "new");
              case o("WAWebNewsletterDirectoryFilterUtils")
                .NewsletterDirectoryFilterType.Popular:
                return (this.$3 = "popular");
              case o("WAWebNewsletterDirectoryFilterUtils")
                .NewsletterDirectoryFilterType.Featured:
                return (this.$3 = "featured");
              case o("WAWebNewsletterDirectoryFilterUtils")
                .NewsletterDirectoryFilterType.Trending:
                return (this.$3 = "most_active");
              default:
                return (this.$3 = null);
            }
          }),
          (n.log = function (n) {
            var t,
              r,
              a,
              i = n.channelCoreEventType,
              l = n.channelRequestMetadata,
              s = n.cid,
              d = n.entryPoint,
              m = n.eventSurface,
              p = n.eventUnit,
              _ = n.similarChannelSessionId,
              f = n.unifiedSessionId,
              g = babelHelpers.objectWithoutPropertiesLoose(n, e),
              h = JSON.stringify(
                babelHelpers.extends(
                  {
                    has_followed_channels: c(),
                    pill_type: (t = this.$3) != null ? t : void 0,
                  },
                  o(
                    "WAWebNewsletterGatingUtils",
                  ).isDirectoryCategoriesLoggingEnabled()
                    ? g
                    : {},
                ),
              );
            new (o("WAWebChannelCoreEventWamEvent").ChannelCoreEventWamEvent)({
              cid: s.user,
              eventSurface: m,
              channelCoreEventType: i,
              channelEntryPointApp: o("WAWebWamEnumChannelEntryPointApp")
                .CHANNEL_ENTRY_POINT_APP.WHATSAPP,
              channelEntryPoint:
                (r = d != null ? d : this.$1) != null ? r : void 0,
              channelDirectorySessionId: (a = this.$2) != null ? a : void 0,
              entryPointMetadata: h,
              similarChannelsSessionId:
                _ != null
                  ? o(
                      "WAWebSimilarNewsletterSessionId",
                    ).newsletterSessionIdToInt(_)
                  : void 0,
              channelEntryPointMetadata: this.$4,
              channelEventUnit: p != null ? p : void 0,
              unifiedSessionId: f,
              discoverySurface: d != null ? u(d) : void 0,
              channelRequestMetadata: l,
            }).commit();
          }),
          t
        );
      })(),
      m = new d();
    ((l.getDiscoverySurfaceFromChannelEntryPoint = u),
      (l.NewsletterCoreEventLogger = m));
  },
  98,
);
