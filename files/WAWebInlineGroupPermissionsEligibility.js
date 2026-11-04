__d(
  "WAWebInlineGroupPermissionsEligibility",
  ["WAWebSchemaGroupMetadata", "WAWebStateUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t,
        n,
        r,
        a,
        i = e == null ? null : o("WAWebStateUtils").unproxy(e),
        l =
          ((t =
            i == null || (n = i.participants.getMeParticipant()) == null
              ? void 0
              : n.contact.pendingAction) != null
            ? t
            : 0) > 0;
      return {
        adminActionPending:
          (r =
            i == null
              ? void 0
              : i.participants.some(function (e) {
                  return e.contact.pendingAction > 0;
                })) != null
            ? r
            : !1,
        canAdd: (i == null ? void 0 : i.participants.canAdd()) === !0 && !l,
        canEdit:
          (a = i == null ? void 0 : i.canSetGroupProperty()) != null ? a : !1,
        memberAddMode:
          (i == null ? void 0 : i.memberAddMode) ===
          o("WAWebSchemaGroupMetadata").MemberAddMode.ALL_MEMBER_ADD,
        membershipApprovalMode:
          (i == null ? void 0 : i.membershipApprovalMode) === !0,
      };
    }
    l.getInlineGroupPermissionsEligibility = e;
  },
  98,
);
