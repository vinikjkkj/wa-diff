__d(
  "WASmaxPushConfigSetRPC",
  [
    "WAComms",
    "WASmaxInPushConfigSetResponseConflict",
    "WASmaxInPushConfigSetResponseInternalServerError",
    "WASmaxInPushConfigSetResponseSuccess",
    "WASmaxOutPushConfigSetRequest",
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
          var n = o("WASmaxOutPushConfigSetRequest").makeSetRequest(e),
            r = yield o("WAComms").sendSmaxStanza(n, t),
            a = o(
              "WASmaxInPushConfigSetResponseSuccess",
            ).parseSetResponseSuccess(r, n);
          if (a.success) return { name: "SetResponseSuccess", value: a.value };
          var i = o(
            "WASmaxInPushConfigSetResponseInternalServerError",
          ).parseSetResponseInternalServerError(r, n);
          if (i.success)
            return { name: "SetResponseInternalServerError", value: i.value };
          var l = o(
            "WASmaxInPushConfigSetResponseConflict",
          ).parseSetResponseConflict(r, n);
          if (l.success) return { name: "SetResponseConflict", value: l.value };
          throw new (o("WASmaxParsingFailure").SmaxParsingFailure)(
            o("WASmaxRpcUtils").errorMessageRpcParsing("Set", {
              Success: a,
              InternalServerError: i,
              Conflict: l,
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
