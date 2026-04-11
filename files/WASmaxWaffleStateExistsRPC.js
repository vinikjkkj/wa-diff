__d(
  "WASmaxWaffleStateExistsRPC",
  [
    "WAComms",
    "WASmaxInWaffleStateExistsResponseError",
    "WASmaxInWaffleStateExistsResponseSuccess",
    "WASmaxOutWaffleStateExistsRequest",
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
          var n = o("WASmaxOutWaffleStateExistsRequest").makeStateExistsRequest(
              e,
            ),
            r = yield o("WAComms").sendSmaxStanza(n, t),
            a = o(
              "WASmaxInWaffleStateExistsResponseSuccess",
            ).parseStateExistsResponseSuccess(r, n);
          if (a.success)
            return { name: "StateExistsResponseSuccess", value: a.value };
          var i = o(
            "WASmaxInWaffleStateExistsResponseError",
          ).parseStateExistsResponseError(r, n);
          if (i.success)
            return { name: "StateExistsResponseError", value: i.value };
          throw new (o("WASmaxParsingFailure").SmaxParsingFailure)(
            o("WASmaxRpcUtils").errorMessageRpcParsing("StateExists", {
              Success: a,
              Error: i,
            }),
          );
        })),
        s.apply(this, arguments)
      );
    }
    l.sendStateExistsRPC = e;
  },
  98,
);
