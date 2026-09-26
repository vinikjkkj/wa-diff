__d(
  "WASmaxOutBrPaymentGetPixBankListRequest",
  ["WASmaxJsx", "WASmaxOutBrPaymentBaseIQGetRequestMixin", "WAWap"],
  function (t, n, r, o, a, i, l) {
    function e() {
      var e = o(
        "WASmaxOutBrPaymentBaseIQGetRequestMixin",
      ).mergeBaseIQGetRequestMixin(
        o("WASmaxJsx").smax(
          "iq",
          { to: o("WAWap").S_WHATSAPP_NET, xmlns: "w:pay" },
          o("WASmaxJsx").smax("account", { action: "get-pix-bank-list" }),
        ),
      );
      return e;
    }
    l.makeGetPixBankListRequest = e;
  },
  98,
);
