__d(
  "WAWebContactsAndGroupsGroupsTableRows",
  [
    "WAWebChatGetters",
    "WAWebContactsAndGroupsMyGroupJoins",
    "WAWebContactsAndGroupsMyGroups",
    "WAWebFrontendChatGetters",
    "WAWebGroupAdminGroupSort",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      var n = t.filter,
        r = t.query,
        a = t.sort,
        i = o("WAWebContactsAndGroupsMyGroups").createGroupSearch(r),
        l = e.filter(function (e) {
          return c(e, n) && i(e);
        });
      return a === "recent"
        ? o("WAWebGroupAdminGroupSort").sortAdminGroups(l, "recent")
        : a === "name"
          ? o("WAWebGroupAdminGroupSort").sortAdminGroups(l, "name")
          : a === "nameDescending"
            ? o("WAWebGroupAdminGroupSort").sortAdminGroups(l, "name").reverse()
            : a === "members"
              ? l.sort(_)
              : a === "newest"
                ? l.sort(s)
                : (function () {
                    throw Error(
                      "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                        a,
                    );
                  })();
    }
    function s(e, t) {
      return u(t) - u(e);
    }
    function u(e) {
      var t, n, r, a;
      return (t =
        (n =
          (r = o("WAWebContactsAndGroupsMyGroupJoins").getCachedMyGroupJoin(
            e,
          )) == null
            ? void 0
            : r.t) != null
          ? n
          : (a = e.groupMetadata) == null
            ? void 0
            : a.creation) != null
        ? t
        : 0;
    }
    function c(e, t) {
      return (function (t) {
        if (t === "all") return !0;
        if (t === "admin") return m(e);
        if (t === "favorites")
          return o("WAWebFrontendChatGetters").getIsFavorite(e);
        if (t === "archived") return o("WAWebChatGetters").getArchive(e);
        if (
          ((typeof t == "object" && t !== null) || typeof t == "function") &&
          "listId" in t
        ) {
          var n,
            r = t.listId;
          return (
            ((n = o("WAWebChatGetters").getLabels(e)) == null
              ? void 0
              : n.includes(r)) === !0
          );
        }
        throw Error(
          "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
            t,
        );
      })(t);
    }
    function d(e, t) {
      var n = function (n) {
        return e.filter(function (e) {
          return c(e, n);
        }).length;
      };
      return {
        admin: n("admin"),
        all: n("all"),
        archived: n("archived"),
        favorites: n("favorites"),
        lists: new Map(
          t.map(function (e) {
            return [e, n({ listId: e })];
          }),
        ),
      };
    }
    function m(e) {
      var t;
      return (
        ((t = e.groupMetadata) == null ? void 0 : t.participants.iAmAdmin()) ===
        !0
      );
    }
    function p(e) {
      var t = new Map();
      return (
        e.forEach(function (e) {
          var n,
            r = e.chat,
            o = e.request,
            a = r.id.toString(),
            i = (n = t.get(a)) != null ? n : [];
          (i.push(o.id), t.set(a, i));
        }),
        t
      );
    }
    function _(e, t) {
      var n, r;
      return (
        ((n = o("WAWebContactsAndGroupsMyGroups").getGroupMemberCount(t)) !=
        null
          ? n
          : 0) -
          ((r = o("WAWebContactsAndGroupsMyGroups").getGroupMemberCount(e)) !=
          null
            ? r
            : 0) || o("WAWebGroupAdminGroupSort").compareByRecent(e, t)
      );
    }
    ((l.getGroupsTableRows = e),
      (l.matchesGroupsTableFilter = c),
      (l.countGroupsByFilter = d),
      (l.isGroupAdmin = m),
      (l.getJoinRequestersByGroup = p));
  },
  98,
);
