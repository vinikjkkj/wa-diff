__d(
  "WASmaxInKeyTransparencyKeyTransparencyIQErrorResponseMixin",
  [
    "WAResultOrError",
    "WASmaxInKeyTransparencyIQErrorResponseMixin",
    "WASmaxInKeyTransparencyKeyTransparencyErrorTypes",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      var n = o("WASmaxParseUtils").assertTag(e, "iq");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").flattenedChildWithTag(e, "error");
      if (!r.success) return r;
      var a = o(
        "WASmaxInKeyTransparencyIQErrorResponseMixin",
      ).parseIQErrorResponseMixin(e, t);
      if (!a.success) return a;
      var i = o(
        "WASmaxInKeyTransparencyKeyTransparencyErrorTypes",
      ).parseKeyTransparencyErrorTypes(r.value);
      return i.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends({}, a.value, {
              errorKeyTransparencyErrorTypes: i.value,
            }),
          )
        : i;
    }
    l.parseKeyTransparencyIQErrorResponseMixin = e;
  },
  98,
);
