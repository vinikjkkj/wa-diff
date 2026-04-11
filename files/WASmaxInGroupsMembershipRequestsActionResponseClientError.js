__d(
  "WASmaxInGroupsMembershipRequestsActionResponseClientError",
  [
    "WAResultOrError",
    "WASmaxInGroupsIQErrorResponseMixin",
    "WASmaxInGroupsMembershipRequestsActionClientErrors",
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
        "WASmaxInGroupsMembershipRequestsActionClientErrors",
      ).parseMembershipRequestsActionClientErrors(r.value);
      return i.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends({}, a.value, {
              errorMembershipRequestsActionClientErrors: i.value,
            }),
          )
        : i;
    }
    l.parseMembershipRequestsActionResponseClientError = e;
  },
  98,
);
