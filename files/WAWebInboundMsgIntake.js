__d(
  "WAWebInboundMsgIntake",
  [
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
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    async function s(t) {
      var n = t.input,
        a = t.lidMetadataUpdates,
        i = t.msgKey,
        l = t.node,
        s = t.presetPlaceholder;
      if (s != null)
        return (
          o("WAWebInboundMsgPersistedQueue").queueInboundMsgRow({
            entity: f(n, l, [], s),
            prepared: g(n, [], s, a),
            receipt: y(n),
            stanzaId: n.msgInfo.externalId,
          }),
          null
        );
      var m = await c(t),
        p = m.decryptResult,
        h = m.parts,
        b = m.placeholder;
      if (!u(m)) {
        o(
          "WAWebDecryptsOutsideInboundMsgRows",
        ).noteDecryptOutsideInboundMsgRows();
        try {
          (await o("WAWebInboundMsgLidMetadata").writeInboundMsgLidMetadata(a),
            await _(h));
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
          await o("WAWebDBCreateLidPnMappings").flushLidPnMappingsToDb(),
          await o("WAWebHandleMsgDecryptResult").handleDecryptResult({
            decryptResult: p,
            input: n,
            msgKey: i,
            node: l,
          }),
          null
        );
      }
      return (
        p.result !== o("WAWebHandleMsgTypes").E2EProcessResult.SUCCESS &&
          o("WAWebDBReportingTokenUtils").maybeStoreReportingTag({
            incomingMsgReportingTokenInfo: n.reportingTokenInfo,
            msgKey: i,
            msgTs: n.msgInfo.ts,
            stanzaId: n.msgInfo.externalId,
          }),
        o("WAWebInboundMsgPersistedQueue").queueInboundMsgRow({
          entity: f(n, l, h, b),
          prepared: g(n, h, b, a),
          receipt: C(n, p),
          stanzaId: n.msgInfo.externalId,
        }),
        d(n, p),
        null
      );
    }
    function u(e) {
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
    async function c(e) {
      var t = e.input,
        n = e.sessionScope,
        r = [],
        a = null,
        i = await o("WAWebMsgProcessingDecryptApi").decryptE2EPayload(
          t,
          function (e, t) {
            return m(e, t, r);
          },
          n != null ? n : void 0,
          {
            deferSignalFlush: !0,
            writePlaceholder: function (t) {
              return (
                (a = o(
                  "WAWebInboundMsgRowPlaceholder",
                ).toInboundMsgRowPlaceholder(t)),
                o("WAWebMessageProcessPlaceholder").wouldRenderPlaceholder(t)
              );
            },
          },
        );
      return { decryptResult: i, parts: r, placeholder: a };
    }
    function d(e, t) {
      e.msgInfo.offline != null &&
        o(
          "WAWebOfflineHandler",
        ).OfflineMessageHandler.processMessageDecryptResult(t.result);
    }
    async function m(e, t, n) {
      var r = await o("WAWebHandleMsgProcess").decodeDecryptedProto(e);
      if (r == null) return { hasInactiveMsg: !1 };
      var a = await o("WAWebHandleMsgProcess").prepareDecryptedMessage(e, r);
      return a == null
        ? { hasInactiveMsg: !1 }
        : (a.renderableMsgs.forEach(
            o("WAWebMessageProcessRenderable").cacheMsmsgDecryptData,
          ),
          await Promise.all(
            o("WAWebHandleMsgProcess").startCryptoStateInstalls(a),
          ),
          n.push({
            encIndex: t,
            prepared: o("WAWebHandleMsgProcess").withoutCryptoStateInstalls(a),
          }),
          {
            hasInactiveMsg: o("WAWebHandleMsgProcess").hasInactiveRenderableMsg(
              a.renderableMsgs,
            ),
            isOrphanAddon: await p(a),
          });
    }
    async function p(e) {
      return o("WAWebInboundMsgPersistedQueue").hasUnwrittenInboundMsgs() ||
        o("WAWebInboundMsgDrain").hasUndrainedInboundMsgs()
        ? !1
        : o("WAWebHandleMsgProcess").isOrphanAddonMessage(e.renderableMsgs);
    }
    async function _(e) {
      if (
        (await o("WAPromiseReduce").promiseReduce(
          e,
          async function (e, t) {
            var n = t.prepared;
            await o("WAWebHandleMsgProcess").applyPreparedMessage(n);
          },
          void 0,
        ),
        !o("WAWebInboundMsgPersistedQueue").hasUnwrittenInboundMsgs())
      ) {
        var t = o("WAWebSignalProtocolStore").getSignalProtocolStore();
        (t.hasPendingPersistWrites() &&
          (await o("WAWebGetMessageCache")
            .getMessageCache()
            .checkpointQueueWait()),
          await t.flushBufferToDiskIfNotMemOnlyMode());
      }
    }
    function f(e, t, n, r) {
      var a,
        i,
        l = e.msgInfo,
        s = e.msgMeta,
        u = o("WATimeUtils").unixTimeMs();
      return {
        addedAtMs: u,
        attemptCount: 0,
        changedAtMs: u,
        chatKey: h(e),
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
    function g(e, t, n, r) {
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
    function h(e) {
      var t = e.msgInfo;
      return t.type === o("WAWebHandleMsgTypes").MESSAGE_TYPE.OTHER_BROADCAST ||
        t.type === o("WAWebHandleMsgTypes").MESSAGE_TYPE.PEER_BROADCAST
        ? null
        : o("WAWebInboundMsgChatKey").toInboundMsgChatKey(t.chat);
    }
    function y(e) {
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
    function C(e, t) {
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
    l.intakeInboundMsg = s;
  },
  98,
);
