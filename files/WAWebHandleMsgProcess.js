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
    "WAWebBizCoexGatingUtils",
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
    "WAWebLid1X1ThreadAccountMigrations",
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
    "WAWebSignal",
    "WAWebUserPrefsMeUser",
    "WAWebUserPrefsNotifications",
    "WAWebVerifyProtobufMsgObjectKeys",
    "WAWebWamEnumDsmError",
    "WAWebWid",
    "WAWebWidFactory",
    "WAWebWorkerSafeBackendApi",
    "asyncToGeneratorRuntime",
    "cr:10197",
    "cr:37440",
    "cr:37441",
    "decodeProtobuf",
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
      L = (e = n("cr:37440")) != null ? e : {},
      E = L.castToAddonMsgData,
      k = L.getParentMsgKey,
      I = (s = n("cr:37441")) != null ? s : {},
      T = I.isUnifiedInfraEnabledForType;
    function D(e) {
      return x.apply(this, arguments);
    }
    function x() {
      return (
        (x = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
            L = g === void 0 ? !1 : g,
            E = e.reportingTokenInfo,
            k =
              s.e2eType === o("WAWebBackendJobs.flow").CiphertextType.Msmsg
                ? !1
                : m,
            I = k
              ? o("WACryptoPkcs7").unpadPkcs7(new Uint8Array(l))
              : new Uint8Array(l),
            T = o("decodeProtobuf").decodeProtobuf(
              o("WAWebProtobufsE2E.pb").MessageSpec,
              I,
            );
          (o(
            "WAWebVerifyProtobufMsgObjectKeys",
          ).verifyProtobufMessageObjectKeys(T),
            o("WAWebMessageSecretLocationUtils").verifyTopLevelMessageSecret(
              T,
              o("WAWebMessageSecretLocationUtils").MessageSecretCheckContext
                .Receiver,
              c.externalId,
            ));
          var D = null,
            x =
              (t = T.deviceSentMessage) == null || (t = t.message) == null
                ? void 0
                : t.conditionalRevealMessage,
            P = (a = T.conditionalRevealMessage) != null ? a : x;
          if (P != null) {
            var M,
              w,
              A,
              F,
              O,
              q,
              U,
              V =
                T.conditionalRevealMessage == null && x != null
                  ? (M =
                      (w =
                        (A = T.deviceSentMessage) == null
                          ? void 0
                          : A.destinationJid) != null
                        ? w
                        : (F = c.chat) == null
                          ? void 0
                          : F.toString()) != null
                    ? M
                    : ""
                  : (O = (q = c.chat) == null ? void 0 : q.toString()) != null
                    ? O
                    : "",
              H =
                c.author != null &&
                !o("WAWebUserPrefsMeUser").isMeAccount(c.author)
                  ? c.author.toString()
                  : null,
              G = yield o(
                "WAWebConditionalRevealPreProcessor",
              ).maybePreProcessConditionalRevealForReceive(
                P,
                c.externalId,
                V,
                H,
                (U = _ == null ? void 0 : _.scheduledMsgMeta) != null
                  ? U
                  : null,
              );
            if (
              (G.proto != null &&
                G.protoBytes != null &&
                ((T = G.proto),
                (I = G.protoBytes),
                o(
                  "WAWebVerifyProtobufMsgObjectKeys",
                ).verifyProtobufMessageObjectKeys(T),
                o(
                  "WAWebMessageSecretLocationUtils",
                ).verifyTopLevelMessageSecret(
                  T,
                  o("WAWebMessageSecretLocationUtils").MessageSecretCheckContext
                    .Receiver,
                  c.externalId,
                )),
              (D = G.scheduledMsgViewMode),
              G.isRevealPending)
            )
              return (
                o("WALogger").LOG(
                  h ||
                    (h = babelHelpers.taggedTemplateLiteralLoose([
                      "[scheduled_msg] reveal-pending, skip processing msgId=",
                      "",
                    ])),
                  c.externalId,
                ),
                { hasInactiveMsg: !1 }
              );
          }
          var z = o("WAWebMsgProcessingApiUtils").getFrom(c),
            j =
              (s.retryCount > 0 &&
                o("WAWebMsgProcessingApiUtils").isRevokeInfo(c)) ||
              L,
            K = j
              ? o("WAWebHandleMsgTypes.flow").MessageOverwriteOption.RETRY
              : o("WAWebHandleMsgTypes.flow").MessageOverwriteOption
                  .NO_OVERWRITE;
          if (L) {
            o("WALogger")
              .LOG(
                y ||
                  (y = babelHelpers.taggedTemplateLiteralLoose([
                    "[processDecryptedMessageProto] reparsing msgId=",
                    "",
                  ])),
                c.externalId,
              )
              .tags("messaging");
            var Q = yield o("WAWebMsgProcessingApiUtils").parseMessage({
              info: c,
              ciphertextType: s.e2eType,
              msgProtobuf: T,
              paymentInfo: f,
              bizInfo: i,
              hsmInfo: u,
              hidePlaceholder: s.hideFail,
              processDecryptedProtoParams: e,
              msgBotInfo: p,
              meta: _,
              reportingTokenInfo: E,
              isMessageRetry: s.retryCount > 0,
              isOffline: c.offline != null,
              protobufBytes: I,
            });
            if (Q.renderableMsgs == null)
              o("WALogger").ERROR(
                C ||
                  (C = babelHelpers.taggedTemplateLiteralLoose([
                    "parsed render able msgs not reparsed as expected",
                  ])),
              );
            else {
              var X = o(
                "WAWebConditionalRevealPreProcessor",
              ).applyScheduledMsgViewMode(Q.renderableMsgs, D);
              (o("WAWebHandleMsgValidate").renderableMessagesValidation({
                renderableMsgs: X,
                msgMeta: _,
                info: c,
                proto: T,
                bizInfo: i,
              }),
                o(
                  "WAWebMessagingGatingUtils",
                ).isWebReportingTokenDelayProcessingEnabled() ||
                  (yield o(
                    "WAWebHandleMsgValidate",
                  ).validateAndProcessReportingTokenInfo({
                    renderableMsgs: X,
                  })));
              var Y = $({
                  renderableMsgs: X,
                  reparsing: !0,
                  bizInfo: i,
                  msgMeta: _,
                  paymentInfo: f,
                  info: c,
                  messageOverwriteOption: K,
                }),
                J = Y.hasInactiveMsg,
                Z = Y.tasks;
              return (
                yield (R || (R = n("Promise"))).all(Z),
                o("WALogger")
                  .LOG(
                    b ||
                      (b = babelHelpers.taggedTemplateLiteralLoose([
                        "[processDecryptedMessageProto] reparsed msgId=",
                        "",
                      ])),
                    c.externalId,
                  )
                  .tags("messaging"),
                { hasInactiveMsg: J }
              );
            }
          }
          var ee = yield o("WAWebHandleMsgProcessUtils").preProcessMsg(c, T);
          if (
            (o("WAWebBizCoexGatingUtils").bizHostedDevicesEnabled() &&
              ((ee == null ? void 0 : ee.senderOrRecipientAccountTypeHosted) ===
                !0 && (c.senderOrRecipientAccountTypeHosted = !0),
              (ee == null ? void 0 : ee.hostedBizEncMismatch) === !0 &&
                (c.hostedBizEncStateMismatch = !0)),
            c.type ===
              o("WAWebHandleMsgTypes.flow").MESSAGE_TYPE.PEER_BROADCAST &&
              s.retryCount > 0)
          ) {
            var te = yield o("WAWebDBMsgUtils").getMsgByMsgKey(
              o("WAWebMsgProcessingApiUtils").messageInfoToKey(c),
            );
            (te == null ? void 0 : te.bclParticipants) != null
              ? (c.bclParticipants = te.bclParticipants)
              : (te == null ? void 0 : te.broadcastParticipants) != null &&
                (c.bclParticipants = te.broadcastParticipants.map(function (e) {
                  return { wid: o("WAWebWidFactory").asUserWidOrThrow(e) };
                }));
          }
          var ne = o(
              "WAWebOfflineResumeMsgProcessReporterWorkerCompatible",
            ).msgProcessReporter.startMarker(
              o("WAWebOfflineResumeMsgProcessReporterWorkerCompatible")
                .msgProcessReporter.stage.Parsing,
            ),
            re = L
              ? o("WAWebQuarantineActionUtils").QuarantineAction.NoQuarantine
              : yield o("WAWebQuarantineActionUtils").getQuarantineAction(T, z),
            oe =
              re ===
              o("WAWebQuarantineActionUtils").QuarantineAction.NoQuarantine
                ? yield o("WAWebMsgProcessingApiUtils").parseMessage({
                    info: c,
                    ciphertextType: s.e2eType,
                    msgProtobuf: T,
                    paymentInfo: f,
                    bizInfo: i,
                    hsmInfo: u,
                    hidePlaceholder: s.hideFail,
                    processDecryptedProtoParams: e,
                    msgBotInfo: p,
                    meta: _,
                    reportingTokenInfo: E,
                    isMessageRetry: s.retryCount > 0,
                    isOffline: c.offline != null,
                    protobufBytes: I,
                  })
                : {
                    deviceSent: null,
                    senderKey: null,
                    storeMsg: null,
                    renderableMsgs: [
                      babelHelpers.extends(
                        {},
                        o("WAWebMsgProcessingApiUtils").generateBaseMsg(c),
                        {
                          type: o("WAWebMsgType").MSG_TYPE.QUARANTINED,
                          kind: o("WAWebMsgType").MsgKind.QuarantinedMessage,
                          quarantineOriginalProtobuf: I.slice().buffer,
                          quarantineExtractedText: o(
                            "WAWebQuarantineActionUtils",
                          ).maybeGetQuarantineText(re),
                        },
                      ),
                    ],
                  };
          if (
            o("WAWebCurrentUser").isEmployee() &&
            o("WAWebABProps").getABPropConfigValue(
              "wa_web_debug_color_code_retry_messages",
            )
          ) {
            var ae;
            (ae = oe.renderableMsgs) == null ||
              ae.forEach(function (e) {
                s.retryCount > 0 && (e.backgroundColor = 16711680);
              });
          }
          ne == null || ne();
          var ie = null;
          if (
            (oe.history
              ? (ie = o("WAWebParsedProtocolMsgType")
                  .PARSED_PROTOCOL_MESSAGE_TYPE.HISTORY)
              : oe.appStateSyncKeyShare
                ? (ie = o("WAWebParsedProtocolMsgType")
                    .PARSED_PROTOCOL_MESSAGE_TYPE.APP_STATE_SYNC_KEY_SHARE)
                : oe.appStateSyncKeyRequest
                  ? (ie = o("WAWebParsedProtocolMsgType")
                      .PARSED_PROTOCOL_MESSAGE_TYPE.APP_STATE_SYNC_KEY_REQUEST)
                  : oe.peerDataOperationRequestResponseMessage
                    ? (ie = o("WAWebParsedProtocolMsgType")
                        .PARSED_PROTOCOL_MESSAGE_TYPE
                        .PEER_DATA_OPERATION_REQUEST_RESPONSE_MESSAGE)
                    : oe.peerDataOperationRequestMessage &&
                      (ie = o("WAWebParsedProtocolMsgType")
                        .PARSED_PROTOCOL_MESSAGE_TYPE
                        .PEER_DATA_OPERATION_REQUEST_MESSAGE),
            o("WAWebRuntimeEnvironmentUtils").isWorker() && ie)
          )
            yield r("WAWebApiDeferredMessagesStorage").updateDeferredMessages([
              {
                id: c.externalId,
                type: ie,
                plaintext: I,
                info: c,
                paymentInfo: f,
                bizInfo: i,
              },
            ]);
          else if (oe.history)
            o("WAWebWorkerSafeBackendApi").workerSafeSendAndReceive(
              "handleHistorySyncNotification",
              {
                historySyncMetaData: oe.history,
                from: z,
                externalId: c.externalId,
              },
            );
          else if (oe.appStateSyncKeyShare)
            yield o("WAWebWorkerSafeBackendApi").workerSafeSendAndReceive(
              "handleAppStateSyncKeyShare",
              { keyShare: oe.appStateSyncKeyShare, from: z },
            );
          else if (oe.appStateSyncKeyRequest)
            o("WAWebWorkerSafeBackendApi").workerSafeSendAndReceive(
              "handleAppStateSyncKeyRequest",
              { keyRequest: oe.appStateSyncKeyRequest, from: z },
            );
          else if (oe.peerDataOperationRequestResponseMessage)
            o("WAWebWorkerSafeBackendApi").workerSafeSendAndReceive(
              "handlePeerDataOperationRequestResponse",
              {
                stanzaId: c.externalId,
                response: oe.peerDataOperationRequestResponseMessage,
              },
            );
          else if (oe.peerDataOperationRequestMessage)
            o("WAWebWorkerSafeBackendApi").workerSafeSendAndReceive(
              "handlePeerDataOperationRequest",
              {
                stanzaId: c.externalId,
                request: oe.peerDataOperationRequestMessage,
              },
            );
          else if (oe.securityNotificationEnabled)
            z == null || !(z instanceof r("WAWebWid"))
              ? o("WALogger")
                  .ERROR(
                    v ||
                      (v = babelHelpers.taggedTemplateLiteralLoose([
                        "Handle security notification empty wid error",
                      ])),
                  )
                  .sendLogs("Handle security notification empty wid error")
              : o("WAWebUserPrefsMeUser").isMePrimary(z)
                ? o(
                    "WAWebUserPrefsNotifications",
                  ).setGlobalSecurityNotifications(
                    oe.securityNotificationEnabled.isEnabled,
                  )
                : o("WALogger")
                    .ERROR(
                      S ||
                        (S = babelHelpers.taggedTemplateLiteralLoose([
                          "Handle security notification payload wid error",
                        ])),
                    )
                    .sendLogs("Handle security notification payload wid error");
          else if (oe.cloudApiThreadControlNotification)
            r("WAWebHandleCloudApiThreadControlNotification")(
              oe.cloudApiThreadControlNotification,
            );
          else if (oe.lidMigrationSyncMessage != null) {
            var le;
            yield o(
              "WAWebLid1X1ThreadAccountMigrations",
            ).setLidMigrationMappings(
              (le = oe.lidMigrationSyncMessage) == null
                ? void 0
                : le.encodedMappingPayload,
            );
          } else {
            var se = !1;
            if (
              (oe.deviceSent == null
                ? (se = !0)
                : oe.deviceSent.phash
                  ? (se = yield o("WAWebHandleMsgValidate").validateBclHash(
                      oe.deviceSent.phash,
                      oe.deviceSent.info,
                    ))
                  : oe.deviceSent.destination &&
                    (se = yield o(
                      "WAWebHandleMsgValidate",
                    ).validateMsgDestination(oe.deviceSent.destination, c)),
              !se)
            )
              throw new (o("WAWebHandleMsgError").DeviceSentMessageError)(
                o("WAWebMsgProcessingApiUtils").getDeviceType(c.author),
                o("WAWebWamEnumDsmError").DSM_ERROR.INVALID_DSM,
              );
            var ue = oe.renderableMsgs;
            if (
              (o("WAWebHandleMsgValidate").renderableMessagesValidation({
                renderableMsgs: ue,
                msgMeta: _,
                info: c,
                proto: T,
                bizInfo: i,
              }),
              !o(
                "WAWebMessagingGatingUtils",
              ).isWebReportingTokenDelayProcessingEnabled())
            ) {
              var ce = o(
                "WAWebOfflineResumeMsgProcessReporterWorkerCompatible",
              ).msgProcessReporter.startMarker(
                o("WAWebOfflineResumeMsgProcessReporterWorkerCompatible")
                  .msgProcessReporter.stage.ProcessReportingTokenInfo,
              );
              (yield o(
                "WAWebHandleMsgValidate",
              ).validateAndProcessReportingTokenInfo({ renderableMsgs: ue }),
                ce == null || ce());
            }
            var de = yield o(
                "WAWebGalaxyFlowsUtils",
              ).maybeAddGalaxyFlowMessageIds(ue),
              me = o(
                "WAWebConditionalRevealPreProcessor",
              ).applyScheduledMsgViewMode(
                oe.storeMsg != null ? [oe.storeMsg].concat(de) : de,
                D,
              ),
              pe = $({
                renderableMsgs: me,
                reparsing: L,
                bizInfo: i,
                msgMeta: _,
                paymentInfo: f,
                info: c,
                messageOverwriteOption: K,
              }),
              _e = pe.hasInactiveMsg,
              fe = pe.tasks,
              ge = !1;
            if (
              o("WAWebABProps").getABPropConfigValue(
                "receipt_mode_bitmask_enabled",
              )
            ) {
              var he = me[0],
                ye = N(he);
              if (ye != null) {
                var Ce = yield o("WAWebAddonQueryUtils").getParentMsgsByMsgKey([
                    ye,
                  ]),
                  be = Ce.get(ye.toString());
                ge =
                  be == null ||
                  be.type === o("WAWebMsgType").MSG_TYPE.CIPHERTEXT ||
                  (be.type === o("WAWebMsgType").MSG_TYPE.UNKNOWN &&
                    (be.futureproofType == null ||
                      !o(
                        "WAWebMessageAssociationConstants",
                      ).orphanIneligibleFutureproofTypes.has(
                        be.futureproofType,
                      )));
              }
            }
            var ve = oe.senderKey;
            (ve != null &&
              fe.push(
                o("WAWebSignal").Session.createGroupSignalSession(
                  c.author,
                  ve.groupId,
                  ve.key,
                ),
              ),
              r("isStringNullOrEmpty")(c.pushname) ||
                o("WAWebHandlePushnameUpdate").updatePushname(
                  c.author,
                  c.pushname,
                  c.offline != null,
                ));
            var Se = B(c.chat);
            yield (R || (R = n("Promise"))).all(fe);
            var Re = yield Se;
            return (
              o(
                "WAWebLogMissingGroupParticipantMappings",
              ).logMissingGroupParticipantMappings({
                author: c.author,
                groupId: c.chat,
                localAddressingMode: Re,
                serverAddressingMode: c.addressingMode,
              }),
              o("WAWebLogReceivedMessages").logReceivedMessagesInWAM({
                msgs: de,
                offline: W(c.offline),
                tsMillis: c.ts * 1e3,
                clientReceivedTsMillis: c.clientReceivedTsMillis,
                msgProcessStartTsMillis: c.msgProcessStartTsMillis,
                serverAddressingMode: c.addressingMode,
                localAddressingMode: Re,
              }),
              { hasInactiveMsg: _e, isOrphanAddon: ge }
            );
          }
          return { hasInactiveMsg: !1 };
        })),
        x.apply(this, arguments)
      );
    }
    function $(e) {
      var t,
        n,
        r,
        a,
        i,
        l = e.bizInfo,
        s = e.info,
        h = e.messageOverwriteOption,
        y = e.msgMeta,
        C = e.paymentInfo,
        b = e.renderableMsgs,
        v = e.reparsing,
        S = [],
        R = !1,
        L = b[0],
        k =
          T != null && T(L == null ? void 0 : L.type)
            ? E == null
              ? void 0
              : E(L)
            : null;
      return (
        k != null
          ? (o("WALogger").LOG(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "processMsgs: addon",
                ])),
            ),
            (R = !0),
            S.push(
              F({
                messageOverwriteOption: h,
                msg: k,
                msgInfo: s,
                reparsing: v,
              }),
            ))
          : L != null && L.kind === o("WAWebMsgType").MsgKind.PollVoteEncrypted
            ? (o("WALogger").LOG(
                c ||
                  (c = babelHelpers.taggedTemplateLiteralLoose([
                    "processMsgs: pollVote",
                  ])),
              ),
              S.push(w(L, s, v)))
            : ((t = b[0]) == null ? void 0 : t.type) ===
                o("WAWebMsgType").MSG_TYPE.KEEP_IN_CHAT
              ? (o("WALogger").LOG(
                  d ||
                    (d = babelHelpers.taggedTemplateLiteralLoose([
                      "processMsgs: keepInChat",
                    ])),
                ),
                (R = !0),
                S.push(
                  o("WAWebHandleMsgProcessUtils").processKeepInChatMsg(
                    b[0],
                    s,
                    v,
                  ),
                ))
              : ((n = b[0]) == null ? void 0 : n.type) ===
                    o("WAWebMsgType").MSG_TYPE.PROTOCOL &&
                  ((r = b[0]) == null ? void 0 : r.subtype) === "message_edit"
                ? (o("WALogger").LOG(
                    m ||
                      (m = babelHelpers.taggedTemplateLiteralLoose([
                        "processMsgs: messageEdit",
                      ])),
                  ),
                  S.push(
                    o("WAWebHandleMsgProcessUtils").processEditProtocolMsg(
                      b[0],
                      s,
                      v,
                    ),
                  ))
                : ((a = b[0]) == null ? void 0 : a.type) ===
                      o("WAWebMsgType").MSG_TYPE.PROTOCOL &&
                    ((i = b[0]) == null ? void 0 : i.subtype) ===
                      "ephemeral_sync_response"
                  ? (o("WALogger").LOG(
                      p ||
                        (p = babelHelpers.taggedTemplateLiteralLoose([
                          "processMsgs: ephemeralSyncResponse",
                        ])),
                    ),
                    S.push(
                      o(
                        "WAWebHandleMsgProcessUtils",
                      ).processEphemeralSyncResponseMsg({
                        msg: b[0],
                        msgInfo: s,
                        reparsing: v,
                      }),
                    ))
                  : b.length > 0 &&
                    ((L == null ? void 0 : L.type) ===
                      o("WAWebMsgType").MSG_TYPE.PROTOCOL &&
                    (L == null ? void 0 : L.subtype) === "member_label"
                      ? (o("WALogger").LOG(
                          _ ||
                            (_ = babelHelpers.taggedTemplateLiteralLoose([
                              "processMsgs: memberLabel",
                            ])),
                        ),
                        (R = !0))
                      : (L == null ? void 0 : L.type) ===
                            o("WAWebMsgType").MSG_TYPE.REACTION ||
                          (L == null ? void 0 : L.type) ===
                            o("WAWebMsgType").MSG_TYPE.REACTION_ENC
                        ? (o("WALogger").LOG(
                            f ||
                              (f = babelHelpers.taggedTemplateLiteralLoose([
                                "processMsgs: reaction",
                              ])),
                          ),
                          (R = !0))
                        : (L == null ? void 0 : L.type) ===
                              o("WAWebMsgType").MSG_TYPE
                                .MESSAGE_HISTORY_BUNDLE ||
                            (L == null ? void 0 : L.type) ===
                              o("WAWebMsgType").MSG_TYPE.MESSAGE_HISTORY_NOTICE
                          ? (R = !0)
                          : o("WALogger").LOG(
                              g ||
                                (g = babelHelpers.taggedTemplateLiteralLoose([
                                  "processMsgs: renderableMsgs",
                                ])),
                            ),
                    S.push(P(b, s, C, l, y, h, v))),
        { tasks: S, hasInactiveMsg: R }
      );
    }
    function P(e, t, n, r, a, i, l) {
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
    function N(e) {
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
              .addMessages([{ msg: a }], !r);
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
        O.apply(this, arguments)
      );
    }
    function B(e) {
      return o("WAWebGetGroupAddressingMode").getGroupAddressingMode(e);
    }
    function W(e) {
      var t = parseInt(e, 10);
      return Number.isNaN(t) ? null : t;
    }
    ((l.processDecryptedMessageProto = D),
      (l.processMsgs = $),
      (l.processRenderableMsg = P),
      (l.processPlaceholderMsg = M));
  },
  98,
);
