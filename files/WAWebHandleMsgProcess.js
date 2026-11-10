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
    "WAWebMessageQueueImpl",
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
    "getErrorSafe",
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
      R,
      L = (e = n("cr:37440")) != null ? e : {},
      E = L.castToAddonMsgData,
      k = L.getParentMsgKey;
    function I(e) {
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
    function T(e) {
      return D.apply(this, arguments);
    }
    function D() {
      return (
        (D = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
            S = _ === void 0 ? !1 : _,
            L = e.reportingTokenInfo,
            E =
              i.e2eType === o("WAWebBackendJobs.flow").CiphertextType.Msmsg
                ? !1
                : c,
            k = E
              ? o("WACryptoPkcs7").unpadPkcs7(new Uint8Array(a))
              : new Uint8Array(a),
            T = o("decodeProtobuf").decodeProtobuf(
              o("WAWebProtobufsE2E.pb").MessageSpec,
              k,
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
            !S &&
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
          var D = null,
            $ = o(
              "WAWebScheduledMsgReceivePreProcess",
            ).getIncomingConditionalRevealMessage(T);
          if ($ != null) {
            var M = yield o(
              "WAWebScheduledMsgReceivePreProcess",
            ).preProcessIncomingScheduledMsg({
              conditionalRevealMessage: $,
              info: s,
              msgMeta: m,
              plaintext: k,
              proto: T,
              reportingTokenInfo: L,
            });
            if (M.skipProcessing) return { hasInactiveMsg: !1 };
            ((D = M.scheduledMsgViewMode),
              M.proto !== T &&
                ((T = M.proto),
                (k = M.plaintext),
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
              S,
            F = A
              ? o("WAWebHandleMsgTypes").MessageOverwriteOption.RETRY
              : o("WAWebHandleMsgTypes").MessageOverwriteOption.NO_OVERWRITE,
            O = null;
          if (S) {
            ((O = r("justknobx")._("5752")
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
              O ===
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
                    protobufBytes: k,
                  })
                : I({
                    info: s,
                    plaintext: k,
                    quarantineExtractedText: o(
                      "WAWebQuarantineActionUtils",
                    ).maybeGetQuarantineText(O),
                  });
            if (W.renderableMsgs == null)
              o("WALogger").ERROR(
                g ||
                  (g = babelHelpers.taggedTemplateLiteralLoose([
                    "parsed render able msgs not reparsed as expected",
                  ])),
              );
            else {
              var U = yield B(
                o(
                  "WAWebConditionalRevealPreProcessor",
                ).applyScheduledMsgViewMode(W.renderableMsgs, D),
              );
              (o("WAWebHandleMsgValidate").renderableMessagesValidation({
                renderableMsgs: U,
                msgMeta: m,
                info: s,
                proto: T,
                bizInfo: t,
              }),
                o("WAWebHandleMsgValidate").validateAddPixKeyOfferSender({
                  info: s,
                  proto: T,
                  renderableMsgs: U,
                }),
                o(
                  "WAWebMessagingGatingUtils",
                ).isWebReportingTokenDelayProcessingEnabled() ||
                  (yield o(
                    "WAWebHandleMsgValidate",
                  ).validateAndProcessReportingTokenInfo({
                    renderableMsgs: U,
                    reparsing: !0,
                  })));
              var V = x({
                  renderableMsgs: U,
                  reparsing: !0,
                  bizInfo: t,
                  msgMeta: m,
                  paymentInfo: p,
                  info: s,
                  messageOverwriteOption: F,
                }),
                H = V.hasInactiveMsg,
                G = V.tasks;
              return (
                yield (R || (R = n("Promise"))).all(G),
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
                { hasInactiveMsg: H }
              );
            }
          }
          var z = yield o("WAWebHandleMsgProcessUtils").preProcessMsg(s, T);
          if (
            ((z == null ? void 0 : z.senderOrRecipientAccountTypeHosted) ===
              !0 && (s.senderOrRecipientAccountTypeHosted = !0),
            (z == null ? void 0 : z.hostedBizEncMismatch) === !0 &&
              (s.hostedBizEncStateMismatch = !0),
            s.type === o("WAWebHandleMsgTypes").MESSAGE_TYPE.PEER_BROADCAST &&
              i.retryCount > 0)
          ) {
            var j = yield o("WAWebDBMsgUtils").getMsgByMsgKey(
              o("WAWebMsgProcessingApiUtils").messageInfoToKey(s),
            );
            (j == null ? void 0 : j.bclParticipants) != null
              ? (s.bclParticipants = j.bclParticipants)
              : (j == null ? void 0 : j.broadcastParticipants) != null &&
                (s.bclParticipants = j.broadcastParticipants.map(function (e) {
                  return { wid: o("WAWebWidFactory").asUserWidOrThrow(e) };
                }));
          }
          var K = o(
              "WAWebOfflineResumeMsgProcessReporterWorkerCompatible",
            ).msgProcessReporter.startMarker(
              o("WAWebOfflineResumeMsgProcessReporterWorkerCompatible")
                .msgProcessReporter.stage.Parsing,
            ),
            Q =
              O != null
                ? O
                : yield o("WAWebQuarantineActionUtils").getQuarantineAction(
                    T,
                    w,
                  ),
            X =
              Q ===
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
                    protobufBytes: k,
                  })
                : I({
                    info: s,
                    plaintext: k,
                    quarantineExtractedText: o(
                      "WAWebQuarantineActionUtils",
                    ).maybeGetQuarantineText(Q),
                  });
          if (
            o("WAWebCurrentUser").isEmployee() &&
            o("WAWebABProps").getABPropConfigValue(
              "wa_web_debug_color_code_retry_messages",
            )
          ) {
            var Y;
            (Y = X.renderableMsgs) == null ||
              Y.forEach(function (e) {
                i.retryCount > 0 && (e.backgroundColor = 16711680);
              });
          }
          if (
            (K == null || K(),
            o("WAWebDeferrableProtocolMsg").isDeferrableProtocolMsg(X))
          ) {
            var J = o("WAWebDeferrableProtocolMsg").handleDeferrableProtocolMsg(
              {
                bizInfo: t,
                from: w,
                info: s,
                parsed: X,
                paymentInfo: p,
                plaintext: k,
              },
            );
            return (J != null && (yield J), { hasInactiveMsg: !1 });
          }
          if (X.securityNotificationEnabled)
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
                    X.securityNotificationEnabled.isEnabled,
                  )
                : o("WALogger")
                    .ERROR(
                      C ||
                        (C = babelHelpers.taggedTemplateLiteralLoose([
                          "Handle security notification payload wid error",
                        ])),
                    )
                    .sendLogs("Handle security notification payload wid error");
          else if (X.cloudApiThreadControlNotification)
            r("WAWebHandleCloudApiThreadControlNotification")(
              X.cloudApiThreadControlNotification,
            );
          else if (X.lidMigrationSyncMessage != null)
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
            var Z = !1;
            if (
              (X.deviceSent == null
                ? (Z = !0)
                : X.deviceSent.phash != null && X.deviceSent.phash !== ""
                  ? (Z = yield o("WAWebHandleMsgValidate").validateBclHash(
                      X.deviceSent.phash,
                      X.deviceSent.info,
                    ))
                  : X.deviceSent.destination &&
                    (Z = yield o(
                      "WAWebHandleMsgValidate",
                    ).validateMsgDestination(X.deviceSent.destination, s)),
              !Z)
            )
              throw new (o("WAWebHandleMsgError").DeviceSentMessageError)(
                o("WAWebMsgProcessingApiUtils").getDeviceType(s.author),
                o("WAWebWamEnumDsmError").DSM_ERROR.INVALID_DSM,
              );
            var ee = X.renderableMsgs;
            if (
              (o("WAWebHandleMsgValidate").renderableMessagesValidation({
                renderableMsgs: ee,
                msgMeta: m,
                info: s,
                proto: T,
                bizInfo: t,
              }),
              o("WAWebHandleMsgValidate").logAddPixKeyOfferReceipt({
                info: s,
                isFirstReceipt: !S,
                isQuarantined:
                  Q !==
                  o("WAWebQuarantineActionUtils").QuarantineAction.NoQuarantine,
                proto: T,
                renderableMsgs: ee,
              }),
              o("WAWebHandleMsgValidate").validateAddPixKeyOfferSender({
                info: s,
                proto: T,
                renderableMsgs: ee,
              }),
              !o(
                "WAWebMessagingGatingUtils",
              ).isWebReportingTokenDelayProcessingEnabled())
            ) {
              var te = o(
                "WAWebOfflineResumeMsgProcessReporterWorkerCompatible",
              ).msgProcessReporter.startMarker(
                o("WAWebOfflineResumeMsgProcessReporterWorkerCompatible")
                  .msgProcessReporter.stage.ProcessReportingTokenInfo,
              );
              (yield o(
                "WAWebHandleMsgValidate",
              ).validateAndProcessReportingTokenInfo({ renderableMsgs: ee }),
                te == null || te());
            }
            var ne = yield o(
                "WAWebGalaxyFlowsUtils",
              ).maybeAddGalaxyFlowMessageIds(ee),
              re = yield o(
                "WAWebLimitSharingAcp2HideReceivedMsgs",
              ).hideMsgsReceivedInAcp2RestrictedChat({
                messageType: s.type,
                msgs: o(
                  "WAWebConditionalRevealPreProcessor",
                ).applyScheduledMsgViewMode(
                  X.storeMsg != null ? [X.storeMsg].concat(ne) : ne,
                  D,
                ),
                proto: T,
              }),
              oe = x({
                renderableMsgs: re,
                reparsing: S,
                bizInfo: t,
                msgMeta: m,
                paymentInfo: p,
                info: s,
                messageOverwriteOption: F,
              }),
              ae = oe.hasInactiveMsg,
              ie = oe.tasks,
              le = !1;
            if (
              o("WAWebABProps").getABPropConfigValue(
                "web_send_orphan_in_receipts_enabled",
              )
            ) {
              var se = re[0],
                ue = P(se);
              if (ue != null) {
                var ce = yield o("WAWebAddonQueryUtils").getParentMsgsByMsgKey([
                    ue,
                  ]),
                  de = ce.get(ue.toString());
                le =
                  de == null ||
                  de.type === o("WAWebMsgType").MSG_TYPE.CIPHERTEXT ||
                  (de.type === o("WAWebMsgType").MSG_TYPE.UNKNOWN &&
                    (de.futureproofType == null ||
                      !o(
                        "WAWebMessageAssociationConstants",
                      ).orphanIneligibleFutureproofTypes.has(
                        de.futureproofType,
                      )));
              }
            }
            var me = X.senderKey;
            me != null &&
              ie.push(
                o("WAWebSignal").Session.createGroupSignalSession(
                  s.author,
                  me.groupId,
                  me.key,
                ),
              );
            var pe = X.rootSecretDistribute;
            if (pe != null)
              if (o("WAWebUserPrefsMeUser").isMeAccount(s.author)) {
                var _e = pe.chatJid,
                  fe = pe.rootSecret,
                  ge = pe.stanzaId;
                ie.push(
                  o("WAWebWasaRootSecretWriter").applyWasaRootSecretForId(
                    _e,
                    ge,
                    fe,
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
            N(s, m);
            var he = q(s.chat);
            yield (R || (R = n("Promise"))).all(ie);
            var ye = yield he;
            return (
              o(
                "WAWebLogMissingGroupParticipantMappings",
              ).logMissingGroupParticipantMappings({
                author: s.author,
                groupId: s.chat,
                localAddressingMode: ye,
                serverAddressingMode: s.addressingMode,
              }),
              o("WAWebLogReceivedMessages").logReceivedMessagesInWAM({
                msgs: ne,
                offline: o("WAWebOfflineAttrUtils").toOfflineNumber(s.offline),
                tsMillis: s.ts * 1e3,
                clientReceivedTsMillis: s.clientReceivedTsMillis,
                msgProcessStartTsMillis: s.msgProcessStartTsMillis,
                serverAddressingMode: s.addressingMode,
                isPq: i.isPq,
                localAddressingMode: ye,
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
              { hasInactiveMsg: ae, isOrphanAddon: le }
            );
          }
          return { hasInactiveMsg: !1 };
        })),
        D.apply(this, arguments)
      );
    }
    function x(e) {
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
        L = o("WAWebAddonGatingUtils").isUnifiedInfraEnabledForType(
          R == null ? void 0 : R.type,
        )
          ? E == null
            ? void 0
            : E(R)
          : null;
      return (
        L != null
          ? (o("WALogger").LOG(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "processMsgs: addon",
                ])),
            ),
            (S = !0),
            v.push(
              F({
                messageOverwriteOption: g,
                msg: L,
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
              v.push(w(R, f, b)))
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
                    v.push($(C, f, y, l, h, g, b))),
        { tasks: v, hasInactiveMsg: S }
      );
    }
    function $(e, t, n, r, a, i, l) {
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
    function P(e) {
      if (e == null) return null;
      if ((E == null ? void 0 : E(e)) != null) {
        var t;
        return (t = k == null ? void 0 : k(e)) != null ? t : null;
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
    function N(e, t) {
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
    function M(e) {
      return o("WAWebMessageProcessPlaceholder").processPlaceholderMessage(e);
    }
    function w(e, t, n) {
      return A.apply(this, arguments);
    }
    function A() {
      return (
        (A = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          var r = t.offline != null && !n,
            a = e,
            i = o("WAWebGetMessageCache")
              .getMessageCache()
              .addMessages(
                [{ msg: a }],
                o("WAWebMessageQueueImpl").shouldFlushMessageImmediately(
                  r,
                  o("WAWebBackendEventBus").BackendEventBus
                    .isOfflineDeliveryEnd,
                ),
              );
          (n ||
            (o("WAWebBackendEventBus").BackendEventBus.isMainStreamReadyMd &&
              o("WAWebBackendEventBus").BackendEventBus
                .isOfflineDeliveryEnd)) &&
            (yield i);
        })),
        A.apply(this, arguments)
      );
    }
    function F(e) {
      return O.apply(this, arguments);
    }
    function O() {
      return (
        (O = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.messageOverwriteOption,
            n = e.msg,
            r = e.msgInfo,
            a = e.reparsing,
            i = r.offline != null && !a,
            l = n,
            s = o("WAWebGetMessageCache")
              .getMessageCache()
              .addMessages(
                [{ msg: l }],
                o("WAWebMessageQueueImpl").shouldFlushMessageImmediately(
                  i,
                  o("WAWebBackendEventBus").BackendEventBus
                    .isOfflineDeliveryEnd,
                ),
              );
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
        O.apply(this, arguments)
      );
    }
    function B(e) {
      return W.apply(this, arguments);
    }
    function W() {
      return (
        (W = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          return (R || (R = n("Promise"))).all(
            e.map(
              (function () {
                var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                  function* (e) {
                    var t;
                    try {
                      var n;
                      t =
                        (n = yield o("WAWebDBMsgUtils").getMsgByMsgKey(e.id)) ==
                        null
                          ? void 0
                          : n.ack;
                    } catch (t) {
                      return (
                        o("WALogger")
                          .WARN(
                            S ||
                              (S = babelHelpers.taggedTemplateLiteralLoose([
                                "keepStoredAcks: stored msg lookup failed, keeping reparsed ack",
                              ])),
                          )
                          .catching(r("getErrorSafe")(t)),
                        e
                      );
                    }
                    return t != null && (e.ack == null || t > e.ack)
                      ? babelHelpers.extends({}, e, { ack: t })
                      : e;
                  },
                );
                return function (t) {
                  return e.apply(this, arguments);
                };
              })(),
            ),
          );
        })),
        W.apply(this, arguments)
      );
    }
    function q(e) {
      return o("WAWebGetGroupAddressingMode").getGroupAddressingMode(e);
    }
    ((l.processDecryptedMessageProto = T),
      (l.processMsgs = x),
      (l.processRenderableMsg = $),
      (l.updateIncomingMessagePushname = N),
      (l.processPlaceholderMsg = M));
  },
  98,
);
