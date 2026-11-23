__d(
  "WASmaxPreKeysDeleteRPC",
  [
    "WAComms",
    "WASmaxInPreKeysDeleteResponseRequestError",
    "WASmaxInPreKeysDeleteResponseServerError",
    "WASmaxInPreKeysDeleteResponseSuccess",
    "WASmaxOutPreKeysDeleteRequest",
    "WASmaxParsingFailure",
    "WASmaxRpcUtils",
  ],
  function (t, n, r, o, a, i, l) {
    async function e(e, t) {
      var n = o("WASmaxOutPreKeysDeleteRequest").makeDeleteRequest(e),
        r = await o("WAComms").sendSmaxStanza(n, t),
        a = o(
          "WASmaxInPreKeysDeleteResponseSuccess",
        ).parseDeleteResponseSuccess(r, n);
      if (a.success) return { name: "DeleteResponseSuccess", value: a.value };
      var i = o(
        "WASmaxInPreKeysDeleteResponseRequestError",
      ).parseDeleteResponseRequestError(r, n);
      if (i.success)
        return { name: "DeleteResponseRequestError", value: i.value };
      var l = o(
        "WASmaxInPreKeysDeleteResponseServerError",
      ).parseDeleteResponseServerError(r, n);
      if (l.success)
        return { name: "DeleteResponseServerError", value: l.value };
      throw new (o("WASmaxParsingFailure").SmaxParsingFailure)(
        o("WASmaxRpcUtils").errorMessageRpcParsing("Delete", {
          Success: a,
          RequestError: i,
          ServerError: l,
        }),
      );
    }
    l.sendDeleteRPC = e;
  },
  98,
);
