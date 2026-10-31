__d(
  "WAWebWODirectoryContactUtils",
  [
    "WAWebChatCollection",
    "WAWebLidMigrationUtils",
    "WAWebReachoutTimelockUtils",
    "WAWebUserPrefsMeUser",
    "WAWebWODirectoryContactModel",
    "WAWebWODirectoryMemberActions",
    "WAWebWODirectoryMemberUtils",
  ],
  function (t, n, r, o, a, i, l) {
    var e = 3,
      s = new WeakMap();
    function u(e, t, n) {
      var r = new Set(n);
      return (
        r.add(o("WAWebUserPrefsMeUser").getMeLidUserOrThrow().user),
        o("WAWebWODirectoryMemberUtils")
          .filterWODirectoryMembers(e, t)
          .flatMap(function (e) {
            var t = e.lid;
            return t == null ||
              !o("WAWebWODirectoryMemberUtils").canSelectWODirectoryMember(e) ||
              r.has(t.user)
              ? []
              : (r.add(t.user), [C(e, t)]);
          })
      );
    }
    function c(e) {
      return e.flatMap(function (e) {
        var t = y(e);
        return t == null ? [] : [t];
      });
    }
    function d(e) {
      return e.flatMap(function (e) {
        return e.accountLid == null ? [] : [e.accountLid.user];
      });
    }
    function m(t) {
      return t.replace(/\s/g, "").length >= e;
    }
    function p(e, t) {
      if (t.length === 0) return e;
      var n = new Set(
        t.map(function (e) {
          return e.lid.user;
        }),
      );
      return e.filter(function (e) {
        var t = y(e);
        return t == null || !n.has(t);
      });
    }
    function _(e) {
      return o("WAWebWODirectoryMemberActions").getWODirectoryMemberContact(
        e.lid,
        e.name,
      );
    }
    function f(e) {
      var t;
      return (
        o("WAWebReachoutTimelockUtils").isUserReachoutTimelockedAndVisible() &&
        ((t = o("WAWebChatCollection").ChatCollection.getChatByAccountLid(
          e.lid,
        )) == null
          ? void 0
          : t.getTcToken()) == null
      );
    }
    function g(e) {
      var t = e[0];
      return t == null || f(t) ? null : t;
    }
    function h(e, t) {
      var n = t == null ? null : o("WAWebLidMigrationUtils").toLid(t);
      return (
        n != null &&
        e.some(function (e) {
          return e.lid.user === n.user;
        })
      );
    }
    function y(e) {
      var t;
      return e.id.isRegularUser()
        ? (t = o("WAWebLidMigrationUtils").toUserLid(e.id)) == null
          ? void 0
          : t.user
        : null;
    }
    function C(e, t) {
      var n = s.get(e);
      if (n != null) return n;
      var r = new (o("WAWebWODirectoryContactModel").WODirectoryContact)({
        details: o("WAWebWODirectoryMemberUtils").getWODirectoryMemberDetails(
          e,
        ),
        id: t.user,
        lid: t,
        memberId: e.memberId,
        name: e.name,
      });
      return (s.set(e, r), r);
    }
    ((l.searchWODirectoryContacts = u),
      (l.getContactLidUsers = c),
      (l.getChatLidUsers = d),
      (l.isWODirectoryQueryLongEnough = m),
      (l.withoutWODirectoryContacts = p),
      (l.getWODirectoryContactModel = _),
      (l.isWODirectoryContactRestricted = f),
      (l.getWODirectoryContactToOpenOnEnter = g),
      (l.isListedWODirectoryContact = h));
  },
  98,
);
