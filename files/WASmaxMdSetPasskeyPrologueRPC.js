__d(
  "WASmaxMdSetPasskeyPrologueRPC",
  [
    "WAComms",
    "WASmaxChildren",
    "WASmaxInMdIQResultResponseMixin",
    "WASmaxJsx",
    "WASmaxOutMdBaseIQSetRequestMixin",
    "WASmaxParseUtils",
    "WASmaxParsingFailure",
    "WASmaxRpcUtils",
    "WAWap",
  ],
  function (t, n, r, o, a, i, l) {
    async function e(e, t) {
      var n = c(e),
        r = await o("WAComms").sendSmaxStanza(n, t),
        a = s(r, n);
      if (a.success)
        return { name: "SetPasskeyPrologueResponseSuccess", value: a.value };
      throw new (o("WASmaxParsingFailure").SmaxParsingFailure)(
        o("WASmaxRpcUtils").errorMessageRpcParsing("SetPasskeyPrologue", {
          Success: a,
        }),
      );
    }
    function s(e, t) {
      var n = o("WASmaxParseUtils").assertTag(e, "iq");
      if (!n.success) return n;
      var r = o("WASmaxInMdIQResultResponseMixin").parseIQResultResponseMixin(
        e,
        t,
      );
      return (r.success, r);
    }
    function u(e) {
      var t = e.pairingHandoffProofElementValue,
        n = o("WASmaxJsx").smax("pairing_handoff_proof", null, t);
      return n;
    }
    function c(e) {
      var t,
        n = e.pairingHandoffProofArgs,
        r = e.credentialIdElementValue,
        a = e.webauthnAssertionElementValue,
        i = e.prologuePayloadElementValue,
        l = o("WASmaxOutMdBaseIQSetRequestMixin").mergeBaseIQSetRequestMixin(
          (t = o("WASmaxJsx")).smax(
            "iq",
            { to: o("WAWap").S_WHATSAPP_NET, xmlns: "md" },
            t.smax(
              "passkey_prologue",
              null,
              t.smax("credential_id", null, r),
              t.smax("webauthn_assertion", null, a),
              t.smax("prologue_payload", null, i),
              o("WASmaxChildren").OPTIONAL_CHILD(u, n),
            ),
          ),
        );
      return l;
    }
    ((l.sendSetPasskeyPrologueRPC = e),
      (l.parseSetPasskeyPrologueResponseSuccess = s),
      (l.makeSetPasskeyPrologueRequestPasskeyProloguePairingHandoffProof = u),
      (l.makeSetPasskeyPrologueRequest = c));
  },
  98,
);
