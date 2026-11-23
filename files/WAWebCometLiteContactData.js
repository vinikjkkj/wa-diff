__d(
  "WAWebCometLiteContactData",
  [
    "WAWebChatCollection",
    "WAWebContactCollection",
    "WAWebContactCollectionUtils",
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
    function m() {
      var t = [];
      for (var n of o("WAWebFavoritesUtils").getFavoriteItems())
        t.push({ wid: n.wid, contact: n.contact, chat: n.chat });
      for (var a of o("WAWebChatCollection").ChatCollection.filter(
        function (e) {
          return !e.archive && r("WAWebWid").isUser(e.id);
        },
      ))
        t.push({ wid: a.id, contact: a.contact, chat: a });
      var i = d(t);
      if (i.length >= e) return i.slice(0, s);
      var l = new Set(
          i.map(function (e) {
            return e.wid.toString();
          }),
        ),
        u = [].concat(i);
      for (var m of o("WAWebContactCollectionUtils").getFilteredContacts(
        o("WAWebContactCollection").ContactCollection,
        {},
      )) {
        if (u.length >= s) break;
        var p = m.id.toString();
        l.has(p) ||
          (l.add(p), u.push({ wid: m.id, contact: m, chat: c(m.id) }));
      }
      return u.slice(0, s);
    }
    ((l.getMeUserOrNull = u),
      (l.getChatForContact = c),
      (l.deriveRowItems = m));
  },
  98,
);
