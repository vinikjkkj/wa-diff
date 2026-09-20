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
      w,
      A;
    function F(e) {
      return O.apply(this, arguments);
    }
    function O() {
      return (
        (O = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.chunkDownloadFinishTimestamp,
            a = e.chunkInfo,
            i = e.historyLidPnMappings,
            l = e.historySyncDataAppliedMetric,
            s = e.historySyncDownloadMetric,
            u = e.newLidMetadata,
            c = e.newUsernameUpdates,
            d = e.proto;
          o("WALogger").LOG(
            f ||
              (f = babelHelpers.taggedTemplateLiteralLoose([
                "[history sync] starts hanlding initial sync msgs",
              ])),
          );
          var m = [],
            p = {},
            _ = {},
            N = new Map(),
            M = {},
            w = [],
            F = new Set(),
            O = 0,
            B = [],
            W = [],
            q = o(
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
                q == null ? void 0 : q.size,
                o("WAWebHistorySyncNotificationCommonUtils").getLidsForLogging(
                  q,
                ),
              )
              .verbose();
          var U = new Map(),
            Q = [],
            X = 0,
            Y = 0,
            J = 0,
            Z = [],
            ee =
              o(
                "WAWebBizCoexGatingUtils",
              ).smbHostedLazySystemMsgInsertInHistorySyncEnabled() &&
              (yield o("WAWebUserPrefsMultiDevice").getIsHostedMeAccount()) ===
                !0,
            te = function* (t) {
              var e,
                n,
                l,
                s,
                c,
                d,
                f = t.id;
              o("WAWebCurrentUser").isEmployee() &&
                o("WALogger").LOG(
                  I ||
                    (I = babelHelpers.taggedTemplateLiteralLoose([
                      "[history sync] processing conversation ",
                      " with ",
                      " messages",
                    ])),
                  f,
                  t.messages.length,
                );
              var g = o("WAWebWidFactory").createWid(f);
              if (g.isNewsletter()) return 0;
              var h = H(g, t);
              if (h.result === "skip-chat") return 0;
              if (h.result === "extracted") {
                var y = h.accountLid;
                if (N.has(y))
                  return (
                    o("WALogger")
                      .ERROR(
                        T ||
                          (T = babelHelpers.taggedTemplateLiteralLoose([
                            "[history sync] handleInitialSyncMsgs: Found duplicated accountLid during initial sync",
                          ])),
                      )
                      .sendLogs("duplicated-account-lid-in-history-sync"),
                    0
                  );
                N.set(y, g);
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
                  (X++,
                  Q.length < 3 &&
                    Q.push(
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
              var A = t.name;
              C.isBot() && A != null && A !== "" && W.push({ name: A, wid: C });
              var V = [];
              O += t.messages.length;
              var G = [],
                z = new Set(),
                te = [];
              (t.messages.length === 0 && (p[f] = -1),
                r("isStringNullOrEmpty")(t.pHash) || (M[f] = t.pHash));
              var ne,
                re = !1,
                oe = [],
                ae = 0,
                ie = 0;
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
                  ae++;
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
                  ie++;
                  return;
                }
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
                    case o("WAWebProtobufsHistorySync.pb").PrivacySystemMessage
                      .E2EE_MSG: {
                      if (ee) break;
                      var h = o(
                        "WAWebAdvHostedAccountTypeSystemMsg",
                      ).genAdvAccountTypeChangeNotificationMsg({
                        accountTypeChangedUser: o(
                          "WAWebUserPrefsMeUser",
                        ).getMeUserOrThrow(),
                        chatId: C,
                        newAdvAccountType: o("WAWebProtobufsAdv.pb")
                          .ADVEncryptionType.E2EE,
                      });
                      (G.push(h),
                        o(
                          "WAWebBizCoexUtils",
                        ).sendWamCoexPrivacySysMsgHistorySyncInsert(h));
                      break;
                    }
                    case o("WAWebProtobufsHistorySync.pb").PrivacySystemMessage
                      .NE2EE_SELF: {
                      if (!ee) break;
                      var y = o(
                        "WAWebAdvHostedAccountTypeSystemMsg",
                      ).genAdvAccountTypeSelfTransitionToCoexNotificationMsg(
                        C,
                        o("WAWebUserPrefsMeUser").getMeUserOrThrow(),
                      );
                      (G.push(y),
                        o(
                          "WAWebBizCoexUtils",
                        ).sendWamCoexPrivacySysMsgHistorySyncInsert(y));
                      break;
                    }
                    case o("WAWebProtobufsHistorySync.pb").PrivacySystemMessage
                      .NE2EE_OTHER: {
                      var b = o(
                        "WAWebAdvHostedAccountTypeSystemMsg",
                      ).genAdvAccountTypeChangeNotificationMsg({
                        accountTypeChangedUser: o(
                          "WAWebUserPrefsMeUser",
                        ).getMeUserOrThrow(),
                        chatId: C,
                        newAdvAccountType: o("WAWebProtobufsAdv.pb")
                          .ADVEncryptionType.HOSTED,
                      });
                      (G.push(b),
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
                    allLidMapping: q,
                    totalMissingMapping: U,
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
                    z.has(v.id.toString()) &&
                    z.delete(v == null ? void 0 : v.id.toString()),
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
                        remote: C,
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
                          (x = e.message) == null ? void 0 : x.messageTimestamp,
                      });
                    G.push(P);
                  }
                }
                if (v != null && R) {
                  var N = v.parentMsgKey.toString();
                  (z.add(N), te.push(v));
                }
                ((V = V.concat(
                  o("WAWebAddonProcessMsgsUtils").parseHistorySyncMsg({
                    webMsgInfo: e.message,
                    parsedWebMsgInfo: v,
                    isFromCag: (c = t.isDefaultSubgroup) != null ? c : !1,
                  }),
                )),
                  (v == null ? void 0 : v.subtype) ===
                    "biz_bot_1p_disclosure" &&
                    (ne = o("WAWebBotTypes").BizBotType.BIZ_1P),
                  (v == null ? void 0 : v.subtype) ===
                    "biz_bot_3p_disclosure" &&
                    (ne = o("WAWebBotTypes").BizBotType.BIZ_3P),
                  (v == null ? void 0 : v.subtype) ===
                    "ctwa_consumer_data_sharing_disclosure_system_message" &&
                    (re = !0),
                  (oe = o(
                    "WAWebMmSignalSharingExpirationWindowUtils",
                  ).getUpdatedMmSignalSharingExpirationWindowFromHistorySync(
                    e.message,
                    oe,
                  )));
              }),
                ae > 0 &&
                  o("WALogger").LOG(
                    D ||
                      (D = babelHelpers.taggedTemplateLiteralLoose([
                        "[history sync] Dropped ",
                        " request welcome messages",
                      ])),
                    ae,
                  ),
                ie > 0 &&
                  o("WALogger").LOG(
                    x ||
                      (x = babelHelpers.taggedTemplateLiteralLoose([
                        "[history sync] Dropped ",
                        " memu onboarding messages",
                      ])),
                    ie,
                  ));
              var le;
              if (z.size > 0) {
                var se = o(
                  "WAWebProcessMessageAssociationMessages",
                ).classifyAssociatedMsgsFromHistorySyncUsingMissingParentsCache(
                  te,
                  z,
                );
                se != null &&
                  se.validAssociatedMsgs &&
                  (le = o("WAWebApiFilterAndReplaceMessages").validateMsgFn(
                    se == null ? void 0 : se.validAssociatedMsgs,
                  ));
              }
              ((G = o(
                "WAWebApiFilterAndReplaceMessages",
              ).filterAndReplaceMessagesInitialHistorySync(G, le)),
                (G = G.reverse()));
              var ue = t.contactPrimaryIdentityKey;
              if (ue && r("WAWebWid").isUser(C)) {
                var ce = o("WAWebSignalCommonUtils").bufferToStr(
                  o("WAWebCryptoCurve25519").toSignalCurvePubKey(ue),
                );
                B.push({
                  userId: o("WAWebWidFactory").asUserWidOrThrow(C),
                  identityKey: ce,
                });
              }
              var de, me, pe;
              if (
                ((e = t.disappearingMode) == null ? void 0 : e.initiator) !=
                null
              )
                switch (t.disappearingMode.initiator) {
                  case o("WAWebProtobufsE2E.pb").DisappearingMode$Initiator
                    .CHANGED_IN_CHAT:
                    ((de = o("WAWebEphemeralityTypes").DisappearingModeInitiator
                      .ChangedInChat),
                      (me = o("WAWebEphemeralityTypes").DisappearingModeTrigger
                        .ChatSettings));
                    break;
                  case o("WAWebProtobufsE2E.pb").DisappearingMode$Initiator
                    .INITIATED_BY_ME:
                    ((de = o("WAWebEphemeralityTypes").DisappearingModeInitiator
                      .InitiatedByMe),
                      (me = o("WAWebEphemeralityTypes").DisappearingModeTrigger
                        .AccountSettings),
                      (pe = !0));
                    break;
                  case o("WAWebProtobufsE2E.pb").DisappearingMode$Initiator
                    .INITIATED_BY_OTHER:
                  case o("WAWebProtobufsE2E.pb").DisappearingMode$Initiator
                    .BIZ_UPGRADE_FB_HOSTING:
                    ((de = o("WAWebEphemeralityTypes").DisappearingModeInitiator
                      .InitiatedByOther),
                      (me = o("WAWebEphemeralityTypes").DisappearingModeTrigger
                        .AccountSettings),
                      (pe = !1));
                    break;
                }
              if (
                ((n = t.disappearingMode) == null ? void 0 : n.trigger) != null
              ) {
                var _e = o(
                  "WAWebEphemeralityUtils",
                ).getDisappearingModeTriggerFromProtobuf(
                  t.disappearingMode.trigger,
                );
                _e != null && (me = _e);
              }
              ((l = t.disappearingMode) == null ? void 0 : l.initiatedByMe) !=
                null && (pe = t.disappearingMode.initiatedByMe);
              var fe = t.tcToken != null && t.tcTokenTimestamp != null;
              if (o("WAWebCurrentUser").isEmployee()) {
                var ge;
                o("WALogger").LOG(
                  $ ||
                    ($ = babelHelpers.taggedTemplateLiteralLoose([
                      "handleInitialSyncMsgs: incoming chat info: protobufChatId=",
                      ", dbChatId=",
                      ", ",
                      ", ",
                      "",
                    ])),
                  g,
                  C,
                  (ge = h.accountLid) != null ? ge : "n/a",
                  C.isRegularUser()
                    ? o("WAWebApiContact").getAlternateUserWid(
                        o("WAWebWidFactory").asUserWidOrThrow(C),
                      )
                    : "n/a",
                );
              }
              var he = h.accountLid,
                ye = {
                  t: o("WALongInt").maybeNumberOrThrowIfTooLarge(
                    (s = t.conversationTimestamp) != null
                      ? s
                      : t.lastMsgTimestamp,
                  ),
                  accountLid: he,
                  id: C,
                  unreadCount: t.unreadCount,
                  ephemeralDuration: t.ephemeralExpiration,
                  ephemeralSettingTimestamp: t.ephemeralSettingTimestamp,
                  disappearingModeInitiator: de,
                  disappearingModeTrigger: me,
                  disappearingModeInitiatedByMe: pe,
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
                  tcToken: fe ? t.tcToken : null,
                  tcTokenTimestamp: fe ? t.tcTokenTimestamp : null,
                  tcTokenSenderTimestamp: t.tcTokenSenderTimestamp,
                  bizBotSystemMsgType: ne,
                  hasCtwaConsumerDataSharingDisclosureSystemMsg: re || void 0,
                  isLocked: t.locked,
                  limitSharing: o(
                    "WAWebLimitSharingProtoUtils",
                  ).getLimitSharingFromProtocolHistorySyncConversation(t),
                  capiThreadControl: j(t.maibaAiThreadEnabled),
                  historyChatId: b,
                };
              if (
                (C.isLid() && (ye.lidOriginType = K(t.lidOriginType)),
                t.archived != null && (ye.archive = t.archived),
                t.authAgentParentCompanyName != null)
              ) {
                var Ce;
                ((ye.parentCompanyName = t.authAgentParentCompanyName),
                  (ye.obaPhoneNumber =
                    (Ce = t.authAgentObaPhoneNumber) != null ? Ce : ""));
              }
              ((d = oe) != null &&
                d.length &&
                (ye.mmSignalSharingExpirationWindow = o(
                  "WAWebMmSignalSharingExpirationWindowUtils",
                ).getSortedMmSignalSharingExpirationWindowFromHistorySync(oe)),
                Z.push(
                  o("WAWebHistorySyncNotificationUtils")
                    .saveGroupMetadataForLeftGroup(t, ye.id)
                    .catch(function (e) {
                      o("WALogger")
                        .WARN(
                          P ||
                            (P = babelHelpers.taggedTemplateLiteralLoose([
                              "[history sync] history_sync_notification_handler: saveGroupMetadataForLeftGroup failed",
                            ])),
                        )
                        .tags("history-sync");
                    }),
                ));
              var be = C.toString(),
                ve = F.has(f);
              ve ? Y++ : F.add(f);
              var Se = Object.prototype.hasOwnProperty.call(_, be);
              (Se ? J++ : ve || w.push(ye),
                (_[be] = { chatInfo: ye, msgs: G, unifiedAddons: V }));
            },
            ne;
          for (var re of d.conversations) ne = yield* te(re);
          (X > 0 &&
            o("WALogger").LOG(
              h ||
                (h = babelHelpers.taggedTemplateLiteralLoose([
                  "[history sync] overriding ",
                  " chat ids => ",
                  "",
                ])),
              X,
              Q,
            ),
            Y > 0 &&
              o("WALogger").LOG(
                y ||
                  (y = babelHelpers.taggedTemplateLiteralLoose([
                    "[history sync] found ",
                    " duplicated protobuf conversation ids during initial sync",
                  ])),
                Y,
              ),
            J > 0 &&
              o("WALogger").LOG(
                C ||
                  (C = babelHelpers.taggedTemplateLiteralLoose([
                    "[history sync] found ",
                    " duplicated db conversation ids during initial sync",
                  ])),
                J,
              ));
          for (var oe of d.accounts) {
            var ae = G(oe);
            ae && c.push(ae);
          }
          (m.length > 0 &&
            (o("WALogger").LOG(
              b ||
                (b = babelHelpers.taggedTemplateLiteralLoose([
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
            (s.mdBootstrapMessagesCount = O),
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
              O,
              w.length,
            ));
          var ie = 0,
            le = [];
          (B.forEach(function (e) {
            var t = e.identityKey,
              n = e.userId;
            !n.isLid() &&
              o("WAWebApiContact").getCurrentLid(n) == null &&
              n.isRegularUser() &&
              ie++;
            try {
              var r = o("WAWebSignalCommonUtils")
                .createSignalAddress(n)
                .toString();
              o("WAWebUserPrefsMeUser").isMeAccount(n)
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
                : le.push({ identifier: r, identityKey: t });
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
              .bulkCreateIdentity(le),
            ie > 0 &&
              o("WALogger")
                .ERROR(
                  R ||
                    (R = babelHelpers.taggedTemplateLiteralLoose([
                      "[history sync] handleInitialSyncMsgs: there are Identities with missing LIDs: ",
                      "",
                    ])),
                  ie,
                )
                .sendLogs(
                  "handleInitialSyncMsgs: there are Identities with missing LIDs",
                  { sampling: 0.01 },
                ));
          try {
            yield (A || (A = n("Promise"))).all(Z);
          } catch (e) {
            o("WALogger")
              .WARN(
                L ||
                  (L = babelHelpers.taggedTemplateLiteralLoose([
                    "[history sync] handleInitialSyncMsgs: saving group metadata failed",
                  ])),
              )
              .tags("history-sync");
          }
          (yield o(
            "WAWebSeedBotProfilesFromHistorySync",
          ).seedBotProfilesFromHistorySync(W),
            yield r("WAWebHandleAddChats")(w),
            yield V(_),
            yield o("WAWebApiHistorySyncNotification").updateCurrentlyProcessed(
              a.msgKey,
              a.syncType,
              a.chunkOrder,
            ),
            o(
              "WAWebHistorySyncNotificationUtils",
            ).commitHistoryDataAppliedMetric({
              historySyncDataAppliedMetric: l,
              startTs: a.historySyncStepStartedTs,
              isSuccess: !0,
              forceFlushWamBuffer: !0,
            }),
            o("WALogger").LOG(
              E ||
                (E = babelHelpers.taggedTemplateLiteralLoose([
                  "[history sync] storing initial sync messages complete, ",
                  "",
                ])),
              o("WAWebHistorySyncLogUtils").getHistorySyncLogDetailsString(
                a,
                O,
                w.length,
              ),
            ),
            o("WALogger").LOG(
              k ||
                (k = babelHelpers.taggedTemplateLiteralLoose([
                  "[history sync] set history initial sync boundary with length ",
                  "",
                ])),
              Object.keys(p).length,
            ),
            yield (A || (A = n("Promise"))).all([
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
              z(d.nctSalt),
            ]),
            o("WAWebUserPrefsModelStorage").setInitialGroupPhash(M),
            o("WAWebHistorySyncNotificationCommonUtils").reportMissingMapping(
              U,
            ));
        })),
        O.apply(this, arguments)
      );
    }
    function B(e, t, n, r, o) {
      return W.apply(this, arguments);
    }
    function W() {
      return (
        (W = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, r, a) {
            (o("WALogger").LOG(
              N ||
                (N = babelHelpers.taggedTemplateLiteralLoose([
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
                (yield q(e, t)),
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
        W.apply(this, arguments)
      );
    }
    function q(e, t) {
      return U.apply(this, arguments);
    }
    function U() {
      return (
        (U = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          (o("WALogger").LOG(
            M ||
              (M = babelHelpers.taggedTemplateLiteralLoose([
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
            yield (A || (A = n("Promise"))).all(
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
              w ||
                (w = babelHelpers.taggedTemplateLiteralLoose([
                  "[history sync] storing call log records complete, ",
                  "",
                ])),
              o("WAWebHistorySyncLogUtils").getHistorySyncLogDetailsString(
                t,
                e.callLogRecords.length,
              ),
            ));
        })),
        U.apply(this, arguments)
      );
    }
    function V(t) {
      if (o("WAWebCallsOnlyGating").isCallsOnlyModeEnabled())
        return (A || (A = n("Promise"))).resolve();
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
      return (A || (A = n("Promise")))
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
          return (A || (A = n("Promise")))
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
    function H(e, t) {
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
    function G(e) {
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
    function z(e) {
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
    function j(e) {
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
    function K(e) {
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
    ((l.handleInitialSyncMsgs = F),
      (l.handleNonBlockingData = B),
      (l.getUsernameUpdate = G),
      (l.storeNctSaltFromHistorySync = z),
      (l.getCapiThreadControlForHistorySync = j),
      (l.determineLidOriginTypeForHistorySync = K));
  },
  98,
);
