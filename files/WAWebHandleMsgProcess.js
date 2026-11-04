__d(
  "WAWebHandleMsgProcess",
  [
    "Promise",
    "WACryptoPkcs7",
    "WALogger",
    "WAWebABProps",
    "WAWebAddonGatingUtils",
    "WAWebAddonQueryUtils",
    "WAWebBackendApi",
    "WAWebBackendEventBus",
    "WAWebBackendJobs.flow",
    "WAWebCoexV2PushnameUpdate",
    "WAWebConditionalRevealPreProcessor",
    "WAWebCurrentUser",
    "WAWebDBMsgUtils",
    "WAWebDeferrableProtocolMsg",
    "WAWebGalaxyFlowsUtils",
    "WAWebGetGroupAddressingMode",
    "WAWebGetMessageCache",
    "WAWebGetPlatformFromStanzaId",
    "WAWebHandleCloudApiThreadControlNotification",
    "WAWebHandleMsgError",
    "WAWebHandleMsgProcessUtils",
    "WAWebHandleMsgTypes",
    "WAWebHandleMsgValidate",
    "WAWebHandlePushnameUpdate",
    "WAWebLimitSharingAcp2HideReceivedMsgs",
    "WAWebLogMissingGroupParticipantMappings",
    "WAWebLogReceivedMessages",
    "WAWebMessageAssociationConstants",
    "WAWebMessagePluginSendsInactiveReceipt",
    "WAWebMessageProcessPlaceholder",
    "WAWebMessageProcessRenderable",
    "WAWebMessageSecretLocationUtils",
    "WAWebMessagingGatingUtils",
    "WAWebMsgProcessingApiUtils",
    "WAWebMsgType",
    "WAWebOfflineResumeMsgProcessReporterWorkerCompatible",
    "WAWebProtobufsE2E.pb",
    "WAWebQuarantineActionUtils",
    "WAWebSessionScopeWamUtils",
    "WAWebSignal",
    "WAWebUserPrefsMeUser",
    "WAWebUserPrefsNotifications",
    "WAWebVerifyProtobufMsgObjectKeys",
    "WAWebWamEnumDsmError",
    "WAWebWamEnumE2eFailureReason",
    "WAWebWasaRootSecretWriter",
    "WAWebWid",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
    "cr:10197",
    "cr:37440",
    "cr:402",
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
      E = (e = n("cr:37440")) != null ? e : {},
      k = E.castToAddonMsgData,
      I = E.getParentMsgKey;
    function T(e) {
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
            E = e.paymentInfo,
            k = e.reparsing,
            I = k === void 0 ? !1 : k,
            D = e.reportingTokenInfo,
            x =
              s.e2eType === o("WAWebBackendJobs.flow").CiphertextType.Msmsg
                ? !1
                : m,
            P = x
              ? o("WACryptoPkcs7").unpadPkcs7(new Uint8Array(l))
              : new Uint8Array(l),
            w = o("decodeProtobuf").decodeProtobuf(
              o("WAWebProtobufsE2E.pb").MessageSpec,
              P,
            );
          if (
            (o(
              "WAWebVerifyProtobufMsgObjectKeys",
            ).verifyProtobufMessageObjectKeys(w),
            o("WAWebMessageSecretLocationUtils").verifyTopLevelMessageSecret({
              context: o("WAWebMessageSecretLocationUtils")
                .MessageSecretCheckContext.Receiver,
              proto: w,
              stanzaId: c.externalId,
            }),
            !I &&
              (n("cr:402") == null
                ? void 0
                : n("cr:402").shouldDropAeaWassMessage(
                    c,
                    w.messageContextInfo,
                  )) === !0)
          )
            throw new (o("WAWebHandleMsgError").MessageValidationError)(
              "CoEx relay message without a valid attestation",
              o("WAWebWamEnumE2eFailureReason").E2E_FAILURE_REASON
                .WASS_INVALID_ATTESTATION,
            );
          var A = null,
            F =
              (t = w.deviceSentMessage) == null || (t = t.message) == null
                ? void 0
                : t.conditionalRevealMessage,
            O = (a = w.conditionalRevealMessage) != null ? a : F;
          if (O != null) {
            var B, U, V, H, G, z, j;
            o(
              "WAWebConditionalRevealPreProcessor",
            ).assertScheduledMsgStanzaType(_ == null ? void 0 : _.type);
            var K =
                w.conditionalRevealMessage == null && F != null
                  ? (B =
                      (U =
                        (V = w.deviceSentMessage) == null
                          ? void 0
                          : V.destinationJid) != null
                        ? U
                        : (H = c.chat) == null
                          ? void 0
                          : H.toString()) != null
                    ? B
                    : ""
                  : (G = (z = c.chat) == null ? void 0 : z.toString()) != null
                    ? G
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
                  f ||
                    (f = babelHelpers.taggedTemplateLiteralLoose([
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
                conditionalRevealMessage: O,
                msgId: c.externalId,
                outerMessageContextInfo: w.messageContextInfo,
                rawChatJid: K,
                reportingTokenInfo: D,
                senderJid: X,
                stanzaScheduledMsgMeta:
                  (j = _ == null ? void 0 : _.scheduledMsgMeta) != null
                    ? j
                    : null,
              });
            if (
              (Y.proto != null &&
                Y.protoBytes != null &&
                ((w = Y.proto),
                (P = Y.protoBytes),
                o(
                  "WAWebVerifyProtobufMsgObjectKeys",
                ).verifyProtobufMessageObjectKeys(w),
                o(
                  "WAWebMessageSecretLocationUtils",
                ).verifyTopLevelMessageSecret({
                  context: o("WAWebMessageSecretLocationUtils")
                    .MessageSecretCheckContext.Receiver,
                  proto: w,
                  stanzaId: c.externalId,
                })),
              (A = Y.scheduledMsgViewMode),
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
                    offline: q(c.offline),
                    tsMillis: c.ts * 1e3,
                  }),
                o("WALogger").LOG(
                  g ||
                    (g = babelHelpers.taggedTemplateLiteralLoose([
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
              I,
            te = ee
              ? o("WAWebHandleMsgTypes").MessageOverwriteOption.RETRY
              : o("WAWebHandleMsgTypes").MessageOverwriteOption.NO_OVERWRITE,
            ne = null;
          if (I) {
            ((ne = r("justknobx")._("5752")
              ? yield o("WAWebQuarantineActionUtils").getQuarantineAction(w, Z)
              : o("WAWebQuarantineActionUtils").QuarantineAction.NoQuarantine),
              o("WALogger")
                .LOG(
                  h ||
                    (h = babelHelpers.taggedTemplateLiteralLoose([
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
                    msgProtobuf: w,
                    paymentInfo: E,
                    bizInfo: i,
                    hsmInfo: u,
                    hidePlaceholder: s.hideFail,
                    processDecryptedProtoParams: e,
                    msgBotInfo: p,
                    meta: _,
                    reportingTokenInfo: D,
                    isMessageRetry: s.retryCount > 0,
                    isOffline: c.offline != null,
                    protobufBytes: P,
                  })
                : T({
                    info: c,
                    plaintext: P,
                    quarantineExtractedText: o(
                      "WAWebQuarantineActionUtils",
                    ).maybeGetQuarantineText(ne),
                  });
            if (re.renderableMsgs == null)
              o("WALogger").ERROR(
                y ||
                  (y = babelHelpers.taggedTemplateLiteralLoose([
                    "parsed render able msgs not reparsed as expected",
                  ])),
              );
            else {
              var oe = o(
                "WAWebConditionalRevealPreProcessor",
              ).applyScheduledMsgViewMode(re.renderableMsgs, A);
              (o("WAWebHandleMsgValidate").renderableMessagesValidation({
                renderableMsgs: oe,
                msgMeta: _,
                info: c,
                proto: w,
                bizInfo: i,
              }),
                o("WAWebHandleMsgValidate").validateAddPixKeyOfferSender({
                  info: c,
                  proto: w,
                  renderableMsgs: oe,
                }),
                o(
                  "WAWebMessagingGatingUtils",
                ).isWebReportingTokenDelayProcessingEnabled() ||
                  (yield o(
                    "WAWebHandleMsgValidate",
                  ).validateAndProcessReportingTokenInfo({
                    renderableMsgs: oe,
                    reparsing: !0,
                  })));
              var ae = $({
                  renderableMsgs: oe,
                  reparsing: !0,
                  bizInfo: i,
                  msgMeta: _,
                  paymentInfo: E,
                  info: c,
                  messageOverwriteOption: te,
                }),
                ie = ae.hasInactiveMsg,
                le = ae.tasks;
              return (
                yield (L || (L = n("Promise"))).all(le),
                o("WALogger")
                  .LOG(
                    C ||
                      (C = babelHelpers.taggedTemplateLiteralLoose([
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
          var se = yield o("WAWebHandleMsgProcessUtils").preProcessMsg(c, w);
          if (
            ((se == null ? void 0 : se.senderOrRecipientAccountTypeHosted) ===
              !0 && (c.senderOrRecipientAccountTypeHosted = !0),
            (se == null ? void 0 : se.hostedBizEncMismatch) === !0 &&
              (c.hostedBizEncStateMismatch = !0),
            c.type === o("WAWebHandleMsgTypes").MESSAGE_TYPE.PEER_BROADCAST &&
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
                    w,
                    Z,
                  ),
            me =
              de ===
              o("WAWebQuarantineActionUtils").QuarantineAction.NoQuarantine
                ? yield o("WAWebMsgProcessingApiUtils").parseMessage({
                    info: c,
                    ciphertextType: s.e2eType,
                    msgProtobuf: w,
                    paymentInfo: E,
                    bizInfo: i,
                    hsmInfo: u,
                    hidePlaceholder: s.hideFail,
                    processDecryptedProtoParams: e,
                    msgBotInfo: p,
                    meta: _,
                    reportingTokenInfo: D,
                    isMessageRetry: s.retryCount > 0,
                    isOffline: c.offline != null,
                    protobufBytes: P,
                  })
                : T({
                    info: c,
                    plaintext: P,
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
          if (
            (ce == null || ce(),
            o("WAWebDeferrableProtocolMsg").isDeferrableProtocolMsg(me))
          ) {
            var _e = o(
              "WAWebDeferrableProtocolMsg",
            ).handleDeferrableProtocolMsg({
              bizInfo: i,
              from: Z,
              info: c,
              parsed: me,
              paymentInfo: E,
              plaintext: P,
            });
            return (_e != null && (yield _e), { hasInactiveMsg: !1 });
          }
          if (me.securityNotificationEnabled)
            Z == null || !(Z instanceof r("WAWebWid"))
              ? o("WALogger")
                  .ERROR(
                    b ||
                      (b = babelHelpers.taggedTemplateLiteralLoose([
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
                      v ||
                        (v = babelHelpers.taggedTemplateLiteralLoose([
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
                S ||
                  (S = babelHelpers.taggedTemplateLiteralLoose([
                    "[LID] received peer migration stanza but client-to-LID migration is no longer supported, sender: ",
                    "",
                  ])),
                o("WAWebGetPlatformFromStanzaId").getPlatformFromStanzaId(
                  c.externalId,
                ),
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
                : me.deviceSent.phash != null && me.deviceSent.phash !== ""
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
                proto: w,
                bizInfo: i,
              }),
              o("WAWebHandleMsgValidate").logAddPixKeyOfferReceipt({
                info: c,
                isFirstReceipt: !I,
                isQuarantined:
                  de !==
                  o("WAWebQuarantineActionUtils").QuarantineAction.NoQuarantine,
                proto: w,
                renderableMsgs: ge,
              }),
              o("WAWebHandleMsgValidate").validateAddPixKeyOfferSender({
                info: c,
                proto: w,
                renderableMsgs: ge,
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
                  A,
                ),
                proto: w,
              }),
              be = $({
                renderableMsgs: Ce,
                reparsing: I,
                bizInfo: i,
                msgMeta: _,
                paymentInfo: E,
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
                Ee = N(Le);
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
                  R ||
                    (R = babelHelpers.taggedTemplateLiteralLoose([
                      "[wasa] dropping rootSecretDistribute from non-self author ",
                      "",
                    ])),
                  c.author.toString(),
                );
            M(c, _);
            var Ne = W(c.chat);
            yield (L || (L = n("Promise"))).all(Se);
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
                offline: q(c.offline),
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
        f = e.info,
        g = e.messageOverwriteOption,
        h = e.msgMeta,
        y = e.paymentInfo,
        C = e.renderableMsgs,
        b = e.reparsing,
        v = [],
        S = !1,
        R = C[0],
        L = o("WAWebAddonGatingUtils").isUnifiedInfraEnabledForType(
          R == null ? void 0 : R.type,
        )
          ? k == null
            ? void 0
            : k(R)
          : null;
      return (
        L != null
          ? (o("WALogger").LOG(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "processMsgs: addon",
                ])),
            ),
            (S = !0),
            v.push(
              O({
                messageOverwriteOption: g,
                msg: L,
                msgInfo: f,
                reparsing: b,
              }),
            ))
          : R != null && R.kind === o("WAWebMsgType").MsgKind.PollVoteEncrypted
            ? (o("WALogger").LOG(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "processMsgs: pollVote",
                  ])),
              ),
              v.push(A(R, f, b)))
            : ((t = C[0]) == null ? void 0 : t.type) ===
                o("WAWebMsgType").MSG_TYPE.KEEP_IN_CHAT
              ? (o("WALogger").LOG(
                  c ||
                    (c = babelHelpers.taggedTemplateLiteralLoose([
                      "processMsgs: keepInChat",
                    ])),
                ),
                (S = !0),
                v.push(
                  o("WAWebHandleMsgProcessUtils").processKeepInChatMsg({
                    msg: C[0],
                    msgInfo: f,
                    msgMeta: h,
                    reparsing: b,
                  }),
                ))
              : ((n = C[0]) == null ? void 0 : n.type) ===
                    o("WAWebMsgType").MSG_TYPE.PROTOCOL &&
                  ((r = C[0]) == null ? void 0 : r.subtype) === "message_edit"
                ? (o("WALogger").LOG(
                    d ||
                      (d = babelHelpers.taggedTemplateLiteralLoose([
                        "processMsgs: messageEdit",
                      ])),
                  ),
                  v.push(
                    o("WAWebHandleMsgProcessUtils").processEditProtocolMsg({
                      msg: C[0],
                      msgInfo: f,
                      msgMeta: h,
                      reparsing: b,
                    }),
                  ))
                : ((a = C[0]) == null ? void 0 : a.type) ===
                      o("WAWebMsgType").MSG_TYPE.PROTOCOL &&
                    ((i = C[0]) == null ? void 0 : i.subtype) ===
                      "ephemeral_sync_response"
                  ? (o("WALogger").LOG(
                      m ||
                        (m = babelHelpers.taggedTemplateLiteralLoose([
                          "processMsgs: ephemeralSyncResponse",
                        ])),
                    ),
                    v.push(
                      o(
                        "WAWebHandleMsgProcessUtils",
                      ).processEphemeralSyncResponseMsg({
                        msg: C[0],
                        msgInfo: f,
                        msgMeta: h,
                        reparsing: b,
                      }),
                    ))
                  : C.length > 0 &&
                    (R != null &&
                    o(
                      "WAWebMessagePluginSendsInactiveReceipt",
                    ).sendsInactiveReceipt(R.type, R.subtype)
                      ? (o("WALogger").LOG(
                          p ||
                            (p = babelHelpers.taggedTemplateLiteralLoose([
                              "processMsgs: inactive ",
                              "",
                            ])),
                          R.type,
                        ),
                        (S = !0))
                      : o("WALogger").LOG(
                          _ ||
                            (_ = babelHelpers.taggedTemplateLiteralLoose([
                              "processMsgs: renderableMsgs",
                            ])),
                        ),
                    v.push(P(C, f, y, l, h, g, b))),
        { tasks: v, hasInactiveMsg: S }
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
      if ((k == null ? void 0 : k(e)) != null) {
        var t;
        return (t = I == null ? void 0 : I(e)) != null ? t : null;
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
    function M(e, t) {
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
    function w(e) {
      return o("WAWebMessageProcessPlaceholder").processPlaceholderMessage(e);
    }
    function A(e, t, n) {
      return F.apply(this, arguments);
    }
    function F() {
      return (
        (F = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
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
        F.apply(this, arguments)
      );
    }
    function O(e) {
      return B.apply(this, arguments);
    }
    function B() {
      return (
        (B = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
            t === o("WAWebHandleMsgTypes").MessageOverwriteOption.RETRY &&
              o("WAWebBackendApi").frontendFireAndForget("removePlaceholder", {
                msg: n,
              }));
        })),
        B.apply(this, arguments)
      );
    }
    function W(e) {
      return o("WAWebGetGroupAddressingMode").getGroupAddressingMode(e);
    }
    function q(e) {
      var t = parseInt(String(e), 10);
      return Number.isNaN(t) ? null : t;
    }
    ((l.processDecryptedMessageProto = D),
      (l.processMsgs = $),
      (l.processRenderableMsg = P),
      (l.updateIncomingMessagePushname = M),
      (l.processPlaceholderMsg = w));
  },
  98,
);
