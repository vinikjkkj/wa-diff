__d(
  "WAWebHandleMsgProcess",
  [
    "Promise",
    "WACryptoPkcs7",
    "WALogger",
    "WAWebABProps",
    "WAWebAddonGatingUtils",
    "WAWebAddonProcessMsgsUtils",
    "WAWebApiDeferredMessagesStorage",
    "WAWebBackendApi",
    "WAWebBackendEventBus",
    "WAWebBackendJobs.flow",
    "WAWebBizCoexGatingUtils",
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
    "decodeProtobuf",
    "isStringNullOrEmpty",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c, d, m, p, _, f, g, h, y, C, b, v;
    function S(e) {
      return R.apply(this, arguments);
    }
    function R() {
      return (
        (R = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
            R = e.reportingTokenInfo,
            E =
              i.e2eType === o("WAWebBackendJobs.flow").CiphertextType.Msmsg
                ? !1
                : c,
            k = E
              ? o("WACryptoPkcs7").unpadPkcs7(new Uint8Array(a))
              : new Uint8Array(a),
            I = o("decodeProtobuf").decodeProtobuf(
              o("WAWebProtobufsE2E.pb").MessageSpec,
              k,
            );
          (o(
            "WAWebVerifyProtobufMsgObjectKeys",
          ).verifyProtobufMessageObjectKeys(I),
            o("WAWebMessageSecretLocationUtils").verifyTopLevelMessageSecret(
              I,
              o("WAWebMessageSecretLocationUtils").MessageSecretCheckContext
                .Receiver,
              s.externalId,
            ));
          var T = o("WAWebMsgProcessingApiUtils").getFrom(s),
            D =
              (i.retryCount > 0 &&
                o("WAWebMsgProcessingApiUtils").isRevokeInfo(s)) ||
              S,
            x = D
              ? o("WAWebHandleMsgTypes.flow").MessageOverwriteOption.RETRY
              : o("WAWebHandleMsgTypes.flow").MessageOverwriteOption
                  .NO_OVERWRITE;
          if (S) {
            o("WALogger")
              .LOG(
                f ||
                  (f = babelHelpers.taggedTemplateLiteralLoose([
                    "[processDecryptedMessageProto] reparsing msgId=",
                    "",
                  ])),
                s.externalId,
              )
              .tags("messaging");
            var N = yield o("WAWebMsgProcessingApiUtils").parseMessage({
              info: s,
              ciphertextType: i.e2eType,
              msgProtobuf: I,
              paymentInfo: p,
              bizInfo: t,
              hsmInfo: l,
              hidePlaceholder: i.hideFail,
              processDecryptedProtoParams: e,
              msgBotInfo: d,
              meta: m,
              reportingTokenInfo: R,
              isMessageRetry: i.retryCount > 0,
              isOffline: s.offline != null,
              protobufBytes: k,
            });
            if (N.renderableMsgs == null)
              o("WALogger").ERROR(
                g ||
                  (g = babelHelpers.taggedTemplateLiteralLoose([
                    "parsed render able msgs not reparsed as expected",
                  ])),
              );
            else {
              var M = N.renderableMsgs;
              (o("WAWebHandleMsgValidate").renderableMessagesValidation({
                renderableMsgs: M,
                msgMeta: m,
                info: s,
                proto: I,
                bizInfo: t,
              }),
                o(
                  "WAWebMessagingGatingUtils",
                ).isWebReportingTokenDelayProcessingEnabled() ||
                  (yield o(
                    "WAWebHandleMsgValidate",
                  ).validateAndProcessReportingTokenInfo({
                    renderableMsgs: M,
                  })));
              var w = L({
                  renderableMsgs: M,
                  reparsing: !0,
                  bizInfo: t,
                  msgMeta: m,
                  paymentInfo: p,
                  info: s,
                  messageOverwriteOption: x,
                }),
                A = w.hasInactiveMsg,
                F = w.tasks;
              return (
                yield (v || (v = n("Promise"))).all(F),
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
                { hasInactiveMsg: A }
              );
            }
          }
          var O = yield o("WAWebHandleMsgProcessUtils").preProcessMsg(s, I);
          if (
            (o("WAWebBizCoexGatingUtils").bizHostedDevicesEnabled() &&
              ((O == null ? void 0 : O.senderOrRecipientAccountTypeHosted) ===
                !0 && (s.senderOrRecipientAccountTypeHosted = !0),
              (O == null ? void 0 : O.hostedBizEncMismatch) === !0 &&
                (s.hostedBizEncStateMismatch = !0)),
            s.type ===
              o("WAWebHandleMsgTypes.flow").MESSAGE_TYPE.PEER_BROADCAST &&
              i.retryCount > 0)
          ) {
            var B = yield o("WAWebDBMsgUtils").getMsgByMsgKey(
              o("WAWebMsgProcessingApiUtils").messageInfoToKey(s),
            );
            (B == null ? void 0 : B.bclParticipants) != null
              ? (s.bclParticipants = B.bclParticipants)
              : (B == null ? void 0 : B.broadcastParticipants) != null &&
                (s.bclParticipants = B.broadcastParticipants.map(function (e) {
                  return { wid: o("WAWebWidFactory").asUserWidOrThrow(e) };
                }));
          }
          var W = o(
              "WAWebOfflineResumeMsgProcessReporterWorkerCompatible",
            ).msgProcessReporter.startMarker(
              o("WAWebOfflineResumeMsgProcessReporterWorkerCompatible")
                .msgProcessReporter.stage.Parsing,
            ),
            q = S
              ? o("WAWebQuarantineActionUtils").QuarantineAction.NoQuarantine
              : yield o("WAWebQuarantineActionUtils").getQuarantineAction(I, T),
            U =
              q ===
              o("WAWebQuarantineActionUtils").QuarantineAction.NoQuarantine
                ? yield o("WAWebMsgProcessingApiUtils").parseMessage({
                    info: s,
                    ciphertextType: i.e2eType,
                    msgProtobuf: I,
                    paymentInfo: p,
                    bizInfo: t,
                    hsmInfo: l,
                    hidePlaceholder: i.hideFail,
                    processDecryptedProtoParams: e,
                    msgBotInfo: d,
                    meta: m,
                    reportingTokenInfo: R,
                    isMessageRetry: i.retryCount > 0,
                    isOffline: s.offline != null,
                    protobufBytes: k,
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
                          quarantineOriginalProtobuf: k.slice().buffer,
                          quarantineExtractedText: o(
                            "WAWebQuarantineActionUtils",
                          ).maybeGetQuarantineText(q),
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
            var V;
            (V = U.renderableMsgs) == null ||
              V.forEach(function (e) {
                i.retryCount > 0 && (e.backgroundColor = 16711680);
              });
          }
          W == null || W();
          var H = null;
          if (
            (U.history
              ? (H = o("WAWebParsedProtocolMsgType")
                  .PARSED_PROTOCOL_MESSAGE_TYPE.HISTORY)
              : U.appStateSyncKeyShare
                ? (H = o("WAWebParsedProtocolMsgType")
                    .PARSED_PROTOCOL_MESSAGE_TYPE.APP_STATE_SYNC_KEY_SHARE)
                : U.appStateSyncKeyRequest
                  ? (H = o("WAWebParsedProtocolMsgType")
                      .PARSED_PROTOCOL_MESSAGE_TYPE.APP_STATE_SYNC_KEY_REQUEST)
                  : U.peerDataOperationRequestResponseMessage
                    ? (H = o("WAWebParsedProtocolMsgType")
                        .PARSED_PROTOCOL_MESSAGE_TYPE
                        .PEER_DATA_OPERATION_REQUEST_RESPONSE_MESSAGE)
                    : U.peerDataOperationRequestMessage &&
                      (H = o("WAWebParsedProtocolMsgType")
                        .PARSED_PROTOCOL_MESSAGE_TYPE
                        .PEER_DATA_OPERATION_REQUEST_MESSAGE),
            o("WAWebRuntimeEnvironmentUtils").isWorker() && H)
          )
            yield r("WAWebApiDeferredMessagesStorage").updateDeferredMessages([
              {
                id: s.externalId,
                type: H,
                plaintext: k,
                info: s,
                paymentInfo: p,
                bizInfo: t,
              },
            ]);
          else if (U.history)
            o("WAWebWorkerSafeBackendApi").workerSafeSendAndReceive(
              "handleHistorySyncNotification",
              {
                historySyncMetaData: U.history,
                from: T,
                externalId: s.externalId,
              },
            );
          else if (U.appStateSyncKeyShare)
            yield o("WAWebWorkerSafeBackendApi").workerSafeSendAndReceive(
              "handleAppStateSyncKeyShare",
              { keyShare: U.appStateSyncKeyShare, from: T },
            );
          else if (U.appStateSyncKeyRequest)
            o("WAWebWorkerSafeBackendApi").workerSafeSendAndReceive(
              "handleAppStateSyncKeyRequest",
              { keyRequest: U.appStateSyncKeyRequest, from: T },
            );
          else if (U.peerDataOperationRequestResponseMessage)
            o("WAWebWorkerSafeBackendApi").workerSafeSendAndReceive(
              "handlePeerDataOperationRequestResponse",
              {
                stanzaId: s.externalId,
                response: U.peerDataOperationRequestResponseMessage,
              },
            );
          else if (U.peerDataOperationRequestMessage)
            o("WAWebWorkerSafeBackendApi").workerSafeSendAndReceive(
              "handlePeerDataOperationRequest",
              {
                stanzaId: s.externalId,
                request: U.peerDataOperationRequestMessage,
              },
            );
          else if (U.securityNotificationEnabled)
            o("WAWebUserPrefsMeUser").getMaybeMeDevicePn() == null
              ? o("WALogger")
                  .ERROR(
                    y ||
                      (y = babelHelpers.taggedTemplateLiteralLoose([
                        "Me wid is empty during security notification parsing",
                      ])),
                  )
                  .sendLogs(
                    "Me wid is empty during security notification parsing",
                  )
              : T == null || !(T instanceof r("WAWebWid"))
                ? o("WALogger")
                    .ERROR(
                      C ||
                        (C = babelHelpers.taggedTemplateLiteralLoose([
                          "Handle security notification empty wid error",
                        ])),
                    )
                    .sendLogs("Handle security notification empty wid error")
                : o("WAWebUserPrefsMeUser").isMePrimaryNonLid(T)
                  ? o(
                      "WAWebUserPrefsNotifications",
                    ).setGlobalSecurityNotifications(
                      U.securityNotificationEnabled.isEnabled,
                    )
                  : o("WALogger")
                      .ERROR(
                        b ||
                          (b = babelHelpers.taggedTemplateLiteralLoose([
                            "Handle security notification payload wid error",
                          ])),
                      )
                      .sendLogs(
                        "Handle security notification payload wid error",
                      );
          else if (U.cloudApiThreadControlNotification)
            r("WAWebHandleCloudApiThreadControlNotification")(
              U.cloudApiThreadControlNotification,
            );
          else if (U.lidMigrationSyncMessage != null) {
            var G;
            yield o(
              "WAWebLid1X1ThreadAccountMigrations",
            ).setLidMigrationMappings(
              (G = U.lidMigrationSyncMessage) == null
                ? void 0
                : G.encodedMappingPayload,
            );
          } else {
            var z = !1;
            if (
              (U.deviceSent == null
                ? (z = !0)
                : U.deviceSent.phash
                  ? (z = yield o("WAWebHandleMsgValidate").validateBclHash(
                      U.deviceSent.phash,
                      U.deviceSent.info,
                    ))
                  : U.deviceSent.destination &&
                    (z = yield o(
                      "WAWebHandleMsgValidate",
                    ).validateMsgDestination(U.deviceSent.destination, s)),
              !z)
            )
              throw new (o("WAWebHandleMsgError").DeviceSentMessageError)(
                o("WAWebMsgProcessingApiUtils").getDeviceType(s.author),
                o("WAWebWamEnumDsmError").DSM_ERROR.INVALID_DSM,
              );
            var j = U.renderableMsgs;
            if (
              (o("WAWebHandleMsgValidate").renderableMessagesValidation({
                renderableMsgs: j,
                msgMeta: m,
                info: s,
                proto: I,
                bizInfo: t,
              }),
              !o(
                "WAWebMessagingGatingUtils",
              ).isWebReportingTokenDelayProcessingEnabled())
            ) {
              var K = o(
                "WAWebOfflineResumeMsgProcessReporterWorkerCompatible",
              ).msgProcessReporter.startMarker(
                o("WAWebOfflineResumeMsgProcessReporterWorkerCompatible")
                  .msgProcessReporter.stage.ProcessReportingTokenInfo,
              );
              (yield o(
                "WAWebHandleMsgValidate",
              ).validateAndProcessReportingTokenInfo({ renderableMsgs: j }),
                K == null || K());
            }
            var Q = yield o(
                "WAWebGalaxyFlowsUtils",
              ).maybeAddGalaxyFlowMessageIds(j),
              X = U.storeMsg != null ? [U.storeMsg].concat(Q) : Q,
              Y = L({
                renderableMsgs: X,
                reparsing: S,
                bizInfo: t,
                msgMeta: m,
                paymentInfo: p,
                info: s,
                messageOverwriteOption: x,
              }),
              J = Y.hasInactiveMsg,
              Z = Y.tasks,
              ee = U.senderKey;
            (ee != null &&
              Z.push(
                o("WAWebSignal").Session.createGroupSignalSession(
                  s.author,
                  ee.groupId,
                  ee.key,
                ),
              ),
              r("isStringNullOrEmpty")(s.pushname) ||
                o("WAWebHandlePushnameUpdate").updatePushname(
                  s.author,
                  s.pushname,
                  s.offline != null,
                ));
            var te = $(s.chat);
            yield (v || (v = n("Promise"))).all(Z);
            var ne = yield te;
            return (
              o(
                "WAWebLogMissingGroupParticipantMappings",
              ).logMissingGroupParticipantMappings(
                s.chat,
                s.author,
                s.addressingMode,
                ne,
              ),
              o("WAWebLogReceivedMessages").logReceivedMessagesInWAM({
                msgs: Q,
                offline: P(s.offline),
                tsMillis: s.ts * 1e3,
                clientReceivedTsMillis: s.clientReceivedTsMillis,
                msgProcessStartTsMillis: s.msgProcessStartTsMillis,
                serverAddressingMode: s.addressingMode,
                localAddressingMode: ne,
              }),
              { hasInactiveMsg: J }
            );
          }
          return { hasInactiveMsg: !1 };
        })),
        R.apply(this, arguments)
      );
    }
    function L(t) {
      var n,
        r,
        a,
        i,
        l,
        f = t.bizInfo,
        g = t.info,
        h = t.messageOverwriteOption,
        y = t.msgMeta,
        C = t.paymentInfo,
        b = t.renderableMsgs,
        v = t.reparsing,
        S = [],
        R = !1,
        L = b[0],
        k = o("WAWebAddonGatingUtils").isUnifiedInfraEnabledForType(
          L == null ? void 0 : L.type,
        )
          ? o("WAWebAddonProcessMsgsUtils").castToAddonMsgData(L)
          : null;
      return (
        k != null
          ? (o("WALogger").LOG(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "processMsgs: addon",
                ])),
            ),
            (R = !0),
            S.push(D(k, g, v, h)))
          : L != null && L.kind === o("WAWebMsgType").MsgKind.PollVoteEncrypted
            ? (o("WALogger").LOG(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "processMsgs: pollVote",
                  ])),
              ),
              S.push(I(L, g, v)))
            : ((n = b[0]) == null ? void 0 : n.type) ===
                o("WAWebMsgType").MSG_TYPE.KEEP_IN_CHAT
              ? (o("WALogger").LOG(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "processMsgs: keepInChat",
                    ])),
                ),
                (R = !0),
                S.push(
                  o("WAWebHandleMsgProcessUtils").processKeepInChatMsg(
                    b[0],
                    g,
                    v,
                  ),
                ))
              : ((r = b[0]) == null ? void 0 : r.type) ===
                    o("WAWebMsgType").MSG_TYPE.PROTOCOL &&
                  ((a = b[0]) == null ? void 0 : a.subtype) === "message_edit"
                ? (o("WALogger").LOG(
                    c ||
                      (c = babelHelpers.taggedTemplateLiteralLoose([
                        "processMsgs: messageEdit",
                      ])),
                  ),
                  S.push(
                    o("WAWebHandleMsgProcessUtils").processEditProtocolMsg(
                      b[0],
                      g,
                      v,
                    ),
                  ))
                : ((i = b[0]) == null ? void 0 : i.type) ===
                      o("WAWebMsgType").MSG_TYPE.PROTOCOL &&
                    ((l = b[0]) == null ? void 0 : l.subtype) ===
                      "ephemeral_sync_response"
                  ? (o("WALogger").LOG(
                      d ||
                        (d = babelHelpers.taggedTemplateLiteralLoose([
                          "processMsgs: ephemeralSyncResponse",
                        ])),
                    ),
                    S.push(
                      o(
                        "WAWebHandleMsgProcessUtils",
                      ).processEphemeralSyncResponseMsg({
                        msg: b[0],
                        msgInfo: g,
                        reparsing: v,
                      }),
                    ))
                  : b.length > 0 &&
                    ((L == null ? void 0 : L.type) ===
                      o("WAWebMsgType").MSG_TYPE.PROTOCOL &&
                    (L == null ? void 0 : L.subtype) === "member_label"
                      ? (o("WALogger").LOG(
                          m ||
                            (m = babelHelpers.taggedTemplateLiteralLoose([
                              "processMsgs: memberLabel",
                            ])),
                        ),
                        (R = !0))
                      : (L == null ? void 0 : L.type) ===
                            o("WAWebMsgType").MSG_TYPE.REACTION ||
                          (L == null ? void 0 : L.type) ===
                            o("WAWebMsgType").MSG_TYPE.REACTION_ENC
                        ? (o("WALogger").LOG(
                            p ||
                              (p = babelHelpers.taggedTemplateLiteralLoose([
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
                              _ ||
                                (_ = babelHelpers.taggedTemplateLiteralLoose([
                                  "processMsgs: renderableMsgs",
                                ])),
                            ),
                    S.push(E(b, g, C, f, y, h, v))),
        { tasks: S, hasInactiveMsg: R }
      );
    }
    function E(e, t, n, r, a, i, l) {
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
    function k(e) {
      return o("WAWebMessageProcessPlaceholder").processPlaceholderMessage(e);
    }
    function I(e, t, n) {
      return T.apply(this, arguments);
    }
    function T() {
      return (
        (T = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
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
        T.apply(this, arguments)
      );
    }
    function D(e, t, n, r) {
      return x.apply(this, arguments);
    }
    function x() {
      return (
        (x = n("asyncToGeneratorRuntime").asyncToGenerator(
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
        x.apply(this, arguments)
      );
    }
    function $(e) {
      return o("WAWebGetGroupAddressingMode").getGroupAddressingMode(e);
    }
    function P(e) {
      var t = parseInt(e, 10);
      return Number.isNaN(t) ? null : t;
    }
    ((l.processDecryptedMessageProto = S),
      (l.processMsgs = L),
      (l.processRenderableMsg = E),
      (l.processPlaceholderMsg = k));
  },
  98,
);
