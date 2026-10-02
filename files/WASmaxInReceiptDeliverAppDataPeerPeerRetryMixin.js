__d(
  "WASmaxInReceiptDeliverAppDataPeerPeerRetryMixin",
  [
    "WAResultOrError",
    "WASmaxInReceiptAppDataPeerRetryTypeMixin",
    "WASmaxInReceiptKeyBundleMixin",
    "WASmaxInReceiptRegistrationIDMixin",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "receipt");
      if (!t.success) return t;
      var n = o(
        "WASmaxInReceiptAppDataPeerRetryTypeMixin",
      ).parseAppDataPeerRetryTypeMixin(e);
      if (!n.success) return n;
      var r = o("WASmaxInReceiptRegistrationIDMixin").parseRegistrationIDMixin(
        e,
      );
      if (!r.success) return r;
      var a = o("WASmaxInReceiptKeyBundleMixin").parseKeyBundleMixin(e);
      return o("WAResultOrError").makeResult(
        babelHelpers.extends({}, n.value, r.value, {
          keyBundleMixin: a.success ? a.value : null,
        }),
      );
    }
    l.parseDeliverAppDataPeerPeerRetryMixin = e;
  },
  98,
);
