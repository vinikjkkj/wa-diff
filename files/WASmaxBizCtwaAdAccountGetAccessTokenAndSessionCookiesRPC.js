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
  ],
  function (t, n, r, o, a, i, l) {
    async function e(e, t) {
      var n = o(
          "WASmaxOutBizCtwaAdAccountGetAccessTokenAndSessionCookiesRequest",
        ).makeGetAccessTokenAndSessionCookiesRequest(e),
        r = await o("WAComms").sendSmaxStanza(n, t),
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
    }
    l.sendGetAccessTokenAndSessionCookiesRPC = e;
  },
  98,
);
