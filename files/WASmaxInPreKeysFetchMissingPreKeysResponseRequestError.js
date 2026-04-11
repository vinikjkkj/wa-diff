__d(
  "WASmaxInPreKeysFetchMissingPreKeysResponseRequestError",
  [
    "WAResultOrError",
    "WASmaxInPreKeysIQErrorResponseMixin",
    "WASmaxInPreKeysRequestErrorsFetch",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      var n = o("WASmaxParseUtils").assertTag(e, "iq");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").flattenedChildWithTag(e, "error");
      if (!r.success) return r;
      var a = o(
        "WASmaxInPreKeysIQErrorResponseMixin",
      ).parseIQErrorResponseMixin(e, t);
      if (!a.success) return a;
      var i = o("WASmaxInPreKeysRequestErrorsFetch").parseRequestErrorsFetch(
        r.value,
      );
      return i.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends({}, a.value, {
              errorRequestErrorsFetch: i.value,
            }),
          )
        : i;
    }
    l.parseFetchMissingPreKeysResponseRequestError = e;
  },
  98,
);
