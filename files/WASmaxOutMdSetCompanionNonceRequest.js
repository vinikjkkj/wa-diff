__d(
  "WASmaxOutMdSetCompanionNonceRequest",
  ["WASmaxJsx", "WASmaxOutMdBaseIQSetRequestMixin", "WAWap"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.companionNonceElementValue,
        n = o("WASmaxOutMdBaseIQSetRequestMixin").mergeBaseIQSetRequestMixin(
          o("WASmaxJsx").smax(
            "iq",
            { to: o("WAWap").S_WHATSAPP_NET, xmlns: "md" },
            o("WASmaxJsx").smax("companion_nonce", null, t),
          ),
        );
      return n;
    }
    l.makeSetCompanionNonceRequest = e;
  },
  98,
);
