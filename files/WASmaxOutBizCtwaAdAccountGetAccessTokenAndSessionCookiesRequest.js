__d(
  "WASmaxOutBizCtwaAdAccountGetAccessTokenAndSessionCookiesRequest",
  ["WASmaxJsx", "WASmaxOutBizCtwaAdAccountHackBaseIQGetRequestMixin", "WAWap"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.codeElementValue,
        n = o(
          "WASmaxOutBizCtwaAdAccountHackBaseIQGetRequestMixin",
        ).mergeHackBaseIQGetRequestMixin(
          o("WASmaxJsx").smax(
            "iq",
            { xmlns: "fb:thrift_iq", smax_id: o("WAWap").INT(104) },
            o("WASmaxJsx").smax(
              "parameters",
              null,
              o("WASmaxJsx").smax("code", null, t),
            ),
          ),
          e,
        );
      return n;
    }
    l.makeGetAccessTokenAndSessionCookiesRequest = e;
  },
  98,
);
