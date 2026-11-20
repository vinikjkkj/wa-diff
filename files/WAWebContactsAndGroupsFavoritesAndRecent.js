__d(
  "WAWebContactsAndGroupsFavoritesAndRecent",
  [
    "WAWebApiContact",
    "WAWebChatCollection",
    "WAWebContactCollection",
    "WAWebContactsAndGroupsContacts",
    "WAWebContactsAndGroupsMyGroups",
    "WAWebContactsAndGroupsPresence",
    "WAWebFavoriteCollection",
    "WAWebFrontendContactGetters",
    "WAWebUserUtils",
    "WAWebWidFactory",
  ],
  function (t, n, r, o, a, i, l) {
    var e = "*",
      s = " ";
    function u(t) {
      var n = o("WAWebChatCollection")
          .ChatCollection.getModelsArray()
          .filter(function (e) {
            return o("WAWebContactsAndGroupsContacts").hasChattedThisWeek(e, t);
          })
          .sort(function (e, t) {
            var n, r;
            return ((n = t.t) != null ? n : 0) - ((r = e.t) != null ? r : 0);
          }),
        r = [],
        a = new Set(),
        i = function (n, i, l) {
          i == null ||
            a.has(i) ||
            r.length >= o("WAWebContactsAndGroupsPresence").MAX_PRESENCE_ROWS ||
            (a.add(i), r.push("" + (l ? e : "") + n.toString()));
        };
      o("WAWebFavoriteCollection")
        .FavoriteCollection.toArray()
        .sort(function (e, t) {
          return e.orderIndex - t.orderIndex;
        })
        .forEach(function (e) {
          var t = o("WAWebChatCollection").ChatCollection.get(e.id);
          if (t != null) {
            i(t.id, g(t), !0);
            return;
          }
          var n = f(o("WAWebWidFactory").createWid(e.id));
          n != null && i(n.id, n.id.toString(), !0);
        });
      for (var l of n) {
        if (r.length >= o("WAWebContactsAndGroupsPresence").MAX_PRESENCE_ROWS)
          break;
        i(l.id, g(l), !1);
      }
      return r.join(s);
    }
    function c(e) {
      return e.split(s).sort().join(s);
    }
    function d(t) {
      return t === ""
        ? []
        : t.split(s).flatMap(function (t) {
            var n = t.startsWith(e),
              r = n ? t.slice(e.length) : t,
              o = p(r, n);
            return o != null ? [o] : [];
          });
    }
    function m(e) {
      return e.flatMap(function (e) {
        return e.kind === "person" ? [e.contact] : [];
      });
    }
    function p(e, t) {
      var n = o("WAWebChatCollection").ChatCollection.get(e);
      if (n != null && n.id.isGroup())
        return o("WAWebContactsAndGroupsMyGroups").isMyGroup(n)
          ? { chat: n, isFavorite: t, kind: "group" }
          : null;
      var r = _(n, e);
      return r != null ? { contact: r, isFavorite: t, kind: "person" } : null;
    }
    function _(e, t) {
      var n;
      if (e == null)
        return o("WAWebContactCollection").ContactCollection.get(
          o("WAWebWidFactory").createWid(t),
        );
      var r = e.accountLid;
      return (n =
        r != null
          ? o("WAWebContactCollection").ContactCollection.get(r)
          : null) != null
        ? n
        : e.contact;
    }
    function f(e) {
      if (!e.isUser()) return null;
      var t = e.isLid()
          ? e
          : o("WAWebApiContact").getCurrentLid(
              o("WAWebWidFactory").asUserWidOrThrow(e),
            ),
        n =
          t != null
            ? o("WAWebContactCollection").ContactCollection.get(t)
            : null;
      return n == null ||
        o("WAWebUserUtils").isMeAccount(n.id) ||
        !o("WAWebFrontendContactGetters").getIsMyContact(n) ||
        o("WAWebContactsAndGroupsContacts").getContactChat(n) != null
        ? null
        : n;
    }
    function g(e) {
      return o("WAWebContactsAndGroupsMyGroups").isMyGroup(e)
        ? e.id.toString()
        : h(e);
    }
    function h(e) {
      var t;
      return !e.id.isRegularUser() ||
        e.isLocked ||
        o("WAWebUserUtils").isMeAccount(e.id) ||
        !y(e)
        ? null
        : ((t = e.accountLid) != null ? t : e.id).toString();
    }
    function y(e) {
      var t = e.contact;
      return (
        o("WAWebFrontendContactGetters").getIsMyContact(t) ||
        o("WAWebContactsAndGroupsContacts").canListUnsavedPerson(e, t)
      );
    }
    ((l.getFavoritesAndRecentKey = u),
      (l.getFavoritesAndRecentMembersKey = c),
      (l.getFavoritesAndRecentEntries = d),
      (l.getFavoritesAndRecentContacts = m));
  },
  98,
);
