__d(
  "WASmaxMdGetCountryCodeRPC",
  [
    "WAComms",
    "WAResultOrError",
    "WASmaxInMdIQErrorBadRequestMixin",
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
            return {
              name: "GetCountryCodeResponseGetCountryCodeResponse",
              value: r.value,
            };
          var a = u(n, t);
          if (a.success)
            return { name: "GetCountryCodeResponseError", value: a.value };
          throw new (o("WASmaxParsingFailure").SmaxParsingFailure)(
            o("WASmaxRpcUtils").errorMessageRpcParsing("GetCountryCode", {
              GetCountryCodeResponse: r,
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
      var a = o("WASmaxInMdIQErrorResponseMixin").parseIQErrorResponseMixin(
        e,
        t,
      );
      if (!a.success) return a;
      var i = m(r.value);
      return i.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends({}, a.value, {
              errorCountryCodeErrors: i.value,
            }),
          )
        : i;
    }
    function c(e, t) {
      var n = o("WASmaxParseUtils").assertTag(e, "iq");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").flattenedChildWithTag(e, "country_code");
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").attrString(r.value, "iso");
      if (!a.success) return a;
      var i = o("WASmaxInMdIQResultResponseMixin").parseIQResultResponseMixin(
        e,
        t,
      );
      return i.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends({ countryCodeIso: a.value }, i.value),
          )
        : i;
    }
    function d() {
      var e = o("WASmaxOutMdBaseIQGetRequestMixin").mergeBaseIQGetRequestMixin(
        o("WASmaxJsx").smax(
          "iq",
          { to: o("WAWap").S_WHATSAPP_NET, xmlns: "md" },
          o("WASmaxJsx").smax("link_code_companion_reg", {
            stage: "get_country_code",
          }),
        ),
      );
      return e;
    }
    function m(e) {
      var t = o("WASmaxInMdIQErrorBadRequestMixin").parseIQErrorBadRequestMixin(
        e,
      );
      if (t.success)
        return o("WAResultOrError").makeResult({
          name: "IQErrorBadRequest",
          value: t.value,
        });
      var n = o(
        "WASmaxInMdIQErrorInternalServerErrorMixin",
      ).parseIQErrorInternalServerErrorMixin(e);
      return n.success
        ? o("WAResultOrError").makeResult({
            name: "IQErrorInternalServerError",
            value: n.value,
          })
        : o("WASmaxParseUtils").errorMixinDisjunction(
            e,
            ["IQErrorBadRequest", "IQErrorInternalServerError"],
            [t, n],
          );
    }
    ((l.sendGetCountryCodeRPC = e),
      (l.parseGetCountryCodeResponseError = u),
      (l.parseGetCountryCodeResponseGetCountryCodeResponse = c),
      (l.makeGetCountryCodeRequest = d),
      (l.parseCountryCodeErrors = m));
  },
  98,
);
