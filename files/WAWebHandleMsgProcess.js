__d(
  "WAWebHandleMsgProcess",
  [
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
      R = (e = n("cr:37440")) != null ? e : {},
      L = R.castToAddonMsgData,
      E = R.getParentMsgKey,
      k = (s = n("cr:37441")) != null ? s : {},
      I = k.isUnifiedInfraEnabledForType;
    async function T(e) {
      var t,
        n,
        a = e.bizInfo,
        i = e.decrypted,
        l = e.e2eInfo,
        s = e.hsmInfo,
        f = e.info,
        g = e.isPadded,
        h = g === void 0 ? !0 : g,
        y = e.msgBotInfo,
        C = e.msgMeta,
        b = e.paymentInfo,
        v = e.reparsing,
        S = v === void 0 ? !1 : v,
        R = e.reportingTokenInfo,
        L =
          l.e2eType === o("WAWebBackendJobs.flow").CiphertextType.Msmsg
            ? !1
            : h,
        E = L
          ? o("WACryptoPkcs7").unpadPkcs7(new Uint8Array(i))
          : new Uint8Array(i),
        k = o("decodeProtobuf").decodeProtobuf(
          o("WAWebProtobufsE2E.pb").MessageSpec,
          E,
        );
      (o("WAWebVerifyProtobufMsgObjectKeys").verifyProtobufMessageObjectKeys(k),
        o("WAWebMessageSecretLocationUtils").verifyTopLevelMessageSecret(
          k,
          o("WAWebMessageSecretLocationUtils").MessageSecretCheckContext
            .Receiver,
          f.externalId,
        ));
      var I = null,
        T =
          (t = k.deviceSentMessage) == null || (t = t.message) == null
            ? void 0
            : t.conditionalRevealMessage,
        x = (n = k.conditionalRevealMessage) != null ? n : T;
      if (x != null) {
        var P,
          N,
          M,
          F,
          O,
          B,
          W,
          q =
            k.conditionalRevealMessage == null && T != null
              ? (P =
                  (N =
                    (M = k.deviceSentMessage) == null
                      ? void 0
                      : M.destinationJid) != null
                    ? N
                    : (F = f.chat) == null
                      ? void 0
                      : F.toString()) != null
                ? P
                : ""
              : (O = (B = f.chat) == null ? void 0 : B.toString()) != null
                ? O
                : "",
          U =
            f.author != null && !o("WAWebUserPrefsMeUser").isMeAccount(f.author)
              ? f.author.toString()
              : null,
          V = await o(
            "WAWebConditionalRevealPreProcessor",
          ).maybePreProcessConditionalRevealForReceive(
            x,
            f.externalId,
            q,
            U,
            (W = C == null ? void 0 : C.scheduledMsgMeta) != null ? W : null,
          );
        if (
          (V.proto != null &&
            V.protoBytes != null &&
            ((k = V.proto),
            (E = V.protoBytes),
            o(
              "WAWebVerifyProtobufMsgObjectKeys",
            ).verifyProtobufMessageObjectKeys(k),
            o("WAWebMessageSecretLocationUtils").verifyTopLevelMessageSecret(
              k,
              o("WAWebMessageSecretLocationUtils").MessageSecretCheckContext
                .Receiver,
              f.externalId,
            )),
          (I = V.scheduledMsgViewMode),
          V.isRevealPending)
        )
          return (
            o("WALogger").LOG(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "[scheduled_msg] reveal-pending, skip processing msgId=",
                  "",
                ])),
              f.externalId,
            ),
            { hasInactiveMsg: !1 }
          );
      }
      var H = o("WAWebMsgProcessingApiUtils").getFrom(f),
        G =
          (l.retryCount > 0 &&
            o("WAWebMsgProcessingApiUtils").isRevokeInfo(f)) ||
          S,
        z = G
          ? o("WAWebHandleMsgTypes.flow").MessageOverwriteOption.RETRY
          : o("WAWebHandleMsgTypes.flow").MessageOverwriteOption.NO_OVERWRITE;
      if (S) {
        o("WALogger")
          .LOG(
            c ||
              (c = babelHelpers.taggedTemplateLiteralLoose([
                "[processDecryptedMessageProto] reparsing msgId=",
                "",
              ])),
            f.externalId,
          )
          .tags("messaging");
        var j = await o("WAWebMsgProcessingApiUtils").parseMessage({
          info: f,
          ciphertextType: l.e2eType,
          msgProtobuf: k,
          paymentInfo: b,
          bizInfo: a,
          hsmInfo: s,
          hidePlaceholder: l.hideFail,
          processDecryptedProtoParams: e,
          msgBotInfo: y,
          meta: C,
          reportingTokenInfo: R,
          isMessageRetry: l.retryCount > 0,
          isOffline: f.offline != null,
          protobufBytes: E,
        });
        if (j.renderableMsgs == null)
          o("WALogger").ERROR(
            d ||
              (d = babelHelpers.taggedTemplateLiteralLoose([
                "parsed render able msgs not reparsed as expected",
              ])),
          );
        else {
          var K = o(
            "WAWebConditionalRevealPreProcessor",
          ).applyScheduledMsgViewMode(j.renderableMsgs, I);
          (o("WAWebHandleMsgValidate").renderableMessagesValidation({
            renderableMsgs: K,
            msgMeta: C,
            info: f,
            proto: k,
            bizInfo: a,
          }),
            o(
              "WAWebMessagingGatingUtils",
            ).isWebReportingTokenDelayProcessingEnabled() ||
              (await o(
                "WAWebHandleMsgValidate",
              ).validateAndProcessReportingTokenInfo({ renderableMsgs: K })));
          var Q = D({
              renderableMsgs: K,
              reparsing: !0,
              bizInfo: a,
              msgMeta: C,
              paymentInfo: b,
              info: f,
              messageOverwriteOption: z,
            }),
            X = Q.hasInactiveMsg,
            Y = Q.tasks;
          return (
            await Promise.all(Y),
            o("WALogger")
              .LOG(
                m ||
                  (m = babelHelpers.taggedTemplateLiteralLoose([
                    "[processDecryptedMessageProto] reparsed msgId=",
                    "",
                  ])),
                f.externalId,
              )
              .tags("messaging"),
            { hasInactiveMsg: X }
          );
        }
      }
      var J = await o("WAWebHandleMsgProcessUtils").preProcessMsg(f, k);
      if (
        (o("WAWebBizCoexGatingUtils").bizHostedDevicesEnabled() &&
          ((J == null ? void 0 : J.senderOrRecipientAccountTypeHosted) === !0 &&
            (f.senderOrRecipientAccountTypeHosted = !0),
          (J == null ? void 0 : J.hostedBizEncMismatch) === !0 &&
            (f.hostedBizEncStateMismatch = !0)),
        f.type === o("WAWebHandleMsgTypes.flow").MESSAGE_TYPE.PEER_BROADCAST &&
          l.retryCount > 0)
      ) {
        var Z = await o("WAWebDBMsgUtils").getMsgByMsgKey(
          o("WAWebMsgProcessingApiUtils").messageInfoToKey(f),
        );
        (Z == null ? void 0 : Z.bclParticipants) != null
          ? (f.bclParticipants = Z.bclParticipants)
          : (Z == null ? void 0 : Z.broadcastParticipants) != null &&
            (f.bclParticipants = Z.broadcastParticipants.map(function (e) {
              return { wid: o("WAWebWidFactory").asUserWidOrThrow(e) };
            }));
      }
      var ee = o(
          "WAWebOfflineResumeMsgProcessReporterWorkerCompatible",
        ).msgProcessReporter.startMarker(
          o("WAWebOfflineResumeMsgProcessReporterWorkerCompatible")
            .msgProcessReporter.stage.Parsing,
        ),
        te = S
          ? o("WAWebQuarantineActionUtils").QuarantineAction.NoQuarantine
          : await o("WAWebQuarantineActionUtils").getQuarantineAction(k, H),
        ne =
          te === o("WAWebQuarantineActionUtils").QuarantineAction.NoQuarantine
            ? await o("WAWebMsgProcessingApiUtils").parseMessage({
                info: f,
                ciphertextType: l.e2eType,
                msgProtobuf: k,
                paymentInfo: b,
                bizInfo: a,
                hsmInfo: s,
                hidePlaceholder: l.hideFail,
                processDecryptedProtoParams: e,
                msgBotInfo: y,
                meta: C,
                reportingTokenInfo: R,
                isMessageRetry: l.retryCount > 0,
                isOffline: f.offline != null,
                protobufBytes: E,
              })
            : {
                deviceSent: null,
                senderKey: null,
                storeMsg: null,
                renderableMsgs: [
                  babelHelpers.extends(
                    {},
                    o("WAWebMsgProcessingApiUtils").generateBaseMsg(f),
                    {
                      type: o("WAWebMsgType").MSG_TYPE.QUARANTINED,
                      kind: o("WAWebMsgType").MsgKind.QuarantinedMessage,
                      quarantineOriginalProtobuf: E.slice().buffer,
                      quarantineExtractedText: o(
                        "WAWebQuarantineActionUtils",
                      ).maybeGetQuarantineText(te),
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
        var re;
        (re = ne.renderableMsgs) == null ||
          re.forEach(function (e) {
            l.retryCount > 0 && (e.backgroundColor = 16711680);
          });
      }
      ee == null || ee();
      var oe = null;
      if (
        (ne.history
          ? (oe = o("WAWebParsedProtocolMsgType").PARSED_PROTOCOL_MESSAGE_TYPE
              .HISTORY)
          : ne.appStateSyncKeyShare
            ? (oe = o("WAWebParsedProtocolMsgType").PARSED_PROTOCOL_MESSAGE_TYPE
                .APP_STATE_SYNC_KEY_SHARE)
            : ne.appStateSyncKeyRequest
              ? (oe = o("WAWebParsedProtocolMsgType")
                  .PARSED_PROTOCOL_MESSAGE_TYPE.APP_STATE_SYNC_KEY_REQUEST)
              : ne.peerDataOperationRequestResponseMessage
                ? (oe = o("WAWebParsedProtocolMsgType")
                    .PARSED_PROTOCOL_MESSAGE_TYPE
                    .PEER_DATA_OPERATION_REQUEST_RESPONSE_MESSAGE)
                : ne.peerDataOperationRequestMessage &&
                  (oe = o("WAWebParsedProtocolMsgType")
                    .PARSED_PROTOCOL_MESSAGE_TYPE
                    .PEER_DATA_OPERATION_REQUEST_MESSAGE),
        o("WAWebRuntimeEnvironmentUtils").isWorker() && oe)
      )
        await r("WAWebApiDeferredMessagesStorage").updateDeferredMessages([
          {
            id: f.externalId,
            type: oe,
            plaintext: E,
            info: f,
            paymentInfo: b,
            bizInfo: a,
          },
        ]);
      else if (ne.history)
        o("WAWebWorkerSafeBackendApi").workerSafeSendAndReceive(
          "handleHistorySyncNotification",
          {
            historySyncMetaData: ne.history,
            from: H,
            externalId: f.externalId,
          },
        );
      else if (ne.appStateSyncKeyShare)
        await o("WAWebWorkerSafeBackendApi").workerSafeSendAndReceive(
          "handleAppStateSyncKeyShare",
          { keyShare: ne.appStateSyncKeyShare, from: H },
        );
      else if (ne.appStateSyncKeyRequest)
        o("WAWebWorkerSafeBackendApi").workerSafeSendAndReceive(
          "handleAppStateSyncKeyRequest",
          { keyRequest: ne.appStateSyncKeyRequest, from: H },
        );
      else if (ne.peerDataOperationRequestResponseMessage)
        o("WAWebWorkerSafeBackendApi").workerSafeSendAndReceive(
          "handlePeerDataOperationRequestResponse",
          {
            stanzaId: f.externalId,
            response: ne.peerDataOperationRequestResponseMessage,
          },
        );
      else if (ne.peerDataOperationRequestMessage)
        o("WAWebWorkerSafeBackendApi").workerSafeSendAndReceive(
          "handlePeerDataOperationRequest",
          {
            stanzaId: f.externalId,
            request: ne.peerDataOperationRequestMessage,
          },
        );
      else if (ne.securityNotificationEnabled)
        H == null || !(H instanceof r("WAWebWid"))
          ? o("WALogger")
              .ERROR(
                p ||
                  (p = babelHelpers.taggedTemplateLiteralLoose([
                    "Handle security notification empty wid error",
                  ])),
              )
              .sendLogs("Handle security notification empty wid error")
          : o("WAWebUserPrefsMeUser").isMePrimary(H)
            ? o("WAWebUserPrefsNotifications").setGlobalSecurityNotifications(
                ne.securityNotificationEnabled.isEnabled,
              )
            : o("WALogger")
                .ERROR(
                  _ ||
                    (_ = babelHelpers.taggedTemplateLiteralLoose([
                      "Handle security notification payload wid error",
                    ])),
                )
                .sendLogs("Handle security notification payload wid error");
      else if (ne.cloudApiThreadControlNotification)
        r("WAWebHandleCloudApiThreadControlNotification")(
          ne.cloudApiThreadControlNotification,
        );
      else if (ne.lidMigrationSyncMessage != null) {
        var ae;
        await o("WAWebLid1X1ThreadAccountMigrations").setLidMigrationMappings(
          (ae = ne.lidMigrationSyncMessage) == null
            ? void 0
            : ae.encodedMappingPayload,
        );
      } else {
        var ie = !1;
        if (
          (ne.deviceSent == null
            ? (ie = !0)
            : ne.deviceSent.phash
              ? (ie = await o("WAWebHandleMsgValidate").validateBclHash(
                  ne.deviceSent.phash,
                  ne.deviceSent.info,
                ))
              : ne.deviceSent.destination &&
                (ie = await o("WAWebHandleMsgValidate").validateMsgDestination(
                  ne.deviceSent.destination,
                  f,
                )),
          !ie)
        )
          throw new (o("WAWebHandleMsgError").DeviceSentMessageError)(
            o("WAWebMsgProcessingApiUtils").getDeviceType(f.author),
            o("WAWebWamEnumDsmError").DSM_ERROR.INVALID_DSM,
          );
        var le = ne.renderableMsgs;
        if (
          (o("WAWebHandleMsgValidate").renderableMessagesValidation({
            renderableMsgs: le,
            msgMeta: C,
            info: f,
            proto: k,
            bizInfo: a,
          }),
          !o(
            "WAWebMessagingGatingUtils",
          ).isWebReportingTokenDelayProcessingEnabled())
        ) {
          var se = o(
            "WAWebOfflineResumeMsgProcessReporterWorkerCompatible",
          ).msgProcessReporter.startMarker(
            o("WAWebOfflineResumeMsgProcessReporterWorkerCompatible")
              .msgProcessReporter.stage.ProcessReportingTokenInfo,
          );
          (await o(
            "WAWebHandleMsgValidate",
          ).validateAndProcessReportingTokenInfo({ renderableMsgs: le }),
            se == null || se());
        }
        var ue = await o("WAWebGalaxyFlowsUtils").maybeAddGalaxyFlowMessageIds(
            le,
          ),
          ce = o(
            "WAWebConditionalRevealPreProcessor",
          ).applyScheduledMsgViewMode(
            ne.storeMsg != null ? [ne.storeMsg].concat(ue) : ue,
            I,
          ),
          de = D({
            renderableMsgs: ce,
            reparsing: S,
            bizInfo: a,
            msgMeta: C,
            paymentInfo: b,
            info: f,
            messageOverwriteOption: z,
          }),
          me = de.hasInactiveMsg,
          pe = de.tasks,
          _e = !1;
        if (
          o("WAWebABProps").getABPropConfigValue(
            "web_send_orphan_in_receipts_enabled",
          )
        ) {
          var fe = ce[0],
            ge = $(fe);
          if (ge != null) {
            var he = await o("WAWebAddonQueryUtils").getParentMsgsByMsgKey([
                ge,
              ]),
              ye = he.get(ge.toString());
            _e =
              ye == null ||
              ye.type === o("WAWebMsgType").MSG_TYPE.CIPHERTEXT ||
              (ye.type === o("WAWebMsgType").MSG_TYPE.UNKNOWN &&
                (ye.futureproofType == null ||
                  !o(
                    "WAWebMessageAssociationConstants",
                  ).orphanIneligibleFutureproofTypes.has(ye.futureproofType)));
          }
        }
        var Ce = ne.senderKey;
        (Ce != null &&
          pe.push(
            o("WAWebSignal").Session.createGroupSignalSession(
              f.author,
              Ce.groupId,
              Ce.key,
            ),
          ),
          r("isStringNullOrEmpty")(f.pushname) ||
            o("WAWebHandlePushnameUpdate").updatePushname(
              f.author,
              f.pushname,
              f.offline != null,
            ));
        var be = w(f.chat);
        await Promise.all(pe);
        var ve = await be;
        return (
          o(
            "WAWebLogMissingGroupParticipantMappings",
          ).logMissingGroupParticipantMappings({
            author: f.author,
            groupId: f.chat,
            localAddressingMode: ve,
            serverAddressingMode: f.addressingMode,
          }),
          o("WAWebLogReceivedMessages").logReceivedMessagesInWAM({
            msgs: ue,
            offline: A(f.offline),
            tsMillis: f.ts * 1e3,
            clientReceivedTsMillis: f.clientReceivedTsMillis,
            msgProcessStartTsMillis: f.msgProcessStartTsMillis,
            serverAddressingMode: f.addressingMode,
            localAddressingMode: ve,
          }),
          { hasInactiveMsg: me, isOrphanAddon: _e }
        );
      }
      return { hasInactiveMsg: !1 };
    }
    function D(e) {
      var t,
        n,
        r,
        a,
        i,
        l = e.bizInfo,
        s = e.info,
        u = e.messageOverwriteOption,
        c = e.msgMeta,
        d = e.paymentInfo,
        m = e.renderableMsgs,
        p = e.reparsing,
        _ = [],
        R = !1,
        E = m[0],
        k =
          I != null && I(E == null ? void 0 : E.type)
            ? L == null
              ? void 0
              : L(E)
            : null;
      return (
        k != null
          ? (o("WALogger").LOG(
              f ||
                (f = babelHelpers.taggedTemplateLiteralLoose([
                  "processMsgs: addon",
                ])),
            ),
            (R = !0),
            _.push(
              M({
                messageOverwriteOption: u,
                msg: k,
                msgInfo: s,
                reparsing: p,
              }),
            ))
          : E != null && E.kind === o("WAWebMsgType").MsgKind.PollVoteEncrypted
            ? (o("WALogger").LOG(
                g ||
                  (g = babelHelpers.taggedTemplateLiteralLoose([
                    "processMsgs: pollVote",
                  ])),
              ),
              _.push(N(E, s, p)))
            : ((t = m[0]) == null ? void 0 : t.type) ===
                o("WAWebMsgType").MSG_TYPE.KEEP_IN_CHAT
              ? (o("WALogger").LOG(
                  h ||
                    (h = babelHelpers.taggedTemplateLiteralLoose([
                      "processMsgs: keepInChat",
                    ])),
                ),
                (R = !0),
                _.push(
                  o("WAWebHandleMsgProcessUtils").processKeepInChatMsg(
                    m[0],
                    s,
                    p,
                  ),
                ))
              : ((n = m[0]) == null ? void 0 : n.type) ===
                    o("WAWebMsgType").MSG_TYPE.PROTOCOL &&
                  ((r = m[0]) == null ? void 0 : r.subtype) === "message_edit"
                ? (o("WALogger").LOG(
                    y ||
                      (y = babelHelpers.taggedTemplateLiteralLoose([
                        "processMsgs: messageEdit",
                      ])),
                  ),
                  _.push(
                    o("WAWebHandleMsgProcessUtils").processEditProtocolMsg(
                      m[0],
                      s,
                      p,
                    ),
                  ))
                : ((a = m[0]) == null ? void 0 : a.type) ===
                      o("WAWebMsgType").MSG_TYPE.PROTOCOL &&
                    ((i = m[0]) == null ? void 0 : i.subtype) ===
                      "ephemeral_sync_response"
                  ? (o("WALogger").LOG(
                      C ||
                        (C = babelHelpers.taggedTemplateLiteralLoose([
                          "processMsgs: ephemeralSyncResponse",
                        ])),
                    ),
                    _.push(
                      o(
                        "WAWebHandleMsgProcessUtils",
                      ).processEphemeralSyncResponseMsg({
                        msg: m[0],
                        msgInfo: s,
                        reparsing: p,
                      }),
                    ))
                  : m.length > 0 &&
                    ((E == null ? void 0 : E.type) ===
                      o("WAWebMsgType").MSG_TYPE.PROTOCOL &&
                    (E == null ? void 0 : E.subtype) === "member_label"
                      ? (o("WALogger").LOG(
                          b ||
                            (b = babelHelpers.taggedTemplateLiteralLoose([
                              "processMsgs: memberLabel",
                            ])),
                        ),
                        (R = !0))
                      : (E == null ? void 0 : E.type) ===
                            o("WAWebMsgType").MSG_TYPE.REACTION ||
                          (E == null ? void 0 : E.type) ===
                            o("WAWebMsgType").MSG_TYPE.REACTION_ENC
                        ? (o("WALogger").LOG(
                            v ||
                              (v = babelHelpers.taggedTemplateLiteralLoose([
                                "processMsgs: reaction",
                              ])),
                          ),
                          (R = !0))
                        : (E == null ? void 0 : E.type) ===
                              o("WAWebMsgType").MSG_TYPE
                                .MESSAGE_HISTORY_BUNDLE ||
                            (E == null ? void 0 : E.type) ===
                              o("WAWebMsgType").MSG_TYPE.MESSAGE_HISTORY_NOTICE
                          ? (R = !0)
                          : o("WALogger").LOG(
                              S ||
                                (S = babelHelpers.taggedTemplateLiteralLoose([
                                  "processMsgs: renderableMsgs",
                                ])),
                            ),
                    _.push(x(m, s, d, l, c, u, p))),
        { tasks: _, hasInactiveMsg: R }
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
    function P(e) {
      return o("WAWebMessageProcessPlaceholder").processPlaceholderMessage(e);
    }
    async function N(e, t, n) {
      var r = t.offline != null && !n,
        a = e,
        i = o("WAWebGetMessageCache")
          .getMessageCache()
          .addMessages([{ msg: a }], !r);
      (n ||
        (o("WAWebBackendEventBus").BackendEventBus.isMainStreamReadyMd &&
          o("WAWebBackendEventBus").BackendEventBus.isOfflineDeliveryEnd)) &&
        (await i);
    }
    async function M(e) {
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
          o("WAWebBackendEventBus").BackendEventBus.isOfflineDeliveryEnd)) &&
        (await s),
        t === o("WAWebHandleMsgTypes.flow").MessageOverwriteOption.RETRY &&
          o("WAWebBackendApi").frontendFireAndForget("removePlaceholder", {
            msg: n,
          }));
    }
    function w(e) {
      return o("WAWebGetGroupAddressingMode").getGroupAddressingMode(e);
    }
    function A(e) {
      var t = parseInt(e, 10);
      return Number.isNaN(t) ? null : t;
    }
    ((l.processDecryptedMessageProto = T),
      (l.processMsgs = D),
      (l.processRenderableMsg = x),
      (l.processPlaceholderMsg = P));
  },
  98,
);
