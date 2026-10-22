__d(
  "WAWebGroupAdminSettingChangePreview",
  [
    "WAWebFrontendChatGetters",
    "WAWebGroupAdminApplySettingAction",
    "WAWebGroupMemberLinkMode",
    "WAWebMiscGatingUtils",
    "WAWebSchemaGroupMetadata",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t, n) {
      var r = e.filter(function (e) {
          return (
            o("WAWebGroupAdminApplySettingAction").getGroupSettingSkipReason(
              e,
              t,
              n,
            ) == null
          );
        }),
        a = t === "approveNewMembers" && !n,
        i = a
          ? r.filter(function (e) {
              return s(e) > 0;
            })
          : [];
      return {
        groupsWithTooFewSpots: i.map(u).filter(Boolean),
        linkResetCount: t === "addMembers" && !n ? r.filter(c).length : 0,
        pendingGroupCount: i.length,
        pendingRequestCount: i.reduce(function (e, t) {
          return e + s(t);
        }, 0),
        skippedCount: e.length - r.length,
        targetCount: r.length,
      };
    }
    function s(e) {
      var t, n;
      return (t =
        (n = e.groupMetadata) == null
          ? void 0
          : n.membershipApprovalRequests.length) != null
        ? t
        : 0;
    }
    function u(e) {
      var t,
        n,
        r = s(e),
        a = Math.max(
          0,
          o("WAWebMiscGatingUtils").getGroupSizeLimit() -
            ((t =
              (n = e.groupMetadata) == null ? void 0 : n.participants.length) !=
            null
              ? t
              : 0),
        );
      return r > a
        ? {
            available: a,
            id: e.id.toString(),
            name: o("WAWebFrontendChatGetters").getFormattedTitle(e),
            pending: r,
          }
        : null;
    }
    function c(e) {
      var t = e.groupMetadata;
      return (
        (t == null ? void 0 : t.memberAddMode) ===
          o("WAWebSchemaGroupMetadata").MemberAddMode.ALL_MEMBER_ADD &&
        (t == null ? void 0 : t.memberLinkMode) ===
          o("WAWebGroupMemberLinkMode").MemberLinkMode.ALL_MEMBER_LINK
      );
    }
    l.getGroupSettingChangePreview = e;
  },
  98,
);
