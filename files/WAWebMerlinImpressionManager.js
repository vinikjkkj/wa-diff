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
        i = a.aiProvenanceLabelEnabled,
        l = a.aiProvenanceLabelShown,
        s = a.channelUserType,
        c = a.cid,
        d = a.isOriginalAuthor,
        m = a.isStarredPost,
        p = a.isVpvImpression,
        _ = a.mediaData,
        f = a.postId;
      if (
        o(
          "WAWebNewsletterGatingUtils",
        ).isNewsletterVPVMessageVisibilityLoggingEnabled() &&
        !(_ != null && !g(_))
      ) {
        var h = function () {
          var e,
            t = new (o(
              "WAWebChannelMessageVisibilityTrackingWamEvent",
            ).ChannelMessageVisibilityTrackingWamEvent)({
              cid: c,
              isOriginalAuthor: d,
              isStarredPost: m,
              isVpvImpression: p,
              postId: f,
              unifiedSessionId:
                (e = o(
                  "WAWebUnifiedSession",
                ).UnifiedSessionManager.getSessionId()) != null
                  ? e
                  : void 0,
              channelUserType: s,
              aiProvenanceLabelShown: l,
              aiProvenanceLabelEnabled: i,
            });
          t.commit();
        };
        o("MerlinImpressionManager").logVisibilityTimestamps(t, n, r, u, h);
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
        c = s.aiProvenanceLabelEnabled,
        d = s.aiProvenanceLabelShown,
        m = s.channelStatusId,
        p = s.channelUserType,
        _ = s.cid,
        f = s.encryptedStatusIdPromise,
        g = s.entryMethod,
        h = s.isCloseSharingPost,
        y = s.isFirstView,
        C = s.isLastStatus,
        b = s.isPosterBiz,
        v = s.isResharable,
        S = s.isReshare,
        R = s.isSelfView,
        L = s.isSubImpression,
        E = s.isSuccessfulView,
        k = s.mediaType,
        I = s.musicBlocked,
        T = s.pairedMediaType,
        D = s.psaCampaignId,
        x = s.psaLinkAvailable,
        $ = s.statusCategory,
        P = s.statusContainsMusic,
        N = s.statusContainsQuestion,
        M = s.statusContentType,
        w = s.statusGroupIdPromise,
        A = s.statusItemViewResult,
        F = s.statusLoadTime,
        O = s.statusPogIndex,
        B = s.statusPosterIdPromise,
        W = s.statusPostIndex,
        q = s.statusPostPlaybackDuration,
        U = s.statusViewEntrypoint,
        V = s.statusViewerSessionId,
        H = s.statusViewExitMethod,
        G = s.updatesTabSessionId,
        z = s.urlStatusType,
        j = s.userRidPromise,
        K = s.viewSequenceIndex,
        Q = (t = H == null ? void 0 : H()) != null ? t : void 0,
        X = function () {
          n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            var e,
              t = yield f,
              n = yield j,
              r = yield B,
              a = yield w,
              i = new (o(
                "WAWebStatusPostImpressionWamEvent",
              ).StatusPostImpressionWamEvent)({
                statusId: t,
                statusPosterHashId: n != null ? n : void 0,
                statusPosterId: r != null ? r : void 0,
                statusGroupId: a != null ? a : void 0,
                statusContentType: M,
                statusMediaType: k,
                isSelfView: R,
                isSubImpression: L,
                statusViewEntrypoint: U,
                statusViewTime: l,
                unifiedSessionId:
                  (e = o(
                    "WAWebUnifiedSession",
                  ).UnifiedSessionManager.getSessionId()) != null
                    ? e
                    : void 0,
                updatesTabSessionId: G,
                statusViewerSessionId: V,
                statusPogIndex: O,
                statusPostIndex: W,
                isFirstView: y,
                isLastStatus: C,
                isCloseSharingPost: h,
                isPosterBiz: b,
                isViewedInLandscape: !1,
                psaLinkAvailable: x,
                statusCategory: $,
                statusPostPlaybackDuration: q,
                statusContainsMusic: P,
                musicBlocked: I,
                psaCampaignId: D != null ? D : void 0,
                statusLoadTime: F == null ? void 0 : F(),
                urlStatusType: z == null ? void 0 : z(),
                statusContainsQuestion: N,
                isSuccessfulView: E(),
                statusItemViewResult: A(),
                entryMethod: g,
                statusViewExitMethod: Q,
                viewSequenceIndex: K(),
                isResharable: v,
                isReshare: S,
                pairedMediaType: T != null ? T : void 0,
                cid: _ != null ? _ : void 0,
                channelStatusId: m != null ? m : void 0,
                channelUserType: p != null ? p : void 0,
                aiProvenanceLabelShown: d,
                aiProvenanceLabelEnabled: c,
              });
            i.commit();
          })();
        };
      o("MerlinImpressionManager").logVisibilityTimestamps(r, a, i, u, X);
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
