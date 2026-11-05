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
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      return s.apply(this, arguments);
    }
    function s() {
      return (
        (s = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = c(e),
            r = yield o("WAComms").sendSmaxStanza(n, t),
            a = u(r, n);
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
      (l.parseSetEncryptedPairingRequestResponseSuccess = u),
      (l.makeSetEncryptedPairingRequestRequest = c));
  },
  98,
);
