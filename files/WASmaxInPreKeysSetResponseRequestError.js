__d(
  "WASmaxInPreKeysSetResponseRequestError",
  [
    "WAResultOrError",
    "WASmaxInPreKeysIQErrorResponseMixin",
    "WASmaxInPreKeysRequestErrors",
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
      var i = o("WASmaxInPreKeysRequestErrors").parseRequestErrors(r.value);
      return i.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends({}, a.value, { errorRequestErrors: i.value }),
          )
        : i;
    }
    l.parseSetResponseRequestError = e;
  },
  98,
);
