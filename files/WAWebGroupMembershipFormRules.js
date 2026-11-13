__d(
  "WAWebGroupMembershipFormRules",
  ["WAWebGroupMembershipFormGating", "WAWebGroupMembershipFormTypes"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.isApprovalModeOn,
        n = e.record;
      return t && n != null;
    }
    function s(t) {
      var n = t.isApprovalModeOn,
        r = t.isExpiredPrivateInvite,
        a = r === void 0 ? !1 : r,
        i = t.record;
      return a
        ? { type: "notRequired" }
        : i == null || !e({ isApprovalModeOn: n, record: i })
          ? { type: "notRequired" }
          : i.type === "undecodable" ||
              !o(
                "WAWebGroupMembershipFormTypes",
              ).isGroupMembershipFormRewritable(i.form)
            ? { type: "error" }
            : o(
                  "WAWebGroupMembershipFormGating",
                ).isGroupMembershipFormJoinEnabled()
              ? { type: "form", form: i.form }
              : { type: "notRequired" };
    }
    ((l.requiresGroupMembershipForm = e),
      (l.getGroupMembershipFormJoinRoute = s));
  },
  98,
);
