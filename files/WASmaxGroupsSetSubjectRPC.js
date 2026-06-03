__d(
  "WASmaxGroupsSetSubjectRPC",
  [
    "WAComms",
    "WASmaxInGroupsSetSubjectResponseClientError",
    "WASmaxInGroupsSetSubjectResponseServerError",
    "WASmaxInGroupsSetSubjectResponseSuccess",
    "WASmaxOutGroupsSetSubjectRequest",
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
          var n = o("WASmaxOutGroupsSetSubjectRequest").makeSetSubjectRequest(
              e,
            ),
            r = yield o("WAComms").sendSmaxStanza(n, t),
            a = o(
              "WASmaxInGroupsSetSubjectResponseSuccess",
            ).parseSetSubjectResponseSuccess(r, n);
          if (a.success)
            return { name: "SetSubjectResponseSuccess", value: a.value };
          var i = o(
            "WASmaxInGroupsSetSubjectResponseClientError",
          ).parseSetSubjectResponseClientError(r, n);
          if (i.success)
            return { name: "SetSubjectResponseClientError", value: i.value };
          var l = o(
            "WASmaxInGroupsSetSubjectResponseServerError",
          ).parseSetSubjectResponseServerError(r, n);
          if (l.success)
            return { name: "SetSubjectResponseServerError", value: l.value };
          throw new (o("WASmaxParsingFailure").SmaxParsingFailure)(
            o("WASmaxRpcUtils").errorMessageRpcParsing("SetSubject", {
              Success: a,
              ClientError: i,
              ServerError: l,
            }),
          );
        })),
        s.apply(this, arguments)
      );
    }
    l.sendSetSubjectRPC = e;
  },
  98,
);
