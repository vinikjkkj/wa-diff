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
  ],
  function (t, n, r, o, a, i, l) {
    async function e(e, t) {
      var n = m(e),
        r = await o("WAComms").sendSmaxStanza(n, t),
        a = c(r, n);
      if (a.success)
        return { name: "GetAccountNonceResponseSuccess", value: a.value };
      var i = s(r, n);
      if (i.success)
        return { name: "GetAccountNonceResponseError", value: i.value };
      throw new (o("WASmaxParsingFailure").SmaxParsingFailure)(
        o("WASmaxRpcUtils").errorMessageRpcParsing("GetAccountNonce", {
          Success: a,
          Error: i,
        }),
      );
    }
    function s(e, t) {
      var n = o("WASmaxParseUtils").assertTag(e, "iq");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").flattenedChildWithTag(e, "error");
      if (!r.success) return r;
      var a = o(
        "WASmaxInBizLinkingHackBaseIQErrorResponseMixin",
      ).parseHackBaseIQErrorResponseMixin(e, t);
      if (!a.success) return a;
      var i = p(r.value);
      return i.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends({}, a.value, {
              errorAccountNonceErrors: i.value,
            }),
          )
        : i;
    }
    function u(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "request");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").flattenedChildWithTag(e, "id");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").contentString(n.value);
      return r.success
        ? o("WAResultOrError").makeResult({ idElementValue: r.value })
        : r;
    }
    function c(e, t) {
      var n = o("WASmaxParseUtils").assertTag(e, "iq");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").flattenedChildWithTag(e, "detail");
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").flattenedChildWithTag(r.value, "nonce");
      if (!a.success) return a;
      var i = o("WASmaxParseUtils").optionalChildWithTag(r.value, "request", u);
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
    function d(e) {
      var t = e.identifierScope,
        n = o("WASmaxJsx").smax("identifier", {
          scope: o("WAWap").CUSTOM_STRING(t),
        });
      return n;
    }
    function m(e) {
      var t = e.identifierArgs,
        n = o(
          "WASmaxOutBizLinkingHackBaseIQGetRequestMixin",
        ).mergeHackBaseIQGetRequestMixin(
          o("WASmaxJsx").smax(
            "iq",
            { xmlns: "fb:thrift_iq", smax_id: o("WAWap").INT(12) },
            o("WASmaxChildren").OPTIONAL_CHILD(d, t),
          ),
          e,
        );
      return n;
    }
    function p(e) {
      var t = _(e);
      if (t.success)
        return o("WAResultOrError").makeResult({
          name: "IQErrorBadRequest",
          value: t.value,
        });
      var n = f(e);
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
    function _(e) {
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
    function f(e) {
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
      (l.parseGetAccountNonceResponseError = s),
      (l.parseGetAccountNonceResponseSuccess = c),
      (l.makeGetAccountNonceRequest = m));
  },
  98,
);
