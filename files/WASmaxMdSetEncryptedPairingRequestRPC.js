__d(
  "WASmaxMdSetEncryptedPairingRequestRPC",
  [
    "WAComms",
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
      var n = u(e),
        r = await o("WAComms").sendSmaxStanza(n, t),
        a = s(r, n);
      if (a.success)
        return {
          name: "SetEncryptedPairingRequestResponseSuccess",
          value: a.value,
        };
      throw new (o("WASmaxParsingFailure").SmaxParsingFailure)(
        o("WASmaxRpcUtils").errorMessageRpcParsing(
          "SetEncryptedPairingRequest",
          { Success: a },
        ),
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
      var t = e.encryptedPairingRequestElementValue,
        n = o("WASmaxOutMdBaseIQSetRequestMixin").mergeBaseIQSetRequestMixin(
          o("WASmaxJsx").smax(
            "iq",
            { to: o("WAWap").S_WHATSAPP_NET, xmlns: "md" },
            o("WASmaxJsx").smax("encrypted_pairing_request", null, t),
          ),
        );
      return n;
    }
    ((l.sendSetEncryptedPairingRequestRPC = e),
      (l.parseSetEncryptedPairingRequestResponseSuccess = s),
      (l.makeSetEncryptedPairingRequestRequest = u));
  },
  98,
);
