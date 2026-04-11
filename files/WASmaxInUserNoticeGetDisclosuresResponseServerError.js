__d(
  "WASmaxInUserNoticeGetDisclosuresResponseServerError",
  [
    "WAResultOrError",
    "WASmaxInUserNoticeIQErrorResponseMixin",
    "WASmaxInUserNoticeUserNoticeServerError",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      var n = o("WASmaxParseUtils").assertTag(e, "iq");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").flattenedChildWithTag(e, "error");
      if (!r.success) return r;
      var a = o(
        "WASmaxInUserNoticeIQErrorResponseMixin",
      ).parseIQErrorResponseMixin(e, t);
      if (!a.success) return a;
      var i = o(
        "WASmaxInUserNoticeUserNoticeServerError",
      ).parseUserNoticeServerError(r.value);
      return i.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends({}, a.value, {
              errorUserNoticeServerError: i.value,
            }),
          )
        : i;
    }
    l.parseGetDisclosuresResponseServerError = e;
  },
  98,
);
