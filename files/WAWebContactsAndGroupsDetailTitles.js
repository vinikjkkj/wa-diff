__d(
  "WAWebContactsAndGroupsDetailTitles",
  ["fbt"],
  function (t, n, r, o, a, i, l, s) {
    function e(e) {
      return e === "joinRequests"
        ? s._(/*BTDS*/ "Join requests")
        : e === "newMedia"
          ? s._(/*BTDS*/ "New photos, videos and docs")
          : e === "openPolls"
            ? s._(/*BTDS*/ "Open polls")
            : e === "pollGroups"
              ? s._(/*BTDS*/ "Groups from your polls")
              : e === "upcomingEvents"
                ? s._(/*BTDS*/ "Upcoming events")
                : (function () {
                    throw Error(
                      "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                        e,
                    );
                  })();
    }
    function u() {
      return s._(/*BTDS*/ "Restricted chats");
    }
    ((l.getAttentionTitle = e), (l.getRestrictedChatsTitle = u));
  },
  226,
);
