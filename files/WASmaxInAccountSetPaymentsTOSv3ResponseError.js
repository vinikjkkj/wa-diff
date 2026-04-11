__d(
  "WASmaxInAccountSetPaymentsTOSv3ResponseError",
  [
    "WAResultOrError",
    "WASmaxInAccountIQErrorResponseMixin",
    "WASmaxInAccountSetPaymentsTosErrors",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      var n = o("WASmaxParseUtils").assertTag(e, "iq");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").flattenedChildWithTag(e, "error");
      if (!r.success) return r;
      var a = o(
        "WASmaxInAccountIQErrorResponseMixin",
      ).parseIQErrorResponseMixin(e, t);
      if (!a.success) return a;
      var i = o(
        "WASmaxInAccountSetPaymentsTosErrors",
      ).parseSetPaymentsTosErrors(r.value);
      return i.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends({}, a.value, {
              errorSetPaymentsTosErrors: i.value,
            }),
          )
        : i;
    }
    l.parseSetPaymentsTOSv3ResponseError = e;
  },
  98,
);
