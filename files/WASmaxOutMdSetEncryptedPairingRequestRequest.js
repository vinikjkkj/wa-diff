__d(
  "WASmaxOutMdSetEncryptedPairingRequestRequest",
  ["WASmaxJsx", "WASmaxOutMdBaseIQSetRequestMixin", "WAWap"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
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
    l.makeSetEncryptedPairingRequestRequest = e;
  },
  98,
);
