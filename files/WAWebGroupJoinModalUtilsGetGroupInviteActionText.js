__d(
  "WAWebGroupJoinModalUtilsGetGroupInviteActionText",
  ["fbt", "WAWebBackendErrors", "WAWebFbtCommon", "WAWebGroupType"],
  function (t, n, r, o, a, i, l, s) {
    function e(e) {
      var t = e.adminRequestRequired,
        n = t === void 0 ? !1 : t,
        a = e.error,
        i = e.groupType,
        l = e.inGroup,
        u = e.isHiddenSubgroup,
        c = u === void 0 ? !1 : u,
        d = e.isSentByMe,
        m = d === void 0 ? !1 : d,
        p = e.membershipApprovalMode,
        _ = p === void 0 ? !1 : p,
        f = e.requestSent,
        g = f === void 0 ? !1 : f;
      if (a instanceof o("WAWebBackendErrors").ServerStatusCodeError) {
        if (a.status === 426) return s._(/*BTDS*/ "Update");
        if (a.status === 406) return r("WAWebFbtCommon")("OK");
      }
      return m
        ? s._(/*BTDS*/ "Revoke invite")
        : l
          ? i === o("WAWebGroupType").GroupType.COMMUNITY
            ? s._(/*BTDS*/ "View community")
            : s._(/*BTDS*/ "View group")
          : i === o("WAWebGroupType").GroupType.COMMUNITY
            ? s._(/*BTDS*/ "Join community")
            : c
              ? s._(/*BTDS*/ "Message group owner")
              : _ || (i === o("WAWebGroupType").GroupType.LINKED_SUBGROUP && n)
                ? g
                  ? s._(/*BTDS*/ "Cancel request")
                  : s._(/*BTDS*/ "Request to join")
                : s._(/*BTDS*/ "Join group");
    }
    l.getGroupInviteActionText = e;
  },
  226,
);
