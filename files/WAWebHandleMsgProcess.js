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
    "WAWebLimitSharingAcp2HideReceivedMsgs",
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
      I,
      T = (e = n("cr:37440")) != null ? e : {},
      D = T.castToAddonMsgData,
      x = T.getParentMsgKey,
      $ = (s = n("cr:37441")) != null ? s : {},
      P = $.isUnifiedInfraEnabledForType;
    function N(e) {
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
    function M(e) {
      return w.apply(this, arguments);
    }
    function w() {
      return (
        (w = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
            T = e.reportingTokenInfo,
            D =
              s.e2eType === o("WAWebBackendJobs.flow").CiphertextType.Msmsg
                ? !1
                : m,
            x = D
              ? o("WACryptoPkcs7").unpadPkcs7(new Uint8Array(l))
              : new Uint8Array(l),
            $ = o("decodeProtobuf").decodeProtobuf(
              o("WAWebProtobufsE2E.pb").MessageSpec,
              x,
            );
          (o(
            "WAWebVerifyProtobufMsgObjectKeys",
          ).verifyProtobufMessageObjectKeys($),
            o("WAWebMessageSecretLocationUtils").verifyTopLevelMessageSecret({
              context: o("WAWebMessageSecretLocationUtils")
                .MessageSecretCheckContext.Receiver,
              proto: $,
              stanzaId: c.externalId,
            }));
          var P = null,
            M =
              (t = $.deviceSentMessage) == null || (t = t.message) == null
                ? void 0
                : t.conditionalRevealMessage,
            w = (a = $.conditionalRevealMessage) != null ? a : M;
          if (w != null) {
            var F,
              W,
              q,
              U,
              V,
              H,
              j,
              K =
                $.conditionalRevealMessage == null && M != null
                  ? (F =
                      (W =
                        (q = $.deviceSentMessage) == null
                          ? void 0
                          : q.destinationJid) != null
                        ? W
                        : (U = c.chat) == null
                          ? void 0
                          : U.toString()) != null
                    ? F
                    : ""
                  : (V = (H = c.chat) == null ? void 0 : H.toString()) != null
                    ? V
                    : "",
              Q = null;
            try {
              Q = o("WAWebWidFactory").createWid(K);
            } catch (e) {
              Q = null;
            }
            if (
              Q != null &&
              (yield o(
                "WAWebLimitSharingAcp2HideReceivedMsgs",
              ).hideScheduledMsgInAcp2RestrictedChat({
                chatWid: Q,
                messageType: c.type,
                t: c.ts,
              }))
            )
              return (
                o("WALogger").LOG(
                  y ||
                    (y = babelHelpers.taggedTemplateLiteralLoose([
                      "[scheduled_msg] hidden in ACP2-restricted chat, skip processing msgId=",
                      "",
                    ])),
                  c.externalId,
                ),
                { hasInactiveMsg: !1 }
              );
            var X =
                c.author != null &&
                !o("WAWebUserPrefsMeUser").isMeAccount(c.author)
                  ? c.author.toString()
                  : null,
              Y = yield o(
                "WAWebConditionalRevealPreProcessor",
              ).maybePreProcessConditionalRevealForReceive({
                conditionalRevealMessage: w,
                msgId: c.externalId,
                rawChatJid: K,
                reportingTokenInfo: T,
                senderJid: X,
                stanzaScheduledMsgMeta:
                  (j = _ == null ? void 0 : _.scheduledMsgMeta) != null
                    ? j
                    : null,
              });
            if (
              (Y.proto != null &&
                Y.protoBytes != null &&
                (($ = Y.proto),
                (x = Y.protoBytes),
                o(
                  "WAWebVerifyProtobufMsgObjectKeys",
                ).verifyProtobufMessageObjectKeys($),
                o(
                  "WAWebMessageSecretLocationUtils",
                ).verifyTopLevelMessageSecret({
                  context: o("WAWebMessageSecretLocationUtils")
                    .MessageSecretCheckContext.Receiver,
                  proto: $,
                  stanzaId: c.externalId,
                })),
              (P = Y.scheduledMsgViewMode),
              Y.isRevealPending)
            ) {
              var J =
                c.author != null &&
                o("WAWebUserPrefsMeUser").isMeAccount(c.author);
              return (
                J ||
                  o(
                    "WAWebLogReceivedMessages",
                  ).logConditionalRevealMessageReceive({
                    chatWid: c.chat,
                    clientReceivedTsMillis: c.clientReceivedTsMillis,
                    msgProcessStartTsMillis: c.msgProcessStartTsMillis,
                    offline: z(c.offline),
                    tsMillis: c.ts * 1e3,
                  }),
                o("WALogger").LOG(
                  C ||
                    (C = babelHelpers.taggedTemplateLiteralLoose([
                      "[scheduled_msg] reveal-pending, skip processing msgId=",
                      "",
                    ])),
                  c.externalId,
                ),
                { hasInactiveMsg: !1 }
              );
            }
          }
          var Z = o("WAWebMsgProcessingApiUtils").getFrom(c),
            ee =
              (s.retryCount > 0 &&
                o("WAWebMsgProcessingApiUtils").isRevokeInfo(c)) ||
              h,
            te = ee
              ? o("WAWebHandleMsgTypes.flow").MessageOverwriteOption.RETRY
              : o("WAWebHandleMsgTypes.flow").MessageOverwriteOption
                  .NO_OVERWRITE,
            ne = null;
          if (h) {
            ((ne = r("justknobx")._("5752")
              ? yield o("WAWebQuarantineActionUtils").getQuarantineAction($, Z)
              : o("WAWebQuarantineActionUtils").QuarantineAction.NoQuarantine),
              o("WALogger")
                .LOG(
                  b ||
                    (b = babelHelpers.taggedTemplateLiteralLoose([
                      "[processDecryptedMessageProto] reparsing msgId=",
                      "",
                    ])),
                  c.externalId,
                )
                .tags("messaging"));
            var re =
              ne ===
              o("WAWebQuarantineActionUtils").QuarantineAction.NoQuarantine
                ? yield o("WAWebMsgProcessingApiUtils").parseMessage({
                    info: c,
                    ciphertextType: s.e2eType,
                    msgProtobuf: $,
                    paymentInfo: f,
                    bizInfo: i,
                    hsmInfo: u,
                    hidePlaceholder: s.hideFail,
                    processDecryptedProtoParams: e,
                    msgBotInfo: p,
                    meta: _,
                    reportingTokenInfo: T,
                    isMessageRetry: s.retryCount > 0,
                    isOffline: c.offline != null,
                    protobufBytes: x,
                  })
                : N({
                    info: c,
                    plaintext: x,
                    quarantineExtractedText: o(
                      "WAWebQuarantineActionUtils",
                    ).maybeGetQuarantineText(ne),
                  });
            if (re.renderableMsgs == null)
              o("WALogger").ERROR(
                v ||
                  (v = babelHelpers.taggedTemplateLiteralLoose([
                    "parsed render able msgs not reparsed as expected",
                  ])),
              );
            else {
              var oe = o(
                "WAWebConditionalRevealPreProcessor",
              ).applyScheduledMsgViewMode(re.renderableMsgs, P);
              (o("WAWebHandleMsgValidate").renderableMessagesValidation({
                renderableMsgs: oe,
                msgMeta: _,
                info: c,
                proto: $,
                bizInfo: i,
              }),
                o(
                  "WAWebMessagingGatingUtils",
                ).isWebReportingTokenDelayProcessingEnabled() ||
                  (yield o(
                    "WAWebHandleMsgValidate",
                  ).validateAndProcessReportingTokenInfo({
                    renderableMsgs: oe,
                  })));
              var ae = A({
                  renderableMsgs: oe,
                  reparsing: !0,
                  bizInfo: i,
                  msgMeta: _,
                  paymentInfo: f,
                  info: c,
                  messageOverwriteOption: te,
                }),
                ie = ae.hasInactiveMsg,
                le = ae.tasks;
              return (
                yield (I || (I = n("Promise"))).all(le),
                o("WALogger")
                  .LOG(
                    S ||
                      (S = babelHelpers.taggedTemplateLiteralLoose([
                        "[processDecryptedMessageProto] reparsed msgId=",
                        "",
                      ])),
                    c.externalId,
                  )
                  .tags("messaging"),
                { hasInactiveMsg: ie }
              );
            }
          }
          var se = yield o("WAWebHandleMsgProcessUtils").preProcessMsg(c, $);
          if (
            ((se == null ? void 0 : se.senderOrRecipientAccountTypeHosted) ===
              !0 && (c.senderOrRecipientAccountTypeHosted = !0),
            (se == null ? void 0 : se.hostedBizEncMismatch) === !0 &&
              (c.hostedBizEncStateMismatch = !0),
            c.type ===
              o("WAWebHandleMsgTypes.flow").MESSAGE_TYPE.PEER_BROADCAST &&
              s.retryCount > 0)
          ) {
            var ue = yield o("WAWebDBMsgUtils").getMsgByMsgKey(
              o("WAWebMsgProcessingApiUtils").messageInfoToKey(c),
            );
            (ue == null ? void 0 : ue.bclParticipants) != null
              ? (c.bclParticipants = ue.bclParticipants)
              : (ue == null ? void 0 : ue.broadcastParticipants) != null &&
                (c.bclParticipants = ue.broadcastParticipants.map(function (e) {
                  return { wid: o("WAWebWidFactory").asUserWidOrThrow(e) };
                }));
          }
          var ce = o(
              "WAWebOfflineResumeMsgProcessReporterWorkerCompatible",
            ).msgProcessReporter.startMarker(
              o("WAWebOfflineResumeMsgProcessReporterWorkerCompatible")
                .msgProcessReporter.stage.Parsing,
            ),
            de =
              ne != null
                ? ne
                : yield o("WAWebQuarantineActionUtils").getQuarantineAction(
                    $,
                    Z,
                  ),
            me =
              de ===
              o("WAWebQuarantineActionUtils").QuarantineAction.NoQuarantine
                ? yield o("WAWebMsgProcessingApiUtils").parseMessage({
                    info: c,
                    ciphertextType: s.e2eType,
                    msgProtobuf: $,
                    paymentInfo: f,
                    bizInfo: i,
                    hsmInfo: u,
                    hidePlaceholder: s.hideFail,
                    processDecryptedProtoParams: e,
                    msgBotInfo: p,
                    meta: _,
                    reportingTokenInfo: T,
                    isMessageRetry: s.retryCount > 0,
                    isOffline: c.offline != null,
                    protobufBytes: x,
                  })
                : N({
                    info: c,
                    plaintext: x,
                    quarantineExtractedText: o(
                      "WAWebQuarantineActionUtils",
                    ).maybeGetQuarantineText(de),
                  });
          if (
            o("WAWebCurrentUser").isEmployee() &&
            o("WAWebABProps").getABPropConfigValue(
              "wa_web_debug_color_code_retry_messages",
            )
          ) {
            var pe;
            (pe = me.renderableMsgs) == null ||
              pe.forEach(function (e) {
                s.retryCount > 0 && (e.backgroundColor = 16711680);
              });
          }
          ce == null || ce();
          var _e = null;
          if (
            (me.history
              ? (_e = o("WAWebParsedProtocolMsgType")
                  .PARSED_PROTOCOL_MESSAGE_TYPE.HISTORY)
              : me.appStateSyncKeyShare
                ? (_e = o("WAWebParsedProtocolMsgType")
                    .PARSED_PROTOCOL_MESSAGE_TYPE.APP_STATE_SYNC_KEY_SHARE)
                : me.appStateSyncKeyRequest
                  ? (_e = o("WAWebParsedProtocolMsgType")
                      .PARSED_PROTOCOL_MESSAGE_TYPE.APP_STATE_SYNC_KEY_REQUEST)
                  : me.peerDataOperationRequestResponseMessage
                    ? (_e = o("WAWebParsedProtocolMsgType")
                        .PARSED_PROTOCOL_MESSAGE_TYPE
                        .PEER_DATA_OPERATION_REQUEST_RESPONSE_MESSAGE)
                    : me.peerDataOperationRequestMessage &&
                      (_e = o("WAWebParsedProtocolMsgType")
                        .PARSED_PROTOCOL_MESSAGE_TYPE
                        .PEER_DATA_OPERATION_REQUEST_MESSAGE),
            o("WAWebRuntimeEnvironmentUtils").isWorker() && _e)
          )
            yield o("WAWebApiDeferredMessagesStorage").updateDeferredMessages([
              {
                id: c.externalId,
                type: _e,
                plaintext: x,
                info: c,
                paymentInfo: f,
                bizInfo: i,
              },
            ]);
          else if (me.history)
            o("WAWebWorkerSafeBackendApi").workerSafeSendAndReceive(
              "handleHistorySyncNotification",
              {
                historySyncMetaData: me.history,
                from: Z,
                externalId: c.externalId,
              },
            );
          else if (me.appStateSyncKeyShare)
            yield o("WAWebWorkerSafeBackendApi").workerSafeSendAndReceive(
              "handleAppStateSyncKeyShare",
              { keyShare: me.appStateSyncKeyShare, from: Z },
            );
          else if (me.appStateSyncKeyRequest)
            o("WAWebWorkerSafeBackendApi").workerSafeSendAndReceive(
              "handleAppStateSyncKeyRequest",
              { keyRequest: me.appStateSyncKeyRequest, from: Z },
            );
          else if (me.peerDataOperationRequestResponseMessage)
            o("WAWebWorkerSafeBackendApi").workerSafeSendAndReceive(
              "handlePeerDataOperationRequestResponse",
              {
                stanzaId: c.externalId,
                response: me.peerDataOperationRequestResponseMessage,
              },
            );
          else if (me.peerDataOperationRequestMessage)
            o("WAWebWorkerSafeBackendApi").workerSafeSendAndReceive(
              "handlePeerDataOperationRequest",
              {
                stanzaId: c.externalId,
                request: me.peerDataOperationRequestMessage,
              },
            );
          else if (me.securityNotificationEnabled)
            Z == null || !(Z instanceof r("WAWebWid"))
              ? o("WALogger")
                  .ERROR(
                    R ||
                      (R = babelHelpers.taggedTemplateLiteralLoose([
                        "Handle security notification empty wid error",
                      ])),
                  )
                  .sendLogs("Handle security notification empty wid error")
              : o("WAWebUserPrefsMeUser").isMePrimary(Z)
                ? o(
                    "WAWebUserPrefsNotifications",
                  ).setGlobalSecurityNotifications(
                    me.securityNotificationEnabled.isEnabled,
                  )
                : o("WALogger")
                    .ERROR(
                      L ||
                        (L = babelHelpers.taggedTemplateLiteralLoose([
                          "Handle security notification payload wid error",
                        ])),
                    )
                    .sendLogs("Handle security notification payload wid error");
          else if (me.cloudApiThreadControlNotification)
            r("WAWebHandleCloudApiThreadControlNotification")(
              me.cloudApiThreadControlNotification,
            );
          else if (me.lidMigrationSyncMessage != null)
            o("WALogger")
              .ERROR(
                E ||
                  (E = babelHelpers.taggedTemplateLiteralLoose([
                    "[LID] received peer migration stanza but client-to-LID migration is no longer supported",
                  ])),
              )
              .sendLogs(
                o("WAWebUserPrefsMeUser").isMeAccount(Z)
                  ? "lid-migration-peer-stanza-received"
                  : "lid-migration-non-peer-stanza-received",
              );
          else {
            var fe = !1;
            if (
              (me.deviceSent == null
                ? (fe = !0)
                : me.deviceSent.phash
                  ? (fe = yield o("WAWebHandleMsgValidate").validateBclHash(
                      me.deviceSent.phash,
                      me.deviceSent.info,
                    ))
                  : me.deviceSent.destination &&
                    (fe = yield o(
                      "WAWebHandleMsgValidate",
                    ).validateMsgDestination(me.deviceSent.destination, c)),
              !fe)
            )
              throw new (o("WAWebHandleMsgError").DeviceSentMessageError)(
                o("WAWebMsgProcessingApiUtils").getDeviceType(c.author),
                o("WAWebWamEnumDsmError").DSM_ERROR.INVALID_DSM,
              );
            var ge = me.renderableMsgs;
            if (
              (o("WAWebHandleMsgValidate").renderableMessagesValidation({
                renderableMsgs: ge,
                msgMeta: _,
                info: c,
                proto: $,
                bizInfo: i,
              }),
              !o(
                "WAWebMessagingGatingUtils",
              ).isWebReportingTokenDelayProcessingEnabled())
            ) {
              var he = o(
                "WAWebOfflineResumeMsgProcessReporterWorkerCompatible",
              ).msgProcessReporter.startMarker(
                o("WAWebOfflineResumeMsgProcessReporterWorkerCompatible")
                  .msgProcessReporter.stage.ProcessReportingTokenInfo,
              );
              (yield o(
                "WAWebHandleMsgValidate",
              ).validateAndProcessReportingTokenInfo({ renderableMsgs: ge }),
                he == null || he());
            }
            var ye = yield o(
                "WAWebGalaxyFlowsUtils",
              ).maybeAddGalaxyFlowMessageIds(ge),
              Ce = yield o(
                "WAWebLimitSharingAcp2HideReceivedMsgs",
              ).hideMsgsReceivedInAcp2RestrictedChat({
                messageType: c.type,
                msgs: o(
                  "WAWebConditionalRevealPreProcessor",
                ).applyScheduledMsgViewMode(
                  me.storeMsg != null ? [me.storeMsg].concat(ye) : ye,
                  P,
                ),
                proto: $,
              }),
              be = A({
                renderableMsgs: Ce,
                reparsing: h,
                bizInfo: i,
                msgMeta: _,
                paymentInfo: f,
                info: c,
                messageOverwriteOption: te,
              }),
              ve = be.hasInactiveMsg,
              Se = be.tasks,
              Re = !1;
            if (
              o("WAWebABProps").getABPropConfigValue(
                "web_send_orphan_in_receipts_enabled",
              )
            ) {
              var Le = Ce[0],
                Ee = O(Le);
              if (Ee != null) {
                var ke = yield o("WAWebAddonQueryUtils").getParentMsgsByMsgKey([
                    Ee,
                  ]),
                  Ie = ke.get(Ee.toString());
                Re =
                  Ie == null ||
                  Ie.type === o("WAWebMsgType").MSG_TYPE.CIPHERTEXT ||
                  (Ie.type === o("WAWebMsgType").MSG_TYPE.UNKNOWN &&
                    (Ie.futureproofType == null ||
                      !o(
                        "WAWebMessageAssociationConstants",
                      ).orphanIneligibleFutureproofTypes.has(
                        Ie.futureproofType,
                      )));
              }
            }
            var Te = me.senderKey;
            Te != null &&
              Se.push(
                o("WAWebSignal").Session.createGroupSignalSession(
                  c.author,
                  Te.groupId,
                  Te.key,
                ),
              );
            var De = me.rootSecretDistribute;
            if (De != null)
              if (o("WAWebUserPrefsMeUser").isMeAccount(c.author)) {
                var xe = De.chatJid,
                  $e = De.rootSecret,
                  Pe = De.stanzaId;
                Se.push(
                  o("WAWebWasaRootSecretWriter").applyWasaRootSecretForId(
                    xe,
                    Pe,
                    $e,
                  ),
                );
              } else
                o("WALogger").WARN(
                  k ||
                    (k = babelHelpers.taggedTemplateLiteralLoose([
                      "[wasa] dropping rootSecretDistribute from non-self author ",
                      "",
                    ])),
                  c.author.toString(),
                );
            B(c, _);
            var Ne = G(c.chat);
            yield (I || (I = n("Promise"))).all(Se);
            var Me = yield Ne;
            return (
              o(
                "WAWebLogMissingGroupParticipantMappings",
              ).logMissingGroupParticipantMappings({
                author: c.author,
                groupId: c.chat,
                localAddressingMode: Me,
                serverAddressingMode: c.addressingMode,
              }),
              o("WAWebLogReceivedMessages").logReceivedMessagesInWAM({
                msgs: ye,
                offline: z(c.offline),
                tsMillis: c.ts * 1e3,
                clientReceivedTsMillis: c.clientReceivedTsMillis,
                msgProcessStartTsMillis: c.msgProcessStartTsMillis,
                serverAddressingMode: c.addressingMode,
                isPq: s.isPq,
                localAddressingMode: Me,
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
              { hasInactiveMsg: ve, isOrphanAddon: Re }
            );
          }
          return { hasInactiveMsg: !1 };
        })),
        w.apply(this, arguments)
      );
    }
    function A(e) {
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
          P != null && P(E == null ? void 0 : E.type)
            ? D == null
              ? void 0
              : D(E)
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
              V({
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
              R.push(q(E, s, S)))
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
                    R.push(F(v, s, b, l, C, y, S))),
        { tasks: R, hasInactiveMsg: L }
      );
    }
    function F(e, t, n, r, a, i, l) {
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
    function O(e) {
      if (e == null) return null;
      if ((D == null ? void 0 : D(e)) != null) {
        var t;
        return (t = x == null ? void 0 : x(e)) != null ? t : null;
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
    function B(e, t) {
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
    function W(e) {
      return o("WAWebMessageProcessPlaceholder").processPlaceholderMessage(e);
    }
    function q(e, t, n) {
      return U.apply(this, arguments);
    }
    function U() {
      return (
        (U = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
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
        U.apply(this, arguments)
      );
    }
    function V(e) {
      return H.apply(this, arguments);
    }
    function H() {
      return (
        (H = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
        H.apply(this, arguments)
      );
    }
    function G(e) {
      return o("WAWebGetGroupAddressingMode").getGroupAddressingMode(e);
    }
    function z(e) {
      var t = parseInt(e, 10);
      return Number.isNaN(t) ? null : t;
    }
    ((l.processDecryptedMessageProto = M),
      (l.processMsgs = A),
      (l.processRenderableMsg = F),
      (l.updateIncomingMessagePushname = B),
      (l.processPlaceholderMsg = W));
  },
  98,
);
