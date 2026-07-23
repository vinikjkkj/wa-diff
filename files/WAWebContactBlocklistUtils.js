__d(
  "WAWebContactBlocklistUtils",
  [
    "WAWebApiContact",
    "WAWebBlocklistCollection",
    "WAWebBlocklistMigration",
    "WAWebChatCollection",
    "WAWebWidFactory",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      e.id.isUser() &&
        (o("WAWebBlocklistMigration").applyBlocklistV2Rules()
          ? (e.isContactBlocked = u(e))
          : (e.isContactBlocked = s(e)));
    }
    function s(e) {
      if (o("WAWebBlocklistCollection").BlocklistCollection.get(e.id))
        return !0;
      if (e.id.isLid() && e.phoneNumber != null)
        return (
          o("WAWebBlocklistCollection").BlocklistCollection.get(
            e.phoneNumber,
          ) != null
        );
      var t = o("WAWebApiContact").getAlternateUserWid(
          o("WAWebWidFactory").asUserWidOrThrow(e.id),
        ),
        n =
          t != null &&
          o("WAWebBlocklistCollection").BlocklistCollection.get(t) != null;
      return n;
    }
    function u(e) {
      if (e.id.isRegularUserPn()) {
        var t = o("WAWebChatCollection").ChatCollection.get(e.id);
        return (t == null ? void 0 : t.accountLid) == null
          ? !1
          : o("WAWebBlocklistCollection").BlocklistCollection.get(
              t.accountLid,
            ) != null;
      }
      return (
        o("WAWebBlocklistCollection").BlocklistCollection.get(e.id) != null
      );
    }
    l.updateContactBlocked = e;
  },
  98,
);
