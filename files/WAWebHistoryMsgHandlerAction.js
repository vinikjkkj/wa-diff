__d(
  "WAWebHistoryMsgHandlerAction",
  [
    "Promise",
    "WABase64",
    "WAFilteredCatch",
    "WALogger",
    "WALongInt",
    "WATimeUtils",
    "WAWebABProps",
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
    "WAWebBizGatingUtils",
    "WAWebBotTypes",
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
    "WAWebUsernameTypes",
    "WAWebVoipActionWriteCallLogSync",
    "WAWebWid",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
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
      N;
    function M(e, t, n, r, o, a, i, l) {
      return w.apply(this, arguments);
    }
    function w() {
      return (
        (w = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, a, i, l, s, u, c) {
            o("WALogger").LOG(
              m ||
                (m = babelHelpers.taggedTemplateLiteralLoose([
                  "[history sync] starts hanlding initial sync msgs",
                ])),
            );
            var d = [],
              x = {},
              $ = {},
              P = new Map(),
              M = {},
              w = [],
              A = new Set(),
              F = 0,
              O = [],
              B = o(
                "WAWebHistorySyncNotificationCommonUtils",
              ).getLidMappingAsStringSet(c);
            o("WAWebCurrentUser").isEmployee() &&
              o("WALogger")
                .LOG(
                  p ||
                    (p = babelHelpers.taggedTemplateLiteralLoose([
                      "first lid mappings for initial sync. count: ",
                      ". ",
                      "...",
                    ])),
                  B == null ? void 0 : B.size,
                  o(
                    "WAWebHistorySyncNotificationCommonUtils",
                  ).getLidsForLogging(B),
                )
                .verbose();
            var H = new Map(),
              G = [],
              z = 0,
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
                  u = n.id;
                o("WAWebCurrentUser").isEmployee() &&
                  o("WALogger").LOG(
                    R ||
                      (R = babelHelpers.taggedTemplateLiteralLoose([
                        "[history sync] processing conversation ",
                        " with ",
                        " messages",
                      ])),
                    u,
                    n.messages.length,
                  );
                var m = o("WAWebWidFactory").createWid(u);
                if (m.isNewsletter()) return 0;
                var p = q(m, n);
                if (p.result === "skip-chat") return 0;
                if (p.result === "extracted") {
                  var _ = p.accountLid;
                  if (P.has(_))
                    return (
                      o("WALogger")
                        .ERROR(
                          L ||
                            (L = babelHelpers.taggedTemplateLiteralLoose([
                              "[history sync] handleInitialSyncMsgs: Found duplicated accountLid during initial sync",
                            ])),
                        )
                        .sendLogs("duplicated-account-lid-in-history-sync"),
                      0
                    );
                  P.set(_, m);
                } else p.result;
                var f = m,
                  g,
                  h =
                    o(
                      "WAWebHistorySyncLidChatGating",
                    ).isForcedHistoryLidChat() &&
                    m.isRegularUserPn() &&
                    p.accountLid != null;
                if (
                  (h &&
                    p.accountLid != null &&
                    (z++,
                    G.length < 3 &&
                      G.push(
                        m.toLogString() + " -> " + p.accountLid.toLogString(),
                      ),
                    (f = p.accountLid),
                    (g = m.toString())),
                  m.isUser())
                ) {
                  if (m.isLid()) {
                    var y = n.pnJid;
                    y != null &&
                      d.push({
                        lid: m,
                        pn: o("WAWebWidFactory").createUserWidOrThrow(y),
                      });
                    var C = n.displayName,
                      b = n.shareOwnPn;
                    if (C != null || b != null) {
                      var v = {};
                      (C != null && (v.displayNameLID = C),
                        b != null && (v.shareOwnPn = b),
                        a.push({ lid: m, data: v }));
                    }
                  } else if (n.lidJid != null) {
                    var S = o("WAWebWidFactory").createUserLidOrThrow(n.lidJid);
                    d.push({ lid: S, pn: m });
                  }
                }
                var N = [];
                F += n.messages.length;
                var W = [],
                  U = new Set(),
                  V = [];
                (n.messages.length === 0 && (x[u] = -1),
                  r("isStringNullOrEmpty")(n.pHash) || (M[u] = n.pHash));
                var X,
                  Y = [],
                  J = 0,
                  Z = 0;
                (n.messages.forEach(function (e, a) {
                  var i, l, s, d;
                  if (a === n.messages.length - 1) {
                    var p = o("WALongInt").maybeNumberOrThrowIfTooLarge(
                      e.msgOrderId,
                    );
                    p != null && (x[u] = p);
                  }
                  var _ =
                    (e == null ||
                    (i = e.message) == null ||
                    (i = i.message) == null ||
                    (i = i.protocolMessage) == null
                      ? void 0
                      : i.type) ===
                    o("WAWebProtobufsE2E.pb").Message$ProtocolMessage$Type
                      .REQUEST_WELCOME_MESSAGE;
                  if (_) {
                    J++;
                    return;
                  }
                  var g =
                    (e == null ||
                    (l = e.message) == null ||
                    (l = l.message) == null ||
                    (l = l.protocolMessage) == null
                      ? void 0
                      : l.type) ===
                    o("WAWebProtobufsE2E.pb").Message$ProtocolMessage$Type
                      .BOT_MEMU_ONBOARDING_MESSAGE;
                  if (g) {
                    Z++;
                    return;
                  }
                  if (
                    o("WAWebMobilePlatforms").isSMB() &&
                    o(
                      "WAWebBizCoexGatingUtils",
                    ).smbHostedLazySystemMsgInsertInHistorySyncEnabled() &&
                    a === 0 &&
                    f.isUser() &&
                    n.systemMessageToInsert != null
                  )
                    switch (n.systemMessageToInsert) {
                      case o("WAWebProtobufsHistorySync.pb")
                        .PrivacySystemMessage.E2EE_MSG: {
                        if (Q) break;
                        var h = o(
                          "WAWebAdvHostedAccountTypeSystemMsg",
                        ).genAdvAccountTypeChangeNotificationMsg(
                          f,
                          o("WAWebUserPrefsMeUser").getMeUser(),
                          o("WAWebProtobufsAdv.pb").ADVEncryptionType.E2EE,
                        );
                        (W.push(h),
                          o(
                            "WAWebBizCoexUtils",
                          ).sendWamCoexPrivacySysMsgHistorySyncInsert(h));
                        break;
                      }
                      case o("WAWebProtobufsHistorySync.pb")
                        .PrivacySystemMessage.NE2EE_SELF: {
                        if (!Q) break;
                        var y = o(
                          "WAWebAdvHostedAccountTypeSystemMsg",
                        ).genAdvAccountTypeSelfTransitionToCoexNotificationMsg(
                          f,
                          o("WAWebUserPrefsMeUser").getMeUser(),
                        );
                        (W.push(y),
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
                          f,
                          o("WAWebUserPrefsMeUser").getMeUser(),
                          o("WAWebProtobufsAdv.pb").ADVEncryptionType.HOSTED,
                        );
                        (W.push(C),
                          o(
                            "WAWebBizCoexUtils",
                          ).sendWamCoexPrivacySysMsgHistorySyncInsert(C));
                      }
                    }
                  var b = o(
                      "WAWebHistorySyncNotificationCommonUtils",
                    ).parseWebMsgInfoAndReturnNullOnFailure({
                      protobufChatId: m,
                      message: e.message,
                      chunkInfo: t,
                      allLidMapping: B,
                      totalMissingMapping: H,
                      historyLidPnMappings: c,
                      dbChatId: f,
                    }),
                    v =
                      ((s = e.message) == null ||
                      (s = s.message) == null ||
                      (s = s.commentMessage) == null
                        ? void 0
                        : s.targetMessageKey) == null,
                    S = (b == null ? void 0 : b.associationType) != null;
                  if (v) {
                    var R;
                    (b != null &&
                      U.has(b.id.toString()) &&
                      o(
                        "WAWebMessageAssociationGatingUtils",
                      ).isMessageAssociationInfraEnabled() &&
                      U.delete(b == null ? void 0 : b.id.toString()),
                      (b != null &&
                        b.type === o("WAWebMsgType").MSG_TYPE.INTERACTIVE &&
                        b.ctwaContext != null) ||
                        W.push(b));
                    var L =
                        (R = e.message) == null ||
                        (R = R.message) == null ||
                        (R = R.extendedTextMessage) == null ||
                        (R = R.contextInfo) == null
                          ? void 0
                          : R.externalAdReply,
                      E = b != null ? b : {},
                      k = E.from,
                      I = E.id,
                      T = E.to;
                    if (
                      L != null &&
                      (I == null ? void 0 : I.fromMe) != null &&
                      k != null &&
                      T != null &&
                      o("WAWebBizGatingUtils").shouldGenerateAGMMsgs(L)
                    ) {
                      var D,
                        $ = new (r("WAWebMsgKey"))({
                          fromMe: !I.fromMe,
                          remote: f,
                          id: r("WAWebMsgKey").newId_DEPRECATED(),
                        }),
                        P = o(
                          "WAWebMsgAGMProcessing",
                        ).genHistoryAutomatedGreetingMsg({
                          msgKey: $,
                          ctwaContext: L,
                          to: k,
                          from: T,
                          msgTimestamp:
                            (D = e.message) == null
                              ? void 0
                              : D.messageTimestamp,
                        });
                      W.push(P);
                    }
                  }
                  if (
                    b != null &&
                    S &&
                    o(
                      "WAWebMessageAssociationGatingUtils",
                    ).isMessageAssociationInfraEnabled()
                  ) {
                    var M = b.parentMsgKey.toString();
                    (U.add(M), V.push(b));
                  }
                  ((N = N.concat(
                    o("WAWebAddonProcessMsgsUtils").parseHistorySyncMsg({
                      webMsgInfo: e.message,
                      parsedWebMsgInfo: b,
                      isFromCag: (d = n.isDefaultSubgroup) != null ? d : !1,
                    }),
                  )),
                    (b == null ? void 0 : b.subtype) ===
                      "biz_bot_1p_disclosure" &&
                      (X = o("WAWebBotTypes").BizBotType.BIZ_1P),
                    (b == null ? void 0 : b.subtype) ===
                      "biz_bot_3p_disclosure" &&
                      (X = o("WAWebBotTypes").BizBotType.BIZ_3P),
                    (Y = o(
                      "WAWebMmSignalSharingExpirationWindowUtils",
                    ).getUpdatedMmSignalSharingExpirationWindowFromHistorySync(
                      e.message,
                      Y,
                    )));
                }),
                  J > 0 &&
                    o("WALogger").LOG(
                      E ||
                        (E = babelHelpers.taggedTemplateLiteralLoose([
                          "[history sync] Dropped ",
                          " request welcome messages",
                        ])),
                      J,
                    ),
                  Z > 0 &&
                    o("WALogger").LOG(
                      k ||
                        (k = babelHelpers.taggedTemplateLiteralLoose([
                          "[history sync] Dropped ",
                          " memu onboarding messages",
                        ])),
                      Z,
                    ));
                var ee;
                if (
                  U.size > 0 &&
                  o(
                    "WAWebMessageAssociationGatingUtils",
                  ).isMessageAssociationInfraEnabled()
                ) {
                  var te = o(
                    "WAWebProcessMessageAssociationMessages",
                  ).classifyAssociatedMsgsFromHistorySyncUsingMissingParentsCache(
                    V,
                    U,
                  );
                  te != null &&
                    te.validAssociatedMsgs &&
                    (ee = o("WAWebApiFilterAndReplaceMessages").validateMsgFn(
                      te == null ? void 0 : te.validAssociatedMsgs,
                    ));
                }
                ((W = o(
                  "WAWebApiFilterAndReplaceMessages",
                ).filterAndReplaceMessagesInitialHistorySync(W, ee)),
                  (W = W.reverse()));
                var ne = n.contactPrimaryIdentityKey;
                if (ne && r("WAWebWid").isUser(f)) {
                  var re = o("WAWebSignalCommonUtils").bufferToStr(
                    o("WAWebCryptoCurve25519").toSignalCurvePubKey(ne),
                  );
                  O.push({
                    userId: o("WAWebWidFactory").asUserWidOrThrow(f),
                    identityKey: re,
                  });
                }
                var oe, ae, ie;
                if (
                  ((e = n.disappearingMode) == null ? void 0 : e.initiator) !=
                  null
                )
                  switch (n.disappearingMode.initiator) {
                    case o("WAWebProtobufsE2E.pb").DisappearingMode$Initiator
                      .CHANGED_IN_CHAT:
                      ((oe = o("WAWebEphemeralityTypes")
                        .DisappearingModeInitiator.ChangedInChat),
                        (ae = o("WAWebEphemeralityTypes")
                          .DisappearingModeTrigger.ChatSettings));
                      break;
                    case o("WAWebProtobufsE2E.pb").DisappearingMode$Initiator
                      .INITIATED_BY_ME:
                      ((oe = o("WAWebEphemeralityTypes")
                        .DisappearingModeInitiator.InitiatedByMe),
                        (ae = o("WAWebEphemeralityTypes")
                          .DisappearingModeTrigger.AccountSettings),
                        (ie = !0));
                      break;
                    case o("WAWebProtobufsE2E.pb").DisappearingMode$Initiator
                      .INITIATED_BY_OTHER:
                    case o("WAWebProtobufsE2E.pb").DisappearingMode$Initiator
                      .BIZ_UPGRADE_FB_HOSTING:
                      ((oe = o("WAWebEphemeralityTypes")
                        .DisappearingModeInitiator.InitiatedByOther),
                        (ae = o("WAWebEphemeralityTypes")
                          .DisappearingModeTrigger.AccountSettings),
                        (ie = !1));
                      break;
                  }
                if (
                  o("WAWebABProps").getABPropConfigValue(
                    "dm_initiator_trigger_daily_logs",
                  )
                ) {
                  var le, se;
                  if (
                    ((le = n.disappearingMode) == null ? void 0 : le.trigger) !=
                    null
                  ) {
                    var ue = o(
                      "WAWebEphemeralityUtils",
                    ).getDisappearingModeTriggerFromProtobuf(
                      n.disappearingMode.trigger,
                    );
                    ue != null && (ae = ue);
                  }
                  ((se = n.disappearingMode) == null
                    ? void 0
                    : se.initiatedByMe) != null &&
                    (ie = n.disappearingMode.initiatedByMe);
                }
                var ce = n.tcToken != null && n.tcTokenTimestamp != null;
                if (o("WAWebCurrentUser").isEmployee()) {
                  var de;
                  o("WALogger").LOG(
                    I ||
                      (I = babelHelpers.taggedTemplateLiteralLoose([
                        "handleInitialSyncMsgs: incoming chat info: protobufChatId=",
                        ", dbChatId=",
                        ", ",
                        ", ",
                        "",
                      ])),
                    m,
                    f,
                    (de = p.accountLid) != null ? de : "n/a",
                    f.isRegularUser()
                      ? o("WAWebApiContact").getAlternateUserWid(
                          o("WAWebWidFactory").asUserWidOrThrow(f),
                        )
                      : "n/a",
                  );
                }
                var me = p.accountLid,
                  pe = {
                    t: o("WALongInt").maybeNumberOrThrowIfTooLarge(
                      (i = n.conversationTimestamp) != null
                        ? i
                        : n.lastMsgTimestamp,
                    ),
                    accountLid: me,
                    id: f,
                    unreadCount: n.unreadCount,
                    ephemeralDuration: n.ephemeralExpiration,
                    ephemeralSettingTimestamp: n.ephemeralSettingTimestamp,
                    disappearingModeInitiator: oe,
                    disappearingModeTrigger: ae,
                    disappearingModeInitiatedByMe: ie,
                    endOfHistoryTransferType:
                      (l = n.endOfHistoryTransferType) != null
                        ? l
                        : o("WAWebChatConstants")
                            .ConversationEndOfHistoryTransferModelPropType
                            .INCOMPLETE,
                    name: n.name,
                    notSpam: n.notSpam,
                    isSenderNewAccount: n.isSenderNewAccount,
                    pendingInitialLoading: !1,
                    unreadMentionCount: n.unreadMentionCount,
                    tcToken: ce ? n.tcToken : null,
                    tcTokenTimestamp: ce ? n.tcTokenTimestamp : null,
                    tcTokenSenderTimestamp: n.tcTokenSenderTimestamp,
                    bizBotSystemMsgType: X,
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
                    historyChatId: g,
                  };
                if (f.isLid()) {
                  var _e = n.lidOriginType;
                  if (_e != null) {
                    var fe = o("WAWebUsernameTypes").LidOriginType.cast(_e);
                    (fe !== o("WAWebUsernameTypes").LidOriginType.PNH_CTWA &&
                      fe !== o("WAWebUsernameTypes").LidOriginType.GENERAL &&
                      o("WALogger")
                        .ERROR(
                          T ||
                            (T = babelHelpers.taggedTemplateLiteralLoose([
                              "[history sync] handleInitialSyncMsgs: invalid lidOriginType received.",
                            ])),
                        )
                        .sendLogs(
                          "handleInitialSyncMsgs: invalid lidOriginType received: " +
                            _e,
                        ),
                      (pe.lidOriginType = fe));
                  } else
                    pe.lidOriginType =
                      o("WAWebUsernameTypes").LidOriginType.GENERAL;
                }
                (n.archived != null && (pe.archive = n.archived),
                  (s = Y) != null &&
                    s.length &&
                    (pe.mmSignalSharingExpirationWindow = o(
                      "WAWebMmSignalSharingExpirationWindowUtils",
                    ).getSortedMmSignalSharingExpirationWindowFromHistorySync(
                      Y,
                    )));
                try {
                  o(
                    "WAWebHistorySyncNotificationUtils",
                  ).saveGroupMetadataForLeftGroup(n, pe.id);
                } catch (e) {
                  o("WALogger")
                    .WARN(
                      D ||
                        (D = babelHelpers.taggedTemplateLiteralLoose([
                          "[history sync] history_sync_notification_handler: saveGroupMetadataForLeftGroup failed",
                        ])),
                    )
                    .tags("history-sync");
                }
                var ge = f.toString(),
                  he = A.has(u);
                he ? j++ : A.add(u);
                var ye = Object.prototype.hasOwnProperty.call($, ge);
                (ye ? K++ : he || w.push(pe),
                  ($[ge] = { chatInfo: pe, msgs: W, unifiedAddons: N }));
              },
              Y;
            for (var J of e.conversations) Y = yield* X(J);
            (z > 0 &&
              o("WALogger").LOG(
                _ ||
                  (_ = babelHelpers.taggedTemplateLiteralLoose([
                    "[history sync] overriding ",
                    " chat ids => ",
                    "",
                  ])),
                z,
                G,
              ),
              j > 0 &&
                o("WALogger").LOG(
                  f ||
                    (f = babelHelpers.taggedTemplateLiteralLoose([
                      "[history sync] found ",
                      " duplicated protobuf conversation ids during initial sync",
                    ])),
                  j,
                ),
              K > 0 &&
                o("WALogger").LOG(
                  g ||
                    (g = babelHelpers.taggedTemplateLiteralLoose([
                      "[history sync] found ",
                      " duplicated db conversation ids during initial sync",
                    ])),
                  K,
                ));
            for (var Z of e.accounts) {
              var ee = U(Z);
              ee && u.push(ee);
            }
            (d.length > 0 &&
              (o("WALogger").LOG(
                h ||
                  (h = babelHelpers.taggedTemplateLiteralLoose([
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
              (i.mdBootstrapMessagesCount = F),
              (i.mdBootstrapChatsCount = e.conversations.length),
              o(
                "WAWebHistorySyncNotificationUtils",
              ).commitHistoryDownloadedMetric(
                i,
                t.historySyncStepStartedTs,
                !0,
                s,
              ),
              r("WAWebSyncBootstrap").markInitialHistorySyncCountDebugStats(
                F,
                w.length,
              ));
            var te = 0,
              ne = [];
            (O.forEach(function (e) {
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
                            y ||
                              (y = babelHelpers.taggedTemplateLiteralLoose(
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
                  C ||
                    (C = babelHelpers.taggedTemplateLiteralLoose(
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
                    b ||
                      (b = babelHelpers.taggedTemplateLiteralLoose([
                        "[history sync] handleInitialSyncMsgs: there are Identities with missing LIDs: ",
                        "",
                      ])),
                    te,
                  )
                  .sendLogs(
                    "handleInitialSyncMsgs: there are Identities with missing LIDs",
                    { sampling: 0.01 },
                  ),
              yield r("WAWebHandleAddChats")(w),
              yield W($),
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
                v ||
                  (v = babelHelpers.taggedTemplateLiteralLoose([
                    "[history sync] storing initial sync messages complete, ",
                    "",
                  ])),
                o("WAWebHistorySyncLogUtils").getHistorySyncLogDetailsString(
                  t,
                  F,
                  w.length,
                ),
              ),
              o("WALogger").LOG(
                S ||
                  (S = babelHelpers.taggedTemplateLiteralLoose([
                    "[history sync] set history initial sync boundary with length ",
                    "",
                  ])),
                Object.keys(x).length,
              ),
              yield (N || (N = n("Promise"))).all([
                o(
                  "WAWebHistorySyncNotificationUtils",
                ).handleChatThreadLoggingMetadata(e),
                o("WAWebUserPrefsHistorySync").setHistoryInitialSyncBoundary(x),
                e.companionMetaNonce != null
                  ? o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.set(
                      "WAWebCompanionMetaNonce",
                      e.companionMetaNonce,
                    )
                  : null,
                V(e.nctSalt),
              ]),
              o("WAWebUserPrefsModelStorage").setInitialGroupPhash(M),
              o("WAWebHistorySyncNotificationCommonUtils").reportMissingMapping(
                H,
              ));
          },
        )),
        w.apply(this, arguments)
      );
    }
    function A(e, t, n, r, o) {
      return F.apply(this, arguments);
    }
    function F() {
      return (
        (F = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, r, a) {
            (o("WALogger").LOG(
              x ||
                (x = babelHelpers.taggedTemplateLiteralLoose([
                  "[history sync] processing history non blocking data",
                ])),
            ),
              o(
                "WAWebHistorySyncNotificationUtils",
              ).commitHistoryDownloadedMetric(
                n,
                t.historySyncStepStartedTs,
                !0,
                a,
              ),
              e.pastParticipants != null &&
                e.pastParticipants.length > 0 &&
                (yield o(
                  "WAWebHistorySyncNotificationUtils",
                ).processPastParticipants(e, t)),
              e.callLogRecords != null &&
                e.callLogRecords.length > 0 &&
                (yield O(e, t)),
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
        F.apply(this, arguments)
      );
    }
    function O(e, t) {
      return B.apply(this, arguments);
    }
    function B() {
      return (
        (B = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          (o("WALogger").LOG(
            $ ||
              ($ = babelHelpers.taggedTemplateLiteralLoose([
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
            yield (N || (N = n("Promise"))).all(
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
              P ||
                (P = babelHelpers.taggedTemplateLiteralLoose([
                  "[history sync] storing call log records complete, ",
                  "",
                ])),
              o("WAWebHistorySyncLogUtils").getHistorySyncLogDetailsString(
                t,
                e.callLogRecords.length,
              ),
            ));
        })),
        B.apply(this, arguments)
      );
    }
    function W(t) {
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
      return (N || (N = n("Promise")))
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
          return (
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
              }),
            o("WAWebSyncdOrphan").checkOrphanMutations(r, Object.keys(t))
          );
        })
        .then(function () {
          var e;
          return (N || (N = n("Promise")))
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
            .catching(e)
            .sendLogs(
              "msg_handler for MD: error storing/processing multiple messages",
            );
        });
    }
    function q(e, t) {
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
    function U(e) {
      var t = e.lid,
        n = e.username,
        r = e.countryCode;
      if (!(t == null || (n == null && r == null))) {
        var a = o("WAWebWidFactory").createUserWidOrThrow(t),
          i;
        if (
          (r != null &&
            ((i = o("WAWebAsISOCountryCode").asISOCountryCode(r)),
            !i &&
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
        ) {
          var l = { userId: a, username: n };
          return (i != null && (l.usernameCountryCode = i), l);
        } else if (i != null) return { userId: a, usernameCountryCode: i };
      }
    }
    function V(e) {
      return e != null
        ? (o("WALogger").LOG(
            d ||
              (d = babelHelpers.taggedTemplateLiteralLoose([
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
    ((l.handleInitialSyncMsgs = M),
      (l.handleNonBlockingData = A),
      (l.getUsernameUpdate = U),
      (l.storeNctSaltFromHistorySync = V));
  },
  98,
);
