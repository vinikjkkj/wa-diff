__d(
  "WAWebHandleMsgProcess",
  [
    "Promise",
    "WACryptoPkcs7",
    "WALogger",
    "WAWebABProps",
    "WAWebAddonQueryUtils",
    "WAWebApiDeferredMessagesStorage",
    "WAWebBackendApi",
    "WAWebBackendEventBus",
    "WAWebBackendJobs.flow",
    "WAWebConditionalRevealPreProcessor",
    "WAWebCurrentUser",
    "WAWebDBMsgUtils",
    "WAWebGalaxyFlowsUtils",
    "WAWebGetGroupAddressingMode",
    "WAWebGetMessageCache",
    "WAWebHandleCloudApiThreadControlNotification",
    "WAWebHandleMsgError",
    "WAWebHandleMsgProcessUtils",
    "WAWebHandleMsgTypes.flow",
    "WAWebHandleMsgValidate",
    "WAWebHandlePushnameUpdate",
    "WAWebLogMissingGroupParticipantMappings",
    "WAWebLogReceivedMessages",
    "WAWebMessageAssociationConstants",
    "WAWebMessageProcessPlaceholder",
    "WAWebMessageProcessRenderable",
    "WAWebMessageSecretLocationUtils",
    "WAWebMessagingGatingUtils",
    "WAWebMsgProcessingApiUtils",
    "WAWebMsgType",
    "WAWebOfflineResumeMsgProcessReporterWorkerCompatible",
    "WAWebParsedProtocolMsgType",
    "WAWebProtobufsE2E.pb",
    "WAWebQuarantineActionUtils",
    "WAWebRuntimeEnvironmentUtils",
    "WAWebSessionScopeWamUtils",
    "WAWebSignal",
    "WAWebUserPrefsMeUser",
    "WAWebUserPrefsNotifications",
    "WAWebVerifyProtobufMsgObjectKeys",
    "WAWebWamEnumDsmError",
    "WAWebWasaRootSecretWriter",
    "WAWebWid",
    "WAWebWidFactory",
    "WAWebWorkerSafeBackendApi",
    "asyncToGeneratorRuntime",
    "cr:10197",
    "cr:37440",
    "cr:37441",
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
      R,
      L,
      E,
      k,
      I = (e = n("cr:37440")) != null ? e : {},
      T = I.castToAddonMsgData,
      D = I.getParentMsgKey,
      x = (s = n("cr:37441")) != null ? s : {},
      $ = x.isUnifiedInfraEnabledForType;
    function P(e, t, n) {
      return {
        deviceSent: null,
        senderKey: null,
        rootSecretDistribute: null,
        storeMsg: null,
        renderableMsgs: [
          babelHelpers.extends(
            {},
            o("WAWebMsgProcessingApiUtils").generateBaseMsg(e),
            {
              type: o("WAWebMsgType").MSG_TYPE.QUARANTINED,
              kind: o("WAWebMsgType").MsgKind.QuarantinedMessage,
              quarantineOriginalProtobuf: t.slice().buffer,
              quarantineExtractedText: n,
            },
          ),
        ],
      };
    }
    function N(e) {
      return M.apply(this, arguments);
    }
    function M() {
      return (
        (M = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t,
            a,
            i = e.bizInfo,
            l = e.decrypted,
            s = e.e2eInfo,
            u = e.hsmInfo,
            c = e.info,
            d = e.isPadded,
            m = d === void 0 ? !0 : d,
            p = e.msgBotInfo,
            _ = e.msgMeta,
            f = e.paymentInfo,
            g = e.reparsing,
            h = g === void 0 ? !1 : g,
            I = e.reportingTokenInfo,
            T =
              s.e2eType === o("WAWebBackendJobs.flow").CiphertextType.Msmsg
                ? !1
                : m,
            D = T
              ? o("WACryptoPkcs7").unpadPkcs7(new Uint8Array(l))
              : new Uint8Array(l),
            x = o("decodeProtobuf").decodeProtobuf(
              o("WAWebProtobufsE2E.pb").MessageSpec,
              D,
            );
          (o(
            "WAWebVerifyProtobufMsgObjectKeys",
          ).verifyProtobufMessageObjectKeys(x),
            o("WAWebMessageSecretLocationUtils").verifyTopLevelMessageSecret(
              x,
              o("WAWebMessageSecretLocationUtils").MessageSecretCheckContext
                .Receiver,
              c.externalId,
            ));
          var $ = null,
            N =
              (t = x.deviceSentMessage) == null || (t = t.message) == null
                ? void 0
                : t.conditionalRevealMessage,
            M = (a = x.conditionalRevealMessage) != null ? a : N;
          if (M != null) {
            var A,
              O,
              B,
              W,
              q,
              U,
              G,
              z =
                x.conditionalRevealMessage == null && N != null
                  ? (A =
                      (O =
                        (B = x.deviceSentMessage) == null
                          ? void 0
                          : B.destinationJid) != null
                        ? O
                        : (W = c.chat) == null
                          ? void 0
                          : W.toString()) != null
                    ? A
                    : ""
                  : (q = (U = c.chat) == null ? void 0 : U.toString()) != null
                    ? q
                    : "",
              j =
                c.author != null &&
                !o("WAWebUserPrefsMeUser").isMeAccount(c.author)
                  ? c.author.toString()
                  : null,
              K = yield o(
                "WAWebConditionalRevealPreProcessor",
              ).maybePreProcessConditionalRevealForReceive({
                conditionalRevealMessage: M,
                msgId: c.externalId,
                rawChatJid: z,
                reportingTokenInfo: I,
                senderJid: j,
                stanzaScheduledMsgMeta:
                  (G = _ == null ? void 0 : _.scheduledMsgMeta) != null
                    ? G
                    : null,
              });
            if (
              (K.proto != null &&
                K.protoBytes != null &&
                ((x = K.proto),
                (D = K.protoBytes),
                o(
                  "WAWebVerifyProtobufMsgObjectKeys",
                ).verifyProtobufMessageObjectKeys(x),
                o(
                  "WAWebMessageSecretLocationUtils",
                ).verifyTopLevelMessageSecret(
                  x,
                  o("WAWebMessageSecretLocationUtils").MessageSecretCheckContext
                    .Receiver,
                  c.externalId,
                )),
              ($ = K.scheduledMsgViewMode),
              K.isRevealPending)
            )
              return (
                o("WALogger").LOG(
                  y ||
                    (y = babelHelpers.taggedTemplateLiteralLoose([
                      "[scheduled_msg] reveal-pending, skip processing msgId=",
                      "",
                    ])),
                  c.externalId,
                ),
                { hasInactiveMsg: !1 }
              );
          }
          var Q = o("WAWebMsgProcessingApiUtils").getFrom(c),
            X =
              (s.retryCount > 0 &&
                o("WAWebMsgProcessingApiUtils").isRevokeInfo(c)) ||
              h,
            Y = X
              ? o("WAWebHandleMsgTypes.flow").MessageOverwriteOption.RETRY
              : o("WAWebHandleMsgTypes.flow").MessageOverwriteOption
                  .NO_OVERWRITE,
            J = null;
          if (h) {
            ((J = r("justknobx")._("5752")
              ? yield o("WAWebQuarantineActionUtils").getQuarantineAction(x, Q)
              : o("WAWebQuarantineActionUtils").QuarantineAction.NoQuarantine),
              o("WALogger")
                .LOG(
                  C ||
                    (C = babelHelpers.taggedTemplateLiteralLoose([
                      "[processDecryptedMessageProto] reparsing msgId=",
                      "",
                    ])),
                  c.externalId,
                )
                .tags("messaging"));
            var Z =
              J ===
              o("WAWebQuarantineActionUtils").QuarantineAction.NoQuarantine
                ? yield o("WAWebMsgProcessingApiUtils").parseMessage({
                    info: c,
                    ciphertextType: s.e2eType,
                    msgProtobuf: x,
                    paymentInfo: f,
                    bizInfo: i,
                    hsmInfo: u,
                    hidePlaceholder: s.hideFail,
                    processDecryptedProtoParams: e,
                    msgBotInfo: p,
                    meta: _,
                    reportingTokenInfo: I,
                    isMessageRetry: s.retryCount > 0,
                    isOffline: c.offline != null,
                    protobufBytes: D,
                  })
                : P(
                    c,
                    D,
                    o("WAWebQuarantineActionUtils").maybeGetQuarantineText(J),
                  );
            if (Z.renderableMsgs == null)
              o("WALogger").ERROR(
                b ||
                  (b = babelHelpers.taggedTemplateLiteralLoose([
                    "parsed render able msgs not reparsed as expected",
                  ])),
              );
            else {
              var ee = o(
                "WAWebConditionalRevealPreProcessor",
              ).applyScheduledMsgViewMode(Z.renderableMsgs, $);
              (o("WAWebHandleMsgValidate").renderableMessagesValidation({
                renderableMsgs: ee,
                msgMeta: _,
                info: c,
                proto: x,
                bizInfo: i,
              }),
                o(
                  "WAWebMessagingGatingUtils",
                ).isWebReportingTokenDelayProcessingEnabled() ||
                  (yield o(
                    "WAWebHandleMsgValidate",
                  ).validateAndProcessReportingTokenInfo({
                    renderableMsgs: ee,
                  })));
              var te = w({
                  renderableMsgs: ee,
                  reparsing: !0,
                  bizInfo: i,
                  msgMeta: _,
                  paymentInfo: f,
                  info: c,
                  messageOverwriteOption: Y,
                }),
                ne = te.hasInactiveMsg,
                re = te.tasks;
              return (
                yield (k || (k = n("Promise"))).all(re),
                o("WALogger")
                  .LOG(
                    v ||
                      (v = babelHelpers.taggedTemplateLiteralLoose([
                        "[processDecryptedMessageProto] reparsed msgId=",
                        "",
                      ])),
                    c.externalId,
                  )
                  .tags("messaging"),
                { hasInactiveMsg: ne }
              );
            }
          }
          var oe = yield o("WAWebHandleMsgProcessUtils").preProcessMsg(c, x);
          if (
            ((oe == null ? void 0 : oe.senderOrRecipientAccountTypeHosted) ===
              !0 && (c.senderOrRecipientAccountTypeHosted = !0),
            (oe == null ? void 0 : oe.hostedBizEncMismatch) === !0 &&
              (c.hostedBizEncStateMismatch = !0),
            c.type ===
              o("WAWebHandleMsgTypes.flow").MESSAGE_TYPE.PEER_BROADCAST &&
              s.retryCount > 0)
          ) {
            var ae = yield o("WAWebDBMsgUtils").getMsgByMsgKey(
              o("WAWebMsgProcessingApiUtils").messageInfoToKey(c),
            );
            (ae == null ? void 0 : ae.bclParticipants) != null
              ? (c.bclParticipants = ae.bclParticipants)
              : (ae == null ? void 0 : ae.broadcastParticipants) != null &&
                (c.bclParticipants = ae.broadcastParticipants.map(function (e) {
                  return { wid: o("WAWebWidFactory").asUserWidOrThrow(e) };
                }));
          }
          var ie = o(
              "WAWebOfflineResumeMsgProcessReporterWorkerCompatible",
            ).msgProcessReporter.startMarker(
              o("WAWebOfflineResumeMsgProcessReporterWorkerCompatible")
                .msgProcessReporter.stage.Parsing,
            ),
            le =
              J != null
                ? J
                : yield o("WAWebQuarantineActionUtils").getQuarantineAction(
                    x,
                    Q,
                  ),
            se =
              le ===
              o("WAWebQuarantineActionUtils").QuarantineAction.NoQuarantine
                ? yield o("WAWebMsgProcessingApiUtils").parseMessage({
                    info: c,
                    ciphertextType: s.e2eType,
                    msgProtobuf: x,
                    paymentInfo: f,
                    bizInfo: i,
                    hsmInfo: u,
                    hidePlaceholder: s.hideFail,
                    processDecryptedProtoParams: e,
                    msgBotInfo: p,
                    meta: _,
                    reportingTokenInfo: I,
                    isMessageRetry: s.retryCount > 0,
                    isOffline: c.offline != null,
                    protobufBytes: D,
                  })
                : P(
                    c,
                    D,
                    o("WAWebQuarantineActionUtils").maybeGetQuarantineText(le),
                  );
          if (
            o("WAWebCurrentUser").isEmployee() &&
            o("WAWebABProps").getABPropConfigValue(
              "wa_web_debug_color_code_retry_messages",
            )
          ) {
            var ue;
            (ue = se.renderableMsgs) == null ||
              ue.forEach(function (e) {
                s.retryCount > 0 && (e.backgroundColor = 16711680);
              });
          }
          ie == null || ie();
          var ce = null;
          if (
            (se.history
              ? (ce = o("WAWebParsedProtocolMsgType")
                  .PARSED_PROTOCOL_MESSAGE_TYPE.HISTORY)
              : se.appStateSyncKeyShare
                ? (ce = o("WAWebParsedProtocolMsgType")
                    .PARSED_PROTOCOL_MESSAGE_TYPE.APP_STATE_SYNC_KEY_SHARE)
                : se.appStateSyncKeyRequest
                  ? (ce = o("WAWebParsedProtocolMsgType")
                      .PARSED_PROTOCOL_MESSAGE_TYPE.APP_STATE_SYNC_KEY_REQUEST)
                  : se.peerDataOperationRequestResponseMessage
                    ? (ce = o("WAWebParsedProtocolMsgType")
                        .PARSED_PROTOCOL_MESSAGE_TYPE
                        .PEER_DATA_OPERATION_REQUEST_RESPONSE_MESSAGE)
                    : se.peerDataOperationRequestMessage &&
                      (ce = o("WAWebParsedProtocolMsgType")
                        .PARSED_PROTOCOL_MESSAGE_TYPE
                        .PEER_DATA_OPERATION_REQUEST_MESSAGE),
            o("WAWebRuntimeEnvironmentUtils").isWorker() && ce)
          )
            yield o("WAWebApiDeferredMessagesStorage").updateDeferredMessages([
              {
                id: c.externalId,
                type: ce,
                plaintext: D,
                info: c,
                paymentInfo: f,
                bizInfo: i,
              },
            ]);
          else if (se.history)
            o("WAWebWorkerSafeBackendApi").workerSafeSendAndReceive(
              "handleHistorySyncNotification",
              {
                historySyncMetaData: se.history,
                from: Q,
                externalId: c.externalId,
              },
            );
          else if (se.appStateSyncKeyShare)
            yield o("WAWebWorkerSafeBackendApi").workerSafeSendAndReceive(
              "handleAppStateSyncKeyShare",
              { keyShare: se.appStateSyncKeyShare, from: Q },
            );
          else if (se.appStateSyncKeyRequest)
            o("WAWebWorkerSafeBackendApi").workerSafeSendAndReceive(
              "handleAppStateSyncKeyRequest",
              { keyRequest: se.appStateSyncKeyRequest, from: Q },
            );
          else if (se.peerDataOperationRequestResponseMessage)
            o("WAWebWorkerSafeBackendApi").workerSafeSendAndReceive(
              "handlePeerDataOperationRequestResponse",
              {
                stanzaId: c.externalId,
                response: se.peerDataOperationRequestResponseMessage,
              },
            );
          else if (se.peerDataOperationRequestMessage)
            o("WAWebWorkerSafeBackendApi").workerSafeSendAndReceive(
              "handlePeerDataOperationRequest",
              {
                stanzaId: c.externalId,
                request: se.peerDataOperationRequestMessage,
              },
            );
          else if (se.securityNotificationEnabled)
            Q == null || !(Q instanceof r("WAWebWid"))
              ? o("WALogger")
                  .ERROR(
                    S ||
                      (S = babelHelpers.taggedTemplateLiteralLoose([
                        "Handle security notification empty wid error",
                      ])),
                  )
                  .sendLogs("Handle security notification empty wid error")
              : o("WAWebUserPrefsMeUser").isMePrimary(Q)
                ? o(
                    "WAWebUserPrefsNotifications",
                  ).setGlobalSecurityNotifications(
                    se.securityNotificationEnabled.isEnabled,
                  )
                : o("WALogger")
                    .ERROR(
                      R ||
                        (R = babelHelpers.taggedTemplateLiteralLoose([
                          "Handle security notification payload wid error",
                        ])),
                    )
                    .sendLogs("Handle security notification payload wid error");
          else if (se.cloudApiThreadControlNotification)
            r("WAWebHandleCloudApiThreadControlNotification")(
              se.cloudApiThreadControlNotification,
            );
          else if (se.lidMigrationSyncMessage != null)
            o("WALogger")
              .ERROR(
                L ||
                  (L = babelHelpers.taggedTemplateLiteralLoose([
                    "[LID] received peer migration stanza but client-to-LID migration is no longer supported",
                  ])),
              )
              .sendLogs(
                o("WAWebUserPrefsMeUser").isMeAccount(Q)
                  ? "lid-migration-peer-stanza-received"
                  : "lid-migration-non-peer-stanza-received",
              );
          else {
            var de = !1;
            if (
              (se.deviceSent == null
                ? (de = !0)
                : se.deviceSent.phash
                  ? (de = yield o("WAWebHandleMsgValidate").validateBclHash(
                      se.deviceSent.phash,
                      se.deviceSent.info,
                    ))
                  : se.deviceSent.destination &&
                    (de = yield o(
                      "WAWebHandleMsgValidate",
                    ).validateMsgDestination(se.deviceSent.destination, c)),
              !de)
            )
              throw new (o("WAWebHandleMsgError").DeviceSentMessageError)(
                o("WAWebMsgProcessingApiUtils").getDeviceType(c.author),
                o("WAWebWamEnumDsmError").DSM_ERROR.INVALID_DSM,
              );
            var me = se.renderableMsgs;
            if (
              (o("WAWebHandleMsgValidate").renderableMessagesValidation({
                renderableMsgs: me,
                msgMeta: _,
                info: c,
                proto: x,
                bizInfo: i,
              }),
              !o(
                "WAWebMessagingGatingUtils",
              ).isWebReportingTokenDelayProcessingEnabled())
            ) {
              var pe = o(
                "WAWebOfflineResumeMsgProcessReporterWorkerCompatible",
              ).msgProcessReporter.startMarker(
                o("WAWebOfflineResumeMsgProcessReporterWorkerCompatible")
                  .msgProcessReporter.stage.ProcessReportingTokenInfo,
              );
              (yield o(
                "WAWebHandleMsgValidate",
              ).validateAndProcessReportingTokenInfo({ renderableMsgs: me }),
                pe == null || pe());
            }
            var _e = yield o(
                "WAWebGalaxyFlowsUtils",
              ).maybeAddGalaxyFlowMessageIds(me),
              fe = o(
                "WAWebConditionalRevealPreProcessor",
              ).applyScheduledMsgViewMode(
                se.storeMsg != null ? [se.storeMsg].concat(_e) : _e,
                $,
              ),
              ge = w({
                renderableMsgs: fe,
                reparsing: h,
                bizInfo: i,
                msgMeta: _,
                paymentInfo: f,
                info: c,
                messageOverwriteOption: Y,
              }),
              he = ge.hasInactiveMsg,
              ye = ge.tasks,
              Ce = !1;
            if (
              o("WAWebABProps").getABPropConfigValue(
                "web_send_orphan_in_receipts_enabled",
              )
            ) {
              var be = fe[0],
                ve = F(be);
              if (ve != null) {
                var Se = yield o("WAWebAddonQueryUtils").getParentMsgsByMsgKey([
                    ve,
                  ]),
                  Re = Se.get(ve.toString());
                Ce =
                  Re == null ||
                  Re.type === o("WAWebMsgType").MSG_TYPE.CIPHERTEXT ||
                  (Re.type === o("WAWebMsgType").MSG_TYPE.UNKNOWN &&
                    (Re.futureproofType == null ||
                      !o(
                        "WAWebMessageAssociationConstants",
                      ).orphanIneligibleFutureproofTypes.has(
                        Re.futureproofType,
                      )));
              }
            }
            var Le = se.senderKey;
            Le != null &&
              ye.push(
                o("WAWebSignal").Session.createGroupSignalSession(
                  c.author,
                  Le.groupId,
                  Le.key,
                ),
              );
            var Ee = se.rootSecretDistribute;
            if (Ee != null)
              if (o("WAWebUserPrefsMeUser").isMeAccount(c.author)) {
                var ke = Ee.chatJid,
                  Ie = Ee.rootSecret,
                  Te = Ee.stanzaId;
                ye.push(
                  o("WAWebWasaRootSecretWriter").applyWasaRootSecretForId(
                    ke,
                    Te,
                    Ie,
                  ),
                );
              } else
                o("WALogger").WARN(
                  E ||
                    (E = babelHelpers.taggedTemplateLiteralLoose([
                      "[wasa] dropping rootSecretDistribute from non-self author ",
                      "",
                    ])),
                  c.author.toString(),
                );
            r("isStringNullOrEmpty")(c.pushname) ||
              o("WAWebHandlePushnameUpdate").updatePushname(
                c.author,
                c.pushname,
                c.offline != null,
              );
            var De = V(c.chat);
            yield (k || (k = n("Promise"))).all(ye);
            var xe = yield De;
            return (
              o(
                "WAWebLogMissingGroupParticipantMappings",
              ).logMissingGroupParticipantMappings({
                author: c.author,
                groupId: c.chat,
                localAddressingMode: xe,
                serverAddressingMode: c.addressingMode,
              }),
              o("WAWebLogReceivedMessages").logReceivedMessagesInWAM({
                msgs: _e,
                offline: H(c.offline),
                tsMillis: c.ts * 1e3,
                clientReceivedTsMillis: c.clientReceivedTsMillis,
                msgProcessStartTsMillis: c.msgProcessStartTsMillis,
                serverAddressingMode: c.addressingMode,
                localAddressingMode: xe,
                oppositeHasUsername: o("WAWebUserPrefsMeUser").isMeAccount(
                  c.author,
                )
                  ? c.peerRecipientUsername != null
                  : c.username != null,
                sessionScope: o(
                  "WAWebSessionScopeWamUtils",
                ).getIncomingSkdmSessionScopeForMessageReceive({
                  from: o("WAWebMsgProcessingApiUtils").getFrom(c),
                  isGroupStatus: _ == null ? void 0 : _.isGroupStatus,
                  isSkdm: _ == null ? void 0 : _.isSkdm,
                  metaSessionScope: _ == null ? void 0 : _.metaSessionScope,
                }),
              }),
              { hasInactiveMsg: he, isOrphanAddon: Ce }
            );
          }
          return { hasInactiveMsg: !1 };
        })),
        M.apply(this, arguments)
      );
    }
    function w(e) {
      var t,
        n,
        r,
        a,
        i,
        l = e.bizInfo,
        s = e.info,
        y = e.messageOverwriteOption,
        C = e.msgMeta,
        b = e.paymentInfo,
        v = e.renderableMsgs,
        S = e.reparsing,
        R = [],
        L = !1,
        E = v[0],
        k =
          $ != null && $(E == null ? void 0 : E.type)
            ? T == null
              ? void 0
              : T(E)
            : null;
      return (
        k != null
          ? (o("WALogger").LOG(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "processMsgs: addon",
                ])),
            ),
            (L = !0),
            R.push(
              q({
                messageOverwriteOption: y,
                msg: k,
                msgInfo: s,
                reparsing: S,
              }),
            ))
          : E != null && E.kind === o("WAWebMsgType").MsgKind.PollVoteEncrypted
            ? (o("WALogger").LOG(
                c ||
                  (c = babelHelpers.taggedTemplateLiteralLoose([
                    "processMsgs: pollVote",
                  ])),
              ),
              R.push(B(E, s, S)))
            : ((t = v[0]) == null ? void 0 : t.type) ===
                o("WAWebMsgType").MSG_TYPE.KEEP_IN_CHAT
              ? (o("WALogger").LOG(
                  d ||
                    (d = babelHelpers.taggedTemplateLiteralLoose([
                      "processMsgs: keepInChat",
                    ])),
                ),
                (L = !0),
                R.push(
                  o("WAWebHandleMsgProcessUtils").processKeepInChatMsg(
                    v[0],
                    s,
                    S,
                  ),
                ))
              : ((n = v[0]) == null ? void 0 : n.type) ===
                    o("WAWebMsgType").MSG_TYPE.PROTOCOL &&
                  ((r = v[0]) == null ? void 0 : r.subtype) === "message_edit"
                ? (o("WALogger").LOG(
                    m ||
                      (m = babelHelpers.taggedTemplateLiteralLoose([
                        "processMsgs: messageEdit",
                      ])),
                  ),
                  R.push(
                    o("WAWebHandleMsgProcessUtils").processEditProtocolMsg(
                      v[0],
                      s,
                      S,
                    ),
                  ))
                : ((a = v[0]) == null ? void 0 : a.type) ===
                      o("WAWebMsgType").MSG_TYPE.PROTOCOL &&
                    ((i = v[0]) == null ? void 0 : i.subtype) ===
                      "ephemeral_sync_response"
                  ? (o("WALogger").LOG(
                      p ||
                        (p = babelHelpers.taggedTemplateLiteralLoose([
                          "processMsgs: ephemeralSyncResponse",
                        ])),
                    ),
                    R.push(
                      o(
                        "WAWebHandleMsgProcessUtils",
                      ).processEphemeralSyncResponseMsg({
                        msg: v[0],
                        msgInfo: s,
                        reparsing: S,
                      }),
                    ))
                  : v.length > 0 &&
                    ((E == null ? void 0 : E.type) ===
                      o("WAWebMsgType").MSG_TYPE.PROTOCOL &&
                    (E == null ? void 0 : E.subtype) === "member_label"
                      ? (o("WALogger").LOG(
                          _ ||
                            (_ = babelHelpers.taggedTemplateLiteralLoose([
                              "processMsgs: memberLabel",
                            ])),
                        ),
                        (L = !0))
                      : (E == null ? void 0 : E.type) ===
                            o("WAWebMsgType").MSG_TYPE.PROTOCOL &&
                          (E == null ? void 0 : E.subtype) ===
                            "hatch_metadata_sync"
                        ? (o("WALogger").LOG(
                            f ||
                              (f = babelHelpers.taggedTemplateLiteralLoose([
                                "processMsgs: hatchMetadataSync",
                              ])),
                          ),
                          (L = !0))
                        : (E == null ? void 0 : E.type) ===
                              o("WAWebMsgType").MSG_TYPE.REACTION ||
                            (E == null ? void 0 : E.type) ===
                              o("WAWebMsgType").MSG_TYPE.REACTION_ENC
                          ? (o("WALogger").LOG(
                              g ||
                                (g = babelHelpers.taggedTemplateLiteralLoose([
                                  "processMsgs: reaction",
                                ])),
                            ),
                            (L = !0))
                          : (E == null ? void 0 : E.type) ===
                                o("WAWebMsgType").MSG_TYPE
                                  .MESSAGE_HISTORY_BUNDLE ||
                              (E == null ? void 0 : E.type) ===
                                o("WAWebMsgType").MSG_TYPE
                                  .MESSAGE_HISTORY_NOTICE
                            ? (L = !0)
                            : o("WALogger").LOG(
                                h ||
                                  (h = babelHelpers.taggedTemplateLiteralLoose([
                                    "processMsgs: renderableMsgs",
                                  ])),
                              ),
                    R.push(A(v, s, b, l, C, y, S))),
        { tasks: R, hasInactiveMsg: L }
      );
    }
    function A(e, t, n, r, a, i, l) {
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
    function F(e) {
      if (e == null) return null;
      if ((T == null ? void 0 : T(e)) != null) {
        var t;
        return (t = D == null ? void 0 : D(e)) != null ? t : null;
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
    function O(e) {
      return o("WAWebMessageProcessPlaceholder").processPlaceholderMessage(e);
    }
    function B(e, t, n) {
      return W.apply(this, arguments);
    }
    function W() {
      return (
        (W = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
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
        W.apply(this, arguments)
      );
    }
    function q(e) {
      return U.apply(this, arguments);
    }
    function U() {
      return (
        (U = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
            t === o("WAWebHandleMsgTypes.flow").MessageOverwriteOption.RETRY &&
              o("WAWebBackendApi").frontendFireAndForget("removePlaceholder", {
                msg: n,
              }));
        })),
        U.apply(this, arguments)
      );
    }
    function V(e) {
      return o("WAWebGetGroupAddressingMode").getGroupAddressingMode(e);
    }
    function H(e) {
      var t = parseInt(e, 10);
      return Number.isNaN(t) ? null : t;
    }
    ((l.processDecryptedMessageProto = N),
      (l.processMsgs = w),
      (l.processRenderableMsg = A),
      (l.processPlaceholderMsg = O));
  },
  98,
);
