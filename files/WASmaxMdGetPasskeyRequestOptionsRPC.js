__d(
  "WASmaxMdGetPasskeyRequestOptionsRPC",
  [
    "WAComms",
    "WASmaxInMdGetPasskeyRequestOptionsResponseError",
    "WASmaxInMdGetPasskeyRequestOptionsResponseSuccess",
    "WASmaxOutMdGetPasskeyRequestOptionsRequest",
    "WASmaxParsingFailure",
    "WASmaxRpcUtils",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return s.apply(this, arguments);
    }
    function s() {
      return (
        (s = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = o(
              "WASmaxOutMdGetPasskeyRequestOptionsRequest",
            ).makeGetPasskeyRequestOptionsRequest(),
            n = yield o("WAComms").sendSmaxStanza(t, e),
            r = o(
              "WASmaxInMdGetPasskeyRequestOptionsResponseSuccess",
            ).parseGetPasskeyRequestOptionsResponseSuccess(n, t);
          if (r.success)
            return {
              name: "GetPasskeyRequestOptionsResponseSuccess",
              value: r.value,
            };
          var a = o(
            "WASmaxInMdGetPasskeyRequestOptionsResponseError",
          ).parseGetPasskeyRequestOptionsResponseError(n, t);
          if (a.success)
            return {
              name: "GetPasskeyRequestOptionsResponseError",
              value: a.value,
            };
          throw new (o("WASmaxParsingFailure").SmaxParsingFailure)(
            o("WASmaxRpcUtils").errorMessageRpcParsing(
              "GetPasskeyRequestOptions",
              { Success: r, Error: a },
            ),
          );
        })),
        s.apply(this, arguments)
      );
    }
    l.sendGetPasskeyRequestOptionsRPC = e;
  },
  98,
);
