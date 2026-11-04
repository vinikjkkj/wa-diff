__d(
  "WAWebContactsAndGroupsFavoritesAndRecent",
  [
    "WAWebChatCollection",
    "WAWebContactsAndGroupsContacts",
    "WAWebContactsAndGroupsPresence",
    "WAWebFavoritesUtils",
    "WAWebFrontendContactGetters",
    "WAWebUserPrefsMeUser",
  ],
  function (t, n, r, o, a, i, l) {
    var e = "*",
      s = " ";
    function u(t) {
      var n = o("WAWebFavoritesUtils").getFavoriteChats(),
        r = o("WAWebChatCollection")
          .ChatCollection.getModelsArray()
          .filter(function (e) {
            return o("WAWebContactsAndGroupsContacts").hasChattedThisWeek(e, t);
          })
          .sort(function (e, t) {
            var n, r;
            return ((n = t.t) != null ? n : 0) - ((r = e.t) != null ? r : 0);
          }),
        a = [],
        i = new Set(),
        l = function (n, r) {
          var t = n != null ? d(n) : null;
          n == null ||
            t == null ||
            i.has(t) ||
            a.length >= o("WAWebContactsAndGroupsPresence").MAX_PRESENCE_ROWS ||
            (i.add(t), a.push("" + (r ? e : "") + n.id.toString()));
        };
      return (
        n.forEach(function (e) {
          return l(e, !0);
        }),
        r.forEach(function (e) {
          return l(e, !1);
        }),
        a.join(s)
      );
    }
    function c(t) {
      return t === ""
        ? []
        : t.split(s).flatMap(function (t) {
            var n = t.startsWith(e),
              r = o("WAWebChatCollection").ChatCollection.get(
                n ? t.slice(e.length) : t,
              );
            return r != null ? [{ contact: r.contact, isFavorite: n }] : [];
          });
    }
    function d(e) {
      var t;
      return !e.id.isRegularUser() ||
        e.isLocked ||
        o("WAWebUserPrefsMeUser").isMeAccount(e.id) ||
        !m(e)
        ? null
        : ((t = e.accountLid) != null ? t : e.id).toString();
    }
    function m(e) {
      var t = e.contact;
      return (
        o("WAWebFrontendContactGetters").getIsMyContact(t) ||
        o("WAWebContactsAndGroupsContacts").canListUnsavedPerson(e, t)
      );
    }
    ((l.getFavoritesAndRecentKey = u), (l.getFavoritesAndRecentPeople = c));
  },
  98,
);
