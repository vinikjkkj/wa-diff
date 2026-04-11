__d(
  "WASmaxInPrivatestatsSignCredentialResponseErrorNoRetry",
  [
    "WAResultOrError",
    "WASmaxInPrivatestatsIQErrorResponseMixin",
    "WASmaxInPrivatestatsSignCredentialNoRetryError",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      var n = o("WASmaxParseUtils").assertTag(e, "iq");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").flattenedChildWithTag(e, "error");
      if (!r.success) return r;
      var a = o(
        "WASmaxInPrivatestatsIQErrorResponseMixin",
      ).parseIQErrorResponseMixin(e, t);
      if (!a.success) return a;
      var i = o(
        "WASmaxInPrivatestatsSignCredentialNoRetryError",
      ).parseSignCredentialNoRetryError(r.value);
      return i.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends({}, a.value, {
              errorSignCredentialNoRetryError: i.value,
            }),
          )
        : i;
    }
    l.parseSignCredentialResponseErrorNoRetry = e;
  },
  98,
);
