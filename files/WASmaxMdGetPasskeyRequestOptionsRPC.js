__d(
  "WASmaxMdGetPasskeyRequestOptionsRPC",
  [
    "WAComms",
    "WAResultOrError",
    "WASmaxInMdIQErrorInternalServerErrorMixin",
    "WASmaxInMdIQErrorResponseMixin",
    "WASmaxInMdIQResultResponseMixin",
    "WASmaxInMdPasskeyRequestOptionsMixin",
    "WASmaxJsx",
    "WASmaxOutMdBaseIQGetRequestMixin",
    "WASmaxParseUtils",
    "WASmaxParsingFailure",
    "WASmaxRpcUtils",
    "WAWap",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return s.apply(this, arguments);
    }
    function s() {
      return (
        (s = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = d(),
            n = yield o("WAComms").sendSmaxStanza(t, e),
            r = c(n, t);
          if (r.success)
            return {
              name: "GetPasskeyRequestOptionsResponseSuccess",
              value: r.value,
            };
          var a = u(n, t);
          if (a.success)
            return {
              name: "GetPasskeyRequestOptionsResponseError",
              value: a.value,
            };
          throw new (o("WASmaxParsingFailure").SmaxParsingFailure)(
            o("WASmaxRpcUtils").errorMessageRpcParsing(
              "GetPasskeyRequestOptions",
              { Success: r, Error: a },
            ),
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
      var a = o(
        "WASmaxInMdIQErrorInternalServerErrorMixin",
      ).parseIQErrorInternalServerErrorMixin(r.value);
      if (!a.success) return a;
      var i = o("WASmaxInMdIQErrorResponseMixin").parseIQErrorResponseMixin(
        e,
        t,
      );
      return i.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends(
              { errorIQErrorInternalServerErrorMixin: a.value },
              i.value,
            ),
          )
        : i;
    }
    function c(e, t) {
      var n = o("WASmaxParseUtils").assertTag(e, "iq");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").flattenedChildWithTag(
        e,
        "passkey_request_options",
      );
      if (!r.success) return r;
      var a = o(
        "WASmaxInMdPasskeyRequestOptionsMixin",
      ).parsePasskeyRequestOptionsMixin(r.value);
      if (!a.success) return a;
      var i = o("WASmaxInMdIQResultResponseMixin").parseIQResultResponseMixin(
        e,
        t,
      );
      return i.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends(
              { passkeyRequestOptionsPasskeyRequestOptionsMixin: a.value },
              i.value,
            ),
          )
        : i;
    }
    function d() {
      var e = o("WASmaxOutMdBaseIQGetRequestMixin").mergeBaseIQGetRequestMixin(
        o("WASmaxJsx").smax(
          "iq",
          { to: o("WAWap").S_WHATSAPP_NET, xmlns: "md" },
          o("WASmaxJsx").smax("passkey_request_options", null),
        ),
      );
      return e;
    }
    ((l.sendGetPasskeyRequestOptionsRPC = e),
      (l.parseGetPasskeyRequestOptionsResponseError = u),
      (l.parseGetPasskeyRequestOptionsResponseSuccess = c),
      (l.makeGetPasskeyRequestOptionsRequest = d));
  },
  98,
);
