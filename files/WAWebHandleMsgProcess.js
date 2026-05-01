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
            f = _ === void 0 ? !1 : _,
            g = e.reportingTokenInfo,
            L =
              i.e2eType === o("WAWebBackendJobs.flow").CiphertextType.Msmsg
                ? !1
                : c,
            E = L
              ? o("WACryptoPkcs7").unpadPkcs7(new Uint8Array(a))
              : new Uint8Array(a),
            k = o("decodeProtobuf").decodeProtobuf(
              o("WAWebProtobufsE2E.pb").MessageSpec,
              E,
            );
          (o(
            "WAWebVerifyProtobufMsgObjectKeys",
          ).verifyProtobufMessageObjectKeys(k),
            o("WAWebMessageSecretLocationUtils").verifyTopLevelMessageSecret(
              k,
              o("WAWebMessageSecretLocationUtils").MessageSecretCheckContext
                .Receiver,
              s.externalId,
            ));
          var I = null,
            T = k.conditionalRevealMessage;
          if (T != null) {
            var D = yield o(
              "WAWebConditionalRevealPreProcessor",
            ).maybePreProcessConditionalRevealForReceive(
              T,
              s.externalId,
              s.chat.toString(),
            );
            (D.proto != null &&
              D.protoBytes != null &&
              ((k = D.proto),
              (E = D.protoBytes),
              o(
                "WAWebVerifyProtobufMsgObjectKeys",
              ).verifyProtobufMessageObjectKeys(k),
              o("WAWebMessageSecretLocationUtils").verifyTopLevelMessageSecret(
                k,
                o("WAWebMessageSecretLocationUtils").MessageSecretCheckContext
                  .Receiver,
                s.externalId,
              )),
              (I = D.scheduledMsgViewMode));
          }
          var $ = o("WAWebMsgProcessingApiUtils").getFrom(s),
            P =
              (i.retryCount > 0 &&
                o("WAWebMsgProcessingApiUtils").isRevokeInfo(s)) ||
              f,
            N = P
              ? o("WAWebHandleMsgTypes.flow").MessageOverwriteOption.RETRY
              : o("WAWebHandleMsgTypes.flow").MessageOverwriteOption
                  .NO_OVERWRITE;
          if (f) {
            o("WALogger")
              .LOG(
                h ||
                  (h = babelHelpers.taggedTemplateLiteralLoose([
                    "[processDecryptedMessageProto] reparsing msgId=",
                    "",
                  ])),
                s.externalId,
              )
              .tags("messaging");
            var M = yield o("WAWebMsgProcessingApiUtils").parseMessage({
              info: s,
              ciphertextType: i.e2eType,
              msgProtobuf: k,
              paymentInfo: p,
              bizInfo: t,
              hsmInfo: l,
              hidePlaceholder: i.hideFail,
              processDecryptedProtoParams: e,
              msgBotInfo: d,
              meta: m,
              reportingTokenInfo: g,
              isMessageRetry: i.retryCount > 0,
              isOffline: s.offline != null,
              protobufBytes: E,
            });
            if (M.renderableMsgs == null)
              o("WALogger").ERROR(
                y ||
                  (y = babelHelpers.taggedTemplateLiteralLoose([
                    "parsed render able msgs not reparsed as expected",
                  ])),
              );
            else {
              var w = o(
                "WAWebConditionalRevealPreProcessor",
              ).applyScheduledMsgViewMode(M.renderableMsgs, I);
              (o("WAWebHandleMsgValidate").renderableMessagesValidation({
                renderableMsgs: w,
                msgMeta: m,
                info: s,
                proto: k,
                bizInfo: t,
              }),
                o(
                  "WAWebMessagingGatingUtils",
                ).isWebReportingTokenDelayProcessingEnabled() ||
                  (yield o(
                    "WAWebHandleMsgValidate",
                  ).validateAndProcessReportingTokenInfo({
                    renderableMsgs: w,
                  })));
              var A = x({
                  renderableMsgs: w,
                  reparsing: !0,
                  bizInfo: t,
                  msgMeta: m,
                  paymentInfo: p,
                  info: s,
                  messageOverwriteOption: N,
                }),
                B = A.hasInactiveMsg,
                W = A.tasks;
              return (
                yield (R || (R = n("Promise"))).all(W),
                o("WALogger")
                  .LOG(
                    C ||
                      (C = babelHelpers.taggedTemplateLiteralLoose([
                        "[processDecryptedMessageProto] reparsed msgId=",
                        "",
                      ])),
                    s.externalId,
                  )
                  .tags("messaging"),
                { hasInactiveMsg: B }
              );
            }
          }
          var q = yield o("WAWebHandleMsgProcessUtils").preProcessMsg(s, k);
          if (
            (o("WAWebBizCoexGatingUtils").bizHostedDevicesEnabled() &&
              ((q == null ? void 0 : q.senderOrRecipientAccountTypeHosted) ===
                !0 && (s.senderOrRecipientAccountTypeHosted = !0),
              (q == null ? void 0 : q.hostedBizEncMismatch) === !0 &&
                (s.hostedBizEncStateMismatch = !0)),
            s.type ===
              o("WAWebHandleMsgTypes.flow").MESSAGE_TYPE.PEER_BROADCAST &&
              i.retryCount > 0)
          ) {
            var U = yield o("WAWebDBMsgUtils").getMsgByMsgKey(
              o("WAWebMsgProcessingApiUtils").messageInfoToKey(s),
            );
            (U == null ? void 0 : U.bclParticipants) != null
              ? (s.bclParticipants = U.bclParticipants)
              : (U == null ? void 0 : U.broadcastParticipants) != null &&
                (s.bclParticipants = U.broadcastParticipants.map(function (e) {
                  return { wid: o("WAWebWidFactory").asUserWidOrThrow(e) };
                }));
          }
          var V = o(
              "WAWebOfflineResumeMsgProcessReporterWorkerCompatible",
            ).msgProcessReporter.startMarker(
              o("WAWebOfflineResumeMsgProcessReporterWorkerCompatible")
                .msgProcessReporter.stage.Parsing,
            ),
            H = f
              ? o("WAWebQuarantineActionUtils").QuarantineAction.NoQuarantine
              : yield o("WAWebQuarantineActionUtils").getQuarantineAction(k, $),
            G =
              H ===
              o("WAWebQuarantineActionUtils").QuarantineAction.NoQuarantine
                ? yield o("WAWebMsgProcessingApiUtils").parseMessage({
                    info: s,
                    ciphertextType: i.e2eType,
                    msgProtobuf: k,
                    paymentInfo: p,
                    bizInfo: t,
                    hsmInfo: l,
                    hidePlaceholder: i.hideFail,
                    processDecryptedProtoParams: e,
                    msgBotInfo: d,
                    meta: m,
                    reportingTokenInfo: g,
                    isMessageRetry: i.retryCount > 0,
                    isOffline: s.offline != null,
                    protobufBytes: E,
                  })
                : {
                    deviceSent: null,
                    senderKey: null,
                    storeMsg: null,
                    renderableMsgs: [
                      babelHelpers.extends(
                        {},
                        o("WAWebMsgProcessingApiUtils").generateBaseMsg(s),
                        {
                          type: o("WAWebMsgType").MSG_TYPE.QUARANTINED,
                          kind: o("WAWebMsgType").MsgKind.QuarantinedMessage,
                          quarantineOriginalProtobuf: E.slice().buffer,
                          quarantineExtractedText: o(
                            "WAWebQuarantineActionUtils",
                          ).maybeGetQuarantineText(H),
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
            var z;
            (z = G.renderableMsgs) == null ||
              z.forEach(function (e) {
                i.retryCount > 0 && (e.backgroundColor = 16711680);
              });
          }
          V == null || V();
          var j = null;
          if (
            (G.history
              ? (j = o("WAWebParsedProtocolMsgType")
                  .PARSED_PROTOCOL_MESSAGE_TYPE.HISTORY)
              : G.appStateSyncKeyShare
                ? (j = o("WAWebParsedProtocolMsgType")
                    .PARSED_PROTOCOL_MESSAGE_TYPE.APP_STATE_SYNC_KEY_SHARE)
                : G.appStateSyncKeyRequest
                  ? (j = o("WAWebParsedProtocolMsgType")
                      .PARSED_PROTOCOL_MESSAGE_TYPE.APP_STATE_SYNC_KEY_REQUEST)
                  : G.peerDataOperationRequestResponseMessage
                    ? (j = o("WAWebParsedProtocolMsgType")
                        .PARSED_PROTOCOL_MESSAGE_TYPE
                        .PEER_DATA_OPERATION_REQUEST_RESPONSE_MESSAGE)
                    : G.peerDataOperationRequestMessage &&
                      (j = o("WAWebParsedProtocolMsgType")
                        .PARSED_PROTOCOL_MESSAGE_TYPE
                        .PEER_DATA_OPERATION_REQUEST_MESSAGE),
            o("WAWebRuntimeEnvironmentUtils").isWorker() && j)
          )
            yield r("WAWebApiDeferredMessagesStorage").updateDeferredMessages([
              {
                id: s.externalId,
                type: j,
                plaintext: E,
                info: s,
                paymentInfo: p,
                bizInfo: t,
              },
            ]);
          else if (G.history)
            o("WAWebWorkerSafeBackendApi").workerSafeSendAndReceive(
              "handleHistorySyncNotification",
              {
                historySyncMetaData: G.history,
                from: $,
                externalId: s.externalId,
              },
            );
          else if (G.appStateSyncKeyShare)
            yield o("WAWebWorkerSafeBackendApi").workerSafeSendAndReceive(
              "handleAppStateSyncKeyShare",
              { keyShare: G.appStateSyncKeyShare, from: $ },
            );
          else if (G.appStateSyncKeyRequest)
            o("WAWebWorkerSafeBackendApi").workerSafeSendAndReceive(
              "handleAppStateSyncKeyRequest",
              { keyRequest: G.appStateSyncKeyRequest, from: $ },
            );
          else if (G.peerDataOperationRequestResponseMessage)
            o("WAWebWorkerSafeBackendApi").workerSafeSendAndReceive(
              "handlePeerDataOperationRequestResponse",
              {
                stanzaId: s.externalId,
                response: G.peerDataOperationRequestResponseMessage,
              },
            );
          else if (G.peerDataOperationRequestMessage)
            o("WAWebWorkerSafeBackendApi").workerSafeSendAndReceive(
              "handlePeerDataOperationRequest",
              {
                stanzaId: s.externalId,
                request: G.peerDataOperationRequestMessage,
              },
            );
          else if (G.securityNotificationEnabled)
            o("WAWebUserPrefsMeUser").getMaybeMeDevicePn() == null
              ? o("WALogger")
                  .ERROR(
                    b ||
                      (b = babelHelpers.taggedTemplateLiteralLoose([
                        "Me wid is empty during security notification parsing",
                      ])),
                  )
                  .sendLogs(
                    "Me wid is empty during security notification parsing",
                  )
              : $ == null || !($ instanceof r("WAWebWid"))
                ? o("WALogger")
                    .ERROR(
                      v ||
                        (v = babelHelpers.taggedTemplateLiteralLoose([
                          "Handle security notification empty wid error",
                        ])),
                    )
                    .sendLogs("Handle security notification empty wid error")
                : o("WAWebUserPrefsMeUser").isMePrimaryNonLid($)
                  ? o(
                      "WAWebUserPrefsNotifications",
                    ).setGlobalSecurityNotifications(
                      G.securityNotificationEnabled.isEnabled,
                    )
                  : o("WALogger")
                      .ERROR(
                        S ||
                          (S = babelHelpers.taggedTemplateLiteralLoose([
                            "Handle security notification payload wid error",
                          ])),
                      )
                      .sendLogs(
                        "Handle security notification payload wid error",
                      );
          else if (G.cloudApiThreadControlNotification)
            r("WAWebHandleCloudApiThreadControlNotification")(
              G.cloudApiThreadControlNotification,
            );
          else if (G.lidMigrationSyncMessage != null) {
            var K;
            yield o(
              "WAWebLid1X1ThreadAccountMigrations",
            ).setLidMigrationMappings(
              (K = G.lidMigrationSyncMessage) == null
                ? void 0
                : K.encodedMappingPayload,
            );
          } else {
            var Q = !1;
            if (
              (G.deviceSent == null
                ? (Q = !0)
                : G.deviceSent.phash
                  ? (Q = yield o("WAWebHandleMsgValidate").validateBclHash(
                      G.deviceSent.phash,
                      G.deviceSent.info,
                    ))
                  : G.deviceSent.destination &&
                    (Q = yield o(
                      "WAWebHandleMsgValidate",
                    ).validateMsgDestination(G.deviceSent.destination, s)),
              !Q)
            )
              throw new (o("WAWebHandleMsgError").DeviceSentMessageError)(
                o("WAWebMsgProcessingApiUtils").getDeviceType(s.author),
                o("WAWebWamEnumDsmError").DSM_ERROR.INVALID_DSM,
              );
            var X = G.renderableMsgs;
            if (
              (o("WAWebHandleMsgValidate").renderableMessagesValidation({
                renderableMsgs: X,
                msgMeta: m,
                info: s,
                proto: k,
                bizInfo: t,
              }),
              !o(
                "WAWebMessagingGatingUtils",
              ).isWebReportingTokenDelayProcessingEnabled())
            ) {
              var Y = o(
                "WAWebOfflineResumeMsgProcessReporterWorkerCompatible",
              ).msgProcessReporter.startMarker(
                o("WAWebOfflineResumeMsgProcessReporterWorkerCompatible")
                  .msgProcessReporter.stage.ProcessReportingTokenInfo,
              );
              (yield o(
                "WAWebHandleMsgValidate",
              ).validateAndProcessReportingTokenInfo({ renderableMsgs: X }),
                Y == null || Y());
            }
            var J = yield o(
                "WAWebGalaxyFlowsUtils",
              ).maybeAddGalaxyFlowMessageIds(X),
              Z = o(
                "WAWebConditionalRevealPreProcessor",
              ).applyScheduledMsgViewMode(
                G.storeMsg != null ? [G.storeMsg].concat(J) : J,
                I,
              ),
              ee = x({
                renderableMsgs: Z,
                reparsing: f,
                bizInfo: t,
                msgMeta: m,
                paymentInfo: p,
                info: s,
                messageOverwriteOption: N,
              }),
              te = ee.hasInactiveMsg,
              ne = ee.tasks,
              re = G.senderKey;
            (re != null &&
              ne.push(
                o("WAWebSignal").Session.createGroupSignalSession(
                  s.author,
                  re.groupId,
                  re.key,
                ),
              ),
              r("isStringNullOrEmpty")(s.pushname) ||
                o("WAWebHandlePushnameUpdate").updatePushname(
                  s.author,
                  s.pushname,
                  s.offline != null,
                ));
            var oe = F(s.chat);
            yield (R || (R = n("Promise"))).all(ne);
            var ae = yield oe;
            return (
              o(
                "WAWebLogMissingGroupParticipantMappings",
              ).logMissingGroupParticipantMappings(
                s.chat,
                s.author,
                s.addressingMode,
                ae,
              ),
              o("WAWebLogReceivedMessages").logReceivedMessagesInWAM({
                msgs: J,
                offline: O(s.offline),
                tsMillis: s.ts * 1e3,
                clientReceivedTsMillis: s.clientReceivedTsMillis,
                msgProcessStartTsMillis: s.msgProcessStartTsMillis,
                serverAddressingMode: s.addressingMode,
                localAddressingMode: ae,
              }),
              { hasInactiveMsg: te }
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
            S.push(w(k, s, v, h)))
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
    function w(e, t, n, r) {
      return A.apply(this, arguments);
    }
    function A() {
      return (
        (A = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, r) {
            var a = t.offline != null && !n,
              i = e,
              l = o("WAWebGetMessageCache")
                .getMessageCache()
                .addMessages([{ msg: i }], !a);
            ((n ||
              (o("WAWebBackendEventBus").BackendEventBus.isMainStreamReadyMd &&
                o("WAWebBackendEventBus").BackendEventBus
                  .isOfflineDeliveryEnd)) &&
              (yield l),
              r ===
                o("WAWebHandleMsgTypes.flow").MessageOverwriteOption.RETRY &&
                o("WAWebBackendApi").frontendFireAndForget(
                  "removePlaceholder",
                  { msg: e },
                ));
          },
        )),
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
