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
    "WAWebCoexV2PushnameUpdate",
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
    function P(e) {
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
            o("WAWebMessageSecretLocationUtils").verifyTopLevelMessageSecret({
              context: o("WAWebMessageSecretLocationUtils")
                .MessageSecretCheckContext.Receiver,
              proto: x,
              stanzaId: c.externalId,
            }));
          var $ = null,
            N =
              (t = x.deviceSentMessage) == null || (t = t.message) == null
                ? void 0
                : t.conditionalRevealMessage,
            M = (a = x.conditionalRevealMessage) != null ? a : N;
          if (M != null) {
            var A,
              B,
              W,
              q,
              U,
              V,
              z,
              j =
                x.conditionalRevealMessage == null && N != null
                  ? (A =
                      (B =
                        (W = x.deviceSentMessage) == null
                          ? void 0
                          : W.destinationJid) != null
                        ? B
                        : (q = c.chat) == null
                          ? void 0
                          : q.toString()) != null
                    ? A
                    : ""
                  : (U = (V = c.chat) == null ? void 0 : V.toString()) != null
                    ? U
                    : "",
              K =
                c.author != null &&
                !o("WAWebUserPrefsMeUser").isMeAccount(c.author)
                  ? c.author.toString()
                  : null,
              Q = yield o(
                "WAWebConditionalRevealPreProcessor",
              ).maybePreProcessConditionalRevealForReceive({
                conditionalRevealMessage: M,
                msgId: c.externalId,
                rawChatJid: j,
                reportingTokenInfo: I,
                senderJid: K,
                stanzaScheduledMsgMeta:
                  (z = _ == null ? void 0 : _.scheduledMsgMeta) != null
                    ? z
                    : null,
              });
            if (
              (Q.proto != null &&
                Q.protoBytes != null &&
                ((x = Q.proto),
                (D = Q.protoBytes),
                o(
                  "WAWebVerifyProtobufMsgObjectKeys",
                ).verifyProtobufMessageObjectKeys(x),
                o(
                  "WAWebMessageSecretLocationUtils",
                ).verifyTopLevelMessageSecret({
                  context: o("WAWebMessageSecretLocationUtils")
                    .MessageSecretCheckContext.Receiver,
                  proto: x,
                  stanzaId: c.externalId,
                })),
              ($ = Q.scheduledMsgViewMode),
              Q.isRevealPending)
            ) {
              var X =
                c.author != null &&
                o("WAWebUserPrefsMeUser").isMeAccount(c.author);
              return (
                X ||
                  o(
                    "WAWebLogReceivedMessages",
                  ).logConditionalRevealMessageReceive({
                    chatWid: c.chat,
                    clientReceivedTsMillis: c.clientReceivedTsMillis,
                    msgProcessStartTsMillis: c.msgProcessStartTsMillis,
                    offline: G(c.offline),
                    tsMillis: c.ts * 1e3,
                  }),
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
          }
          var Y = o("WAWebMsgProcessingApiUtils").getFrom(c),
            J =
              (s.retryCount > 0 &&
                o("WAWebMsgProcessingApiUtils").isRevokeInfo(c)) ||
              h,
            Z = J
              ? o("WAWebHandleMsgTypes.flow").MessageOverwriteOption.RETRY
              : o("WAWebHandleMsgTypes.flow").MessageOverwriteOption
                  .NO_OVERWRITE,
            ee = null;
          if (h) {
            ((ee = r("justknobx")._("5752")
              ? yield o("WAWebQuarantineActionUtils").getQuarantineAction(x, Y)
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
            var te =
              ee ===
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
                : P({
                    info: c,
                    plaintext: D,
                    quarantineExtractedText: o(
                      "WAWebQuarantineActionUtils",
                    ).maybeGetQuarantineText(ee),
                  });
            if (te.renderableMsgs == null)
              o("WALogger").ERROR(
                b ||
                  (b = babelHelpers.taggedTemplateLiteralLoose([
                    "parsed render able msgs not reparsed as expected",
                  ])),
              );
            else {
              var ne = o(
                "WAWebConditionalRevealPreProcessor",
              ).applyScheduledMsgViewMode(te.renderableMsgs, $);
              (o("WAWebHandleMsgValidate").renderableMessagesValidation({
                renderableMsgs: ne,
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
                    renderableMsgs: ne,
                  })));
              var re = w({
                  renderableMsgs: ne,
                  reparsing: !0,
                  bizInfo: i,
                  msgMeta: _,
                  paymentInfo: f,
                  info: c,
                  messageOverwriteOption: Z,
                }),
                oe = re.hasInactiveMsg,
                ae = re.tasks;
              return (
                yield (k || (k = n("Promise"))).all(ae),
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
                { hasInactiveMsg: oe }
              );
            }
          }
          var ie = yield o("WAWebHandleMsgProcessUtils").preProcessMsg(c, x);
          if (
            ((ie == null ? void 0 : ie.senderOrRecipientAccountTypeHosted) ===
              !0 && (c.senderOrRecipientAccountTypeHosted = !0),
            (ie == null ? void 0 : ie.hostedBizEncMismatch) === !0 &&
              (c.hostedBizEncStateMismatch = !0),
            c.type ===
              o("WAWebHandleMsgTypes.flow").MESSAGE_TYPE.PEER_BROADCAST &&
              s.retryCount > 0)
          ) {
            var le = yield o("WAWebDBMsgUtils").getMsgByMsgKey(
              o("WAWebMsgProcessingApiUtils").messageInfoToKey(c),
            );
            (le == null ? void 0 : le.bclParticipants) != null
              ? (c.bclParticipants = le.bclParticipants)
              : (le == null ? void 0 : le.broadcastParticipants) != null &&
                (c.bclParticipants = le.broadcastParticipants.map(function (e) {
                  return { wid: o("WAWebWidFactory").asUserWidOrThrow(e) };
                }));
          }
          var se = o(
              "WAWebOfflineResumeMsgProcessReporterWorkerCompatible",
            ).msgProcessReporter.startMarker(
              o("WAWebOfflineResumeMsgProcessReporterWorkerCompatible")
                .msgProcessReporter.stage.Parsing,
            ),
            ue =
              ee != null
                ? ee
                : yield o("WAWebQuarantineActionUtils").getQuarantineAction(
                    x,
                    Y,
                  ),
            ce =
              ue ===
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
                : P({
                    info: c,
                    plaintext: D,
                    quarantineExtractedText: o(
                      "WAWebQuarantineActionUtils",
                    ).maybeGetQuarantineText(ue),
                  });
          if (
            o("WAWebCurrentUser").isEmployee() &&
            o("WAWebABProps").getABPropConfigValue(
              "wa_web_debug_color_code_retry_messages",
            )
          ) {
            var de;
            (de = ce.renderableMsgs) == null ||
              de.forEach(function (e) {
                s.retryCount > 0 && (e.backgroundColor = 16711680);
              });
          }
          se == null || se();
          var me = null;
          if (
            (ce.history
              ? (me = o("WAWebParsedProtocolMsgType")
                  .PARSED_PROTOCOL_MESSAGE_TYPE.HISTORY)
              : ce.appStateSyncKeyShare
                ? (me = o("WAWebParsedProtocolMsgType")
                    .PARSED_PROTOCOL_MESSAGE_TYPE.APP_STATE_SYNC_KEY_SHARE)
                : ce.appStateSyncKeyRequest
                  ? (me = o("WAWebParsedProtocolMsgType")
                      .PARSED_PROTOCOL_MESSAGE_TYPE.APP_STATE_SYNC_KEY_REQUEST)
                  : ce.peerDataOperationRequestResponseMessage
                    ? (me = o("WAWebParsedProtocolMsgType")
                        .PARSED_PROTOCOL_MESSAGE_TYPE
                        .PEER_DATA_OPERATION_REQUEST_RESPONSE_MESSAGE)
                    : ce.peerDataOperationRequestMessage &&
                      (me = o("WAWebParsedProtocolMsgType")
                        .PARSED_PROTOCOL_MESSAGE_TYPE
                        .PEER_DATA_OPERATION_REQUEST_MESSAGE),
            o("WAWebRuntimeEnvironmentUtils").isWorker() && me)
          )
            yield o("WAWebApiDeferredMessagesStorage").updateDeferredMessages([
              {
                id: c.externalId,
                type: me,
                plaintext: D,
                info: c,
                paymentInfo: f,
                bizInfo: i,
              },
            ]);
          else if (ce.history)
            o("WAWebWorkerSafeBackendApi").workerSafeSendAndReceive(
              "handleHistorySyncNotification",
              {
                historySyncMetaData: ce.history,
                from: Y,
                externalId: c.externalId,
              },
            );
          else if (ce.appStateSyncKeyShare)
            yield o("WAWebWorkerSafeBackendApi").workerSafeSendAndReceive(
              "handleAppStateSyncKeyShare",
              { keyShare: ce.appStateSyncKeyShare, from: Y },
            );
          else if (ce.appStateSyncKeyRequest)
            o("WAWebWorkerSafeBackendApi").workerSafeSendAndReceive(
              "handleAppStateSyncKeyRequest",
              { keyRequest: ce.appStateSyncKeyRequest, from: Y },
            );
          else if (ce.peerDataOperationRequestResponseMessage)
            o("WAWebWorkerSafeBackendApi").workerSafeSendAndReceive(
              "handlePeerDataOperationRequestResponse",
              {
                stanzaId: c.externalId,
                response: ce.peerDataOperationRequestResponseMessage,
              },
            );
          else if (ce.peerDataOperationRequestMessage)
            o("WAWebWorkerSafeBackendApi").workerSafeSendAndReceive(
              "handlePeerDataOperationRequest",
              {
                stanzaId: c.externalId,
                request: ce.peerDataOperationRequestMessage,
              },
            );
          else if (ce.securityNotificationEnabled)
            Y == null || !(Y instanceof r("WAWebWid"))
              ? o("WALogger")
                  .ERROR(
                    S ||
                      (S = babelHelpers.taggedTemplateLiteralLoose([
                        "Handle security notification empty wid error",
                      ])),
                  )
                  .sendLogs("Handle security notification empty wid error")
              : o("WAWebUserPrefsMeUser").isMePrimary(Y)
                ? o(
                    "WAWebUserPrefsNotifications",
                  ).setGlobalSecurityNotifications(
                    ce.securityNotificationEnabled.isEnabled,
                  )
                : o("WALogger")
                    .ERROR(
                      R ||
                        (R = babelHelpers.taggedTemplateLiteralLoose([
                          "Handle security notification payload wid error",
                        ])),
                    )
                    .sendLogs("Handle security notification payload wid error");
          else if (ce.cloudApiThreadControlNotification)
            r("WAWebHandleCloudApiThreadControlNotification")(
              ce.cloudApiThreadControlNotification,
            );
          else if (ce.lidMigrationSyncMessage != null)
            o("WALogger")
              .ERROR(
                L ||
                  (L = babelHelpers.taggedTemplateLiteralLoose([
                    "[LID] received peer migration stanza but client-to-LID migration is no longer supported",
                  ])),
              )
              .sendLogs(
                o("WAWebUserPrefsMeUser").isMeAccount(Y)
                  ? "lid-migration-peer-stanza-received"
                  : "lid-migration-non-peer-stanza-received",
              );
          else {
            var pe = !1;
            if (
              (ce.deviceSent == null
                ? (pe = !0)
                : ce.deviceSent.phash
                  ? (pe = yield o("WAWebHandleMsgValidate").validateBclHash(
                      ce.deviceSent.phash,
                      ce.deviceSent.info,
                    ))
                  : ce.deviceSent.destination &&
                    (pe = yield o(
                      "WAWebHandleMsgValidate",
                    ).validateMsgDestination(ce.deviceSent.destination, c)),
              !pe)
            )
              throw new (o("WAWebHandleMsgError").DeviceSentMessageError)(
                o("WAWebMsgProcessingApiUtils").getDeviceType(c.author),
                o("WAWebWamEnumDsmError").DSM_ERROR.INVALID_DSM,
              );
            var _e = ce.renderableMsgs;
            if (
              (o("WAWebHandleMsgValidate").renderableMessagesValidation({
                renderableMsgs: _e,
                msgMeta: _,
                info: c,
                proto: x,
                bizInfo: i,
              }),
              !o(
                "WAWebMessagingGatingUtils",
              ).isWebReportingTokenDelayProcessingEnabled())
            ) {
              var fe = o(
                "WAWebOfflineResumeMsgProcessReporterWorkerCompatible",
              ).msgProcessReporter.startMarker(
                o("WAWebOfflineResumeMsgProcessReporterWorkerCompatible")
                  .msgProcessReporter.stage.ProcessReportingTokenInfo,
              );
              (yield o(
                "WAWebHandleMsgValidate",
              ).validateAndProcessReportingTokenInfo({ renderableMsgs: _e }),
                fe == null || fe());
            }
            var ge = yield o(
                "WAWebGalaxyFlowsUtils",
              ).maybeAddGalaxyFlowMessageIds(_e),
              he = o(
                "WAWebConditionalRevealPreProcessor",
              ).applyScheduledMsgViewMode(
                ce.storeMsg != null ? [ce.storeMsg].concat(ge) : ge,
                $,
              ),
              ye = w({
                renderableMsgs: he,
                reparsing: h,
                bizInfo: i,
                msgMeta: _,
                paymentInfo: f,
                info: c,
                messageOverwriteOption: Z,
              }),
              Ce = ye.hasInactiveMsg,
              be = ye.tasks,
              ve = !1;
            if (
              o("WAWebABProps").getABPropConfigValue(
                "web_send_orphan_in_receipts_enabled",
              )
            ) {
              var Se = he[0],
                Re = F(Se);
              if (Re != null) {
                var Le = yield o("WAWebAddonQueryUtils").getParentMsgsByMsgKey([
                    Re,
                  ]),
                  Ee = Le.get(Re.toString());
                ve =
                  Ee == null ||
                  Ee.type === o("WAWebMsgType").MSG_TYPE.CIPHERTEXT ||
                  (Ee.type === o("WAWebMsgType").MSG_TYPE.UNKNOWN &&
                    (Ee.futureproofType == null ||
                      !o(
                        "WAWebMessageAssociationConstants",
                      ).orphanIneligibleFutureproofTypes.has(
                        Ee.futureproofType,
                      )));
              }
            }
            var ke = ce.senderKey;
            ke != null &&
              be.push(
                o("WAWebSignal").Session.createGroupSignalSession(
                  c.author,
                  ke.groupId,
                  ke.key,
                ),
              );
            var Ie = ce.rootSecretDistribute;
            if (Ie != null)
              if (o("WAWebUserPrefsMeUser").isMeAccount(c.author)) {
                var Te = Ie.chatJid,
                  De = Ie.rootSecret,
                  xe = Ie.stanzaId;
                be.push(
                  o("WAWebWasaRootSecretWriter").applyWasaRootSecretForId(
                    Te,
                    xe,
                    De,
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
            O(c, _);
            var $e = H(c.chat);
            yield (k || (k = n("Promise"))).all(be);
            var Pe = yield $e;
            return (
              o(
                "WAWebLogMissingGroupParticipantMappings",
              ).logMissingGroupParticipantMappings({
                author: c.author,
                groupId: c.chat,
                localAddressingMode: Pe,
                serverAddressingMode: c.addressingMode,
              }),
              o("WAWebLogReceivedMessages").logReceivedMessagesInWAM({
                msgs: ge,
                offline: G(c.offline),
                tsMillis: c.ts * 1e3,
                clientReceivedTsMillis: c.clientReceivedTsMillis,
                msgProcessStartTsMillis: c.msgProcessStartTsMillis,
                serverAddressingMode: c.addressingMode,
                isPq: s.isPq,
                localAddressingMode: Pe,
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
              { hasInactiveMsg: Ce, isOrphanAddon: ve }
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
              U({
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
              R.push(W(E, s, S)))
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
    function O(e, t) {
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
    function B(e) {
      return o("WAWebMessageProcessPlaceholder").processPlaceholderMessage(e);
    }
    function W(e, t, n) {
      return q.apply(this, arguments);
    }
    function q() {
      return (
        (q = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
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
        q.apply(this, arguments)
      );
    }
    function U(e) {
      return V.apply(this, arguments);
    }
    function V() {
      return (
        (V = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
        V.apply(this, arguments)
      );
    }
    function H(e) {
      return o("WAWebGetGroupAddressingMode").getGroupAddressingMode(e);
    }
    function G(e) {
      var t = parseInt(e, 10);
      return Number.isNaN(t) ? null : t;
    }
    ((l.processDecryptedMessageProto = N),
      (l.processMsgs = w),
      (l.processRenderableMsg = A),
      (l.updateIncomingMessagePushname = O),
      (l.processPlaceholderMsg = B));
  },
  98,
);
