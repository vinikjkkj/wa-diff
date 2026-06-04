__d(
  "WASmaxOutMdSetPasskeyPrologueRequest",
  ["WASmaxChildren", "WASmaxJsx", "WASmaxOutMdBaseIQSetRequestMixin", "WAWap"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.pairingHandoffProofElementValue,
        n = o("WASmaxJsx").smax("pairing_handoff_proof", null, t);
      return n;
    }
    function s(t) {
      var n,
        r = t.pairingHandoffProofArgs,
        a = t.credentialIdElementValue,
        i = t.webauthnAssertionElementValue,
        l = t.prologuePayloadElementValue,
        s = o("WASmaxOutMdBaseIQSetRequestMixin").mergeBaseIQSetRequestMixin(
          (n = o("WASmaxJsx")).smax(
            "iq",
            { to: o("WAWap").S_WHATSAPP_NET, xmlns: "md" },
            n.smax(
              "passkey_prologue",
              null,
              n.smax("credential_id", null, a),
              n.smax("webauthn_assertion", null, i),
              n.smax("prologue_payload", null, l),
              o("WASmaxChildren").OPTIONAL_CHILD(e, r),
            ),
          ),
        );
      return s;
    }
    ((l.makeSetPasskeyPrologueRequestPasskeyProloguePairingHandoffProof = e),
      (l.makeSetPasskeyPrologueRequest = s));
  },
  98,
);
