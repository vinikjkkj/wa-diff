__d(
  "WASmaxOutStatsSendBufferRequest",
  ["WASmaxJsx", "WASmaxOutStatsBaseIQSetRequestMixin", "WAWap"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.addT,
        n = e.addElementValue,
        r = o("WASmaxOutStatsBaseIQSetRequestMixin").mergeBaseIQSetRequestMixin(
          o("WASmaxJsx").smax(
            "iq",
            { xmlns: "w:stats", to: o("WAWap").S_WHATSAPP_NET },
            o("WASmaxJsx").smax("add", { t: o("WAWap").INT(t) }, n),
          ),
        );
      return r;
    }
    l.makeSendBufferRequest = e;
  },
  98,
);
