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
    "WAWebUserPrefsPhoneNumberHidingThreadPromotionMigration",
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
      N,
      M;
    function w(e, t, n, r, o, a, i, l) {
      return A.apply(this, arguments);
    }
    function A() {
      return (
        (A = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, a, i, l, s, u, c) {
            o("WALogger").LOG(
              _ ||
                (_ = babelHelpers.taggedTemplateLiteralLoose([
                  "[history sync] starts hanlding initial sync msgs",
                ])),
            );
            var d = [],
              m = {},
              p = {},
              $ = new Map(),
              P = {},
              N = [],
              w = new Set(),
              A = 0,
              F = [],
              O = o(
                "WAWebHistorySyncNotificationCommonUtils",
              ).getLidMappingAsStringSet(c);
            o("WAWebCurrentUser").isEmployee() &&
              o("WALogger")
                .LOG(
                  f ||
                    (f = babelHelpers.taggedTemplateLiteralLoose([
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
                    E ||
                      (E = babelHelpers.taggedTemplateLiteralLoose([
                        "[history sync] processing conversation ",
                        " with ",
                        " messages",
                      ])),
                    u,
                    n.messages.length,
                  );
                var _ = o("WAWebWidFactory").createWid(u);
                if (_.isNewsletter()) return 0;
                var f = U(_, n);
                if (f.result === "skip-chat") return 0;
                if (f.result === "extracted") {
                  var g = f.accountLid;
                  if ($.has(g))
                    return (
                      o("WALogger")
                        .ERROR(
                          k ||
                            (k = babelHelpers.taggedTemplateLiteralLoose([
                              "[history sync] handleInitialSyncMsgs: Found duplicated accountLid during initial sync",
                            ])),
                        )
                        .sendLogs("duplicated-account-lid-in-history-sync"),
                      0
                    );
                  $.set(g, _);
                } else f.result;
                var h = _,
                  y,
                  C =
                    o(
                      "WAWebHistorySyncLidChatGating",
                    ).isForcedHistoryLidChat() &&
                    _.isRegularUserPn() &&
                    f.accountLid != null;
                if (
                  (C &&
                    f.accountLid != null &&
                    (z++,
                    W.length < 3 &&
                      W.push(
                        _.toLogString() + " -> " + f.accountLid.toLogString(),
                      ),
                    (h = f.accountLid),
                    (y = _.toString())),
                  _.isUser())
                ) {
                  if (_.isLid()) {
                    var b = n.pnJid;
                    b != null &&
                      d.push({
                        lid: _,
                        pn: o("WAWebWidFactory").createUserWidOrThrow(b),
                      });
                    var v = n.displayName,
                      S = n.shareOwnPn;
                    if (v != null || S != null) {
                      var R = {};
                      (v != null && (R.displayNameLID = v),
                        S != null && (R.shareOwnPn = S),
                        a.push({ lid: _, data: R }));
                    }
                  } else if (n.lidJid != null) {
                    var L = o("WAWebWidFactory").createUserLidOrThrow(n.lidJid);
                    d.push({ lid: L, pn: _ });
                  }
                }
                var M = [];
                A += n.messages.length;
                var q = [],
                  V = new Set(),
                  H = [];
                (n.messages.length === 0 && (m[u] = -1),
                  r("isStringNullOrEmpty")(n.pHash) || (P[u] = n.pHash));
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
                    p != null && (m[u] = p);
                  }
                  var f =
                    (e == null ||
                    (i = e.message) == null ||
                    (i = i.message) == null ||
                    (i = i.protocolMessage) == null
                      ? void 0
                      : i.type) ===
                    o("WAWebProtobufsE2E.pb").Message$ProtocolMessage$Type
                      .REQUEST_WELCOME_MESSAGE;
                  if (f) {
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
                    h.isUser() &&
                    n.systemMessageToInsert != null
                  )
                    switch (n.systemMessageToInsert) {
                      case o("WAWebProtobufsHistorySync.pb")
                        .PrivacySystemMessage.E2EE_MSG: {
                        if (Q) break;
                        var y = o(
                          "WAWebAdvHostedAccountTypeSystemMsg",
                        ).genAdvAccountTypeChangeNotificationMsg(
                          h,
                          o("WAWebUserPrefsMeUser").getMeUser(),
                          o("WAWebProtobufsAdv.pb").ADVEncryptionType.E2EE,
                        );
                        (q.push(y),
                          o(
                            "WAWebBizCoexUtils",
                          ).sendWamCoexPrivacySysMsgHistorySyncInsert(y));
                        break;
                      }
                      case o("WAWebProtobufsHistorySync.pb")
                        .PrivacySystemMessage.NE2EE_SELF: {
                        if (!Q) break;
                        var C = o(
                          "WAWebAdvHostedAccountTypeSystemMsg",
                        ).genAdvAccountTypeSelfTransitionToCoexNotificationMsg(
                          h,
                          o("WAWebUserPrefsMeUser").getMeUser(),
                        );
                        (q.push(C),
                          o(
                            "WAWebBizCoexUtils",
                          ).sendWamCoexPrivacySysMsgHistorySyncInsert(C));
                        break;
                      }
                      case o("WAWebProtobufsHistorySync.pb")
                        .PrivacySystemMessage.NE2EE_OTHER: {
                        var b = o(
                          "WAWebAdvHostedAccountTypeSystemMsg",
                        ).genAdvAccountTypeChangeNotificationMsg(
                          h,
                          o("WAWebUserPrefsMeUser").getMeUser(),
                          o("WAWebProtobufsAdv.pb").ADVEncryptionType.HOSTED,
                        );
                        (q.push(b),
                          o(
                            "WAWebBizCoexUtils",
                          ).sendWamCoexPrivacySysMsgHistorySyncInsert(b));
                      }
                    }
                  var v = o(
                      "WAWebHistorySyncNotificationCommonUtils",
                    ).parseWebMsgInfoAndReturnNullOnFailure({
                      protobufChatId: _,
                      message: e.message,
                      chunkInfo: t,
                      allLidMapping: O,
                      totalMissingMapping: B,
                      historyLidPnMappings: c,
                      dbChatId: h,
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
                      V.has(v.id.toString()) &&
                      o(
                        "WAWebMessageAssociationGatingUtils",
                      ).isMessageAssociationInfraEnabled() &&
                      V.delete(v == null ? void 0 : v.id.toString()),
                      (v != null &&
                        v.type === o("WAWebMsgType").MSG_TYPE.INTERACTIVE &&
                        v.ctwaContext != null) ||
                        q.push(v));
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
                      o("WAWebBizGatingUtils").shouldGenerateAGMMsgs(E)
                    ) {
                      var x,
                        $ = new (r("WAWebMsgKey"))({
                          fromMe: !T.fromMe,
                          remote: h,
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
                      q.push(P);
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
                    (V.add(N), H.push(v));
                  }
                  ((M = M.concat(
                    o("WAWebAddonProcessMsgsUtils").parseHistorySyncMsg({
                      webMsgInfo: e.message,
                      parsedWebMsgInfo: v,
                      isFromCag: (d = n.isDefaultSubgroup) != null ? d : !1,
                    }),
                  )),
                    (v == null ? void 0 : v.subtype) ===
                      "biz_bot_1p_disclosure" &&
                      (X = o("WAWebBotTypes").BizBotType.BIZ_1P),
                    (v == null ? void 0 : v.subtype) ===
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
                      I ||
                        (I = babelHelpers.taggedTemplateLiteralLoose([
                          "[history sync] Dropped ",
                          " request welcome messages",
                        ])),
                      J,
                    ),
                  Z > 0 &&
                    o("WALogger").LOG(
                      T ||
                        (T = babelHelpers.taggedTemplateLiteralLoose([
                          "[history sync] Dropped ",
                          " memu onboarding messages",
                        ])),
                      Z,
                    ));
                var ee;
                if (
                  V.size > 0 &&
                  o(
                    "WAWebMessageAssociationGatingUtils",
                  ).isMessageAssociationInfraEnabled()
                ) {
                  var te = o(
                    "WAWebProcessMessageAssociationMessages",
                  ).classifyAssociatedMsgsFromHistorySyncUsingMissingParentsCache(
                    H,
                    V,
                  );
                  te != null &&
                    te.validAssociatedMsgs &&
                    (ee = o("WAWebApiFilterAndReplaceMessages").validateMsgFn(
                      te == null ? void 0 : te.validAssociatedMsgs,
                    ));
                }
                ((q = o(
                  "WAWebApiFilterAndReplaceMessages",
                ).filterAndReplaceMessagesInitialHistorySync(q, ee)),
                  (q = q.reverse()));
                var ne = n.contactPrimaryIdentityKey;
                if (ne && r("WAWebWid").isUser(h)) {
                  var re = o("WAWebSignalCommonUtils").bufferToStr(
                    o("WAWebCryptoCurve25519").toSignalCurvePubKey(ne),
                  );
                  F.push({
                    userId: o("WAWebWidFactory").asUserWidOrThrow(h),
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
                    D ||
                      (D = babelHelpers.taggedTemplateLiteralLoose([
                        "handleInitialSyncMsgs: incoming chat info: protobufChatId=",
                        ", dbChatId=",
                        ", ",
                        ", ",
                        "",
                      ])),
                    _,
                    h,
                    (de = f.accountLid) != null ? de : "n/a",
                    h.isRegularUser()
                      ? o("WAWebApiContact").getAlternateUserWid(
                          o("WAWebWidFactory").asUserWidOrThrow(h),
                        )
                      : "n/a",
                  );
                }
                var me = f.accountLid,
                  pe = {
                    t: o("WALongInt").maybeNumberOrThrowIfTooLarge(
                      (i = n.conversationTimestamp) != null
                        ? i
                        : n.lastMsgTimestamp,
                    ),
                    accountLid: me,
                    id: h,
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
                    historyChatId: y,
                  };
                (h.isLid() && (pe.lidOriginType = G(n.lidOriginType)),
                  n.archived != null && (pe.archive = n.archived),
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
                      x ||
                        (x = babelHelpers.taggedTemplateLiteralLoose([
                          "[history sync] history_sync_notification_handler: saveGroupMetadataForLeftGroup failed",
                        ])),
                    )
                    .tags("history-sync");
                }
                var _e = h.toString(),
                  fe = w.has(u);
                fe ? j++ : w.add(u);
                var ge = Object.prototype.hasOwnProperty.call(p, _e);
                (ge ? K++ : fe || N.push(pe),
                  (p[_e] = { chatInfo: pe, msgs: q, unifiedAddons: M }));
              },
              Y;
            for (var J of e.conversations) Y = yield* X(J);
            (z > 0 &&
              o("WALogger").LOG(
                g ||
                  (g = babelHelpers.taggedTemplateLiteralLoose([
                    "[history sync] overriding ",
                    " chat ids => ",
                    "",
                  ])),
                z,
                W,
              ),
              j > 0 &&
                o("WALogger").LOG(
                  h ||
                    (h = babelHelpers.taggedTemplateLiteralLoose([
                      "[history sync] found ",
                      " duplicated protobuf conversation ids during initial sync",
                    ])),
                  j,
                ),
              K > 0 &&
                o("WALogger").LOG(
                  y ||
                    (y = babelHelpers.taggedTemplateLiteralLoose([
                      "[history sync] found ",
                      " duplicated db conversation ids during initial sync",
                    ])),
                  K,
                ));
            for (var Z of e.accounts) {
              var ee = V(Z);
              ee && u.push(ee);
            }
            (d.length > 0 &&
              (o("WALogger").LOG(
                C ||
                  (C = babelHelpers.taggedTemplateLiteralLoose([
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
              ).commitHistoryDownloadedMetric(
                i,
                t.historySyncStepStartedTs,
                !0,
                s,
              ),
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
                            b ||
                              (b = babelHelpers.taggedTemplateLiteralLoose(
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
                  v ||
                    (v = babelHelpers.taggedTemplateLiteralLoose(
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
                    S ||
                      (S = babelHelpers.taggedTemplateLiteralLoose([
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
              yield q(p),
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
                R ||
                  (R = babelHelpers.taggedTemplateLiteralLoose([
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
                L ||
                  (L = babelHelpers.taggedTemplateLiteralLoose([
                    "[history sync] set history initial sync boundary with length ",
                    "",
                  ])),
                Object.keys(m).length,
              ),
              yield (M || (M = n("Promise"))).all([
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
                H(e.nctSalt),
              ]),
              o("WAWebUserPrefsModelStorage").setInitialGroupPhash(P),
              o("WAWebHistorySyncNotificationCommonUtils").reportMissingMapping(
                B,
              ));
          },
        )),
        A.apply(this, arguments)
      );
    }
    function F(e, t, n, r, o) {
      return O.apply(this, arguments);
    }
    function O() {
      return (
        (O = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, r, a) {
            (o("WALogger").LOG(
              $ ||
                ($ = babelHelpers.taggedTemplateLiteralLoose([
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
                (yield B(e, t)),
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
        O.apply(this, arguments)
      );
    }
    function B(e, t) {
      return W.apply(this, arguments);
    }
    function W() {
      return (
        (W = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          (o("WALogger").LOG(
            P ||
              (P = babelHelpers.taggedTemplateLiteralLoose([
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
            yield (M || (M = n("Promise"))).all(
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
              N ||
                (N = babelHelpers.taggedTemplateLiteralLoose([
                  "[history sync] storing call log records complete, ",
                  "",
                ])),
              o("WAWebHistorySyncLogUtils").getHistorySyncLogDetailsString(
                t,
                e.callLogRecords.length,
              ),
            ));
        })),
        W.apply(this, arguments)
      );
    }
    function q(t) {
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
      return (M || (M = n("Promise")))
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
          return (M || (M = n("Promise")))
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
    function U(e, t) {
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
    function V(e) {
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
    function H(e) {
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
    function G(e) {
      if (e != null) {
        var t = o("WAWebUsernameTypes").LidOriginType.cast(e);
        return t == null
          ? (o("WALogger")
              .ERROR(
                m ||
                  (m = babelHelpers.taggedTemplateLiteralLoose([
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
                  p ||
                    (p = babelHelpers.taggedTemplateLiteralLoose([
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
    ((l.handleInitialSyncMsgs = w),
      (l.handleNonBlockingData = F),
      (l.getUsernameUpdate = V),
      (l.storeNctSaltFromHistorySync = H),
      (l.determineLidOriginTypeForHistorySync = G));
  },
  98,
);
