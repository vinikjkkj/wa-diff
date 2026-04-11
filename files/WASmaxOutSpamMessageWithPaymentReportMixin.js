__d(
  "WASmaxOutSpamMessageWithPaymentReportMixin",
  [
    "WASmaxJsx",
    "WASmaxMixins",
    "WASmaxOutSpamContentTypePayMixin",
    "WASmaxOutSpamReportPayNodeMixin",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.reportPayNodeMixinArgs,
        n = o("WASmaxOutSpamContentTypePayMixin").mergeContentTypePayMixin(
          o("WASmaxJsx").smax(
            "message",
            null,
            o("WASmaxOutSpamReportPayNodeMixin").mergeReportPayNodeMixin(
              o("WASmaxJsx").smax("pay", null),
              t,
            ),
          ),
        );
      return n;
    }
    function s(t, n) {
      var r = e(n);
      return o("WASmaxMixins").mergeStanzas(t, r);
    }
    l.mergeMessageWithPaymentReportMixin = s;
  },
  98,
);
