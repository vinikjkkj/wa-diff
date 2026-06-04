__d(
  "WASmaxInMdGetPasskeyRequestOptionsResponseError",
  [
    "WAResultOrError",
    "WASmaxInMdIQErrorInternalServerErrorMixin",
    "WASmaxInMdIQErrorResponseMixin",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      var n = o("WASmaxParseUtils").assertTag(e, "iq");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").flattenedChildWithTag(e, "error");
      if (!r.success) return r;
      var a = o(
        "WASmaxInMdIQErrorInternalServerErrorMixin",
      ).parseIQErrorInternalServerErrorMixin(r.value);
      if (!a.success) return a;
      var i = o("WASmaxInMdIQErrorResponseMixin").parseIQErrorResponseMixin(
        e,
        t,
      );
      return i.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends(
              { errorIQErrorInternalServerErrorMixin: a.value },
              i.value,
            ),
          )
        : i;
    }
    l.parseGetPasskeyRequestOptionsResponseError = e;
  },
  98,
);
