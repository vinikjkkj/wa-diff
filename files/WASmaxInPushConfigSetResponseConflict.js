__d(
  "WASmaxInPushConfigSetResponseConflict",
  [
    "WAResultOrError",
    "WASmaxInPushConfigIQErrorConflictMixin",
    "WASmaxInPushConfigIQErrorResponseMixin",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      var n = o("WASmaxParseUtils").assertTag(e, "iq");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").flattenedChildWithTag(e, "error");
      if (!r.success) return r;
      var a = o(
        "WASmaxInPushConfigIQErrorConflictMixin",
      ).parseIQErrorConflictMixin(r.value);
      if (!a.success) return a;
      var i = o(
        "WASmaxInPushConfigIQErrorResponseMixin",
      ).parseIQErrorResponseMixin(e, t);
      return i.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends(
              { errorIQErrorConflictMixin: a.value },
              i.value,
            ),
          )
        : i;
    }
    l.parseSetResponseConflict = e;
  },
  98,
);
