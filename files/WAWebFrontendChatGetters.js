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
    "WAWebConstantsDeprecated",
    "WAWebContactCollection",
    "WAWebFrontendContactGetters",
    "WAWebGetters",
    "WAWebGettersCaches",
    "WAWebGroupType",
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
      k = m("isParentGroup"),
      I = m("broadcastRecipientCount", { default: 0 }),
      T = m("groupType"),
      D = m("hasCapi"),
      x = m("createdLocally"),
      $ = m("pendingDeleteForMeCount"),
      P = m("attachMediaContents"),
      N = m("formattedTitle"),
      M = m("assignedAgent"),
      w = m("isAssignedToMe", { default: !1 }),
      A = m("mute"),
      F = m("presence"),
      O = m("newsletterMetadata"),
      B = m("promises", {
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
      W = m("isFavorite", { default: !1 }),
      q = m("trusted"),
      U = m("active"),
      V = m("pendingAction"),
      H = m("pttRecordingSession"),
      G = m("unopenedByAssignedAgent", { default: !1 }),
      z = m("mmSignalSharingExpirationWindow"),
      j = d(
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
          T,
        ],
      ),
      K = d(
        function (e) {
          var t = e[0],
            n = e[1];
          return (
            t && n === o("WAWebGroupType").GroupType.LINKED_ANNOUNCEMENT_GROUP
          );
        },
        [s.getIsGroup, T],
      ),
      Q = d(
        function (e) {
          var t = e[0];
          return t === !0;
        },
        [D],
      ),
      X = d(
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
        [j, f],
      ),
      Y = d(
        function (e) {
          var t = e[0],
            n = e[1];
          return t === r("WAWebConstantsDeprecated").MARKED_AS_UNREAD
            ? t
            : Math.max(0, t - n);
        },
        [s.getUnreadCount, g],
      ),
      J = d(
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
      Z = d(
        function (e) {
          var t,
            n = e[0],
            r = e[1],
            o = n == null || (t = n.text) == null ? void 0 : t.trim();
          return !!((o != null && o !== "") || r);
        },
        [s.getDraftMessage, P],
      ),
      ee = d(
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
              return o("WAWebMsgGetters").isRealMessage(e);
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
          k,
          R,
          x,
          L,
          Z,
          I,
        ],
      ),
      te = d(
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
        [R, E, $, s.getId],
      ),
      ne = d(
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
      re = d(
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
      (l.getIsParentGroup = k),
      (l.getAttachMediaContents = P),
      (l.getFormattedTitle = N),
      (l.getAssignedAgent = M),
      (l.getIsAssignedToMe = w),
      (l.getMute = A),
      (l.getPresence = F),
      (l.getNewsletterMetadata = O),
      (l.getPromises = B),
      (l.getIsFavorite = W),
      (l.getTrusted = q),
      (l.getActive = U),
      (l.getPendingAction = V),
      (l.getPttRecordingSession = H),
      (l.getUnopenedByAssignedAgent = G),
      (l.getMmSignalSharingExpirationWindow = z),
      (l.getKind = j),
      (l.getIsCAG = K),
      (l.getIsCapiHostedGroup = Q),
      (l.getIsE2ee = X),
      (l.getOptimisticUnreadCount = Y),
      (l.getShouldShowUnreadDivider = J),
      (l.getHasDraftMessage = Z),
      (l.getShouldAppearInList = ee),
      (l.getPreviewMessage = te),
      (l.getShowChangeNumberNotification = ne),
      (l.getDerivedLastAddOnPreview = re));
  },
  98,
);
