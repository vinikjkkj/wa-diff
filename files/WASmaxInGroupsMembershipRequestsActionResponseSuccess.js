__d(
  "WASmaxInGroupsMembershipRequestsActionResponseSuccess",
  [
    "WAResultOrError",
    "WASmaxInGroupsEnums",
    "WASmaxInGroupsGroupAddressingModeMixin",
    "WASmaxInGroupsIdentityMixin",
    "WASmaxInGroupsMembershipRequestsActionAcceptParticipantMixins",
    "WASmaxInGroupsMembershipRequestsActionRejectParticipantMixins",
    "WASmaxParseJid",
    "WASmaxParseReference",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "participant");
      if (!t.success) return t;
      var n = o("WASmaxParseJid").attrJidEnum(
        e,
        "jid",
        o("WASmaxInGroupsEnums").USERJID_USERJID,
      );
      if (!n.success) return n;
      var r = o("WASmaxInGroupsIdentityMixin").parseIdentityMixin(e),
        a = o(
          "WASmaxInGroupsMembershipRequestsActionAcceptParticipantMixins",
        ).parseMembershipRequestsActionAcceptParticipantMixins(e);
      return o("WAResultOrError").makeResult({
        jid: n.value,
        identityMixin: r.success ? r.value : null,
        membershipRequestsActionAcceptParticipantMixins: a.success
          ? a.value
          : null,
      });
    }
    function s(t) {
      var n = o("WASmaxParseUtils").assertTag(t, "approve");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").mapChildrenWithTag(
        t,
        "participant",
        1,
        19999,
        e,
      );
      return r.success
        ? o("WAResultOrError").makeResult({ participant: r.value })
        : r;
    }
    function u(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "participant");
      if (!t.success) return t;
      var n = o("WASmaxParseJid").attrJidEnum(
        e,
        "jid",
        o("WASmaxInGroupsEnums").USERJID_USERJID,
      );
      if (!n.success) return n;
      var r = o("WASmaxInGroupsIdentityMixin").parseIdentityMixin(e),
        a = o(
          "WASmaxInGroupsMembershipRequestsActionRejectParticipantMixins",
        ).parseMembershipRequestsActionRejectParticipantMixins(e);
      return o("WAResultOrError").makeResult({
        jid: n.value,
        identityMixin: r.success ? r.value : null,
        membershipRequestsActionRejectParticipantMixins: a.success
          ? a.value
          : null,
      });
    }
    function c(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "reject");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").mapChildrenWithTag(
        e,
        "participant",
        1,
        19999,
        u,
      );
      return n.success
        ? o("WAResultOrError").makeResult({ participant: n.value })
        : n;
    }
    function d(e, t) {
      var n = o("WASmaxParseUtils").assertTag(e, "iq");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").flattenedChildWithTag(
        e,
        "membership_requests_action",
      );
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").optionalChildWithTag(r.value, "approve", s);
      if (!a.success) return a;
      var i = o("WASmaxParseUtils").optionalChildWithTag(r.value, "reject", c);
      if (!i.success) return i;
      var l = o("WASmaxParseReference").attrStringFromReference(t, ["to"]);
      if (!l.success) return l;
      var u = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        e,
        "from",
        l.value,
      );
      if (!u.success) return u;
      var d = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        e,
        "type",
        "result",
      );
      if (!d.success) return d;
      var m = o("WASmaxParseReference").attrStringFromReference(t, ["id"]);
      if (!m.success) return m;
      var p = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        e,
        "id",
        m.value,
      );
      if (!p.success) return p;
      var _ = o(
        "WASmaxInGroupsGroupAddressingModeMixin",
      ).parseGroupAddressingModeMixin(e);
      return o("WAResultOrError").makeResult({
        type: d.value,
        groupAddressingModeMixin: _.success ? _.value : null,
        membershipRequestsActionApprove: a.value,
        membershipRequestsActionReject: i.value,
      });
    }
    ((l.parseMembershipRequestsActionResponseSuccessMembershipRequestsActionApproveParticipant =
      e),
      (l.parseMembershipRequestsActionResponseSuccessMembershipRequestsActionApprove =
        s),
      (l.parseMembershipRequestsActionResponseSuccessMembershipRequestsActionRejectParticipant =
        u),
      (l.parseMembershipRequestsActionResponseSuccessMembershipRequestsActionReject =
        c),
      (l.parseMembershipRequestsActionResponseSuccess = d));
  },
  98,
);
