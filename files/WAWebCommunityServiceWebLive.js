__d(
  "WAWebCommunityServiceWebLive",
  [
    "JSResourceForInteraction",
    "Promise",
    "WAWebCommunityService",
    "WebDi.Async",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = r("JSResourceForInteraction")(
        "WAWebApiSubgroupSuggestionStore",
      ).__setRef("WAWebCommunityServiceWebLive"),
      u = r("JSResourceForInteraction")("WAWebGroupJoinSubgroupJob").__setRef(
        "WAWebCommunityServiceWebLive",
      ),
      c = r("JSResourceForInteraction")(
        "WAWebQueryAndUpdateSubgroupSuggestionsJob",
      ).__setRef("WAWebCommunityServiceWebLive"),
      d = o("WAWebCommunityService").CommunityService.make(function* () {
        var t = yield* o("WebDi.Async").fromPromise(function () {
            return (e || (e = n("Promise"))).all([
              s.load(),
              u.load(),
              c.load(),
            ]);
          }),
          r = t[0].getSubgroupSuggestions,
          a = t[1].joinSubgroup,
          i = t[2].queryAndUpdateSubgroupSuggestions,
          l = {
            getSubgroupSuggestions: function (t) {
              return o("WebDi.Async").fromPromise(function () {
                return r(t);
              });
            },
            queryAndUpdateSubgroupSuggestions: function (t, n) {
              return o("WebDi.Async").fromPromise(function () {
                return i(t, n);
              });
            },
            joinSubgroup: function (t) {
              return o("WebDi.Async").fromPromise(function () {
                return a(t);
              });
            },
          };
        return l;
      });
    l.CommunityServiceWebLive = d;
  },
  98,
);
