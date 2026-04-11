__d(
  "WASmaxOutGroupsGetMembershipApprovalRequestsRequest",
  [
    "WASmaxJsx",
    "WASmaxMixins",
    "WASmaxOutGroupsBaseGetGroupMixin",
    "WASmaxOutGroupsGetMembershipApprovalRequestsRequestorFetchMixin",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.hasGetMembershipApprovalRequestsRequestorFetch,
        n = o("WASmaxOutGroupsBaseGetGroupMixin").mergeBaseGetGroupMixin(
          o("WASmaxJsx").smax(
            "iq",
            null,
            o("WASmaxMixins").optionalMerge(
              o(
                "WASmaxOutGroupsGetMembershipApprovalRequestsRequestorFetchMixin",
              ).mergeGetMembershipApprovalRequestsRequestorFetchMixin,
              o("WASmaxJsx").smax("membership_approval_requests", null),
              t,
            ),
          ),
          e,
        );
      return n;
    }
    l.makeGetMembershipApprovalRequestsRequest = e;
  },
  98,
);
