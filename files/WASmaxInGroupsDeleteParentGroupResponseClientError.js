__d(
  "WASmaxInGroupsDeleteParentGroupResponseClientError",
  [
    "WAResultOrError",
    "WASmaxInGroupsDeleteParentGroupClientError",
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
        "WASmaxInGroupsDeleteParentGroupClientError",
      ).parseDeleteParentGroupClientError(r.value);
      return i.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends({}, a.value, {
              errorDeleteParentGroupClientError: i.value,
            }),
          )
        : i;
    }
    l.parseDeleteParentGroupResponseClientError = e;
  },
  98,
);
