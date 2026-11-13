__d(
  "WAWebFrontendChatGetters",
  [
    "WALogger",
    "WAWebAiThreadCreationUtils",
    "WAWebBizBroadcastDeviceCapabilityCommon",
    "WAWebBizBroadcastProHiddenChatClassifier",
    "WAWebBotFrontendGating",
    "WAWebBotGating",
    "WAWebBotUtils",
    "WAWebChatConstants",
    "WAWebChatFlowTypes",
    "WAWebChatGetters",
    "WAWebChatModelDerivedMethods",
    "WAWebChatUnreadConstants",
    "WAWebChatViewMode.flow",
    "WAWebCommonMsgSubtypeTypes",
    "WAWebContactCollection",
    "WAWebFrontendContactGetters",
    "WAWebGetters",
    "WAWebGettersCaches",
    "WAWebGroupHistoryPostJoinLocalJoinTimes",
    "WAWebGroupHistorySupportedMessageTypesUtil",
    "WAWebGroupType",
    "WAWebHistorySyncUtils",
    "WAWebLastAddOnDBSerialization",
    "WAWebLimitSharingGatingUtils",
    "WAWebMsgGetters",
    "WAWebMsgType",
    "WAWebPrivacyModeSystemMsg",
    "WAWebProductFeature",
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
      A = d(
        function (e) {
          var t = e[0];
          return t.length > 0;
        },
        [P, N],
      ),
      F = m("lastReceivedKey"),
      O = m("isParentGroup"),
      B = m("broadcastRecipientCount", { default: 0 }),
      W = m("groupType"),
      q = m("hasCapi"),
      U = m("capiCallingPermissionType"),
      V = m("createdLocally"),
      H = m("chatViewMode"),
      G = m("pendingDeleteForMeCount"),
      z = m("attachMediaContents"),
      j = m("isCameraCaptureDrawerOpen", { default: !1 }),
      K = m("formattedTitle"),
      Q = m("assignedAgent"),
      X = m("isAssignedToMe", { default: !1 }),
      Y = m("mute"),
      J = m("presence"),
      Z = m("newsletterMetadata"),
      ee = m("limitSharing"),
      te = m("acp2Setting"),
      ne = m("wallpaperValue"),
      re = m("chatThemeValue"),
      oe = m("isAnnounceGrpRestrict", { default: !1 }),
      ae = m("promises", {
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
      ie = m("isFavorite", { default: !1 }),
      le = m("trusted"),
      se = m("notSpam"),
      ue = m("active"),
      ce = m("canSend", { default: !1 }),
      de = m("pendingAction"),
      me = m("pttRecordingSession"),
      pe = m("unopenedByAssignedAgent", { default: !1 }),
      _e = m("mmSignalSharingExpirationWindow"),
      fe = d(
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
          W,
        ],
      ),
      ge = d(
        function (e) {
          var t = e[0],
            n = e[1];
          return (
            t && n === o("WAWebGroupType").GroupType.LINKED_ANNOUNCEMENT_GROUP
          );
        },
        [s.getIsGroup, W],
      ),
      he = d(
        function (e) {
          var t = e[0],
            n = e[1];
          return t && n === o("WAWebGroupType").GroupType.COMMUNITY;
        },
        [s.getIsGroup, W],
      ),
      ye = d(
        function (e) {
          var t = e[0];
          return t === !0;
        },
        [q],
      ),
      Ce = d(
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
        [fe, g],
      ),
      be = d(
        function (e) {
          var t = e[0],
            n = e[1];
          return t === o("WAWebChatUnreadConstants").MARKED_AS_UNREAD
            ? t
            : Math.max(0, t - n);
        },
        [s.getUnreadCount, E],
      ),
      ve = d(
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
      Se = d(
        function (e) {
          var t,
            n = e[0],
            r = e[1],
            o = e[2],
            a = n == null || (t = n.text) == null ? void 0 : t.trim();
          return a != null && a !== "" ? !0 : r != null || o != null;
        },
        [s.getDraftMessage, z, me],
      ),
      Re = d(
        function (e) {
          var t = e[0],
            n = e[1],
            r = e[2],
            a = e[3];
          return o("WAWebProductFeature").isInternalProduct() || !n
            ? !1
            : t.user === "chat" || r
              ? !0
              : o(
                    "WAWebBizBroadcastDeviceCapabilityCommon",
                  ).isBizBroadcastEnabledAndDeviceSupported()
                ? a > 0
                : !1;
        },
        [s.getId, s.getIsBroadcast, s.getBBProEntrypointEnabled, B],
      ),
      Le = d(
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
            p = e[10],
            _ = e[11];
          if (
            n ||
            o("WAWebBotFrontendGating").isBotChatUnavailable(t) ||
            o("WAWebBotUtils").isHiddenBotWid(t)
          )
            return !1;
          if (a) return _;
          if (
            r("WAWebWid").isStatus(t) ||
            (i ===
              o("WAWebChatConstants")
                .ConversationEndOfHistoryTransferModelPropType
                .NOT_INCLUDED_IN_HIST_SYNC &&
              u.length === 0) ||
            (l && s === !0) ||
            (d ===
              o("WAWebChatViewMode.flow").ChatViewModeType
                .ONLY_MARKETING_FROM_SELF &&
              !p &&
              o(
                "WAWebBizBroadcastProHiddenChatClassifier",
              ).isBizBroadcastProHiddenChatsEnabled()) ||
            (!l &&
              c === !0 &&
              u.every(function (e) {
                return e.broadcast && o("WAWebMsgGetters").getIsSentByMe(e);
              }) &&
              r("justknobx")._("310"))
          )
            return !1;
          var f = u.some(function (e) {
            return (
              o("WAWebMsgGetters").isRealMessage(e) ||
              o("WAWebMsgGetters").getIsVisibleCallLog(e)
            );
          });
          return c !== !0 || f || p;
        },
        [
          s.getId,
          s.getIsLocked,
          s.getIsBroadcast,
          s.getEndOfHistoryTransferType,
          s.getIsGroup,
          O,
          P,
          V,
          H,
          N,
          Se,
          Re,
        ],
      ),
      Ee = d(
        function (e) {
          for (
            var t = e[0],
              n = e[1],
              r = e[2],
              a = e[3],
              i = e[4],
              l =
                o("WAWebBotUtils").isMetaAiBot(a) &&
                o("WAWebBotGating").isDefaultThreadRoutingEnabled(),
              s = l
                ? o("WAWebAiThreadCreationUtils").getHistoricalMetaAiThreadId()
                : null,
              u = ke(a, i),
              c = t.length - 1;
            c >= 0;
            c--
          ) {
            var d = t.at(c);
            if (d && Ie(d, u)) {
              if (s != null && !o("WAWebThreadMsgUtils").isMsgInThread(d, s))
                continue;
              return d;
            }
          }
          if (t.length > 0) return t.last();
        },
        [P, M, G, s.getId, te],
      );
    function ke(e, t) {
      return (
        (t == null ? void 0 : t.enabled) === !0 &&
        o("WAWebLimitSharingGatingUtils").isAcp2EnabledForWid(e)
      );
    }
    function Ie(e, t) {
      return (
        o("WAWebChatModelDerivedMethods").isPreviewMessage(e) ||
        (t && o("WAWebChatModelDerivedMethods").isAcp2RestrictionNotice(e))
      );
    }
    var Te = d(
        function (e) {
          for (var t = e[0], n = e[1], r = t.length - 1; r >= 0; r--) {
            var a = t.at(r);
            if (a != null) {
              if (
                a.subtype ===
                o("WAWebCommonMsgSubtypeTypes").MsgSubtype
                  .ScheduledMessageCreated
              )
                return a;
              if (o("WAWebChatModelDerivedMethods").isPreviewMessage(a))
                return null;
            }
          }
          return null;
        },
        [P, M],
      ),
      De = d(
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
      xe = d(
        function (e) {
          var t = e[0];
          return o(
            "WAWebGroupHistoryPostJoinLocalJoinTimes",
          ).computeLocalJoinTimeFallbacks(t.getModelsArray());
        },
        [P, M],
      ),
      $e = d(
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
      Pe = d(
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
      (l.getHasLoadedMsgs = A),
      (l.getLastReceivedKey = F),
      (l.getIsParentGroup = O),
      (l.getCapiCallingPermissionType = U),
      (l.getAttachMediaContents = z),
      (l.getIsCameraCaptureDrawerOpen = j),
      (l.getFormattedTitle = K),
      (l.getAssignedAgent = Q),
      (l.getIsAssignedToMe = X),
      (l.getMute = Y),
      (l.getPresence = J),
      (l.getNewsletterMetadata = Z),
      (l.getLimitSharing = ee),
      (l.getAcp2Setting = te),
      (l.getWallpaperValue = ne),
      (l.getChatThemeValue = re),
      (l.getIsAnnounceGrpRestrict = oe),
      (l.getPromises = ae),
      (l.getIsFavorite = ie),
      (l.getTrusted = le),
      (l.getNotSpam = se),
      (l.getActive = ue),
      (l.getCanSend = ce),
      (l.getPendingAction = de),
      (l.getPttRecordingSession = me),
      (l.getUnopenedByAssignedAgent = pe),
      (l.getMmSignalSharingExpirationWindow = _e),
      (l.getKind = fe),
      (l.getIsCAG = ge),
      (l.getIsCommunity = he),
      (l.getIsCapiHostedGroup = ye),
      (l.getIsE2ee = Ce),
      (l.getOptimisticUnreadCount = be),
      (l.getShouldShowUnreadDivider = ve),
      (l.getHasDraftMessage = Se),
      (l.getShouldBroadcastAppearInList = Re),
      (l.getShouldAppearInList = Le),
      (l.getPreviewMessage = Ee),
      (l.getLastScheduledCreatedMsg = Te),
      (l.getShareableHistoryInfo = De),
      (l.getLatestJoinTimeByParticipant = xe),
      (l.getShowChangeNumberNotification = $e),
      (l.getDerivedLastAddOnPreview = Pe));
  },
  98,
);
