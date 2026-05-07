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
        s = l.channelStatusId,
        c = l.channelUserType,
        d = l.cid,
        m = l.encryptedStatusIdPromise,
        p = l.entryMethod,
        _ = l.isCloseSharingPost,
        f = l.isFirstView,
        g = l.isPosterBiz,
        h = l.isResharable,
        y = l.isReshare,
        C = l.isSelfView,
        b = l.isSubImpression,
        v = l.isSuccessfulView,
        S = l.mediaType,
        R = l.musicBlocked,
        L = l.pairedMediaType,
        E = l.psaCampaignId,
        k = l.psaLinkAvailable,
        I = l.statusCategory,
        T = l.statusContainsMusic,
        D = l.statusContainsQuestion,
        x = l.statusContentType,
        $ = l.statusGroupIdPromise,
        P = l.statusItemViewResult,
        N = l.statusLoadTime,
        M = l.statusPogIndex,
        w = l.statusPosterIdPromise,
        A = l.statusPostIndex,
        F = l.statusPostPlaybackDuration,
        O = l.statusViewEntrypoint,
        B = l.statusViewerSessionId,
        W = l.updatesTabSessionId,
        q = l.urlStatusType,
        U = l.userRidPromise,
        V = l.viewSequenceIndex;
      if (
        !(
          !o("WAWebNewsletterGatingUtils").isVPVLoggingEnabled() ||
          !o("WAWebStatusGatingUtils").isStatusVPVLoggingEnabled()
        )
      ) {
        var H = function () {
          n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            var e,
              t = yield m,
              n = yield U,
              r = yield w,
              a = yield $,
              l = new (o(
                "WAWebStatusPostImpressionWamEvent",
              ).StatusPostImpressionWamEvent)({
                statusId: t,
                statusPosterHashId: n != null ? n : void 0,
                statusPosterId: r != null ? r : void 0,
                statusGroupId: a != null ? a : void 0,
                statusContentType: x,
                statusMediaType: S,
                isSelfView: C,
                isSubImpression: b,
                statusViewEntrypoint: O,
                statusViewTime: i,
                unifiedSessionId:
                  (e = o(
                    "WAWebUnifiedSession",
                  ).UnifiedSessionManager.getSessionId()) != null
                    ? e
                    : void 0,
                updatesTabSessionId: W,
                statusViewerSessionId: B,
                statusPogIndex: M,
                statusPostIndex: A,
                isFirstView: f,
                isCloseSharingPost: _,
                isPosterBiz: g,
                isViewedInLandscape: !1,
                psaLinkAvailable: k,
                statusCategory: I,
                statusPostPlaybackDuration: F,
                statusContainsMusic: T,
                musicBlocked: R,
                psaCampaignId: E != null ? E : void 0,
                statusLoadTime: N == null ? void 0 : N(),
                urlStatusType: q == null ? void 0 : q(),
                statusContainsQuestion: D,
                isSuccessfulView: v(),
                statusItemViewResult: P(),
                entryMethod: p,
                viewSequenceIndex: V(),
                isResharable: h,
                isReshare: y,
                pairedMediaType: L != null ? L : void 0,
                cid: d != null ? d : void 0,
                channelStatusId: s != null ? s : void 0,
                channelUserType: c != null ? c : void 0,
              });
            l.commit();
          })();
        };
        o("MerlinImpressionManager").logVisibilityTimestamps(t, r, a, u, H);
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
