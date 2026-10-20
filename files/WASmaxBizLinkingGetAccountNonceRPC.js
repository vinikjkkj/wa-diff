__d(
  "WASmaxBizLinkingGetAccountNonceRPC",
  [
    "WAComms",
    "WAResultOrError",
    "WASmaxChildren",
    "WASmaxInBizLinkingHackBaseIQErrorResponseMixin",
    "WASmaxInBizLinkingHackBaseIQResultResponseMixin",
    "WASmaxInBizLinkingIQErrorInternalServerErrorMixin",
    "WASmaxJsx",
    "WASmaxOutBizLinkingHackBaseIQGetRequestMixin",
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
          var n = p(e),
            r = yield o("WAComms").sendSmaxStanza(n, t),
            a = d(r, n);
          if (a.success)
            return { name: "GetAccountNonceResponseSuccess", value: a.value };
          var i = u(r, n);
          if (i.success)
            return { name: "GetAccountNonceResponseError", value: i.value };
          throw new (o("WASmaxParsingFailure").SmaxParsingFailure)(
            o("WASmaxRpcUtils").errorMessageRpcParsing("GetAccountNonce", {
              Success: a,
              Error: i,
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
        "WASmaxInBizLinkingHackBaseIQErrorResponseMixin",
      ).parseHackBaseIQErrorResponseMixin(e, t);
      if (!a.success) return a;
      var i = _(r.value);
      return i.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends({}, a.value, {
              errorAccountNonceErrors: i.value,
            }),
          )
        : i;
    }
    function c(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "request");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").flattenedChildWithTag(e, "id");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").contentString(n.value);
      return r.success
        ? o("WAResultOrError").makeResult({ idElementValue: r.value })
        : r;
    }
    function d(e, t) {
      var n = o("WASmaxParseUtils").assertTag(e, "iq");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").flattenedChildWithTag(e, "detail");
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").flattenedChildWithTag(r.value, "nonce");
      if (!a.success) return a;
      var i = o("WASmaxParseUtils").optionalChildWithTag(r.value, "request", c);
      if (!i.success) return i;
      var l = o("WASmaxParseUtils").contentString(a.value);
      if (!l.success) return l;
      var s = o(
        "WASmaxInBizLinkingHackBaseIQResultResponseMixin",
      ).parseHackBaseIQResultResponseMixin(e, t);
      return s.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends(
              { detailNonceElementValue: l.value },
              s.value,
              { detailRequest: i.value },
            ),
          )
        : s;
    }
    function m(e) {
      var t = e.identifierScope,
        n = o("WASmaxJsx").smax("identifier", {
          scope: o("WAWap").CUSTOM_STRING(t),
        });
      return n;
    }
    function p(e) {
      var t = e.identifierArgs,
        n = o(
          "WASmaxOutBizLinkingHackBaseIQGetRequestMixin",
        ).mergeHackBaseIQGetRequestMixin(
          o("WASmaxJsx").smax(
            "iq",
            { xmlns: "fb:thrift_iq", smax_id: o("WAWap").INT(12) },
            o("WASmaxChildren").OPTIONAL_CHILD(m, t),
          ),
          e,
        );
      return n;
    }
    function _(e) {
      var t = f(e);
      if (t.success)
        return o("WAResultOrError").makeResult({
          name: "IQErrorBadRequest",
          value: t.value,
        });
      var n = g(e);
      if (n.success)
        return o("WAResultOrError").makeResult({
          name: "IQErrorNoticeRequired",
          value: n.value,
        });
      var r = o(
        "WASmaxInBizLinkingIQErrorInternalServerErrorMixin",
      ).parseIQErrorInternalServerErrorMixin(e);
      return r.success
        ? o("WAResultOrError").makeResult({
            name: "IQErrorInternalServerError",
            value: r.value,
          })
        : o("WASmaxParseUtils").errorMixinDisjunction(
            e,
            [
              "IQErrorBadRequest",
              "IQErrorNoticeRequired",
              "IQErrorInternalServerError",
            ],
            [t, n, r],
          );
    }
    function f(e) {
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
    function g(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "error");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        e,
        "text",
        "notice-required",
      );
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrInt,
        e,
        "code",
        475,
      );
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").attrIntRange(e, "tos_version", 1, 65535);
      return a.success
        ? o("WAResultOrError").makeResult({
            text: n.value,
            code: r.value,
            tosVersion: a.value,
          })
        : a;
    }
    ((l.sendGetAccountNonceRPC = e),
      (l.parseGetAccountNonceResponseError = u),
      (l.parseGetAccountNonceResponseSuccessDetailRequest = c),
      (l.parseGetAccountNonceResponseSuccess = d),
      (l.makeGetAccountNonceRequestIdentifier = m),
      (l.makeGetAccountNonceRequest = p),
      (l.parseAccountNonceErrors = _),
      (l.parseIQErrorBadRequestMixin = f),
      (l.parseIQErrorNoticeRequiredMixin = g));
  },
  98,
);
