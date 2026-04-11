__d(
  "WASmaxOutAccountSetPaymentsTOSv3UPIConsumerPaymentsTOSv3Mixin",
  ["WASmaxChildren", "WASmaxJsx", "WASmaxMixins", "WAWap"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.additionalNoticeNotice,
        n = o("WASmaxJsx").smax("additional_notice", {
          notice: o("WAWap").CUSTOM_STRING(t),
        });
      return n;
    }
    function s(t) {
      var n = t.additionalNoticeArgs,
        r = o("WASmaxJsx").smax(
          "accept_pay",
          { service: "UPI" },
          o("WASmaxChildren").REPEATED_CHILD(e, n, 1, 10),
        );
      return r;
    }
    function u(e, t) {
      var n = s(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    ((l.makeSetPaymentsTOSv3UPIConsumerPaymentsTOSv3AdditionalNotice = e),
      (l.mergeSetPaymentsTOSv3UPIConsumerPaymentsTOSv3Mixin = u));
  },
  98,
);
