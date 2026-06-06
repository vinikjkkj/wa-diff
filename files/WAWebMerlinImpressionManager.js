__d(
  "WAWebMerlinImpressionManager",
  [
    "MerlinImpressionManager",
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
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = {},
      u = new Set([
        (e = o("WAWebMediaTypes")).OUTWARD_TYPES.STICKER,
        e.OUTWARD_TYPES.IMAGE,
        e.OUTWARD_TYPES.PTV,
        e.OUTWARD_TYPES.VIDEO,
      ]);
    function c(e) {
      var t = e.enter_ts,
        n = e.exit_ts,
        r = e.itemId,
        a = e.visibilityData,
        i = a.channelUserType,
        l = a.cid,
        u = a.isStarredPost,
        c = a.isVpvImpression,
        d = a.mediaData,
        m = a.postId;
      if (
        o(
          "WAWebNewsletterGatingUtils",
        ).isNewsletterVPVMessageVisibilityLoggingEnabled() &&
        !(d != null && !f(d))
      ) {
        var p = function () {
          var e,
            t = new (o(
              "WAWebChannelMessageVisibilityTrackingWamEvent",
            ).ChannelMessageVisibilityTrackingWamEvent)({
              cid: l,
              isStarredPost: u,
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
        o("MerlinImpressionManager").logVisibilityTimestamps(t, n, r, s, p);
      }
    }
    function d(e) {
      var t = e.discoveryData,
        n = t.cid,
        r = t.country,
        a = t.discoverySurface,
        i = t.newsletterDirectorySectionIndex,
        l = t.newsletterDirectorySectionName,
        u = t.newsletterDirectorySessionId,
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
              channelDirectorySessionId: u,
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
        o("MerlinImpressionManager").logVisibilityTimestamps(_, f, g, s, h);
      }
    }
    function m(e) {
      var t = e.enter_ts,
        n = e.exit_ts,
        r = e.itemId,
        a = e.statusViewTime,
        i = e.visibilityData,
        l = i.channelStatusId,
        u = i.channelUserType,
        c = i.cid,
        d = i.encryptedStatusIdPromise,
        m = i.entryMethod,
        p = i.isCloseSharingPost,
        _ = i.isFirstView,
        f = i.isPosterBiz,
        g = i.isResharable,
        h = i.isReshare,
        y = i.isSelfView,
        C = i.isSubImpression,
        b = i.isSuccessfulView,
        v = i.mediaType,
        S = i.musicBlocked,
        R = i.pairedMediaType,
        L = i.psaCampaignId,
        E = i.psaLinkAvailable,
        k = i.statusCategory,
        I = i.statusContainsMusic,
        T = i.statusContainsQuestion,
        D = i.statusContentType,
        x = i.statusGroupIdPromise,
        $ = i.statusItemViewResult,
        P = i.statusLoadTime,
        N = i.statusPogIndex,
        M = i.statusPosterIdPromise,
        w = i.statusPostIndex,
        A = i.statusPostPlaybackDuration,
        F = i.statusViewEntrypoint,
        O = i.statusViewerSessionId,
        B = i.updatesTabSessionId,
        W = i.urlStatusType,
        q = i.userRidPromise,
        U = i.viewSequenceIndex;
      if (
        !(
          !o("WAWebNewsletterGatingUtils").isVPVLoggingEnabled() ||
          !o("WAWebStatusGatingUtils").isStatusVPVLoggingEnabled()
        )
      ) {
        var V = function () {
          (async function (e) {
            var t = await d,
              n = await q,
              r = await M,
              i = await x,
              s = new (o(
                "WAWebStatusPostImpressionWamEvent",
              ).StatusPostImpressionWamEvent)({
                statusId: t,
                statusPosterHashId: n != null ? n : void 0,
                statusPosterId: r != null ? r : void 0,
                statusGroupId: i != null ? i : void 0,
                statusContentType: D,
                statusMediaType: v,
                isSelfView: y,
                isSubImpression: C,
                statusViewEntrypoint: F,
                statusViewTime: a,
                unifiedSessionId:
                  (e = o(
                    "WAWebUnifiedSession",
                  ).UnifiedSessionManager.getSessionId()) != null
                    ? e
                    : void 0,
                updatesTabSessionId: B,
                statusViewerSessionId: O,
                statusPogIndex: N,
                statusPostIndex: w,
                isFirstView: _,
                isCloseSharingPost: p,
                isPosterBiz: f,
                isViewedInLandscape: !1,
                psaLinkAvailable: E,
                statusCategory: k,
                statusPostPlaybackDuration: A,
                statusContainsMusic: I,
                musicBlocked: S,
                psaCampaignId: L != null ? L : void 0,
                statusLoadTime: P == null ? void 0 : P(),
                urlStatusType: W == null ? void 0 : W(),
                statusContainsQuestion: T,
                isSuccessfulView: b(),
                statusItemViewResult: $(),
                entryMethod: m,
                viewSequenceIndex: U(),
                isResharable: g,
                isReshare: h,
                pairedMediaType: R != null ? R : void 0,
                cid: c != null ? c : void 0,
                channelStatusId: l != null ? l : void 0,
                channelUserType: u != null ? u : void 0,
              });
            s.commit();
          })();
        };
        o("MerlinImpressionManager").logVisibilityTimestamps(t, n, r, s, V);
      }
    }
    var p = {};
    function _(e) {
      var t = e.enter_ts,
        n = e.exit_ts,
        r = e.itemId,
        a = e.visibilityData,
        i = a.bodyUrlCountInt,
        l = a.bodyUrlUniqueCountInt,
        s = a.buttonValueJsonArray,
        u = a.chatId,
        c = a.chatsFolderType,
        d = a.clientReceivedTsMillis,
        m = a.contactType,
        _ = a.ctaUrlUniqueCountInt,
        f = a.hsmTagStr,
        g = a.isBroadcastMessage,
        h = a.isInsubContact,
        y = a.isMuted,
        C = a.messageBodyType,
        b = a.messageBubbleHeightPx,
        v = a.messageBubbleWidthPx,
        S = a.messageFieldJsonArray,
        R = a.messageId,
        L = a.mmCarouselCardIndex,
        E = a.qbmFlag,
        k = a.readReceiptsEnabled,
        I = a.serverTimestamp,
        T = a.submessageFieldJsonArray,
        D = a.urlUniqueCountInt;
      if (
        o("WAWebABProps").getABPropConfigValue(
          "biz_vpv_impression_logging_enabled",
        ) === !0
      ) {
        var x = function (t) {
          (async function (e) {
            var n = Date.now(),
              r = await Promise.all([
                o("WAWebChatThreadLogging").getMessageIDHMAC(R),
                o("WAWebChatThreadLogging").getChatThreadIDHMAC(u),
              ]),
              a = r[0],
              p = r[1],
              x = Math.round((n - I * 1e3) / 1e3),
              $ = d != null ? Math.round((n - d) / 1e3) : void 0,
              P = t.map(function (e) {
                return [e.enter, e.exit];
              }),
              N = JSON.stringify({ 0: P, 50: P, 100: P }),
              M =
                o("WAWebABProps").getABPropConfigValue(
                  "biz_vpv_dimensions_logging_enabled",
                ) === !0;
            new (o(
              "WAWebPaidMessageVpvImpressionWamEvent",
            ).PaidMessageVpvImpressionWamEvent)({
              vpvJsonObject: N,
              messageIdHmac: a != null ? a : void 0,
              threadIdHmac: p != null ? p : void 0,
              unifiedSessionId:
                (e = o(
                  "WAWebUnifiedSession",
                ).UnifiedSessionManager.getSessionId()) != null
                  ? e
                  : void 0,
              qbmFlag: E != null ? E : void 0,
              contactType: m != null ? m : void 0,
              hsmTagStr: f != null ? f : void 0,
              readReceiptsEnabled: k,
              chatsFolderType: c,
              isMuted: y,
              isBroadcastMessage: g,
              isInsubContact: h,
              deltaTime: x,
              deltaTimeReceived: $,
              messageFieldJsonArray: S,
              submessageFieldJsonArray: T,
              buttonValueJsonArray: s,
              bodyUrlCountInt: i,
              bodyUrlUniqueCountInt: l,
              ctaUrlUniqueCountInt: _,
              urlUniqueCountInt: D,
              messageBodyType: C != null ? C : void 0,
              mmCarouselCardIndex: L != null ? L : void 0,
              messageBubbleWidthPx: M && v != null ? v : void 0,
              messageBubbleHeightPx: M && b != null ? b : void 0,
            }).commit();
          })();
        };
        o("MerlinImpressionManager").logVisibilityTimestamps(t, n, r, p, x);
      }
    }
    function f(e) {
      var t = e.isGif,
        n = e.mediaStage,
        r = e.type;
      return !(
        (u.has(r) || t) &&
        n !== o("WAWebMediaTypes").MediaDataStage.RESOLVED
      );
    }
    ((l.logNewsletterMessageVisibility = c),
      (l.logNewsletterDiscoveryVisibility = d),
      (l.logStatusVisibility = m),
      (l.logBizMessageVisibility = _));
  },
  98,
);
