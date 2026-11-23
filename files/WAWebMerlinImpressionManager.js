__d(
  "WAWebMerlinImpressionManager",
  [
    "MerlinImpressionManager",
    "WAWebBizVpvPairFields",
    "WAWebChannelDiscoveryVisibilityTrackingWamEvent",
    "WAWebChannelMessageVisibilityTrackingWamEvent",
    "WAWebChatThreadLogging",
    "WAWebMediaTypes",
    "WAWebNewsletterGatingUtils",
    "WAWebPaidMessageVpvImpressionWamEvent",
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
        i = a.aiProvenanceLabelEnabled,
        l = a.aiProvenanceLabelShown,
        u = a.channelUserType,
        c = a.cid,
        d = a.isOriginalAuthor,
        m = a.isStarredPost,
        p = a.mediaData,
        _ = a.postId;
      if (
        o(
          "WAWebNewsletterGatingUtils",
        ).isNewsletterVPVMessageVisibilityLoggingEnabled() &&
        !(p != null && !f(p))
      ) {
        var g = function () {
          var e,
            t = new (o(
              "WAWebChannelMessageVisibilityTrackingWamEvent",
            ).ChannelMessageVisibilityTrackingWamEvent)({
              cid: c,
              isOriginalAuthor: d,
              isStarredPost: m,
              postId: _,
              unifiedSessionId:
                (e = o(
                  "WAWebUnifiedSession",
                ).UnifiedSessionManager.getSessionId()) != null
                  ? e
                  : void 0,
              channelUserType: u,
              aiProvenanceLabelShown: l,
              aiProvenanceLabelEnabled: i,
            });
          t.commit();
        };
        o("MerlinImpressionManager").logVisibilityTimestamps(t, n, r, s, g);
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
      if (o("WAWebNewsletterGatingUtils").isNewsletterVPVLoggingEnabled()) {
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
      var t,
        n = e.enter_ts,
        r = e.exit_ts,
        a = e.itemId,
        i = e.statusViewTime,
        l = e.visibilityData,
        u = l.aiProvenanceLabelEnabled,
        c = l.aiProvenanceLabelShown,
        d = l.channelStatusId,
        m = l.channelUserType,
        p = l.cid,
        _ = l.encryptedStatusIdPromise,
        f = l.entryMethod,
        g = l.isCloseSharingPost,
        h = l.isFirstView,
        y = l.isLastStatus,
        C = l.isPosterBiz,
        b = l.isResharable,
        v = l.isReshare,
        S = l.isSelfView,
        R = l.isSubImpression,
        L = l.isSuccessfulView,
        E = l.mediaType,
        k = l.musicBlocked,
        I = l.pairedMediaType,
        T = l.psaCampaignId,
        D = l.psaLinkAvailable,
        x = l.statusCategory,
        $ = l.statusContainsMusic,
        P = l.statusContainsQuestion,
        N = l.statusContentType,
        M = l.statusGroupIdPromise,
        w = l.statusItemViewResult,
        A = l.statusLoadTime,
        F = l.statusPogIndex,
        O = l.statusPosterIdPromise,
        B = l.statusPostIndex,
        W = l.statusPostPlaybackDuration,
        q = l.statusViewEntrypoint,
        U = l.statusViewerSessionId,
        V = l.statusViewExitMethod,
        H = l.updatesTabSessionId,
        G = l.urlStatusType,
        z = l.userRidPromise,
        j = l.viewSequenceIndex,
        K = (t = V == null ? void 0 : V()) != null ? t : void 0,
        Q = function () {
          (async function (e) {
            var t = await _,
              n = await z,
              r = await O,
              a = await M,
              l = new (o(
                "WAWebStatusPostImpressionWamEvent",
              ).StatusPostImpressionWamEvent)({
                statusId: t,
                statusPosterHashId: n != null ? n : void 0,
                statusPosterId: r != null ? r : void 0,
                statusGroupId: a != null ? a : void 0,
                statusContentType: N,
                statusMediaType: E,
                isSelfView: S,
                isSubImpression: R,
                statusViewEntrypoint: q,
                statusViewTime: i,
                unifiedSessionId:
                  (e = o(
                    "WAWebUnifiedSession",
                  ).UnifiedSessionManager.getSessionId()) != null
                    ? e
                    : void 0,
                updatesTabSessionId: H,
                statusViewerSessionId: U,
                statusPogIndex: F,
                statusPostIndex: B,
                isFirstView: h,
                isLastStatus: y,
                isCloseSharingPost: g,
                isPosterBiz: C,
                isViewedInLandscape: !1,
                psaLinkAvailable: D,
                statusCategory: x,
                statusPostPlaybackDuration: W,
                statusContainsMusic: $,
                musicBlocked: k,
                psaCampaignId: T != null ? T : void 0,
                statusLoadTime: A == null ? void 0 : A(),
                urlStatusType: G == null ? void 0 : G(),
                statusContainsQuestion: P,
                isSuccessfulView: L(),
                statusItemViewResult: w(),
                entryMethod: f,
                statusViewExitMethod: K,
                viewSequenceIndex: j(),
                isResharable: b,
                isReshare: v,
                pairedMediaType: I != null ? I : void 0,
                cid: p != null ? p : void 0,
                channelStatusId: d != null ? d : void 0,
                channelUserType: m != null ? m : void 0,
                aiProvenanceLabelShown: c,
                aiProvenanceLabelEnabled: u,
              });
            l.commit();
          })();
        };
      o("MerlinImpressionManager").logVisibilityTimestamps(n, r, a, s, Q);
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
        f = a.decisionId,
        g = a.hsmTagStr,
        h = a.isBroadcastMessage,
        y = a.isInsubContact,
        C = a.isMuted,
        b = a.messageBodyType,
        v = a.messageBubbleHeightPx,
        S = a.messageBubbleWidthPx,
        R = a.messageFieldJsonArray,
        L = a.messageId,
        E = a.mmCarouselCardIndex,
        k = a.qbmFlag,
        I = a.readReceiptsEnabled,
        T = a.serverTimestamp,
        D = a.submessageFieldJsonArray,
        x = a.urlUniqueCountInt,
        $ = function (t) {
          (async function (e) {
            var n = Date.now(),
              r = await Promise.all([
                o("WAWebChatThreadLogging").getMessageIDHMAC(L),
                o("WAWebChatThreadLogging").getChatThreadIDHMAC(u),
              ]),
              a = r[0],
              p = r[1],
              $ = Math.round((n - T * 1e3) / 1e3),
              P = d != null ? Math.round((n - d) / 1e3) : void 0,
              N = t.map(function (e) {
                return [e.enter, e.exit];
              }),
              M = JSON.stringify({ 0: N, 50: N, 100: N }),
              w = new (o(
                "WAWebPaidMessageVpvImpressionWamEvent",
              ).PaidMessageVpvImpressionWamEvent)({
                vpvJsonObject: M,
                messageIdHmac: a != null ? a : void 0,
                threadIdHmac: p != null ? p : void 0,
                unifiedSessionId:
                  (e = o(
                    "WAWebUnifiedSession",
                  ).UnifiedSessionManager.getSessionId()) != null
                    ? e
                    : void 0,
                qbmFlag: k != null ? k : void 0,
                contactType: m != null ? m : void 0,
                hsmTagStr: g != null ? g : void 0,
                decisionId: f != null ? f : void 0,
                readReceiptsEnabled: I,
                chatsFolderType: c,
                isMuted: C,
                isBroadcastMessage: h,
                isInsubContact: y,
                deltaTime: $,
                deltaTimeReceived: P,
                messageFieldJsonArray: R,
                submessageFieldJsonArray: D,
                buttonValueJsonArray: s,
                bodyUrlCountInt: i,
                bodyUrlUniqueCountInt: l,
                ctaUrlUniqueCountInt: _,
                urlUniqueCountInt: x,
                messageBodyType: b != null ? b : void 0,
                mmCarouselCardIndex: E != null ? E : void 0,
                messageBubbleWidthPx: S != null ? S : void 0,
                messageBubbleHeightPx: v != null ? v : void 0,
              });
            (o("WAWebBizVpvPairFields").applyBizVpvPairFields(w, u),
              w.commit());
          })();
        };
      o("MerlinImpressionManager").logVisibilityTimestamps(t, n, r, p, $);
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
