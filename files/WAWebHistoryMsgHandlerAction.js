__d(
  "WAWebHistoryMsgHandlerAction",
  [
    "Promise",
    "WABase64",
    "WAFilteredCatch",
    "WALogger",
    "WALongInt",
    "WATimeUtils",
    "WAWebAddonProcessMsgs",
    "WAWebAddonProcessMsgsUtils",
    "WAWebAdvHostedAccountTypeSystemMsg",
    "WAWebApiContact",
    "WAWebApiFilterAndReplaceMessages",
    "WAWebApiHistorySyncNotification",
    "WAWebAsISOCountryCode",
    "WAWebBackendApi",
    "WAWebBackendErrors",
    "WAWebBizCoexGatingUtils",
    "WAWebBizCoexUtils",
    "WAWebBotTypes",
    "WAWebCTWAGatingUtils",
    "WAWebCallsOnlyGating",
    "WAWebChatConstants",
    "WAWebCheckUpdateOrphanReactions",
    "WAWebContactSystemMsg",
    "WAWebCryptoCurve25519",
    "WAWebCurrentUser",
    "WAWebDBAssociatedMsgsAttachDetachAPI",
    "WAWebDBCreateLidPnMappings",
    "WAWebDBDrainBotOrphansForHistoryMsgs",
    "WAWebDBProcessInitialHistorySyncMessage",
    "WAWebEphemeralityTypes",
    "WAWebEphemeralityUtils",
    "WAWebHandleAddChats",
    "WAWebHistorySyncLidChatGating",
    "WAWebHistorySyncLogUtils",
    "WAWebHistorySyncNotificationCommonUtils",
    "WAWebHistorySyncNotificationUtils",
    "WAWebHistorySyncStickers",
    "WAWebLidMigrationUtils",
    "WAWebLimitSharingProtoUtils",
    "WAWebMemberLabelHistorySync",
    "WAWebMmSignalSharingExpirationWindowUtils",
    "WAWebMobilePlatforms",
    "WAWebMsgAGMProcessing",
    "WAWebMsgKey",
    "WAWebMsgType",
    "WAWebNoop",
    "WAWebProcessMessageAssociationMessages",
    "WAWebProtobufsAdv.pb",
    "WAWebProtobufsE2E.pb",
    "WAWebProtobufsHistorySync.pb",
    "WAWebSeedBotProfilesFromHistorySync",
    "WAWebSignalCommonUtils",
    "WAWebSignalProtocolStore",
    "WAWebSyncBootstrap",
    "WAWebSyncdOrphan",
    "WAWebUserPrefsHistorySync",
    "WAWebUserPrefsIndexedDBStorage",
    "WAWebUserPrefsModelStorage",
    "WAWebUserPrefsMultiDevice",
    "WAWebUserPrefsPhoneNumberHidingThreadPromotionMigration",
    "WAWebUserUtils",
    "WAWebUsernameTypes",
    "WAWebVoipActionWriteCallLogSync",
    "WAWebWid",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
    "cr:21347",
    "getErrorSafe",
    "isStringNullOrEmpty",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d,
      m,
      p,
      _,
      f,
      g,
      h,
      y,
      C,
      b,
      v,
      S,
      R,
      L,
      E,
      k,
      I,
      T,
      D,
      x,
      $,
      P,
      N,
      M,
      w,
      A,
      F,
      O;
    function B(e) {
      return W.apply(this, arguments);
    }
    function W() {
      return (
        (W = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.chunkDownloadFinishTimestamp,
            a = e.chunkInfo,
            i = e.historyLidPnMappings,
            l = e.historySyncDataAppliedMetric,
            s = e.historySyncDownloadMetric,
            u = e.newLidMetadata,
            c = e.newUsernameUpdates,
            d = e.proto;
          o("WALogger")
            .LOG(
              f ||
                (f = babelHelpers.taggedTemplateLiteralLoose([
                  "[history sync][initial bootstrap] preprocessing started, ",
                  "",
                ])),
              o("WAWebHistorySyncLogUtils").getHistorySyncLogDetailsString(a),
            )
            .tags("history-sync");
          var m = [],
            p = {},
            _ = {},
            w = new Map(),
            A = {},
            F = [],
            B = new Map(),
            W = new Set(),
            q = 0,
            U = [],
            V = [],
            H = [],
            Y = o(
              "WAWebHistorySyncNotificationCommonUtils",
            ).getLidMappingAsStringSet(i);
          o("WAWebCurrentUser").isEmployee() &&
            o("WALogger")
              .LOG(
                g ||
                  (g = babelHelpers.taggedTemplateLiteralLoose([
                    "first lid mappings for initial sync. count: ",
                    ". ",
                    "...",
                  ])),
                Y == null ? void 0 : Y.size,
                o("WAWebHistorySyncNotificationCommonUtils").getLidsForLogging(
                  Y,
                ),
              )
              .verbose();
          var J = new Map(),
            Z = [],
            ee = 0,
            te = 0,
            ne = 0,
            re = [],
            oe =
              o(
                "WAWebBizCoexGatingUtils",
              ).smbHostedLazySystemMsgInsertInHistorySyncEnabled() &&
              (yield o("WAWebUserPrefsMultiDevice").getIsHostedMeAccount()) ===
                !0,
            ae = function* (t) {
              var e,
                n,
                l,
                s,
                c,
                d,
                f = t.id;
              o("WAWebCurrentUser").isEmployee() &&
                o("WALogger").LOG(
                  D ||
                    (D = babelHelpers.taggedTemplateLiteralLoose([
                      "[history sync] processing conversation ",
                      " with ",
                      " messages",
                    ])),
                  f,
                  t.messages.length,
                );
              var g = o("WAWebWidFactory").createWid(f);
              if (g.isNewsletter()) return 0;
              var h = z(g, t);
              if (h.result === "skip-chat") return 0;
              if (h.result === "extracted") {
                var y = h.accountLid;
                if (w.has(y))
                  return (
                    o("WALogger")
                      .ERROR(
                        x ||
                          (x = babelHelpers.taggedTemplateLiteralLoose([
                            "[history sync] handleInitialSyncMsgs: Found duplicated accountLid during initial sync",
                          ])),
                      )
                      .sendLogs("duplicated-account-lid-in-history-sync"),
                    0
                  );
                w.set(y, g);
              } else h.result;
              var C = g,
                b,
                v =
                  o("WAWebHistorySyncLidChatGating").isForcedHistoryLidChat() &&
                  g.isRegularUserPn() &&
                  h.accountLid != null;
              if (
                (v &&
                  h.accountLid != null &&
                  (ee++,
                  Z.length < 3 &&
                    Z.push(
                      g.toLogString() + " -> " + h.accountLid.toLogString(),
                    ),
                  (C = h.accountLid),
                  (b = g.toString())),
                g.isUser())
              ) {
                if (g.isLid()) {
                  var S = t.pnJid;
                  S != null &&
                    m.push({
                      lid: g,
                      pn: o("WAWebWidFactory").createUserWidOrThrow(S),
                    });
                  var R = t.displayName,
                    L = t.shareOwnPn;
                  if (R != null || L != null) {
                    var E = {};
                    (R != null && (E.displayNameLID = R),
                      L != null && (E.shareOwnPn = L),
                      u.push({ lid: g, data: E }));
                  }
                } else if (t.lidJid != null) {
                  var k = o("WAWebWidFactory").createUserLidOrThrow(t.lidJid);
                  m.push({ lid: k, pn: g });
                }
              }
              var I = t.name;
              C.isBot() && I != null && I !== "" && V.push({ name: I, wid: C });
              var T = [];
              q += t.messages.length;
              var O = [],
                G = new Set(),
                j = [];
              (t.messages.length === 0 && (p[f] = -1),
                r("isStringNullOrEmpty")(t.pHash) || (A[f] = t.pHash));
              var K,
                ae = !1,
                ie = [],
                le = 0,
                se = 0;
              (t.messages.forEach(function (e, n) {
                var l, s, u, c;
                if (n === t.messages.length - 1) {
                  var d = o("WALongInt").maybeNumberOrThrowIfTooLarge(
                    e.msgOrderId,
                  );
                  d != null && (p[f] = d);
                }
                var m =
                  (e == null ||
                  (l = e.message) == null ||
                  (l = l.message) == null ||
                  (l = l.protocolMessage) == null
                    ? void 0
                    : l.type) ===
                  o("WAWebProtobufsE2E.pb").Message$ProtocolMessage$Type
                    .REQUEST_WELCOME_MESSAGE;
                if (m) {
                  le++;
                  return;
                }
                var _ =
                  (e == null ||
                  (s = e.message) == null ||
                  (s = s.message) == null ||
                  (s = s.protocolMessage) == null
                    ? void 0
                    : s.type) ===
                  o("WAWebProtobufsE2E.pb").Message$ProtocolMessage$Type
                    .BOT_MEMU_ONBOARDING_MESSAGE;
                if (_) {
                  se++;
                  return;
                }
                if (
                  !o(
                    "WAWebLimitSharingProtoUtils",
                  ).shouldWithholdHistorySyncMessage(t, e)
                ) {
                  if (
                    o("WAWebMobilePlatforms").isSMB() &&
                    o(
                      "WAWebBizCoexGatingUtils",
                    ).smbHostedLazySystemMsgInsertInHistorySyncEnabled() &&
                    n === 0 &&
                    C.isUser() &&
                    t.systemMessageToInsert != null
                  )
                    switch (t.systemMessageToInsert) {
                      case o("WAWebProtobufsHistorySync.pb")
                        .PrivacySystemMessage.E2EE_MSG: {
                        if (oe) break;
                        var h = o(
                          "WAWebAdvHostedAccountTypeSystemMsg",
                        ).genAdvAccountTypeChangeNotificationMsg({
                          accountTypeChangedUser:
                            o("WAWebUserUtils").getMeUserOrThrow(),
                          chatId: C,
                          newAdvAccountType: o("WAWebProtobufsAdv.pb")
                            .ADVEncryptionType.E2EE,
                        });
                        (O.push(h),
                          o(
                            "WAWebBizCoexUtils",
                          ).sendWamCoexPrivacySysMsgHistorySyncInsert(h));
                        break;
                      }
                      case o("WAWebProtobufsHistorySync.pb")
                        .PrivacySystemMessage.NE2EE_SELF: {
                        if (!oe) break;
                        var y = o(
                          "WAWebAdvHostedAccountTypeSystemMsg",
                        ).genAdvAccountTypeSelfTransitionToCoexNotificationMsg(
                          C,
                          o("WAWebUserUtils").getMeUserOrThrow(),
                        );
                        (O.push(y),
                          o(
                            "WAWebBizCoexUtils",
                          ).sendWamCoexPrivacySysMsgHistorySyncInsert(y));
                        break;
                      }
                      case o("WAWebProtobufsHistorySync.pb")
                        .PrivacySystemMessage.NE2EE_OTHER: {
                        var b = o(
                          "WAWebAdvHostedAccountTypeSystemMsg",
                        ).genAdvAccountTypeChangeNotificationMsg({
                          accountTypeChangedUser:
                            o("WAWebUserUtils").getMeUserOrThrow(),
                          chatId: C,
                          newAdvAccountType: o("WAWebProtobufsAdv.pb")
                            .ADVEncryptionType.HOSTED,
                        });
                        (O.push(b),
                          o(
                            "WAWebBizCoexUtils",
                          ).sendWamCoexPrivacySysMsgHistorySyncInsert(b));
                      }
                    }
                  var v = o(
                      "WAWebHistorySyncNotificationCommonUtils",
                    ).parseWebMsgInfoAndReturnNullOnFailure({
                      protobufChatId: g,
                      message: e.message,
                      chunkInfo: a,
                      allLidMapping: Y,
                      totalMissingMapping: J,
                      historyLidPnMappings: i,
                      dbChatId: C,
                    }),
                    S =
                      ((u = e.message) == null ||
                      (u = u.message) == null ||
                      (u = u.commentMessage) == null
                        ? void 0
                        : u.targetMessageKey) == null,
                    R = (v == null ? void 0 : v.associationType) != null;
                  if (S) {
                    var L;
                    (v != null &&
                      G.has(v.id.toString()) &&
                      G.delete(v == null ? void 0 : v.id.toString()),
                      (v != null &&
                        v.type === o("WAWebMsgType").MSG_TYPE.INTERACTIVE &&
                        v.ctwaContext != null) ||
                        O.push(v));
                    var E =
                        (L = e.message) == null ||
                        (L = L.message) == null ||
                        (L = L.extendedTextMessage) == null ||
                        (L = L.contextInfo) == null
                          ? void 0
                          : L.externalAdReply,
                      k = v != null ? v : {},
                      I = k.from,
                      D = k.id,
                      x = k.to;
                    if (
                      E != null &&
                      (D == null ? void 0 : D.fromMe) != null &&
                      I != null &&
                      x != null &&
                      o("WAWebCTWAGatingUtils").shouldGenerateAGMMsgs(
                        E,
                        D.fromMe,
                        C,
                      )
                    ) {
                      var $,
                        P = new (r("WAWebMsgKey"))({
                          fromMe: !D.fromMe,
                          remote: C,
                          id: r("WAWebMsgKey").newId_DEPRECATED(),
                        }),
                        N = o(
                          "WAWebMsgAGMProcessing",
                        ).genHistoryAutomatedGreetingMsg({
                          msgKey: P,
                          ctwaContext: E,
                          to: I,
                          from: x,
                          msgTimestamp:
                            ($ = e.message) == null
                              ? void 0
                              : $.messageTimestamp,
                        });
                      O.push(N);
                    }
                  }
                  if (v != null && R) {
                    var M = v.parentMsgKey.toString();
                    (G.add(M), j.push(v));
                  }
                  ((T = T.concat(
                    o("WAWebAddonProcessMsgsUtils").parseHistorySyncMsg({
                      webMsgInfo: e.message,
                      parsedWebMsgInfo: v,
                      isFromCag: (c = t.isDefaultSubgroup) != null ? c : !1,
                    }),
                  )),
                    (v == null ? void 0 : v.subtype) ===
                      "biz_bot_1p_disclosure" &&
                      (K = o("WAWebBotTypes").BizBotType.BIZ_1P),
                    (v == null ? void 0 : v.subtype) ===
                      "biz_bot_3p_disclosure" &&
                      (K = o("WAWebBotTypes").BizBotType.BIZ_3P),
                    (v == null ? void 0 : v.subtype) ===
                      "ctwa_consumer_data_sharing_disclosure_system_message" &&
                      (ae = !0),
                    (ie = o(
                      "WAWebMmSignalSharingExpirationWindowUtils",
                    ).getUpdatedMmSignalSharingExpirationWindowFromHistorySync(
                      e.message,
                      ie,
                    )));
                }
              }),
                le > 0 &&
                  o("WALogger").LOG(
                    $ ||
                      ($ = babelHelpers.taggedTemplateLiteralLoose([
                        "[history sync] Dropped ",
                        " request welcome messages",
                      ])),
                    le,
                  ),
                se > 0 &&
                  o("WALogger").LOG(
                    P ||
                      (P = babelHelpers.taggedTemplateLiteralLoose([
                        "[history sync] Dropped ",
                        " memu onboarding messages",
                      ])),
                    se,
                  ));
              var ue;
              if (G.size > 0) {
                var ce = o(
                  "WAWebProcessMessageAssociationMessages",
                ).classifyAssociatedMsgsFromHistorySyncUsingMissingParentsCache(
                  j,
                  G,
                );
                ce != null &&
                  ce.validAssociatedMsgs &&
                  (ue = o("WAWebApiFilterAndReplaceMessages").validateMsgFn(
                    ce == null ? void 0 : ce.validAssociatedMsgs,
                  ));
              }
              ((O = o(
                "WAWebApiFilterAndReplaceMessages",
              ).filterAndReplaceMessagesInitialHistorySync(O, ue)),
                (O = O.reverse()));
              var de = o(
                "WAWebLimitSharingProtoUtils",
              ).getAcp2SettingFromProtocolHistorySyncConversation(t);
              if (
                de != null &&
                (B.set(C.toString(), de),
                o(
                  "WAWebLimitSharingProtoUtils",
                ).shouldInjectAcp2HistorySyncNotice(de, C, O))
              ) {
                var me = babelHelpers.extends(
                  {},
                  o("WAWebContactSystemMsg").genAcp2UpdateSystemMsg(C, de),
                  { t: Math.floor(Number(de.settingTimestamp) / 1e3) },
                );
                O.push(me);
              }
              var pe = t.contactPrimaryIdentityKey;
              if (pe && r("WAWebWid").isUser(C)) {
                var _e = o("WAWebSignalCommonUtils").bufferToStr(
                  o("WAWebCryptoCurve25519").toSignalCurvePubKey(pe),
                );
                U.push({
                  userId: o("WAWebWidFactory").asUserWidOrThrow(C),
                  identityKey: _e,
                  aeaAccountType: t.contactAccountEncryptionAttestationType,
                  nonE2EeType: t.nonE2EeType,
                });
              }
              var fe = t.nonE2EeType;
              fe != null &&
                h.accountLid != null &&
                H.push({ user: h.accountLid, nonE2EeType: fe });
              var ge, he, ye;
              if (
                ((e = t.disappearingMode) == null ? void 0 : e.initiator) !=
                null
              )
                switch (t.disappearingMode.initiator) {
                  case o("WAWebProtobufsE2E.pb").DisappearingMode$Initiator
                    .CHANGED_IN_CHAT:
                    ((ge = o("WAWebEphemeralityTypes").DisappearingModeInitiator
                      .ChangedInChat),
                      (he = o("WAWebEphemeralityTypes").DisappearingModeTrigger
                        .ChatSettings));
                    break;
                  case o("WAWebProtobufsE2E.pb").DisappearingMode$Initiator
                    .INITIATED_BY_ME:
                    ((ge = o("WAWebEphemeralityTypes").DisappearingModeInitiator
                      .InitiatedByMe),
                      (he = o("WAWebEphemeralityTypes").DisappearingModeTrigger
                        .AccountSettings),
                      (ye = !0));
                    break;
                  case o("WAWebProtobufsE2E.pb").DisappearingMode$Initiator
                    .INITIATED_BY_OTHER:
                  case o("WAWebProtobufsE2E.pb").DisappearingMode$Initiator
                    .BIZ_UPGRADE_FB_HOSTING:
                    ((ge = o("WAWebEphemeralityTypes").DisappearingModeInitiator
                      .InitiatedByOther),
                      (he = o("WAWebEphemeralityTypes").DisappearingModeTrigger
                        .AccountSettings),
                      (ye = !1));
                    break;
                }
              if (
                ((n = t.disappearingMode) == null ? void 0 : n.trigger) != null
              ) {
                var Ce = o(
                  "WAWebEphemeralityUtils",
                ).getDisappearingModeTriggerFromProtobuf(
                  t.disappearingMode.trigger,
                );
                Ce != null && (he = Ce);
              }
              ((l = t.disappearingMode) == null ? void 0 : l.initiatedByMe) !=
                null && (ye = t.disappearingMode.initiatedByMe);
              var be = t.tcToken != null && t.tcTokenTimestamp != null;
              if (o("WAWebCurrentUser").isEmployee()) {
                var ve;
                o("WALogger").LOG(
                  N ||
                    (N = babelHelpers.taggedTemplateLiteralLoose([
                      "handleInitialSyncMsgs: incoming chat info: protobufChatId=",
                      ", dbChatId=",
                      ", ",
                      ", ",
                      "",
                    ])),
                  g,
                  C,
                  (ve = h.accountLid) != null ? ve : "n/a",
                  C.isRegularUser()
                    ? o("WAWebApiContact").getAlternateUserWid(
                        o("WAWebWidFactory").asUserWidOrThrow(C),
                      )
                    : "n/a",
                );
              }
              var Se = h.accountLid,
                Re = {
                  t: o("WALongInt").maybeNumberOrThrowIfTooLarge(
                    (s = t.conversationTimestamp) != null
                      ? s
                      : t.lastMsgTimestamp,
                  ),
                  accountLid: Se,
                  id: C,
                  unreadCount: t.unreadCount,
                  ephemeralDuration: t.ephemeralExpiration,
                  ephemeralSettingTimestamp: t.ephemeralSettingTimestamp,
                  disappearingModeInitiator: ge,
                  disappearingModeTrigger: he,
                  disappearingModeInitiatedByMe: ye,
                  endOfHistoryTransferType:
                    (c = t.endOfHistoryTransferType) != null
                      ? c
                      : o("WAWebChatConstants")
                          .ConversationEndOfHistoryTransferModelPropType
                          .INCOMPLETE,
                  name: t.name,
                  notSpam: t.notSpam,
                  isSenderNewAccount: t.isSenderNewAccount,
                  isSenderSuspicious: t.isSenderSuspicious,
                  pendingInitialLoading: !1,
                  unreadMentionCount: t.unreadMentionCount,
                  tcToken: be ? t.tcToken : null,
                  tcTokenTimestamp: be ? t.tcTokenTimestamp : null,
                  tcTokenSenderTimestamp: t.tcTokenSenderTimestamp,
                  bizBotSystemMsgType: K,
                  hasCtwaConsumerDataSharingDisclosureSystemMsg: ae || void 0,
                  isLocked: t.locked,
                  limitSharing: o(
                    "WAWebLimitSharingProtoUtils",
                  ).getLimitSharingFromProtocolHistorySyncConversation(t),
                  capiThreadControl: Q(t.maibaAiThreadEnabled),
                  historyChatId: b,
                };
              if (
                (C.isLid() && (Re.lidOriginType = X(t.lidOriginType)),
                t.archived != null && (Re.archive = t.archived),
                t.authAgentParentCompanyName != null)
              ) {
                var Le;
                ((Re.parentCompanyName = t.authAgentParentCompanyName),
                  (Re.obaPhoneNumber =
                    (Le = t.authAgentObaPhoneNumber) != null ? Le : ""));
              }
              ((d = ie) != null &&
                d.length &&
                (Re.mmSignalSharingExpirationWindow = o(
                  "WAWebMmSignalSharingExpirationWindowUtils",
                ).getSortedMmSignalSharingExpirationWindowFromHistorySync(ie)),
                re.push(
                  o("WAWebHistorySyncNotificationUtils")
                    .saveGroupMetadataForLeftGroup(t, Re.id)
                    .catch(function (e) {
                      o("WALogger")
                        .WARN(
                          M ||
                            (M = babelHelpers.taggedTemplateLiteralLoose([
                              "[history sync] history_sync_notification_handler: saveGroupMetadataForLeftGroup failed",
                            ])),
                        )
                        .tags("history-sync");
                    }),
                ));
              var Ee = C.toString(),
                ke = W.has(f);
              ke ? te++ : W.add(f);
              var Ie = Object.prototype.hasOwnProperty.call(_, Ee);
              (Ie ? ne++ : ke || F.push(Re),
                (_[Ee] = { chatInfo: Re, msgs: O, unifiedAddons: T }));
            },
            ie;
          for (var le of d.conversations) ie = yield* ae(le);
          (ee > 0 &&
            o("WALogger").LOG(
              h ||
                (h = babelHelpers.taggedTemplateLiteralLoose([
                  "[history sync] overriding ",
                  " chat ids => ",
                  "",
                ])),
              ee,
              Z,
            ),
            te > 0 &&
              o("WALogger").LOG(
                y ||
                  (y = babelHelpers.taggedTemplateLiteralLoose([
                    "[history sync] found ",
                    " duplicated protobuf conversation ids during initial sync",
                  ])),
                te,
              ),
            ne > 0 &&
              o("WALogger").LOG(
                C ||
                  (C = babelHelpers.taggedTemplateLiteralLoose([
                    "[history sync] found ",
                    " duplicated db conversation ids during initial sync",
                  ])),
                ne,
              ));
          for (var se of d.accounts) {
            var ue = j(se);
            ue && c.push(ue);
          }
          var ce = o("WAWebHistorySyncLogUtils").getHistorySyncLogDetailsString(
            a,
            q,
            F.length,
          );
          (o("WALogger")
            .LOG(
              b ||
                (b = babelHelpers.taggedTemplateLiteralLoose([
                  "[history sync][initial bootstrap] preprocessing completed, ",
                  "",
                ])),
              ce,
            )
            .tags("history-sync"),
            m.length > 0 &&
              (o("WALogger").LOG(
                v ||
                  (v = babelHelpers.taggedTemplateLiteralLoose([
                    "[history sync] saving ",
                    " LIDxPN mappings obtained from conversations",
                  ])),
                m.length,
              ),
              yield o("WAWebDBCreateLidPnMappings").createLidPnMappings({
                mappings: m,
                flushImmediately: !0,
                identityChangeHandlingEnabled: !1,
                learningSource: "history-msg-handler",
              })),
            (s.mdBootstrapMessagesCount = q),
            (s.mdBootstrapChatsCount = d.conversations.length),
            o(
              "WAWebHistorySyncNotificationUtils",
            ).commitHistoryDownloadedMetric({
              chunkDownloadFinishTimestamp: t,
              historySyncDownloadMetric: s,
              isSuccess: !0,
              startTs: a.historySyncStepStartedTs,
            }),
            r("WAWebSyncBootstrap").markInitialHistorySyncCountDebugStats(
              q,
              F.length,
            ));
          var de = 0,
            me = [],
            pe = [];
          (U.forEach(function (e) {
            var t = e.aeaAccountType,
              n = e.identityKey,
              r = e.nonE2EeType,
              a = e.userId;
            !a.isLid() &&
              o("WAWebApiContact").getCurrentLid(a) == null &&
              a.isRegularUser() &&
              de++;
            try {
              var i = o("WAWebSignalCommonUtils")
                .createSignalAddress(a)
                .toString();
              o("WAWebUserUtils").isMeAccount(a)
                ? o("WAWebHistorySyncNotificationUtils")
                    .checkSelfHistorySyncIdentity(i, n)
                    .catch(function () {
                      o("WALogger")
                        .ERROR(
                          S ||
                            (S = babelHelpers.taggedTemplateLiteralLoose(
                              [
                                "[history sync] handleInitialSyncMsgs: can't save the identity key.",
                              ],
                              [
                                "[history sync] handleInitialSyncMsgs: can\\'t save the identity key.",
                              ],
                            )),
                        )
                        .sendLogs(
                          "failed-self-identity-check-from-history-sync",
                        );
                    })
                : (me.push({ identifier: i, identityKey: n }),
                  t != null &&
                    pe.push({
                      user: a,
                      identityKey: n,
                      accountType: t,
                      nonE2EeType: r,
                    }));
            } catch (e) {
              o("WALogger").ERROR(
                R ||
                  (R = babelHelpers.taggedTemplateLiteralLoose(
                    [
                      "[history sync] handleInitialSyncMsgs: can't save the identity key.",
                    ],
                    [
                      "[history sync] handleInitialSyncMsgs: can\\'t save the identity key.",
                    ],
                  )),
              );
            }
          }),
            yield o("WAWebSignalProtocolStore")
              .getPersistSignalProtocolStore()
              .bulkCreateIdentity(me),
            de > 0 &&
              o("WALogger")
                .ERROR(
                  L ||
                    (L = babelHelpers.taggedTemplateLiteralLoose([
                      "[history sync] handleInitialSyncMsgs: there are Identities with missing LIDs: ",
                      "",
                    ])),
                  de,
                )
                .sendLogs(
                  "handleInitialSyncMsgs: there are Identities with missing LIDs",
                  { sampling: 0.01 },
                ));
          try {
            yield (O || (O = n("Promise"))).all(re);
          } catch (e) {
            o("WALogger")
              .WARN(
                E ||
                  (E = babelHelpers.taggedTemplateLiteralLoose([
                    "[history sync] handleInitialSyncMsgs: saving group metadata failed",
                  ])),
              )
              .tags("history-sync");
          }
          (yield o(
            "WAWebSeedBotProfilesFromHistorySync",
          ).seedBotProfilesFromHistorySync(V),
            yield r("WAWebHandleAddChats")(F),
            yield n("cr:21347") == null
              ? void 0
              : n("cr:21347").applyAeaHistoryChatTypes(H),
            yield o(
              "WAWebLimitSharingProtoUtils",
            ).applyAcp2HistorySyncAdoptions(B),
            yield G(_, ce),
            yield n("cr:21347") == null
              ? void 0
              : n("cr:21347").applyAeaHistoryAccountStates(pe),
            yield o("WAWebApiHistorySyncNotification").updateCurrentlyProcessed(
              a.msgKey,
              a.syncType,
              a.chunkOrder,
            ),
            o("WALogger")
              .LOG(
                k ||
                  (k = babelHelpers.taggedTemplateLiteralLoose([
                    "[history sync][initial bootstrap] data applied, ",
                    "",
                  ])),
                ce,
              )
              .tags("history-sync"),
            o(
              "WAWebHistorySyncNotificationUtils",
            ).commitHistoryDataAppliedMetric({
              historySyncDataAppliedMetric: l,
              startTs: a.historySyncStepStartedTs,
              isSuccess: !0,
              forceFlushWamBuffer: !0,
            }),
            o("WALogger").LOG(
              I ||
                (I = babelHelpers.taggedTemplateLiteralLoose([
                  "[history sync] storing initial sync messages complete, ",
                  "",
                ])),
              o("WAWebHistorySyncLogUtils").getHistorySyncLogDetailsString(
                a,
                q,
                F.length,
              ),
            ),
            o("WALogger").LOG(
              T ||
                (T = babelHelpers.taggedTemplateLiteralLoose([
                  "[history sync] set history initial sync boundary with length ",
                  "",
                ])),
              Object.keys(p).length,
            ),
            yield (O || (O = n("Promise"))).all([
              o(
                "WAWebHistorySyncNotificationUtils",
              ).handleChatThreadLoggingMetadata(d),
              o("WAWebUserPrefsHistorySync").setHistoryInitialSyncBoundary(p),
              d.companionMetaNonce != null
                ? o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.set(
                    "WAWebCompanionMetaNonce",
                    d.companionMetaNonce,
                  )
                : null,
              K(d.nctSalt),
            ]),
            o("WAWebUserPrefsModelStorage").setInitialGroupPhash(A),
            o("WAWebHistorySyncNotificationCommonUtils").reportMissingMapping(
              J,
            ));
        })),
        W.apply(this, arguments)
      );
    }
    function q(e) {
      return U.apply(this, arguments);
    }
    function U() {
      return (
        (U = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.chunkDownloadFinishTimestamp,
            n = e.chunkInfo,
            r = e.historySyncDataAppliedMetric,
            a = e.historySyncDownloadMetric,
            i = e.proto;
          (o("WALogger").LOG(
            w ||
              (w = babelHelpers.taggedTemplateLiteralLoose([
                "[history sync] processing history non blocking data",
              ])),
          ),
            o(
              "WAWebHistorySyncNotificationUtils",
            ).commitHistoryDownloadedMetric({
              chunkDownloadFinishTimestamp: t,
              historySyncDownloadMetric: a,
              isSuccess: !0,
              startTs: n.historySyncStepStartedTs,
            }),
            i.pastParticipants != null &&
              i.pastParticipants.length > 0 &&
              (yield o(
                "WAWebHistorySyncNotificationUtils",
              ).processPastParticipants(i, n)),
            i.callLogRecords != null &&
              i.callLogRecords.length > 0 &&
              (yield V(i, n)),
            i.conversations != null &&
              (yield o("WAWebMemberLabelHistorySync").processMemberLabels(i)),
            o("WAWebHistorySyncStickers").processRecentStickers(i, n),
            o(
              "WAWebHistorySyncNotificationUtils",
            ).commitHistoryDataAppliedMetric({
              historySyncDataAppliedMetric: r,
              startTs: n.historySyncStepStartedTs,
              isSuccess: !0,
            }));
        })),
        U.apply(this, arguments)
      );
    }
    function V(e, t) {
      return H.apply(this, arguments);
    }
    function H() {
      return (
        (H = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          (o("WALogger").LOG(
            A ||
              (A = babelHelpers.taggedTemplateLiteralLoose([
                "[history sync] start processing call log records",
              ])),
          ),
            e.callLogRecords.sort(function (e, t) {
              var n = e.startTime,
                r = t.startTime;
              return (
                o("WATimeUtils").castToUnixTime(parseInt(String(n), 10)) -
                o("WATimeUtils").castToUnixTime(parseInt(String(r), 10))
              );
            }),
            yield (O || (O = n("Promise"))).all(
              e.callLogRecords.map(
                (function () {
                  var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                    function* (e) {
                      yield o(
                        "WAWebVoipActionWriteCallLogSync",
                      ).generateCallLogFromCallSyncRecord({
                        callLogRecord: e,
                        fromHistorySync: !0,
                      });
                    },
                  );
                  return function (t) {
                    return e.apply(this, arguments);
                  };
                })(),
              ),
            ),
            o("WALogger").LOG(
              F ||
                (F = babelHelpers.taggedTemplateLiteralLoose([
                  "[history sync] storing call log records complete, ",
                  "",
                ])),
              o("WAWebHistorySyncLogUtils").getHistorySyncLogDetailsString(
                t,
                e.callLogRecords.length,
              ),
            ));
        })),
        H.apply(this, arguments)
      );
    }
    function G(t, a) {
      if (o("WAWebCallsOnlyGating").isCallsOnlyModeEnabled())
        return (O || (O = n("Promise"))).resolve();
      var i = { add: "last", isHistory: !0 },
        l = Object.keys(t).map(function (e) {
          return o("WAWebBackendApi").frontendSendAndReceive(
            "processMultipleMessages",
            {
              chatId: o("WAWebWidFactory").createWid(e),
              msgObjs: t[e].msgs,
              meta: i,
              processMessagesOrigin: "historyMsgHandlerAction",
              chatMsgsCollection: null,
            },
          );
        });
      return (O || (O = n("Promise")))
        .all(
          [].concat(l, [
            o(
              "WAWebDBProcessInitialHistorySyncMessage",
            ).storeInitialSyncMessages(t, a),
          ]),
        )
        .then(function () {
          var n,
            r = (n = Array.prototype).concat.apply(
              n,
              Object.keys(t).map(function (e) {
                return t[e].msgs.map(function (e) {
                  return e.id.toString();
                });
              }),
            );
          o("WAWebCheckUpdateOrphanReactions")
            .checkUpdateForOrphanReactions(r)
            .catch(function () {
              o("WALogger")
                .ERROR(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "[history sync] Failed update for orphan reactions",
                    ])),
                )
                .sendLogs("failed-update-for-orphan-reactions");
            });
          var a = Object.keys(t).flatMap(function (e) {
            return t[e].msgs.flatMap(function (e) {
              var t;
              return ((t = e.threadIds) != null ? t : []).map(function (e) {
                return e.toString();
              });
            });
          });
          return o("WAWebSyncdOrphan").checkOrphanMutations(
            r,
            Object.keys(t),
            a,
          );
        })
        .then(
          n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            var e = Object.keys(t).flatMap(function (e) {
              return t[e].msgs;
            });
            (yield o(
              "WAWebDBDrainBotOrphansForHistoryMsgs",
            ).drainBotOrphansForHistoryMsgs(e),
              yield o(
                "WAWebDBAssociatedMsgsAttachDetachAPI",
              ).attachDetachedChildrenAfterHistorySync(e));
          }),
        )
        .then(function () {
          var e;
          return (O || (O = n("Promise")))
            .all(
              (e = Array.prototype).concat.apply(
                e,
                Object.keys(t).map(function (e) {
                  return t[e].unifiedAddons;
                }),
              ),
            )
            .then(function (e) {
              var t;
              return o("WAWebAddonProcessMsgs").processHistoryMsgs(
                (t = []).concat.apply(t, e),
              );
            });
        })
        .catch(
          o("WAFilteredCatch").filteredCatch(
            o("WAWebBackendErrors").LogoutDrop,
            r("WAWebNoop"),
          ),
        )
        .catch(function (e) {
          o("WALogger")
            .ERROR(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "[history sync] error occurred",
                ])),
            )
            .catching(r("getErrorSafe")(e))
            .sendLogs(
              "msg_handler for MD: error storing/processing multiple messages",
            );
        });
    }
    function z(e, t) {
      if (!o("WAWebLidMigrationUtils").shouldHaveAccountLid(e))
        return { result: "not-needed" };
      if (t.accountLid != null) {
        var n = o("WAWebWidFactory").createUserLidOrThrow(t.accountLid);
        return { result: "extracted", accountLid: n };
      }
      return e.isLid()
        ? { result: "extracted", accountLid: e }
        : (o("WALogger")
            .ERROR(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "[history sync] handleInitialSyncMsgs: Migrated account not sending accountLid for a PN chat in history sync",
                ])),
            )
            .sendLogs("missing-account-lid-in-history-sync"),
          { result: "skip-chat" });
    }
    function j(e) {
      var t = e.lid,
        n = e.username,
        a = e.countryCode;
      if (!(t == null || (n == null && a == null))) {
        var i = o("WAWebWidFactory").createUserWidOrThrow(t),
          l;
        if (
          (a != null &&
            ((l = o("WAWebAsISOCountryCode").asISOCountryCode(a)),
            !l &&
              o("WAWebCurrentUser").isEmployee() &&
              o("WALogger")
                .WARN(
                  c ||
                    (c = babelHelpers.taggedTemplateLiteralLoose([
                      "[history sync] invalid country code retrieved",
                    ])),
                )
                .sendLogs("invalid-country-code-for-username-history-sync", {
                  sampling: 0.01,
                })),
          n != null)
        )
          try {
            var s = {
              userId: i,
              username: o("WAWebUsernameTypes").asUsername(n),
            };
            return (l != null && (s.usernameCountryCode = l), s);
          } catch (e) {
            return (
              o("WALogger")
                .ERROR(
                  d ||
                    (d = babelHelpers.taggedTemplateLiteralLoose([
                      "[history sync] handleInitialSyncMsgs: invalid username received.",
                    ])),
                )
                .catching(r("getErrorSafe")(e))
                .sendLogs("invalid-username-history-sync"),
              l != null ? { userId: i, usernameCountryCode: l } : null
            );
          }
        else if (l != null) return { userId: i, usernameCountryCode: l };
      }
    }
    function K(e) {
      return e != null
        ? (o("WALogger").LOG(
            m ||
              (m = babelHelpers.taggedTemplateLiteralLoose([
                "[history sync] Stored NCT salt, size=",
                " bytes",
              ])),
            e.byteLength,
          ),
          o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.set(
            "WAWebNctSalt",
            o("WABase64").encodeB64(e),
          ))
        : null;
    }
    function Q(e) {
      return e === !0
        ? o("WAWebProtobufsE2E.pb")
            .Message$CloudAPIThreadControlNotification$CloudAPIThreadControl
            .CONTROL_TAKEN
        : e === !1 || e === void 0
          ? o("WAWebProtobufsE2E.pb")
              .Message$CloudAPIThreadControlNotification$CloudAPIThreadControl
              .UNKNOWN
          : (function () {
              throw Error(
                "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                  e,
              );
            })();
    }
    function X(e) {
      if (e != null) {
        var t = o("WAWebUsernameTypes").LidOriginType.cast(e);
        return t == null
          ? (o("WALogger")
              .ERROR(
                p ||
                  (p = babelHelpers.taggedTemplateLiteralLoose([
                    "[history sync] handleInitialSyncMsgs: invalid lidOriginType received.",
                  ])),
              )
              .sendLogs(
                "handleInitialSyncMsgs: invalid lidOriginType received: " + e,
              ),
            o("WAWebUsernameTypes").LidOriginType.GENERAL)
          : t === o("WAWebUsernameTypes").LidOriginType.PNH_CTWA &&
              o(
                "WAWebUserPrefsPhoneNumberHidingThreadPromotionMigration",
              ).hasPhoneNumberHidingThreadPromotionMigrationStarted()
            ? (o("WALogger")
                .WARN(
                  _ ||
                    (_ = babelHelpers.taggedTemplateLiteralLoose([
                      "[history sync] handleInitialSyncMsgs: overriding PNH_CTWA to GENERAL post-migration",
                    ])),
                )
                .sendLogs(
                  "handleInitialSyncMsgs: overriding PNH_CTWA lidOriginType to GENERAL post-migration",
                ),
              o("WAWebUsernameTypes").LidOriginType.GENERAL)
            : t;
      }
      return o("WAWebUsernameTypes").LidOriginType.GENERAL;
    }
    ((l.handleInitialSyncMsgs = B),
      (l.handleNonBlockingData = q),
      (l.getUsernameUpdate = j),
      (l.storeNctSaltFromHistorySync = K),
      (l.getCapiThreadControlForHistorySync = Q),
      (l.determineLidOriginTypeForHistorySync = X));
  },
  98,
);
