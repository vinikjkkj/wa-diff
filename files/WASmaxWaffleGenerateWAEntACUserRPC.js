__d(
  "WASmaxWaffleGenerateWAEntACUserRPC",
  [
    "WAComms",
    "WASmaxInWaffleGenerateWAEntACUserResponseError",
    "WASmaxInWaffleGenerateWAEntACUserResponseSuccess",
    "WASmaxOutWaffleGenerateWAEntACUserRequest",
    "WASmaxParsingFailure",
    "WASmaxRpcUtils",
  ],
  function (t, n, r, o, a, i, l) {
    async function e(e, t) {
      var n = o(
          "WASmaxOutWaffleGenerateWAEntACUserRequest",
        ).makeGenerateWAEntACUserRequest(e),
        r = await o("WAComms").sendSmaxStanza(n, t),
        a = o(
          "WASmaxInWaffleGenerateWAEntACUserResponseSuccess",
        ).parseGenerateWAEntACUserResponseSuccess(r, n);
      if (a.success)
        return { name: "GenerateWAEntACUserResponseSuccess", value: a.value };
      var i = o(
        "WASmaxInWaffleGenerateWAEntACUserResponseError",
      ).parseGenerateWAEntACUserResponseError(r, n);
      if (i.success)
        return { name: "GenerateWAEntACUserResponseError", value: i.value };
      throw new (o("WASmaxParsingFailure").SmaxParsingFailure)(
        o("WASmaxRpcUtils").errorMessageRpcParsing("GenerateWAEntACUser", {
          Success: a,
          Error: i,
        }),
      );
    }
    l.sendGenerateWAEntACUserRPC = e;
  },
  98,
);
