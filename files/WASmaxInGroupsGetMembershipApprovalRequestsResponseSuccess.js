__d(
  "WASmaxInGroupsGetMembershipApprovalRequestsResponseSuccess",
  [
    "WAResultOrError",
    "WASmaxInGroupsGetMembershipApprovalRequestsMembershipApprovalRequestMixin",
    "WASmaxInGroupsGetMembershipApprovalRequestsRequestorFetchMixin",
    "WASmaxInGroupsGroupAddressingModeMixin",
    "WASmaxInGroupsIQResultResponseMixin",
    "WASmaxInGroupsIdentityMixin",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "membership_approval_request");
      if (!t.success) return t;
      var n = o(
        "WASmaxInGroupsGetMembershipApprovalRequestsMembershipApprovalRequestMixin",
      ).parseGetMembershipApprovalRequestsMembershipApprovalRequestMixin(e);
      if (!n.success) return n;
      var r = o("WASmaxInGroupsIdentityMixin").parseIdentityMixin(e);
      return o("WAResultOrError").makeResult(
        babelHelpers.extends({}, n.value, {
          identityMixin: r.success ? r.value : null,
        }),
      );
    }
    function s(t, n) {
      var r = o("WASmaxParseUtils").assertTag(t, "iq");
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").flattenedChildWithTag(
        t,
        "membership_approval_requests",
      );
      if (!a.success) return a;
      var i = o(
          "WASmaxInGroupsGetMembershipApprovalRequestsRequestorFetchMixin",
        ).parseGetMembershipApprovalRequestsRequestorFetchMixin(a.value),
        l = o("WASmaxInGroupsIQResultResponseMixin").parseIQResultResponseMixin(
          t,
          n,
        );
      if (!l.success) return l;
      var s = o(
          "WASmaxInGroupsGroupAddressingModeMixin",
        ).parseGroupAddressingModeMixin(t),
        u = o("WASmaxParseUtils").mapChildrenWithTag(
          a.value,
          "membership_approval_request",
          0,
          19999,
          e,
        );
      return u.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends(
              {
                membershipApprovalRequestsGetMembershipApprovalRequestsRequestorFetchMixin:
                  i.success ? i.value : null,
              },
              l.value,
              {
                groupAddressingModeMixin: s.success ? s.value : null,
                membershipApprovalRequestsMembershipApprovalRequest: u.value,
              },
            ),
          )
        : u;
    }
    ((l.parseGetMembershipApprovalRequestsResponseSuccessMembershipApprovalRequestsMembershipApprovalRequest =
      e),
      (l.parseGetMembershipApprovalRequestsResponseSuccess = s));
  },
  98,
);
