__d(
  "WAWebWorkDirectoryContactUtils",
  [
    "WAWebChatCollection",
    "WAWebLidMigrationUtils",
    "WAWebReachoutTimelockUtils",
    "WAWebUserUtils",
    "WAWebWorkDirectoryContactModel",
    "WAWebWorkDirectoryMemberActions",
    "WAWebWorkDirectoryMemberUtils",
  ],
  function (t, n, r, o, a, i, l) {
    var e = 3,
      s = new WeakMap();
    function u(e, t, n) {
      var r = new Set(n);
      return (
        r.add(o("WAWebUserUtils").getMeLidUserOrThrow().user),
        o("WAWebWorkDirectoryMemberUtils")
          .filterWorkDirectoryMembers(e, t)
          .flatMap(function (e) {
            var t = e.lid;
            return t == null ||
              !o("WAWebWorkDirectoryMemberUtils").canSelectWorkDirectoryMember(
                e,
              ) ||
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
      return o("WAWebWorkDirectoryMemberActions").getWorkDirectoryMemberContact(
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
      var r = new (o("WAWebWorkDirectoryContactModel").WorkDirectoryContact)({
        details: o(
          "WAWebWorkDirectoryMemberUtils",
        ).getWorkDirectoryMemberDetails(e),
        id: t.user,
        lid: t,
        memberId: e.memberId,
        name: e.name,
      });
      return (s.set(e, r), r);
    }
    ((l.searchWorkDirectoryContacts = u),
      (l.getContactLidUsers = c),
      (l.getChatLidUsers = d),
      (l.isWorkDirectoryQueryLongEnough = m),
      (l.withoutWorkDirectoryContacts = p),
      (l.getWorkDirectoryContactModel = _),
      (l.isWorkDirectoryContactRestricted = f),
      (l.getWorkDirectoryContactToOpenOnEnter = g),
      (l.isListedWorkDirectoryContact = h));
  },
  98,
);
