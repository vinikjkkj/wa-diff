__d(
  "WAWebOrgMemberContactName",
  [
    "WAWebOrgCollection",
    "WAWebOrgGatingUtils",
    "WAWebOrgMemberLidEligibility",
    "WAWebUserPrefsMeUser",
    "WAWebUserUtils",
    "WAWebWidToJid",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      if (
        !o("WAWebOrgGatingUtils").isOrgInfoDisplayEnabled() ||
        o("WAWebUserPrefsMeUser").isMeAccount(e)
      )
        return null;
      var t = o("WAWebOrgMemberLidEligibility").getWAWebOrgMemberLid(e);
      return t == null ? null : c(t.user);
    }
    function s(e, t) {
      var n;
      if (
        t == null ||
        t.isAiHub() ||
        o("WAWebUserPrefsMeUser").isMeAccount(
          (n = e == null ? void 0 : e.id) != null ? n : t,
        )
      )
        return null;
      var r = o("WAWebOrgMemberLidEligibility").getWAWebOrgMemberLid(t);
      return r == null ? null : o("WAWebWidToJid").userLidtoLidUserJid(r);
    }
    function u(e) {
      var t,
        n = o("WAWebUserUtils").getMeLidUserOrThrow().user,
        r =
          (t = o("WAWebOrgCollection").OrgCollection.get(e)) == null ||
          (t = t.members.get(n)) == null
            ? void 0
            : t.memberName;
      return r != null && r !== ""
        ? r
        : o("WAWebOrgCollection")
            .OrgCollection.getOrderedOrgs()
            .map(function (e) {
              var t;
              return (t = e.members.get(n)) == null ? void 0 : t.memberName;
            })
            .find(function (e) {
              return e != null && e !== "";
            });
    }
    function c(e) {
      var t,
        n,
        r,
        a,
        i,
        l,
        s = [];
      if (
        (o("WAWebOrgCollection")
          .OrgCollection.getOrderedOrgs()
          .forEach(function (t) {
            var n = t.members.get(e);
            n != null && s.push([t.id, n]);
          }),
        s.length === 0)
      )
        return null;
      var u = s[0],
        c = u[0],
        d = u[1],
        m = s.map(function (e) {
          var t = e[1];
          return t;
        }),
        p = m.find(function (e) {
          return e.memberName !== "";
        });
      return {
        firstName: (t = p == null ? void 0 : p.firstName) != null ? t : "",
        memberName: (n = p == null ? void 0 : p.memberName) != null ? n : "",
        orgIds: s.map(function (e) {
          var t = e[0];
          return t;
        }),
        phoneNumber:
          (r =
            (a = m.find(function (e) {
              return e.phoneNumber != null;
            })) == null
              ? void 0
              : a.phoneNumber) != null
            ? r
            : null,
        primaryOrgId: c,
        primaryOrgMemberTag: d.memberTag,
        username:
          (i =
            (l = m.find(function (e) {
              return e.username != null;
            })) == null
              ? void 0
              : l.username) != null
            ? i
            : null,
      };
    }
    ((l.getKnownOrgMember = e),
      (l.getOrgMemberBadgeLid = s),
      (l.getViewerOrgMemberName = u));
  },
  98,
);
