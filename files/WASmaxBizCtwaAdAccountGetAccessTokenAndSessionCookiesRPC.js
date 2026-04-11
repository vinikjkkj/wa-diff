__d(
  "WASmaxBizCtwaAdAccountGetAccessTokenAndSessionCookiesRPC",
  [
    "WAComms",
    "WASmaxInBizCtwaAdAccountGetAccessTokenAndSessionCookiesResponseError",
    "WASmaxInBizCtwaAdAccountGetAccessTokenAndSessionCookiesResponseIncorrectNonce",
    "WASmaxInBizCtwaAdAccountGetAccessTokenAndSessionCookiesResponseSuccess",
    "WASmaxInBizCtwaAdAccountGetAccessTokenAndSessionCookiesResponseTooManyAttempts",
    "WASmaxOutBizCtwaAdAccountGetAccessTokenAndSessionCookiesRequest",
    "WASmaxParsingFailure",
    "WASmaxRpcUtils",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      return s.apply(this, arguments);
    }
    function s() {
      return (
        (s = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = o(
              "WASmaxOutBizCtwaAdAccountGetAccessTokenAndSessionCookiesRequest",
            ).makeGetAccessTokenAndSessionCookiesRequest(e),
            r = yield o("WAComms").sendSmaxStanza(n, t),
            a = o(
              "WASmaxInBizCtwaAdAccountGetAccessTokenAndSessionCookiesResponseSuccess",
            ).parseGetAccessTokenAndSessionCookiesResponseSuccess(r, n);
          if (a.success)
            return {
              name: "GetAccessTokenAndSessionCookiesResponseSuccess",
              value: a.value,
            };
          var i = o(
            "WASmaxInBizCtwaAdAccountGetAccessTokenAndSessionCookiesResponseTooManyAttempts",
          ).parseGetAccessTokenAndSessionCookiesResponseTooManyAttempts(r, n);
          if (i.success)
            return {
              name: "GetAccessTokenAndSessionCookiesResponseTooManyAttempts",
              value: i.value,
            };
          var l = o(
            "WASmaxInBizCtwaAdAccountGetAccessTokenAndSessionCookiesResponseIncorrectNonce",
          ).parseGetAccessTokenAndSessionCookiesResponseIncorrectNonce(r, n);
          if (l.success)
            return {
              name: "GetAccessTokenAndSessionCookiesResponseIncorrectNonce",
              value: l.value,
            };
          var s = o(
            "WASmaxInBizCtwaAdAccountGetAccessTokenAndSessionCookiesResponseError",
          ).parseGetAccessTokenAndSessionCookiesResponseError(r, n);
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
    l.sendGetAccessTokenAndSessionCookiesRPC = e;
  },
  98,
);
