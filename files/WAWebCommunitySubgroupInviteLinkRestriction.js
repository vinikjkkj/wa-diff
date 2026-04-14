__d(
  "WAWebCommunitySubgroupInviteLinkRestriction",
  ["WAWebSchemaGroupMetadata"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t, n;
      if (e == null) return !1;
      var r = e.getParentGroupChat();
      if (r == null) return !1;
      var a = r.groupMetadata;
      if (a == null) return !1;
      var i =
          a.memberAddMode ===
          o("WAWebSchemaGroupMetadata").MemberAddMode.ADMIN_ADD,
        l =
          (t = (n = a.participants) == null ? void 0 : n.iAmAdmin()) != null
            ? t
            : !1;
      return i && !l;
    }
    l.isSubgroupInviteLinkRestrictedByParentCommunity = e;
  },
  98,
);
