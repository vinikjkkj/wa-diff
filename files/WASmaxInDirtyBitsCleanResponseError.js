__d(
  "WASmaxInDirtyBitsCleanResponseError",
  [
    "WAResultOrError",
    "WASmaxInDirtyBitsCleanErrorTypes",
    "WASmaxInDirtyBitsIQErrorResponseMixin",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      var n = o("WASmaxParseUtils").assertTag(e, "iq");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").flattenedChildWithTag(e, "error");
      if (!r.success) return r;
      var a = o(
        "WASmaxInDirtyBitsIQErrorResponseMixin",
      ).parseIQErrorResponseMixin(e, t);
      if (!a.success) return a;
      var i = o("WASmaxInDirtyBitsCleanErrorTypes").parseCleanErrorTypes(
        r.value,
      );
      return i.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends({}, a.value, {
              errorCleanErrorTypes: i.value,
            }),
          )
        : i;
    }
    l.parseCleanResponseError = e;
  },
  98,
);
