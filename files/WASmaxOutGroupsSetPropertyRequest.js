__d(
  "WASmaxOutGroupsSetPropertyRequest",
  [
    "WASmaxAttrs",
    "WASmaxChildren",
    "WASmaxJsx",
    "WASmaxOutGroupsBaseSetGroupMixin",
    "WASmaxOutGroupsMembershipApprovalGroupJoinModeMixin",
    "WAWap",
  ],
  function (t, n, r, o, a, i, l) {
    function e() {
      var e = o("WASmaxJsx").smax("locked", null);
      return e;
    }
    function s() {
      var e = o("WASmaxJsx").smax("announcement", null);
      return e;
    }
    function u() {
      var e = o("WASmaxJsx").smax("no_frequently_forwarded", null);
      return e;
    }
    function c(e) {
      var t = e.ephemeralExpiration,
        n = e.ephemeralTrigger,
        r = o("WASmaxJsx").smax("ephemeral", {
          expiration: o("WAWap").INT(t),
          trigger: o("WASmaxAttrs").OPTIONAL(o("WAWap").INT, n),
        });
      return r;
    }
    function d() {
      var e = o("WASmaxJsx").smax("unlocked", null);
      return e;
    }
    function m() {
      var e = o("WASmaxJsx").smax("not_announcement", null);
      return e;
    }
    function p() {
      var e = o("WASmaxJsx").smax("frequently_forwarded_ok", null);
      return e;
    }
    function _() {
      var e = o("WASmaxJsx").smax("not_ephemeral", null);
      return e;
    }
    function f(e) {
      var t = o(
        "WASmaxOutGroupsMembershipApprovalGroupJoinModeMixin",
      ).mergeMembershipApprovalGroupJoinModeMixin(
        o("WASmaxJsx").smax("membership_approval_mode", null),
        e,
      );
      return t;
    }
    function g() {
      var e = o("WASmaxJsx").smax("allow_admin_reports", null);
      return e;
    }
    function h() {
      var e = o("WASmaxJsx").smax("not_allow_admin_reports", null);
      return e;
    }
    function y() {
      var e = o("WASmaxJsx").smax("allow_non_admin_sub_group_creation", null);
      return e;
    }
    function C() {
      var e = o("WASmaxJsx").smax(
        "not_allow_non_admin_sub_group_creation",
        null,
      );
      return e;
    }
    function b() {
      var e = o("WASmaxJsx").smax("group_history", null);
      return e;
    }
    function v() {
      var e = o("WASmaxJsx").smax("no_group_history", null);
      return e;
    }
    function S(t) {
      var n,
        r = t.hasLocked,
        a = t.hasAnnouncement,
        i = t.hasNoFrequentlyForwarded,
        l = t.ephemeralArgs,
        S = t.hasUnlocked,
        R = t.hasNotAnnouncement,
        L = t.hasFrequentlyForwardedOk,
        E = t.hasNotEphemeral,
        k = t.membershipApprovalModeArgs,
        I = t.hasAllowAdminReports,
        T = t.hasNotAllowAdminReports,
        D = t.hasAllowNonAdminSubGroupCreation,
        x = t.hasNotAllowNonAdminSubGroupCreation,
        $ = t.hasGroupHistory,
        P = t.hasNoGroupHistory,
        N = o("WASmaxOutGroupsBaseSetGroupMixin").mergeBaseSetGroupMixin(
          o("WASmaxJsx").smax(
            "iq",
            null,
            (n = o("WASmaxChildren")).HAS_OPTIONAL_CHILD(e, r),
            n.HAS_OPTIONAL_CHILD(s, a),
            n.HAS_OPTIONAL_CHILD(u, i),
            n.OPTIONAL_CHILD(c, l),
            n.HAS_OPTIONAL_CHILD(d, S),
            n.HAS_OPTIONAL_CHILD(m, R),
            n.HAS_OPTIONAL_CHILD(p, L),
            n.HAS_OPTIONAL_CHILD(_, E),
            n.OPTIONAL_CHILD(f, k),
            n.HAS_OPTIONAL_CHILD(g, I),
            n.HAS_OPTIONAL_CHILD(h, T),
            n.HAS_OPTIONAL_CHILD(y, D),
            n.HAS_OPTIONAL_CHILD(C, x),
            n.HAS_OPTIONAL_CHILD(b, $),
            n.HAS_OPTIONAL_CHILD(v, P),
          ),
          t,
        );
      return N;
    }
    ((l.makeSetPropertyRequestLocked = e),
      (l.makeSetPropertyRequestAnnouncement = s),
      (l.makeSetPropertyRequestNoFrequentlyForwarded = u),
      (l.makeSetPropertyRequestEphemeral = c),
      (l.makeSetPropertyRequestUnlocked = d),
      (l.makeSetPropertyRequestNotAnnouncement = m),
      (l.makeSetPropertyRequestFrequentlyForwardedOk = p),
      (l.makeSetPropertyRequestNotEphemeral = _),
      (l.makeSetPropertyRequestMembershipApprovalMode = f),
      (l.makeSetPropertyRequestAllowAdminReports = g),
      (l.makeSetPropertyRequestNotAllowAdminReports = h),
      (l.makeSetPropertyRequestAllowNonAdminSubGroupCreation = y),
      (l.makeSetPropertyRequestNotAllowNonAdminSubGroupCreation = C),
      (l.makeSetPropertyRequestGroupHistory = b),
      (l.makeSetPropertyRequestNoGroupHistory = v),
      (l.makeSetPropertyRequest = S));
  },
  98,
);
