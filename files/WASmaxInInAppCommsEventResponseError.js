__d(
  "WASmaxInInAppCommsEventResponseError",
  [
    "WAResultOrError",
    "WASmaxInInAppCommsEventErrorTypes",
    "WASmaxInInAppCommsIQErrorResponseMixin",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      var n = o("WASmaxParseUtils").assertTag(e, "iq");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").flattenedChildWithTag(e, "error");
      if (!r.success) return r;
      var a = o(
        "WASmaxInInAppCommsIQErrorResponseMixin",
      ).parseIQErrorResponseMixin(e, t);
      if (!a.success) return a;
      var i = o("WASmaxInInAppCommsEventErrorTypes").parseEventErrorTypes(
        r.value,
      );
      return i.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends({}, a.value, {
              errorEventErrorTypes: i.value,
            }),
          )
        : i;
    }
    l.parseEventResponseError = e;
  },
  98,
);
