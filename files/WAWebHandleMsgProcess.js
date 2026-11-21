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
    "asyncToGeneratorRuntime",
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
      R,
      L = (e = n("cr:37440")) != null ? e : {},
      E = L.castToAddonMsgData,
      k = L.getParentMsgKey;
    function I(e) {
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
    function T(e) {
      return D.apply(this, arguments);
    }
    function D() {
      return (
        (D = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          if (e.reparsing === !0) return Y(e);
          var t = yield Z(e);
          if (t == null) return { hasInactiveMsg: !1 };
          var n = yield x(e, t);
          if (n == null) return { hasInactiveMsg: !1 };
          var r = yield H(n),
            o = r.receipt;
          return o;
        })),
        D.apply(this, arguments)
      );
    }
    function x(e, t) {
      return $(e, t, { quarantineAction: null, preProcessingDone: !1 });
    }
    function $(e, t, n) {
      return P.apply(this, arguments);
    }
    function P() {
      return (
        (P = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          var a = n.preProcessingDone,
            i = n.quarantineAction,
            l = e.bizInfo,
            s = e.e2eInfo,
            u = e.info,
            c = e.msgMeta,
            d = e.paymentInfo,
            m = e.reparsing === !0,
            p = o("WAWebMsgProcessingApiUtils").getFrom(u),
            _ = re(u, s, m);
          (yield N(u, t.proto, a),
            u.type === o("WAWebHandleMsgTypes").MESSAGE_TYPE.PEER_BROADCAST &&
              s.retryCount > 0 &&
              (yield oe(u)));
          var f = yield w(e, t, i),
            C = f.parsed,
            b = f.quarantineAction;
          if (o("WAWebDeferrableProtocolMsg").isDeferrableProtocolMsg(C)) {
            var v = o("WAWebDeferrableProtocolMsg").handleDeferrableProtocolMsg(
              {
                bizInfo: l,
                from: p,
                info: u,
                parsed: C,
                paymentInfo: d,
                plaintext: t.plaintext,
              },
            );
            return (v != null && (yield v), null);
          }
          if (C.securityNotificationEnabled)
            return (
              p == null || !(p instanceof r("WAWebWid"))
                ? o("WALogger")
                    .ERROR(
                      g ||
                        (g = babelHelpers.taggedTemplateLiteralLoose([
                          "Handle security notification empty wid error",
                        ])),
                    )
                    .sendLogs("Handle security notification empty wid error")
                : o("WAWebUserUtils").isMePrimary(p)
                  ? o(
                      "WAWebUserPrefsNotifications",
                    ).setGlobalSecurityNotifications(
                      C.securityNotificationEnabled.isEnabled,
                    )
                  : o("WALogger")
                      .ERROR(
                        h ||
                          (h = babelHelpers.taggedTemplateLiteralLoose([
                            "Handle security notification payload wid error",
                          ])),
                      )
                      .sendLogs(
                        "Handle security notification payload wid error",
                      ),
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
                  y ||
                    (y = babelHelpers.taggedTemplateLiteralLoose([
                      "[LID] received peer migration stanza but client-to-LID migration is no longer supported, sender: ",
                      "",
                    ])),
                  o("WAWebGetPlatformFromStanzaId").getPlatformFromStanzaId(
                    u.externalId,
                  ),
                )
                .sendLogs(
                  o("WAWebUserUtils").isMeAccount(p)
                    ? "lid-migration-peer-stanza-received"
                    : "lid-migration-non-peer-stanza-received",
                ),
              null
            );
          yield O(C, e, t.proto, b, a);
          var S = yield W(C, u, t),
            R = S.loggedRenderableMsgs,
            L = S.renderableMsgs;
          return {
            bizInfo: l,
            decodedPlaintext: t.plaintext,
            e2eInfo: s,
            info: u,
            loggedRenderableMsgs: R,
            messageOverwriteOption: _,
            msgMeta: c,
            paymentInfo: d,
            quarantineAction: b,
            renderableMsgs: L,
            reparsing: m,
            rootSecretDistribute: C.rootSecretDistribute,
            scheduledMsgViewMode: t.scheduledMsgViewMode,
            senderKey: C.senderKey,
          };
        })),
        P.apply(this, arguments)
      );
    }
    function N(e, t, n) {
      return M.apply(this, arguments);
    }
    function M() {
      return (
        (M = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          if (!n) {
            var r = yield o("WAWebHandleMsgProcessUtils").preProcessMsg(e, t);
            ((r == null ? void 0 : r.senderOrRecipientAccountTypeHosted) ===
              !0 && (e.senderOrRecipientAccountTypeHosted = !0),
              (r == null ? void 0 : r.hostedBizEncMismatch) === !0 &&
                (e.hostedBizEncStateMismatch = !0));
          }
        })),
        M.apply(this, arguments)
      );
    }
    function w(e, t, n) {
      return A.apply(this, arguments);
    }
    function A() {
      return (
        (A = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
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
                : yield o("WAWebQuarantineActionUtils").getQuarantineAction(
                    a,
                    o("WAWebMsgProcessingApiUtils").getFrom(u),
                  ),
            g =
              f.type === "NoQuarantine"
                ? yield o("WAWebMsgProcessingApiUtils").parseMessage({
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
                : I({
                    info: u,
                    plaintext: r,
                    quarantineExtractedText: o(
                      "WAWebQuarantineActionUtils",
                    ).maybeGetQuarantineText(f),
                  });
          return (
            F(g, l),
            _ == null || _(),
            { parsed: g, quarantineAction: f }
          );
        })),
        A.apply(this, arguments)
      );
    }
    function F(e, t) {
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
    function O(e, t, n, r, o) {
      return B.apply(this, arguments);
    }
    function B() {
      return (
        (B = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, r, a) {
            var i = t.bizInfo,
              l = t.e2eInfo,
              s = t.info,
              u = t.msgMeta,
              c = t.reparsing;
            yield ie(e, s, a);
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
          },
        )),
        B.apply(this, arguments)
      );
    }
    function W(e, t, n) {
      return q.apply(this, arguments);
    }
    function q() {
      return (
        (q = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          var r = n.proto,
            a = n.scheduledMsgViewMode,
            i = yield o("WAWebGalaxyFlowsUtils").maybeAddGalaxyFlowMessageIds(
              e.renderableMsgs,
            ),
            l = yield o(
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
        })),
        q.apply(this, arguments)
      );
    }
    function U(e, t, n) {
      var r = n.quarantineAction,
        a = n.scheduledMsgViewMode,
        i = o("decodeProtobuf").decodeProtobuf(
          o("WAWebProtobufsE2E.pb").MessageSpec,
          t,
        );
      return $(
        babelHelpers.extends({}, e, {
          decrypted: t.slice().buffer,
          isPadded: !1,
        }),
        { plaintext: t, proto: i, scheduledMsgViewMode: a },
        { quarantineAction: r, preProcessingDone: !0 },
      );
    }
    function V(e) {
      return babelHelpers.extends({}, e, {
        rootSecretDistribute: null,
        senderKey: null,
      });
    }
    function H(e, t) {
      return G.apply(this, arguments);
    }
    function G() {
      return (
        (G = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var r = e.bizInfo,
            o = e.info,
            a = e.messageOverwriteOption,
            i = e.msgMeta,
            l = e.paymentInfo,
            s = e.renderableMsgs,
            u = e.reparsing,
            c = ue({
              renderableMsgs: s,
              reparsing: u,
              bizInfo: r,
              msgMeta: i,
              paymentInfo: l,
              info: o,
              messageOverwriteOption: a,
              callerHandles: t == null ? void 0 : t.callerHandles,
            }),
            d = c.hasInactiveMsg,
            m = c.tasks,
            p = yield z(s),
            _ = (R || (R = n("Promise"))).all(K(e));
          me(o, i);
          var f = ve(o.chat),
            g = yield R.all([R.all(m), _]),
            h = g[0];
          return (
            yield Q(e, f),
            { receipt: { hasInactiveMsg: d, isOrphanAddon: p }, staged: h[0] }
          );
        })),
        G.apply(this, arguments)
      );
    }
    function z(e) {
      return j.apply(this, arguments);
    }
    function j() {
      return (
        (j = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          if (
            !o("WAWebABProps").getABPropConfigValue(
              "web_send_orphan_in_receipts_enabled",
            )
          )
            return !1;
          var t = de(e[0]);
          if (t == null) return !1;
          var n = yield o("WAWebAddonQueryUtils").getParentMsgsByMsgKey([t]),
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
        })),
        j.apply(this, arguments)
      );
    }
    function K(e) {
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
            u = n.stanzaId;
          a.push(
            o("WAWebWasaRootSecretWriter").applyWasaRootSecretForId(i, u, l),
          );
        } else
          o("WALogger").WARN(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "[wasa] dropping rootSecretDistribute from non-self author ",
                "",
              ])),
            t.author.toString(),
          );
      return a;
    }
    function Q(e, t) {
      return X.apply(this, arguments);
    }
    function X() {
      return (
        (X = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = e.e2eInfo,
            r = e.info,
            a = e.loggedRenderableMsgs,
            i = e.msgMeta,
            l = yield t;
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
        })),
        X.apply(this, arguments)
      );
    }
    function Y(e) {
      return J.apply(this, arguments);
    }
    function J() {
      return (
        (J = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.bizInfo,
            a = e.e2eInfo,
            i = e.hsmInfo,
            l = e.info,
            s = e.msgBotInfo,
            u = e.msgMeta,
            c = e.paymentInfo,
            d = e.reportingTokenInfo,
            m = yield Z(e);
          if (m == null) return { hasInactiveMsg: !1 };
          var p = m.plaintext,
            _ = m.proto,
            f = m.scheduledMsgViewMode,
            g = o("WAWebMsgProcessingApiUtils").getFrom(l),
            h = re(l, a, !0),
            y = r("justknobx")._("5752")
              ? yield o("WAWebQuarantineActionUtils").getQuarantineAction(_, g)
              : o("WAWebQuarantineActionUtils").QuarantineAction.NoQuarantine;
          o("WALogger")
            .LOG(
              C ||
                (C = babelHelpers.taggedTemplateLiteralLoose([
                  "[processDecryptedMessageProto] reparsing msgId=",
                  "",
                ])),
              l.externalId,
            )
            .tags("messaging");
          var S =
            y === o("WAWebQuarantineActionUtils").QuarantineAction.NoQuarantine
              ? yield o("WAWebMsgProcessingApiUtils").parseMessage({
                  info: l,
                  ciphertextType: a.e2eType,
                  msgProtobuf: _,
                  paymentInfo: c,
                  bizInfo: t,
                  hsmInfo: i,
                  hidePlaceholder: a.hideFail,
                  processDecryptedProtoParams: e,
                  msgBotInfo: s,
                  meta: u,
                  reportingTokenInfo: d,
                  isMessageRetry: a.retryCount > 0,
                  isOffline: l.offline != null,
                  protobufBytes: p,
                })
              : I({
                  info: l,
                  plaintext: p,
                  quarantineExtractedText: o(
                    "WAWebQuarantineActionUtils",
                  ).maybeGetQuarantineText(y),
                });
          if (S.renderableMsgs == null) {
            o("WALogger").ERROR(
              b ||
                (b = babelHelpers.taggedTemplateLiteralLoose([
                  "parsed render able msgs not reparsed as expected",
                ])),
            );
            var L = yield $(e, m, {
              quarantineAction: y,
              preProcessingDone: !1,
            });
            return L == null ? { hasInactiveMsg: !1 } : (yield H(L)).receipt;
          }
          var E = yield Ce(
            o("WAWebConditionalRevealPreProcessor").applyScheduledMsgViewMode(
              S.renderableMsgs,
              f,
            ),
          );
          (o("WAWebHandleMsgValidate").renderableMessagesValidation({
            renderableMsgs: E,
            msgMeta: u,
            info: l,
            proto: _,
            bizInfo: t,
            e2eInfo: null,
          }),
            o("WAWebHandleMsgValidate").validateAddPixKeyOfferSender({
              info: l,
              proto: _,
              renderableMsgs: E,
            }));
          var k = ue({
              renderableMsgs: E,
              reparsing: !0,
              bizInfo: t,
              msgMeta: u,
              paymentInfo: c,
              info: l,
              messageOverwriteOption: h,
            }),
            T = k.hasInactiveMsg,
            D = k.tasks;
          return (
            yield (R || (R = n("Promise"))).all(D),
            o("WALogger")
              .LOG(
                v ||
                  (v = babelHelpers.taggedTemplateLiteralLoose([
                    "[processDecryptedMessageProto] reparsed msgId=",
                    "",
                  ])),
                l.externalId,
              )
              .tags("messaging"),
            { hasInactiveMsg: T }
          );
        })),
        J.apply(this, arguments)
      );
    }
    function Z(e) {
      return ee.apply(this, arguments);
    }
    function ee() {
      return (
        (ee = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
            (o(
              "WAWebVerifyProtobufMsgObjectKeys",
            ).verifyProtobufMessageObjectKeys(d),
            o("WAWebMessageSecretLocationUtils").verifyTopLevelMessageSecret({
              context: o("WAWebMessageSecretLocationUtils")
                .MessageSecretCheckContext.Receiver,
              proto: d,
              stanzaId: a.externalId,
            }),
            !s &&
              (n("cr:402") == null
                ? void 0
                : n("cr:402").shouldDropAeaWassMessage(
                    a,
                    d.messageContextInfo,
                  )) === !0)
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
            : te(e, { plaintext: c, proto: d, scheduledMsgViewMode: null }, m);
        })),
        ee.apply(this, arguments)
      );
    }
    function te(e, t, n) {
      return ne.apply(this, arguments);
    }
    function ne() {
      return (
        (ne = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n) {
            var r = e.info,
              a = e.msgMeta,
              i = e.reportingTokenInfo,
              l = yield o(
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
                o(
                  "WAWebMessageSecretLocationUtils",
                ).verifyTopLevelMessageSecret({
                  context: o("WAWebMessageSecretLocationUtils")
                    .MessageSecretCheckContext.Receiver,
                  proto: u,
                  stanzaId: r.externalId,
                })),
              { plaintext: s, proto: u, scheduledMsgViewMode: c }
            );
          },
        )),
        ne.apply(this, arguments)
      );
    }
    function re(e, t, n) {
      return (t.retryCount > 0 &&
        o("WAWebMsgProcessingApiUtils").isRevokeInfo(e)) ||
        n
        ? o("WAWebHandleMsgTypes").MessageOverwriteOption.RETRY
        : o("WAWebHandleMsgTypes").MessageOverwriteOption.NO_OVERWRITE;
    }
    function oe(e) {
      return ae.apply(this, arguments);
    }
    function ae() {
      return (
        (ae = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield o("WAWebDBMsgUtils").getMsgByMsgKey(
            o("WAWebMsgProcessingApiUtils").messageInfoToKey(e),
          );
          (t == null ? void 0 : t.bclParticipants) != null
            ? (e.bclParticipants = t.bclParticipants)
            : (t == null ? void 0 : t.broadcastParticipants) != null &&
              (e.bclParticipants = t.broadcastParticipants.map(function (e) {
                return { wid: o("WAWebWidFactory").asUserWidOrThrow(e) };
              }));
        })),
        ae.apply(this, arguments)
      );
    }
    function ie(e, t, n) {
      return le.apply(this, arguments);
    }
    function le() {
      return (
        (le = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n) {
            var r = !1;
            if (
              (e.deviceSent == null
                ? (r = !0)
                : e.deviceSent.phash != null && e.deviceSent.phash !== ""
                  ? (r = yield o("WAWebHandleMsgValidate").validateBclHash(
                      e.deviceSent.phash,
                      e.deviceSent.info,
                    ))
                  : e.deviceSent.destination &&
                    (r =
                      n ||
                      (yield o("WAWebHandleMsgValidate").validateMsgDestination(
                        e.deviceSent.destination,
                        t,
                      ))),
              !r)
            )
              throw new (o("WAWebHandleMsgError").DeviceSentMessageError)(
                o("WAWebMsgProcessingApiUtils").getDeviceType(t.author),
                o("WAWebWamEnumDsmError").DSM_ERROR.INVALID_DSM,
              );
          },
        )),
        le.apply(this, arguments)
      );
    }
    function se(e) {
      var t = e[0];
      return t == null
        ? !1
        : (o("WAWebAddonGatingUtils").isUnifiedInfraEnabledForType == null
              ? void 0
              : o("WAWebAddonGatingUtils").isUnifiedInfraEnabledForType(
                  t.type,
                )) === !0 && (E == null ? void 0 : E(t)) != null
          ? !0
          : t.kind === o("WAWebMsgType").MsgKind.PollVoteEncrypted
            ? !1
            : t.type === o("WAWebMsgType").MSG_TYPE.KEEP_IN_CHAT ||
              o("WAWebMessagePluginSendsInactiveReceipt").sendsInactiveReceipt(
                t.type,
                t.subtype,
              );
    }
    function ue(e) {
      var t,
        n,
        r,
        a,
        i,
        l = e.bizInfo,
        s = e.callerHandles,
        g = e.info,
        h = e.messageOverwriteOption,
        y = e.msgMeta,
        C = e.paymentInfo,
        b = e.renderableMsgs,
        v = e.reparsing,
        S = [],
        R = (s == null ? void 0 : s.has("flush")) === !0,
        L = b[0],
        k = o("WAWebAddonGatingUtils").isUnifiedInfraEnabledForType(
          L == null ? void 0 : L.type,
        )
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
            S.push(
              he({
                messageOverwriteOption: h,
                msg: k,
                msgInfo: g,
                reparsing: v,
                flushedByCaller: R,
              }),
            ))
          : L != null && L.kind === o("WAWebMsgType").MsgKind.PollVoteEncrypted
            ? (o("WALogger").LOG(
                c ||
                  (c = babelHelpers.taggedTemplateLiteralLoose([
                    "processMsgs: pollVote",
                  ])),
              ),
              S.push(fe(L, g, v, R)))
            : ((t = b[0]) == null ? void 0 : t.type) ===
                o("WAWebMsgType").MSG_TYPE.KEEP_IN_CHAT
              ? (o("WALogger").LOG(
                  d ||
                    (d = babelHelpers.taggedTemplateLiteralLoose([
                      "processMsgs: keepInChat",
                    ])),
                ),
                S.push(
                  o("WAWebHandleMsgProcessUtils").processKeepInChatMsg({
                    msg: b[0],
                    msgInfo: g,
                    msgMeta: y,
                    reparsing: v,
                  }),
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
                    o("WAWebHandleMsgProcessUtils").processEditProtocolMsg({
                      msg: b[0],
                      msgInfo: g,
                      msgMeta: y,
                      reparsing: v,
                    }),
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
                        msgInfo: g,
                        msgMeta: y,
                        reparsing: v,
                      }),
                    ))
                  : b.length > 0 &&
                    (L != null &&
                    o(
                      "WAWebMessagePluginSendsInactiveReceipt",
                    ).sendsInactiveReceipt(L.type, L.subtype)
                      ? o("WALogger").LOG(
                          _ ||
                            (_ = babelHelpers.taggedTemplateLiteralLoose([
                              "processMsgs: inactive ",
                              "",
                            ])),
                          L.type,
                        )
                      : o("WALogger").LOG(
                          f ||
                            (f = babelHelpers.taggedTemplateLiteralLoose([
                              "processMsgs: renderableMsgs",
                            ])),
                        ),
                    S.push(
                      o(
                        "WAWebMessageProcessRenderable",
                      ).processRenderableMessages(b, g, C, l, y, h, v, {
                        callerHandles: s,
                      }),
                    )),
        { tasks: S, hasInactiveMsg: se(b) }
      );
    }
    function ce(e, t, n, r, a, i, l) {
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
    function de(e) {
      if (e == null) return null;
      if ((E == null ? void 0 : E(e)) != null) {
        var t;
        return (t = k == null ? void 0 : k(e)) != null ? t : null;
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
    function me(e, t) {
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
    function pe(e) {
      return _e.apply(this, arguments);
    }
    function _e() {
      return (
        (_e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield o(
            "WAWebMessageProcessPlaceholder",
          ).processPlaceholderMessage(e);
          return (t == null ? void 0 : t.rendered) === !0;
        })),
        _e.apply(this, arguments)
      );
    }
    function fe(e, t, n, r) {
      return ge.apply(this, arguments);
    }
    function ge() {
      return (
        (ge = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, r) {
            var a = t.offline != null && !n,
              i = e,
              l = o("WAWebGetMessageCache")
                .getMessageCache()
                .addMessages(
                  [{ msg: i }],
                  !r &&
                    o("WAWebMessageQueueImpl").shouldFlushMessageImmediately(
                      a,
                      o("WAWebBackendEventBus").BackendEventBus
                        .isOfflineDeliveryEnd,
                    ),
                );
            return (
              !r &&
                (n ||
                  (o("WAWebBackendEventBus").BackendEventBus
                    .isMainStreamReadyMd &&
                    o("WAWebBackendEventBus").BackendEventBus
                      .isOfflineDeliveryEnd)) &&
                (yield l),
              { written: l }
            );
          },
        )),
        ge.apply(this, arguments)
      );
    }
    function he(e) {
      return ye.apply(this, arguments);
    }
    function ye() {
      return (
        (ye = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
                    o("WAWebBackendEventBus").BackendEventBus
                      .isOfflineDeliveryEnd,
                  ),
              );
          return (
            !t &&
              (i ||
                (o("WAWebBackendEventBus").BackendEventBus
                  .isMainStreamReadyMd &&
                  o("WAWebBackendEventBus").BackendEventBus
                    .isOfflineDeliveryEnd)) &&
              (yield u),
            n === o("WAWebHandleMsgTypes").MessageOverwriteOption.RETRY &&
              o("WAWebBackendApi").frontendFireAndForget("removePlaceholder", {
                msg: r,
              }),
            { written: u }
          );
        })),
        ye.apply(this, arguments)
      );
    }
    function Ce(e) {
      return be.apply(this, arguments);
    }
    function be() {
      return (
        (be = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          return (R || (R = n("Promise"))).all(
            e.map(
              (function () {
                var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                  function* (e) {
                    var t;
                    try {
                      var n;
                      t =
                        (n = yield o("WAWebDBMsgUtils").getMsgByMsgKey(e.id)) ==
                        null
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
                  },
                );
                return function (t) {
                  return e.apply(this, arguments);
                };
              })(),
            ),
          );
        })),
        be.apply(this, arguments)
      );
    }
    function ve(e) {
      return o("WAWebGetGroupAddressingMode").getGroupAddressingMode(e);
    }
    ((l.processDecryptedMessageProto = T),
      (l.prepareDecryptedMessage = x),
      (l.prepareReplayedMessage = U),
      (l.withoutCryptoStateInstalls = V),
      (l.applyPreparedMessage = H),
      (l.isOrphanAddonMessage = z),
      (l.startCryptoStateInstalls = K),
      (l.decodeDecryptedProto = Z),
      (l.hasInactiveRenderableMsg = se),
      (l.processMsgs = ue),
      (l.processRenderableMsg = ce),
      (l.getOrphanCheckParentKey = de),
      (l.updateIncomingMessagePushname = me),
      (l.processPlaceholderMsg = pe));
  },
  98,
);
