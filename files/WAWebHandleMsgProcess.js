__d(
  "WAWebHandleMsgProcess",
  [
    "Promise",
    "WACryptoPkcs7",
    "WALogger",
    "WAWebABProps",
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
      k = (s = n("cr:37441")) != null ? s : {},
      I = k.isUnifiedInfraEnabledForType;
    function T(e) {
      return D.apply(this, arguments);
    }
    function D() {
      return (
        (D = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
            $ =
              (t = T.deviceSentMessage) == null || (t = t.message) == null
                ? void 0
                : t.conditionalRevealMessage,
            P = (a = T.conditionalRevealMessage) != null ? a : $;
          if (P != null) {
            var N,
              M,
              w,
              A,
              B,
              W,
              q,
              U =
                T.conditionalRevealMessage == null && $ != null
                  ? (N =
                      (M =
                        (w = T.deviceSentMessage) == null
                          ? void 0
                          : w.destinationJid) != null
                        ? M
                        : (A = c.chat) == null
                          ? void 0
                          : A.toString()) != null
                    ? N
                    : ""
                  : (B = (W = c.chat) == null ? void 0 : W.toString()) != null
                    ? B
                    : "",
              V =
                c.author != null &&
                !o("WAWebUserPrefsMeUser").isMeAccount(c.author)
                  ? c.author.toString()
                  : null,
              H = yield o(
                "WAWebConditionalRevealPreProcessor",
              ).maybePreProcessConditionalRevealForReceive(
                P,
                c.externalId,
                U,
                V,
                (q = _ == null ? void 0 : _.scheduledMsgMeta) != null
                  ? q
                  : null,
              );
            if (
              (H.proto != null &&
                H.protoBytes != null &&
                ((T = H.proto),
                (I = H.protoBytes),
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
              (D = H.scheduledMsgViewMode),
              H.isRevealPending)
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
          var G = o("WAWebMsgProcessingApiUtils").getFrom(c),
            z =
              (s.retryCount > 0 &&
                o("WAWebMsgProcessingApiUtils").isRevokeInfo(c)) ||
              L,
            j = z
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
            var K = yield o("WAWebMsgProcessingApiUtils").parseMessage({
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
            if (K.renderableMsgs == null)
              o("WALogger").ERROR(
                C ||
                  (C = babelHelpers.taggedTemplateLiteralLoose([
                    "parsed render able msgs not reparsed as expected",
                  ])),
              );
            else {
              var Q = o(
                "WAWebConditionalRevealPreProcessor",
              ).applyScheduledMsgViewMode(K.renderableMsgs, D);
              (o("WAWebHandleMsgValidate").renderableMessagesValidation({
                renderableMsgs: Q,
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
                    renderableMsgs: Q,
                  })));
              var X = x({
                  renderableMsgs: Q,
                  reparsing: !0,
                  bizInfo: i,
                  msgMeta: _,
                  paymentInfo: f,
                  info: c,
                  messageOverwriteOption: j,
                }),
                Y = X.hasInactiveMsg,
                J = X.tasks;
              return (
                yield (R || (R = n("Promise"))).all(J),
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
                { hasInactiveMsg: Y }
              );
            }
          }
          var Z = yield o("WAWebHandleMsgProcessUtils").preProcessMsg(c, T);
          if (
            (o("WAWebBizCoexGatingUtils").bizHostedDevicesEnabled() &&
              ((Z == null ? void 0 : Z.senderOrRecipientAccountTypeHosted) ===
                !0 && (c.senderOrRecipientAccountTypeHosted = !0),
              (Z == null ? void 0 : Z.hostedBizEncMismatch) === !0 &&
                (c.hostedBizEncStateMismatch = !0)),
            c.type ===
              o("WAWebHandleMsgTypes.flow").MESSAGE_TYPE.PEER_BROADCAST &&
              s.retryCount > 0)
          ) {
            var ee = yield o("WAWebDBMsgUtils").getMsgByMsgKey(
              o("WAWebMsgProcessingApiUtils").messageInfoToKey(c),
            );
            (ee == null ? void 0 : ee.bclParticipants) != null
              ? (c.bclParticipants = ee.bclParticipants)
              : (ee == null ? void 0 : ee.broadcastParticipants) != null &&
                (c.bclParticipants = ee.broadcastParticipants.map(function (e) {
                  return { wid: o("WAWebWidFactory").asUserWidOrThrow(e) };
                }));
          }
          var te = o(
              "WAWebOfflineResumeMsgProcessReporterWorkerCompatible",
            ).msgProcessReporter.startMarker(
              o("WAWebOfflineResumeMsgProcessReporterWorkerCompatible")
                .msgProcessReporter.stage.Parsing,
            ),
            ne = L
              ? o("WAWebQuarantineActionUtils").QuarantineAction.NoQuarantine
              : yield o("WAWebQuarantineActionUtils").getQuarantineAction(T, G),
            re =
              ne ===
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
                          ).maybeGetQuarantineText(ne),
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
            var oe;
            (oe = re.renderableMsgs) == null ||
              oe.forEach(function (e) {
                s.retryCount > 0 && (e.backgroundColor = 16711680);
              });
          }
          te == null || te();
          var ae = null;
          if (
            (re.history
              ? (ae = o("WAWebParsedProtocolMsgType")
                  .PARSED_PROTOCOL_MESSAGE_TYPE.HISTORY)
              : re.appStateSyncKeyShare
                ? (ae = o("WAWebParsedProtocolMsgType")
                    .PARSED_PROTOCOL_MESSAGE_TYPE.APP_STATE_SYNC_KEY_SHARE)
                : re.appStateSyncKeyRequest
                  ? (ae = o("WAWebParsedProtocolMsgType")
                      .PARSED_PROTOCOL_MESSAGE_TYPE.APP_STATE_SYNC_KEY_REQUEST)
                  : re.peerDataOperationRequestResponseMessage
                    ? (ae = o("WAWebParsedProtocolMsgType")
                        .PARSED_PROTOCOL_MESSAGE_TYPE
                        .PEER_DATA_OPERATION_REQUEST_RESPONSE_MESSAGE)
                    : re.peerDataOperationRequestMessage &&
                      (ae = o("WAWebParsedProtocolMsgType")
                        .PARSED_PROTOCOL_MESSAGE_TYPE
                        .PEER_DATA_OPERATION_REQUEST_MESSAGE),
            o("WAWebRuntimeEnvironmentUtils").isWorker() && ae)
          )
            yield r("WAWebApiDeferredMessagesStorage").updateDeferredMessages([
              {
                id: c.externalId,
                type: ae,
                plaintext: I,
                info: c,
                paymentInfo: f,
                bizInfo: i,
              },
            ]);
          else if (re.history)
            o("WAWebWorkerSafeBackendApi").workerSafeSendAndReceive(
              "handleHistorySyncNotification",
              {
                historySyncMetaData: re.history,
                from: G,
                externalId: c.externalId,
              },
            );
          else if (re.appStateSyncKeyShare)
            yield o("WAWebWorkerSafeBackendApi").workerSafeSendAndReceive(
              "handleAppStateSyncKeyShare",
              { keyShare: re.appStateSyncKeyShare, from: G },
            );
          else if (re.appStateSyncKeyRequest)
            o("WAWebWorkerSafeBackendApi").workerSafeSendAndReceive(
              "handleAppStateSyncKeyRequest",
              { keyRequest: re.appStateSyncKeyRequest, from: G },
            );
          else if (re.peerDataOperationRequestResponseMessage)
            o("WAWebWorkerSafeBackendApi").workerSafeSendAndReceive(
              "handlePeerDataOperationRequestResponse",
              {
                stanzaId: c.externalId,
                response: re.peerDataOperationRequestResponseMessage,
              },
            );
          else if (re.peerDataOperationRequestMessage)
            o("WAWebWorkerSafeBackendApi").workerSafeSendAndReceive(
              "handlePeerDataOperationRequest",
              {
                stanzaId: c.externalId,
                request: re.peerDataOperationRequestMessage,
              },
            );
          else if (re.securityNotificationEnabled)
            G == null || !(G instanceof r("WAWebWid"))
              ? o("WALogger")
                  .ERROR(
                    v ||
                      (v = babelHelpers.taggedTemplateLiteralLoose([
                        "Handle security notification empty wid error",
                      ])),
                  )
                  .sendLogs("Handle security notification empty wid error")
              : o("WAWebUserPrefsMeUser").isMePrimary(G)
                ? o(
                    "WAWebUserPrefsNotifications",
                  ).setGlobalSecurityNotifications(
                    re.securityNotificationEnabled.isEnabled,
                  )
                : o("WALogger")
                    .ERROR(
                      S ||
                        (S = babelHelpers.taggedTemplateLiteralLoose([
                          "Handle security notification payload wid error",
                        ])),
                    )
                    .sendLogs("Handle security notification payload wid error");
          else if (re.cloudApiThreadControlNotification)
            r("WAWebHandleCloudApiThreadControlNotification")(
              re.cloudApiThreadControlNotification,
            );
          else if (re.lidMigrationSyncMessage != null) {
            var ie;
            yield o(
              "WAWebLid1X1ThreadAccountMigrations",
            ).setLidMigrationMappings(
              (ie = re.lidMigrationSyncMessage) == null
                ? void 0
                : ie.encodedMappingPayload,
            );
          } else {
            var le = !1;
            if (
              (re.deviceSent == null
                ? (le = !0)
                : re.deviceSent.phash
                  ? (le = yield o("WAWebHandleMsgValidate").validateBclHash(
                      re.deviceSent.phash,
                      re.deviceSent.info,
                    ))
                  : re.deviceSent.destination &&
                    (le = yield o(
                      "WAWebHandleMsgValidate",
                    ).validateMsgDestination(re.deviceSent.destination, c)),
              !le)
            )
              throw new (o("WAWebHandleMsgError").DeviceSentMessageError)(
                o("WAWebMsgProcessingApiUtils").getDeviceType(c.author),
                o("WAWebWamEnumDsmError").DSM_ERROR.INVALID_DSM,
              );
            var se = re.renderableMsgs;
            if (
              (o("WAWebHandleMsgValidate").renderableMessagesValidation({
                renderableMsgs: se,
                msgMeta: _,
                info: c,
                proto: T,
                bizInfo: i,
              }),
              !o(
                "WAWebMessagingGatingUtils",
              ).isWebReportingTokenDelayProcessingEnabled())
            ) {
              var ue = o(
                "WAWebOfflineResumeMsgProcessReporterWorkerCompatible",
              ).msgProcessReporter.startMarker(
                o("WAWebOfflineResumeMsgProcessReporterWorkerCompatible")
                  .msgProcessReporter.stage.ProcessReportingTokenInfo,
              );
              (yield o(
                "WAWebHandleMsgValidate",
              ).validateAndProcessReportingTokenInfo({ renderableMsgs: se }),
                ue == null || ue());
            }
            var ce = yield o(
                "WAWebGalaxyFlowsUtils",
              ).maybeAddGalaxyFlowMessageIds(se),
              de = o(
                "WAWebConditionalRevealPreProcessor",
              ).applyScheduledMsgViewMode(
                re.storeMsg != null ? [re.storeMsg].concat(ce) : ce,
                D,
              ),
              me = x({
                renderableMsgs: de,
                reparsing: L,
                bizInfo: i,
                msgMeta: _,
                paymentInfo: f,
                info: c,
                messageOverwriteOption: j,
              }),
              pe = me.hasInactiveMsg,
              _e = me.tasks,
              fe = re.senderKey;
            (fe != null &&
              _e.push(
                o("WAWebSignal").Session.createGroupSignalSession(
                  c.author,
                  fe.groupId,
                  fe.key,
                ),
              ),
              r("isStringNullOrEmpty")(c.pushname) ||
                o("WAWebHandlePushnameUpdate").updatePushname(
                  c.author,
                  c.pushname,
                  c.offline != null,
                ));
            var ge = F(c.chat);
            yield (R || (R = n("Promise"))).all(_e);
            var he = yield ge;
            return (
              o(
                "WAWebLogMissingGroupParticipantMappings",
              ).logMissingGroupParticipantMappings({
                author: c.author,
                groupId: c.chat,
                localAddressingMode: he,
                serverAddressingMode: c.addressingMode,
              }),
              o("WAWebLogReceivedMessages").logReceivedMessagesInWAM({
                msgs: ce,
                offline: O(c.offline),
                tsMillis: c.ts * 1e3,
                clientReceivedTsMillis: c.clientReceivedTsMillis,
                msgProcessStartTsMillis: c.msgProcessStartTsMillis,
                serverAddressingMode: c.addressingMode,
                localAddressingMode: he,
              }),
              { hasInactiveMsg: pe }
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
          I != null && I(L == null ? void 0 : L.type)
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
              w({
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
              S.push(N(L, s, v)))
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
                    S.push($(b, s, C, l, y, h, v))),
        { tasks: S, hasInactiveMsg: R }
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
      return o("WAWebMessageProcessPlaceholder").processPlaceholderMessage(e);
    }
    function N(e, t, n) {
      return M.apply(this, arguments);
    }
    function M() {
      return (
        (M = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
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
        M.apply(this, arguments)
      );
    }
    function w(e) {
      return A.apply(this, arguments);
    }
    function A() {
      return (
        (A = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
        A.apply(this, arguments)
      );
    }
    function F(e) {
      return o("WAWebGetGroupAddressingMode").getGroupAddressingMode(e);
    }
    function O(e) {
      var t = parseInt(e, 10);
      return Number.isNaN(t) ? null : t;
    }
    ((l.processDecryptedMessageProto = T),
      (l.processMsgs = x),
      (l.processRenderableMsg = $),
      (l.processPlaceholderMsg = P));
  },
  98,
);
