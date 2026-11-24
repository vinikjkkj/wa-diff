__d(
  "WAWebGroupQueryServiceWebLive",
  [
    "WAWebGroupGetCommunityParticipantsJob",
    "WAWebGroupQueryBridge",
    "WAWebGroupQueryJob",
    "WAWebGroupQueryService",
    "WebDi.Async",
  ],
  function (t, n, r, o, a, i, l) {
    var e = o("WAWebGroupQueryService").GroupQueryService.make(function* () {
      var e = {
        sendQueryGroup: function (t) {
          return o("WebDi.Async").fromPromise(function () {
            return o("WAWebGroupQueryBridge").sendQueryGroup(t);
          });
        },
        sendQueryGroupInvite: function (t) {
          return o("WebDi.Async").fromPromise(function () {
            return o("WAWebGroupQueryBridge").sendQueryGroupInvite(t);
          });
        },
        queryAndUpdateGroupMetadataById: function (t) {
          return o("WebDi.Async").fromPromise(function () {
            return o("WAWebGroupQueryJob").queryAndUpdateGroupMetadataById(t);
          });
        },
        getCommunityParticipants: function (t) {
          return o("WebDi.Async").fromPromise(function () {
            return o(
              "WAWebGroupGetCommunityParticipantsJob",
            ).getCommunityParticipants(t);
          });
        },
      };
      return e;
    });
    l.GroupQueryServiceWebLive = e;
  },
  98,
);
