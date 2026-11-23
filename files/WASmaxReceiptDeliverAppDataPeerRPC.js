__d(
  "WASmaxReceiptDeliverAppDataPeerRPC",
  [
    "WAResultOrError",
    "WASmaxAttrs",
    "WASmaxInReceiptKeyBundleMixin",
    "WASmaxInReceiptOfflineMixin",
    "WASmaxInReceiptRegistrationIDMixin",
    "WASmaxInReceiptRetryTypeMixin",
    "WASmaxJsx",
    "WASmaxParseJid",
    "WASmaxParseReference",
    "WASmaxParseUtils",
    "WASmaxParsingFailure",
    "WASmaxRpcUtils",
    "WAWap",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = s(e);
      if (!t.success)
        throw new (o("WASmaxParsingFailure").SmaxParsingFailure)(
          o("WASmaxRpcUtils").errorMessageRpcParsing("DeliverAppDataPeer", {
            Request: t,
          }),
        );
      return {
        parsedRequest: t.value,
        makeDeliverAppDataPeerResponseSuccess: function () {
          return c(e);
        },
      };
    }
    function s(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "receipt");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").attrStanzaId(e, "id");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrIntRange,
        e,
        "t",
        1577865600,
        4102473600,
      );
      if (!r.success) return r;
      var a = o("WASmaxParseJid").attrDeviceJid(e, "from");
      if (!a.success) return a;
      var i = o("WASmaxInReceiptOfflineMixin").parseOfflineMixin(e),
        l = u(e);
      return l.success
        ? o("WAResultOrError").makeResult({
            id: n.value,
            t: r.value,
            from: a.value,
            offlineMixin: i.success ? i.value : null,
            peerDeliverAppDataPeerRetryOrDeliverAppDataPeerDeliveryMixinGroup:
              l.value,
          })
        : l;
    }
    function u(e) {
      var t = m(e);
      if (t.success)
        return o("WAResultOrError").makeResult({
          name: "DeliverAppDataPeerPeerRetry",
          value: t.value,
        });
      var n = d(e);
      return n.success
        ? o("WAResultOrError").makeResult({
            name: "DeliverAppDataPeerPeerDelivery",
            value: n.value,
          })
        : o("WASmaxParseUtils").errorMixinDisjunction(
            e,
            ["PeerRetry", "PeerDelivery"],
            [t, n],
          );
    }
    function c(e) {
      var t = o("WASmaxParseReference").attrFromReference(
        o("WASmaxParseUtils").attrStanzaId,
        e,
        ["id"],
      );
      if (!t.success)
        throw new (o("WASmaxParsingFailure").SmaxParsingFailure)(t.error);
      var n = o("WASmaxParseReference").attrFromReference(
        o("WASmaxParseJid").attrDeviceJid,
        e,
        ["from"],
      );
      if (!n.success)
        throw new (o("WASmaxParsingFailure").SmaxParsingFailure)(n.error);
      var r = o("WASmaxParseReference").optionalAttrFromReference(
        o("WASmaxParseUtils").attrString,
        e,
        ["type"],
      );
      if (!r.success)
        throw new (o("WASmaxParsingFailure").SmaxParsingFailure)(r.error);
      var a = o("WASmaxJsx").smax("ack", {
        id: o("WAWap").STANZA_ID(t.value),
        class: "receipt",
        to: o("WAWap").DEVICE_JID(n.value),
        type: o("WASmaxAttrs").OPTIONAL(o("WAWap").CUSTOM_STRING, r.value),
      });
      return a;
    }
    function d(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "receipt");
      if (!t.success) return t;
      var n = _(e);
      return (n.success, n);
    }
    function m(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "receipt");
      if (!t.success) return t;
      var n = p(e);
      if (!n.success) return n;
      var r = o("WASmaxInReceiptRegistrationIDMixin").parseRegistrationIDMixin(
        e,
      );
      if (!r.success) return r;
      var a = o("WASmaxInReceiptKeyBundleMixin").parseKeyBundleMixin(e);
      return o("WAResultOrError").makeResult(
        babelHelpers.extends({}, n.value, r.value, {
          keyBundleMixin: a.success ? a.value : null,
        }),
      );
    }
    function p(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "receipt");
      if (!t.success) return t;
      var n = o("WASmaxInReceiptRetryTypeMixin").parseRetryTypeMixin(e);
      if (!n.success) return n;
      var r = _(e);
      return r.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends({}, n.value, r.value),
          )
        : r;
    }
    function _(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "receipt");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        e,
        "category",
        "peer_appdata",
      );
      return n.success
        ? o("WAResultOrError").makeResult({ category: n.value })
        : n;
    }
    ((l.receiveDeliverAppDataPeerRPC = e),
      (l.parseDeliverAppDataPeerRequest = s),
      (l.parsePeerDeliverAppDataPeerRetryOrDeliverAppDataPeerDeliveryMixinGroup =
        u),
      (l.makeDeliverAppDataPeerResponseSuccess = c),
      (l.parseDeliverAppDataPeerPeerDeliveryMixin = d),
      (l.parseDeliverAppDataPeerPeerRetryMixin = m),
      (l.parseAppDataPeerRetryTypeMixin = p),
      (l.parseAppDataPeerCategoryMixin = _));
  },
  98,
);
