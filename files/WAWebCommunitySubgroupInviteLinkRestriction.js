__d(
  "WAWebCommunitySubgroupInviteLinkRestriction",
  ["WAWebCommunityAnnouncementGroupUtils", "WAWebSchemaGroupMetadata"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t, n, r, a;
      if (e == null) return !1;
      var i = e.getParentGroupChat();
      if (i == null) return !1;
      var l = i.groupMetadata;
      if (l == null) return !1;
      var s = o(
          "WAWebCommunityAnnouncementGroupUtils",
        ).getCommunityAnnouncementGroupMetadata(l),
        u =
          (s == null ? void 0 : s.memberAddMode) ===
          o("WAWebSchemaGroupMetadata").MemberAddMode.ADMIN_ADD,
        c =
          (t = (n = e.participants) == null ? void 0 : n.iAmAdmin()) != null
            ? t
            : !1,
        d =
          (r = (a = l.participants) == null ? void 0 : a.iAmAdmin()) != null
            ? r
            : !1;
      return u && !c && !d;
    }
    l.isSubgroupInviteLinkRestrictedByParentCommunity = e;
  },
  98,
);
