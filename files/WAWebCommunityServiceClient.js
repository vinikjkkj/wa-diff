__d(
  "WAWebCommunityServiceClient",
  ["WAWebCommunityService"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return {
        getSubgroupSuggestions: function (n) {
          return e(o("WAWebCommunityService").CommunityService, function (e) {
            return e.getSubgroupSuggestions(n);
          });
        },
        queryAndUpdateSubgroupSuggestions: function (n, r) {
          return e(o("WAWebCommunityService").CommunityService, function (e) {
            return e.queryAndUpdateSubgroupSuggestions(n, r);
          });
        },
        joinSubgroup: function (n) {
          return e(o("WAWebCommunityService").CommunityService, function (e) {
            return e.joinSubgroup(n);
          });
        },
      };
    }
    l.communityServiceClient = e;
  },
  98,
);
