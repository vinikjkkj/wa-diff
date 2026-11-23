__d(
  "WAWebHandleMsgProcess",
  [
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
    "WAWebMessageQueueImpl",
    "WAWebMessageSecretLocationUtils",
    "WAWebMsgProcessingApiUtils",
    "WAWebMsgType",
    "WAWebOfflineAttrUtils",
    "WAWebOfflineResumeMsgProcessReporterWorkerCompatible",
    "WAWebProtobufsE2E.pb",
    "WAWebQuarantineActionUtils",
    "WAWebScheduledMsgReceivePreProcess",
    "WAWebSessionScopeWamUtils",
    "WAWebSignal",
    "WAWebUserPrefsNotifications",
    "WAWebUserUtils",
    "WAWebVerifyProtobufMsgObjectKeys",
    "WAWebWamEnumDsmError",
    "WAWebWamEnumE2eFailureReason",
    "WAWebWasaRootSecretWriter",
    "WAWebWid",
    "WAWebWidFactory",
    "cr:10197",
    "cr:37440",
    "cr:402",
    "decodeProtobuf",
    "getErrorSafe",
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
      R = (e = n("cr:37440")) != null ? e : {},
      L = R.castToAddonMsgData,
      E = R.getParentMsgKey;
    function k(e) {
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
    async function I(e) {
      if (e.reparsing === !0) return q(e);
      var t = await U(e);
      if (t == null) return { hasInactiveMsg: !1 };
      var n = await T(e, t);
      if (n == null) return { hasInactiveMsg: !1 };
      var r = await F(n),
        o = r.receipt;
      return o;
    }
    function T(e, t) {
      return D(e, t, { quarantineAction: null, preProcessingDone: !1 });
    }
    async function D(e, t, n) {
      var a = n.preProcessingDone,
        i = n.quarantineAction,
        l = e.bizInfo,
        d = e.e2eInfo,
        m = e.info,
        p = e.msgMeta,
        _ = e.paymentInfo,
        f = e.reparsing === !0,
        g = o("WAWebMsgProcessingApiUtils").getFrom(m),
        h = H(m, d, f);
      (await x(m, t.proto, a),
        m.type === o("WAWebHandleMsgTypes").MESSAGE_TYPE.PEER_BROADCAST &&
          d.retryCount > 0 &&
          (await G(m)));
      var y = await $(e, t, i),
        C = y.parsed,
        b = y.quarantineAction;
      if (o("WAWebDeferrableProtocolMsg").isDeferrableProtocolMsg(C)) {
        var v = o("WAWebDeferrableProtocolMsg").handleDeferrableProtocolMsg({
          bizInfo: l,
          from: g,
          info: m,
          parsed: C,
          paymentInfo: _,
          plaintext: t.plaintext,
        });
        return (v != null && (await v), null);
      }
      if (C.securityNotificationEnabled)
        return (
          g == null || !(g instanceof r("WAWebWid"))
            ? o("WALogger")
                .ERROR(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "Handle security notification empty wid error",
                    ])),
                )
                .sendLogs("Handle security notification empty wid error")
            : o("WAWebUserUtils").isMePrimary(g)
              ? o("WAWebUserPrefsNotifications").setGlobalSecurityNotifications(
                  C.securityNotificationEnabled.isEnabled,
                )
              : o("WALogger")
                  .ERROR(
                    u ||
                      (u = babelHelpers.taggedTemplateLiteralLoose([
                        "Handle security notification payload wid error",
                      ])),
                  )
                  .sendLogs("Handle security notification payload wid error"),
          null
        );
      if (C.cloudApiThreadControlNotification)
        return (
          r("WAWebHandleCloudApiThreadControlNotification")(
            C.cloudApiThreadControlNotification,
          ),
          null
        );
      if (C.lidMigrationSyncMessage != null)
        return (
          o("WALogger")
            .ERROR(
              c ||
                (c = babelHelpers.taggedTemplateLiteralLoose([
                  "[LID] received peer migration stanza but client-to-LID migration is no longer supported, sender: ",
                  "",
                ])),
              o("WAWebGetPlatformFromStanzaId").getPlatformFromStanzaId(
                m.externalId,
              ),
            )
            .sendLogs(
              o("WAWebUserUtils").isMeAccount(g)
                ? "lid-migration-peer-stanza-received"
                : "lid-migration-non-peer-stanza-received",
            ),
          null
        );
      await N(C, e, t.proto, b, a);
      var S = await M(C, m, t),
        R = S.loggedRenderableMsgs,
        L = S.renderableMsgs;
      return {
        bizInfo: l,
        decodedPlaintext: t.plaintext,
        e2eInfo: d,
        info: m,
        loggedRenderableMsgs: R,
        messageOverwriteOption: h,
        msgMeta: p,
        paymentInfo: _,
        quarantineAction: b,
        renderableMsgs: L,
        reparsing: f,
        rootSecretDistribute: C.rootSecretDistribute,
        scheduledMsgViewMode: t.scheduledMsgViewMode,
        senderKey: C.senderKey,
      };
    }
    async function x(e, t, n) {
      if (!n) {
        var r = await o("WAWebHandleMsgProcessUtils").preProcessMsg(e, t);
        ((r == null ? void 0 : r.senderOrRecipientAccountTypeHosted) === !0 &&
          (e.senderOrRecipientAccountTypeHosted = !0),
          (r == null ? void 0 : r.hostedBizEncMismatch) === !0 &&
            (e.hostedBizEncStateMismatch = !0));
      }
    }
    async function $(e, t, n) {
      var r = t.plaintext,
        a = t.proto,
        i = e.bizInfo,
        l = e.e2eInfo,
        s = e.hsmInfo,
        u = e.info,
        c = e.msgBotInfo,
        d = e.msgMeta,
        m = e.paymentInfo,
        p = e.reportingTokenInfo,
        _ = o(
          "WAWebOfflineResumeMsgProcessReporterWorkerCompatible",
        ).msgProcessReporter.startMarker(
          o("WAWebOfflineResumeMsgProcessReporterWorkerCompatible")
            .msgProcessReporter.stage.Parsing,
        ),
        f =
          n != null
            ? n
            : await o("WAWebQuarantineActionUtils").getQuarantineAction(
                a,
                o("WAWebMsgProcessingApiUtils").getFrom(u),
              ),
        g =
          f.type === "NoQuarantine"
            ? await o("WAWebMsgProcessingApiUtils").parseMessage({
                info: u,
                ciphertextType: l.e2eType,
                msgProtobuf: a,
                paymentInfo: m,
                bizInfo: i,
                hsmInfo: s,
                hidePlaceholder: l.hideFail,
                processDecryptedProtoParams: e,
                msgBotInfo: c,
                meta: d,
                reportingTokenInfo: p,
                isMessageRetry: l.retryCount > 0,
                isOffline: u.offline != null,
                protobufBytes: r,
              })
            : k({
                info: u,
                plaintext: r,
                quarantineExtractedText: o(
                  "WAWebQuarantineActionUtils",
                ).maybeGetQuarantineText(f),
              });
      return (P(g, l), _ == null || _(), { parsed: g, quarantineAction: f });
    }
    function P(e, t) {
      if (
        o("WAWebCurrentUser").isEmployee() &&
        o("WAWebABProps").getABPropConfigValue(
          "wa_web_debug_color_code_retry_messages",
        )
      ) {
        var n;
        (n = e.renderableMsgs) == null ||
          n.forEach(function (e) {
            t.retryCount > 0 && (e.backgroundColor = 16711680);
          });
      }
    }
    async function N(e, t, n, r, a) {
      var i = t.bizInfo,
        l = t.e2eInfo,
        s = t.info,
        u = t.msgMeta,
        c = t.reparsing;
      await z(e, s, a);
      var d = e.renderableMsgs;
      (o("WAWebHandleMsgValidate").renderableMessagesValidation({
        renderableMsgs: d,
        msgMeta: u,
        info: s,
        proto: n,
        bizInfo: i,
        e2eInfo: c === !0 ? null : l,
      }),
        o("WAWebHandleMsgValidate").logAddPixKeyOfferReceipt({
          info: s,
          isFirstReceipt: c !== !0 && !a,
          isQuarantined: r.type !== "NoQuarantine",
          proto: n,
          renderableMsgs: d,
        }),
        o("WAWebHandleMsgValidate").validateAddPixKeyOfferSender({
          info: s,
          proto: n,
          renderableMsgs: d,
        }));
    }
    async function M(e, t, n) {
      var r = n.proto,
        a = n.scheduledMsgViewMode,
        i = await o("WAWebGalaxyFlowsUtils").maybeAddGalaxyFlowMessageIds(
          e.renderableMsgs,
        ),
        l = await o(
          "WAWebLimitSharingAcp2HideReceivedMsgs",
        ).hideMsgsReceivedInAcp2RestrictedChat({
          messageType: t.type,
          msgs: o(
            "WAWebConditionalRevealPreProcessor",
          ).applyScheduledMsgViewMode(
            e.storeMsg != null ? [e.storeMsg].concat(i) : i,
            a,
          ),
          proto: r,
        });
      return { loggedRenderableMsgs: i, renderableMsgs: l };
    }
    function w(e, t, n) {
      var r = n.quarantineAction,
        a = n.scheduledMsgViewMode,
        i = o("decodeProtobuf").decodeProtobuf(
          o("WAWebProtobufsE2E.pb").MessageSpec,
          t,
        );
      return D(
        babelHelpers.extends({}, e, {
          decrypted: t.slice().buffer,
          isPadded: !1,
        }),
        { plaintext: t, proto: i, scheduledMsgViewMode: a },
        { quarantineAction: r, preProcessingDone: !0 },
      );
    }
    function A(e) {
      return babelHelpers.extends({}, e, {
        rootSecretDistribute: null,
        senderKey: null,
      });
    }
    async function F(e, t) {
      var n = e.bizInfo,
        r = e.info,
        o = e.messageOverwriteOption,
        a = e.msgMeta,
        i = e.paymentInfo,
        l = e.renderableMsgs,
        s = e.reparsing,
        u = K({
          renderableMsgs: l,
          reparsing: s,
          bizInfo: n,
          msgMeta: a,
          paymentInfo: i,
          info: r,
          messageOverwriteOption: o,
          callerHandles: t == null ? void 0 : t.callerHandles,
        }),
        c = u.hasInactiveMsg,
        d = u.tasks,
        m = await O(l),
        p = Promise.all(B(e));
      Y(r, a);
      var _ = ne(r.chat),
        f = await Promise.all([Promise.all(d), p]),
        g = f[0];
      return (
        await W(e, _),
        { receipt: { hasInactiveMsg: c, isOrphanAddon: m }, staged: g[0] }
      );
    }
    async function O(e) {
      if (
        !o("WAWebABProps").getABPropConfigValue(
          "web_send_orphan_in_receipts_enabled",
        )
      )
        return !1;
      var t = X(e[0]);
      if (t == null) return !1;
      var n = await o("WAWebAddonQueryUtils").getParentMsgsByMsgKey([t]),
        r = n.get(t.toString());
      return (
        r == null ||
        r.type === o("WAWebMsgType").MSG_TYPE.CIPHERTEXT ||
        (r.type === o("WAWebMsgType").MSG_TYPE.UNKNOWN &&
          (r.futureproofType == null ||
            !o(
              "WAWebMessageAssociationConstants",
            ).orphanIneligibleFutureproofTypes.has(r.futureproofType)))
      );
    }
    function B(e) {
      var t = e.info,
        n = e.rootSecretDistribute,
        r = e.senderKey,
        a = [];
      if (
        (r != null &&
          a.push(
            o("WAWebSignal").Session.createGroupSignalSession(
              t.author,
              r.groupId,
              r.key,
            ),
          ),
        n != null)
      )
        if (o("WAWebUserUtils").isMeAccount(t.author)) {
          var i = n.chatJid,
            l = n.rootSecret,
            s = n.stanzaId;
          a.push(
            o("WAWebWasaRootSecretWriter").applyWasaRootSecretForId(i, s, l),
          );
        } else
          o("WALogger").WARN(
            d ||
              (d = babelHelpers.taggedTemplateLiteralLoose([
                "[wasa] dropping rootSecretDistribute from non-self author ",
                "",
              ])),
            t.author.toString(),
          );
      return a;
    }
    async function W(e, t) {
      var n = e.e2eInfo,
        r = e.info,
        a = e.loggedRenderableMsgs,
        i = e.msgMeta,
        l = await t;
      (o(
        "WAWebLogMissingGroupParticipantMappings",
      ).logMissingGroupParticipantMappings({
        author: r.author,
        groupId: r.chat,
        localAddressingMode: l,
        serverAddressingMode: r.addressingMode,
      }),
        o("WAWebLogReceivedMessages").logReceivedMessagesInWAM({
          msgs: a,
          offline: o("WAWebOfflineAttrUtils").toOfflineNumber(r.offline),
          tsMillis: r.ts * 1e3,
          clientReceivedTsMillis: r.clientReceivedTsMillis,
          msgProcessStartTsMillis: r.msgProcessStartTsMillis,
          msgProcessEndTsMillis: r.msgProcessEndTsMillis,
          serverAddressingMode: r.addressingMode,
          isPq: n.isPq,
          localAddressingMode: l,
          oppositeHasUsername: o("WAWebUserUtils").isMeAccount(r.author)
            ? r.peerRecipientUsername != null
            : r.username != null,
          sessionScope: o(
            "WAWebSessionScopeWamUtils",
          ).getIncomingSkdmSessionScopeForMessageReceive({
            from: o("WAWebMsgProcessingApiUtils").getFrom(r),
            isGroupStatus: i == null ? void 0 : i.isGroupStatus,
            isSkdm: i == null ? void 0 : i.isSkdm,
            metaSessionScope: i == null ? void 0 : i.metaSessionScope,
          }),
        }));
    }
    async function q(e) {
      var t = e.bizInfo,
        n = e.e2eInfo,
        a = e.hsmInfo,
        i = e.info,
        l = e.msgBotInfo,
        s = e.msgMeta,
        u = e.paymentInfo,
        c = e.reportingTokenInfo,
        d = await U(e);
      if (d == null) return { hasInactiveMsg: !1 };
      var f = d.plaintext,
        g = d.proto,
        h = d.scheduledMsgViewMode,
        y = o("WAWebMsgProcessingApiUtils").getFrom(i),
        C = H(i, n, !0),
        b = r("justknobx")._("5752")
          ? await o("WAWebQuarantineActionUtils").getQuarantineAction(g, y)
          : o("WAWebQuarantineActionUtils").QuarantineAction.NoQuarantine;
      o("WALogger")
        .LOG(
          m ||
            (m = babelHelpers.taggedTemplateLiteralLoose([
              "[processDecryptedMessageProto] reparsing msgId=",
              "",
            ])),
          i.externalId,
        )
        .tags("messaging");
      var v =
        b === o("WAWebQuarantineActionUtils").QuarantineAction.NoQuarantine
          ? await o("WAWebMsgProcessingApiUtils").parseMessage({
              info: i,
              ciphertextType: n.e2eType,
              msgProtobuf: g,
              paymentInfo: u,
              bizInfo: t,
              hsmInfo: a,
              hidePlaceholder: n.hideFail,
              processDecryptedProtoParams: e,
              msgBotInfo: l,
              meta: s,
              reportingTokenInfo: c,
              isMessageRetry: n.retryCount > 0,
              isOffline: i.offline != null,
              protobufBytes: f,
            })
          : k({
              info: i,
              plaintext: f,
              quarantineExtractedText: o(
                "WAWebQuarantineActionUtils",
              ).maybeGetQuarantineText(b),
            });
      if (v.renderableMsgs == null) {
        o("WALogger").ERROR(
          p ||
            (p = babelHelpers.taggedTemplateLiteralLoose([
              "parsed render able msgs not reparsed as expected",
            ])),
        );
        var S = await D(e, d, { quarantineAction: b, preProcessingDone: !1 });
        return S == null ? { hasInactiveMsg: !1 } : (await F(S)).receipt;
      }
      var R = await te(
        o("WAWebConditionalRevealPreProcessor").applyScheduledMsgViewMode(
          v.renderableMsgs,
          h,
        ),
      );
      (o("WAWebHandleMsgValidate").renderableMessagesValidation({
        renderableMsgs: R,
        msgMeta: s,
        info: i,
        proto: g,
        bizInfo: t,
        e2eInfo: null,
      }),
        o("WAWebHandleMsgValidate").validateAddPixKeyOfferSender({
          info: i,
          proto: g,
          renderableMsgs: R,
        }));
      var L = K({
          renderableMsgs: R,
          reparsing: !0,
          bizInfo: t,
          msgMeta: s,
          paymentInfo: u,
          info: i,
          messageOverwriteOption: C,
        }),
        E = L.hasInactiveMsg,
        I = L.tasks;
      return (
        await Promise.all(I),
        o("WALogger")
          .LOG(
            _ ||
              (_ = babelHelpers.taggedTemplateLiteralLoose([
                "[processDecryptedMessageProto] reparsed msgId=",
                "",
              ])),
            i.externalId,
          )
          .tags("messaging"),
        { hasInactiveMsg: E }
      );
    }
    async function U(e) {
      var t = e.decrypted,
        r = e.e2eInfo,
        a = e.info,
        i = e.isPadded,
        l = i === void 0 ? !0 : i,
        s = e.reparsing === !0,
        u =
          r.e2eType === o("WAWebBackendJobs.flow").CiphertextType.Msmsg
            ? !1
            : l,
        c = u
          ? o("WACryptoPkcs7").unpadPkcs7(new Uint8Array(t))
          : new Uint8Array(t),
        d = o("decodeProtobuf").decodeProtobuf(
          o("WAWebProtobufsE2E.pb").MessageSpec,
          c,
        );
      if (
        (o("WAWebVerifyProtobufMsgObjectKeys").verifyProtobufMessageObjectKeys(
          d,
        ),
        o("WAWebMessageSecretLocationUtils").verifyTopLevelMessageSecret({
          context: o("WAWebMessageSecretLocationUtils")
            .MessageSecretCheckContext.Receiver,
          proto: d,
          stanzaId: a.externalId,
        }),
        !s &&
          (n("cr:402") == null
            ? void 0
            : n("cr:402").shouldDropAeaWassMessage(a, d.messageContextInfo)) ===
            !0)
      )
        throw new (o("WAWebHandleMsgError").MessageValidationError)(
          "CoEx relay message without a valid attestation",
          o("WAWebWamEnumE2eFailureReason").E2E_FAILURE_REASON
            .WASS_INVALID_ATTESTATION,
        );
      var m = o(
        "WAWebScheduledMsgReceivePreProcess",
      ).getIncomingConditionalRevealMessage(d);
      return m == null
        ? { plaintext: c, proto: d, scheduledMsgViewMode: null }
        : V(e, { plaintext: c, proto: d, scheduledMsgViewMode: null }, m);
    }
    async function V(e, t, n) {
      var r = e.info,
        a = e.msgMeta,
        i = e.reportingTokenInfo,
        l = await o(
          "WAWebScheduledMsgReceivePreProcess",
        ).preProcessIncomingScheduledMsg({
          conditionalRevealMessage: n,
          info: r,
          msgMeta: a,
          plaintext: t.plaintext,
          proto: t.proto,
          reportingTokenInfo: i,
        });
      if (l.skipProcessing) return null;
      var s = l.plaintext,
        u = l.proto,
        c = l.scheduledMsgViewMode;
      return (
        u !== t.proto &&
          (o(
            "WAWebVerifyProtobufMsgObjectKeys",
          ).verifyProtobufMessageObjectKeys(u),
          o("WAWebMessageSecretLocationUtils").verifyTopLevelMessageSecret({
            context: o("WAWebMessageSecretLocationUtils")
              .MessageSecretCheckContext.Receiver,
            proto: u,
            stanzaId: r.externalId,
          })),
        { plaintext: s, proto: u, scheduledMsgViewMode: c }
      );
    }
    function H(e, t, n) {
      return (t.retryCount > 0 &&
        o("WAWebMsgProcessingApiUtils").isRevokeInfo(e)) ||
        n
        ? o("WAWebHandleMsgTypes").MessageOverwriteOption.RETRY
        : o("WAWebHandleMsgTypes").MessageOverwriteOption.NO_OVERWRITE;
    }
    async function G(e) {
      var t = await o("WAWebDBMsgUtils").getMsgByMsgKey(
        o("WAWebMsgProcessingApiUtils").messageInfoToKey(e),
      );
      (t == null ? void 0 : t.bclParticipants) != null
        ? (e.bclParticipants = t.bclParticipants)
        : (t == null ? void 0 : t.broadcastParticipants) != null &&
          (e.bclParticipants = t.broadcastParticipants.map(function (e) {
            return { wid: o("WAWebWidFactory").asUserWidOrThrow(e) };
          }));
    }
    async function z(e, t, n) {
      var r = !1;
      if (
        (e.deviceSent == null
          ? (r = !0)
          : e.deviceSent.phash != null && e.deviceSent.phash !== ""
            ? (r = await o("WAWebHandleMsgValidate").validateBclHash(
                e.deviceSent.phash,
                e.deviceSent.info,
              ))
            : e.deviceSent.destination &&
              (r =
                n ||
                (await o("WAWebHandleMsgValidate").validateMsgDestination(
                  e.deviceSent.destination,
                  t,
                ))),
        !r)
      )
        throw new (o("WAWebHandleMsgError").DeviceSentMessageError)(
          o("WAWebMsgProcessingApiUtils").getDeviceType(t.author),
          o("WAWebWamEnumDsmError").DSM_ERROR.INVALID_DSM,
        );
    }
    function j(e) {
      var t = e[0];
      return t == null
        ? !1
        : (o("WAWebAddonGatingUtils").isUnifiedInfraEnabledForType == null
              ? void 0
              : o("WAWebAddonGatingUtils").isUnifiedInfraEnabledForType(
                  t.type,
                )) === !0 && (L == null ? void 0 : L(t)) != null
          ? !0
          : t.kind === o("WAWebMsgType").MsgKind.PollVoteEncrypted
            ? !1
            : t.type === o("WAWebMsgType").MSG_TYPE.KEEP_IN_CHAT ||
              o("WAWebMessagePluginSendsInactiveReceipt").sendsInactiveReceipt(
                t.type,
                t.subtype,
              );
    }
    function K(e) {
      var t,
        n,
        r,
        a,
        i,
        l = e.bizInfo,
        s = e.callerHandles,
        u = e.info,
        c = e.messageOverwriteOption,
        d = e.msgMeta,
        m = e.paymentInfo,
        p = e.renderableMsgs,
        _ = e.reparsing,
        S = [],
        R = (s == null ? void 0 : s.has("flush")) === !0,
        E = p[0],
        k = o("WAWebAddonGatingUtils").isUnifiedInfraEnabledForType(
          E == null ? void 0 : E.type,
        )
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
            S.push(
              ee({
                messageOverwriteOption: c,
                msg: k,
                msgInfo: u,
                reparsing: _,
                flushedByCaller: R,
              }),
            ))
          : E != null && E.kind === o("WAWebMsgType").MsgKind.PollVoteEncrypted
            ? (o("WALogger").LOG(
                g ||
                  (g = babelHelpers.taggedTemplateLiteralLoose([
                    "processMsgs: pollVote",
                  ])),
              ),
              S.push(Z(E, u, _, R)))
            : ((t = p[0]) == null ? void 0 : t.type) ===
                o("WAWebMsgType").MSG_TYPE.KEEP_IN_CHAT
              ? (o("WALogger").LOG(
                  h ||
                    (h = babelHelpers.taggedTemplateLiteralLoose([
                      "processMsgs: keepInChat",
                    ])),
                ),
                S.push(
                  o("WAWebHandleMsgProcessUtils").processKeepInChatMsg({
                    msg: p[0],
                    msgInfo: u,
                    msgMeta: d,
                    reparsing: _,
                  }),
                ))
              : ((n = p[0]) == null ? void 0 : n.type) ===
                    o("WAWebMsgType").MSG_TYPE.PROTOCOL &&
                  ((r = p[0]) == null ? void 0 : r.subtype) === "message_edit"
                ? (o("WALogger").LOG(
                    y ||
                      (y = babelHelpers.taggedTemplateLiteralLoose([
                        "processMsgs: messageEdit",
                      ])),
                  ),
                  S.push(
                    o("WAWebHandleMsgProcessUtils").processEditProtocolMsg({
                      msg: p[0],
                      msgInfo: u,
                      msgMeta: d,
                      reparsing: _,
                    }),
                  ))
                : ((a = p[0]) == null ? void 0 : a.type) ===
                      o("WAWebMsgType").MSG_TYPE.PROTOCOL &&
                    ((i = p[0]) == null ? void 0 : i.subtype) ===
                      "ephemeral_sync_response"
                  ? (o("WALogger").LOG(
                      C ||
                        (C = babelHelpers.taggedTemplateLiteralLoose([
                          "processMsgs: ephemeralSyncResponse",
                        ])),
                    ),
                    S.push(
                      o(
                        "WAWebHandleMsgProcessUtils",
                      ).processEphemeralSyncResponseMsg({
                        msg: p[0],
                        msgInfo: u,
                        msgMeta: d,
                        reparsing: _,
                      }),
                    ))
                  : p.length > 0 &&
                    (E != null &&
                    o(
                      "WAWebMessagePluginSendsInactiveReceipt",
                    ).sendsInactiveReceipt(E.type, E.subtype)
                      ? o("WALogger").LOG(
                          b ||
                            (b = babelHelpers.taggedTemplateLiteralLoose([
                              "processMsgs: inactive ",
                              "",
                            ])),
                          E.type,
                        )
                      : o("WALogger").LOG(
                          v ||
                            (v = babelHelpers.taggedTemplateLiteralLoose([
                              "processMsgs: renderableMsgs",
                            ])),
                        ),
                    S.push(
                      o(
                        "WAWebMessageProcessRenderable",
                      ).processRenderableMessages(p, u, m, l, d, c, _, {
                        callerHandles: s,
                      }),
                    )),
        { tasks: S, hasInactiveMsg: j(p) }
      );
    }
    function Q(e, t, n, r, a, i, l) {
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
    function X(e) {
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
    function Y(e, t) {
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
    async function J(e) {
      var t = await o(
        "WAWebMessageProcessPlaceholder",
      ).processPlaceholderMessage(e);
      return (t == null ? void 0 : t.rendered) === !0;
    }
    async function Z(e, t, n, r) {
      var a = t.offline != null && !n,
        i = e,
        l = o("WAWebGetMessageCache")
          .getMessageCache()
          .addMessages(
            [{ msg: i }],
            !r &&
              o("WAWebMessageQueueImpl").shouldFlushMessageImmediately(
                a,
                o("WAWebBackendEventBus").BackendEventBus.isOfflineDeliveryEnd,
              ),
          );
      return (
        !r &&
          (n ||
            (o("WAWebBackendEventBus").BackendEventBus.isMainStreamReadyMd &&
              o("WAWebBackendEventBus").BackendEventBus
                .isOfflineDeliveryEnd)) &&
          (await l),
        { written: l }
      );
    }
    async function ee(e) {
      var t = e.flushedByCaller,
        n = e.messageOverwriteOption,
        r = e.msg,
        a = e.msgInfo,
        i = e.reparsing,
        l = a.offline != null && !i,
        s = r,
        u = o("WAWebGetMessageCache")
          .getMessageCache()
          .addMessages(
            [{ msg: s }],
            !t &&
              o("WAWebMessageQueueImpl").shouldFlushMessageImmediately(
                l,
                o("WAWebBackendEventBus").BackendEventBus.isOfflineDeliveryEnd,
              ),
          );
      return (
        !t &&
          (i ||
            (o("WAWebBackendEventBus").BackendEventBus.isMainStreamReadyMd &&
              o("WAWebBackendEventBus").BackendEventBus
                .isOfflineDeliveryEnd)) &&
          (await u),
        n === o("WAWebHandleMsgTypes").MessageOverwriteOption.RETRY &&
          o("WAWebBackendApi").frontendFireAndForget("removePlaceholder", {
            msg: r,
          }),
        { written: u }
      );
    }
    async function te(e) {
      return Promise.all(
        e.map(async function (e) {
          var t;
          try {
            var n;
            t =
              (n = await o("WAWebDBMsgUtils").getMsgByMsgKey(e.id)) == null
                ? void 0
                : n.ack;
          } catch (t) {
            return (
              o("WALogger")
                .WARN(
                  S ||
                    (S = babelHelpers.taggedTemplateLiteralLoose([
                      "keepStoredAcks: stored msg lookup failed, keeping reparsed ack",
                    ])),
                )
                .catching(r("getErrorSafe")(t)),
              e
            );
          }
          return t != null && (e.ack == null || t > e.ack)
            ? babelHelpers.extends({}, e, { ack: t })
            : e;
        }),
      );
    }
    function ne(e) {
      return o("WAWebGetGroupAddressingMode").getGroupAddressingMode(e);
    }
    ((l.processDecryptedMessageProto = I),
      (l.prepareDecryptedMessage = T),
      (l.prepareReplayedMessage = w),
      (l.withoutCryptoStateInstalls = A),
      (l.applyPreparedMessage = F),
      (l.isOrphanAddonMessage = O),
      (l.startCryptoStateInstalls = B),
      (l.decodeDecryptedProto = U),
      (l.hasInactiveRenderableMsg = j),
      (l.processMsgs = K),
      (l.processRenderableMsg = Q),
      (l.getOrphanCheckParentKey = X),
      (l.updateIncomingMessagePushname = Y),
      (l.processPlaceholderMsg = J));
  },
  98,
);
