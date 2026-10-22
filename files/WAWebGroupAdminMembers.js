__d(
  "WAWebGroupAdminMembers",
  [
    "WAWebApiContact",
    "WAWebContactComparator",
    "WAWebContactSearchMatcher",
    "WAWebL10NAccentFold",
    "WAWebLidMigrationUtils",
    "WAWebPhoneNumberSearch",
    "WAWebUserPrefsMeUser",
    "WAWebWidFactory",
  ],
  function (t, n, r, o, a, i, l) {
    var e = ["bulk_add", "bulk_remove", "reset", "change:isAdmin"];
    function s(e) {
      var t = new Set();
      return (
        e.forEach(function (e) {
          var n;
          (n = e.groupMetadata) == null ||
            n.participants.forEach(function (e) {
              !o("WAWebUserPrefsMeUser").isMeAccount(e.id) &&
                !e.id.isBot() &&
                t.add(p(e));
            });
        }),
        t.size
      );
    }
    function u(e) {
      var t = new Map();
      return (
        e.forEach(function (e) {
          var n;
          (n = e.groupMetadata) == null ||
            n.participants.forEach(function (n) {
              if (
                !(o("WAWebUserPrefsMeUser").isMeAccount(n.id) || n.id.isBot())
              ) {
                var r = p(n),
                  a = t.get(r);
                a != null
                  ? a.push({ chat: e, participant: n })
                  : t.set(r, [{ chat: e, participant: n }]);
              }
            });
        }),
        Array.from(t, function (e) {
          var t = e[0],
            n = e[1];
          return { contact: n[0].participant.contact, key: t, memberships: n };
        }).sort(_)
      );
    }
    function c(e, t) {
      var n = o("WAWebApiContact").getAlternateUserWid(
          o("WAWebWidFactory").asUserWidOrThrow(t),
        ),
        r = [];
      return (
        e.forEach(function (e) {
          var o,
            a,
            i = (o = e.groupMetadata) == null ? void 0 : o.participants,
            l =
              (a = i == null ? void 0 : i.get(t)) != null
                ? a
                : n != null
                  ? i == null
                    ? void 0
                    : i.get(n)
                  : null;
          l != null && r.push({ chat: e, participant: l });
        }),
        r
      );
    }
    function d(e, t) {
      var n = o("WAWebL10NAccentFold").accentFold(t.trim());
      if (n === "") return e;
      var r = o("WAWebPhoneNumberSearch").numberSearch(n);
      return e.filter(function (e) {
        var t = e.contact;
        return o("WAWebContactSearchMatcher").searchMatchExact(t, n, r) != null;
      });
    }
    function m(e) {
      var t;
      return (
        (t = o("WAWebLidMigrationUtils").toUserLid(e)) != null ? t : e
      ).toString();
    }
    function p(e) {
      return m(o("WAWebWidFactory").asUserWidOrThrow(e.id));
    }
    function _(e, t) {
      return (
        t.memberships.length - e.memberships.length ||
        o("WAWebContactComparator").ContactComparator(e.contact, t.contact)
      );
    }
    ((l.GROUP_PARTICIPANT_EVENTS = e),
      (l.countGroupAdminPeople = s),
      (l.getGroupAdminMembers = u),
      (l.getMemberMemberships = c),
      (l.filterGroupAdminMembers = d),
      (l.getMemberKeyForWid = m));
  },
  98,
);
