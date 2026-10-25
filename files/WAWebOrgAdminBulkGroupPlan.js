__d(
  "WAWebOrgAdminBulkGroupPlan",
  ["fbt", "WAWebOrgAdminBulkGroupNaming", "WAWebOrgAdminGroupCandidate"],
  function (t, n, r, o, a, i, l, s) {
    var e = "",
      u = "",
      c = { excludedKeys: new Set(), names: new Map() };
    function d(t) {
      var n = t.candidates,
        r = t.edits,
        a = r === void 0 ? c : r,
        i = t.maxGroupNameLength,
        l = t.maxMembersPerGroup,
        s = t.selection,
        d = t.template,
        m = new Map(),
        p = 0,
        _ = 0,
        h = s.scope == null ? [] : [s.scope],
        C = f(s) ? g(n, s.scope) : [],
        b = new Map(
          s.tags.map(function (e) {
            return [
              e,
              new Map(
                y(C, e).map(function (e) {
                  var t = e.value;
                  return [
                    o(
                      "WAWebOrgAdminBulkGroupNaming",
                    ).getOrgAdminBulkGroupMemberTagKey(t),
                    t,
                  ];
                }),
              ),
            ];
          }),
        );
      C.forEach(function (t) {
        if (!o("WAWebOrgAdminGroupCandidate").canAddOrgAdminGroupCandidate(t)) {
          _ += 1;
          return;
        }
        var n = R(t, s.tags, b),
          r = n == null ? null : [].concat(h, n),
          a =
            r == null
              ? e
              : r
                  .map(function (e) {
                    var t = e.value;
                    return o(
                      "WAWebOrgAdminBulkGroupNaming",
                    ).getOrgAdminBulkGroupMemberTagKey(t);
                  })
                  .join(u),
          i = m.get(a);
        if (i == null) {
          m.set(a, { membersByKey: new Map([[t.key, t]]), tagValues: r });
          return;
        }
        (i.membersByKey.has(t.key) && (p += 1), i.membersByKey.set(t.key, t));
      });
      var v = Array.from(m.entries())
          .map(function (e) {
            var t,
              n = e[0],
              r = e[1],
              s = r.membersByKey,
              u = r.tagValues,
              c = Array.from(s.values()),
              m =
                u == null
                  ? S(d)
                  : o(
                      "WAWebOrgAdminBulkGroupNaming",
                    ).formatOrgAdminBulkGroupName(d, u),
              p = ((t = a.names.get(n)) != null ? t : "").trim(),
              _ = p === "" ? m : p,
              f = [];
            return (
              _.length > i && f.push("name_too_long"),
              c.length > l && f.push("too_many_members"),
              {
                autoName: m,
                included: !a.excludedKeys.has(n),
                key: n,
                members: c,
                name: _,
                tagValues: u != null ? u : h,
                validationErrors: f,
              }
            );
          })
          .sort(E),
        L = v.filter(function (e) {
          return e.included;
        });
      return {
        collapsedMemberCount: p,
        excludedMemberCount: _,
        groups: v,
        includedGroups: L,
        invalidGroupCount: L.filter(function (e) {
          return e.validationErrors.length > 0;
        }).length,
        sourceMemberCount: C.length,
      };
    }
    function m() {
      return s._(/*BTDS*/ "Unassigned").toString();
    }
    function p(e) {
      var t = e.scope,
        n = e.tags;
      return t == null ? n : [t.tag].concat(n);
    }
    function _(e) {
      var t = e.scope,
        n = e.tags;
      return t == null && n.length === 1 ? ["value"] : n;
    }
    function f(e) {
      return e.scope != null || e.tags.length > 0;
    }
    function g(e, t) {
      if (t == null) return e;
      var n = o(
        "WAWebOrgAdminBulkGroupNaming",
      ).getOrgAdminBulkGroupMemberTagKey(t.value);
      return e.filter(function (e) {
        var r = h(e, t.tag);
        return (
          r != null &&
          o("WAWebOrgAdminBulkGroupNaming").getOrgAdminBulkGroupMemberTagKey(
            r,
          ) === n
        );
      });
    }
    function h(e, t) {
      return o(
        "WAWebOrgAdminBulkGroupNaming",
      ).normalizeOrgAdminBulkGroupMemberTag(
        t === "member_tag"
          ? e.memberTag
          : o(
              "WAWebOrgAdminGroupCandidate",
            ).getOrgAdminGroupCandidateSecondaryMemberTag(e),
      );
    }
    function y(e, t) {
      var n = new Map();
      return (
        e.forEach(function (e) {
          var r,
            a = h(e, t);
          if (a != null) {
            var i = o(
                "WAWebOrgAdminBulkGroupNaming",
              ).getOrgAdminBulkGroupMemberTagKey(a),
              l = n.get(i);
            n.set(i, {
              count: ((r = l == null ? void 0 : l.count) != null ? r : 0) + 1,
              value: l == null ? a : L(l.value, a),
            });
          }
        }),
        Array.from(n.keys())
          .sort()
          .flatMap(function (e) {
            var t;
            return (t = n.get(e)) != null ? t : [];
          })
      );
    }
    function C(e) {
      return e.reduce(function (e, t) {
        return e + t.members.length;
      }, 0);
    }
    function b(e) {
      return e.reduce(function (e, t) {
        return Math.max(e, t.members.length);
      }, 0);
    }
    function v(e) {
      return (
        e.excludedMemberCount +
        C(
          e.groups.filter(function (e) {
            return !e.included;
          }),
        )
      );
    }
    function S(e) {
      var t = m();
      return e.organizationName !== "" &&
        e.pattern.includes(
          o("WAWebOrgAdminBulkGroupNaming")
            .ORG_ADMIN_BULK_GROUP_ORGANIZATION_TOKEN,
        )
        ? t + " \xB7 " + e.organizationName
        : t;
    }
    function R(e, t, n) {
      var r = [];
      for (var a of t) {
        var i,
          l,
          s = h(e, a);
        if (s == null) return null;
        r.push({
          tag: a,
          value:
            (i =
              (l = n.get(a)) == null
                ? void 0
                : l.get(
                    o(
                      "WAWebOrgAdminBulkGroupNaming",
                    ).getOrgAdminBulkGroupMemberTagKey(s),
                  )) != null
              ? i
              : s,
        });
      }
      return r;
    }
    function L(e, t) {
      return e < t ? e : t;
    }
    function E(t, n) {
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
      (l.buildOrgAdminBulkGroupPlan = d),
      (l.getOrgAdminBulkGroupUnassignedName = m),
      (l.getOrgAdminBulkGroupSelectionTags = p),
      (l.getOrgAdminBulkGroupRequiredNameTokens = _),
      (l.isOrgAdminBulkGroupSelectionReady = f),
      (l.filterOrgAdminBulkGroupCandidatesToScope = g),
      (l.getOrgAdminBulkGroupCandidateTag = h),
      (l.getOrgAdminBulkGroupTagValueCounts = y),
      (l.countOrgAdminBulkGroupMembers = C),
      (l.getOrgAdminBulkGroupLargestMemberCount = b),
      (l.getOrgAdminBulkGroupLeftOutMemberCount = v));
  },
  226,
);
