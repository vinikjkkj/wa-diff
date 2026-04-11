__d(
  "WASmaxInMdCompanionHelloResponseError",
  [
    "WAResultOrError",
    "WASmaxInMdIQErrorResponseMixin",
    "WASmaxInMdIqMixinErrors",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      var n = o("WASmaxParseUtils").assertTag(e, "iq");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").flattenedChildWithTag(e, "error");
      if (!r.success) return r;
      var a = o("WASmaxInMdIQErrorResponseMixin").parseIQErrorResponseMixin(
        e,
        t,
      );
      if (!a.success) return a;
      var i = o("WASmaxInMdIqMixinErrors").parseIqMixinErrors(r.value);
      return i.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends({}, a.value, { errorIqMixinErrors: i.value }),
          )
        : i;
    }
    l.parseCompanionHelloResponseError = e;
  },
  98,
);
