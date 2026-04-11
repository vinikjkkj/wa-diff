__d(
  "WASmaxInMdCompanionFinishResponseError",
  [
    "WAResultOrError",
    "WASmaxInMdCompanionFinishErrors",
    "WASmaxInMdIQErrorResponseMixin",
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
      var i = o("WASmaxInMdCompanionFinishErrors").parseCompanionFinishErrors(
        r.value,
      );
      return i.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends({}, a.value, {
              errorCompanionFinishErrors: i.value,
            }),
          )
        : i;
    }
    l.parseCompanionFinishResponseError = e;
  },
  98,
);
