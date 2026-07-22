__d(
  "WAWebFrontendChatGetters",
  [
    "WALogger",
    "WAWebABProps",
    "WAWebAiThreadCreationUtils",
    "WAWebBizBroadcastDeviceCapabilityCommon",
    "WAWebBotBaseGating",
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
      f = m("contact"),
      g = m("pendingSeenCount", { default: 0 }),
      h = m("unreadMsgAnchor"),
      y = m("composeQuotedMsg"),
      C = m("composeQuotedMsgRemoteJid"),
      b = m("quotedMsgAdminGroupJid"),
      v = m("quotedMsgAdminGroupSubject"),
      S = m("quotedMsgAdminParentGroupJid"),
      R = m("msgs"),
      L = m("msgsLength"),
      E = m("msgsChanged"),
      k = m("noEarlierMsgs", { default: !1 }),
      I = m("isParentGroup"),
      T = m("broadcastRecipientCount", { default: 0 }),
      D = m("groupType"),
      x = m("hasCapi"),
      $ = m("createdLocally"),
      P = m("pendingDeleteForMeCount"),
      N = m("attachMediaContents"),
      M = m("isCameraCaptureDrawerOpen", { default: !1 }),
      w = m("formattedTitle"),
      A = m("assignedAgent"),
      F = m("isAssignedToMe", { default: !1 }),
      O = m("mute"),
      B = m("presence"),
      W = m("newsletterMetadata"),
      q = m("promises", {
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
      U = m("isFavorite", { default: !1 }),
      V = m("trusted"),
      H = m("active"),
      G = m("pendingAction"),
      z = m("pttRecordingSession"),
      j = m("unopenedByAssignedAgent", { default: !1 }),
      K = m("mmSignalSharingExpirationWindow"),
      Q = d(
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
          D,
        ],
      ),
      X = d(
        function (e) {
          var t = e[0],
            n = e[1];
          return (
            t && n === o("WAWebGroupType").GroupType.LINKED_ANNOUNCEMENT_GROUP
          );
        },
        [s.getIsGroup, D],
      ),
      Y = d(
        function (e) {
          var t = e[0];
          return t === !0;
        },
        [x],
      ),
      J = d(
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
        [Q, f],
      ),
      Z = d(
        function (e) {
          var t = e[0],
            n = e[1];
          return t === o("WAWebChatUnreadConstants").MARKED_AS_UNREAD
            ? t
            : Math.max(0, t - n);
        },
        [s.getUnreadCount, g],
      ),
      ee = d(
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
        [s.getUnreadCount, h, R],
      ),
      te = d(
        function (e) {
          var t,
            n = e[0],
            r = e[1],
            o = n == null || (t = n.text) == null ? void 0 : t.trim();
          return !!((o != null && o !== "") || r);
        },
        [s.getDraftMessage, N],
      ),
      ne = d(
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
            (t.isBot() &&
              !o("WAWebBotBaseGating").isBotEnabled() &&
              !o("WAWebBotFrontendGating").isManusIntegrationEnabled()) ||
            o("WAWebBotUtils").isHiddenBotWid(t)
          )
            return !1;
          if (a)
            return t.user === "chat"
              ? !0
              : o(
                    "WAWebBizBroadcastDeviceCapabilityCommon",
                  ).isBizBroadcastEnabledAndDeviceSupported()
                ? p > 0
                : !1;
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
          I,
          R,
          $,
          L,
          te,
          T,
        ],
      ),
      re = d(
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
        [R, E, P, s.getId],
      ),
      oe = d(
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
            return { startOfHistoryLoaded: !1, earliestShareableMsgT: null };
          for (var u = null, c = 0; c < t.length; c++) {
            var d = t.at(c);
            if (
              d != null &&
              r("WAWebGroupHistorySupportedMessageTypesUtil")(d.type)
            ) {
              var m = d.t;
              m != null && (u == null || m < u) && (u = m);
            }
          }
          return { startOfHistoryLoaded: !0, earliestShareableMsgT: u };
        },
        [R, E, k, s.getEndOfHistoryTransferType],
      ),
      ae = d(
        function (e) {
          var t = e[0];
          return o(
            "WAWebGroupHistoryPostJoinLocalJoinTimes",
          ).computeLocalJoinTimeFallbacks(t.getModelsArray());
        },
        [R, E],
      ),
      ie = d(
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
      le = d(
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
      (l.getContact = f),
      (l.getComposeQuotedMsg = y),
      (l.getComposeQuotedMsgRemoteJid = C),
      (l.getQuotedMsgAdminGroupJid = b),
      (l.getQuotedMsgAdminGroupSubject = v),
      (l.getQuotedMsgAdminParentGroupJid = S),
      (l.getMsgs = R),
      (l.getIsParentGroup = I),
      (l.getAttachMediaContents = N),
      (l.getIsCameraCaptureDrawerOpen = M),
      (l.getFormattedTitle = w),
      (l.getAssignedAgent = A),
      (l.getIsAssignedToMe = F),
      (l.getMute = O),
      (l.getPresence = B),
      (l.getNewsletterMetadata = W),
      (l.getPromises = q),
      (l.getIsFavorite = U),
      (l.getTrusted = V),
      (l.getActive = H),
      (l.getPendingAction = G),
      (l.getPttRecordingSession = z),
      (l.getUnopenedByAssignedAgent = j),
      (l.getMmSignalSharingExpirationWindow = K),
      (l.getKind = Q),
      (l.getIsCAG = X),
      (l.getIsCapiHostedGroup = Y),
      (l.getIsE2ee = J),
      (l.getOptimisticUnreadCount = Z),
      (l.getShouldShowUnreadDivider = ee),
      (l.getHasDraftMessage = te),
      (l.getShouldAppearInList = ne),
      (l.getPreviewMessage = re),
      (l.getShareableHistoryInfo = oe),
      (l.getLatestJoinTimeByParticipant = ae),
      (l.getShowChangeNumberNotification = ie),
      (l.getDerivedLastAddOnPreview = le));
  },
  98,
);
