__d(
  "WASmaxReceiptPublishViewRPC",
  [
    "WAComms",
    "WAResultOrError",
    "WASmaxChildren",
    "WASmaxInReceiptPublishSuccessMixin",
    "WASmaxJsx",
    "WASmaxMixins",
    "WASmaxOutReceiptStatusClassMixin",
    "WASmaxParseUtils",
    "WASmaxParsingFailure",
    "WASmaxRpcUtils",
    "WAWap",
  ],
  function (t, n, r, o, a, i, l) {
    async function e(e, t) {
      var n = c(e),
        r = await o("WAComms").sendSmaxStanza(n, t),
        a = s(r, n);
      if (a.success)
        return { name: "PublishViewResponseServerError", value: a.value };
      var i = u(r, n);
      if (i.success)
        return { name: "PublishViewResponseSuccess", value: i.value };
      throw new (o("WASmaxParsingFailure").SmaxParsingFailure)(
        o("WASmaxRpcUtils").errorMessageRpcParsing("PublishView", {
          ServerError: a,
          Success: i,
        }),
      );
    }
    function s(e, t) {
      var n = o("WASmaxParseUtils").assertTag(e, "ack");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        e,
        "error",
        "500",
      );
      if (!r.success) return r;
      var a = o("WASmaxInReceiptPublishSuccessMixin").parsePublishSuccessMixin(
        e,
        t,
      );
      return a.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends({ error: r.value }, a.value),
          )
        : a;
    }
    function u(e, t) {
      var n = o("WASmaxParseUtils").assertTag(e, "ack");
      if (!n.success) return n;
      var r = o("WASmaxInReceiptPublishSuccessMixin").parsePublishSuccessMixin(
        e,
        t,
      );
      return (r.success, r);
    }
    function c(e) {
      var t = p(f(h(o("WASmaxJsx").smax("receipt", null), e)), e);
      return t;
    }
    function d(e) {
      var t = e.itemServerId,
        n = o("WASmaxJsx").smax("item", { server_id: o("WAWap").INT(t) });
      return n;
    }
    function m(e) {
      var t = e.itemArgs,
        n = e.receiptId,
        r = o("WASmaxJsx").smax(
          "receipt",
          { id: o("WAWap").STANZA_ID(n) },
          o("WASmaxJsx").smax(
            "list",
            null,
            o("WASmaxChildren").REPEATED_CHILD(d, t, 0, 255),
          ),
        );
      return r;
    }
    function p(e, t) {
      var n = m(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    function _() {
      var e = o("WASmaxJsx").smax("receipt", { type: "view" });
      return e;
    }
    function f(e) {
      var t = _();
      return o("WASmaxMixins").mergeStanzas(e, t);
    }
    function g(e) {
      var t = e.receiptTo,
        n = e.hasStatusClass,
        r = o("WASmaxMixins").optionalMerge(
          o("WASmaxOutReceiptStatusClassMixin").mergeStatusClassMixin,
          o("WASmaxJsx").smax("receipt", { to: o("WAWap").JID(t) }),
          n,
        );
      return r;
    }
    function h(e, t) {
      var n = g(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    ((l.sendPublishViewRPC = e),
      (l.parsePublishViewResponseServerError = s),
      (l.parsePublishViewResponseSuccess = u),
      (l.makePublishViewRequest = c));
  },
  98,
);
