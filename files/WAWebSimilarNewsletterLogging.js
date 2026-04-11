__d(
  "WAWebSimilarNewsletterLogging",
  [
    "WAWebChannelSimilarChannelsWamEvent",
    "WAWebNewsletterGatingUtils",
    "WAWebNewsletterLoggingUtils",
    "WAWebSimilarNewsletterSessionId",
    "WAWebWamEnumBannerStatus",
    "WAWebWamEnumBannerStatusReason",
    "WAWebWamEnumChannelEventSurface",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t = e.bannerStatus,
        n = e.eventSurface,
        r = e.originNewsletter,
        a = e.sessionId,
        i = e.similarNewsletters,
        l = e.similarNewslettersToDisplay,
        s = new Map(
          l.map(function (e, t) {
            return [e.id.toString(), t];
          }),
        ),
        c = u(l.length);
      i.forEach(function (e, i) {
        var l,
          u,
          d = new (o(
            "WAWebChannelSimilarChannelsWamEvent",
          ).ChannelSimilarChannelsWamEvent)({
            cid: r.id.user,
            bannerStatus: t,
            bannerStatusReason: c,
            similarChannelRank: i,
            similarChannelId: e.id.user,
            similarChannelDisplayRank:
              (l = s.get(e.id.toString())) != null ? l : void 0,
            similarChannelEventSurface: n,
            similarChannelsSessionId: o(
              "WAWebSimilarNewsletterSessionId",
            ).newsletterSessionIdToInt(a),
            similarChannelUserType:
              (u = o(
                "WAWebNewsletterLoggingUtils",
              ).getChannelUserTypeFromMembershipType(e.newsletterMetadata)) !=
              null
                ? u
                : void 0,
          });
        d.commit();
      });
    }
    function s(e) {
      var t,
        n = e.chat,
        r = e.reason,
        a = e.sessionId,
        i = new (o(
          "WAWebChannelSimilarChannelsWamEvent",
        ).ChannelSimilarChannelsWamEvent)({
          cid: n.id.user,
          bannerStatus: o("WAWebWamEnumBannerStatus").BANNER_STATUS.CLOSED,
          bannerStatusReason: r,
          similarChannelEventSurface: o("WAWebWamEnumChannelEventSurface")
            .CHANNEL_EVENT_SURFACE.CHANNEL_THREAD,
          similarChannelsSessionId: o(
            "WAWebSimilarNewsletterSessionId",
          ).newsletterSessionIdToInt(a),
          similarChannelUserType:
            (t = o(
              "WAWebNewsletterLoggingUtils",
            ).getChannelUserTypeFromMembershipType(n.newsletterMetadata)) !=
            null
              ? t
              : void 0,
        });
      i.commit();
    }
    function u(e) {
      return e === 0
        ? o("WAWebWamEnumBannerStatusReason").BANNER_STATUS_REASON
            .NO_SIMILAR_CHANNELS_FOUND
        : e <
            o(
              "WAWebNewsletterGatingUtils",
            ).getSimilarNewslettersMinDisplayLimit()
          ? o("WAWebWamEnumBannerStatusReason").BANNER_STATUS_REASON
              .NOT_ENOUGH_SIMILAR_CHANNELS
          : o("WAWebWamEnumBannerStatusReason").BANNER_STATUS_REASON
              .SIMILAR_CHANNELS_FOUND;
    }
    ((l.logSimilarNewsletterImpression = e),
      (l.logSimilarNewsletterDismiss = s));
  },
  98,
);
