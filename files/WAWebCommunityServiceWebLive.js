__d(
  "WAWebCommunityServiceWebLive",
  [
    "WAWebApiSubgroupSuggestionStore",
    "WAWebCommunityService",
    "WAWebGroupJoinSubgroupJob",
    "WAWebQueryAndUpdateSubgroupSuggestionsJob",
    "WebDi.Async",
  ],
  function (t, n, r, o, a, i, l) {
    var e = o("WAWebCommunityService").CommunityService.make(function* () {
      var e = {
        getSubgroupSuggestions: function (t) {
          return o("WebDi.Async").fromPromise(function () {
            return o("WAWebApiSubgroupSuggestionStore").getSubgroupSuggestions(
              t,
            );
          });
        },
        queryAndUpdateSubgroupSuggestions: function (t, n) {
          return o("WebDi.Async").fromPromise(function () {
            return o(
              "WAWebQueryAndUpdateSubgroupSuggestionsJob",
            ).queryAndUpdateSubgroupSuggestions(t, n);
          });
        },
        joinSubgroup: function (t) {
          return o("WebDi.Async").fromPromise(function () {
            return o("WAWebGroupJoinSubgroupJob").joinSubgroup(t);
          });
        },
      };
      return e;
    });
    l.CommunityServiceWebLive = e;
  },
  98,
);
