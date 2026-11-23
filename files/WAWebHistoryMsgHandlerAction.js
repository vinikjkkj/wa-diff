__d(
  "WAWebHistoryMsgHandlerAction",
  [
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
      F;
    async function O(t) {
      var a = t.chunkDownloadFinishTimestamp,
        i = t.chunkInfo,
        l = t.historyLidPnMappings,
        I = t.historySyncDataAppliedMetric,
        T = t.historySyncDownloadMetric,
        D = t.newLidMetadata,
        x = t.newUsernameUpdates,
        $ = t.proto;
      o("WALogger")
        .LOG(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "[history sync][initial bootstrap] preprocessing started, ",
              "",
            ])),
          o("WAWebHistorySyncLogUtils").getHistorySyncLogDetailsString(i),
        )
        .tags("history-sync");
      var P = [],
        N = {},
        M = {},
        w = new Map(),
        A = {},
        F = [],
        O = new Map(),
        B = new Set(),
        W = 0,
        j = [],
        K = [],
        Q = [],
        X = o(
          "WAWebHistorySyncNotificationCommonUtils",
        ).getLidMappingAsStringSet(l);
      o("WAWebCurrentUser").isEmployee() &&
        o("WALogger")
          .LOG(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "first lid mappings for initial sync. count: ",
                ". ",
                "...",
              ])),
            X == null ? void 0 : X.size,
            o("WAWebHistorySyncNotificationCommonUtils").getLidsForLogging(X),
          )
          .verbose();
      var Y = new Map(),
        J = [],
        Z = 0,
        ee = 0,
        te = 0,
        ne = [],
        re =
          o(
            "WAWebBizCoexGatingUtils",
          ).smbHostedLazySystemMsgInsertInHistorySyncEnabled() &&
          (await o("WAWebUserPrefsMultiDevice").getIsHostedMeAccount()) === !0,
        oe = async function (t) {
          var e,
            n,
            a,
            s,
            u,
            c,
            d = t.id;
          o("WAWebCurrentUser").isEmployee() &&
            o("WALogger").LOG(
              v ||
                (v = babelHelpers.taggedTemplateLiteralLoose([
                  "[history sync] processing conversation ",
                  " with ",
                  " messages",
                ])),
              d,
              t.messages.length,
            );
          var m = o("WAWebWidFactory").createWid(d);
          if (m.isNewsletter()) return 0;
          var p = U(m, t);
          if (p.result === "skip-chat") return 0;
          if (p.result === "extracted") {
            var _ = p.accountLid;
            if (w.has(_))
              return (
                o("WALogger")
                  .ERROR(
                    S ||
                      (S = babelHelpers.taggedTemplateLiteralLoose([
                        "[history sync] handleInitialSyncMsgs: Found duplicated accountLid during initial sync",
                      ])),
                  )
                  .sendLogs("duplicated-account-lid-in-history-sync"),
                0
              );
            w.set(_, m);
          } else p.result;
          var f = m,
            g,
            h =
              o("WAWebHistorySyncLidChatGating").isForcedHistoryLidChat() &&
              m.isRegularUserPn() &&
              p.accountLid != null;
          if (
            (h &&
              p.accountLid != null &&
              (Z++,
              J.length < 3 &&
                J.push(m.toLogString() + " -> " + p.accountLid.toLogString()),
              (f = p.accountLid),
              (g = m.toString())),
            m.isUser())
          ) {
            if (m.isLid()) {
              var y = t.pnJid;
              y != null &&
                P.push({
                  lid: m,
                  pn: o("WAWebWidFactory").createUserWidOrThrow(y),
                });
              var C = t.displayName,
                b = t.shareOwnPn;
              if (C != null || b != null) {
                var I = {};
                (C != null && (I.displayNameLID = C),
                  b != null && (I.shareOwnPn = b),
                  D.push({ lid: m, data: I }));
              }
            } else if (t.lidJid != null) {
              var T = o("WAWebWidFactory").createUserLidOrThrow(t.lidJid);
              P.push({ lid: T, pn: m });
            }
          }
          var x = t.name;
          f.isBot() && x != null && x !== "" && K.push({ name: x, wid: f });
          var $ = [];
          W += t.messages.length;
          var q = [],
            V = new Set(),
            H = [];
          (t.messages.length === 0 && (N[d] = -1),
            r("isStringNullOrEmpty")(t.pHash) || (A[d] = t.pHash));
          var oe,
            ae = !1,
            ie = [],
            le = 0,
            se = 0;
          (t.messages.forEach(function (e, n) {
            var a, s, u, c;
            if (n === t.messages.length - 1) {
              var p = o("WALongInt").maybeNumberOrThrowIfTooLarge(e.msgOrderId);
              p != null && (N[d] = p);
            }
            var _ =
              (e == null ||
              (a = e.message) == null ||
              (a = a.message) == null ||
              (a = a.protocolMessage) == null
                ? void 0
                : a.type) ===
              o("WAWebProtobufsE2E.pb").Message$ProtocolMessage$Type
                .REQUEST_WELCOME_MESSAGE;
            if (_) {
              le++;
              return;
            }
            var g =
              (e == null ||
              (s = e.message) == null ||
              (s = s.message) == null ||
              (s = s.protocolMessage) == null
                ? void 0
                : s.type) ===
              o("WAWebProtobufsE2E.pb").Message$ProtocolMessage$Type
                .BOT_MEMU_ONBOARDING_MESSAGE;
            if (g) {
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
                f.isUser() &&
                t.systemMessageToInsert != null
              )
                switch (t.systemMessageToInsert) {
                  case o("WAWebProtobufsHistorySync.pb").PrivacySystemMessage
                    .E2EE_MSG: {
                    if (re) break;
                    var h = o(
                      "WAWebAdvHostedAccountTypeSystemMsg",
                    ).genAdvAccountTypeChangeNotificationMsg({
                      accountTypeChangedUser:
                        o("WAWebUserUtils").getMeUserOrThrow(),
                      chatId: f,
                      newAdvAccountType: o("WAWebProtobufsAdv.pb")
                        .ADVEncryptionType.E2EE,
                    });
                    (q.push(h),
                      o(
                        "WAWebBizCoexUtils",
                      ).sendWamCoexPrivacySysMsgHistorySyncInsert(h));
                    break;
                  }
                  case o("WAWebProtobufsHistorySync.pb").PrivacySystemMessage
                    .NE2EE_SELF: {
                    if (!re) break;
                    var y = o(
                      "WAWebAdvHostedAccountTypeSystemMsg",
                    ).genAdvAccountTypeSelfTransitionToCoexNotificationMsg(
                      f,
                      o("WAWebUserUtils").getMeUserOrThrow(),
                    );
                    (q.push(y),
                      o(
                        "WAWebBizCoexUtils",
                      ).sendWamCoexPrivacySysMsgHistorySyncInsert(y));
                    break;
                  }
                  case o("WAWebProtobufsHistorySync.pb").PrivacySystemMessage
                    .NE2EE_OTHER: {
                    var C = o(
                      "WAWebAdvHostedAccountTypeSystemMsg",
                    ).genAdvAccountTypeChangeNotificationMsg({
                      accountTypeChangedUser:
                        o("WAWebUserUtils").getMeUserOrThrow(),
                      chatId: f,
                      newAdvAccountType: o("WAWebProtobufsAdv.pb")
                        .ADVEncryptionType.HOSTED,
                    });
                    (q.push(C),
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
                  chunkInfo: i,
                  allLidMapping: X,
                  totalMissingMapping: Y,
                  historyLidPnMappings: l,
                  dbChatId: f,
                }),
                v =
                  ((u = e.message) == null ||
                  (u = u.message) == null ||
                  (u = u.commentMessage) == null
                    ? void 0
                    : u.targetMessageKey) == null,
                S = (b == null ? void 0 : b.associationType) != null;
              if (v) {
                var R;
                (b != null &&
                  V.has(b.id.toString()) &&
                  V.delete(b == null ? void 0 : b.id.toString()),
                  (b != null &&
                    b.type === o("WAWebMsgType").MSG_TYPE.INTERACTIVE &&
                    b.ctwaContext != null) ||
                    q.push(b));
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
                  o("WAWebCTWAGatingUtils").shouldGenerateAGMMsgs(
                    L,
                    I.fromMe,
                    f,
                  )
                ) {
                  var D,
                    x = new (r("WAWebMsgKey"))({
                      fromMe: !I.fromMe,
                      remote: f,
                      id: r("WAWebMsgKey").newId_DEPRECATED(),
                    }),
                    P = o(
                      "WAWebMsgAGMProcessing",
                    ).genHistoryAutomatedGreetingMsg({
                      msgKey: x,
                      ctwaContext: L,
                      to: k,
                      from: T,
                      msgTimestamp:
                        (D = e.message) == null ? void 0 : D.messageTimestamp,
                    });
                  q.push(P);
                }
              }
              if (b != null && S) {
                var M = b.parentMsgKey.toString();
                (V.add(M), H.push(b));
              }
              (($ = $.concat(
                o("WAWebAddonProcessMsgsUtils").parseHistorySyncMsg({
                  webMsgInfo: e.message,
                  parsedWebMsgInfo: b,
                  isFromCag: (c = t.isDefaultSubgroup) != null ? c : !1,
                }),
              )),
                (b == null ? void 0 : b.subtype) === "biz_bot_1p_disclosure" &&
                  (oe = o("WAWebBotTypes").BizBotType.BIZ_1P),
                (b == null ? void 0 : b.subtype) === "biz_bot_3p_disclosure" &&
                  (oe = o("WAWebBotTypes").BizBotType.BIZ_3P),
                (b == null ? void 0 : b.subtype) ===
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
                R ||
                  (R = babelHelpers.taggedTemplateLiteralLoose([
                    "[history sync] Dropped ",
                    " request welcome messages",
                  ])),
                le,
              ),
            se > 0 &&
              o("WALogger").LOG(
                L ||
                  (L = babelHelpers.taggedTemplateLiteralLoose([
                    "[history sync] Dropped ",
                    " memu onboarding messages",
                  ])),
                se,
              ));
          var ue;
          if (V.size > 0) {
            var ce = o(
              "WAWebProcessMessageAssociationMessages",
            ).classifyAssociatedMsgsFromHistorySyncUsingMissingParentsCache(
              H,
              V,
            );
            ce != null &&
              ce.validAssociatedMsgs &&
              (ue = o("WAWebApiFilterAndReplaceMessages").validateMsgFn(
                ce == null ? void 0 : ce.validAssociatedMsgs,
              ));
          }
          ((q = o(
            "WAWebApiFilterAndReplaceMessages",
          ).filterAndReplaceMessagesInitialHistorySync(q, ue)),
            (q = q.reverse()));
          var de = o(
            "WAWebLimitSharingProtoUtils",
          ).getAcp2SettingFromProtocolHistorySyncConversation(t);
          if (
            de != null &&
            (O.set(f.toString(), de),
            o("WAWebLimitSharingProtoUtils").shouldInjectAcp2HistorySyncNotice(
              de,
              f,
              q,
            ))
          ) {
            var me = babelHelpers.extends(
              {},
              o("WAWebContactSystemMsg").genAcp2UpdateSystemMsg(f, de),
              { t: Math.floor(Number(de.settingTimestamp) / 1e3) },
            );
            q.push(me);
          }
          var pe = t.contactPrimaryIdentityKey;
          if (pe && r("WAWebWid").isUser(f)) {
            var _e = o("WAWebSignalCommonUtils").bufferToStr(
              o("WAWebCryptoCurve25519").toSignalCurvePubKey(pe),
            );
            j.push({
              userId: o("WAWebWidFactory").asUserWidOrThrow(f),
              identityKey: _e,
              aeaAccountType: t.contactAccountEncryptionAttestationType,
              nonE2EeType: t.nonE2EeType,
            });
          }
          var fe = t.nonE2EeType;
          fe != null &&
            p.accountLid != null &&
            Q.push({ user: p.accountLid, nonE2EeType: fe });
          var ge, he, ye;
          if (((e = t.disappearingMode) == null ? void 0 : e.initiator) != null)
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
          if (((n = t.disappearingMode) == null ? void 0 : n.trigger) != null) {
            var Ce = o(
              "WAWebEphemeralityUtils",
            ).getDisappearingModeTriggerFromProtobuf(
              t.disappearingMode.trigger,
            );
            Ce != null && (he = Ce);
          }
          ((a = t.disappearingMode) == null ? void 0 : a.initiatedByMe) !=
            null && (ye = t.disappearingMode.initiatedByMe);
          var be = t.tcToken != null && t.tcTokenTimestamp != null;
          if (o("WAWebCurrentUser").isEmployee()) {
            var ve;
            o("WALogger").LOG(
              E ||
                (E = babelHelpers.taggedTemplateLiteralLoose([
                  "handleInitialSyncMsgs: incoming chat info: protobufChatId=",
                  ", dbChatId=",
                  ", ",
                  ", ",
                  "",
                ])),
              m,
              f,
              (ve = p.accountLid) != null ? ve : "n/a",
              f.isRegularUser()
                ? o("WAWebApiContact").getAlternateUserWid(
                    o("WAWebWidFactory").asUserWidOrThrow(f),
                  )
                : "n/a",
            );
          }
          var Se = p.accountLid,
            Re = {
              t: o("WALongInt").maybeNumberOrThrowIfTooLarge(
                (s = t.conversationTimestamp) != null ? s : t.lastMsgTimestamp,
              ),
              accountLid: Se,
              id: f,
              unreadCount: t.unreadCount,
              ephemeralDuration: t.ephemeralExpiration,
              ephemeralSettingTimestamp: t.ephemeralSettingTimestamp,
              disappearingModeInitiator: ge,
              disappearingModeTrigger: he,
              disappearingModeInitiatedByMe: ye,
              endOfHistoryTransferType:
                (u = t.endOfHistoryTransferType) != null
                  ? u
                  : o("WAWebChatConstants")
                      .ConversationEndOfHistoryTransferModelPropType.INCOMPLETE,
              name: t.name,
              notSpam: t.notSpam,
              isSenderNewAccount: t.isSenderNewAccount,
              isSenderSuspicious: t.isSenderSuspicious,
              pendingInitialLoading: !1,
              unreadMentionCount: t.unreadMentionCount,
              tcToken: be ? t.tcToken : null,
              tcTokenTimestamp: be ? t.tcTokenTimestamp : null,
              tcTokenSenderTimestamp: t.tcTokenSenderTimestamp,
              bizBotSystemMsgType: oe,
              hasCtwaConsumerDataSharingDisclosureSystemMsg: ae || void 0,
              isLocked: t.locked,
              limitSharing: o(
                "WAWebLimitSharingProtoUtils",
              ).getLimitSharingFromProtocolHistorySyncConversation(t),
              capiThreadControl: G(t.maibaAiThreadEnabled),
              historyChatId: g,
            };
          if (
            (f.isLid() && (Re.lidOriginType = z(t.lidOriginType)),
            t.archived != null && (Re.archive = t.archived),
            t.authAgentParentCompanyName != null)
          ) {
            var Le;
            ((Re.parentCompanyName = t.authAgentParentCompanyName),
              (Re.obaPhoneNumber =
                (Le = t.authAgentObaPhoneNumber) != null ? Le : ""));
          }
          ((c = ie) != null &&
            c.length &&
            (Re.mmSignalSharingExpirationWindow = o(
              "WAWebMmSignalSharingExpirationWindowUtils",
            ).getSortedMmSignalSharingExpirationWindowFromHistorySync(ie)),
            ne.push(
              o("WAWebHistorySyncNotificationUtils")
                .saveGroupMetadataForLeftGroup(t, Re.id)
                .catch(function (e) {
                  o("WALogger")
                    .WARN(
                      k ||
                        (k = babelHelpers.taggedTemplateLiteralLoose([
                          "[history sync] history_sync_notification_handler: saveGroupMetadataForLeftGroup failed",
                        ])),
                    )
                    .tags("history-sync");
                }),
            ));
          var Ee = f.toString(),
            ke = B.has(d);
          ke ? ee++ : B.add(d);
          var Ie = Object.prototype.hasOwnProperty.call(M, Ee);
          (Ie ? te++ : ke || F.push(Re),
            (M[Ee] = { chatInfo: Re, msgs: q, unifiedAddons: $ }));
        },
        ae;
      for (var ie of $.conversations) ae = await oe(ie);
      (Z > 0 &&
        o("WALogger").LOG(
          u ||
            (u = babelHelpers.taggedTemplateLiteralLoose([
              "[history sync] overriding ",
              " chat ids => ",
              "",
            ])),
          Z,
          J,
        ),
        ee > 0 &&
          o("WALogger").LOG(
            c ||
              (c = babelHelpers.taggedTemplateLiteralLoose([
                "[history sync] found ",
                " duplicated protobuf conversation ids during initial sync",
              ])),
            ee,
          ),
        te > 0 &&
          o("WALogger").LOG(
            d ||
              (d = babelHelpers.taggedTemplateLiteralLoose([
                "[history sync] found ",
                " duplicated db conversation ids during initial sync",
              ])),
            te,
          ));
      for (var le of $.accounts) {
        var se = V(le);
        se && x.push(se);
      }
      var ue = o("WAWebHistorySyncLogUtils").getHistorySyncLogDetailsString(
        i,
        W,
        F.length,
      );
      (o("WALogger")
        .LOG(
          m ||
            (m = babelHelpers.taggedTemplateLiteralLoose([
              "[history sync][initial bootstrap] preprocessing completed, ",
              "",
            ])),
          ue,
        )
        .tags("history-sync"),
        P.length > 0 &&
          (o("WALogger").LOG(
            p ||
              (p = babelHelpers.taggedTemplateLiteralLoose([
                "[history sync] saving ",
                " LIDxPN mappings obtained from conversations",
              ])),
            P.length,
          ),
          await o("WAWebDBCreateLidPnMappings").createLidPnMappings({
            mappings: P,
            write: "now",
            identityChangeHandlingEnabled: !1,
            learningSource: "history-msg-handler",
          })),
        (T.mdBootstrapMessagesCount = W),
        (T.mdBootstrapChatsCount = $.conversations.length),
        o("WAWebHistorySyncNotificationUtils").commitHistoryDownloadedMetric({
          chunkDownloadFinishTimestamp: a,
          historySyncDownloadMetric: T,
          isSuccess: !0,
          startTs: i.historySyncStepStartedTs,
        }),
        r("WAWebSyncBootstrap").markInitialHistorySyncCountDebugStats(
          W,
          F.length,
        ));
      var ce = 0,
        de = [],
        me = [];
      (j.forEach(function (e) {
        var t = e.aeaAccountType,
          n = e.identityKey,
          r = e.nonE2EeType,
          a = e.userId;
        !a.isLid() &&
          o("WAWebApiContact").getCurrentLid(a) == null &&
          a.isRegularUser() &&
          ce++;
        try {
          var i = o("WAWebSignalCommonUtils").createSignalAddress(a).toString();
          o("WAWebUserUtils").isMeAccount(a)
            ? o("WAWebHistorySyncNotificationUtils")
                .checkSelfHistorySyncIdentity(i, n)
                .catch(function () {
                  o("WALogger")
                    .ERROR(
                      _ ||
                        (_ = babelHelpers.taggedTemplateLiteralLoose(
                          [
                            "[history sync] handleInitialSyncMsgs: can't save the identity key.",
                          ],
                          [
                            "[history sync] handleInitialSyncMsgs: can\\'t save the identity key.",
                          ],
                        )),
                    )
                    .sendLogs("failed-self-identity-check-from-history-sync");
                })
            : (de.push({ identifier: i, identityKey: n }),
              t != null &&
                me.push({
                  user: a,
                  identityKey: n,
                  accountType: t,
                  nonE2EeType: r,
                }));
        } catch (e) {
          o("WALogger").ERROR(
            f ||
              (f = babelHelpers.taggedTemplateLiteralLoose(
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
        await o("WAWebSignalProtocolStore")
          .getPersistSignalProtocolStore()
          .bulkCreateIdentity(de),
        ce > 0 &&
          o("WALogger")
            .ERROR(
              g ||
                (g = babelHelpers.taggedTemplateLiteralLoose([
                  "[history sync] handleInitialSyncMsgs: there are Identities with missing LIDs: ",
                  "",
                ])),
              ce,
            )
            .sendLogs(
              "handleInitialSyncMsgs: there are Identities with missing LIDs",
              { sampling: 0.01 },
            ));
      try {
        await Promise.all(ne);
      } catch (e) {
        o("WALogger")
          .WARN(
            h ||
              (h = babelHelpers.taggedTemplateLiteralLoose([
                "[history sync] handleInitialSyncMsgs: saving group metadata failed",
              ])),
          )
          .tags("history-sync");
      }
      (await o(
        "WAWebSeedBotProfilesFromHistorySync",
      ).seedBotProfilesFromHistorySync(K),
        await r("WAWebHandleAddChats")(F),
        await (n("cr:21347") == null
          ? void 0
          : n("cr:21347").applyAeaHistoryChatTypes(Q)),
        await o("WAWebLimitSharingProtoUtils").applyAcp2HistorySyncAdoptions(O),
        await q(M, ue),
        await (n("cr:21347") == null
          ? void 0
          : n("cr:21347").applyAeaHistoryAccountStates(me)),
        await o("WAWebApiHistorySyncNotification").updateCurrentlyProcessed(
          i.msgKey,
          i.syncType,
          i.chunkOrder,
        ),
        o("WALogger")
          .LOG(
            y ||
              (y = babelHelpers.taggedTemplateLiteralLoose([
                "[history sync][initial bootstrap] data applied, ",
                "",
              ])),
            ue,
          )
          .tags("history-sync"),
        o("WAWebHistorySyncNotificationUtils").commitHistoryDataAppliedMetric({
          historySyncDataAppliedMetric: I,
          startTs: i.historySyncStepStartedTs,
          isSuccess: !0,
          forceFlushWamBuffer: !0,
        }),
        o("WALogger").LOG(
          C ||
            (C = babelHelpers.taggedTemplateLiteralLoose([
              "[history sync] storing initial sync messages complete, ",
              "",
            ])),
          o("WAWebHistorySyncLogUtils").getHistorySyncLogDetailsString(
            i,
            W,
            F.length,
          ),
        ),
        o("WALogger").LOG(
          b ||
            (b = babelHelpers.taggedTemplateLiteralLoose([
              "[history sync] set history initial sync boundary with length ",
              "",
            ])),
          Object.keys(N).length,
        ),
        await Promise.all([
          o(
            "WAWebHistorySyncNotificationUtils",
          ).handleChatThreadLoggingMetadata($),
          o("WAWebUserPrefsHistorySync").setHistoryInitialSyncBoundary(N),
          $.companionMetaNonce != null
            ? o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.set(
                "WAWebCompanionMetaNonce",
                $.companionMetaNonce,
              )
            : null,
          H($.nctSalt),
        ]),
        o("WAWebUserPrefsModelStorage").setInitialGroupPhash(A),
        o("WAWebHistorySyncNotificationCommonUtils").reportMissingMapping(Y));
    }
    async function B(e) {
      var t = e.chunkDownloadFinishTimestamp,
        n = e.chunkInfo,
        r = e.historySyncDataAppliedMetric,
        a = e.historySyncDownloadMetric,
        i = e.proto;
      (o("WALogger").LOG(
        I ||
          (I = babelHelpers.taggedTemplateLiteralLoose([
            "[history sync] processing history non blocking data",
          ])),
      ),
        o("WAWebHistorySyncNotificationUtils").commitHistoryDownloadedMetric({
          chunkDownloadFinishTimestamp: t,
          historySyncDownloadMetric: a,
          isSuccess: !0,
          startTs: n.historySyncStepStartedTs,
        }),
        i.pastParticipants != null &&
          i.pastParticipants.length > 0 &&
          (await o("WAWebHistorySyncNotificationUtils").processPastParticipants(
            i,
            n,
          )),
        i.callLogRecords != null &&
          i.callLogRecords.length > 0 &&
          (await W(i, n)),
        i.conversations != null &&
          (await o("WAWebMemberLabelHistorySync").processMemberLabels(i)),
        o("WAWebHistorySyncStickers").processRecentStickers(i, n),
        o("WAWebHistorySyncNotificationUtils").commitHistoryDataAppliedMetric({
          historySyncDataAppliedMetric: r,
          startTs: n.historySyncStepStartedTs,
          isSuccess: !0,
        }));
    }
    async function W(e, t) {
      (o("WALogger").LOG(
        T ||
          (T = babelHelpers.taggedTemplateLiteralLoose([
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
        await Promise.all(
          e.callLogRecords.map(async function (e) {
            await o(
              "WAWebVoipActionWriteCallLogSync",
            ).generateCallLogFromCallSyncRecord({
              callLogRecord: e,
              fromHistorySync: !0,
            });
          }),
        ),
        o("WALogger").LOG(
          D ||
            (D = babelHelpers.taggedTemplateLiteralLoose([
              "[history sync] storing call log records complete, ",
              "",
            ])),
          o("WAWebHistorySyncLogUtils").getHistorySyncLogDetailsString(
            t,
            e.callLogRecords.length,
          ),
        ));
    }
    function q(e, t) {
      if (o("WAWebCallsOnlyGating").isCallsOnlyModeEnabled())
        return Promise.resolve();
      var n = { add: "last", isHistory: !0 },
        a = Object.keys(e).map(function (t) {
          return o("WAWebBackendApi").frontendSendAndReceive(
            "processMultipleMessages",
            {
              chatId: o("WAWebWidFactory").createWid(t),
              msgObjs: e[t].msgs,
              meta: n,
              processMessagesOrigin: "historyMsgHandlerAction",
              chatMsgsCollection: null,
            },
          );
        });
      return Promise.all(
        [].concat(a, [
          o("WAWebDBProcessInitialHistorySyncMessage").storeInitialSyncMessages(
            e,
            t,
          ),
        ]),
      )
        .then(function () {
          var t,
            n = (t = Array.prototype).concat.apply(
              t,
              Object.keys(e).map(function (t) {
                return e[t].msgs.map(function (e) {
                  return e.id.toString();
                });
              }),
            );
          o("WAWebCheckUpdateOrphanReactions")
            .checkUpdateForOrphanReactions(n)
            .catch(function () {
              o("WALogger")
                .ERROR(
                  x ||
                    (x = babelHelpers.taggedTemplateLiteralLoose([
                      "[history sync] Failed update for orphan reactions",
                    ])),
                )
                .sendLogs("failed-update-for-orphan-reactions");
            });
          var r = Object.keys(e).flatMap(function (t) {
            return e[t].msgs.flatMap(function (e) {
              var t;
              return ((t = e.threadIds) != null ? t : []).map(function (e) {
                return e.toString();
              });
            });
          });
          return o("WAWebSyncdOrphan").checkOrphanMutations(
            n,
            Object.keys(e),
            r,
          );
        })
        .then(async function () {
          var t = Object.keys(e).flatMap(function (t) {
            return e[t].msgs;
          });
          (await o(
            "WAWebDBDrainBotOrphansForHistoryMsgs",
          ).drainBotOrphansForHistoryMsgs(t),
            await o(
              "WAWebDBAssociatedMsgsAttachDetachAPI",
            ).attachDetachedChildrenAfterHistorySync(t));
        })
        .then(function () {
          var t;
          return Promise.all(
            (t = Array.prototype).concat.apply(
              t,
              Object.keys(e).map(function (t) {
                return e[t].unifiedAddons;
              }),
            ),
          ).then(function (e) {
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
              $ ||
                ($ = babelHelpers.taggedTemplateLiteralLoose([
                  "[history sync] error occurred",
                ])),
            )
            .catching(r("getErrorSafe")(e))
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
              P ||
                (P = babelHelpers.taggedTemplateLiteralLoose([
                  "[history sync] handleInitialSyncMsgs: Migrated account not sending accountLid for a PN chat in history sync",
                ])),
            )
            .sendLogs("missing-account-lid-in-history-sync"),
          { result: "skip-chat" });
    }
    function V(e) {
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
                  N ||
                    (N = babelHelpers.taggedTemplateLiteralLoose([
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
                  M ||
                    (M = babelHelpers.taggedTemplateLiteralLoose([
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
    function H(e) {
      return e != null
        ? (o("WALogger").LOG(
            w ||
              (w = babelHelpers.taggedTemplateLiteralLoose([
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
    function z(e) {
      if (e != null) {
        var t = o("WAWebUsernameTypes").LidOriginType.cast(e);
        return t == null
          ? (o("WALogger")
              .ERROR(
                A ||
                  (A = babelHelpers.taggedTemplateLiteralLoose([
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
                  F ||
                    (F = babelHelpers.taggedTemplateLiteralLoose([
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
    ((l.handleInitialSyncMsgs = O),
      (l.handleNonBlockingData = B),
      (l.getUsernameUpdate = V),
      (l.storeNctSaltFromHistorySync = H),
      (l.getCapiThreadControlForHistorySync = G),
      (l.determineLidOriginTypeForHistorySync = z));
  },
  98,
);
