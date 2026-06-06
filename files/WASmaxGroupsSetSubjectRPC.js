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
  ],
  function (t, n, r, o, a, i, l) {
    async function e(e, t) {
      var n = o("WASmaxOutGroupsSetSubjectRequest").makeSetSubjectRequest(e),
        r = await o("WAComms").sendSmaxStanza(n, t),
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
    }
    l.sendSetSubjectRPC = e;
  },
  98,
);
