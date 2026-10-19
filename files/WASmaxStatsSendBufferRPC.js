__d(
  "WASmaxStatsSendBufferRPC",
  [
    "WAComms",
    "WAResultOrError",
    "WASmaxJsx",
    "WASmaxMixins",
    "WASmaxParseReference",
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
          var n = m(e),
            r = yield o("WAComms").sendSmaxStanza(n, t),
            a = d(r, n);
          if (a.success)
            return { name: "SendBufferResponseSuccess", value: a.value };
          var i = u(r, n);
          if (i.success)
            return { name: "SendBufferResponseErrorNoRetry", value: i.value };
          var l = c(r, n);
          if (l.success)
            return { name: "SendBufferResponseErrorRetry", value: l.value };
          throw new (o("WASmaxParsingFailure").SmaxParsingFailure)(
            o("WASmaxRpcUtils").errorMessageRpcParsing("SendBuffer", {
              Success: a,
              ErrorNoRetry: i,
              ErrorRetry: l,
            }),
          );
        })),
        s.apply(this, arguments)
      );
    }
    function u(e, t) {
      var n = o("WASmaxParseUtils").assertTag(e, "iq");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").flattenedChildWithTag(e, "error");
      if (!r.success) return r;
      var a = p(e, t);
      if (!a.success) return a;
      var i = g(r.value);
      return i.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends({}, a.value, {
              errorSendBufferNoRetryError: i.value,
            }),
          )
        : i;
    }
    function c(e, t) {
      var n = o("WASmaxParseUtils").assertTag(e, "iq");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").flattenedChildWithTag(e, "error");
      if (!r.success) return r;
      var a = _(r.value);
      if (!a.success) return a;
      var i = p(e, t);
      return i.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends(
              { errorIQErrorServiceUnavailableMixin: a.value },
              i.value,
            ),
          )
        : i;
    }
    function d(e, t) {
      var n = o("WASmaxParseUtils").assertTag(e, "iq");
      if (!n.success) return n;
      var r = f(e, t);
      return (r.success, r);
    }
    function m(e) {
      var t = e.addT,
        n = e.addElementValue,
        r = y(
          o("WASmaxJsx").smax(
            "iq",
            { xmlns: "w:stats", to: o("WAWap").S_WHATSAPP_NET },
            o("WASmaxJsx").smax("add", { t: o("WAWap").INT(t) }, n),
          ),
        );
      return r;
    }
    function p(e, t) {
      var n = o("WASmaxParseUtils").assertTag(e, "iq");
      if (!n.success) return n;
      var r = o("WASmaxParseReference").attrStringFromReference(t, ["id"]);
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        e,
        "id",
        r.value,
      );
      if (!a.success) return a;
      var i = o("WASmaxParseReference").attrStringFromReference(t, ["to"]);
      if (!i.success) return i;
      var l = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        e,
        "from",
        i.value,
      );
      if (!l.success) return l;
      var s = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        e,
        "type",
        "error",
      );
      return s.success ? o("WAResultOrError").makeResult({ type: s.value }) : s;
    }
    function _(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "error");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        e,
        "text",
        "service-unavailable",
      );
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrInt,
        e,
        "code",
        503,
      );
      return r.success
        ? o("WAResultOrError").makeResult({ text: n.value, code: r.value })
        : r;
    }
    function f(e, t) {
      var n = o("WASmaxParseUtils").assertTag(e, "iq");
      if (!n.success) return n;
      var r = o("WASmaxParseReference").attrStringFromReference(t, ["id"]);
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        e,
        "id",
        r.value,
      );
      if (!a.success) return a;
      var i = o("WASmaxParseReference").attrStringFromReference(t, ["to"]);
      if (!i.success) return i;
      var l = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        e,
        "from",
        i.value,
      );
      if (!l.success) return l;
      var s = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        e,
        "type",
        "result",
      );
      return s.success ? o("WAResultOrError").makeResult({ type: s.value }) : s;
    }
    function g(e) {
      var t = C(e);
      if (t.success)
        return o("WAResultOrError").makeResult({
          name: "IQErrorBadRequest",
          value: t.value,
        });
      var n = S(e);
      if (n.success)
        return o("WAResultOrError").makeResult({
          name: "IQErrorNotAcceptable",
          value: n.value,
        });
      var r = b(e);
      return r.success
        ? o("WAResultOrError").makeResult({
            name: "IQErrorFeatureNotImplemented",
            value: r.value,
          })
        : o("WASmaxParseUtils").errorMixinDisjunction(
            e,
            [
              "IQErrorBadRequest",
              "IQErrorNotAcceptable",
              "IQErrorFeatureNotImplemented",
            ],
            [t, n, r],
          );
    }
    function h() {
      var e = o("WASmaxJsx").smax("iq", {
        id: o("WAWap").generateId(),
        type: "set",
      });
      return e;
    }
    function y(e) {
      var t = h();
      return o("WASmaxMixins").mergeStanzas(e, t);
    }
    function C(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "error");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        e,
        "text",
        "bad-request",
      );
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrInt,
        e,
        "code",
        400,
      );
      return r.success
        ? o("WAResultOrError").makeResult({ text: n.value, code: r.value })
        : r;
    }
    function b(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "error");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        e,
        "text",
        "feature-not-implemented",
      );
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrInt,
        e,
        "code",
        501,
      );
      return r.success
        ? o("WAResultOrError").makeResult({ text: n.value, code: r.value })
        : r;
    }
    function v(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "field");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").attrString(e, "name");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").attrString(e, "reason");
      return r.success
        ? o("WAResultOrError").makeResult({ name: n.value, reason: r.value })
        : r;
    }
    function S(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "error");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").optionalChildWithTag(e, "field", v);
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        e,
        "text",
        "not-acceptable",
      );
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrInt,
        e,
        "code",
        406,
      );
      return a.success
        ? o("WAResultOrError").makeResult({
            text: r.value,
            code: a.value,
            field: n.value,
          })
        : a;
    }
    ((l.sendSendBufferRPC = e),
      (l.parseSendBufferResponseErrorNoRetry = u),
      (l.parseSendBufferResponseErrorRetry = c),
      (l.parseSendBufferResponseSuccess = d),
      (l.makeSendBufferRequest = m),
      (l.parseIQErrorResponseMixin = p),
      (l.parseIQErrorServiceUnavailableMixin = _),
      (l.parseIQResultResponseMixin = f),
      (l.parseSendBufferNoRetryError = g),
      (l.mergeBaseIQSetRequestMixin = y),
      (l.parseIQErrorBadRequestMixin = C),
      (l.parseIQErrorFeatureNotImplementedMixin = b),
      (l.parseIQErrorNotAcceptableField = v),
      (l.parseIQErrorNotAcceptableMixin = S));
  },
  98,
);
