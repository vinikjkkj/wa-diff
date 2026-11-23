__d(
  "WASmaxPreKeysSetRPC",
  [
    "WAComms",
    "WASmaxInPreKeysSetResponsePreKeySuccessVnameFailure",
    "WASmaxInPreKeysSetResponseRequestError",
    "WASmaxInPreKeysSetResponseServerError",
    "WASmaxInPreKeysSetResponseSuccess",
    "WASmaxOutPreKeysSetRequest",
    "WASmaxParsingFailure",
    "WASmaxRpcUtils",
  ],
  function (t, n, r, o, a, i, l) {
    async function e(e, t) {
      var n = o("WASmaxOutPreKeysSetRequest").makeSetRequest(e),
        r = await o("WAComms").sendSmaxStanza(n, t),
        a = o("WASmaxInPreKeysSetResponseSuccess").parseSetResponseSuccess(
          r,
          n,
        );
      if (a.success) return { name: "SetResponseSuccess", value: a.value };
      var i = o(
        "WASmaxInPreKeysSetResponsePreKeySuccessVnameFailure",
      ).parseSetResponsePreKeySuccessVnameFailure(r, n);
      if (i.success)
        return { name: "SetResponsePreKeySuccessVnameFailure", value: i.value };
      var l = o(
        "WASmaxInPreKeysSetResponseRequestError",
      ).parseSetResponseRequestError(r, n);
      if (l.success) return { name: "SetResponseRequestError", value: l.value };
      var s = o(
        "WASmaxInPreKeysSetResponseServerError",
      ).parseSetResponseServerError(r, n);
      if (s.success) return { name: "SetResponseServerError", value: s.value };
      throw new (o("WASmaxParsingFailure").SmaxParsingFailure)(
        o("WASmaxRpcUtils").errorMessageRpcParsing("Set", {
          Success: a,
          PreKeySuccessVnameFailure: i,
          RequestError: l,
          ServerError: s,
        }),
      );
    }
    l.sendSetRPC = e;
  },
  98,
);
