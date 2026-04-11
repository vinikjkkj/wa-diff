__d(
  "WASmaxOutBizAccessTokenRequestSilentNonceRequest",
  ["WASmaxJsx", "WASmaxOutBizAccessTokenHackBaseIQGetRequestMixin", "WAWap"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o(
        "WASmaxOutBizAccessTokenHackBaseIQGetRequestMixin",
      ).mergeHackBaseIQGetRequestMixin(
        o("WASmaxJsx").smax("iq", {
          xmlns: "fb:thrift_iq",
          smax_id: o("WAWap").INT(118),
        }),
        e,
      );
      return t;
    }
    l.makeRequestSilentNonceRequest = e;
  },
  98,
);
