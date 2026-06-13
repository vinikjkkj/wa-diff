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
    "WAWebBizAiAgentGating",
    "WAWebBizCoexGatingUtils",
    "WAWebBizCoexUtils",
    "WAWebBotTypes",
    "WAWebCTWAGatingUtils",
    "WAWebChatConstants",
    "WAWebCheckUpdateOrphanReactions",
    "WAWebCryptoCurve25519",
    "WAWebCurrentUser",
    "WAWebDBCreateLidPnMappings",
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
    "WAWebMessageAssociationGatingUtils",
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
    "WAWebSignalCommonUtils",
    "WAWebSignalProtocolStore",
    "WAWebSyncBootstrap",
    "WAWebSyncdOrphan",
    "WAWebUserPrefsHistorySync",
    "WAWebUserPrefsIndexedDBStorage",
    "WAWebUserPrefsMeUser",
    "WAWebUserPrefsModelStorage",
    "WAWebUserPrefsMultiDevice",
    "WAWebUserPrefsPhoneNumberHidingThreadPromotionMigration",
    "WAWebUsernameTypes",
    "WAWebVoipActionWriteCallLogSync",
    "WAWebWid",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
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
      w;
    function A(e, t, n, r, o, a, i, l) {
      return F.apply(this, arguments);
    }
    function F() {
      return (
        (F = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, a, i, l, s, u, c) {
            o("WALogger").LOG(
              f ||
                (f = babelHelpers.taggedTemplateLiteralLoose([
                  "[history sync] starts hanlding initial sync msgs",
                ])),
            );
            var d = [],
              m = {},
              p = {},
              _ = new Map(),
              P = {},
              N = [],
              M = new Set(),
              A = 0,
              F = [],
              O = o(
                "WAWebHistorySyncNotificationCommonUtils",
              ).getLidMappingAsStringSet(c);
            o("WAWebCurrentUser").isEmployee() &&
              o("WALogger")
                .LOG(
                  g ||
                    (g = babelHelpers.taggedTemplateLiteralLoose([
                      "first lid mappings for initial sync. count: ",
                      ". ",
                      "...",
                    ])),
                  O == null ? void 0 : O.size,
                  o(
                    "WAWebHistorySyncNotificationCommonUtils",
                  ).getLidsForLogging(O),
                )
                .verbose();
            var B = new Map(),
              W = [],
              q = 0,
              j = 0,
              K = 0,
              Q =
                o(
                  "WAWebBizCoexGatingUtils",
                ).smbHostedLazySystemMsgInsertInHistorySyncEnabled() &&
                (yield o(
                  "WAWebUserPrefsMultiDevice",
                ).getIsHostedMeAccount()) === !0,
              X = function* (n) {
                var e,
                  i,
                  l,
                  s,
                  u,
                  f,
                  g = n.id;
                o("WAWebCurrentUser").isEmployee() &&
                  o("WALogger").LOG(
                    k ||
                      (k = babelHelpers.taggedTemplateLiteralLoose([
                        "[history sync] processing conversation ",
                        " with ",
                        " messages",
                      ])),
                    g,
                    n.messages.length,
                  );
                var h = o("WAWebWidFactory").createWid(g);
                if (h.isNewsletter()) return 0;
                var y = V(h, n);
                if (y.result === "skip-chat") return 0;
                if (y.result === "extracted") {
                  var C = y.accountLid;
                  if (_.has(C))
                    return (
                      o("WALogger")
                        .ERROR(
                          I ||
                            (I = babelHelpers.taggedTemplateLiteralLoose([
                              "[history sync] handleInitialSyncMsgs: Found duplicated accountLid during initial sync",
                            ])),
                        )
                        .sendLogs("duplicated-account-lid-in-history-sync"),
                      0
                    );
                  _.set(C, h);
                } else y.result;
                var b = h,
                  v,
                  S =
                    o(
                      "WAWebHistorySyncLidChatGating",
                    ).isForcedHistoryLidChat() &&
                    h.isRegularUserPn() &&
                    y.accountLid != null;
                if (
                  (S &&
                    y.accountLid != null &&
                    (q++,
                    W.length < 3 &&
                      W.push(
                        h.toLogString() + " -> " + y.accountLid.toLogString(),
                      ),
                    (b = y.accountLid),
                    (v = h.toString())),
                  h.isUser())
                ) {
                  if (h.isLid()) {
                    var R = n.pnJid;
                    R != null &&
                      d.push({
                        lid: h,
                        pn: o("WAWebWidFactory").createUserWidOrThrow(R),
                      });
                    var L = n.displayName,
                      E = n.shareOwnPn;
                    if (L != null || E != null) {
                      var w = {};
                      (L != null && (w.displayNameLID = L),
                        E != null && (w.shareOwnPn = E),
                        a.push({ lid: h, data: w }));
                    }
                  } else if (n.lidJid != null) {
                    var U = o("WAWebWidFactory").createUserLidOrThrow(n.lidJid);
                    d.push({ lid: U, pn: h });
                  }
                }
                var H = [];
                A += n.messages.length;
                var G = [],
                  X = new Set(),
                  Y = [];
                (n.messages.length === 0 && (m[g] = -1),
                  r("isStringNullOrEmpty")(n.pHash) || (P[g] = n.pHash));
                var J,
                  Z = [],
                  ee = 0,
                  te = 0;
                (n.messages.forEach(function (e, a) {
                  var i, l, s, u;
                  if (a === n.messages.length - 1) {
                    var d = o("WALongInt").maybeNumberOrThrowIfTooLarge(
                      e.msgOrderId,
                    );
                    d != null && (m[g] = d);
                  }
                  var p =
                    (e == null ||
                    (i = e.message) == null ||
                    (i = i.message) == null ||
                    (i = i.protocolMessage) == null
                      ? void 0
                      : i.type) ===
                    o("WAWebProtobufsE2E.pb").Message$ProtocolMessage$Type
                      .REQUEST_WELCOME_MESSAGE;
                  if (p) {
                    ee++;
                    return;
                  }
                  var _ =
                    (e == null ||
                    (l = e.message) == null ||
                    (l = l.message) == null ||
                    (l = l.protocolMessage) == null
                      ? void 0
                      : l.type) ===
                    o("WAWebProtobufsE2E.pb").Message$ProtocolMessage$Type
                      .BOT_MEMU_ONBOARDING_MESSAGE;
                  if (_) {
                    te++;
                    return;
                  }
                  if (
                    o("WAWebMobilePlatforms").isSMB() &&
                    o(
                      "WAWebBizCoexGatingUtils",
                    ).smbHostedLazySystemMsgInsertInHistorySyncEnabled() &&
                    a === 0 &&
                    b.isUser() &&
                    n.systemMessageToInsert != null
                  )
                    switch (n.systemMessageToInsert) {
                      case o("WAWebProtobufsHistorySync.pb")
                        .PrivacySystemMessage.E2EE_MSG: {
                        if (Q) break;
                        var f = o(
                          "WAWebAdvHostedAccountTypeSystemMsg",
                        ).genAdvAccountTypeChangeNotificationMsg(
                          b,
                          o("WAWebUserPrefsMeUser").getMeUser(),
                          o("WAWebProtobufsAdv.pb").ADVEncryptionType.E2EE,
                        );
                        (G.push(f),
                          o(
                            "WAWebBizCoexUtils",
                          ).sendWamCoexPrivacySysMsgHistorySyncInsert(f));
                        break;
                      }
                      case o("WAWebProtobufsHistorySync.pb")
                        .PrivacySystemMessage.NE2EE_SELF: {
                        if (!Q) break;
                        var y = o(
                          "WAWebAdvHostedAccountTypeSystemMsg",
                        ).genAdvAccountTypeSelfTransitionToCoexNotificationMsg(
                          b,
                          o("WAWebUserPrefsMeUser").getMeUser(),
                        );
                        (G.push(y),
                          o(
                            "WAWebBizCoexUtils",
                          ).sendWamCoexPrivacySysMsgHistorySyncInsert(y));
                        break;
                      }
                      case o("WAWebProtobufsHistorySync.pb")
                        .PrivacySystemMessage.NE2EE_OTHER: {
                        var C = o(
                          "WAWebAdvHostedAccountTypeSystemMsg",
                        ).genAdvAccountTypeChangeNotificationMsg(
                          b,
                          o("WAWebUserPrefsMeUser").getMeUser(),
                          o("WAWebProtobufsAdv.pb").ADVEncryptionType.HOSTED,
                        );
                        (G.push(C),
                          o(
                            "WAWebBizCoexUtils",
                          ).sendWamCoexPrivacySysMsgHistorySyncInsert(C));
                      }
                    }
                  var v = o(
                      "WAWebHistorySyncNotificationCommonUtils",
                    ).parseWebMsgInfoAndReturnNullOnFailure({
                      protobufChatId: h,
                      message: e.message,
                      chunkInfo: t,
                      allLidMapping: O,
                      totalMissingMapping: B,
                      historyLidPnMappings: c,
                      dbChatId: b,
                    }),
                    S =
                      ((s = e.message) == null ||
                      (s = s.message) == null ||
                      (s = s.commentMessage) == null
                        ? void 0
                        : s.targetMessageKey) == null,
                    R = (v == null ? void 0 : v.associationType) != null;
                  if (S) {
                    var L;
                    (v != null &&
                      X.has(v.id.toString()) &&
                      o(
                        "WAWebMessageAssociationGatingUtils",
                      ).isMessageAssociationInfraEnabled() &&
                      X.delete(v == null ? void 0 : v.id.toString()),
                      (v != null &&
                        v.type === o("WAWebMsgType").MSG_TYPE.INTERACTIVE &&
                        v.ctwaContext != null) ||
                        G.push(v));
                    var E =
                        (L = e.message) == null ||
                        (L = L.message) == null ||
                        (L = L.extendedTextMessage) == null ||
                        (L = L.contextInfo) == null
                          ? void 0
                          : L.externalAdReply,
                      k = v != null ? v : {},
                      I = k.from,
                      T = k.id,
                      D = k.to;
                    if (
                      E != null &&
                      (T == null ? void 0 : T.fromMe) != null &&
                      I != null &&
                      D != null &&
                      o("WAWebCTWAGatingUtils").shouldGenerateAGMMsgs(E)
                    ) {
                      var x,
                        $ = new (r("WAWebMsgKey"))({
                          fromMe: !T.fromMe,
                          remote: b,
                          id: r("WAWebMsgKey").newId_DEPRECATED(),
                        }),
                        P = o(
                          "WAWebMsgAGMProcessing",
                        ).genHistoryAutomatedGreetingMsg({
                          msgKey: $,
                          ctwaContext: E,
                          to: I,
                          from: D,
                          msgTimestamp:
                            (x = e.message) == null
                              ? void 0
                              : x.messageTimestamp,
                        });
                      G.push(P);
                    }
                  }
                  if (
                    v != null &&
                    R &&
                    o(
                      "WAWebMessageAssociationGatingUtils",
                    ).isMessageAssociationInfraEnabled()
                  ) {
                    var N = v.parentMsgKey.toString();
                    (X.add(N), Y.push(v));
                  }
                  ((H = H.concat(
                    o("WAWebAddonProcessMsgsUtils").parseHistorySyncMsg({
                      webMsgInfo: e.message,
                      parsedWebMsgInfo: v,
                      isFromCag: (u = n.isDefaultSubgroup) != null ? u : !1,
                    }),
                  )),
                    (v == null ? void 0 : v.subtype) ===
                      "biz_bot_1p_disclosure" &&
                      (J = o("WAWebBotTypes").BizBotType.BIZ_1P),
                    (v == null ? void 0 : v.subtype) ===
                      "biz_bot_3p_disclosure" &&
                      (J = o("WAWebBotTypes").BizBotType.BIZ_3P),
                    (Z = o(
                      "WAWebMmSignalSharingExpirationWindowUtils",
                    ).getUpdatedMmSignalSharingExpirationWindowFromHistorySync(
                      e.message,
                      Z,
                    )));
                }),
                  ee > 0 &&
                    o("WALogger").LOG(
                      T ||
                        (T = babelHelpers.taggedTemplateLiteralLoose([
                          "[history sync] Dropped ",
                          " request welcome messages",
                        ])),
                      ee,
                    ),
                  te > 0 &&
                    o("WALogger").LOG(
                      D ||
                        (D = babelHelpers.taggedTemplateLiteralLoose([
                          "[history sync] Dropped ",
                          " memu onboarding messages",
                        ])),
                      te,
                    ));
                var ne;
                if (
                  X.size > 0 &&
                  o(
                    "WAWebMessageAssociationGatingUtils",
                  ).isMessageAssociationInfraEnabled()
                ) {
                  var re = o(
                    "WAWebProcessMessageAssociationMessages",
                  ).classifyAssociatedMsgsFromHistorySyncUsingMissingParentsCache(
                    Y,
                    X,
                  );
                  re != null &&
                    re.validAssociatedMsgs &&
                    (ne = o("WAWebApiFilterAndReplaceMessages").validateMsgFn(
                      re == null ? void 0 : re.validAssociatedMsgs,
                    ));
                }
                ((G = o(
                  "WAWebApiFilterAndReplaceMessages",
                ).filterAndReplaceMessagesInitialHistorySync(G, ne)),
                  (G = G.reverse()));
                var oe = n.contactPrimaryIdentityKey;
                if (oe && r("WAWebWid").isUser(b)) {
                  var ae = o("WAWebSignalCommonUtils").bufferToStr(
                    o("WAWebCryptoCurve25519").toSignalCurvePubKey(oe),
                  );
                  F.push({
                    userId: o("WAWebWidFactory").asUserWidOrThrow(b),
                    identityKey: ae,
                  });
                }
                var ie, le, se;
                if (
                  ((e = n.disappearingMode) == null ? void 0 : e.initiator) !=
                  null
                )
                  switch (n.disappearingMode.initiator) {
                    case o("WAWebProtobufsE2E.pb").DisappearingMode$Initiator
                      .CHANGED_IN_CHAT:
                      ((ie = o("WAWebEphemeralityTypes")
                        .DisappearingModeInitiator.ChangedInChat),
                        (le = o("WAWebEphemeralityTypes")
                          .DisappearingModeTrigger.ChatSettings));
                      break;
                    case o("WAWebProtobufsE2E.pb").DisappearingMode$Initiator
                      .INITIATED_BY_ME:
                      ((ie = o("WAWebEphemeralityTypes")
                        .DisappearingModeInitiator.InitiatedByMe),
                        (le = o("WAWebEphemeralityTypes")
                          .DisappearingModeTrigger.AccountSettings),
                        (se = !0));
                      break;
                    case o("WAWebProtobufsE2E.pb").DisappearingMode$Initiator
                      .INITIATED_BY_OTHER:
                    case o("WAWebProtobufsE2E.pb").DisappearingMode$Initiator
                      .BIZ_UPGRADE_FB_HOSTING:
                      ((ie = o("WAWebEphemeralityTypes")
                        .DisappearingModeInitiator.InitiatedByOther),
                        (le = o("WAWebEphemeralityTypes")
                          .DisappearingModeTrigger.AccountSettings),
                        (se = !1));
                      break;
                  }
                if (
                  ((i = n.disappearingMode) == null ? void 0 : i.trigger) !=
                  null
                ) {
                  var ue = o(
                    "WAWebEphemeralityUtils",
                  ).getDisappearingModeTriggerFromProtobuf(
                    n.disappearingMode.trigger,
                  );
                  ue != null && (le = ue);
                }
                ((l = n.disappearingMode) == null ? void 0 : l.initiatedByMe) !=
                  null && (se = n.disappearingMode.initiatedByMe);
                var ce = n.tcToken != null && n.tcTokenTimestamp != null;
                if (o("WAWebCurrentUser").isEmployee()) {
                  var de;
                  o("WALogger").LOG(
                    x ||
                      (x = babelHelpers.taggedTemplateLiteralLoose([
                        "handleInitialSyncMsgs: incoming chat info: protobufChatId=",
                        ", dbChatId=",
                        ", ",
                        ", ",
                        "",
                      ])),
                    h,
                    b,
                    (de = y.accountLid) != null ? de : "n/a",
                    b.isRegularUser()
                      ? o("WAWebApiContact").getAlternateUserWid(
                          o("WAWebWidFactory").asUserWidOrThrow(b),
                        )
                      : "n/a",
                  );
                }
                var me = y.accountLid,
                  pe = {
                    t: o("WALongInt").maybeNumberOrThrowIfTooLarge(
                      (s = n.conversationTimestamp) != null
                        ? s
                        : n.lastMsgTimestamp,
                    ),
                    accountLid: me,
                    id: b,
                    unreadCount: n.unreadCount,
                    ephemeralDuration: n.ephemeralExpiration,
                    ephemeralSettingTimestamp: n.ephemeralSettingTimestamp,
                    disappearingModeInitiator: ie,
                    disappearingModeTrigger: le,
                    disappearingModeInitiatedByMe: se,
                    endOfHistoryTransferType:
                      (u = n.endOfHistoryTransferType) != null
                        ? u
                        : o("WAWebChatConstants")
                            .ConversationEndOfHistoryTransferModelPropType
                            .INCOMPLETE,
                    name: n.name,
                    notSpam: n.notSpam,
                    isSenderNewAccount: n.isSenderNewAccount,
                    isSenderSuspicious: n.isSenderSuspicious,
                    pendingInitialLoading: !1,
                    unreadMentionCount: n.unreadMentionCount,
                    tcToken: ce ? n.tcToken : null,
                    tcTokenTimestamp: ce ? n.tcTokenTimestamp : null,
                    tcTokenSenderTimestamp: n.tcTokenSenderTimestamp,
                    bizBotSystemMsgType: J,
                    isLocked: n.locked,
                    limitSharing: o(
                      "WAWebLimitSharingProtoUtils",
                    ).getLimitSharingFromProtocolHistorySyncConversation(n),
                    capiThreadControl: o(
                      "WAWebBizAiAgentGating",
                    ).isAiAgentThreadStatusHistorySyncEnabled()
                      ? n.maibaAiThreadEnabled === !0
                        ? o("WAWebProtobufsE2E.pb")
                            .Message$CloudAPIThreadControlNotification$CloudAPIThreadControl
                            .CONTROL_TAKEN
                        : n.maibaAiThreadEnabled === !1
                          ? o("WAWebProtobufsE2E.pb")
                              .Message$CloudAPIThreadControlNotification$CloudAPIThreadControl
                              .CONTROL_PASSED
                          : n.maibaAiThreadEnabled === void 0
                            ? o("WAWebProtobufsE2E.pb")
                                .Message$CloudAPIThreadControlNotification$CloudAPIThreadControl
                                .UNKNOWN
                            : (function () {
                                throw Error(
                                  "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                                    n.maibaAiThreadEnabled,
                                );
                              })()
                      : o("WAWebProtobufsE2E.pb")
                          .Message$CloudAPIThreadControlNotification$CloudAPIThreadControl
                          .UNKNOWN,
                    historyChatId: v,
                  };
                if (
                  (b.isLid() && (pe.lidOriginType = z(n.lidOriginType)),
                  n.archived != null && (pe.archive = n.archived),
                  n.authAgentParentCompanyName != null &&
                    o("WAWebBizCoexGatingUtils").authorizedAgentsEnabled())
                ) {
                  var _e;
                  ((pe.parentCompanyName = n.authAgentParentCompanyName),
                    (pe.obaPhoneNumber =
                      (_e = n.authAgentObaPhoneNumber) != null ? _e : ""));
                }
                (f = Z) != null &&
                  f.length &&
                  (pe.mmSignalSharingExpirationWindow = o(
                    "WAWebMmSignalSharingExpirationWindowUtils",
                  ).getSortedMmSignalSharingExpirationWindowFromHistorySync(Z));
                try {
                  o(
                    "WAWebHistorySyncNotificationUtils",
                  ).saveGroupMetadataForLeftGroup(n, pe.id);
                } catch (e) {
                  o("WALogger")
                    .WARN(
                      $ ||
                        ($ = babelHelpers.taggedTemplateLiteralLoose([
                          "[history sync] history_sync_notification_handler: saveGroupMetadataForLeftGroup failed",
                        ])),
                    )
                    .tags("history-sync");
                }
                var fe = b.toString(),
                  ge = M.has(g);
                ge ? j++ : M.add(g);
                var he = Object.prototype.hasOwnProperty.call(p, fe);
                (he ? K++ : ge || N.push(pe),
                  (p[fe] = { chatInfo: pe, msgs: G, unifiedAddons: H }));
              },
              Y;
            for (var J of e.conversations) Y = yield* X(J);
            (q > 0 &&
              o("WALogger").LOG(
                h ||
                  (h = babelHelpers.taggedTemplateLiteralLoose([
                    "[history sync] overriding ",
                    " chat ids => ",
                    "",
                  ])),
                q,
                W,
              ),
              j > 0 &&
                o("WALogger").LOG(
                  y ||
                    (y = babelHelpers.taggedTemplateLiteralLoose([
                      "[history sync] found ",
                      " duplicated protobuf conversation ids during initial sync",
                    ])),
                  j,
                ),
              K > 0 &&
                o("WALogger").LOG(
                  C ||
                    (C = babelHelpers.taggedTemplateLiteralLoose([
                      "[history sync] found ",
                      " duplicated db conversation ids during initial sync",
                    ])),
                  K,
                ));
            for (var Z of e.accounts) {
              var ee = H(Z);
              ee && u.push(ee);
            }
            (d.length > 0 &&
              (o("WALogger").LOG(
                b ||
                  (b = babelHelpers.taggedTemplateLiteralLoose([
                    "[history sync] saving ",
                    " LIDxPN mappings obtained from conversations",
                  ])),
                d.length,
              ),
              yield o("WAWebDBCreateLidPnMappings").createLidPnMappings({
                mappings: d,
                flushImmediately: !0,
                identityChangeHandlingEnabled: !1,
                learningSource: "other",
              })),
              (i.mdBootstrapMessagesCount = A),
              (i.mdBootstrapChatsCount = e.conversations.length),
              o(
                "WAWebHistorySyncNotificationUtils",
              ).commitHistoryDownloadedMetric({
                chunkDownloadFinishTimestamp: s,
                historySyncDownloadMetric: i,
                isSuccess: !0,
                startTs: t.historySyncStepStartedTs,
              }),
              r("WAWebSyncBootstrap").markInitialHistorySyncCountDebugStats(
                A,
                N.length,
              ));
            var te = 0,
              ne = [];
            (F.forEach(function (e) {
              var t = e.identityKey,
                n = e.userId;
              !n.isLid() &&
                o("WAWebApiContact").getCurrentLid(n) == null &&
                n.isRegularUser() &&
                te++;
              try {
                var r = o("WAWebSignalCommonUtils")
                  .createSignalAddress(n)
                  .toString();
                n.equals(o("WAWebUserPrefsMeUser").getMeUser())
                  ? o("WAWebHistorySyncNotificationUtils")
                      .checkSelfHistorySyncIdentity(r, t)
                      .catch(function () {
                        o("WALogger")
                          .ERROR(
                            v ||
                              (v = babelHelpers.taggedTemplateLiteralLoose(
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
                  : ne.push({ identifier: r, identityKey: t });
              } catch (e) {
                o("WALogger").ERROR(
                  S ||
                    (S = babelHelpers.taggedTemplateLiteralLoose(
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
                .bulkCreateIdentity(ne),
              te > 0 &&
                o("WALogger")
                  .ERROR(
                    R ||
                      (R = babelHelpers.taggedTemplateLiteralLoose([
                        "[history sync] handleInitialSyncMsgs: there are Identities with missing LIDs: ",
                        "",
                      ])),
                    te,
                  )
                  .sendLogs(
                    "handleInitialSyncMsgs: there are Identities with missing LIDs",
                    { sampling: 0.01 },
                  ),
              yield r("WAWebHandleAddChats")(N),
              yield U(p),
              yield o(
                "WAWebApiHistorySyncNotification",
              ).updateCurrentlyProcessed(t.msgKey, t.syncType, t.chunkOrder),
              o(
                "WAWebHistorySyncNotificationUtils",
              ).commitHistoryDataAppliedMetric({
                historySyncDataAppliedMetric: l,
                startTs: t.historySyncStepStartedTs,
                isSuccess: !0,
                forceFlushWamBuffer: !0,
              }),
              o("WALogger").LOG(
                L ||
                  (L = babelHelpers.taggedTemplateLiteralLoose([
                    "[history sync] storing initial sync messages complete, ",
                    "",
                  ])),
                o("WAWebHistorySyncLogUtils").getHistorySyncLogDetailsString(
                  t,
                  A,
                  N.length,
                ),
              ),
              o("WALogger").LOG(
                E ||
                  (E = babelHelpers.taggedTemplateLiteralLoose([
                    "[history sync] set history initial sync boundary with length ",
                    "",
                  ])),
                Object.keys(m).length,
              ),
              yield (w || (w = n("Promise"))).all([
                o(
                  "WAWebHistorySyncNotificationUtils",
                ).handleChatThreadLoggingMetadata(e),
                o("WAWebUserPrefsHistorySync").setHistoryInitialSyncBoundary(m),
                e.companionMetaNonce != null
                  ? o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.set(
                      "WAWebCompanionMetaNonce",
                      e.companionMetaNonce,
                    )
                  : null,
                G(e.nctSalt),
              ]),
              o("WAWebUserPrefsModelStorage").setInitialGroupPhash(P),
              o("WAWebHistorySyncNotificationCommonUtils").reportMissingMapping(
                B,
              ));
          },
        )),
        F.apply(this, arguments)
      );
    }
    function O(e, t, n, r, o) {
      return B.apply(this, arguments);
    }
    function B() {
      return (
        (B = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, r, a) {
            (o("WALogger").LOG(
              P ||
                (P = babelHelpers.taggedTemplateLiteralLoose([
                  "[history sync] processing history non blocking data",
                ])),
            ),
              o(
                "WAWebHistorySyncNotificationUtils",
              ).commitHistoryDownloadedMetric({
                chunkDownloadFinishTimestamp: a,
                historySyncDownloadMetric: n,
                isSuccess: !0,
                startTs: t.historySyncStepStartedTs,
              }),
              e.pastParticipants != null &&
                e.pastParticipants.length > 0 &&
                (yield o(
                  "WAWebHistorySyncNotificationUtils",
                ).processPastParticipants(e, t)),
              e.callLogRecords != null &&
                e.callLogRecords.length > 0 &&
                (yield W(e, t)),
              e.conversations != null &&
                (yield o("WAWebMemberLabelHistorySync").processMemberLabels(e)),
              o("WAWebHistorySyncStickers").processRecentStickers(e, t),
              o(
                "WAWebHistorySyncNotificationUtils",
              ).commitHistoryDataAppliedMetric({
                historySyncDataAppliedMetric: r,
                startTs: t.historySyncStepStartedTs,
                isSuccess: !0,
              }));
          },
        )),
        B.apply(this, arguments)
      );
    }
    function W(e, t) {
      return q.apply(this, arguments);
    }
    function q() {
      return (
        (q = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          (o("WALogger").LOG(
            N ||
              (N = babelHelpers.taggedTemplateLiteralLoose([
                "[history sync] start processing call log records",
              ])),
          ),
            e.callLogRecords.sort(function (e, t) {
              var n = e.startTime,
                r = t.startTime;
              return (
                o("WATimeUtils").castToUnixTime(parseInt(n, 10)) -
                o("WATimeUtils").castToUnixTime(parseInt(r, 10))
              );
            }),
            yield (w || (w = n("Promise"))).all(
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
              M ||
                (M = babelHelpers.taggedTemplateLiteralLoose([
                  "[history sync] storing call log records complete, ",
                  "",
                ])),
              o("WAWebHistorySyncLogUtils").getHistorySyncLogDetailsString(
                t,
                e.callLogRecords.length,
              ),
            ));
        })),
        q.apply(this, arguments)
      );
    }
    function U(t) {
      var a = { add: "last", isHistory: !0 },
        i = Object.keys(t).map(function (e) {
          return o("WAWebBackendApi").frontendSendAndReceive(
            "processMultipleMessages",
            {
              chatId: o("WAWebWidFactory").createWid(e),
              msgObjs: t[e].msgs,
              meta: a,
              processMessagesOrigin: "historyMsgHandlerAction",
              chatMsgsCollection: null,
            },
          );
        });
      return (w || (w = n("Promise")))
        .all(
          [].concat(i, [
            o(
              "WAWebDBProcessInitialHistorySyncMessage",
            ).storeInitialSyncMessages(t),
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
        .then(function () {
          var e;
          return (w || (w = n("Promise")))
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
    function V(e, t) {
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
    function H(e) {
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
    function G(e) {
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
    function z(e) {
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
    ((l.handleInitialSyncMsgs = A),
      (l.handleNonBlockingData = O),
      (l.getUsernameUpdate = H),
      (l.storeNctSaltFromHistorySync = G),
      (l.determineLidOriginTypeForHistorySync = z));
  },
  98,
);
