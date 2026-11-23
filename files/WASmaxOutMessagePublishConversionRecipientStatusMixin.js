__d(
  "WASmaxOutMessagePublishConversionRecipientStatusMixin",
  ["WASmaxJsx", "WASmaxMixins", "WAWap"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.conversionRecipientStatus,
        n = o("WASmaxJsx").smax(
          "message",
          null,
          o("WASmaxJsx").smax("conversion", {
            recipient_status: o("WAWap").CUSTOM_STRING(t),
          }),
        );
      return n;
    }
    function s(t, n) {
      var r = e(n);
      return o("WASmaxMixins").mergeStanzas(t, r);
    }
    l.mergeConversionRecipientStatusMixin = s;
  },
  98,
);
