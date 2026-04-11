__d(
  "WASmaxOutGroupsMembershipRequestsActionRequest",
  [
    "WASmaxAttrs",
    "WASmaxChildren",
    "WASmaxJsx",
    "WASmaxOutGroupsBaseSetGroupMixin",
    "WAWap",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.participantJid,
        n = e.participantPhoneNumber,
        r = e.participantUsername,
        a = o("WASmaxJsx").smax("participant", {
          jid: o("WAWap").JID(t),
          phone_number: o("WASmaxAttrs").OPTIONAL(o("WAWap").JID, n),
          username: o("WASmaxAttrs").OPTIONAL(o("WAWap").CUSTOM_STRING, r),
        });
      return a;
    }
    function s(t) {
      var n = t.participantArgs,
        r = o("WASmaxJsx").smax(
          "approve",
          null,
          o("WASmaxChildren").REPEATED_CHILD(e, n, 1, 19999),
        );
      return r;
    }
    function u(e) {
      var t = e.participantJid,
        n = e.participantPhoneNumber,
        r = e.participantUsername,
        a = o("WASmaxJsx").smax("participant", {
          jid: o("WAWap").JID(t),
          phone_number: o("WASmaxAttrs").OPTIONAL(o("WAWap").JID, n),
          username: o("WASmaxAttrs").OPTIONAL(o("WAWap").CUSTOM_STRING, r),
        });
      return a;
    }
    function c(e) {
      var t = e.participantArgs,
        n = o("WASmaxJsx").smax(
          "reject",
          null,
          o("WASmaxChildren").REPEATED_CHILD(u, t, 1, 19999),
        );
      return n;
    }
    function d(e) {
      var t = e.approveArgs,
        n = e.rejectArgs,
        r = o("WASmaxOutGroupsBaseSetGroupMixin").mergeBaseSetGroupMixin(
          o("WASmaxJsx").smax(
            "iq",
            null,
            o("WASmaxJsx").smax(
              "membership_requests_action",
              null,
              o("WASmaxChildren").OPTIONAL_CHILD(s, t),
              o("WASmaxChildren").OPTIONAL_CHILD(c, n),
            ),
          ),
          e,
        );
      return r;
    }
    ((l.makeMembershipRequestsActionRequestMembershipRequestsActionApproveParticipant =
      e),
      (l.makeMembershipRequestsActionRequestMembershipRequestsActionApprove =
        s),
      (l.makeMembershipRequestsActionRequestMembershipRequestsActionRejectParticipant =
        u),
      (l.makeMembershipRequestsActionRequestMembershipRequestsActionReject = c),
      (l.makeMembershipRequestsActionRequest = d));
  },
  98,
);
