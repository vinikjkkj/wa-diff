__d(
  "WASmaxOutMessagePublishIndividualRequestPayNodeMixin",
  [
    "WASmaxAttrs",
    "WASmaxJsx",
    "WASmaxMixins",
    "WASmaxOutMessagePublishBasePayNodeMixin",
    "WAWap",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.paySender,
        n = e.payExpiryTs,
        r = e.payRequestId,
        a = o("WASmaxOutMessagePublishBasePayNodeMixin").mergeBasePayNodeMixin(
          o("WASmaxJsx").smax("pay", {
            sender: o("WASmaxAttrs").OPTIONAL(o("WAWap").USER_JID, t),
            "expiry-ts": o("WAWap").CUSTOM_STRING(n),
            "request-id": o("WAWap").CUSTOM_STRING(r),
          }),
          e,
        );
      return a;
    }
    function s(t, n) {
      var r = e(n);
      return o("WASmaxMixins").mergeStanzas(t, r);
    }
    l.mergeIndividualRequestPayNodeMixin = s;
  },
  98,
);
