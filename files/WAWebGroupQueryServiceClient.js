__d(
  "WAWebGroupQueryServiceClient",
  ["WAWebGroupQueryService"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return {
        sendQueryGroup: function (n) {
          return e(o("WAWebGroupQueryService").GroupQueryService, function (e) {
            return e.sendQueryGroup(n);
          });
        },
        sendQueryGroupInvite: function (n) {
          return e(o("WAWebGroupQueryService").GroupQueryService, function (e) {
            return e.sendQueryGroupInvite(n);
          });
        },
        queryAndUpdateGroupMetadataById: function (n) {
          return e(o("WAWebGroupQueryService").GroupQueryService, function (e) {
            return e.queryAndUpdateGroupMetadataById(n);
          });
        },
        getCommunityParticipants: function (n) {
          return e(o("WAWebGroupQueryService").GroupQueryService, function (e) {
            return e.getCommunityParticipants(n);
          });
        },
      };
    }
    l.groupQueryServiceClient = e;
  },
  98,
);
