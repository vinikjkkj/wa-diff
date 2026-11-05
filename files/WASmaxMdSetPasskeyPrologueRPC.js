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
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      return s.apply(this, arguments);
    }
    function s() {
      return (
        (s = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = d(e),
            r = yield o("WAComms").sendSmaxStanza(n, t),
            a = u(r, n);
          if (a.success)
            return {
              name: "SetPasskeyPrologueResponseSuccess",
              value: a.value,
            };
          throw new (o("WASmaxParsingFailure").SmaxParsingFailure)(
            o("WASmaxRpcUtils").errorMessageRpcParsing("SetPasskeyPrologue", {
              Success: a,
            }),
          );
        })),
        s.apply(this, arguments)
      );
    }
    function u(e, t) {
      var n = o("WASmaxParseUtils").assertTag(e, "iq");
      if (!n.success) return n;
      var r = o("WASmaxInMdIQResultResponseMixin").parseIQResultResponseMixin(
        e,
        t,
      );
      return (r.success, r);
    }
    function c(e) {
      var t = e.pairingHandoffProofElementValue,
        n = o("WASmaxJsx").smax("pairing_handoff_proof", null, t);
      return n;
    }
    function d(e) {
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
              o("WASmaxChildren").OPTIONAL_CHILD(c, n),
            ),
          ),
        );
      return l;
    }
    ((l.sendSetPasskeyPrologueRPC = e),
      (l.parseSetPasskeyPrologueResponseSuccess = u),
      (l.makeSetPasskeyPrologueRequestPasskeyProloguePairingHandoffProof = c),
      (l.makeSetPasskeyPrologueRequest = d));
  },
  98,
);
