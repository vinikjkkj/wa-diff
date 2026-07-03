__d(
  "WAWebCometLiteContactData",
  [
    "WAWebChatCollection",
    "WAWebContactCollection",
    "WAWebFavoritesUtils",
    "WAWebLidMigrationUtils",
    "WAWebUserPrefsMeUser",
    "WAWebWid",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = 20,
      s = 30;
    function u() {
      var e;
      return (e = o("WAWebUserPrefsMeUser").getMaybeMeLidUser()) != null
        ? e
        : o("WAWebUserPrefsMeUser").getMaybeMePnUser();
    }
    function c(e) {
      var t,
        n = o("WAWebLidMigrationUtils").toLid(e);
      return n != null
        ? o("WAWebChatCollection").ChatCollection.getChatByAccountLid(n)
        : (t = o("WAWebChatCollection").ChatCollection.get(e)) != null
          ? t
          : null;
    }
    function d(e) {
      var t = new Set(),
        n = [];
      for (var r of e) {
        var o = r.wid.toString();
        t.has(o) || (t.add(o), n.push(r));
      }
      return n;
    }
    function m(t) {
      var n = [];
      for (var a of o("WAWebFavoritesUtils").getFavoriteItems())
        n.push({ wid: a.wid, contact: a.contact, chat: a.chat });
      for (var i of o("WAWebChatCollection").ChatCollection.filter(
        function (e) {
          return !e.archive && r("WAWebWid").isUser(e.id);
        },
      ))
        n.push({ wid: i.id, contact: i.contact, chat: i });
      for (var l of t) n.push({ wid: l.id, contact: l, chat: c(l.id) });
      var u = d(n);
      if (u.length >= e) return u.slice(0, s);
      var m = new Set(
          u.map(function (e) {
            return e.wid.toString();
          }),
        ),
        p = [].concat(u);
      for (var _ of o(
        "WAWebContactCollection",
      ).ContactCollection.getFilteredContacts({})) {
        if (p.length >= s) break;
        var f = _.id.toString();
        m.has(f) ||
          (m.add(f), p.push({ wid: _.id, contact: _, chat: c(_.id) }));
      }
      return p.slice(0, s);
    }
    ((l.TARGET_CONTACTS = e),
      (l.MAX_CONTACTS = s),
      (l.getMeUserOrNull = u),
      (l.getChatForContact = c),
      (l.dedupeByWid = d),
      (l.deriveRowItems = m));
  },
  98,
);
