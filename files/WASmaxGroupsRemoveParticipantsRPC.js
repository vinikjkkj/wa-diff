__d(
  "WASmaxGroupsRemoveParticipantsRPC",
  [
    "WAComms",
    "WASmaxInGroupsRemoveParticipantsResponseClientError",
    "WASmaxInGroupsRemoveParticipantsResponseServerError",
    "WASmaxInGroupsRemoveParticipantsResponseSuccess",
    "WASmaxOutGroupsRemoveParticipantsRequest",
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
              "WASmaxOutGroupsRemoveParticipantsRequest",
            ).makeRemoveParticipantsRequest(e),
            r = yield o("WAComms").sendSmaxStanza(n, t),
            a = o(
              "WASmaxInGroupsRemoveParticipantsResponseSuccess",
            ).parseRemoveParticipantsResponseSuccess(r, n);
          if (a.success)
            return {
              name: "RemoveParticipantsResponseSuccess",
              value: a.value,
            };
          var i = o(
            "WASmaxInGroupsRemoveParticipantsResponseClientError",
          ).parseRemoveParticipantsResponseClientError(r, n);
          if (i.success)
            return {
              name: "RemoveParticipantsResponseClientError",
              value: i.value,
            };
          var l = o(
            "WASmaxInGroupsRemoveParticipantsResponseServerError",
          ).parseRemoveParticipantsResponseServerError(r, n);
          if (l.success)
            return {
              name: "RemoveParticipantsResponseServerError",
              value: l.value,
            };
          throw new (o("WASmaxParsingFailure").SmaxParsingFailure)(
            o("WASmaxRpcUtils").errorMessageRpcParsing("RemoveParticipants", {
              Success: a,
              ClientError: i,
              ServerError: l,
            }),
          );
        })),
        s.apply(this, arguments)
      );
    }
    l.sendRemoveParticipantsRPC = e;
  },
  98,
);
