__d(
  "WAWebGroupMembershipFormGating",
  ["WAWebABProps", "WAWebUserPrefsStore", "gkx"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = s(e, "string");
      return typeof t == "symbol" ? t : t + "";
    }
    function s(e, t) {
      if (typeof e != "object" || !e) return e;
      var n =
        e[typeof Symbol == "function" ? Symbol.toPrimitive : "@@toPrimitive"];
      if (n !== void 0) {
        var r = n.call(e, t || "default");
        if (typeof r != "object") return r;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return (t === "string" ? String : Number)(e);
    }
    var u = [
        "group_membership_form_join_enabled",
        "group_membership_form_max_questions",
        "group_membership_form_question_max_length",
        "mex_group_get_group_info_by_invite_code",
        "mex_group_get_linked_group_info_enabled",
        "groups_mex_fetch_membership_approval_requests_enabled",
      ],
      c = "WAWebGMFPlaceholderABPropOverrides",
      d = 1;
    function m() {
      return o("WAWebABProps").getABPropConfigValue(
        "group_membership_form_setting_enabled",
      );
    }
    function p() {
      var e;
      return (e = E("group_membership_form_join_enabled")) != null
        ? e
        : o("WAWebABProps").getABPropConfigValue(
            "group_membership_form_join_enabled",
          );
    }
    function _() {
      return o("WAWebABProps").getABPropConfigValue(
        "group_membership_form_review_enabled",
      );
    }
    function f() {
      return o("WAWebABProps").getABPropConfigValue(
        "group_membership_form_gem_enabled",
      );
    }
    function g() {
      var e,
        t =
          (e = k("group_membership_form_max_questions")) != null
            ? e
            : o("WAWebABProps").getABPropConfigValue(
                "group_membership_form_max_questions",
              );
      return Math.max(d, Math.floor(t));
    }
    function h() {
      var e;
      return Math.floor(
        (e = k("group_membership_form_question_max_length")) != null
          ? e
          : o("WAWebABProps").getABPropConfigValue(
              "group_membership_form_question_max_length",
            ),
      );
    }
    function y() {
      return o("WAWebABProps").getABPropConfigValue("mex_group_join");
    }
    function C() {
      var e;
      return (e = E("mex_group_get_group_info_by_invite_code")) != null
        ? e
        : o("WAWebABProps").getABPropConfigValue(
            "mex_group_get_group_info_by_invite_code",
          );
    }
    function b() {
      return o("WAWebABProps").getABPropConfigValue(
        "mex_group_get_group_info_by_add_request",
      );
    }
    function v() {
      var e;
      return (e = E("mex_group_get_linked_group_info_enabled")) != null
        ? e
        : o("WAWebABProps").getABPropConfigValue(
            "mex_group_get_linked_group_info_enabled",
          );
    }
    function S() {
      var e;
      return (e = E("groups_mex_fetch_membership_approval_requests_enabled")) !=
        null
        ? e
        : o("WAWebABProps").getABPropConfigValue(
            "groups_mex_fetch_membership_approval_requests_enabled",
          );
    }
    function R(t, n) {
      var o;
      if (I()) {
        var a = T(),
          i = a[t],
          l = babelHelpers.objectWithoutPropertiesLoose(a, [t].map(e)),
          s =
            n == null
              ? l
              : babelHelpers.extends({}, l, ((o = {}), (o[t] = n), o));
        r("WAWebUserPrefsStore").set(c, Object.keys(s).length === 0 ? null : s);
      }
    }
    function L() {
      return I() ? T() : {};
    }
    function E(e) {
      var t = L()[e];
      return typeof t == "boolean" ? t : null;
    }
    function k(e) {
      var t = L()[e];
      return typeof t == "number" && Number.isFinite(t) ? t : null;
    }
    function I() {
      return !r("gkx")("26258") || r("gkx")("16539");
    }
    function T() {
      var e = r("WAWebUserPrefsStore").get(c);
      if (e == null || typeof e != "object" || Array.isArray(e)) return {};
      var t = {};
      return (
        u.forEach(function (n) {
          var r = e[n];
          (typeof r == "boolean" || typeof r == "number") && (t[n] = r);
        }),
        t
      );
    }
    ((l.isGroupMembershipFormSettingEnabled = m),
      (l.isGroupMembershipFormJoinEnabled = p),
      (l.isGroupMembershipFormReviewEnabled = _),
      (l.isGroupMembershipFormGemEnabled = f),
      (l.getGroupMembershipFormMaxQuestions = g),
      (l.getGroupMembershipFormQuestionMaxLength = h),
      (l.isMexGroupJoinEnabled = y),
      (l.isMexGroupInviteInfoEnabled = C),
      (l.isMexGroupAddRequestInfoEnabled = b),
      (l.isMexLinkedGroupInfoEnabled = v),
      (l.isMexMembershipApprovalRequestsEnabled = S),
      (l.updateGroupMembershipFormPlaceholderOverride = R),
      (l.getGroupMembershipFormPlaceholderOverrides = L));
  },
  98,
);
