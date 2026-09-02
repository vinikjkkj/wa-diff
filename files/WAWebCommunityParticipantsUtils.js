__d(
  "WAWebCommunityParticipantsUtils",
  [
    "WAWebApiContact",
    "WAWebContactCollection",
    "WAWebContactComparator",
    "WAWebContactGetters",
    "WAWebGroupMetadataCollection",
    "WAWebGroupMetadataGetters",
    "WAWebGroupType",
    "WAWebLidMigrationUtils",
    "WAWebUserPrefsMeUser",
    "WAWebWidFactory",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      var n = new Set(),
        a = e
          .flatMap(function (e) {
            var a = r("WAWebGroupMetadataCollection").assertGet(e.toString()),
              i =
                o("WAWebGroupMetadataGetters").getGroupType(a) ===
                o("WAWebGroupType").GroupType.LINKED_ANNOUNCEMENT_GROUP
                  ? a.participants.getAdmins()
                  : a.participants.toArray();
            return i
              .map(function (e) {
                var t = e.contact,
                  n = o("WAWebLidMigrationUtils").toPn(t.id);
                if (t.id.isLid() && n != null) {
                  var r;
                  return (r = o("WAWebContactCollection").ContactCollection.get(
                    n,
                  )) != null
                    ? r
                    : t;
                }
                return t;
              })
              .filter(function (e) {
                return n.has(e.id.toString())
                  ? !1
                  : n.add(e.id.toString()) && t(e);
              });
          })
          .sort(o("WAWebContactComparator").ContactComparator);
      return a;
    }
    function s(t) {
      var n = t.CAGParticipants,
        r = t.isLidAddressingMode,
        a = t.joinedSubgroups,
        i = t.parentGroupMembers,
        l,
        s,
        u = [],
        c = new Set(),
        d = [],
        m = new Set(),
        p = o("WAWebUserPrefsMeUser").getMaybeMePnUser();
      (p && (l = o("WAWebContactCollection").ContactCollection.get(p)),
        i == null ||
          i.forEach(function (e) {
            o("WAWebContactGetters").getIsMe(e.contact) ||
              (e != null && e.isSuperAdmin
                ? (s = e.contact)
                : e != null && e.isAdmin
                  ? (u.push(e.contact), c.add(e.id.toString()))
                  : (d.push(e.contact), m.add(e.id.toString())));
          }));
      var _ = function (t) {
        var e;
        return (
          !m.has(t.toString()) &&
          !c.has(t.toString()) &&
          !t.equals((e = s) == null ? void 0 : e.id) &&
          !o("WAWebUserPrefsMeUser").isMeAccount(t) &&
          r === t.isLid()
        );
      };
      i != null &&
        i.iAmAdmin() &&
        (n == null ||
          n.forEach(function (e) {
            var t = e.contact,
              n = o("WAWebWidFactory").asUserWidOrThrow(t.id),
              r = o("WAWebApiContact").getAlternateUserWid(n),
              a = _(n),
              i = r ? _(r) : !0,
              l = a && i;
            l && (d.push(t), m.add(n.toString()));
          }));
      var f = [];
      a.length &&
        (f = e(a, function (e) {
          return e.id.isUser() && _(e.id);
        }));
      var g = [];
      return (l && g.push(l), s && g.push(s), (g = g.concat(u, d, f)), g);
    }
    function u(e, t) {
      if (e == null) return { membersInCAG: [], membersNotInCAG: t };
      var n = [];
      t == null ||
        t.forEach(function (t) {
          var r = t.id;
          if (r.isUser()) {
            var o = e.isParticipantWidOrAlternateWidValid(r, function (e) {
              return e != null;
            });
            o || n.push(t);
          }
        });
      var r,
        a = (e != null ? e : [])
          .map(function (e) {
            return e.contact;
          })
          .filter(function (e) {
            var t = o("WAWebUserPrefsMeUser").isMeAccount(e.id);
            return (t && (r = e), !t);
          }),
        i = r ? [r].concat(a) : a;
      return { membersInCAG: i, membersNotInCAG: n };
    }
    ((l.getMembersMyselfSharesSubgroupsWith = e),
      (l.mergeAndSortCommunityParticipants = s),
      (l.splitCommunityParticipants = u));
  },
  98,
);
