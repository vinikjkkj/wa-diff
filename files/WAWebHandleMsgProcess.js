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
            f = e.overwriteExistingMsg,
            g = f === void 0 ? !1 : f,
            h = e.paymentInfo,
            I = e.reparsing,
            T = I === void 0 ? !1 : I,
            D = e.reportingTokenInfo,
            x =
              s.e2eType === o("WAWebBackendJobs.flow").CiphertextType.Msmsg
                ? !1
                : m,
            $ = x
              ? o("WACryptoPkcs7").unpadPkcs7(new Uint8Array(l))
              : new Uint8Array(l),
            N = o("decodeProtobuf").decodeProtobuf(
              o("WAWebProtobufsE2E.pb").MessageSpec,
              $,
            );
          (o(
            "WAWebVerifyProtobufMsgObjectKeys",
          ).verifyProtobufMessageObjectKeys(N),
            o("WAWebMessageSecretLocationUtils").verifyTopLevelMessageSecret(
              N,
              o("WAWebMessageSecretLocationUtils").MessageSecretCheckContext
                .Receiver,
              c.externalId,
            ));
          var M = null,
            A =
              (t = N.deviceSentMessage) == null || (t = t.message) == null
                ? void 0
                : t.conditionalRevealMessage,
            O = (a = N.conditionalRevealMessage) != null ? a : A;
          if (O != null) {
            var B,
              W,
              q,
              U,
              G,
              z,
              j,
              K =
                N.conditionalRevealMessage == null && A != null
                  ? (B =
                      (W =
                        (q = N.deviceSentMessage) == null
                          ? void 0
                          : q.destinationJid) != null
                        ? W
                        : (U = c.chat) == null
                          ? void 0
                          : U.toString()) != null
                    ? B
                    : ""
                  : (G = (z = c.chat) == null ? void 0 : z.toString()) != null
                    ? G
                    : "",
              Q =
                c.author != null &&
                !o("WAWebUserPrefsMeUser").isMeAccount(c.author)
                  ? c.author.toString()
                  : null,
              X = yield o(
                "WAWebConditionalRevealPreProcessor",
              ).maybePreProcessConditionalRevealForReceive({
                conditionalRevealMessage: O,
                msgId: c.externalId,
                rawChatJid: K,
                reportingTokenInfo: D,
                senderJid: Q,
                stanzaScheduledMsgMeta:
                  (j = _ == null ? void 0 : _.scheduledMsgMeta) != null
                    ? j
                    : null,
              });
            if (
              (X.proto != null &&
                X.protoBytes != null &&
                ((N = X.proto),
                ($ = X.protoBytes),
                o(
                  "WAWebVerifyProtobufMsgObjectKeys",
                ).verifyProtobufMessageObjectKeys(N),
                o(
                  "WAWebMessageSecretLocationUtils",
                ).verifyTopLevelMessageSecret(
                  N,
                  o("WAWebMessageSecretLocationUtils").MessageSecretCheckContext
                    .Receiver,
                  c.externalId,
                )),
              (M = X.scheduledMsgViewMode),
              X.isRevealPending)
            ) {
              var Y =
                c.author != null &&
                o("WAWebUserPrefsMeUser").isMeAccount(c.author);
              return (
                Y ||
                  o(
                    "WAWebLogReceivedMessages",
                  ).logConditionalRevealMessageReceive({
                    chatWid: c.chat,
                    clientReceivedTsMillis: c.clientReceivedTsMillis,
                    msgProcessStartTsMillis: c.msgProcessStartTsMillis,
                    offline: H(c.offline),
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
          var J = o("WAWebMsgProcessingApiUtils").getFrom(c),
            Z =
              (s.retryCount > 0 &&
                o("WAWebMsgProcessingApiUtils").isRevokeInfo(c)) ||
              T ||
              g,
            ee = Z
              ? o("WAWebHandleMsgTypes.flow").MessageOverwriteOption.RETRY
              : o("WAWebHandleMsgTypes.flow").MessageOverwriteOption
                  .NO_OVERWRITE,
            te = null;
          if (T) {
            ((te = r("justknobx")._("5752")
              ? yield o("WAWebQuarantineActionUtils").getQuarantineAction(N, J)
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
            var ne =
              te ===
              o("WAWebQuarantineActionUtils").QuarantineAction.NoQuarantine
                ? yield o("WAWebMsgProcessingApiUtils").parseMessage({
                    info: c,
                    ciphertextType: s.e2eType,
                    msgProtobuf: N,
                    paymentInfo: h,
                    bizInfo: i,
                    hsmInfo: u,
                    hidePlaceholder: s.hideFail,
                    processDecryptedProtoParams: e,
                    msgBotInfo: p,
                    meta: _,
                    reportingTokenInfo: D,
                    isMessageRetry: s.retryCount > 0,
                    isOffline: c.offline != null,
                    protobufBytes: $,
                  })
                : P(
                    c,
                    $,
                    o("WAWebQuarantineActionUtils").maybeGetQuarantineText(te),
                  );
            if (ne.renderableMsgs == null)
              o("WALogger").ERROR(
                b ||
                  (b = babelHelpers.taggedTemplateLiteralLoose([
                    "parsed render able msgs not reparsed as expected",
                  ])),
              );
            else {
              var re = o(
                "WAWebConditionalRevealPreProcessor",
              ).applyScheduledMsgViewMode(ne.renderableMsgs, M);
              (o("WAWebHandleMsgValidate").renderableMessagesValidation({
                renderableMsgs: re,
                msgMeta: _,
                info: c,
                proto: N,
                bizInfo: i,
              }),
                o(
                  "WAWebMessagingGatingUtils",
                ).isWebReportingTokenDelayProcessingEnabled() ||
                  (yield o(
                    "WAWebHandleMsgValidate",
                  ).validateAndProcessReportingTokenInfo({
                    renderableMsgs: re,
                  })));
              var oe = w({
                  renderableMsgs: re,
                  reparsing: !0,
                  bizInfo: i,
                  msgMeta: _,
                  paymentInfo: h,
                  info: c,
                  messageOverwriteOption: ee,
                }),
                ae = oe.hasInactiveMsg,
                ie = oe.tasks;
              return (
                yield (k || (k = n("Promise"))).all(ie),
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
                { hasInactiveMsg: ae }
              );
            }
          }
          var le = yield o("WAWebHandleMsgProcessUtils").preProcessMsg(c, N);
          if (
            ((le == null ? void 0 : le.senderOrRecipientAccountTypeHosted) ===
              !0 && (c.senderOrRecipientAccountTypeHosted = !0),
            (le == null ? void 0 : le.hostedBizEncMismatch) === !0 &&
              (c.hostedBizEncStateMismatch = !0),
            c.type ===
              o("WAWebHandleMsgTypes.flow").MESSAGE_TYPE.PEER_BROADCAST &&
              s.retryCount > 0)
          ) {
            var se = yield o("WAWebDBMsgUtils").getMsgByMsgKey(
              o("WAWebMsgProcessingApiUtils").messageInfoToKey(c),
            );
            (se == null ? void 0 : se.bclParticipants) != null
              ? (c.bclParticipants = se.bclParticipants)
              : (se == null ? void 0 : se.broadcastParticipants) != null &&
                (c.bclParticipants = se.broadcastParticipants.map(function (e) {
                  return { wid: o("WAWebWidFactory").asUserWidOrThrow(e) };
                }));
          }
          var ue = o(
              "WAWebOfflineResumeMsgProcessReporterWorkerCompatible",
            ).msgProcessReporter.startMarker(
              o("WAWebOfflineResumeMsgProcessReporterWorkerCompatible")
                .msgProcessReporter.stage.Parsing,
            ),
            ce =
              te != null
                ? te
                : yield o("WAWebQuarantineActionUtils").getQuarantineAction(
                    N,
                    J,
                  ),
            de =
              ce ===
              o("WAWebQuarantineActionUtils").QuarantineAction.NoQuarantine
                ? yield o("WAWebMsgProcessingApiUtils").parseMessage({
                    info: c,
                    ciphertextType: s.e2eType,
                    msgProtobuf: N,
                    paymentInfo: h,
                    bizInfo: i,
                    hsmInfo: u,
                    hidePlaceholder: s.hideFail,
                    processDecryptedProtoParams: e,
                    msgBotInfo: p,
                    meta: _,
                    reportingTokenInfo: D,
                    isMessageRetry: s.retryCount > 0,
                    isOffline: c.offline != null,
                    protobufBytes: $,
                  })
                : P(
                    c,
                    $,
                    o("WAWebQuarantineActionUtils").maybeGetQuarantineText(ce),
                  );
          if (
            o("WAWebCurrentUser").isEmployee() &&
            o("WAWebABProps").getABPropConfigValue(
              "wa_web_debug_color_code_retry_messages",
            )
          ) {
            var me;
            (me = de.renderableMsgs) == null ||
              me.forEach(function (e) {
                s.retryCount > 0 && (e.backgroundColor = 16711680);
              });
          }
          ue == null || ue();
          var pe = null;
          if (
            (de.history
              ? (pe = o("WAWebParsedProtocolMsgType")
                  .PARSED_PROTOCOL_MESSAGE_TYPE.HISTORY)
              : de.appStateSyncKeyShare
                ? (pe = o("WAWebParsedProtocolMsgType")
                    .PARSED_PROTOCOL_MESSAGE_TYPE.APP_STATE_SYNC_KEY_SHARE)
                : de.appStateSyncKeyRequest
                  ? (pe = o("WAWebParsedProtocolMsgType")
                      .PARSED_PROTOCOL_MESSAGE_TYPE.APP_STATE_SYNC_KEY_REQUEST)
                  : de.peerDataOperationRequestResponseMessage
                    ? (pe = o("WAWebParsedProtocolMsgType")
                        .PARSED_PROTOCOL_MESSAGE_TYPE
                        .PEER_DATA_OPERATION_REQUEST_RESPONSE_MESSAGE)
                    : de.peerDataOperationRequestMessage &&
                      (pe = o("WAWebParsedProtocolMsgType")
                        .PARSED_PROTOCOL_MESSAGE_TYPE
                        .PEER_DATA_OPERATION_REQUEST_MESSAGE),
            o("WAWebRuntimeEnvironmentUtils").isWorker() && pe)
          )
            yield o("WAWebApiDeferredMessagesStorage").updateDeferredMessages([
              {
                id: c.externalId,
                type: pe,
                plaintext: $,
                info: c,
                paymentInfo: h,
                bizInfo: i,
              },
            ]);
          else if (de.history)
            o("WAWebWorkerSafeBackendApi").workerSafeSendAndReceive(
              "handleHistorySyncNotification",
              {
                historySyncMetaData: de.history,
                from: J,
                externalId: c.externalId,
              },
            );
          else if (de.appStateSyncKeyShare)
            yield o("WAWebWorkerSafeBackendApi").workerSafeSendAndReceive(
              "handleAppStateSyncKeyShare",
              { keyShare: de.appStateSyncKeyShare, from: J },
            );
          else if (de.appStateSyncKeyRequest)
            o("WAWebWorkerSafeBackendApi").workerSafeSendAndReceive(
              "handleAppStateSyncKeyRequest",
              { keyRequest: de.appStateSyncKeyRequest, from: J },
            );
          else if (de.peerDataOperationRequestResponseMessage)
            o("WAWebWorkerSafeBackendApi").workerSafeSendAndReceive(
              "handlePeerDataOperationRequestResponse",
              {
                stanzaId: c.externalId,
                response: de.peerDataOperationRequestResponseMessage,
              },
            );
          else if (de.peerDataOperationRequestMessage)
            o("WAWebWorkerSafeBackendApi").workerSafeSendAndReceive(
              "handlePeerDataOperationRequest",
              {
                stanzaId: c.externalId,
                request: de.peerDataOperationRequestMessage,
              },
            );
          else if (de.securityNotificationEnabled)
            J == null || !(J instanceof r("WAWebWid"))
              ? o("WALogger")
                  .ERROR(
                    S ||
                      (S = babelHelpers.taggedTemplateLiteralLoose([
                        "Handle security notification empty wid error",
                      ])),
                  )
                  .sendLogs("Handle security notification empty wid error")
              : o("WAWebUserPrefsMeUser").isMePrimary(J)
                ? o(
                    "WAWebUserPrefsNotifications",
                  ).setGlobalSecurityNotifications(
                    de.securityNotificationEnabled.isEnabled,
                  )
                : o("WALogger")
                    .ERROR(
                      R ||
                        (R = babelHelpers.taggedTemplateLiteralLoose([
                          "Handle security notification payload wid error",
                        ])),
                    )
                    .sendLogs("Handle security notification payload wid error");
          else if (de.cloudApiThreadControlNotification)
            r("WAWebHandleCloudApiThreadControlNotification")(
              de.cloudApiThreadControlNotification,
            );
          else if (de.lidMigrationSyncMessage != null)
            o("WALogger")
              .ERROR(
                L ||
                  (L = babelHelpers.taggedTemplateLiteralLoose([
                    "[LID] received peer migration stanza but client-to-LID migration is no longer supported",
                  ])),
              )
              .sendLogs(
                o("WAWebUserPrefsMeUser").isMeAccount(J)
                  ? "lid-migration-peer-stanza-received"
                  : "lid-migration-non-peer-stanza-received",
              );
          else {
            var _e = !1;
            if (
              (de.deviceSent == null
                ? (_e = !0)
                : de.deviceSent.phash
                  ? (_e = yield o("WAWebHandleMsgValidate").validateBclHash(
                      de.deviceSent.phash,
                      de.deviceSent.info,
                    ))
                  : de.deviceSent.destination &&
                    (_e = yield o(
                      "WAWebHandleMsgValidate",
                    ).validateMsgDestination(de.deviceSent.destination, c)),
              !_e)
            )
              throw new (o("WAWebHandleMsgError").DeviceSentMessageError)(
                o("WAWebMsgProcessingApiUtils").getDeviceType(c.author),
                o("WAWebWamEnumDsmError").DSM_ERROR.INVALID_DSM,
              );
            var fe = de.renderableMsgs;
            if (
              (o("WAWebHandleMsgValidate").renderableMessagesValidation({
                renderableMsgs: fe,
                msgMeta: _,
                info: c,
                proto: N,
                bizInfo: i,
              }),
              !o(
                "WAWebMessagingGatingUtils",
              ).isWebReportingTokenDelayProcessingEnabled())
            ) {
              var ge = o(
                "WAWebOfflineResumeMsgProcessReporterWorkerCompatible",
              ).msgProcessReporter.startMarker(
                o("WAWebOfflineResumeMsgProcessReporterWorkerCompatible")
                  .msgProcessReporter.stage.ProcessReportingTokenInfo,
              );
              (yield o(
                "WAWebHandleMsgValidate",
              ).validateAndProcessReportingTokenInfo({ renderableMsgs: fe }),
                ge == null || ge());
            }
            var he = yield o(
                "WAWebGalaxyFlowsUtils",
              ).maybeAddGalaxyFlowMessageIds(fe),
              ye = o(
                "WAWebConditionalRevealPreProcessor",
              ).applyScheduledMsgViewMode(
                de.storeMsg != null ? [de.storeMsg].concat(he) : he,
                M,
              ),
              Ce = w({
                renderableMsgs: ye,
                reparsing: T,
                bizInfo: i,
                msgMeta: _,
                paymentInfo: h,
                info: c,
                messageOverwriteOption: ee,
              }),
              be = Ce.hasInactiveMsg,
              ve = Ce.tasks,
              Se = !1;
            if (
              o("WAWebABProps").getABPropConfigValue(
                "web_send_orphan_in_receipts_enabled",
              )
            ) {
              var Re = ye[0],
                Le = F(Re);
              if (Le != null) {
                var Ee = yield o("WAWebAddonQueryUtils").getParentMsgsByMsgKey([
                    Le,
                  ]),
                  ke = Ee.get(Le.toString());
                Se =
                  ke == null ||
                  ke.type === o("WAWebMsgType").MSG_TYPE.CIPHERTEXT ||
                  (ke.type === o("WAWebMsgType").MSG_TYPE.UNKNOWN &&
                    (ke.futureproofType == null ||
                      !o(
                        "WAWebMessageAssociationConstants",
                      ).orphanIneligibleFutureproofTypes.has(
                        ke.futureproofType,
                      )));
              }
            }
            var Ie = de.senderKey;
            Ie != null &&
              ve.push(
                o("WAWebSignal").Session.createGroupSignalSession(
                  c.author,
                  Ie.groupId,
                  Ie.key,
                ),
              );
            var Te = de.rootSecretDistribute;
            if (Te != null)
              if (o("WAWebUserPrefsMeUser").isMeAccount(c.author)) {
                var De = Te.chatJid,
                  xe = Te.rootSecret,
                  $e = Te.stanzaId;
                ve.push(
                  o("WAWebWasaRootSecretWriter").applyWasaRootSecretForId(
                    De,
                    $e,
                    xe,
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
            var Pe = V(c.chat);
            yield (k || (k = n("Promise"))).all(ve);
            var Ne = yield Pe;
            return (
              o(
                "WAWebLogMissingGroupParticipantMappings",
              ).logMissingGroupParticipantMappings({
                author: c.author,
                groupId: c.chat,
                localAddressingMode: Ne,
                serverAddressingMode: c.addressingMode,
              }),
              o("WAWebLogReceivedMessages").logReceivedMessagesInWAM({
                msgs: he,
                offline: H(c.offline),
                tsMillis: c.ts * 1e3,
                clientReceivedTsMillis: c.clientReceivedTsMillis,
                msgProcessStartTsMillis: c.msgProcessStartTsMillis,
                serverAddressingMode: c.addressingMode,
                localAddressingMode: Ne,
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
              { hasInactiveMsg: be, isOrphanAddon: Se }
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
