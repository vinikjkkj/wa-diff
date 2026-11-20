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
        a = t.recentRanks,
        i = t.sort,
        l = o("WAWebContactsAndGroupsMyGroups").createGroupSearch(r),
        s = e.filter(function (e) {
          return p(e, n) && l(e);
        });
      return i === "recent"
        ? c(o("WAWebGroupAdminGroupSort").sortAdminGroups(s, "recent"), a)
        : i === "name"
          ? o("WAWebGroupAdminGroupSort").sortAdminGroups(s, "name")
          : i === "nameDescending"
            ? o("WAWebGroupAdminGroupSort").sortAdminGroups(s, "name").reverse()
            : i === "members"
              ? s.sort(h)
              : i === "newest"
                ? s.sort(d)
                : (function () {
                    throw Error(
                      "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                        i,
                    );
                  })();
    }
    function s(e) {
      return o("WAWebContactsAndGroupsMyGroups").getGroupRanks(
        o("WAWebGroupAdminGroupSort").sortAdminGroups(e, "recent"),
      );
    }
    function u(e, t) {
      var n = t.filter(function (t) {
        return !e.has(t.id.toString());
      });
      if (n.length === 0) return e;
      var r = 0;
      (e.forEach(function (e) {
        r = Math.min(r, e);
      }),
        (r -= n.length));
      var a = new Map(e);
      return (
        o("WAWebGroupAdminGroupSort")
          .sortAdminGroups(n, "recent")
          .forEach(function (e, t) {
            a.set(e.id.toString(), r + t);
          }),
        a
      );
    }
    function c(e, t) {
      return t == null
        ? [].concat(e)
        : e
            .map(function (n, r) {
              var o;
              return {
                chat: n,
                rank: (o = t.get(n.id.toString())) != null ? o : r - e.length,
              };
            })
            .sort(function (e, t) {
              return e.rank - t.rank;
            })
            .map(function (e) {
              var t = e.chat;
              return t;
            });
    }
    function d(e, t) {
      return m(t) - m(e);
    }
    function m(e) {
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
    function p(e, t) {
      return (function (t) {
        if (t === "all") return !0;
        if (t === "admin") return f(e);
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
    function _(e, t) {
      var n = function (n) {
        return e.filter(function (e) {
          return p(e, n);
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
    function f(e) {
      return g(e.groupMetadata);
    }
    function g(e) {
      return (e == null ? void 0 : e.participants.iAmAdmin()) === !0;
    }
    function h(e, t) {
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
      (l.getRecentRanks = s),
      (l.addRecentRanks = u),
      (l.countGroupsByFilter = _),
      (l.isGroupAdmin = f),
      (l.isGroupAdminFor = g));
  },
  98,
);
