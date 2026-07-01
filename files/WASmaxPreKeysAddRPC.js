__d(
  "WASmaxPreKeysAddRPC",
  [
    "WAComms",
    "WASmaxInPreKeysAddResponseRequestError",
    "WASmaxInPreKeysAddResponseServerError",
    "WASmaxInPreKeysAddResponseSuccess",
    "WASmaxOutPreKeysAddRequest",
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
          var n = o("WASmaxOutPreKeysAddRequest").makeAddRequest(e),
            r = yield o("WAComms").sendSmaxStanza(n, t),
            a = o("WASmaxInPreKeysAddResponseSuccess").parseAddResponseSuccess(
              r,
              n,
            );
          if (a.success) return { name: "AddResponseSuccess", value: a.value };
          var i = o(
            "WASmaxInPreKeysAddResponseRequestError",
          ).parseAddResponseRequestError(r, n);
          if (i.success)
            return { name: "AddResponseRequestError", value: i.value };
          var l = o(
            "WASmaxInPreKeysAddResponseServerError",
          ).parseAddResponseServerError(r, n);
          if (l.success)
            return { name: "AddResponseServerError", value: l.value };
          throw new (o("WASmaxParsingFailure").SmaxParsingFailure)(
            o("WASmaxRpcUtils").errorMessageRpcParsing("Add", {
              Success: a,
              RequestError: i,
              ServerError: l,
            }),
          );
        })),
        s.apply(this, arguments)
      );
    }
    l.sendAddRPC = e;
  },
  98,
);
