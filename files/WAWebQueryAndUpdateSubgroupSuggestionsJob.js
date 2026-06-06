__d(
  "WAWebQueryAndUpdateSubgroupSuggestionsJob",
  [
    "WAWebApiSubgroupSuggestionStore",
    "WAWebBackendApi",
    "WAWebDBCommunity",
    "WAWebMexFetchSubgroupSuggestionsJob",
    "WAWebUserPrefsMeUser",
  ],
  function (t, n, r, o, a, i, l) {
    async function e(e, t) {
      var n = await o(
          "WAWebMexFetchSubgroupSuggestionsJob",
        ).mexFetchSubgroupSuggestions(e, t, "INTERACTIVE"),
        r = await o("WAWebApiSubgroupSuggestionStore").getSubgroupSuggestions(
          e,
        ),
        a = r.filter(function (e) {
          return !n.some(function (t) {
            return t.id.equals(e.id) && t.owner.equals(e.owner);
          });
        });
      (await o("WAWebApiSubgroupSuggestionStore").removeSubgroupSuggestions(
        a.map(function (t) {
          var n = t.id,
            r = t.owner;
          return { parentGroupId: e, id: n, owner: r };
        }),
      ),
        await o("WAWebApiSubgroupSuggestionStore").addSubgroupSuggestions(e, n),
        o("WAWebBackendApi").frontendFireAndForget(
          "createOrUpdateSubgroupSuggestions",
          { parentGroupId: e, subgroupSuggestions: n },
        ));
    }
    async function s(t) {
      if (
        t.isParentGroup === !0 &&
        t.allowNonAdminSubGroupCreation === !1 &&
        t.participants.some(function (e) {
          return o("WAWebUserPrefsMeUser").isMeAccount(e.id) && e.isAdmin;
        })
      ) {
        var n = await o("WAWebDBCommunity").getJoinedSubgroups(t.id);
        if (n.length) return e(t.id, n[0]);
      }
    }
    ((l.queryAndUpdateSubgroupSuggestions = e),
      (l.maybeQueryAndUpdateSubgroupSuggestions = s));
  },
  98,
);
