__d(
  "WASmaxInGroupsAcceptGroupAddResponseClientError",
  [
    "WAResultOrError",
    "WASmaxInGroupsAcceptGroupAddClientErrors",
    "WASmaxInGroupsIQErrorResponseMixin",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      var n = o("WASmaxParseUtils").assertTag(e, "iq");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").flattenedChildWithTag(e, "error");
      if (!r.success) return r;
      var a = o("WASmaxInGroupsIQErrorResponseMixin").parseIQErrorResponseMixin(
        e,
        t,
      );
      if (!a.success) return a;
      var i = o(
        "WASmaxInGroupsAcceptGroupAddClientErrors",
      ).parseAcceptGroupAddClientErrors(r.value);
      return i.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends({}, a.value, {
              errorAcceptGroupAddClientErrors: i.value,
            }),
          )
        : i;
    }
    l.parseAcceptGroupAddResponseClientError = e;
  },
  98,
);
