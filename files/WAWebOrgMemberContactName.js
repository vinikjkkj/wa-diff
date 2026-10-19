__d(
  "WAWebOrgMemberContactName",
  [
    "WAWebContactGetters",
    "WAWebFrontendContactGetters",
    "WAWebOrgContactCollection",
    "WAWebOrgGatingUtils",
    "WAWebOrgMemberDisplayName",
    "WAWebOrgMemberLidEligibility",
    "WAWebUserPrefsMeUser",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t,
        n,
        r = s(e.id);
      if (r == null || o("WAWebFrontendContactGetters").getIsMyContact(e))
        return null;
      var a = o("WAWebOrgMemberDisplayName").resolveWAWebOrgMemberDisplayName({
        isBusiness: o("WAWebContactGetters").getIsBusiness(e),
        memberName: r.memberName.trim(),
        pushName:
          (t = o("WAWebContactGetters").getPushname(e)) == null
            ? void 0
            : t.trim(),
        savedName:
          (n = o("WAWebContactGetters").getName(e)) == null ? void 0 : n.trim(),
        verifiedLevel: o("WAWebContactGetters").getVerifiedLevel(e),
        verifiedName: o("WAWebContactGetters").getVerifiedName(e),
      });
      return a === "" ? null : a;
    }
    function s(e) {
      if (
        !o("WAWebOrgGatingUtils").isOrgInfoDisplayEnabled() ||
        o("WAWebUserPrefsMeUser").isMeAccount(e)
      )
        return null;
      var t = o("WAWebOrgMemberLidEligibility").getWAWebOrgMemberLid(e),
        n =
          t == null
            ? null
            : o("WAWebOrgContactCollection").OrgContactCollection.get(t.user);
      return (n == null ? void 0 : n.primaryOrgId) == null ? null : n;
    }
    ((l.getOrgMemberDisplayName = e), (l.getKnownOrgMember = s));
  },
  98,
);
