__d(
  "WAWebMerlinImpressionManager",
  [
    "MerlinImpressionManager",
    "Promise",
    "WAWebABProps",
    "WAWebChannelDiscoveryVisibilityTrackingWamEvent",
    "WAWebChannelMessageVisibilityTrackingWamEvent",
    "WAWebChatThreadLogging",
    "WAWebMediaTypes",
    "WAWebNewsletterGatingUtils",
    "WAWebPaidMessageVpvImpressionWamEvent",
    "WAWebStatusGatingUtils",
    "WAWebStatusPostImpressionWamEvent",
    "WAWebUnifiedSession",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = {},
      c = new Set([
        (s = o("WAWebMediaTypes")).OUTWARD_TYPES.STICKER,
        s.OUTWARD_TYPES.IMAGE,
        s.OUTWARD_TYPES.PTV,
        s.OUTWARD_TYPES.VIDEO,
      ]);
    function d(e) {
      var t = e.enter_ts,
        n = e.exit_ts,
        r = e.itemId,
        a = e.visibilityData,
        i = a.channelUserType,
        l = a.cid,
        s = a.isStarredPost,
        c = a.isVpvImpression,
        d = a.mediaData,
        m = a.postId;
      if (
        o(
          "WAWebNewsletterGatingUtils",
        ).isNewsletterVPVMessageVisibilityLoggingEnabled() &&
        !(d != null && !g(d))
      ) {
        var p = function () {
          var e,
            t = new (o(
              "WAWebChannelMessageVisibilityTrackingWamEvent",
            ).ChannelMessageVisibilityTrackingWamEvent)({
              cid: l,
              isStarredPost: s,
              isVpvImpression: c,
              postId: m,
              unifiedSessionId:
                (e = o(
                  "WAWebUnifiedSession",
                ).UnifiedSessionManager.getSessionId()) != null
                  ? e
                  : void 0,
              channelUserType: i,
            });
          t.commit();
        };
        o("MerlinImpressionManager").logVisibilityTimestamps(t, n, r, u, p);
      }
    }
    function m(e) {
      var t = e.discoveryData,
        n = t.cid,
        r = t.country,
        a = t.discoverySurface,
        i = t.newsletterDirectorySectionIndex,
        l = t.newsletterDirectorySectionName,
        s = t.newsletterDirectorySessionId,
        c = t.newsletterEventUnit,
        d = t.newsletterIndex,
        m = t.pillSelected,
        p = t.similarNewslettersSessionId,
        _ = e.enter_ts,
        f = e.exit_ts,
        g = e.itemId;
      if (
        !(
          !o("WAWebNewsletterGatingUtils").isVPVLoggingEnabled() ||
          !o("WAWebNewsletterGatingUtils").isNewsletterVPVLoggingEnabled()
        )
      ) {
        var h = function () {
          var e,
            t = new (o(
              "WAWebChannelDiscoveryVisibilityTrackingWamEvent",
            ).ChannelDiscoveryVisibilityTrackingWamEvent)({
              cid: n,
              channelDirectorySessionId: s,
              similarChannelsSessionId: p,
              channelCategoryIndex: i,
              channelIndex: d,
              channelEventUnit: c,
              pillSelected: m,
              countrySelector: r,
              channelCategoryName: l,
              discoverySurface: a,
              unifiedSessionId:
                (e = o(
                  "WAWebUnifiedSession",
                ).UnifiedSessionManager.getSessionId()) != null
                  ? e
                  : void 0,
            });
          t.commit();
        };
        o("MerlinImpressionManager").logVisibilityTimestamps(_, f, g, u, h);
      }
    }
    function p(e) {
      var t = e.enter_ts,
        r = e.exit_ts,
        a = e.itemId,
        i = e.statusViewTime,
        l = e.visibilityData,
        s = l.encryptedStatusIdPromise,
        c = l.entryMethod,
        d = l.isCloseSharingPost,
        m = l.isFirstView,
        p = l.isPosterBiz,
        _ = l.isSelfView,
        f = l.isSubImpression,
        g = l.isSuccessfulView,
        h = l.mediaType,
        y = l.musicBlocked,
        C = l.psaCampaignId,
        b = l.psaLinkAvailable,
        v = l.statusCategory,
        S = l.statusContainsMusic,
        R = l.statusContainsQuestion,
        L = l.statusContentType,
        E = l.statusGroupIdPromise,
        k = l.statusItemViewResult,
        I = l.statusLoadTime,
        T = l.statusPogIndex,
        D = l.statusPosterIdPromise,
        x = l.statusPostIndex,
        $ = l.statusPostPlaybackDuration,
        P = l.statusViewEntrypoint,
        N = l.statusViewerSessionId,
        M = l.updatesTabSessionId,
        w = l.urlStatusType,
        A = l.userRidPromise,
        F = l.viewSequenceIndex;
      if (
        !(
          !o("WAWebNewsletterGatingUtils").isVPVLoggingEnabled() ||
          !o("WAWebStatusGatingUtils").isStatusVPVLoggingEnabled()
        )
      ) {
        var O = function () {
          n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            var e,
              t = yield s,
              n = yield A,
              r = yield D,
              a = yield E,
              l = new (o(
                "WAWebStatusPostImpressionWamEvent",
              ).StatusPostImpressionWamEvent)({
                statusId: t,
                statusPosterHashId: n != null ? n : void 0,
                statusPosterId: r != null ? r : void 0,
                statusGroupId: a != null ? a : void 0,
                statusContentType: L,
                statusMediaType: h,
                isSelfView: _,
                isSubImpression: f,
                statusViewEntrypoint: P,
                statusViewTime: i,
                unifiedSessionId:
                  (e = o(
                    "WAWebUnifiedSession",
                  ).UnifiedSessionManager.getSessionId()) != null
                    ? e
                    : void 0,
                updatesTabSessionId: M,
                statusViewerSessionId: N,
                statusPogIndex: T,
                statusPostIndex: x,
                isFirstView: m,
                isCloseSharingPost: d,
                isPosterBiz: p,
                isViewedInLandscape: !1,
                psaLinkAvailable: b,
                statusCategory: v,
                statusPostPlaybackDuration: $,
                statusContainsMusic: S,
                musicBlocked: y,
                psaCampaignId: C != null ? C : void 0,
                statusLoadTime: I == null ? void 0 : I(),
                urlStatusType: w == null ? void 0 : w(),
                statusContainsQuestion: R,
                isSuccessfulView: g(),
                statusItemViewResult: k(),
                entryMethod: c,
                viewSequenceIndex: F(),
              });
            l.commit();
          })();
        };
        o("MerlinImpressionManager").logVisibilityTimestamps(t, r, a, u, O);
      }
    }
    var _ = {};
    function f(t) {
      var r = t.enter_ts,
        a = t.exit_ts,
        i = t.itemId,
        l = t.visibilityData,
        s = l.bodyUrlCountInt,
        u = l.bodyUrlUniqueCountInt,
        c = l.buttonValueJsonArray,
        d = l.chatId,
        m = l.chatsFolderType,
        p = l.clientReceivedTsMillis,
        f = l.contactType,
        g = l.ctaUrlUniqueCountInt,
        h = l.hsmTagStr,
        y = l.isBroadcastMessage,
        C = l.isInsubContact,
        b = l.isMuted,
        v = l.messageBodyType,
        S = l.messageFieldJsonArray,
        R = l.messageId,
        L = l.mmCarouselCardIndex,
        E = l.qbmFlag,
        k = l.readReceiptsEnabled,
        I = l.serverTimestamp,
        T = l.submessageFieldJsonArray,
        D = l.urlUniqueCountInt;
      if (
        o("WAWebABProps").getABPropConfigValue(
          "biz_vpv_impression_logging_enabled",
        ) === !0
      ) {
        var x = function (r) {
          n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            var t,
              a = Date.now(),
              i = yield (e || (e = n("Promise"))).all([
                o("WAWebChatThreadLogging").getMessageIDHMAC(R),
                o("WAWebChatThreadLogging").getChatThreadIDHMAC(d),
              ]),
              l = i[0],
              _ = i[1],
              x = Math.round((a - I * 1e3) / 1e3),
              $ = p != null ? Math.round((a - p) / 1e3) : void 0,
              P = r.map(function (e) {
                return [e.enter, e.exit];
              }),
              N = JSON.stringify({ 0: P, 50: P, 100: P });
            new (o(
              "WAWebPaidMessageVpvImpressionWamEvent",
            ).PaidMessageVpvImpressionWamEvent)({
              vpvJsonObject: N,
              messageIdHmac: l != null ? l : void 0,
              threadIdHmac: _ != null ? _ : void 0,
              unifiedSessionId:
                (t = o(
                  "WAWebUnifiedSession",
                ).UnifiedSessionManager.getSessionId()) != null
                  ? t
                  : void 0,
              qbmFlag: E != null ? E : void 0,
              contactType: f != null ? f : void 0,
              hsmTagStr: h != null ? h : void 0,
              readReceiptsEnabled: k,
              chatsFolderType: m,
              isMuted: b,
              isBroadcastMessage: y,
              isInsubContact: C,
              deltaTime: x,
              deltaTimeReceived: $,
              messageFieldJsonArray: S,
              submessageFieldJsonArray: T,
              buttonValueJsonArray: c,
              bodyUrlCountInt: s,
              bodyUrlUniqueCountInt: u,
              ctaUrlUniqueCountInt: g,
              urlUniqueCountInt: D,
              messageBodyType: v != null ? v : void 0,
              mmCarouselCardIndex: L != null ? L : void 0,
            }).commit();
          })();
        };
        o("MerlinImpressionManager").logVisibilityTimestamps(r, a, i, _, x);
      }
    }
    function g(e) {
      var t = e.isGif,
        n = e.mediaStage,
        r = e.type;
      return !(
        (c.has(r) || t) &&
        n !== o("WAWebMediaTypes").MediaDataStage.RESOLVED
      );
    }
    ((l.logNewsletterMessageVisibility = d),
      (l.logNewsletterDiscoveryVisibility = m),
      (l.logStatusVisibility = p),
      (l.logBizMessageVisibility = f));
  },
  98,
);
