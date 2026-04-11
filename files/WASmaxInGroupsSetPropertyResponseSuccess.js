__d(
  "WASmaxInGroupsSetPropertyResponseSuccess",
  [
    "WAResultOrError",
    "WASmaxInGroupsIQResultResponseMixin",
    "WASmaxInGroupsMembershipApprovalPropertyResponseMixinMixin",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "ephemeral");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").attrIntRange(
        e,
        "expiration",
        0,
        2147483647,
      );
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrIntRange,
        e,
        "trigger",
        0,
        20,
      );
      return r.success
        ? o("WAResultOrError").makeResult({
            expiration: n.value,
            trigger: r.value,
          })
        : r;
    }
    function s(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "membership_approval_mode");
      if (!t.success) return t;
      var n = o(
        "WASmaxInGroupsMembershipApprovalPropertyResponseMixinMixin",
      ).parseMembershipApprovalPropertyResponseMixinMixin(e);
      return o("WAResultOrError").makeResult({
        membershipApprovalPropertyResponseMixinMixin: n.success
          ? n.value
          : null,
      });
    }
    function u(t, n) {
      var r = o("WASmaxParseUtils").assertTag(t, "iq");
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").optionalChild(t, "locked");
      if (!a.success) return a;
      var i = o("WASmaxParseUtils").optionalChild(t, "announcement");
      if (!i.success) return i;
      var l = o("WASmaxParseUtils").optionalChild(t, "no_frequently_forwarded");
      if (!l.success) return l;
      var u = o("WASmaxParseUtils").optionalChildWithTag(t, "ephemeral", e);
      if (!u.success) return u;
      var c = o("WASmaxParseUtils").optionalChild(t, "unlocked");
      if (!c.success) return c;
      var d = o("WASmaxParseUtils").optionalChild(t, "not_announcement");
      if (!d.success) return d;
      var m = o("WASmaxParseUtils").optionalChild(t, "frequently_forwarded_ok");
      if (!m.success) return m;
      var p = o("WASmaxParseUtils").optionalChild(t, "not_ephemeral");
      if (!p.success) return p;
      var _ = o("WASmaxParseUtils").optionalChildWithTag(
        t,
        "membership_approval_mode",
        s,
      );
      if (!_.success) return _;
      var f = o("WASmaxParseUtils").optionalChild(t, "allow_admin_reports");
      if (!f.success) return f;
      var g = o("WASmaxParseUtils").optionalChild(t, "not_allow_admin_reports");
      if (!g.success) return g;
      var h = o("WASmaxParseUtils").optionalChild(
        t,
        "allow_non_admin_sub_group_creation",
      );
      if (!h.success) return h;
      var y = o("WASmaxParseUtils").optionalChild(
        t,
        "not_allow_non_admin_sub_group_creation",
      );
      if (!y.success) return y;
      var C = o("WASmaxParseUtils").optionalChild(t, "group_history");
      if (!C.success) return C;
      var b = o("WASmaxParseUtils").optionalChild(t, "no_group_history");
      if (!b.success) return b;
      var v = o(
        "WASmaxInGroupsIQResultResponseMixin",
      ).parseIQResultResponseMixin(t, n);
      return v.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends({}, v.value, {
              hasLocked: a.value != null,
              hasAnnouncement: i.value != null,
              hasNoFrequentlyForwarded: l.value != null,
              ephemeral: u.value,
              hasUnlocked: c.value != null,
              hasNotAnnouncement: d.value != null,
              hasFrequentlyForwardedOk: m.value != null,
              hasNotEphemeral: p.value != null,
              membershipApprovalMode: _.value,
              hasAllowAdminReports: f.value != null,
              hasNotAllowAdminReports: g.value != null,
              hasAllowNonAdminSubGroupCreation: h.value != null,
              hasNotAllowNonAdminSubGroupCreation: y.value != null,
              hasGroupHistory: C.value != null,
              hasNoGroupHistory: b.value != null,
            }),
          )
        : v;
    }
    ((l.parseSetPropertyResponseSuccessEphemeral = e),
      (l.parseSetPropertyResponseSuccessMembershipApprovalMode = s),
      (l.parseSetPropertyResponseSuccess = u));
  },
  98,
);
