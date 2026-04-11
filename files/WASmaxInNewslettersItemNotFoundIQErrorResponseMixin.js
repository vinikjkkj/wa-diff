__d(
  "WASmaxInNewslettersItemNotFoundIQErrorResponseMixin",
  [
    "WAResultOrError",
    "WASmaxInNewslettersIQErrorItemNotFoundMixin",
    "WASmaxInNewslettersIQErrorResponseMixin",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      var n = o("WASmaxParseUtils").assertTag(e, "iq");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").flattenedChildWithTag(e, "error");
      if (!r.success) return r;
      var a = o(
        "WASmaxInNewslettersIQErrorItemNotFoundMixin",
      ).parseIQErrorItemNotFoundMixin(r.value);
      if (!a.success) return a;
      var i = o(
        "WASmaxInNewslettersIQErrorResponseMixin",
      ).parseIQErrorResponseMixin(e, t);
      return i.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends(
              { errorIQErrorItemNotFoundMixin: a.value },
              i.value,
            ),
          )
        : i;
    }
    l.parseItemNotFoundIQErrorResponseMixin = e;
  },
  98,
);
