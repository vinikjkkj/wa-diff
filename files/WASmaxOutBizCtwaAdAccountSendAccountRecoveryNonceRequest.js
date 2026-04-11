__d(
  "WASmaxOutBizCtwaAdAccountSendAccountRecoveryNonceRequest",
  ["WASmaxJsx", "WASmaxOutBizCtwaAdAccountHackBaseIQGetRequestMixin", "WAWap"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o(
        "WASmaxOutBizCtwaAdAccountHackBaseIQGetRequestMixin",
      ).mergeHackBaseIQGetRequestMixin(
        o("WASmaxJsx").smax("iq", {
          xmlns: "fb:thrift_iq",
          smax_id: o("WAWap").INT(112),
        }),
        e,
      );
      return t;
    }
    l.makeSendAccountRecoveryNonceRequest = e;
  },
  98,
);
