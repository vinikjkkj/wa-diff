__d(
  "WASmaxBizCtwaAdAccountGetAccessTokenAndSessionCookiesRPC",
  [
    "WAComms",
    "WAResultOrError",
    "WASmaxInBizCtwaAdAccountCommonAdAccountErrors",
    "WASmaxInBizCtwaAdAccountEnums",
    "WASmaxInBizCtwaAdAccountHackBaseIQErrorResponseMixin",
    "WASmaxInBizCtwaAdAccountHackBaseIQResultResponseMixin",
    "WASmaxJsx",
    "WASmaxOutBizCtwaAdAccountHackBaseIQGetRequestMixin",
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
          var n = _(e),
            r = yield o("WAComms").sendSmaxStanza(n, t),
            a = m(r, n);
          if (a.success)
            return {
              name: "GetAccessTokenAndSessionCookiesResponseSuccess",
              value: a.value,
            };
          var i = p(r, n);
          if (i.success)
            return {
              name: "GetAccessTokenAndSessionCookiesResponseTooManyAttempts",
              value: i.value,
            };
          var l = c(r, n);
          if (l.success)
            return {
              name: "GetAccessTokenAndSessionCookiesResponseIncorrectNonce",
              value: l.value,
            };
          var s = u(r, n);
          if (s.success)
            return {
              name: "GetAccessTokenAndSessionCookiesResponseError",
              value: s.value,
            };
          throw new (o("WASmaxParsingFailure").SmaxParsingFailure)(
            o("WASmaxRpcUtils").errorMessageRpcParsing(
              "GetAccessTokenAndSessionCookies",
              { Success: a, TooManyAttempts: i, IncorrectNonce: l, Error: s },
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
        "WASmaxInBizCtwaAdAccountHackBaseIQErrorResponseMixin",
      ).parseHackBaseIQErrorResponseMixin(e, t);
      if (!a.success) return a;
      var i = o(
        "WASmaxInBizCtwaAdAccountCommonAdAccountErrors",
      ).parseCommonAdAccountErrors(r.value);
      return i.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends({}, a.value, {
              errorCommonAdAccountErrors: i.value,
            }),
          )
        : i;
    }
    function c(e, t) {
      var n = o("WASmaxParseUtils").assertTag(e, "iq");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").flattenedChildWithTag(e, "error");
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        r.value,
        "code",
        "432",
      );
      if (!a.success) return a;
      var i = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        r.value,
        "text",
        "INCORRECT_NONCE",
      );
      if (!i.success) return i;
      var l = o(
        "WASmaxInBizCtwaAdAccountHackBaseIQErrorResponseMixin",
      ).parseHackBaseIQErrorResponseMixin(e, t);
      return l.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends(
              { errorCode: a.value, errorText: i.value },
              l.value,
            ),
          )
        : l;
    }
    function d(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "token_type");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").contentStringEnum(
        e,
        o("WASmaxInBizCtwaAdAccountEnums").ENUM_STRONG_WEAK,
      );
      return n.success
        ? o("WAResultOrError").makeResult({ elementValue: n.value })
        : n;
    }
    function m(e, t) {
      var n = o("WASmaxParseUtils").assertTag(e, "iq");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").flattenedChildWithTag(e, "access_token");
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").flattenedChildWithTag(e, "session_cookies");
      if (!a.success) return a;
      var i = o("WASmaxParseUtils").flattenedChildWithTag(e, "business_person");
      if (!i.success) return i;
      var l = o("WASmaxParseUtils").optionalChildWithTag(e, "token_type", d);
      if (!l.success) return l;
      var s = o("WASmaxParseUtils").contentString(r.value);
      if (!s.success) return s;
      var u = o("WASmaxParseUtils").contentString(a.value);
      if (!u.success) return u;
      var c = o("WASmaxParseUtils").attrString(i.value, "id");
      if (!c.success) return c;
      var m = o(
        "WASmaxInBizCtwaAdAccountHackBaseIQResultResponseMixin",
      ).parseHackBaseIQResultResponseMixin(e, t);
      return m.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends(
              {
                accessTokenElementValue: s.value,
                sessionCookiesElementValue: u.value,
                businessPersonId: c.value,
              },
              m.value,
              { tokenType: l.value },
            ),
          )
        : m;
    }
    function p(e, t) {
      var n = o("WASmaxParseUtils").assertTag(e, "iq");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").flattenedChildWithTag(e, "error");
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        r.value,
        "code",
        "431",
      );
      if (!a.success) return a;
      var i = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        r.value,
        "text",
        "TOO_MANY_ATTEMPTS",
      );
      if (!i.success) return i;
      var l = o(
        "WASmaxInBizCtwaAdAccountHackBaseIQErrorResponseMixin",
      ).parseHackBaseIQErrorResponseMixin(e, t);
      return l.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends(
              { errorCode: a.value, errorText: i.value },
              l.value,
            ),
          )
        : l;
    }
    function _(e) {
      var t = e.codeElementValue,
        n = o(
          "WASmaxOutBizCtwaAdAccountHackBaseIQGetRequestMixin",
        ).mergeHackBaseIQGetRequestMixin(
          o("WASmaxJsx").smax(
            "iq",
            { xmlns: "fb:thrift_iq", smax_id: o("WAWap").INT(104) },
            o("WASmaxJsx").smax(
              "parameters",
              null,
              o("WASmaxJsx").smax("code", null, t),
            ),
          ),
          e,
        );
      return n;
    }
    ((l.sendGetAccessTokenAndSessionCookiesRPC = e),
      (l.parseGetAccessTokenAndSessionCookiesResponseError = u),
      (l.parseGetAccessTokenAndSessionCookiesResponseIncorrectNonce = c),
      (l.parseGetAccessTokenAndSessionCookiesResponseSuccessTokenType = d),
      (l.parseGetAccessTokenAndSessionCookiesResponseSuccess = m),
      (l.parseGetAccessTokenAndSessionCookiesResponseTooManyAttempts = p),
      (l.makeGetAccessTokenAndSessionCookiesRequest = _));
  },
  98,
);
