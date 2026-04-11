__d(
  "WAWebCommunityParticipantsUtils",
  [
    "WAWebApiContact",
    "WAWebContactCollection",
    "WAWebContactComparator",
    "WAWebContactGetters",
    "WAWebGroupMetadataCollection",
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
                a.groupType ===
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
    function s(t, n, r, a) {
      var i,
        l,
        s = [],
        u = new Set(),
        c = [],
        d = new Set(),
        m = o("WAWebUserPrefsMeUser").getMaybeMePnUser();
      (m && (i = o("WAWebContactCollection").ContactCollection.get(m)),
        n == null ||
          n.forEach(function (e) {
            o("WAWebContactGetters").getIsMe(e.contact) ||
              (e != null && e.isSuperAdmin
                ? (l = e.contact)
                : e != null && e.isAdmin
                  ? (s.push(e.contact), u.add(e.id.toString()))
                  : (c.push(e.contact), d.add(e.id.toString())));
          }));
      var p = function (t) {
        var e;
        return (
          !d.has(t.toString()) &&
          !u.has(t.toString()) &&
          !t.equals((e = l) == null ? void 0 : e.id) &&
          !o("WAWebUserPrefsMeUser").isMeAccount(t) &&
          a === t.isLid()
        );
      };
      n != null &&
        n.iAmAdmin() &&
        (t == null ||
          t.forEach(function (e) {
            var t = e.contact,
              n = o("WAWebWidFactory").asUserWidOrThrow(t.id),
              r = o("WAWebApiContact").getAlternateUserWid(n),
              a = p(n),
              i = r ? p(r) : !0,
              l = a && i;
            l && (c.push(t), d.add(n.toString()));
          }));
      var _ = [];
      r.length &&
        (_ = e(r, function (e) {
          return e.id.isUser() && p(e.id);
        }));
      var f = [];
      return (i && f.push(i), l && f.push(l), (f = f.concat(s, c, _)), f);
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
