__d(
  "WASmaxMdGetRefRPC",
  [
    "WAComms",
    "WAResultOrError",
    "WASmaxInMdIQErrorInternalServerErrorMixin",
    "WASmaxInMdIQErrorResponseMixin",
    "WASmaxInMdIQResultResponseMixin",
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
            return { name: "GetRefResponseSuccess", value: r.value };
          var a = u(n, t);
          if (a.success) return { name: "GetRefResponseError", value: a.value };
          throw new (o("WASmaxParsingFailure").SmaxParsingFailure)(
            o("WASmaxRpcUtils").errorMessageRpcParsing("GetRef", {
              Success: r,
              Error: a,
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
      var r = o("WASmaxParseUtils").flattenedChildWithTag(e, "ref");
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").contentBytes(r.value);
      if (!a.success) return a;
      var i = o("WASmaxInMdIQResultResponseMixin").parseIQResultResponseMixin(
        e,
        t,
      );
      return i.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends({ refElementValue: a.value }, i.value),
          )
        : i;
    }
    function d() {
      var e = o("WASmaxOutMdBaseIQGetRequestMixin").mergeBaseIQGetRequestMixin(
        o("WASmaxJsx").smax(
          "iq",
          { to: o("WAWap").S_WHATSAPP_NET, xmlns: "md" },
          o("WASmaxJsx").smax("ref", null),
        ),
      );
      return e;
    }
    ((l.sendGetRefRPC = e),
      (l.parseGetRefResponseError = u),
      (l.parseGetRefResponseSuccess = c),
      (l.makeGetRefRequest = d));
  },
  98,
);
