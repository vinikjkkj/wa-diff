__d(
  "WAWebFrontendChatGetters",
  [
    "WALogger",
    "WAWebABProps",
    "WAWebAiThreadCreationUtils",
    "WAWebBizBroadcastDeviceCapabilityCommon",
    "WAWebBotFrontendGating",
    "WAWebBotGating",
    "WAWebBotUtils",
    "WAWebChatConstants",
    "WAWebChatFlowTypes",
    "WAWebChatGetters",
    "WAWebChatModelDerivedMethods",
    "WAWebChatUnreadConstants",
    "WAWebContactCollection",
    "WAWebFrontendContactGetters",
    "WAWebGetters",
    "WAWebGettersCaches",
    "WAWebGroupHistoryPostJoinLocalJoinTimes",
    "WAWebGroupHistorySupportedMessageTypesUtil",
    "WAWebGroupType",
    "WAWebHistorySyncUtils",
    "WAWebLastAddOnDBSerialization",
    "WAWebMsgGetters",
    "WAWebMsgType",
    "WAWebPrivacyModeSystemMsg",
    "WAWebThreadMsgUtils",
    "WAWebWid",
    "justknobx",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = o("WAWebGetters").createGetterFactories({
        root: (s = o("WAWebChatGetters")).getChatUnsafe,
        createCache: o("WAWebGettersCaches").createFrontendChatCache,
      }),
      c = u.clearCacheFor,
      d = u.computed,
      m = u.field,
      p = c,
      _ = m("groupMetadata"),
      f = m("broadcastMetadata"),
      g = m("contact"),
      h = m("bizBotSystemMsgType"),
      y = m("forceDismissAiAgentBlockBar", { default: !1 }),
      C = m("hasRequestedWelcomeMsg", { default: !1 }),
      b = m("afterReadDuration"),
      v = m("ephemeralDuration"),
      S = m("linkCount", { default: 0 }),
      R = m("docCount", { default: 0 }),
      L = m("productCount", { default: 0 }),
      E = m("pendingSeenCount", { default: 0 }),
      k = m("unreadMsgAnchor"),
      I = m("composeQuotedMsg"),
      T = m("composeQuotedMsgRemoteJid"),
      D = m("quotedMsgAdminGroupJid"),
      x = m("quotedMsgAdminGroupSubject"),
      $ = m("quotedMsgAdminParentGroupJid"),
      P = m("msgs"),
      N = m("msgsLength"),
      M = m("msgsChanged"),
      w = m("noEarlierMsgs", { default: !1 }),
      A = m("isParentGroup"),
      F = m("broadcastRecipientCount", { default: 0 }),
      O = m("groupType"),
      B = m("hasCapi"),
      W = m("createdLocally"),
      q = m("pendingDeleteForMeCount"),
      U = m("attachMediaContents"),
      V = m("isCameraCaptureDrawerOpen", { default: !1 }),
      H = m("formattedTitle"),
      G = m("assignedAgent"),
      z = m("isAssignedToMe", { default: !1 }),
      j = m("mute"),
      K = m("presence"),
      Q = m("newsletterMetadata"),
      X = m("limitSharing"),
      Y = m("wallpaperValue"),
      J = m("chatThemeValue"),
      Z = m("isAnnounceGrpRestrict", { default: !1 }),
      ee = m("promises", {
        getDefault: function () {
          return {
            reportSpamAndBlockSender: void 0,
            reportSpamBlockClear: void 0,
            reportSpamExitClear: void 0,
            sendNotSpam: void 0,
            sendUnstarAll: void 0,
            updateSortTime: void 0,
            setPin: void 0,
            setArchive: void 0,
            updateDraftMessage: void 0,
          };
        },
      }),
      te = m("isFavorite", { default: !1 }),
      ne = m("trusted"),
      re = m("active"),
      oe = m("pendingAction"),
      ae = m("pttRecordingSession"),
      ie = m("unopenedByAssignedAgent", { default: !1 }),
      le = m("mmSignalSharingExpirationWindow"),
      se = d(
        function (t) {
          var n = t[0],
            r = t[1],
            a = t[2],
            i = t[3],
            l = t[4],
            s = t[5];
          if (r)
            return s === o("WAWebGroupType").GroupType.COMMUNITY
              ? o("WAWebChatFlowTypes").ChatKindType.Community
              : o("WAWebChatFlowTypes").ChatKindType.Group;
          if (a) return o("WAWebChatFlowTypes").ChatKindType.Broadcast;
          if (i) return o("WAWebChatFlowTypes").ChatKindType.Chat;
          if (l) return o("WAWebChatFlowTypes").ChatKindType.Newsletter;
          o("WALogger").LOG(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "chat:unknown kind id:",
                "",
              ])),
            n.toLogString(),
          );
        },
        [
          s.getId,
          s.getIsGroup,
          s.getIsBroadcast,
          s.getIsUser,
          s.getIsNewsletter,
          O,
        ],
      ),
      ue = d(
        function (e) {
          var t = e[0],
            n = e[1];
          return (
            t && n === o("WAWebGroupType").GroupType.LINKED_ANNOUNCEMENT_GROUP
          );
        },
        [s.getIsGroup, O],
      ),
      ce = d(
        function (e) {
          var t = e[0];
          return t === !0;
        },
        [B],
      ),
      de = d(
        function (e) {
          var t = e[0],
            n = e[1];
          if (!n) return !1;
          if (t === o("WAWebChatFlowTypes").ChatKindType.Chat) {
            var r = o("WAWebPrivacyModeSystemMsg").getReducedPrivacyMode(
              n.privacyMode,
            );
            if (
              r === o("WAWebPrivacyModeSystemMsg").ReducedPrivacyMode.FB ||
              r === o("WAWebPrivacyModeSystemMsg").ReducedPrivacyMode.BSP
            )
              return !1;
          }
          return n.isHosted !== !0;
        },
        [se, g],
      ),
      me = d(
        function (e) {
          var t = e[0],
            n = e[1];
          return t === o("WAWebChatUnreadConstants").MARKED_AS_UNREAD
            ? t
            : Math.max(0, t - n);
        },
        [s.getUnreadCount, E],
      ),
      pe = d(
        function (e) {
          var t = e[0],
            n = e[1],
            r = e[2];
          if (t === 0) return !1;
          if (n) {
            var a = n.getMsgChunk(),
              i = a ? a.getModelsArray() : [];
            return (
              n !==
              i.find(function (e) {
                return o("WAWebMsgGetters").getIsUnreadType(e);
              })
            );
          }
          var l = r.last(),
            s = l != null && o("WAWebMsgGetters").getIsSentByMe(l);
          if (s) return !1;
          if (r.msgLoadState.noEarlierMsgs) {
            var u = r.filter(function (e) {
              return o("WAWebMsgGetters").getIsUnreadType(e);
            });
            return u.length !== t;
          }
          return !0;
        },
        [s.getUnreadCount, k, P],
      ),
      _e = d(
        function (e) {
          var t,
            n = e[0],
            r = e[1],
            o = n == null || (t = n.text) == null ? void 0 : t.trim();
          return !!((o != null && o !== "") || r);
        },
        [s.getDraftMessage, U],
      ),
      fe = d(
        function (e) {
          var t = e[0],
            n = e[1],
            r = e[2],
            a = e[3];
          return n
            ? t.user === "chat" ||
              o(
                "WAWebBizBroadcastDeviceCapabilityCommon",
              ).isBizBroadcastProEntrypointEnabledForStatus(
                r != null ? r : null,
              )
              ? !0
              : o(
                    "WAWebBizBroadcastDeviceCapabilityCommon",
                  ).isBizBroadcastEnabledAndDeviceSupported()
                ? a > 0
                : !1
            : !1;
        },
        [s.getId, s.getIsBroadcast, s.getBBProStatus, F],
      ),
      ge = d(
        function (e) {
          var t = e[0],
            n = e[1],
            a = e[2],
            i = e[3],
            l = e[4],
            s = e[5],
            u = e[6],
            c = e[7],
            d = e[8],
            m = e[9],
            p = e[10];
          if (
            n ||
            o("WAWebBotFrontendGating").isBotChatUnavailable(t) ||
            o("WAWebBotUtils").isHiddenBotWid(t)
          )
            return !1;
          if (a) return p;
          if (
            r("WAWebWid").isStatus(t) ||
            (i ===
              o("WAWebChatConstants")
                .ConversationEndOfHistoryTransferModelPropType
                .NOT_INCLUDED_IN_HIST_SYNC &&
              u.length === 0) ||
            (l && s === !0) ||
            (!l &&
              c === !0 &&
              u.every(function (e) {
                return e.broadcast && o("WAWebMsgGetters").getIsSentByMe(e);
              }) &&
              r("justknobx")._("310"))
          )
            return !1;
          var _ = u.some(function (e) {
              return (
                o("WAWebMsgGetters").isRealMessage(e) ||
                o("WAWebMsgGetters").getIsVisibleCallLog(e)
              );
            }),
            f = o("WAWebABProps").getABPropConfigValue(
              "chatlist_show_draft_for_empty_chat",
            );
          return c !== !0 || _ || (f && m);
        },
        [
          s.getId,
          s.getIsLocked,
          s.getIsBroadcast,
          s.getEndOfHistoryTransferType,
          s.getIsGroup,
          A,
          P,
          W,
          N,
          _e,
          fe,
        ],
      ),
      he = d(
        function (e) {
          for (
            var t = e[0],
              n = e[1],
              r = e[2],
              a = e[3],
              i =
                o("WAWebBotUtils").isMetaAiBot(a) &&
                o("WAWebBotGating").isDefaultThreadRoutingEnabled(),
              l = i
                ? o("WAWebAiThreadCreationUtils").getHistoricalMetaAiThreadId()
                : null,
              s = t.length - 1;
            s >= 0;
            s--
          ) {
            var u = t.at(s);
            if (u && o("WAWebChatModelDerivedMethods").isPreviewMessage(u)) {
              if (l != null && !o("WAWebThreadMsgUtils").isMsgInThread(u, l))
                continue;
              return u;
            }
          }
          if (t.length > 0) return t.last();
        },
        [P, M, q, s.getId],
      ),
      ye = d(
        function (e) {
          var t = e[0],
            n = e[1],
            a = e[2],
            i = e[3],
            l =
              i != null &&
              o("WAWebHistorySyncUtils").primaryHasMoreMessagesReadyToLoad(i),
            s = a && !l;
          if (!s)
            return {
              startOfHistoryLoaded: !1,
              earliestShareableMsgT: null,
              latestShareableMsgT: null,
            };
          for (var u = null, c = null, d = 0; d < t.length; d++) {
            var m = t.at(d);
            if (
              m != null &&
              r("WAWebGroupHistorySupportedMessageTypesUtil")(m.type)
            ) {
              var p = m.t;
              p != null &&
                ((u == null || p < u) && (u = p),
                (c == null || p > c) && (c = p));
            }
          }
          return {
            startOfHistoryLoaded: !0,
            earliestShareableMsgT: u,
            latestShareableMsgT: c,
          };
        },
        [P, M, w, s.getEndOfHistoryTransferType],
      ),
      Ce = d(
        function (e) {
          var t = e[0];
          return o(
            "WAWebGroupHistoryPostJoinLocalJoinTimes",
          ).computeLocalJoinTimeFallbacks(t.getModelsArray());
        },
        [P, M],
      ),
      be = d(
        function (e) {
          var t = e[0],
            n = e[1],
            r = e[2],
            a = e[3];
          if (!n || (!r && !a)) return !1;
          var i = o("WAWebContactCollection").ContactCollection.get(a || t);
          return !(
            i != null && o("WAWebFrontendContactGetters").getIsMyContact(i)
          );
        },
        [
          s.getId,
          s.getIsUser,
          s.getChangeNumberOldJid,
          s.getChangeNumberNewJid,
        ],
      ),
      ve = d(
        function (e) {
          var t = e[0],
            n = e[1];
          if (t) return t;
          if (n)
            return o(
              "WAWebLastAddOnDBSerialization",
            ).lastAddOnPreviewFromDeprecatedLastReactionPreview(n);
        },
        [s.getChatlistPreview, s.getLastReactionPreview],
      );
    ((l.clearFrontendChatGetterCacheFor = p),
      (l.getGroupMetadata = _),
      (l.getBroadcastMetadata = f),
      (l.getContact = g),
      (l.getBizBotSystemMsgType = h),
      (l.getForceDismissAiAgentBlockBar = y),
      (l.getHasRequestedWelcomeMsg = C),
      (l.getAfterReadDuration = b),
      (l.getEphemeralDuration = v),
      (l.getLinkCount = S),
      (l.getDocCount = R),
      (l.getProductCount = L),
      (l.getComposeQuotedMsg = I),
      (l.getComposeQuotedMsgRemoteJid = T),
      (l.getQuotedMsgAdminGroupJid = D),
      (l.getQuotedMsgAdminGroupSubject = x),
      (l.getQuotedMsgAdminParentGroupJid = $),
      (l.getMsgs = P),
      (l.getIsParentGroup = A),
      (l.getAttachMediaContents = U),
      (l.getIsCameraCaptureDrawerOpen = V),
      (l.getFormattedTitle = H),
      (l.getAssignedAgent = G),
      (l.getIsAssignedToMe = z),
      (l.getMute = j),
      (l.getPresence = K),
      (l.getNewsletterMetadata = Q),
      (l.getLimitSharing = X),
      (l.getWallpaperValue = Y),
      (l.getChatThemeValue = J),
      (l.getIsAnnounceGrpRestrict = Z),
      (l.getPromises = ee),
      (l.getIsFavorite = te),
      (l.getTrusted = ne),
      (l.getActive = re),
      (l.getPendingAction = oe),
      (l.getPttRecordingSession = ae),
      (l.getUnopenedByAssignedAgent = ie),
      (l.getMmSignalSharingExpirationWindow = le),
      (l.getKind = se),
      (l.getIsCAG = ue),
      (l.getIsCapiHostedGroup = ce),
      (l.getIsE2ee = de),
      (l.getOptimisticUnreadCount = me),
      (l.getShouldShowUnreadDivider = pe),
      (l.getHasDraftMessage = _e),
      (l.getShouldBroadcastAppearInList = fe),
      (l.getShouldAppearInList = ge),
      (l.getPreviewMessage = he),
      (l.getShareableHistoryInfo = ye),
      (l.getLatestJoinTimeByParticipant = Ce),
      (l.getShowChangeNumberNotification = be),
      (l.getDerivedLastAddOnPreview = ve));
  },
  98,
);
