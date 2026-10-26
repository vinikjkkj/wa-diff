__d(
  "WASmaxGroupsSetPropertyRPC",
  [
    "WAComms",
    "WAResultOrError",
    "WASmaxAttrs",
    "WASmaxChildren",
    "WASmaxInGroupsBaseServerErrorMixin",
    "WASmaxInGroupsGroupJoinMembershipApprovalModeEnabledMixin",
    "WASmaxInGroupsIQErrorBadRequestMixin",
    "WASmaxInGroupsIQErrorFallbackClientMixin",
    "WASmaxInGroupsIQErrorForbiddenMixin",
    "WASmaxInGroupsIQErrorItemNotFoundMixin",
    "WASmaxInGroupsIQErrorLockedMixin",
    "WASmaxInGroupsIQErrorNotAllowedMixin",
    "WASmaxInGroupsIQErrorNotAuthorizedMixin",
    "WASmaxInGroupsIQErrorRateOverlimitMixin",
    "WASmaxInGroupsIQErrorResourceLimitMixin",
    "WASmaxInGroupsIQErrorResponseMixin",
    "WASmaxInGroupsIQErrorUpgradeRequiredMixin",
    "WASmaxInGroupsIQResultResponseMixin",
    "WASmaxJsx",
    "WASmaxOutGroupsBaseSetGroupMixin",
    "WASmaxOutGroupsMembershipApprovalGroupJoinModeMixin",
    "WASmaxParseUtils",
    "WASmaxParsingFailure",
    "WASmaxRpcUtils",
    "WAWap",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      return s.apply(this, arguments);
    }
    function s() {
      return (
        (s = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = D(e),
            r = yield o("WAComms").sendSmaxStanza(n, t),
            a = p(r, n);
          if (a.success)
            return { name: "SetPropertyResponseSuccess", value: a.value };
          var i = u(r, n);
          if (i.success)
            return { name: "SetPropertyResponseClientError", value: i.value };
          var l = c(r, n);
          if (l.success)
            return { name: "SetPropertyResponseServerError", value: l.value };
          throw new (o("WASmaxParsingFailure").SmaxParsingFailure)(
            o("WASmaxRpcUtils").errorMessageRpcParsing("SetProperty", {
              Success: a,
              ClientError: i,
              ServerError: l,
            }),
          );
        })),
        s.apply(this, arguments)
      );
    }
    function u(e, t) {
      var n = o("WASmaxParseUtils").assertTag(e, "iq");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").flattenedChildWithTag(e, "error");
      if (!r.success) return r;
      var a = o("WASmaxInGroupsIQErrorResponseMixin").parseIQErrorResponseMixin(
        e,
        t,
      );
      if (!a.success) return a;
      var i = $(r.value);
      return i.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends({}, a.value, {
              errorSetPropertyClientErrors: i.value,
            }),
          )
        : i;
    }
    function c(e, t) {
      var n = o("WASmaxParseUtils").assertTag(e, "iq");
      if (!n.success) return n;
      var r = o("WASmaxInGroupsBaseServerErrorMixin").parseBaseServerErrorMixin(
        e,
        t,
      );
      return (r.success, r);
    }
    function d(e) {
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
    function m(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "membership_approval_mode");
      if (!t.success) return t;
      var n = x(e);
      return o("WAResultOrError").makeResult({
        membershipApprovalPropertyResponseMixinMixin: n.success
          ? n.value
          : null,
      });
    }
    function p(e, t) {
      var n = o("WASmaxParseUtils").assertTag(e, "iq");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").optionalChild(e, "locked");
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").optionalChild(e, "announcement");
      if (!a.success) return a;
      var i = o("WASmaxParseUtils").optionalChild(e, "no_frequently_forwarded");
      if (!i.success) return i;
      var l = o("WASmaxParseUtils").optionalChildWithTag(e, "ephemeral", d);
      if (!l.success) return l;
      var s = o("WASmaxParseUtils").optionalChild(e, "unlocked");
      if (!s.success) return s;
      var u = o("WASmaxParseUtils").optionalChild(e, "not_announcement");
      if (!u.success) return u;
      var c = o("WASmaxParseUtils").optionalChild(e, "frequently_forwarded_ok");
      if (!c.success) return c;
      var p = o("WASmaxParseUtils").optionalChild(e, "not_ephemeral");
      if (!p.success) return p;
      var _ = o("WASmaxParseUtils").optionalChildWithTag(
        e,
        "membership_approval_mode",
        m,
      );
      if (!_.success) return _;
      var f = o("WASmaxParseUtils").optionalChild(e, "allow_admin_reports");
      if (!f.success) return f;
      var g = o("WASmaxParseUtils").optionalChild(e, "not_allow_admin_reports");
      if (!g.success) return g;
      var h = o("WASmaxParseUtils").optionalChild(
        e,
        "allow_non_admin_sub_group_creation",
      );
      if (!h.success) return h;
      var y = o("WASmaxParseUtils").optionalChild(
        e,
        "not_allow_non_admin_sub_group_creation",
      );
      if (!y.success) return y;
      var C = o("WASmaxParseUtils").optionalChild(e, "group_history");
      if (!C.success) return C;
      var b = o("WASmaxParseUtils").optionalChild(e, "no_group_history");
      if (!b.success) return b;
      var v = o(
        "WASmaxInGroupsIQResultResponseMixin",
      ).parseIQResultResponseMixin(e, t);
      return v.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends({}, v.value, {
              hasLocked: r.value != null,
              hasAnnouncement: a.value != null,
              hasNoFrequentlyForwarded: i.value != null,
              ephemeral: l.value,
              hasUnlocked: s.value != null,
              hasNotAnnouncement: u.value != null,
              hasFrequentlyForwardedOk: c.value != null,
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
    function _() {
      var e = o("WASmaxJsx").smax("locked", null);
      return e;
    }
    function f() {
      var e = o("WASmaxJsx").smax("announcement", null);
      return e;
    }
    function g() {
      var e = o("WASmaxJsx").smax("no_frequently_forwarded", null);
      return e;
    }
    function h(e) {
      var t = e.ephemeralExpiration,
        n = e.ephemeralTrigger,
        r = o("WASmaxJsx").smax("ephemeral", {
          expiration: o("WAWap").INT(t),
          trigger: o("WASmaxAttrs").OPTIONAL(o("WAWap").INT, n),
        });
      return r;
    }
    function y() {
      var e = o("WASmaxJsx").smax("unlocked", null);
      return e;
    }
    function C() {
      var e = o("WASmaxJsx").smax("not_announcement", null);
      return e;
    }
    function b() {
      var e = o("WASmaxJsx").smax("frequently_forwarded_ok", null);
      return e;
    }
    function v() {
      var e = o("WASmaxJsx").smax("not_ephemeral", null);
      return e;
    }
    function S(e) {
      var t = o(
        "WASmaxOutGroupsMembershipApprovalGroupJoinModeMixin",
      ).mergeMembershipApprovalGroupJoinModeMixin(
        o("WASmaxJsx").smax("membership_approval_mode", null),
        e,
      );
      return t;
    }
    function R() {
      var e = o("WASmaxJsx").smax("allow_admin_reports", null);
      return e;
    }
    function L() {
      var e = o("WASmaxJsx").smax("not_allow_admin_reports", null);
      return e;
    }
    function E() {
      var e = o("WASmaxJsx").smax("allow_non_admin_sub_group_creation", null);
      return e;
    }
    function k() {
      var e = o("WASmaxJsx").smax(
        "not_allow_non_admin_sub_group_creation",
        null,
      );
      return e;
    }
    function I() {
      var e = o("WASmaxJsx").smax("group_history", null);
      return e;
    }
    function T() {
      var e = o("WASmaxJsx").smax("no_group_history", null);
      return e;
    }
    function D(e) {
      var t,
        n = e.hasLocked,
        r = e.hasAnnouncement,
        a = e.hasNoFrequentlyForwarded,
        i = e.ephemeralArgs,
        l = e.hasUnlocked,
        s = e.hasNotAnnouncement,
        u = e.hasFrequentlyForwardedOk,
        c = e.hasNotEphemeral,
        d = e.membershipApprovalModeArgs,
        m = e.hasAllowAdminReports,
        p = e.hasNotAllowAdminReports,
        D = e.hasAllowNonAdminSubGroupCreation,
        x = e.hasNotAllowNonAdminSubGroupCreation,
        $ = e.hasGroupHistory,
        P = e.hasNoGroupHistory,
        N = o("WASmaxOutGroupsBaseSetGroupMixin").mergeBaseSetGroupMixin(
          o("WASmaxJsx").smax(
            "iq",
            null,
            (t = o("WASmaxChildren")).HAS_OPTIONAL_CHILD(_, n),
            t.HAS_OPTIONAL_CHILD(f, r),
            t.HAS_OPTIONAL_CHILD(g, a),
            t.OPTIONAL_CHILD(h, i),
            t.HAS_OPTIONAL_CHILD(y, l),
            t.HAS_OPTIONAL_CHILD(C, s),
            t.HAS_OPTIONAL_CHILD(b, u),
            t.HAS_OPTIONAL_CHILD(v, c),
            t.OPTIONAL_CHILD(S, d),
            t.HAS_OPTIONAL_CHILD(R, m),
            t.HAS_OPTIONAL_CHILD(L, p),
            t.HAS_OPTIONAL_CHILD(E, D),
            t.HAS_OPTIONAL_CHILD(k, x),
            t.HAS_OPTIONAL_CHILD(I, $),
            t.HAS_OPTIONAL_CHILD(T, P),
          ),
          e,
        );
      return N;
    }
    function x(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "membership_approval_mode");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").flattenedChildWithTag(e, "group_join");
      if (!n.success) return n;
      var r = P(n.value);
      return r.success
        ? o("WAResultOrError").makeResult({
            groupJoinGroupJoinMembershipApprovalModeEnabledOrDisabledMixinGroup:
              r.value,
          })
        : r;
    }
    function $(e) {
      var t = o(
        "WASmaxInGroupsIQErrorBadRequestMixin",
      ).parseIQErrorBadRequestMixin(e);
      if (t.success)
        return o("WAResultOrError").makeResult({
          name: "IQErrorBadRequest",
          value: t.value,
        });
      var n = o(
        "WASmaxInGroupsIQErrorNotAuthorizedMixin",
      ).parseIQErrorNotAuthorizedMixin(e);
      if (n.success)
        return o("WAResultOrError").makeResult({
          name: "IQErrorNotAuthorized",
          value: n.value,
        });
      var r = o(
        "WASmaxInGroupsIQErrorForbiddenMixin",
      ).parseIQErrorForbiddenMixin(e);
      if (r.success)
        return o("WAResultOrError").makeResult({
          name: "IQErrorForbidden",
          value: r.value,
        });
      var a = o(
        "WASmaxInGroupsIQErrorItemNotFoundMixin",
      ).parseIQErrorItemNotFoundMixin(e);
      if (a.success)
        return o("WAResultOrError").makeResult({
          name: "IQErrorItemNotFound",
          value: a.value,
        });
      var i = o(
        "WASmaxInGroupsIQErrorNotAllowedMixin",
      ).parseIQErrorNotAllowedMixin(e);
      if (i.success)
        return o("WAResultOrError").makeResult({
          name: "IQErrorNotAllowed",
          value: i.value,
        });
      var l = o(
        "WASmaxInGroupsIQErrorResourceLimitMixin",
      ).parseIQErrorResourceLimitMixin(e);
      if (l.success)
        return o("WAResultOrError").makeResult({
          name: "IQErrorResourceLimit",
          value: l.value,
        });
      var s = o("WASmaxInGroupsIQErrorLockedMixin").parseIQErrorLockedMixin(e);
      if (s.success)
        return o("WAResultOrError").makeResult({
          name: "IQErrorLocked",
          value: s.value,
        });
      var u = o(
        "WASmaxInGroupsIQErrorRateOverlimitMixin",
      ).parseIQErrorRateOverlimitMixin(e);
      if (u.success)
        return o("WAResultOrError").makeResult({
          name: "IQErrorRateOverlimit",
          value: u.value,
        });
      var c = o(
        "WASmaxInGroupsIQErrorUpgradeRequiredMixin",
      ).parseIQErrorUpgradeRequiredMixin(e);
      if (c.success)
        return o("WAResultOrError").makeResult({
          name: "IQErrorUpgradeRequired",
          value: c.value,
        });
      var d = o(
        "WASmaxInGroupsIQErrorFallbackClientMixin",
      ).parseIQErrorFallbackClientMixin(e);
      return d.success
        ? o("WAResultOrError").makeResult({
            name: "IQErrorFallbackClient",
            value: d.value,
          })
        : o("WASmaxParseUtils").errorMixinDisjunction(
            e,
            [
              "IQErrorBadRequest",
              "IQErrorNotAuthorized",
              "IQErrorForbidden",
              "IQErrorItemNotFound",
              "IQErrorNotAllowed",
              "IQErrorResourceLimit",
              "IQErrorLocked",
              "IQErrorRateOverlimit",
              "IQErrorUpgradeRequired",
              "IQErrorFallbackClient",
            ],
            [t, n, r, a, i, l, s, u, c, d],
          );
    }
    function P(e) {
      var t = o(
        "WASmaxInGroupsGroupJoinMembershipApprovalModeEnabledMixin",
      ).parseGroupJoinMembershipApprovalModeEnabledMixin(e);
      if (t.success)
        return o("WAResultOrError").makeResult({
          name: "GroupJoinMembershipApprovalModeEnabled",
          value: t.value,
        });
      var n = N(e);
      return n.success
        ? o("WAResultOrError").makeResult({
            name: "GroupJoinMembershipApprovalModeDisabled",
            value: n.value,
          })
        : o("WASmaxParseUtils").errorMixinDisjunction(
            e,
            [
              "GroupJoinMembershipApprovalModeEnabled",
              "GroupJoinMembershipApprovalModeDisabled",
            ],
            [t, n],
          );
    }
    function N(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "group_join");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        e,
        "state",
        "off",
      );
      return n.success
        ? o("WAResultOrError").makeResult({ state: n.value })
        : n;
    }
    ((l.sendSetPropertyRPC = e),
      (l.parseSetPropertyResponseClientError = u),
      (l.parseSetPropertyResponseServerError = c),
      (l.parseSetPropertyResponseSuccessEphemeral = d),
      (l.parseSetPropertyResponseSuccessMembershipApprovalMode = m),
      (l.parseSetPropertyResponseSuccess = p),
      (l.makeSetPropertyRequestLocked = _),
      (l.makeSetPropertyRequestAnnouncement = f),
      (l.makeSetPropertyRequestNoFrequentlyForwarded = g),
      (l.makeSetPropertyRequestEphemeral = h),
      (l.makeSetPropertyRequestUnlocked = y),
      (l.makeSetPropertyRequestNotAnnouncement = C),
      (l.makeSetPropertyRequestFrequentlyForwardedOk = b),
      (l.makeSetPropertyRequestNotEphemeral = v),
      (l.makeSetPropertyRequestMembershipApprovalMode = S),
      (l.makeSetPropertyRequestAllowAdminReports = R),
      (l.makeSetPropertyRequestNotAllowAdminReports = L),
      (l.makeSetPropertyRequestAllowNonAdminSubGroupCreation = E),
      (l.makeSetPropertyRequestNotAllowNonAdminSubGroupCreation = k),
      (l.makeSetPropertyRequestGroupHistory = I),
      (l.makeSetPropertyRequestNoGroupHistory = T),
      (l.makeSetPropertyRequest = D),
      (l.parseMembershipApprovalPropertyResponseMixinMixin = x),
      (l.parseSetPropertyClientErrors = $),
      (l.parseGroupJoinMembershipApprovalModeEnabledOrDisabledMixinGroup = P),
      (l.parseGroupJoinMembershipApprovalModeDisabledMixin = N));
  },
  98,
);
