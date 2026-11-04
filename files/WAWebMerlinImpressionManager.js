__d(
  "WAWebMerlinImpressionManager",
  [
    "MerlinImpressionManager",
    "Promise",
    "WAWebBizVpvPairFields",
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
        p = a.mediaData,
        _ = a.postId;
      if (
        o(
          "WAWebNewsletterGatingUtils",
        ).isNewsletterVPVMessageVisibilityLoggingEnabled() &&
        !(p != null && !g(p))
      ) {
        var f = function () {
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
              channelUserType: s,
              aiProvenanceLabelShown: l,
              aiProvenanceLabelEnabled: i,
            });
          t.commit();
        };
        o("MerlinImpressionManager").logVisibilityTimestamps(t, n, r, u, f);
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
        h = l.decisionId,
        y = l.hsmTagStr,
        C = l.isBroadcastMessage,
        b = l.isInsubContact,
        v = l.isMuted,
        S = l.messageBodyType,
        R = l.messageBubbleHeightPx,
        L = l.messageBubbleWidthPx,
        E = l.messageFieldJsonArray,
        k = l.messageId,
        I = l.mmCarouselCardIndex,
        T = l.qbmFlag,
        D = l.readReceiptsEnabled,
        x = l.serverTimestamp,
        $ = l.submessageFieldJsonArray,
        P = l.urlUniqueCountInt,
        N = function (r) {
          n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            var t,
              a = Date.now(),
              i = yield (e || (e = n("Promise"))).all([
                o("WAWebChatThreadLogging").getMessageIDHMAC(k),
                o("WAWebChatThreadLogging").getChatThreadIDHMAC(d),
              ]),
              l = i[0],
              _ = i[1],
              N = Math.round((a - x * 1e3) / 1e3),
              M = p != null ? Math.round((a - p) / 1e3) : void 0,
              w = r.map(function (e) {
                return [e.enter, e.exit];
              }),
              A = JSON.stringify({ 0: w, 50: w, 100: w }),
              F = new (o(
                "WAWebPaidMessageVpvImpressionWamEvent",
              ).PaidMessageVpvImpressionWamEvent)({
                vpvJsonObject: A,
                messageIdHmac: l != null ? l : void 0,
                threadIdHmac: _ != null ? _ : void 0,
                unifiedSessionId:
                  (t = o(
                    "WAWebUnifiedSession",
                  ).UnifiedSessionManager.getSessionId()) != null
                    ? t
                    : void 0,
                qbmFlag: T != null ? T : void 0,
                contactType: f != null ? f : void 0,
                hsmTagStr: y != null ? y : void 0,
                decisionId: h != null ? h : void 0,
                readReceiptsEnabled: D,
                chatsFolderType: m,
                isMuted: v,
                isBroadcastMessage: C,
                isInsubContact: b,
                deltaTime: N,
                deltaTimeReceived: M,
                messageFieldJsonArray: E,
                submessageFieldJsonArray: $,
                buttonValueJsonArray: c,
                bodyUrlCountInt: s,
                bodyUrlUniqueCountInt: u,
                ctaUrlUniqueCountInt: g,
                urlUniqueCountInt: P,
                messageBodyType: S != null ? S : void 0,
                mmCarouselCardIndex: I != null ? I : void 0,
                messageBubbleWidthPx: L != null ? L : void 0,
                messageBubbleHeightPx: R != null ? R : void 0,
              });
            (o("WAWebBizVpvPairFields").applyBizVpvPairFields(F, d),
              F.commit());
          })();
        };
      o("MerlinImpressionManager").logVisibilityTimestamps(r, a, i, _, N);
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
