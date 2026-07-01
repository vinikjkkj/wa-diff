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
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      return s.apply(this, arguments);
    }
    function s() {
      return (
        (s = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = o("WASmaxOutPreKeysSetRequest").makeSetRequest(e),
            r = yield o("WAComms").sendSmaxStanza(n, t),
            a = o("WASmaxInPreKeysSetResponseSuccess").parseSetResponseSuccess(
              r,
              n,
            );
          if (a.success) return { name: "SetResponseSuccess", value: a.value };
          var i = o(
            "WASmaxInPreKeysSetResponsePreKeySuccessVnameFailure",
          ).parseSetResponsePreKeySuccessVnameFailure(r, n);
          if (i.success)
            return {
              name: "SetResponsePreKeySuccessVnameFailure",
              value: i.value,
            };
          var l = o(
            "WASmaxInPreKeysSetResponseRequestError",
          ).parseSetResponseRequestError(r, n);
          if (l.success)
            return { name: "SetResponseRequestError", value: l.value };
          var s = o(
            "WASmaxInPreKeysSetResponseServerError",
          ).parseSetResponseServerError(r, n);
          if (s.success)
            return { name: "SetResponseServerError", value: s.value };
          throw new (o("WASmaxParsingFailure").SmaxParsingFailure)(
            o("WASmaxRpcUtils").errorMessageRpcParsing("Set", {
              Success: a,
              PreKeySuccessVnameFailure: i,
              RequestError: l,
              ServerError: s,
            }),
          );
        })),
        s.apply(this, arguments)
      );
    }
    l.sendSetRPC = e;
  },
  98,
);
