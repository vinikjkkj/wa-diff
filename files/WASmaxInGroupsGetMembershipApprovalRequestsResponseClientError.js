__d(
  "WASmaxInGroupsGetMembershipApprovalRequestsResponseClientError",
  [
    "WAResultOrError",
    "WASmaxInGroupsGetMembershipApprovalRequestsClientErrors",
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
        "WASmaxInGroupsGetMembershipApprovalRequestsClientErrors",
      ).parseGetMembershipApprovalRequestsClientErrors(r.value);
      return i.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends({}, a.value, {
              errorGetMembershipApprovalRequestsClientErrors: i.value,
            }),
          )
        : i;
    }
    l.parseGetMembershipApprovalRequestsResponseClientError = e;
  },
  98,
);
