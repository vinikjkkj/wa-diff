__d(
  "WAWebInboundMsgIntake",
  [
    "Promise",
    "WALogger",
    "WAPromiseReduce",
    "WATimeUtils",
    "WAWebDBCreateLidPnMappings",
    "WAWebDBReportingTokenUtils",
    "WAWebDecryptsOutsideInboundMsgRows",
    "WAWebDeliveryReceiptClassUtils",
    "WAWebGetMessageCache",
    "WAWebHandleMsgDecryptResult",
    "WAWebHandleMsgProcess",
    "WAWebHandleMsgSendReceipt",
    "WAWebHandleMsgTypes",
    "WAWebInboundMsgChatKey",
    "WAWebInboundMsgDrain",
    "WAWebInboundMsgLidMetadata",
    "WAWebInboundMsgPersistedQueue",
    "WAWebInboundMsgQueueRow",
    "WAWebInboundMsgRowCodec",
    "WAWebInboundMsgRowPlaceholder",
    "WAWebMessageProcessPlaceholder",
    "WAWebMessageProcessRenderable",
    "WAWebMessageReceiveFlow",
    "WAWebMsgProcessingApiUtils",
    "WAWebMsgProcessingDecryptApi",
    "WAWebOfflineHandler",
    "WAWebSignalProtocolStore",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s;
    function u(e) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var n = t.input,
            a = t.lidMetadataUpdates,
            i = t.msgKey,
            l = t.node,
            s = t.presetPlaceholder;
          if (s != null)
            return (
              o("WAWebInboundMsgPersistedQueue").queueInboundMsgRow({
                entity: v(n, l, [], s),
                prepared: S(n, [], s, a),
                receipt: L(n),
                stanzaId: n.msgInfo.externalId,
              }),
              null
            );
          var u = yield m(t),
            c = u.decryptResult,
            p = u.parts,
            f = u.placeholder;
          if (!d(u)) {
            o(
              "WAWebDecryptsOutsideInboundMsgRows",
            ).noteDecryptOutsideInboundMsgRows();
            try {
              (yield o("WAWebInboundMsgLidMetadata").writeInboundMsgLidMetadata(
                a,
              ),
                yield C(p));
            } catch (t) {
              o("WALogger")
                .ERROR(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "[inbound-msg-queue] applying in place failed, sending the receipt",
                    ])),
                )
                .catching(r("getErrorSafe")(t))
                .tags("messaging")
                .sendLogs("inbound-msg-in-place-failed", { sampling: 0.01 });
            }
            return (
              yield o("WAWebDBCreateLidPnMappings").flushLidPnMappingsToDb(),
              yield o("WAWebHandleMsgDecryptResult").handleDecryptResult({
                decryptResult: c,
                input: n,
                msgKey: i,
                node: l,
              }),
              null
            );
          }
          return (
            c.result !== o("WAWebHandleMsgTypes").E2EProcessResult.SUCCESS &&
              o("WAWebDBReportingTokenUtils").maybeStoreReportingTag({
                incomingMsgReportingTokenInfo: n.reportingTokenInfo,
                msgKey: i,
                msgTs: n.msgInfo.ts,
                stanzaId: n.msgInfo.externalId,
              }),
            o("WAWebInboundMsgPersistedQueue").queueInboundMsgRow({
              entity: v(n, l, p, f),
              prepared: S(n, p, f, a),
              receipt: E(n, c),
              stanzaId: n.msgInfo.externalId,
            }),
            _(n, c),
            null
          );
        })),
        c.apply(this, arguments)
      );
    }
    function d(e) {
      var t = e.decryptResult,
        n = e.parts,
        r = e.placeholder;
      return t.result === o("WAWebHandleMsgTypes").E2EProcessResult.SUCCESS
        ? n.length > 0 && r == null
        : t.result === o("WAWebHandleMsgTypes").E2EProcessResult.DEFERRED ||
            t.result ===
              o("WAWebHandleMsgTypes").E2EProcessResult.SIGNAL_OLD_COUNTER_ERROR
          ? !1
          : r != null;
    }
    function m(e) {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.input,
            n = e.sessionScope,
            r = [],
            a = null,
            i = yield o("WAWebMsgProcessingDecryptApi").decryptE2EPayload(
              t,
              function (e, t) {
                return f(e, t, r);
              },
              n != null ? n : void 0,
              {
                deferSignalFlush: !0,
                writePlaceholder: function (t) {
                  return (
                    (a = o(
                      "WAWebInboundMsgRowPlaceholder",
                    ).toInboundMsgRowPlaceholder(t)),
                    o("WAWebMessageProcessPlaceholder").wouldRenderPlaceholder(
                      t,
                    )
                  );
                },
              },
            );
          return { decryptResult: i, parts: r, placeholder: a };
        })),
        p.apply(this, arguments)
      );
    }
    function _(e, t) {
      e.msgInfo.offline != null &&
        o(
          "WAWebOfflineHandler",
        ).OfflineMessageHandler.processMessageDecryptResult(t.result);
    }
    function f(e, t, n) {
      return g.apply(this, arguments);
    }
    function g() {
      return (
        (g = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, r) {
          var a = yield o("WAWebHandleMsgProcess").decodeDecryptedProto(e);
          if (a == null) return { hasInactiveMsg: !1 };
          var i = yield o("WAWebHandleMsgProcess").prepareDecryptedMessage(
            e,
            a,
          );
          return i == null
            ? { hasInactiveMsg: !1 }
            : (i.renderableMsgs.forEach(
                o("WAWebMessageProcessRenderable").cacheMsmsgDecryptData,
              ),
              yield (s || (s = n("Promise"))).all(
                o("WAWebHandleMsgProcess").startCryptoStateInstalls(i),
              ),
              r.push({
                encIndex: t,
                prepared: o("WAWebHandleMsgProcess").withoutCryptoStateInstalls(
                  i,
                ),
              }),
              {
                hasInactiveMsg: o(
                  "WAWebHandleMsgProcess",
                ).hasInactiveRenderableMsg(i.renderableMsgs),
                isOrphanAddon: yield h(i),
              });
        })),
        g.apply(this, arguments)
      );
    }
    function h(e) {
      return y.apply(this, arguments);
    }
    function y() {
      return (
        (y = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          return o("WAWebInboundMsgPersistedQueue").hasUnwrittenInboundMsgs() ||
            o("WAWebInboundMsgDrain").hasUndrainedInboundMsgs()
            ? !1
            : o("WAWebHandleMsgProcess").isOrphanAddonMessage(e.renderableMsgs);
        })),
        y.apply(this, arguments)
      );
    }
    function C(e) {
      return b.apply(this, arguments);
    }
    function b() {
      return (
        (b = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          if (
            (yield o("WAPromiseReduce").promiseReduce(
              e,
              (function () {
                var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                  function* (e, t) {
                    var n = t.prepared;
                    yield o("WAWebHandleMsgProcess").applyPreparedMessage(n);
                  },
                );
                return function (t, n) {
                  return e.apply(this, arguments);
                };
              })(),
              void 0,
            ),
            !o("WAWebInboundMsgPersistedQueue").hasUnwrittenInboundMsgs())
          ) {
            var t = o("WAWebSignalProtocolStore").getSignalProtocolStore();
            (t.hasPendingPersistWrites() &&
              (yield o("WAWebGetMessageCache")
                .getMessageCache()
                .checkpointQueueWait()),
              yield t.flushBufferToDiskIfNotMemOnlyMode());
          }
        })),
        b.apply(this, arguments)
      );
    }
    function v(e, t, n, r) {
      var a,
        i,
        l = e.msgInfo,
        s = e.msgMeta,
        u = o("WATimeUtils").unixTimeMs();
      return {
        addedAtMs: u,
        attemptCount: 0,
        changedAtMs: u,
        chatKey: R(e),
        priority: o("WAWebInboundMsgQueueRow").InboundRowPriority.NORMAL,
        row: o("WAWebInboundMsgRowCodec").encodeInboundMsgRow({
          clientReceivedTsMillis:
            (a = l.clientReceivedTsMillis) != null ? a : u,
          intake: {
            hostedBizEncStateMismatch: l.hostedBizEncStateMismatch === !0,
            offline: (i = l.offline) != null ? i : null,
            senderOrRecipientAccountTypeHosted:
              l.senderOrRecipientAccountTypeHosted === !0,
          },
          isGroupStatusStanza: s.isGroupStatus === !0,
          isStatusStanza: s.isStatusStanza === !0,
          msgProcessStartTsMillis: l.msgProcessStartTsMillis,
          node: t,
          parts: n.map(function (e) {
            var t = e.encIndex,
              n = e.prepared;
            return {
              encIndex: t,
              plaintext: n.decodedPlaintext,
              quarantineAction: n.quarantineAction,
              scheduledMsgViewMode: n.scheduledMsgViewMode,
            };
          }),
          placeholder: r,
        }),
      };
    }
    function S(e, t, n, r) {
      var o = e.msgInfo,
        a = e.msgMeta;
      return {
        lidMetadataUpdates: r,
        msgInfo: o,
        msgMeta: a,
        placeholder: n,
        prepared: t.map(function (e) {
          var t = e.prepared;
          return t;
        }),
      };
    }
    function R(e) {
      var t = e.msgInfo;
      return t.type === o("WAWebHandleMsgTypes").MESSAGE_TYPE.OTHER_BROADCAST ||
        t.type === o("WAWebHandleMsgTypes").MESSAGE_TYPE.PEER_BROADCAST
        ? null
        : o("WAWebInboundMsgChatKey").toInboundMsgChatKey(t.chat);
    }
    function L(e) {
      var t = e.msgInfo,
        n = e.msgMeta;
      return {
        kind: "immediate",
        send: function () {
          return o("WAWebMessageReceiveFlow").trackMessageReceiveReceipt(
            t.externalId,
            o("WAWebHandleMsgSendReceipt").sendReceipt(t, n, {
              result: o("WAWebHandleMsgTypes").E2EProcessResult.BACKFILL,
            }),
            o("WAWebHandleMsgTypes").E2EProcessResult.BACKFILL,
            "inbound_commit",
          );
        },
      };
    }
    function E(e, t) {
      var n = e.msgInfo,
        r = e.msgMeta;
      return o("WAWebHandleMsgDecryptResult").shouldSendImmediateReceipt(e, t)
        ? {
            kind: "immediate",
            onceDrained:
              n.type === o("WAWebHandleMsgTypes").MESSAGE_TYPE.PEER_BROADCAST &&
              t.result === o("WAWebHandleMsgTypes").E2EProcessResult.RETRY,
            send: function () {
              return o("WAWebMessageReceiveFlow").trackMessageReceiveReceipt(
                n.externalId,
                o("WAWebHandleMsgSendReceipt").sendReceipt(n, r, t, {
                  canNack: o("WAWebHandleMsgDecryptResult").canNackMessage(e),
                  sendsGroupAgentDeliveryReceipt: o(
                    "WAWebHandleMsgDecryptResult",
                  ).sendsGroupAgentDeliveryReceipt(e, t),
                }),
                t.result,
                "inbound_commit",
              );
            },
          }
        : {
            kind: "aggregated",
            receiptInfo: {
              author: n.author,
              externalId: n.externalId,
              from: o("WAWebMsgProcessingApiUtils").getFrom(n),
              receiptClass: o(
                "WAWebDeliveryReceiptClassUtils",
              ).getDeliveryReceiptClass(
                o("WAWebMsgProcessingApiUtils").getFrom(n),
                r,
              ),
            },
          };
    }
    l.intakeInboundMsg = u;
  },
  98,
);
