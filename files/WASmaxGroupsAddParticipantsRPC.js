__d(
  "WASmaxGroupsAddParticipantsRPC",
  [
    "WAComms",
    "WASmaxInGroupsAddParticipantsResponseClientError",
    "WASmaxInGroupsAddParticipantsResponseServerError",
    "WASmaxInGroupsAddParticipantsResponseSuccess",
    "WASmaxOutGroupsAddParticipantsRequest",
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
              "WASmaxOutGroupsAddParticipantsRequest",
            ).makeAddParticipantsRequest(e),
            r = yield o("WAComms").sendSmaxStanza(n, t),
            a = o(
              "WASmaxInGroupsAddParticipantsResponseSuccess",
            ).parseAddParticipantsResponseSuccess(r, n);
          if (a.success)
            return { name: "AddParticipantsResponseSuccess", value: a.value };
          var i = o(
            "WASmaxInGroupsAddParticipantsResponseClientError",
          ).parseAddParticipantsResponseClientError(r, n);
          if (i.success)
            return {
              name: "AddParticipantsResponseClientError",
              value: i.value,
            };
          var l = o(
            "WASmaxInGroupsAddParticipantsResponseServerError",
          ).parseAddParticipantsResponseServerError(r, n);
          if (l.success)
            return {
              name: "AddParticipantsResponseServerError",
              value: l.value,
            };
          throw new (o("WASmaxParsingFailure").SmaxParsingFailure)(
            o("WASmaxRpcUtils").errorMessageRpcParsing("AddParticipants", {
              Success: a,
              ClientError: i,
              ServerError: l,
            }),
          );
        })),
        s.apply(this, arguments)
      );
    }
    l.sendAddParticipantsRPC = e;
  },
  98,
);
