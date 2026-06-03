__d(
  "WAWebQueryAndUpdateSubgroupSuggestionsJob",
  [
    "WAWebApiSubgroupSuggestionStore",
    "WAWebBackendApi",
    "WAWebDBCommunity",
    "WAWebMexFetchSubgroupSuggestionsJob",
    "WAWebUserPrefsMeUser",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      return s.apply(this, arguments);
    }
    function s() {
      return (
        (s = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = yield o(
              "WAWebMexFetchSubgroupSuggestionsJob",
            ).mexFetchSubgroupSuggestions(e, t, "INTERACTIVE"),
            r = yield o(
              "WAWebApiSubgroupSuggestionStore",
            ).getSubgroupSuggestions(e),
            a = r.filter(function (e) {
              return !n.some(function (t) {
                return t.id.equals(e.id) && t.owner.equals(e.owner);
              });
            });
          (yield o("WAWebApiSubgroupSuggestionStore").removeSubgroupSuggestions(
            a.map(function (t) {
              var n = t.id,
                r = t.owner;
              return { parentGroupId: e, id: n, owner: r };
            }),
          ),
            yield o("WAWebApiSubgroupSuggestionStore").addSubgroupSuggestions(
              e,
              n,
            ),
            o("WAWebBackendApi").frontendFireAndForget(
              "createOrUpdateSubgroupSuggestions",
              { parentGroupId: e, subgroupSuggestions: n },
            ));
        })),
        s.apply(this, arguments)
      );
    }
    function u(e) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          if (
            t.isParentGroup === !0 &&
            t.allowNonAdminSubGroupCreation === !1 &&
            t.participants.some(function (e) {
              return o("WAWebUserPrefsMeUser").isMeAccount(e.id) && e.isAdmin;
            })
          ) {
            var n = yield o("WAWebDBCommunity").getJoinedSubgroups(t.id);
            if (n.length) return e(t.id, n[0]);
          }
        })),
        c.apply(this, arguments)
      );
    }
    ((l.queryAndUpdateSubgroupSuggestions = e),
      (l.maybeQueryAndUpdateSubgroupSuggestions = u));
  },
  98,
);
