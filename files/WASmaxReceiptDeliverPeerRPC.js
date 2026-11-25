__d(
  "WASmaxReceiptDeliverPeerRPC",
  [
    "WAResultOrError",
    "WASmaxInReceiptEnums",
    "WASmaxInReceiptHSMErrorTypeMixin",
    "WASmaxInReceiptKeyBundleMixin",
    "WASmaxInReceiptOfflineMixin",
    "WASmaxInReceiptRegistrationIDMixin",
    "WASmaxInReceiptRetryTypeMixin",
    "WASmaxInReceiptServerErrorTypeMixin",
    "WASmaxInReceiptSingleMixin",
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
          o("WASmaxRpcUtils").errorMessageRpcParsing("DeliverPeer", {
            Request: t,
          }),
        );
      return {
        parsedRequest: t.value,
        makeDeliverPeerResponseSuccess: function () {
          return u(e);
        },
      };
    }
    function s(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "receipt");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").attrStanzaId(e, "id");
      if (!n.success) return n;
      var r = o("WASmaxParseJid").attrJidEnum(
        e,
        "from",
        o("WASmaxInReceiptEnums").USERJID_DEVICEJID,
      );
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrIntRange,
        e,
        "t",
        0,
        void 0,
      );
      if (!a.success) return a;
      var i = o("WASmaxInReceiptOfflineMixin").parseOfflineMixin(e),
        l = c(e);
      return l.success
        ? o("WAResultOrError").makeResult({
            id: n.value,
            from: r.value,
            t: a.value,
            offlineMixin: i.success ? i.value : null,
            deliverPeerReceiptType: l.value,
          })
        : l;
    }
    function u(e) {
      var t = o("WASmaxParseReference").attrFromReference(
        o("WASmaxParseUtils").attrStanzaId,
        e,
        ["id"],
      );
      if (!t.success)
        throw new (o("WASmaxParsingFailure").SmaxParsingFailure)(t.error);
      var n = o("WASmaxParseReference").attrFromReference(
        o("WASmaxParseJid").attrJidEnum,
        e,
        ["from"],
        o("WASmaxInReceiptEnums").USERJID_DEVICEJID,
      );
      if (!n.success)
        throw new (o("WASmaxParsingFailure").SmaxParsingFailure)(n.error);
      var r = o("WASmaxParseReference").attrFromReference(
        o("WASmaxParseUtils").attrString,
        e,
        ["type"],
      );
      if (!r.success)
        throw new (o("WASmaxParsingFailure").SmaxParsingFailure)(r.error);
      var a = o("WASmaxJsx").smax("ack", {
        id: o("WAWap").STANZA_ID(t.value),
        class: "receipt",
        to: o("WAWap").JID(n.value),
        type: o("WAWap").CUSTOM_STRING(r.value),
      });
      return a;
    }
    function c(e) {
      var t = f(e);
      if (t.success)
        return o("WAResultOrError").makeResult({
          name: "DeliverPeerPeerRetry",
          value: t.value,
        });
      var n = g(e);
      if (n.success)
        return o("WAResultOrError").makeResult({
          name: "DeliverPeerRead",
          value: n.value,
        });
      var r = d(e);
      if (r.success)
        return o("WAResultOrError").makeResult({
          name: "DeliverPeerServerError",
          value: r.value,
        });
      var a = _(e);
      if (a.success)
        return o("WAResultOrError").makeResult({
          name: "DeliverPeerError",
          value: a.value,
        });
      var i = p(e);
      return i.success
        ? o("WAResultOrError").makeResult({
            name: "DeliverPeerDelivery",
            value: i.value,
          })
        : o("WASmaxParseUtils").errorMixinDisjunction(
            e,
            ["PeerRetry", "Read", "ServerError", "Error", "Delivery"],
            [t, n, r, a, i],
          );
    }
    function d(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "receipt");
      if (!t.success) return t;
      var n = o("WASmaxInReceiptSingleMixin").parseSingleMixin(e);
      if (!n.success) return n;
      var r = m(e);
      return r.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends({}, n.value, r.value),
          )
        : r;
    }
    function m(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "receipt");
      if (!t.success) return t;
      var n = o(
        "WASmaxInReceiptServerErrorTypeMixin",
      ).parseServerErrorTypeMixin(e);
      if (!n.success) return n;
      var r = b(e);
      return r.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends({}, n.value, r.value),
          )
        : r;
    }
    function p(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "receipt");
      if (!t.success) return t;
      var n = o("WASmaxInReceiptSingleMixin").parseSingleMixin(e);
      if (!n.success) return n;
      var r = y(e);
      return r.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends({}, n.value, r.value),
          )
        : r;
    }
    function _(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "receipt");
      if (!t.success) return t;
      var n = o("WASmaxInReceiptSingleMixin").parseSingleMixin(e);
      if (!n.success) return n;
      var r = o("WASmaxInReceiptHSMErrorTypeMixin").parseHSMErrorTypeMixin(e);
      return r.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends({}, n.value, r.value),
          )
        : r;
    }
    function f(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "receipt");
      if (!t.success) return t;
      var n = C(e);
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
    function g(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "receipt");
      if (!t.success) return t;
      var n = o("WASmaxInReceiptSingleMixin").parseSingleMixin(e);
      if (!n.success) return n;
      var r = h(e);
      return r.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends({}, n.value, r.value),
          )
        : r;
    }
    function h(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "receipt");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        e,
        "type",
        "hist_sync",
      );
      return n.success ? o("WAResultOrError").makeResult({ type: n.value }) : n;
    }
    function y(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "receipt");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        e,
        "type",
        "peer_msg",
      );
      return n.success ? o("WAResultOrError").makeResult({ type: n.value }) : n;
    }
    function C(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "receipt");
      if (!t.success) return t;
      var n = o("WASmaxInReceiptRetryTypeMixin").parseRetryTypeMixin(e);
      if (!n.success) return n;
      var r = b(e);
      return r.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends({}, n.value, r.value),
          )
        : r;
    }
    function b(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "receipt");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        e,
        "category",
        "peer",
      );
      return n.success
        ? o("WAResultOrError").makeResult({ category: n.value })
        : n;
    }
    ((l.receiveDeliverPeerRPC = e),
      (l.parseDeliverPeerRequest = s),
      (l.makeDeliverPeerResponseSuccess = u));
  },
  98,
);
