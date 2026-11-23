__d(
  "WASmaxPreKeysRotateSignedRPC",
  [
    "WAComms",
    "WASmaxInPreKeysRotateSignedResponseRequestError",
    "WASmaxInPreKeysRotateSignedResponseServerError",
    "WASmaxInPreKeysRotateSignedResponseSuccess",
    "WASmaxInPreKeysRotateSignedResponseValidationError",
    "WASmaxOutPreKeysRotateSignedRequest",
    "WASmaxParsingFailure",
    "WASmaxRpcUtils",
  ],
  function (t, n, r, o, a, i, l) {
    async function e(e, t) {
      var n = o("WASmaxOutPreKeysRotateSignedRequest").makeRotateSignedRequest(
          e,
        ),
        r = await o("WAComms").sendSmaxStanza(n, t),
        a = o(
          "WASmaxInPreKeysRotateSignedResponseSuccess",
        ).parseRotateSignedResponseSuccess(r, n);
      if (a.success)
        return { name: "RotateSignedResponseSuccess", value: a.value };
      var i = o(
        "WASmaxInPreKeysRotateSignedResponseValidationError",
      ).parseRotateSignedResponseValidationError(r, n);
      if (i.success)
        return { name: "RotateSignedResponseValidationError", value: i.value };
      var l = o(
        "WASmaxInPreKeysRotateSignedResponseRequestError",
      ).parseRotateSignedResponseRequestError(r, n);
      if (l.success)
        return { name: "RotateSignedResponseRequestError", value: l.value };
      var s = o(
        "WASmaxInPreKeysRotateSignedResponseServerError",
      ).parseRotateSignedResponseServerError(r, n);
      if (s.success)
        return { name: "RotateSignedResponseServerError", value: s.value };
      throw new (o("WASmaxParsingFailure").SmaxParsingFailure)(
        o("WASmaxRpcUtils").errorMessageRpcParsing("RotateSigned", {
          Success: a,
          ValidationError: i,
          RequestError: l,
          ServerError: s,
        }),
      );
    }
    l.sendRotateSignedRPC = e;
  },
  98,
);
