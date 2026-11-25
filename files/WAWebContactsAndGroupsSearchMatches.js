__d(
  "WAWebContactsAndGroupsSearchMatches",
  [
    "WAWebContactsAndGroupsCommunitiesSessions",
    "WAWebContactsAndGroupsContactsSessions",
    "WAWebContactsAndGroupsGroupsTableSessions",
  ],
  function (t, n, r, o, a, i, l) {
    var e = ["contacts", "groups", "communities"];
    function s(t) {
      return e.some(function (e) {
        return t[e] > 0;
      });
    }
    function u(e, t, n, r) {
      var o = function (a) {
        var o = a === t ? !n : r;
        return o ? e[a] : 0;
      };
      return {
        communities: o("communities"),
        contacts: o("contacts"),
        groups: o("groups"),
      };
    }
    function c(e, t, n) {
      e: {
        if (e === "contacts") {
          (o("WAWebContactsAndGroupsContactsSessions").contactsQuerySession.set(
            t,
          ),
            o(
              "WAWebContactsAndGroupsContactsSessions",
            ).contactsFilterSession.set("all"));
          break e;
        }
        if (e === "groups") {
          (o(
            "WAWebContactsAndGroupsGroupsTableSessions",
          ).groupsTableQuerySession.set(t),
            o(
              "WAWebContactsAndGroupsGroupsTableSessions",
            ).groupsTableFilterSession.set("all"));
          break e;
        }
        if (e === "communities") {
          (o(
            "WAWebContactsAndGroupsCommunitiesSessions",
          ).communitiesQuerySession.set(t),
            o(
              "WAWebContactsAndGroupsCommunitiesSessions",
            ).communitiesFilterSession.set("all"));
          break e;
        }
        throw Error(
          "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
            e,
        );
      }
      n.onSelect(e);
    }
    ((l.SEARCH_MATCH_VIEWS = e),
      (l.hasOtherMatches = s),
      (l.getOtherMatchCounts = u),
      (l.showSearchInView = c));
  },
  98,
);
