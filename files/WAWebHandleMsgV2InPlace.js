__d(
  "WAWebHandleMsgV2InPlace",
  [
    "WALogger",
    "WAWebHandleMsgDecryptResult",
    "WAWebHandleMsgSendReceipt",
    "WAWebHandleMsgTypes",
    "WAWebMessageReceiveFlow",
    "WAWebMsgProcessingDecryptApi",
    "WAWebMsgType",
    "getErrorSafe",
    "requireDeferred",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = r("requireDeferred")("WAWebHandleMsgProcess").__setRef(
        "WAWebHandleMsgV2InPlace",
      );
    async function u(e) {
      var t = e.input,
        n = e.msgKey,
        r = e.node,
        a = e.sessionScope,
        i = await s.load(),
        l = i.processDecryptedMessageProto,
        u = await o("WAWebMsgProcessingDecryptApi").decryptE2EPayload(
          t,
          l,
          a != null ? a : void 0,
          { awaitMessageWrites: !0 },
        );
      return (
        await o("WAWebHandleMsgDecryptResult").handleDecryptResult({
          decryptResult: u,
          input: t,
          msgKey: n,
          node: r,
        }),
        null
      );
    }
    async function c(t) {
      var n = t.input,
        a = n.msgInfo,
        i = n.msgMeta,
        l = t.placeholderType,
        u = await s.load(),
        c = u.processPlaceholderMsg;
      return (
        await c({
          type: o("WAWebMsgType").MSG_TYPE.CIPHERTEXT,
          msgMeta: i,
          msgInfo: a,
          placeholderType: l,
        }),
        o("WAWebMessageReceiveFlow")
          .trackMessageReceiveReceipt(
            a.externalId,
            o("WAWebHandleMsgSendReceipt").sendReceipt(a, i, {
              result: o("WAWebHandleMsgTypes").E2EProcessResult.BACKFILL,
            }),
            o("WAWebHandleMsgTypes").E2EProcessResult.BACKFILL,
          )
          .catch(function (t) {
            o("WALogger")
              .ERROR(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "sendReceipt failed for an unavailable message processed in place",
                  ])),
              )
              .catching(r("getErrorSafe")(t))
              .sendLogs("send-receipt-backfill-in-place-error", {
                sampling: 0.01,
              });
          }),
        null
      );
    }
    ((l.processMsgInPlace = u), (l.writePlaceholderInPlace = c));
  },
  98,
);
