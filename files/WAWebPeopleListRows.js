__d(
  "WAWebPeopleListRows",
  [
    "WAWebNetworkStatus",
    "WAWebOrgMemberSearchErrorRowLayout",
    "WAWebOrgMemberSearchLoadingRowLayout",
  ],
  function (t, n, r, o, a, i, l) {
    var e = { INFO: "ROW_PEOPLE_INFO", PERSON: "ROW_PERSON" };
    function s(t) {
      return t.map(function (t) {
        return t.kind === "person"
          ? { data: t.row, itemKey: t.row.key, type: e.PERSON }
          : t.kind === "header"
            ? { entry: t, itemKey: t.key, type: e.INFO }
            : {
                entry: t,
                height:
                  t.status === "loading"
                    ? o("WAWebOrgMemberSearchLoadingRowLayout")
                        .ORG_MEMBER_SEARCH_LOADING_HEIGHT
                    : o(
                        "WAWebOrgMemberSearchErrorRowLayout",
                      ).getOrgMemberSearchErrorHeight(u()),
                itemKey: t.key,
                type: e.INFO,
              };
      });
    }
    function u() {
      return r("WAWebNetworkStatus").online ? "unavailable" : "offline";
    }
    ((l.PeopleListRow = e),
      (l.toPeopleListRows = s),
      (l.getPeopleSearchFailure = u));
  },
  98,
);
