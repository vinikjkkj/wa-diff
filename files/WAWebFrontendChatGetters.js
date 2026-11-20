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
    "WAWebChatOpeningNotice",
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
    "WAWebSilentPaymentMsg",
    "WAWebSilentProtocolMsg",
    "WAWebThreadMsgUtils",
    "WAWebWid",
    "WAWebWorkFeature",
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
      H = d(
        function (e) {
          var t = e[0],
            n = e[1],
            r = e[2],
            a = e[3];
          return (
            a.length > 0 &&
            (!t.isUser() ||
              n !== !0 ||
              r != null ||
              a.some(function (e) {
                return (
                  !o("WAWebChatOpeningNotice").isChatOpeningNotice(e) &&
                  !o("WAWebSilentProtocolMsg").isSilentProtocolMsg(e) &&
                  !o("WAWebSilentPaymentMsg").isSilentPaymentMsg(e)
                );
              }))
          );
        },
        [s.getId, V, s.getT, P, N, M],
      ),
      G = m("chatViewMode"),
      z = m("pendingDeleteForMeCount"),
      j = m("attachMediaContents"),
      K = m("isCameraCaptureDrawerOpen", { default: !1 }),
      Q = m("formattedTitle"),
      X = m("assignedAgent"),
      Y = m("isAssignedToMe", { default: !1 }),
      J = m("mute"),
      Z = m("presence"),
      ee = m("newsletterMetadata"),
      te = m("limitSharing"),
      ne = m("acp2Setting"),
      re = m("wallpaperValue"),
      oe = m("chatThemeValue"),
      ae = m("isAnnounceGrpRestrict", { default: !1 }),
      ie = m("promises", {
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
      le = m("isFavorite", { default: !1 }),
      se = m("trusted"),
      ue = m("notSpam"),
      ce = m("active"),
      de = m("canSend", { default: !1 }),
      me = m("pendingAction"),
      pe = m("pttRecordingSession"),
      _e = m("unopenedByAssignedAgent", { default: !1 }),
      fe = m("mmSignalSharingExpirationWindow"),
      ge = d(
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
      he = d(
        function (e) {
          var t = e[0],
            n = e[1];
          return (
            t && n === o("WAWebGroupType").GroupType.LINKED_ANNOUNCEMENT_GROUP
          );
        },
        [s.getIsGroup, W],
      ),
      ye = d(
        function (e) {
          var t = e[0],
            n = e[1];
          return t && n === o("WAWebGroupType").GroupType.COMMUNITY;
        },
        [s.getIsGroup, W],
      ),
      Ce = d(
        function (e) {
          var t = e[0];
          return t === !0;
        },
        [q],
      ),
      be = d(
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
        [ge, g],
      ),
      ve = d(
        function (e) {
          var t = e[0],
            n = e[1];
          return t === o("WAWebChatUnreadConstants").MARKED_AS_UNREAD
            ? t
            : Math.max(0, t - n);
        },
        [s.getUnreadCount, E],
      ),
      Se = d(
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
      Re = d(
        function (e) {
          var t,
            n = e[0],
            r = e[1],
            o = e[2],
            a = n == null || (t = n.text) == null ? void 0 : t.trim();
          return a != null && a !== "" ? !0 : r != null || o != null;
        },
        [s.getDraftMessage, j, pe],
      ),
      Le = d(
        function (e) {
          var t = e[0],
            n = e[1],
            r = e[2],
            a = e[3];
          return o("WAWebWorkFeature").isWork() || !n
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
      Ee = d(
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
          G,
          N,
          Re,
          Le,
        ],
      ),
      ke = d(
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
              u = Ie(a, i),
              c = t.length - 1;
            c >= 0;
            c--
          ) {
            var d = t.at(c);
            if (d && Te(d, u)) {
              if (s != null && !o("WAWebThreadMsgUtils").isMsgInThread(d, s))
                continue;
              return d;
            }
          }
          if (t.length > 0) return t.last();
        },
        [P, M, z, s.getId, ne],
      );
    function Ie(e, t) {
      return (
        (t == null ? void 0 : t.enabled) === !0 &&
        o("WAWebLimitSharingGatingUtils").isAcp2EnabledForWid(e)
      );
    }
    function Te(e, t) {
      return (
        o("WAWebChatModelDerivedMethods").isPreviewMessage(e) ||
        (t && o("WAWebChatModelDerivedMethods").isAcp2RestrictionNotice(e))
      );
    }
    var De = d(
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
      xe = d(
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
      $e = d(
        function (e) {
          var t = e[0];
          return o(
            "WAWebGroupHistoryPostJoinLocalJoinTimes",
          ).computeLocalJoinTimeFallbacks(t.getModelsArray());
        },
        [P, M],
      ),
      Pe = d(
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
      Ne = d(
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
      (l.getHasMessagesForSpamPanel = H),
      (l.getAttachMediaContents = j),
      (l.getIsCameraCaptureDrawerOpen = K),
      (l.getFormattedTitle = Q),
      (l.getAssignedAgent = X),
      (l.getIsAssignedToMe = Y),
      (l.getMute = J),
      (l.getPresence = Z),
      (l.getNewsletterMetadata = ee),
      (l.getLimitSharing = te),
      (l.getAcp2Setting = ne),
      (l.getWallpaperValue = re),
      (l.getChatThemeValue = oe),
      (l.getIsAnnounceGrpRestrict = ae),
      (l.getPromises = ie),
      (l.getIsFavorite = le),
      (l.getTrusted = se),
      (l.getNotSpam = ue),
      (l.getActive = ce),
      (l.getCanSend = de),
      (l.getPendingAction = me),
      (l.getPttRecordingSession = pe),
      (l.getUnopenedByAssignedAgent = _e),
      (l.getMmSignalSharingExpirationWindow = fe),
      (l.getKind = ge),
      (l.getIsCAG = he),
      (l.getIsCommunity = ye),
      (l.getIsCapiHostedGroup = Ce),
      (l.getIsE2ee = be),
      (l.getOptimisticUnreadCount = ve),
      (l.getShouldShowUnreadDivider = Se),
      (l.getHasDraftMessage = Re),
      (l.getShouldBroadcastAppearInList = Le),
      (l.getShouldAppearInList = Ee),
      (l.getPreviewMessage = ke),
      (l.getLastScheduledCreatedMsg = De),
      (l.getShareableHistoryInfo = xe),
      (l.getLatestJoinTimeByParticipant = $e),
      (l.getShowChangeNumberNotification = Pe),
      (l.getDerivedLastAddOnPreview = Ne));
  },
  98,
);
