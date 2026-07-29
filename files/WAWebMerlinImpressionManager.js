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
        s = a.isOriginalAuthor,
        c = a.isStarredPost,
        d = a.isVpvImpression,
        m = a.mediaData,
        p = a.postId;
      if (
        o(
          "WAWebNewsletterGatingUtils",
        ).isNewsletterVPVMessageVisibilityLoggingEnabled() &&
        !(m != null && !g(m))
      ) {
        var _ = function () {
          var e,
            t = new (o(
              "WAWebChannelMessageVisibilityTrackingWamEvent",
            ).ChannelMessageVisibilityTrackingWamEvent)({
              cid: l,
              isOriginalAuthor: s,
              isStarredPost: c,
              isVpvImpression: d,
              postId: p,
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
        o("MerlinImpressionManager").logVisibilityTimestamps(t, n, r, u, _);
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
      if (o("WAWebNewsletterGatingUtils").isNewsletterVPVLoggingEnabled()) {
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
      var t,
        r = e.enter_ts,
        a = e.exit_ts,
        i = e.itemId,
        l = e.statusViewTime,
        s = e.visibilityData,
        c = s.channelStatusId,
        d = s.channelUserType,
        m = s.cid,
        p = s.encryptedStatusIdPromise,
        _ = s.entryMethod,
        f = s.isCloseSharingPost,
        g = s.isFirstView,
        h = s.isLastStatus,
        y = s.isPosterBiz,
        C = s.isResharable,
        b = s.isReshare,
        v = s.isSelfView,
        S = s.isSubImpression,
        R = s.isSuccessfulView,
        L = s.mediaType,
        E = s.musicBlocked,
        k = s.pairedMediaType,
        I = s.psaCampaignId,
        T = s.psaLinkAvailable,
        D = s.statusCategory,
        x = s.statusContainsMusic,
        $ = s.statusContainsQuestion,
        P = s.statusContentType,
        N = s.statusGroupIdPromise,
        M = s.statusItemViewResult,
        w = s.statusLoadTime,
        A = s.statusPogIndex,
        F = s.statusPosterIdPromise,
        O = s.statusPostIndex,
        B = s.statusPostPlaybackDuration,
        W = s.statusViewEntrypoint,
        q = s.statusViewerSessionId,
        U = s.statusViewExitMethod,
        V = s.updatesTabSessionId,
        H = s.urlStatusType,
        G = s.userRidPromise,
        z = s.viewSequenceIndex,
        j = (t = U == null ? void 0 : U()) != null ? t : void 0,
        K = function () {
          n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            var e,
              t = yield p,
              n = yield G,
              r = yield F,
              a = yield N,
              i = new (o(
                "WAWebStatusPostImpressionWamEvent",
              ).StatusPostImpressionWamEvent)({
                statusId: t,
                statusPosterHashId: n != null ? n : void 0,
                statusPosterId: r != null ? r : void 0,
                statusGroupId: a != null ? a : void 0,
                statusContentType: P,
                statusMediaType: L,
                isSelfView: v,
                isSubImpression: S,
                statusViewEntrypoint: W,
                statusViewTime: l,
                unifiedSessionId:
                  (e = o(
                    "WAWebUnifiedSession",
                  ).UnifiedSessionManager.getSessionId()) != null
                    ? e
                    : void 0,
                updatesTabSessionId: V,
                statusViewerSessionId: q,
                statusPogIndex: A,
                statusPostIndex: O,
                isFirstView: g,
                isLastStatus: h,
                isCloseSharingPost: f,
                isPosterBiz: y,
                isViewedInLandscape: !1,
                psaLinkAvailable: T,
                statusCategory: D,
                statusPostPlaybackDuration: B,
                statusContainsMusic: x,
                musicBlocked: E,
                psaCampaignId: I != null ? I : void 0,
                statusLoadTime: w == null ? void 0 : w(),
                urlStatusType: H == null ? void 0 : H(),
                statusContainsQuestion: $,
                isSuccessfulView: R(),
                statusItemViewResult: M(),
                entryMethod: _,
                statusViewExitMethod: j,
                viewSequenceIndex: z(),
                isResharable: C,
                isReshare: b,
                pairedMediaType: k != null ? k : void 0,
                cid: m != null ? m : void 0,
                channelStatusId: c != null ? c : void 0,
                channelUserType: d != null ? d : void 0,
              });
            i.commit();
          })();
        };
      o("MerlinImpressionManager").logVisibilityTimestamps(r, a, i, u, K);
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
        S = l.messageBubbleHeightPx,
        R = l.messageBubbleWidthPx,
        L = l.messageFieldJsonArray,
        E = l.messageId,
        k = l.mmCarouselCardIndex,
        I = l.qbmFlag,
        T = l.readReceiptsEnabled,
        D = l.serverTimestamp,
        x = l.submessageFieldJsonArray,
        $ = l.urlUniqueCountInt;
      if (
        o("WAWebABProps").getABPropConfigValue(
          "biz_vpv_impression_logging_enabled",
        ) === !0
      ) {
        var P = function (r) {
          n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            var t,
              a = Date.now(),
              i = yield (e || (e = n("Promise"))).all([
                o("WAWebChatThreadLogging").getMessageIDHMAC(E),
                o("WAWebChatThreadLogging").getChatThreadIDHMAC(d),
              ]),
              l = i[0],
              _ = i[1],
              P = Math.round((a - D * 1e3) / 1e3),
              N = p != null ? Math.round((a - p) / 1e3) : void 0,
              M = r.map(function (e) {
                return [e.enter, e.exit];
              }),
              w = JSON.stringify({ 0: M, 50: M, 100: M }),
              A =
                o("WAWebABProps").getABPropConfigValue(
                  "biz_vpv_dimensions_logging_enabled",
                ) === !0;
            new (o(
              "WAWebPaidMessageVpvImpressionWamEvent",
            ).PaidMessageVpvImpressionWamEvent)({
              vpvJsonObject: w,
              messageIdHmac: l != null ? l : void 0,
              threadIdHmac: _ != null ? _ : void 0,
              unifiedSessionId:
                (t = o(
                  "WAWebUnifiedSession",
                ).UnifiedSessionManager.getSessionId()) != null
                  ? t
                  : void 0,
              qbmFlag: I != null ? I : void 0,
              contactType: f != null ? f : void 0,
              hsmTagStr: h != null ? h : void 0,
              readReceiptsEnabled: T,
              chatsFolderType: m,
              isMuted: b,
              isBroadcastMessage: y,
              isInsubContact: C,
              deltaTime: P,
              deltaTimeReceived: N,
              messageFieldJsonArray: L,
              submessageFieldJsonArray: x,
              buttonValueJsonArray: c,
              bodyUrlCountInt: s,
              bodyUrlUniqueCountInt: u,
              ctaUrlUniqueCountInt: g,
              urlUniqueCountInt: $,
              messageBodyType: v != null ? v : void 0,
              mmCarouselCardIndex: k != null ? k : void 0,
              messageBubbleWidthPx: A && R != null ? R : void 0,
              messageBubbleHeightPx: A && S != null ? S : void 0,
            }).commit();
          })();
        };
        o("MerlinImpressionManager").logVisibilityTimestamps(r, a, i, _, P);
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
