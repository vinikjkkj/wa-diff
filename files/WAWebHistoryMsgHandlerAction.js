__d(
  "WAWebHistoryMsgHandlerAction",
  [
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
      M;
    async function w(t, n, a, i, l, L, E, k) {
      o("WALogger").LOG(
        e ||
          (e = babelHelpers.taggedTemplateLiteralLoose([
            "[history sync] starts hanlding initial sync msgs",
          ])),
      );
      var I = [],
        T = {},
        D = {},
        x = new Map(),
        $ = {},
        P = [],
        N = new Set(),
        M = 0,
        w = [],
        A = o(
          "WAWebHistorySyncNotificationCommonUtils",
        ).getLidMappingAsStringSet(k);
      o("WAWebCurrentUser").isEmployee() &&
        o("WALogger")
          .LOG(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "first lid mappings for initial sync. count: ",
                ". ",
                "...",
              ])),
            A == null ? void 0 : A.size,
            o("WAWebHistorySyncNotificationCommonUtils").getLidsForLogging(A),
          )
          .verbose();
      var F = new Map(),
        V = [],
        H = 0,
        G = 0,
        z = 0,
        j =
          o(
            "WAWebBizCoexGatingUtils",
          ).smbHostedLazySystemMsgInsertInHistorySyncEnabled() &&
          (await o("WAWebUserPrefsMultiDevice").getIsHostedMeAccount()) === !0,
        K = async function (t) {
          var e,
            i,
            l,
            s,
            u = t.id;
          o("WAWebCurrentUser").isEmployee() &&
            o("WALogger").LOG(
              y ||
                (y = babelHelpers.taggedTemplateLiteralLoose([
                  "[history sync] processing conversation ",
                  " with ",
                  " messages",
                ])),
              u,
              t.messages.length,
            );
          var c = o("WAWebWidFactory").createWid(u);
          if (c.isNewsletter()) return 0;
          var d = B(c, t);
          if (d.result === "skip-chat") return 0;
          if (d.result === "extracted") {
            var m = d.accountLid;
            if (x.has(m))
              return (
                o("WALogger")
                  .ERROR(
                    C ||
                      (C = babelHelpers.taggedTemplateLiteralLoose([
                        "[history sync] handleInitialSyncMsgs: Found duplicated accountLid during initial sync",
                      ])),
                  )
                  .sendLogs("duplicated-account-lid-in-history-sync"),
                0
              );
            x.set(m, c);
          } else d.result;
          var p = c,
            _,
            f =
              o("WAWebHistorySyncLidChatGating").isForcedHistoryLidChat() &&
              c.isRegularUserPn() &&
              d.accountLid != null;
          if (
            (f &&
              d.accountLid != null &&
              (H++,
              V.length < 3 &&
                V.push(c.toLogString() + " -> " + d.accountLid.toLogString()),
              (p = d.accountLid),
              (_ = c.toString())),
            c.isUser())
          ) {
            if (c.isLid()) {
              var g = t.pnJid;
              g != null &&
                I.push({
                  lid: c,
                  pn: o("WAWebWidFactory").createUserWidOrThrow(g),
                });
              var h = t.displayName,
                L = t.shareOwnPn;
              if (h != null || L != null) {
                var E = {};
                (h != null && (E.displayNameLID = h),
                  L != null && (E.shareOwnPn = L),
                  a.push({ lid: c, data: E }));
              }
            } else if (t.lidJid != null) {
              var O = o("WAWebWidFactory").createUserLidOrThrow(t.lidJid);
              I.push({ lid: O, pn: c });
            }
          }
          var W = [];
          M += t.messages.length;
          var q = [],
            K = new Set(),
            Q = [];
          (t.messages.length === 0 && (T[u] = -1),
            r("isStringNullOrEmpty")(t.pHash) || ($[u] = t.pHash));
          var X,
            Y = [],
            J = 0,
            Z = 0;
          (t.messages.forEach(function (e, a) {
            var i, l, s, d;
            if (a === t.messages.length - 1) {
              var m = o("WALongInt").maybeNumberOrThrowIfTooLarge(e.msgOrderId);
              m != null && (T[u] = m);
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
            var f =
              (e == null ||
              (l = e.message) == null ||
              (l = l.message) == null ||
              (l = l.protocolMessage) == null
                ? void 0
                : l.type) ===
              o("WAWebProtobufsE2E.pb").Message$ProtocolMessage$Type
                .BOT_MEMU_ONBOARDING_MESSAGE;
            if (f) {
              Z++;
              return;
            }
            if (
              o("WAWebMobilePlatforms").isSMB() &&
              o(
                "WAWebBizCoexGatingUtils",
              ).smbHostedLazySystemMsgInsertInHistorySyncEnabled() &&
              a === 0 &&
              p.isUser() &&
              t.systemMessageToInsert != null
            )
              switch (t.systemMessageToInsert) {
                case o("WAWebProtobufsHistorySync.pb").PrivacySystemMessage
                  .E2EE_MSG: {
                  if (j) break;
                  var g = o(
                    "WAWebAdvHostedAccountTypeSystemMsg",
                  ).genAdvAccountTypeChangeNotificationMsg(
                    p,
                    o("WAWebUserPrefsMeUser").getMeUser(),
                    o("WAWebProtobufsAdv.pb").ADVEncryptionType.E2EE,
                  );
                  (q.push(g),
                    o(
                      "WAWebBizCoexUtils",
                    ).sendWamCoexPrivacySysMsgHistorySyncInsert(g));
                  break;
                }
                case o("WAWebProtobufsHistorySync.pb").PrivacySystemMessage
                  .NE2EE_SELF: {
                  if (!j) break;
                  var h = o(
                    "WAWebAdvHostedAccountTypeSystemMsg",
                  ).genAdvAccountTypeSelfTransitionToCoexNotificationMsg(
                    p,
                    o("WAWebUserPrefsMeUser").getMeUser(),
                  );
                  (q.push(h),
                    o(
                      "WAWebBizCoexUtils",
                    ).sendWamCoexPrivacySysMsgHistorySyncInsert(h));
                  break;
                }
                case o("WAWebProtobufsHistorySync.pb").PrivacySystemMessage
                  .NE2EE_OTHER: {
                  var y = o(
                    "WAWebAdvHostedAccountTypeSystemMsg",
                  ).genAdvAccountTypeChangeNotificationMsg(
                    p,
                    o("WAWebUserPrefsMeUser").getMeUser(),
                    o("WAWebProtobufsAdv.pb").ADVEncryptionType.HOSTED,
                  );
                  (q.push(y),
                    o(
                      "WAWebBizCoexUtils",
                    ).sendWamCoexPrivacySysMsgHistorySyncInsert(y));
                }
              }
            var C = o(
                "WAWebHistorySyncNotificationCommonUtils",
              ).parseWebMsgInfoAndReturnNullOnFailure({
                protobufChatId: c,
                message: e.message,
                chunkInfo: n,
                allLidMapping: A,
                totalMissingMapping: F,
                historyLidPnMappings: k,
                dbChatId: p,
              }),
              b =
                ((s = e.message) == null ||
                (s = s.message) == null ||
                (s = s.commentMessage) == null
                  ? void 0
                  : s.targetMessageKey) == null,
              v = (C == null ? void 0 : C.associationType) != null;
            if (b) {
              var S;
              (C != null &&
                K.has(C.id.toString()) &&
                o(
                  "WAWebMessageAssociationGatingUtils",
                ).isMessageAssociationInfraEnabled() &&
                K.delete(C == null ? void 0 : C.id.toString()),
                (C != null &&
                  C.type === o("WAWebMsgType").MSG_TYPE.INTERACTIVE &&
                  C.ctwaContext != null) ||
                  q.push(C));
              var R =
                  (S = e.message) == null ||
                  (S = S.message) == null ||
                  (S = S.extendedTextMessage) == null ||
                  (S = S.contextInfo) == null
                    ? void 0
                    : S.externalAdReply,
                L = C != null ? C : {},
                E = L.from,
                I = L.id,
                D = L.to;
              if (
                R != null &&
                (I == null ? void 0 : I.fromMe) != null &&
                E != null &&
                D != null &&
                o("WAWebBizGatingUtils").shouldGenerateAGMMsgs(R)
              ) {
                var x,
                  $ = new (r("WAWebMsgKey"))({
                    fromMe: !I.fromMe,
                    remote: p,
                    id: r("WAWebMsgKey").newId_DEPRECATED(),
                  }),
                  P = o("WAWebMsgAGMProcessing").genHistoryAutomatedGreetingMsg(
                    {
                      msgKey: $,
                      ctwaContext: R,
                      to: E,
                      from: D,
                      msgTimestamp:
                        (x = e.message) == null ? void 0 : x.messageTimestamp,
                    },
                  );
                q.push(P);
              }
            }
            if (
              C != null &&
              v &&
              o(
                "WAWebMessageAssociationGatingUtils",
              ).isMessageAssociationInfraEnabled()
            ) {
              var N = C.parentMsgKey.toString();
              (K.add(N), Q.push(C));
            }
            ((W = W.concat(
              o("WAWebAddonProcessMsgsUtils").parseHistorySyncMsg({
                webMsgInfo: e.message,
                parsedWebMsgInfo: C,
                isFromCag: (d = t.isDefaultSubgroup) != null ? d : !1,
              }),
            )),
              (C == null ? void 0 : C.subtype) === "biz_bot_1p_disclosure" &&
                (X = o("WAWebBotTypes").BizBotType.BIZ_1P),
              (C == null ? void 0 : C.subtype) === "biz_bot_3p_disclosure" &&
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
                b ||
                  (b = babelHelpers.taggedTemplateLiteralLoose([
                    "[history sync] Dropped ",
                    " request welcome messages",
                  ])),
                J,
              ),
            Z > 0 &&
              o("WALogger").LOG(
                v ||
                  (v = babelHelpers.taggedTemplateLiteralLoose([
                    "[history sync] Dropped ",
                    " memu onboarding messages",
                  ])),
                Z,
              ));
          var ee;
          if (
            K.size > 0 &&
            o(
              "WAWebMessageAssociationGatingUtils",
            ).isMessageAssociationInfraEnabled()
          ) {
            var te = o(
              "WAWebProcessMessageAssociationMessages",
            ).classifyAssociatedMsgsFromHistorySyncUsingMissingParentsCache(
              Q,
              K,
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
          var ne = t.contactPrimaryIdentityKey;
          if (ne && r("WAWebWid").isUser(p)) {
            var re = o("WAWebSignalCommonUtils").bufferToStr(
              o("WAWebCryptoCurve25519").toSignalCurvePubKey(ne),
            );
            w.push({
              userId: o("WAWebWidFactory").asUserWidOrThrow(p),
              identityKey: re,
            });
          }
          var oe, ae, ie;
          if (((e = t.disappearingMode) == null ? void 0 : e.initiator) != null)
            switch (t.disappearingMode.initiator) {
              case o("WAWebProtobufsE2E.pb").DisappearingMode$Initiator
                .CHANGED_IN_CHAT:
                ((oe = o("WAWebEphemeralityTypes").DisappearingModeInitiator
                  .ChangedInChat),
                  (ae = o("WAWebEphemeralityTypes").DisappearingModeTrigger
                    .ChatSettings));
                break;
              case o("WAWebProtobufsE2E.pb").DisappearingMode$Initiator
                .INITIATED_BY_ME:
                ((oe = o("WAWebEphemeralityTypes").DisappearingModeInitiator
                  .InitiatedByMe),
                  (ae = o("WAWebEphemeralityTypes").DisappearingModeTrigger
                    .AccountSettings),
                  (ie = !0));
                break;
              case o("WAWebProtobufsE2E.pb").DisappearingMode$Initiator
                .INITIATED_BY_OTHER:
              case o("WAWebProtobufsE2E.pb").DisappearingMode$Initiator
                .BIZ_UPGRADE_FB_HOSTING:
                ((oe = o("WAWebEphemeralityTypes").DisappearingModeInitiator
                  .InitiatedByOther),
                  (ae = o("WAWebEphemeralityTypes").DisappearingModeTrigger
                    .AccountSettings),
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
              ((le = t.disappearingMode) == null ? void 0 : le.trigger) != null
            ) {
              var ue = o(
                "WAWebEphemeralityUtils",
              ).getDisappearingModeTriggerFromProtobuf(
                t.disappearingMode.trigger,
              );
              ue != null && (ae = ue);
            }
            ((se = t.disappearingMode) == null ? void 0 : se.initiatedByMe) !=
              null && (ie = t.disappearingMode.initiatedByMe);
          }
          var ce = t.tcToken != null && t.tcTokenTimestamp != null;
          if (o("WAWebCurrentUser").isEmployee()) {
            var de;
            o("WALogger").LOG(
              S ||
                (S = babelHelpers.taggedTemplateLiteralLoose([
                  "handleInitialSyncMsgs: incoming chat info: protobufChatId=",
                  ", dbChatId=",
                  ", ",
                  ", ",
                  "",
                ])),
              c,
              p,
              (de = d.accountLid) != null ? de : "n/a",
              p.isRegularUser()
                ? o("WAWebApiContact").getAlternateUserWid(
                    o("WAWebWidFactory").asUserWidOrThrow(p),
                  )
                : "n/a",
            );
          }
          var me = d.accountLid,
            pe = {
              t: o("WALongInt").maybeNumberOrThrowIfTooLarge(
                (i = t.conversationTimestamp) != null ? i : t.lastMsgTimestamp,
              ),
              accountLid: me,
              id: p,
              unreadCount: t.unreadCount,
              ephemeralDuration: t.ephemeralExpiration,
              ephemeralSettingTimestamp: t.ephemeralSettingTimestamp,
              disappearingModeInitiator: oe,
              disappearingModeTrigger: ae,
              disappearingModeInitiatedByMe: ie,
              endOfHistoryTransferType:
                (l = t.endOfHistoryTransferType) != null
                  ? l
                  : o("WAWebChatConstants")
                      .ConversationEndOfHistoryTransferModelPropType.INCOMPLETE,
              name: t.name,
              notSpam: t.notSpam,
              isSenderNewAccount: t.isSenderNewAccount,
              isSenderSuspicious: t.isSenderSuspicious,
              pendingInitialLoading: !1,
              unreadMentionCount: t.unreadMentionCount,
              tcToken: ce ? t.tcToken : null,
              tcTokenTimestamp: ce ? t.tcTokenTimestamp : null,
              tcTokenSenderTimestamp: t.tcTokenSenderTimestamp,
              bizBotSystemMsgType: X,
              isLocked: t.locked,
              limitSharing: o(
                "WAWebLimitSharingProtoUtils",
              ).getLimitSharingFromProtocolHistorySyncConversation(t),
              capiThreadControl: o(
                "WAWebBizAiAgentGating",
              ).isAiAgentThreadStatusHistorySyncEnabled()
                ? t.maibaAiThreadEnabled === !0
                  ? o("WAWebProtobufsE2E.pb")
                      .Message$CloudAPIThreadControlNotification$CloudAPIThreadControl
                      .CONTROL_TAKEN
                  : t.maibaAiThreadEnabled === !1
                    ? o("WAWebProtobufsE2E.pb")
                        .Message$CloudAPIThreadControlNotification$CloudAPIThreadControl
                        .CONTROL_PASSED
                    : t.maibaAiThreadEnabled === void 0
                      ? o("WAWebProtobufsE2E.pb")
                          .Message$CloudAPIThreadControlNotification$CloudAPIThreadControl
                          .UNKNOWN
                      : (function () {
                          throw Error(
                            "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                              t.maibaAiThreadEnabled,
                          );
                        })()
                : o("WAWebProtobufsE2E.pb")
                    .Message$CloudAPIThreadControlNotification$CloudAPIThreadControl
                    .UNKNOWN,
              historyChatId: _,
            };
          if (
            (p.isLid() && (pe.lidOriginType = U(t.lidOriginType)),
            t.archived != null && (pe.archive = t.archived),
            t.authAgentParentCompanyName != null &&
              o("WAWebBizCoexGatingUtils").authorizedAgentsEnabled())
          ) {
            var _e;
            ((pe.parentCompanyName = t.authAgentParentCompanyName),
              (pe.obaPhoneNumber =
                (_e = t.authAgentObaPhoneNumber) != null ? _e : ""));
          }
          (s = Y) != null &&
            s.length &&
            (pe.mmSignalSharingExpirationWindow = o(
              "WAWebMmSignalSharingExpirationWindowUtils",
            ).getSortedMmSignalSharingExpirationWindowFromHistorySync(Y));
          try {
            o(
              "WAWebHistorySyncNotificationUtils",
            ).saveGroupMetadataForLeftGroup(t, pe.id);
          } catch (e) {
            o("WALogger")
              .WARN(
                R ||
                  (R = babelHelpers.taggedTemplateLiteralLoose([
                    "[history sync] history_sync_notification_handler: saveGroupMetadataForLeftGroup failed",
                  ])),
              )
              .tags("history-sync");
          }
          var fe = p.toString(),
            ge = N.has(u);
          ge ? G++ : N.add(u);
          var he = Object.prototype.hasOwnProperty.call(D, fe);
          (he ? z++ : ge || P.push(pe),
            (D[fe] = { chatInfo: pe, msgs: q, unifiedAddons: W }));
        },
        Q;
      for (var X of t.conversations) Q = await K(X);
      (H > 0 &&
        o("WALogger").LOG(
          u ||
            (u = babelHelpers.taggedTemplateLiteralLoose([
              "[history sync] overriding ",
              " chat ids => ",
              "",
            ])),
          H,
          V,
        ),
        G > 0 &&
          o("WALogger").LOG(
            c ||
              (c = babelHelpers.taggedTemplateLiteralLoose([
                "[history sync] found ",
                " duplicated protobuf conversation ids during initial sync",
              ])),
            G,
          ),
        z > 0 &&
          o("WALogger").LOG(
            d ||
              (d = babelHelpers.taggedTemplateLiteralLoose([
                "[history sync] found ",
                " duplicated db conversation ids during initial sync",
              ])),
            z,
          ));
      for (var Y of t.accounts) {
        var J = W(Y);
        J && E.push(J);
      }
      (I.length > 0 &&
        (o("WALogger").LOG(
          m ||
            (m = babelHelpers.taggedTemplateLiteralLoose([
              "[history sync] saving ",
              " LIDxPN mappings obtained from conversations",
            ])),
          I.length,
        ),
        await o("WAWebDBCreateLidPnMappings").createLidPnMappings({
          mappings: I,
          flushImmediately: !0,
          identityChangeHandlingEnabled: !1,
          learningSource: "other",
        })),
        (i.mdBootstrapMessagesCount = M),
        (i.mdBootstrapChatsCount = t.conversations.length),
        o("WAWebHistorySyncNotificationUtils").commitHistoryDownloadedMetric({
          chunkDownloadFinishTimestamp: L,
          historySyncDownloadMetric: i,
          isSuccess: !0,
          startTs: n.historySyncStepStartedTs,
        }),
        r("WAWebSyncBootstrap").markInitialHistorySyncCountDebugStats(
          M,
          P.length,
        ));
      var Z = 0,
        ee = [];
      (w.forEach(function (e) {
        var t = e.identityKey,
          n = e.userId;
        !n.isLid() &&
          o("WAWebApiContact").getCurrentLid(n) == null &&
          n.isRegularUser() &&
          Z++;
        try {
          var r = o("WAWebSignalCommonUtils").createSignalAddress(n).toString();
          n.equals(o("WAWebUserPrefsMeUser").getMeUser())
            ? o("WAWebHistorySyncNotificationUtils")
                .checkSelfHistorySyncIdentity(r, t)
                .catch(function () {
                  o("WALogger")
                    .ERROR(
                      p ||
                        (p = babelHelpers.taggedTemplateLiteralLoose(
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
            : ee.push({ identifier: r, identityKey: t });
        } catch (e) {
          o("WALogger").ERROR(
            _ ||
              (_ = babelHelpers.taggedTemplateLiteralLoose(
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
          .bulkCreateIdentity(ee),
        Z > 0 &&
          o("WALogger")
            .ERROR(
              f ||
                (f = babelHelpers.taggedTemplateLiteralLoose([
                  "[history sync] handleInitialSyncMsgs: there are Identities with missing LIDs: ",
                  "",
                ])),
              Z,
            )
            .sendLogs(
              "handleInitialSyncMsgs: there are Identities with missing LIDs",
              { sampling: 0.01 },
            ),
        await r("WAWebHandleAddChats")(P),
        await O(D),
        await o("WAWebApiHistorySyncNotification").updateCurrentlyProcessed(
          n.msgKey,
          n.syncType,
          n.chunkOrder,
        ),
        o("WAWebHistorySyncNotificationUtils").commitHistoryDataAppliedMetric({
          historySyncDataAppliedMetric: l,
          startTs: n.historySyncStepStartedTs,
          isSuccess: !0,
          forceFlushWamBuffer: !0,
        }),
        o("WALogger").LOG(
          g ||
            (g = babelHelpers.taggedTemplateLiteralLoose([
              "[history sync] storing initial sync messages complete, ",
              "",
            ])),
          o("WAWebHistorySyncLogUtils").getHistorySyncLogDetailsString(
            n,
            M,
            P.length,
          ),
        ),
        o("WALogger").LOG(
          h ||
            (h = babelHelpers.taggedTemplateLiteralLoose([
              "[history sync] set history initial sync boundary with length ",
              "",
            ])),
          Object.keys(T).length,
        ),
        await Promise.all([
          o(
            "WAWebHistorySyncNotificationUtils",
          ).handleChatThreadLoggingMetadata(t),
          o("WAWebUserPrefsHistorySync").setHistoryInitialSyncBoundary(T),
          t.companionMetaNonce != null
            ? o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.set(
                "WAWebCompanionMetaNonce",
                t.companionMetaNonce,
              )
            : null,
          q(t.nctSalt),
        ]),
        o("WAWebUserPrefsModelStorage").setInitialGroupPhash($),
        o("WAWebHistorySyncNotificationCommonUtils").reportMissingMapping(F));
    }
    async function A(e, t, n, r, a) {
      (o("WALogger").LOG(
        L ||
          (L = babelHelpers.taggedTemplateLiteralLoose([
            "[history sync] processing history non blocking data",
          ])),
      ),
        o("WAWebHistorySyncNotificationUtils").commitHistoryDownloadedMetric({
          chunkDownloadFinishTimestamp: a,
          historySyncDownloadMetric: n,
          isSuccess: !0,
          startTs: t.historySyncStepStartedTs,
        }),
        e.pastParticipants != null &&
          e.pastParticipants.length > 0 &&
          (await o("WAWebHistorySyncNotificationUtils").processPastParticipants(
            e,
            t,
          )),
        e.callLogRecords != null &&
          e.callLogRecords.length > 0 &&
          (await F(e, t)),
        e.conversations != null &&
          (await o("WAWebMemberLabelHistorySync").processMemberLabels(e)),
        o("WAWebHistorySyncStickers").processRecentStickers(e, t),
        o("WAWebHistorySyncNotificationUtils").commitHistoryDataAppliedMetric({
          historySyncDataAppliedMetric: r,
          startTs: t.historySyncStepStartedTs,
          isSuccess: !0,
        }));
    }
    async function F(e, t) {
      (o("WALogger").LOG(
        E ||
          (E = babelHelpers.taggedTemplateLiteralLoose([
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
          k ||
            (k = babelHelpers.taggedTemplateLiteralLoose([
              "[history sync] storing call log records complete, ",
              "",
            ])),
          o("WAWebHistorySyncLogUtils").getHistorySyncLogDetailsString(
            t,
            e.callLogRecords.length,
          ),
        ));
    }
    function O(e) {
      var t = { add: "last", isHistory: !0 },
        n = Object.keys(e).map(function (n) {
          return o("WAWebBackendApi").frontendSendAndReceive(
            "processMultipleMessages",
            {
              chatId: o("WAWebWidFactory").createWid(n),
              msgObjs: e[n].msgs,
              meta: t,
              processMessagesOrigin: "historyMsgHandlerAction",
              chatMsgsCollection: null,
            },
          );
        });
      return Promise.all(
        [].concat(n, [
          o("WAWebDBProcessInitialHistorySyncMessage").storeInitialSyncMessages(
            e,
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
                  I ||
                    (I = babelHelpers.taggedTemplateLiteralLoose([
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
              T ||
                (T = babelHelpers.taggedTemplateLiteralLoose([
                  "[history sync] error occurred",
                ])),
            )
            .catching(r("getErrorSafe")(e))
            .sendLogs(
              "msg_handler for MD: error storing/processing multiple messages",
            );
        });
    }
    function B(e, t) {
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
              D ||
                (D = babelHelpers.taggedTemplateLiteralLoose([
                  "[history sync] handleInitialSyncMsgs: Migrated account not sending accountLid for a PN chat in history sync",
                ])),
            )
            .sendLogs("missing-account-lid-in-history-sync"),
          { result: "skip-chat" });
    }
    function W(e) {
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
                  x ||
                    (x = babelHelpers.taggedTemplateLiteralLoose([
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
                  $ ||
                    ($ = babelHelpers.taggedTemplateLiteralLoose([
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
    function q(e) {
      return e != null
        ? (o("WALogger").LOG(
            P ||
              (P = babelHelpers.taggedTemplateLiteralLoose([
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
    function U(e) {
      if (e != null) {
        var t = o("WAWebUsernameTypes").LidOriginType.cast(e);
        return t == null
          ? (o("WALogger")
              .ERROR(
                N ||
                  (N = babelHelpers.taggedTemplateLiteralLoose([
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
                  M ||
                    (M = babelHelpers.taggedTemplateLiteralLoose([
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
      (l.handleNonBlockingData = A),
      (l.getUsernameUpdate = W),
      (l.storeNctSaltFromHistorySync = q),
      (l.determineLidOriginTypeForHistorySync = U));
  },
  98,
);
