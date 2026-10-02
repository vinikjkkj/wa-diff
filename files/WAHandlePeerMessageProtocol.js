__d(
  "WAHandlePeerMessageProtocol",
  [
    "WACryptoManagerUtils",
    "WACryptoPkcs7",
    "WAE2E.pb",
    "WALogger",
    "WAReceiptUtils",
    "WAResultOrError",
    "WASmaxReceiptPublishPeerDeliveryRPC",
    "WASmaxReceiptPublishPeerReadRPC",
    "WATransformRetryOrIndividualRegularMixinGroup",
    "decodeProtobuf",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e, s;
    function u(e) {
      var t = e.from,
        n = e.retryOrIndividualRegularMixinGroup;
      return babelHelpers.extends(
        { from: t },
        o(
          "WATransformRetryOrIndividualRegularMixinGroup",
        ).transformRetryOrIndividualRegularMixinGroup(n),
      );
    }
    function c(e, t) {
      var n = e.ciphertext,
        r = e.encType,
        a = e.encVersion,
        i = e.from;
      return o("WACryptoManagerUtils")
        .decryptMsg(r, i, n, t)
        .then(function (e) {
          return e.success
            ? e.value == null
              ? o("WAResultOrError").makeError("missing-content")
              : o("WAResultOrError").makeResult({
                  encVersion: a,
                  plaintext: e.value.plaintext,
                  remoteIdentity: e.value.remoteIdentity,
                })
            : e;
        });
    }
    function d(t) {
      var n = t.decryptedMessage,
        r = n.encVersion,
        a = n.plaintext;
      if (r !== "2")
        return (
          o("WALogger").WARN(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "decodePeerMessage: enc version ",
                " is not supported.",
              ])),
            r,
          ),
          o("WAResultOrError").makeError("unknown-plaintext")
        );
      var i = o("WACryptoPkcs7").unpadPkcs7(a),
        l = o("decodeProtobuf").decodeProtobuf(o("WAE2E.pb").MessageSpec, i);
      return l.protocolMessage == null
        ? (o("WALogger").WARN(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "decodePeerMessage: no protocolMessage.",
              ])),
          ),
          o("WAResultOrError").makeError("missing-protocol-message"))
        : o("WAResultOrError").makeResult(l.protocolMessage);
    }
    function m(e) {
      var t = e.stanzaId,
        n = e.to;
      return o("WASmaxReceiptPublishPeerDeliveryRPC")
        .sendPublishPeerDeliveryRPC({ receiptId: t, receiptTo: n })
        .then(function () {});
    }
    function p(e) {
      var t = e.stanzaId,
        n = e.to;
      return o("WASmaxReceiptPublishPeerReadRPC")
        .sendPublishPeerReadRPC({ receiptId: t, receiptTo: n })
        .then(function () {});
    }
    function _(e, t) {
      var n = e.deviceIdentity,
        r = e.from,
        a = e.retryCount,
        i = e.serverTs,
        l = e.stanzaId;
      return o("WAReceiptUtils").sendRetryReceipt(
        {
          category: "peer",
          externalId: l,
          from: { deviceJid: r, type: "device" },
          participant: null,
          recipient: null,
          retryCount: a,
          ts: i,
          deviceIdentity: n,
        },
        t,
      );
    }
    ((l.parsePeerMessage = u),
      (l.decryptPeerMessage = c),
      (l.decodePeerMessage = d),
      (l.sendPeerMessageReceipt = m),
      (l.sendHistorySyncReceipt = p),
      (l.sendPeerMessageRetryReceipt = _));
  },
  98,
);
