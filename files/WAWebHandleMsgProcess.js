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
      k = (e = n("cr:37440")) != null ? e : {},
      I = k.castToAddonMsgData,
      T = k.getParentMsgKey,
      D = (s = n("cr:37441")) != null ? s : {},
      x = D.isUnifiedInfraEnabledForType;
    function $(e) {
      return P.apply(this, arguments);
    }
    function P() {
      return (
        (P = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
            k = e.reportingTokenInfo,
            I =
              s.e2eType === o("WAWebBackendJobs.flow").CiphertextType.Msmsg
                ? !1
                : m,
            T = I
              ? o("WACryptoPkcs7").unpadPkcs7(new Uint8Array(l))
              : new Uint8Array(l),
            D = o("decodeProtobuf").decodeProtobuf(
              o("WAWebProtobufsE2E.pb").MessageSpec,
              T,
            );
          (o(
            "WAWebVerifyProtobufMsgObjectKeys",
          ).verifyProtobufMessageObjectKeys(D),
            o("WAWebMessageSecretLocationUtils").verifyTopLevelMessageSecret(
              D,
              o("WAWebMessageSecretLocationUtils").MessageSecretCheckContext
                .Receiver,
              c.externalId,
            ));
          var x = null,
            $ =
              (t = D.deviceSentMessage) == null || (t = t.message) == null
                ? void 0
                : t.conditionalRevealMessage,
            P = (a = D.conditionalRevealMessage) != null ? a : $;
          if (P != null) {
            var M,
              A,
              F,
              O,
              B,
              W,
              V,
              H =
                D.conditionalRevealMessage == null && $ != null
                  ? (M =
                      (A =
                        (F = D.deviceSentMessage) == null
                          ? void 0
                          : F.destinationJid) != null
                        ? A
                        : (O = c.chat) == null
                          ? void 0
                          : O.toString()) != null
                    ? M
                    : ""
                  : (B = (W = c.chat) == null ? void 0 : W.toString()) != null
                    ? B
                    : "",
              G =
                c.author != null &&
                !o("WAWebUserPrefsMeUser").isMeAccount(c.author)
                  ? c.author.toString()
                  : null,
              z = yield o(
                "WAWebConditionalRevealPreProcessor",
              ).maybePreProcessConditionalRevealForReceive({
                conditionalRevealMessage: P,
                msgId: c.externalId,
                rawChatJid: H,
                reportingTokenInfo: k,
                senderJid: G,
                stanzaScheduledMsgMeta:
                  (V = _ == null ? void 0 : _.scheduledMsgMeta) != null
                    ? V
                    : null,
              });
            if (
              (z.proto != null &&
                z.protoBytes != null &&
                ((D = z.proto),
                (T = z.protoBytes),
                o(
                  "WAWebVerifyProtobufMsgObjectKeys",
                ).verifyProtobufMessageObjectKeys(D),
                o(
                  "WAWebMessageSecretLocationUtils",
                ).verifyTopLevelMessageSecret(
                  D,
                  o("WAWebMessageSecretLocationUtils").MessageSecretCheckContext
                    .Receiver,
                  c.externalId,
                )),
              (x = z.scheduledMsgViewMode),
              z.isRevealPending)
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
          var j = o("WAWebMsgProcessingApiUtils").getFrom(c),
            K =
              (s.retryCount > 0 &&
                o("WAWebMsgProcessingApiUtils").isRevokeInfo(c)) ||
              h,
            Q = K
              ? o("WAWebHandleMsgTypes.flow").MessageOverwriteOption.RETRY
              : o("WAWebHandleMsgTypes.flow").MessageOverwriteOption
                  .NO_OVERWRITE;
          if (h) {
            o("WALogger")
              .LOG(
                C ||
                  (C = babelHelpers.taggedTemplateLiteralLoose([
                    "[processDecryptedMessageProto] reparsing msgId=",
                    "",
                  ])),
                c.externalId,
              )
              .tags("messaging");
            var X = yield o("WAWebMsgProcessingApiUtils").parseMessage({
              info: c,
              ciphertextType: s.e2eType,
              msgProtobuf: D,
              paymentInfo: f,
              bizInfo: i,
              hsmInfo: u,
              hidePlaceholder: s.hideFail,
              processDecryptedProtoParams: e,
              msgBotInfo: p,
              meta: _,
              reportingTokenInfo: k,
              isMessageRetry: s.retryCount > 0,
              isOffline: c.offline != null,
              protobufBytes: T,
            });
            if (X.renderableMsgs == null)
              o("WALogger").ERROR(
                b ||
                  (b = babelHelpers.taggedTemplateLiteralLoose([
                    "parsed render able msgs not reparsed as expected",
                  ])),
              );
            else {
              var Y = o(
                "WAWebConditionalRevealPreProcessor",
              ).applyScheduledMsgViewMode(X.renderableMsgs, x);
              (o("WAWebHandleMsgValidate").renderableMessagesValidation({
                renderableMsgs: Y,
                msgMeta: _,
                info: c,
                proto: D,
                bizInfo: i,
              }),
                o(
                  "WAWebMessagingGatingUtils",
                ).isWebReportingTokenDelayProcessingEnabled() ||
                  (yield o(
                    "WAWebHandleMsgValidate",
                  ).validateAndProcessReportingTokenInfo({
                    renderableMsgs: Y,
                  })));
              var J = N({
                  renderableMsgs: Y,
                  reparsing: !0,
                  bizInfo: i,
                  msgMeta: _,
                  paymentInfo: f,
                  info: c,
                  messageOverwriteOption: Q,
                }),
                Z = J.hasInactiveMsg,
                ee = J.tasks;
              return (
                yield (E || (E = n("Promise"))).all(ee),
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
                { hasInactiveMsg: Z }
              );
            }
          }
          var te = yield o("WAWebHandleMsgProcessUtils").preProcessMsg(c, D);
          if (
            ((te == null ? void 0 : te.senderOrRecipientAccountTypeHosted) ===
              !0 && (c.senderOrRecipientAccountTypeHosted = !0),
            (te == null ? void 0 : te.hostedBizEncMismatch) === !0 &&
              (c.hostedBizEncStateMismatch = !0),
            c.type ===
              o("WAWebHandleMsgTypes.flow").MESSAGE_TYPE.PEER_BROADCAST &&
              s.retryCount > 0)
          ) {
            var ne = yield o("WAWebDBMsgUtils").getMsgByMsgKey(
              o("WAWebMsgProcessingApiUtils").messageInfoToKey(c),
            );
            (ne == null ? void 0 : ne.bclParticipants) != null
              ? (c.bclParticipants = ne.bclParticipants)
              : (ne == null ? void 0 : ne.broadcastParticipants) != null &&
                (c.bclParticipants = ne.broadcastParticipants.map(function (e) {
                  return { wid: o("WAWebWidFactory").asUserWidOrThrow(e) };
                }));
          }
          var re = o(
              "WAWebOfflineResumeMsgProcessReporterWorkerCompatible",
            ).msgProcessReporter.startMarker(
              o("WAWebOfflineResumeMsgProcessReporterWorkerCompatible")
                .msgProcessReporter.stage.Parsing,
            ),
            oe = h
              ? o("WAWebQuarantineActionUtils").QuarantineAction.NoQuarantine
              : yield o("WAWebQuarantineActionUtils").getQuarantineAction(D, j),
            ae =
              oe ===
              o("WAWebQuarantineActionUtils").QuarantineAction.NoQuarantine
                ? yield o("WAWebMsgProcessingApiUtils").parseMessage({
                    info: c,
                    ciphertextType: s.e2eType,
                    msgProtobuf: D,
                    paymentInfo: f,
                    bizInfo: i,
                    hsmInfo: u,
                    hidePlaceholder: s.hideFail,
                    processDecryptedProtoParams: e,
                    msgBotInfo: p,
                    meta: _,
                    reportingTokenInfo: k,
                    isMessageRetry: s.retryCount > 0,
                    isOffline: c.offline != null,
                    protobufBytes: T,
                  })
                : {
                    deviceSent: null,
                    senderKey: null,
                    rootSecretDistribute: null,
                    storeMsg: null,
                    renderableMsgs: [
                      babelHelpers.extends(
                        {},
                        o("WAWebMsgProcessingApiUtils").generateBaseMsg(c),
                        {
                          type: o("WAWebMsgType").MSG_TYPE.QUARANTINED,
                          kind: o("WAWebMsgType").MsgKind.QuarantinedMessage,
                          quarantineOriginalProtobuf: T.slice().buffer,
                          quarantineExtractedText: o(
                            "WAWebQuarantineActionUtils",
                          ).maybeGetQuarantineText(oe),
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
            var ie;
            (ie = ae.renderableMsgs) == null ||
              ie.forEach(function (e) {
                s.retryCount > 0 && (e.backgroundColor = 16711680);
              });
          }
          re == null || re();
          var le = null;
          if (
            (ae.history
              ? (le = o("WAWebParsedProtocolMsgType")
                  .PARSED_PROTOCOL_MESSAGE_TYPE.HISTORY)
              : ae.appStateSyncKeyShare
                ? (le = o("WAWebParsedProtocolMsgType")
                    .PARSED_PROTOCOL_MESSAGE_TYPE.APP_STATE_SYNC_KEY_SHARE)
                : ae.appStateSyncKeyRequest
                  ? (le = o("WAWebParsedProtocolMsgType")
                      .PARSED_PROTOCOL_MESSAGE_TYPE.APP_STATE_SYNC_KEY_REQUEST)
                  : ae.peerDataOperationRequestResponseMessage
                    ? (le = o("WAWebParsedProtocolMsgType")
                        .PARSED_PROTOCOL_MESSAGE_TYPE
                        .PEER_DATA_OPERATION_REQUEST_RESPONSE_MESSAGE)
                    : ae.peerDataOperationRequestMessage &&
                      (le = o("WAWebParsedProtocolMsgType")
                        .PARSED_PROTOCOL_MESSAGE_TYPE
                        .PEER_DATA_OPERATION_REQUEST_MESSAGE),
            o("WAWebRuntimeEnvironmentUtils").isWorker() && le)
          )
            yield r("WAWebApiDeferredMessagesStorage").updateDeferredMessages([
              {
                id: c.externalId,
                type: le,
                plaintext: T,
                info: c,
                paymentInfo: f,
                bizInfo: i,
              },
            ]);
          else if (ae.history)
            o("WAWebWorkerSafeBackendApi").workerSafeSendAndReceive(
              "handleHistorySyncNotification",
              {
                historySyncMetaData: ae.history,
                from: j,
                externalId: c.externalId,
              },
            );
          else if (ae.appStateSyncKeyShare)
            yield o("WAWebWorkerSafeBackendApi").workerSafeSendAndReceive(
              "handleAppStateSyncKeyShare",
              { keyShare: ae.appStateSyncKeyShare, from: j },
            );
          else if (ae.appStateSyncKeyRequest)
            o("WAWebWorkerSafeBackendApi").workerSafeSendAndReceive(
              "handleAppStateSyncKeyRequest",
              { keyRequest: ae.appStateSyncKeyRequest, from: j },
            );
          else if (ae.peerDataOperationRequestResponseMessage)
            o("WAWebWorkerSafeBackendApi").workerSafeSendAndReceive(
              "handlePeerDataOperationRequestResponse",
              {
                stanzaId: c.externalId,
                response: ae.peerDataOperationRequestResponseMessage,
              },
            );
          else if (ae.peerDataOperationRequestMessage)
            o("WAWebWorkerSafeBackendApi").workerSafeSendAndReceive(
              "handlePeerDataOperationRequest",
              {
                stanzaId: c.externalId,
                request: ae.peerDataOperationRequestMessage,
              },
            );
          else if (ae.securityNotificationEnabled)
            j == null || !(j instanceof r("WAWebWid"))
              ? o("WALogger")
                  .ERROR(
                    S ||
                      (S = babelHelpers.taggedTemplateLiteralLoose([
                        "Handle security notification empty wid error",
                      ])),
                  )
                  .sendLogs("Handle security notification empty wid error")
              : o("WAWebUserPrefsMeUser").isMePrimary(j)
                ? o(
                    "WAWebUserPrefsNotifications",
                  ).setGlobalSecurityNotifications(
                    ae.securityNotificationEnabled.isEnabled,
                  )
                : o("WALogger")
                    .ERROR(
                      R ||
                        (R = babelHelpers.taggedTemplateLiteralLoose([
                          "Handle security notification payload wid error",
                        ])),
                    )
                    .sendLogs("Handle security notification payload wid error");
          else if (ae.cloudApiThreadControlNotification)
            r("WAWebHandleCloudApiThreadControlNotification")(
              ae.cloudApiThreadControlNotification,
            );
          else if (ae.lidMigrationSyncMessage != null) {
            var se;
            yield o(
              "WAWebLid1X1ThreadAccountMigrations",
            ).setLidMigrationMappings(
              (se = ae.lidMigrationSyncMessage) == null
                ? void 0
                : se.encodedMappingPayload,
            );
          } else {
            var ue = !1;
            if (
              (ae.deviceSent == null
                ? (ue = !0)
                : ae.deviceSent.phash
                  ? (ue = yield o("WAWebHandleMsgValidate").validateBclHash(
                      ae.deviceSent.phash,
                      ae.deviceSent.info,
                    ))
                  : ae.deviceSent.destination &&
                    (ue = yield o(
                      "WAWebHandleMsgValidate",
                    ).validateMsgDestination(ae.deviceSent.destination, c)),
              !ue)
            )
              throw new (o("WAWebHandleMsgError").DeviceSentMessageError)(
                o("WAWebMsgProcessingApiUtils").getDeviceType(c.author),
                o("WAWebWamEnumDsmError").DSM_ERROR.INVALID_DSM,
              );
            var ce = ae.renderableMsgs;
            if (
              (o("WAWebHandleMsgValidate").renderableMessagesValidation({
                renderableMsgs: ce,
                msgMeta: _,
                info: c,
                proto: D,
                bizInfo: i,
              }),
              !o(
                "WAWebMessagingGatingUtils",
              ).isWebReportingTokenDelayProcessingEnabled())
            ) {
              var de = o(
                "WAWebOfflineResumeMsgProcessReporterWorkerCompatible",
              ).msgProcessReporter.startMarker(
                o("WAWebOfflineResumeMsgProcessReporterWorkerCompatible")
                  .msgProcessReporter.stage.ProcessReportingTokenInfo,
              );
              (yield o(
                "WAWebHandleMsgValidate",
              ).validateAndProcessReportingTokenInfo({ renderableMsgs: ce }),
                de == null || de());
            }
            var me = yield o(
                "WAWebGalaxyFlowsUtils",
              ).maybeAddGalaxyFlowMessageIds(ce),
              pe = o(
                "WAWebConditionalRevealPreProcessor",
              ).applyScheduledMsgViewMode(
                ae.storeMsg != null ? [ae.storeMsg].concat(me) : me,
                x,
              ),
              _e = N({
                renderableMsgs: pe,
                reparsing: h,
                bizInfo: i,
                msgMeta: _,
                paymentInfo: f,
                info: c,
                messageOverwriteOption: Q,
              }),
              fe = _e.hasInactiveMsg,
              ge = _e.tasks,
              he = !1;
            if (
              o("WAWebABProps").getABPropConfigValue(
                "web_send_orphan_in_receipts_enabled",
              )
            ) {
              var ye = pe[0],
                Ce = w(ye);
              if (Ce != null) {
                var be = yield o("WAWebAddonQueryUtils").getParentMsgsByMsgKey([
                    Ce,
                  ]),
                  ve = be.get(Ce.toString());
                he =
                  ve == null ||
                  ve.type === o("WAWebMsgType").MSG_TYPE.CIPHERTEXT ||
                  (ve.type === o("WAWebMsgType").MSG_TYPE.UNKNOWN &&
                    (ve.futureproofType == null ||
                      !o(
                        "WAWebMessageAssociationConstants",
                      ).orphanIneligibleFutureproofTypes.has(
                        ve.futureproofType,
                      )));
              }
            }
            var Se = ae.senderKey;
            Se != null &&
              ge.push(
                o("WAWebSignal").Session.createGroupSignalSession(
                  c.author,
                  Se.groupId,
                  Se.key,
                ),
              );
            var Re = ae.rootSecretDistribute;
            if (Re != null)
              if (o("WAWebUserPrefsMeUser").isMeAccount(c.author)) {
                var Le = Re.chatJid,
                  Ee = Re.rootSecret,
                  ke = Re.stanzaId;
                ge.push(
                  o("WAWebWasaRootSecretWriter").applyWasaRootSecretForId(
                    Le,
                    ke,
                    Ee,
                  ),
                );
              } else
                o("WALogger").WARN(
                  L ||
                    (L = babelHelpers.taggedTemplateLiteralLoose([
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
            var Ie = q(c.chat);
            yield (E || (E = n("Promise"))).all(ge);
            var Te = yield Ie;
            return (
              o(
                "WAWebLogMissingGroupParticipantMappings",
              ).logMissingGroupParticipantMappings({
                author: c.author,
                groupId: c.chat,
                localAddressingMode: Te,
                serverAddressingMode: c.addressingMode,
              }),
              o("WAWebLogReceivedMessages").logReceivedMessagesInWAM({
                msgs: me,
                offline: U(c.offline),
                tsMillis: c.ts * 1e3,
                clientReceivedTsMillis: c.clientReceivedTsMillis,
                msgProcessStartTsMillis: c.msgProcessStartTsMillis,
                serverAddressingMode: c.addressingMode,
                localAddressingMode: Te,
                oppositeHasUsername: o("WAWebUserPrefsMeUser").isMeAccount(
                  c.author,
                )
                  ? c.peerRecipientUsername != null
                  : c.username != null,
              }),
              { hasInactiveMsg: fe, isOrphanAddon: he }
            );
          }
          return { hasInactiveMsg: !1 };
        })),
        P.apply(this, arguments)
      );
    }
    function N(e) {
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
          x != null && x(E == null ? void 0 : E.type)
            ? I == null
              ? void 0
              : I(E)
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
              B({
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
              R.push(F(E, s, S)))
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
                    R.push(M(v, s, b, l, C, y, S))),
        { tasks: R, hasInactiveMsg: L }
      );
    }
    function M(e, t, n, r, a, i, l) {
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
    function w(e) {
      if (e == null) return null;
      if ((I == null ? void 0 : I(e)) != null) {
        var t;
        return (t = T == null ? void 0 : T(e)) != null ? t : null;
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
    function A(e) {
      return o("WAWebMessageProcessPlaceholder").processPlaceholderMessage(e);
    }
    function F(e, t, n) {
      return O.apply(this, arguments);
    }
    function O() {
      return (
        (O = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
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
        O.apply(this, arguments)
      );
    }
    function B(e) {
      return W.apply(this, arguments);
    }
    function W() {
      return (
        (W = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
        W.apply(this, arguments)
      );
    }
    function q(e) {
      return o("WAWebGetGroupAddressingMode").getGroupAddressingMode(e);
    }
    function U(e) {
      var t = parseInt(e, 10);
      return Number.isNaN(t) ? null : t;
    }
    ((l.processDecryptedMessageProto = $),
      (l.processMsgs = N),
      (l.processRenderableMsg = M),
      (l.processPlaceholderMsg = A));
  },
  98,
);
