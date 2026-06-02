__d(
  "WASmaxGroupsSetDescriptionRPC",
  [
    "WAComms",
    "WASmaxInGroupsSetDescriptionResponseClientError",
    "WASmaxInGroupsSetDescriptionResponseServerError",
    "WASmaxInGroupsSetDescriptionResponseSuccess",
    "WASmaxOutGroupsSetDescriptionRequest",
    "WASmaxParsingFailure",
    "WASmaxRpcUtils",
  ],
  function (t, n, r, o, a, i, l) {
    async function e(e, t) {
      var n = o(
          "WASmaxOutGroupsSetDescriptionRequest",
        ).makeSetDescriptionRequest(e),
        r = await o("WAComms").sendSmaxStanza(n, t),
        a = o(
          "WASmaxInGroupsSetDescriptionResponseSuccess",
        ).parseSetDescriptionResponseSuccess(r, n);
      if (a.success)
        return { name: "SetDescriptionResponseSuccess", value: a.value };
      var i = o(
        "WASmaxInGroupsSetDescriptionResponseClientError",
      ).parseSetDescriptionResponseClientError(r, n);
      if (i.success)
        return { name: "SetDescriptionResponseClientError", value: i.value };
      var l = o(
        "WASmaxInGroupsSetDescriptionResponseServerError",
      ).parseSetDescriptionResponseServerError(r, n);
      if (l.success)
        return { name: "SetDescriptionResponseServerError", value: l.value };
      throw new (o("WASmaxParsingFailure").SmaxParsingFailure)(
        o("WASmaxRpcUtils").errorMessageRpcParsing("SetDescription", {
          Success: a,
          ClientError: i,
          ServerError: l,
        }),
      );
    }
    l.sendSetDescriptionRPC = e;
  },
  98,
);
