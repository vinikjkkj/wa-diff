__d(
  "WAWebHandleMsgProcess",
  [
    "Promise",
    "WACryptoPkcs7",
    "WALogger",
    "WAWebABProps",
    "WAWebAddonGatingUtils",
    "WAWebAddonQueryUtils",
    "WAWebBackendApi",
    "WAWebBackendEventBus",
    "WAWebBackendJobs.flow",
    "WAWebCoexV2PushnameUpdate",
    "WAWebConditionalRevealPreProcessor",
    "WAWebCurrentUser",
    "WAWebDBMsgUtils",
    "WAWebDeferrableProtocolMsg",
    "WAWebGalaxyFlowsUtils",
    "WAWebGetGroupAddressingMode",
    "WAWebGetMessageCache",
    "WAWebGetPlatformFromStanzaId",
    "WAWebHandleCloudApiThreadControlNotification",
    "WAWebHandleMsgError",
    "WAWebHandleMsgProcessUtils",
    "WAWebHandleMsgTypes",
    "WAWebHandleMsgValidate",
    "WAWebHandlePushnameUpdate",
    "WAWebLimitSharingAcp2HideReceivedMsgs",
    "WAWebLogMissingGroupParticipantMappings",
    "WAWebLogReceivedMessages",
    "WAWebMessageAssociationConstants",
    "WAWebMessagePluginSendsInactiveReceipt",
    "WAWebMessageProcessPlaceholder",
    "WAWebMessageProcessRenderable",
    "WAWebMessageSecretLocationUtils",
    "WAWebMessagingGatingUtils",
    "WAWebMsgProcessingApiUtils",
    "WAWebMsgType",
    "WAWebOfflineAttrUtils",
    "WAWebOfflineResumeMsgProcessReporterWorkerCompatible",
    "WAWebProtobufsE2E.pb",
    "WAWebQuarantineActionUtils",
    "WAWebScheduledMsgReceivePreProcess",
    "WAWebSessionScopeWamUtils",
    "WAWebSignal",
    "WAWebUserPrefsMeUser",
    "WAWebUserPrefsNotifications",
    "WAWebVerifyProtobufMsgObjectKeys",
    "WAWebWamEnumDsmError",
    "WAWebWamEnumE2eFailureReason",
    "WAWebWasaRootSecretWriter",
    "WAWebWid",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
    "cr:10197",
    "cr:37440",
    "cr:402",
    "decodeProtobuf",
    "isStringNullOrEmpty",
    "justknobx",
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
      R = (e = n("cr:37440")) != null ? e : {},
      L = R.castToAddonMsgData,
      E = R.getParentMsgKey;
    function k(e) {
      var t = e.info,
        n = e.plaintext,
        r = e.quarantineExtractedText;
      return {
        deviceSent: null,
        senderKey: null,
        rootSecretDistribute: null,
        storeMsg: null,
        renderableMsgs: [
          babelHelpers.extends(
            {},
            o("WAWebMsgProcessingApiUtils").generateBaseMsg(t),
            {
              type: o("WAWebMsgType").MSG_TYPE.QUARANTINED,
              kind: o("WAWebMsgType").MsgKind.QuarantinedMessage,
              quarantineOriginalProtobuf: n.slice().buffer,
              quarantineExtractedText: r,
            },
          ),
        ],
      };
    }
    function I(e) {
      return T.apply(this, arguments);
    }
    function T() {
      return (
        (T = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.bizInfo,
            a = e.decrypted,
            i = e.e2eInfo,
            l = e.hsmInfo,
            s = e.info,
            u = e.isPadded,
            c = u === void 0 ? !0 : u,
            d = e.msgBotInfo,
            m = e.msgMeta,
            p = e.paymentInfo,
            _ = e.reparsing,
            R = _ === void 0 ? !1 : _,
            L = e.reportingTokenInfo,
            E =
              i.e2eType === o("WAWebBackendJobs.flow").CiphertextType.Msmsg
                ? !1
                : c,
            I = E
              ? o("WACryptoPkcs7").unpadPkcs7(new Uint8Array(a))
              : new Uint8Array(a),
            T = o("decodeProtobuf").decodeProtobuf(
              o("WAWebProtobufsE2E.pb").MessageSpec,
              I,
            );
          if (
            (o(
              "WAWebVerifyProtobufMsgObjectKeys",
            ).verifyProtobufMessageObjectKeys(T),
            o("WAWebMessageSecretLocationUtils").verifyTopLevelMessageSecret({
              context: o("WAWebMessageSecretLocationUtils")
                .MessageSecretCheckContext.Receiver,
              proto: T,
              stanzaId: s.externalId,
            }),
            !R &&
              (n("cr:402") == null
                ? void 0
                : n("cr:402").shouldDropAeaWassMessage(
                    s,
                    T.messageContextInfo,
                  )) === !0)
          )
            throw new (o("WAWebHandleMsgError").MessageValidationError)(
              "CoEx relay message without a valid attestation",
              o("WAWebWamEnumE2eFailureReason").E2E_FAILURE_REASON
                .WASS_INVALID_ATTESTATION,
            );
          var x = null,
            N = o(
              "WAWebScheduledMsgReceivePreProcess",
            ).getIncomingConditionalRevealMessage(T);
          if (N != null) {
            var M = yield o(
              "WAWebScheduledMsgReceivePreProcess",
            ).preProcessIncomingScheduledMsg({
              conditionalRevealMessage: N,
              info: s,
              msgMeta: m,
              plaintext: I,
              proto: T,
              reportingTokenInfo: L,
            });
            if (M.skipProcessing) return { hasInactiveMsg: !1 };
            ((x = M.scheduledMsgViewMode),
              M.proto !== T &&
                ((T = M.proto),
                (I = M.plaintext),
                o(
                  "WAWebVerifyProtobufMsgObjectKeys",
                ).verifyProtobufMessageObjectKeys(T),
                o(
                  "WAWebMessageSecretLocationUtils",
                ).verifyTopLevelMessageSecret({
                  context: o("WAWebMessageSecretLocationUtils")
                    .MessageSecretCheckContext.Receiver,
                  proto: T,
                  stanzaId: s.externalId,
                })));
          }
          var w = o("WAWebMsgProcessingApiUtils").getFrom(s),
            A =
              (i.retryCount > 0 &&
                o("WAWebMsgProcessingApiUtils").isRevokeInfo(s)) ||
              R,
            F = A
              ? o("WAWebHandleMsgTypes").MessageOverwriteOption.RETRY
              : o("WAWebHandleMsgTypes").MessageOverwriteOption.NO_OVERWRITE,
            B = null;
          if (R) {
            ((B = r("justknobx")._("5752")
              ? yield o("WAWebQuarantineActionUtils").getQuarantineAction(T, w)
              : o("WAWebQuarantineActionUtils").QuarantineAction.NoQuarantine),
              o("WALogger")
                .LOG(
                  f ||
                    (f = babelHelpers.taggedTemplateLiteralLoose([
                      "[processDecryptedMessageProto] reparsing msgId=",
                      "",
                    ])),
                  s.externalId,
                )
                .tags("messaging"));
            var W =
              B ===
              o("WAWebQuarantineActionUtils").QuarantineAction.NoQuarantine
                ? yield o("WAWebMsgProcessingApiUtils").parseMessage({
                    info: s,
                    ciphertextType: i.e2eType,
                    msgProtobuf: T,
                    paymentInfo: p,
                    bizInfo: t,
                    hsmInfo: l,
                    hidePlaceholder: i.hideFail,
                    processDecryptedProtoParams: e,
                    msgBotInfo: d,
                    meta: m,
                    reportingTokenInfo: L,
                    isMessageRetry: i.retryCount > 0,
                    isOffline: s.offline != null,
                    protobufBytes: I,
                  })
                : k({
                    info: s,
                    plaintext: I,
                    quarantineExtractedText: o(
                      "WAWebQuarantineActionUtils",
                    ).maybeGetQuarantineText(B),
                  });
            if (W.renderableMsgs == null)
              o("WALogger").ERROR(
                g ||
                  (g = babelHelpers.taggedTemplateLiteralLoose([
                    "parsed render able msgs not reparsed as expected",
                  ])),
              );
            else {
              var q = o(
                "WAWebConditionalRevealPreProcessor",
              ).applyScheduledMsgViewMode(W.renderableMsgs, x);
              (o("WAWebHandleMsgValidate").renderableMessagesValidation({
                renderableMsgs: q,
                msgMeta: m,
                info: s,
                proto: T,
                bizInfo: t,
              }),
                o("WAWebHandleMsgValidate").validateAddPixKeyOfferSender({
                  info: s,
                  proto: T,
                  renderableMsgs: q,
                }),
                o(
                  "WAWebMessagingGatingUtils",
                ).isWebReportingTokenDelayProcessingEnabled() ||
                  (yield o(
                    "WAWebHandleMsgValidate",
                  ).validateAndProcessReportingTokenInfo({
                    renderableMsgs: q,
                    reparsing: !0,
                  })));
              var U = D({
                  renderableMsgs: q,
                  reparsing: !0,
                  bizInfo: t,
                  msgMeta: m,
                  paymentInfo: p,
                  info: s,
                  messageOverwriteOption: F,
                }),
                V = U.hasInactiveMsg,
                H = U.tasks;
              return (
                yield (S || (S = n("Promise"))).all(H),
                o("WALogger")
                  .LOG(
                    h ||
                      (h = babelHelpers.taggedTemplateLiteralLoose([
                        "[processDecryptedMessageProto] reparsed msgId=",
                        "",
                      ])),
                    s.externalId,
                  )
                  .tags("messaging"),
                { hasInactiveMsg: V }
              );
            }
          }
          var G = yield o("WAWebHandleMsgProcessUtils").preProcessMsg(s, T);
          if (
            ((G == null ? void 0 : G.senderOrRecipientAccountTypeHosted) ===
              !0 && (s.senderOrRecipientAccountTypeHosted = !0),
            (G == null ? void 0 : G.hostedBizEncMismatch) === !0 &&
              (s.hostedBizEncStateMismatch = !0),
            s.type === o("WAWebHandleMsgTypes").MESSAGE_TYPE.PEER_BROADCAST &&
              i.retryCount > 0)
          ) {
            var z = yield o("WAWebDBMsgUtils").getMsgByMsgKey(
              o("WAWebMsgProcessingApiUtils").messageInfoToKey(s),
            );
            (z == null ? void 0 : z.bclParticipants) != null
              ? (s.bclParticipants = z.bclParticipants)
              : (z == null ? void 0 : z.broadcastParticipants) != null &&
                (s.bclParticipants = z.broadcastParticipants.map(function (e) {
                  return { wid: o("WAWebWidFactory").asUserWidOrThrow(e) };
                }));
          }
          var j = o(
              "WAWebOfflineResumeMsgProcessReporterWorkerCompatible",
            ).msgProcessReporter.startMarker(
              o("WAWebOfflineResumeMsgProcessReporterWorkerCompatible")
                .msgProcessReporter.stage.Parsing,
            ),
            K =
              B != null
                ? B
                : yield o("WAWebQuarantineActionUtils").getQuarantineAction(
                    T,
                    w,
                  ),
            Q =
              K ===
              o("WAWebQuarantineActionUtils").QuarantineAction.NoQuarantine
                ? yield o("WAWebMsgProcessingApiUtils").parseMessage({
                    info: s,
                    ciphertextType: i.e2eType,
                    msgProtobuf: T,
                    paymentInfo: p,
                    bizInfo: t,
                    hsmInfo: l,
                    hidePlaceholder: i.hideFail,
                    processDecryptedProtoParams: e,
                    msgBotInfo: d,
                    meta: m,
                    reportingTokenInfo: L,
                    isMessageRetry: i.retryCount > 0,
                    isOffline: s.offline != null,
                    protobufBytes: I,
                  })
                : k({
                    info: s,
                    plaintext: I,
                    quarantineExtractedText: o(
                      "WAWebQuarantineActionUtils",
                    ).maybeGetQuarantineText(K),
                  });
          if (
            o("WAWebCurrentUser").isEmployee() &&
            o("WAWebABProps").getABPropConfigValue(
              "wa_web_debug_color_code_retry_messages",
            )
          ) {
            var X;
            (X = Q.renderableMsgs) == null ||
              X.forEach(function (e) {
                i.retryCount > 0 && (e.backgroundColor = 16711680);
              });
          }
          if (
            (j == null || j(),
            o("WAWebDeferrableProtocolMsg").isDeferrableProtocolMsg(Q))
          ) {
            var Y = o("WAWebDeferrableProtocolMsg").handleDeferrableProtocolMsg(
              {
                bizInfo: t,
                from: w,
                info: s,
                parsed: Q,
                paymentInfo: p,
                plaintext: I,
              },
            );
            return (Y != null && (yield Y), { hasInactiveMsg: !1 });
          }
          if (Q.securityNotificationEnabled)
            w == null || !(w instanceof r("WAWebWid"))
              ? o("WALogger")
                  .ERROR(
                    y ||
                      (y = babelHelpers.taggedTemplateLiteralLoose([
                        "Handle security notification empty wid error",
                      ])),
                  )
                  .sendLogs("Handle security notification empty wid error")
              : o("WAWebUserPrefsMeUser").isMePrimary(w)
                ? o(
                    "WAWebUserPrefsNotifications",
                  ).setGlobalSecurityNotifications(
                    Q.securityNotificationEnabled.isEnabled,
                  )
                : o("WALogger")
                    .ERROR(
                      C ||
                        (C = babelHelpers.taggedTemplateLiteralLoose([
                          "Handle security notification payload wid error",
                        ])),
                    )
                    .sendLogs("Handle security notification payload wid error");
          else if (Q.cloudApiThreadControlNotification)
            r("WAWebHandleCloudApiThreadControlNotification")(
              Q.cloudApiThreadControlNotification,
            );
          else if (Q.lidMigrationSyncMessage != null)
            o("WALogger")
              .ERROR(
                b ||
                  (b = babelHelpers.taggedTemplateLiteralLoose([
                    "[LID] received peer migration stanza but client-to-LID migration is no longer supported, sender: ",
                    "",
                  ])),
                o("WAWebGetPlatformFromStanzaId").getPlatformFromStanzaId(
                  s.externalId,
                ),
              )
              .sendLogs(
                o("WAWebUserPrefsMeUser").isMeAccount(w)
                  ? "lid-migration-peer-stanza-received"
                  : "lid-migration-non-peer-stanza-received",
              );
          else {
            var J = !1;
            if (
              (Q.deviceSent == null
                ? (J = !0)
                : Q.deviceSent.phash != null && Q.deviceSent.phash !== ""
                  ? (J = yield o("WAWebHandleMsgValidate").validateBclHash(
                      Q.deviceSent.phash,
                      Q.deviceSent.info,
                    ))
                  : Q.deviceSent.destination &&
                    (J = yield o(
                      "WAWebHandleMsgValidate",
                    ).validateMsgDestination(Q.deviceSent.destination, s)),
              !J)
            )
              throw new (o("WAWebHandleMsgError").DeviceSentMessageError)(
                o("WAWebMsgProcessingApiUtils").getDeviceType(s.author),
                o("WAWebWamEnumDsmError").DSM_ERROR.INVALID_DSM,
              );
            var Z = Q.renderableMsgs;
            if (
              (o("WAWebHandleMsgValidate").renderableMessagesValidation({
                renderableMsgs: Z,
                msgMeta: m,
                info: s,
                proto: T,
                bizInfo: t,
              }),
              o("WAWebHandleMsgValidate").logAddPixKeyOfferReceipt({
                info: s,
                isFirstReceipt: !R,
                isQuarantined:
                  K !==
                  o("WAWebQuarantineActionUtils").QuarantineAction.NoQuarantine,
                proto: T,
                renderableMsgs: Z,
              }),
              o("WAWebHandleMsgValidate").validateAddPixKeyOfferSender({
                info: s,
                proto: T,
                renderableMsgs: Z,
              }),
              !o(
                "WAWebMessagingGatingUtils",
              ).isWebReportingTokenDelayProcessingEnabled())
            ) {
              var ee = o(
                "WAWebOfflineResumeMsgProcessReporterWorkerCompatible",
              ).msgProcessReporter.startMarker(
                o("WAWebOfflineResumeMsgProcessReporterWorkerCompatible")
                  .msgProcessReporter.stage.ProcessReportingTokenInfo,
              );
              (yield o(
                "WAWebHandleMsgValidate",
              ).validateAndProcessReportingTokenInfo({ renderableMsgs: Z }),
                ee == null || ee());
            }
            var te = yield o(
                "WAWebGalaxyFlowsUtils",
              ).maybeAddGalaxyFlowMessageIds(Z),
              ne = yield o(
                "WAWebLimitSharingAcp2HideReceivedMsgs",
              ).hideMsgsReceivedInAcp2RestrictedChat({
                messageType: s.type,
                msgs: o(
                  "WAWebConditionalRevealPreProcessor",
                ).applyScheduledMsgViewMode(
                  Q.storeMsg != null ? [Q.storeMsg].concat(te) : te,
                  x,
                ),
                proto: T,
              }),
              re = D({
                renderableMsgs: ne,
                reparsing: R,
                bizInfo: t,
                msgMeta: m,
                paymentInfo: p,
                info: s,
                messageOverwriteOption: F,
              }),
              oe = re.hasInactiveMsg,
              ae = re.tasks,
              ie = !1;
            if (
              o("WAWebABProps").getABPropConfigValue(
                "web_send_orphan_in_receipts_enabled",
              )
            ) {
              var le = ne[0],
                se = $(le);
              if (se != null) {
                var ue = yield o("WAWebAddonQueryUtils").getParentMsgsByMsgKey([
                    se,
                  ]),
                  ce = ue.get(se.toString());
                ie =
                  ce == null ||
                  ce.type === o("WAWebMsgType").MSG_TYPE.CIPHERTEXT ||
                  (ce.type === o("WAWebMsgType").MSG_TYPE.UNKNOWN &&
                    (ce.futureproofType == null ||
                      !o(
                        "WAWebMessageAssociationConstants",
                      ).orphanIneligibleFutureproofTypes.has(
                        ce.futureproofType,
                      )));
              }
            }
            var de = Q.senderKey;
            de != null &&
              ae.push(
                o("WAWebSignal").Session.createGroupSignalSession(
                  s.author,
                  de.groupId,
                  de.key,
                ),
              );
            var me = Q.rootSecretDistribute;
            if (me != null)
              if (o("WAWebUserPrefsMeUser").isMeAccount(s.author)) {
                var pe = me.chatJid,
                  _e = me.rootSecret,
                  fe = me.stanzaId;
                ae.push(
                  o("WAWebWasaRootSecretWriter").applyWasaRootSecretForId(
                    pe,
                    fe,
                    _e,
                  ),
                );
              } else
                o("WALogger").WARN(
                  v ||
                    (v = babelHelpers.taggedTemplateLiteralLoose([
                      "[wasa] dropping rootSecretDistribute from non-self author ",
                      "",
                    ])),
                  s.author.toString(),
                );
            P(s, m);
            var ge = O(s.chat);
            yield (S || (S = n("Promise"))).all(ae);
            var he = yield ge;
            return (
              o(
                "WAWebLogMissingGroupParticipantMappings",
              ).logMissingGroupParticipantMappings({
                author: s.author,
                groupId: s.chat,
                localAddressingMode: he,
                serverAddressingMode: s.addressingMode,
              }),
              o("WAWebLogReceivedMessages").logReceivedMessagesInWAM({
                msgs: te,
                offline: o("WAWebOfflineAttrUtils").toOfflineNumber(s.offline),
                tsMillis: s.ts * 1e3,
                clientReceivedTsMillis: s.clientReceivedTsMillis,
                msgProcessStartTsMillis: s.msgProcessStartTsMillis,
                serverAddressingMode: s.addressingMode,
                isPq: i.isPq,
                localAddressingMode: he,
                oppositeHasUsername: o("WAWebUserPrefsMeUser").isMeAccount(
                  s.author,
                )
                  ? s.peerRecipientUsername != null
                  : s.username != null,
                sessionScope: o(
                  "WAWebSessionScopeWamUtils",
                ).getIncomingSkdmSessionScopeForMessageReceive({
                  from: o("WAWebMsgProcessingApiUtils").getFrom(s),
                  isGroupStatus: m == null ? void 0 : m.isGroupStatus,
                  isSkdm: m == null ? void 0 : m.isSkdm,
                  metaSessionScope: m == null ? void 0 : m.metaSessionScope,
                }),
              }),
              { hasInactiveMsg: oe, isOrphanAddon: ie }
            );
          }
          return { hasInactiveMsg: !1 };
        })),
        T.apply(this, arguments)
      );
    }
    function D(e) {
      var t,
        n,
        r,
        a,
        i,
        l = e.bizInfo,
        f = e.info,
        g = e.messageOverwriteOption,
        h = e.msgMeta,
        y = e.paymentInfo,
        C = e.renderableMsgs,
        b = e.reparsing,
        v = [],
        S = !1,
        R = C[0],
        E = o("WAWebAddonGatingUtils").isUnifiedInfraEnabledForType(
          R == null ? void 0 : R.type,
        )
          ? L == null
            ? void 0
            : L(R)
          : null;
      return (
        E != null
          ? (o("WALogger").LOG(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "processMsgs: addon",
                ])),
            ),
            (S = !0),
            v.push(
              A({
                messageOverwriteOption: g,
                msg: E,
                msgInfo: f,
                reparsing: b,
              }),
            ))
          : R != null && R.kind === o("WAWebMsgType").MsgKind.PollVoteEncrypted
            ? (o("WALogger").LOG(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "processMsgs: pollVote",
                  ])),
              ),
              v.push(M(R, f, b)))
            : ((t = C[0]) == null ? void 0 : t.type) ===
                o("WAWebMsgType").MSG_TYPE.KEEP_IN_CHAT
              ? (o("WALogger").LOG(
                  c ||
                    (c = babelHelpers.taggedTemplateLiteralLoose([
                      "processMsgs: keepInChat",
                    ])),
                ),
                (S = !0),
                v.push(
                  o("WAWebHandleMsgProcessUtils").processKeepInChatMsg({
                    msg: C[0],
                    msgInfo: f,
                    msgMeta: h,
                    reparsing: b,
                  }),
                ))
              : ((n = C[0]) == null ? void 0 : n.type) ===
                    o("WAWebMsgType").MSG_TYPE.PROTOCOL &&
                  ((r = C[0]) == null ? void 0 : r.subtype) === "message_edit"
                ? (o("WALogger").LOG(
                    d ||
                      (d = babelHelpers.taggedTemplateLiteralLoose([
                        "processMsgs: messageEdit",
                      ])),
                  ),
                  v.push(
                    o("WAWebHandleMsgProcessUtils").processEditProtocolMsg({
                      msg: C[0],
                      msgInfo: f,
                      msgMeta: h,
                      reparsing: b,
                    }),
                  ))
                : ((a = C[0]) == null ? void 0 : a.type) ===
                      o("WAWebMsgType").MSG_TYPE.PROTOCOL &&
                    ((i = C[0]) == null ? void 0 : i.subtype) ===
                      "ephemeral_sync_response"
                  ? (o("WALogger").LOG(
                      m ||
                        (m = babelHelpers.taggedTemplateLiteralLoose([
                          "processMsgs: ephemeralSyncResponse",
                        ])),
                    ),
                    v.push(
                      o(
                        "WAWebHandleMsgProcessUtils",
                      ).processEphemeralSyncResponseMsg({
                        msg: C[0],
                        msgInfo: f,
                        msgMeta: h,
                        reparsing: b,
                      }),
                    ))
                  : C.length > 0 &&
                    (R != null &&
                    o(
                      "WAWebMessagePluginSendsInactiveReceipt",
                    ).sendsInactiveReceipt(R.type, R.subtype)
                      ? (o("WALogger").LOG(
                          p ||
                            (p = babelHelpers.taggedTemplateLiteralLoose([
                              "processMsgs: inactive ",
                              "",
                            ])),
                          R.type,
                        ),
                        (S = !0))
                      : o("WALogger").LOG(
                          _ ||
                            (_ = babelHelpers.taggedTemplateLiteralLoose([
                              "processMsgs: renderableMsgs",
                            ])),
                        ),
                    v.push(x(C, f, y, l, h, g, b))),
        { tasks: v, hasInactiveMsg: S }
      );
    }
    function x(e, t, n, r, a, i, l) {
      return o("WAWebMessageProcessRenderable").processRenderableMessages(
        e,
        t,
        n,
        r,
        a,
        i,
        l,
      );
    }
    function $(e) {
      if (e == null) return null;
      if ((L == null ? void 0 : L(e)) != null) {
        var t;
        return (t = E == null ? void 0 : E(e)) != null ? t : null;
      }
      return e.kind === o("WAWebMsgType").MsgKind.PollVoteEncrypted &&
        e.pollUpdateParentKey
        ? e.pollUpdateParentKey
        : e.type === o("WAWebMsgType").MSG_TYPE.KEEP_IN_CHAT && e.kicKey
          ? e.kicKey
          : e.type === o("WAWebMsgType").MSG_TYPE.PROTOCOL &&
              e.subtype === "message_edit" &&
              e.protocolMessageKey != null
            ? e.protocolMessageKey
            : null;
    }
    function P(e, t) {
      var n = e.pushname;
      if (!r("isStringNullOrEmpty")(n)) {
        var a = o("WAWebCoexV2PushnameUpdate").maybeGetCoexV2PushnameUpdatePlan(
            e,
            t,
          ),
          i = a == null ? e.author : a.target;
        i != null &&
          o("WAWebHandlePushnameUpdate").updatePushname(
            i,
            n,
            e.offline != null,
          );
      }
    }
    function N(e) {
      return o("WAWebMessageProcessPlaceholder").processPlaceholderMessage(e);
    }
    function M(e, t, n) {
      return w.apply(this, arguments);
    }
    function w() {
      return (
        (w = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          var r = t.offline != null && !n,
            a = e,
            i = o("WAWebGetMessageCache")
              .getMessageCache()
              .addMessages([{ msg: a }], !r);
          (n ||
            (o("WAWebBackendEventBus").BackendEventBus.isMainStreamReadyMd &&
              o("WAWebBackendEventBus").BackendEventBus
                .isOfflineDeliveryEnd)) &&
            (yield i);
        })),
        w.apply(this, arguments)
      );
    }
    function A(e) {
      return F.apply(this, arguments);
    }
    function F() {
      return (
        (F = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.messageOverwriteOption,
            n = e.msg,
            r = e.msgInfo,
            a = e.reparsing,
            i = r.offline != null && !a,
            l = n,
            s = o("WAWebGetMessageCache")
              .getMessageCache()
              .addMessages([{ msg: l }], !i);
          ((a ||
            (o("WAWebBackendEventBus").BackendEventBus.isMainStreamReadyMd &&
              o("WAWebBackendEventBus").BackendEventBus
                .isOfflineDeliveryEnd)) &&
            (yield s),
            t === o("WAWebHandleMsgTypes").MessageOverwriteOption.RETRY &&
              o("WAWebBackendApi").frontendFireAndForget("removePlaceholder", {
                msg: n,
              }));
        })),
        F.apply(this, arguments)
      );
    }
    function O(e) {
      return o("WAWebGetGroupAddressingMode").getGroupAddressingMode(e);
    }
    ((l.processDecryptedMessageProto = I),
      (l.processMsgs = D),
      (l.processRenderableMsg = x),
      (l.updateIncomingMessagePushname = P),
      (l.processPlaceholderMsg = N));
  },
  98,
);
