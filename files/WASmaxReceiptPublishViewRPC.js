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
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      return s.apply(this, arguments);
    }
    function s() {
      return (
        (s = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = d(e),
            r = yield o("WAComms").sendSmaxStanza(n, t),
            a = u(r, n);
          if (a.success)
            return { name: "PublishViewResponseServerError", value: a.value };
          var i = c(r, n);
          if (i.success)
            return { name: "PublishViewResponseSuccess", value: i.value };
          throw new (o("WASmaxParsingFailure").SmaxParsingFailure)(
            o("WASmaxRpcUtils").errorMessageRpcParsing("PublishView", {
              ServerError: a,
              Success: i,
            }),
          );
        })),
        s.apply(this, arguments)
      );
    }
    function u(e, t) {
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
    function c(e, t) {
      var n = o("WASmaxParseUtils").assertTag(e, "ack");
      if (!n.success) return n;
      var r = o("WASmaxInReceiptPublishSuccessMixin").parsePublishSuccessMixin(
        e,
        t,
      );
      return (r.success, r);
    }
    function d(e) {
      var t = _(g(y(o("WASmaxJsx").smax("receipt", null), e)), e);
      return t;
    }
    function m(e) {
      var t = e.itemServerId,
        n = o("WASmaxJsx").smax("item", { server_id: o("WAWap").INT(t) });
      return n;
    }
    function p(e) {
      var t = e.itemArgs,
        n = e.receiptId,
        r = o("WASmaxJsx").smax(
          "receipt",
          { id: o("WAWap").STANZA_ID(n) },
          o("WASmaxJsx").smax(
            "list",
            null,
            o("WASmaxChildren").REPEATED_CHILD(m, t, 0, 255),
          ),
        );
      return r;
    }
    function _(e, t) {
      var n = p(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    function f() {
      var e = o("WASmaxJsx").smax("receipt", { type: "view" });
      return e;
    }
    function g(e) {
      var t = f();
      return o("WASmaxMixins").mergeStanzas(e, t);
    }
    function h(e) {
      var t = e.receiptTo,
        n = e.hasStatusClass,
        r = o("WASmaxMixins").optionalMerge(
          o("WASmaxOutReceiptStatusClassMixin").mergeStatusClassMixin,
          o("WASmaxJsx").smax("receipt", { to: o("WAWap").JID(t) }),
          n,
        );
      return r;
    }
    function y(e, t) {
      var n = h(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    ((l.sendPublishViewRPC = e),
      (l.parsePublishViewResponseServerError = u),
      (l.parsePublishViewResponseSuccess = c),
      (l.makePublishViewRequest = d),
      (l.makeSenderAggregatedViewPublishListItem = m),
      (l.mergeSenderAggregatedViewPublishMixin = _),
      (l.mergeViewTypeMixin = g),
      (l.mergeNewsletterMixin = y));
  },
  98,
);
