__d(
  "WAWebOrgAdminBulkGroupPlan",
  ["fbt", "WAWebOrgAdminBulkGroupNaming", "WAWebOrgAdminGroupCandidate"],
  function (t, n, r, o, a, i, l, s) {
    var e = "",
      u = { excludedKeys: new Set(), names: new Map() };
    function c(t) {
      var n = t.candidates,
        r = t.edits,
        a = r === void 0 ? u : r,
        i = t.maxGroupNameLength,
        l = t.maxMembersPerGroup,
        c = t.template,
        d = new Map(),
        m = 0,
        p = 0;
      n.forEach(function (t) {
        if (!o("WAWebOrgAdminGroupCandidate").canAddOrgAdminGroupCandidate(t)) {
          p += 1;
          return;
        }
        var n = o(
            "WAWebOrgAdminBulkGroupNaming",
          ).normalizeOrgAdminBulkGroupMemberTag(t.memberTag),
          r =
            n == null
              ? e
              : o(
                  "WAWebOrgAdminBulkGroupNaming",
                ).getOrgAdminBulkGroupMemberTagKey(n),
          a = d.get(r);
        if (a == null) {
          d.set(r, { memberTag: n, membersByKey: new Map([[t.key, t]]) });
          return;
        }
        (a.memberTag != null && n != null && (a.memberTag = _(a.memberTag, n)),
          a.membersByKey.has(t.key) && (m += 1),
          a.membersByKey.set(t.key, t));
      });
      var g = Array.from(d.entries())
          .map(function (e) {
            var t,
              n = e[0],
              r = e[1],
              u = r.membersByKey,
              d = r.memberTag,
              m = Array.from(u.values()),
              p = o("WAWebOrgAdminBulkGroupNaming").formatOrgAdminBulkGroupName(
                c,
                d != null ? d : s._(/*BTDS*/ "Unassigned").toString(),
              ),
              _ = ((t = a.names.get(n)) != null ? t : "").trim(),
              f = _ === "" ? p : _,
              g = [];
            return (
              f.length > i && g.push("name_too_long"),
              m.length > l && g.push("too_many_members"),
              {
                autoName: p,
                included: !a.excludedKeys.has(n),
                key: n,
                memberTag:
                  d != null ? d : s._(/*BTDS*/ "No member tag").toString(),
                members: m,
                name: f,
                validationErrors: g,
              }
            );
          })
          .sort(f),
        h = g.filter(function (e) {
          return e.included;
        });
      return {
        collapsedMemberCount: m,
        excludedMemberCount: p,
        groups: g,
        includedGroups: h,
        invalidGroupCount: h.filter(function (e) {
          return e.validationErrors.length > 0;
        }).length,
        sourceMemberCount: n.length,
      };
    }
    function d(e) {
      return e.reduce(function (e, t) {
        return e + t.members.length;
      }, 0);
    }
    function m(e) {
      return e.reduce(function (e, t) {
        return Math.max(e, t.members.length);
      }, 0);
    }
    function p(e) {
      return (
        e.excludedMemberCount +
        d(
          e.groups.filter(function (e) {
            return !e.included;
          }),
        )
      );
    }
    function _(e, t) {
      return e < t ? e : t;
    }
    function f(t, n) {
      var r = t.key === e;
      return r !== (n.key === e)
        ? r
          ? 1
          : -1
        : t.key < n.key
          ? -1
          : t.key > n.key
            ? 1
            : 0;
    }
    ((l.ORG_ADMIN_BULK_GROUP_NO_MEMBER_TAG_KEY = e),
      (l.buildOrgAdminBulkGroupPlan = c),
      (l.countOrgAdminBulkGroupMembers = d),
      (l.getOrgAdminBulkGroupLargestMemberCount = m),
      (l.getOrgAdminBulkGroupLeftOutMemberCount = p));
  },
  226,
);
