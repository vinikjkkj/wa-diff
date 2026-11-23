__d(
  "WAWebGroupQueryServiceWebLive",
  [
    "JSResourceForInteraction",
    "Promise",
    "WAWebGroupQueryService",
    "WebDi.Async",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = r("JSResourceForInteraction")(
        "WAWebGroupGetCommunityParticipantsJob",
      ).__setRef("WAWebGroupQueryServiceWebLive"),
      u = r("JSResourceForInteraction")("WAWebGroupQueryBridge").__setRef(
        "WAWebGroupQueryServiceWebLive",
      ),
      c = r("JSResourceForInteraction")("WAWebGroupQueryJob").__setRef(
        "WAWebGroupQueryServiceWebLive",
      ),
      d = o("WAWebGroupQueryService").GroupQueryService.make(function* () {
        var t = yield* o("WebDi.Async").fromPromise(function () {
            return (e || (e = n("Promise"))).all([
              s.load(),
              u.load(),
              c.load(),
            ]);
          }),
          r = t[0].getCommunityParticipants,
          a = t[1],
          i = a.sendQueryGroup,
          l = a.sendQueryGroupInvite,
          d = t[2].queryAndUpdateGroupMetadataById,
          m = {
            sendQueryGroup: function (t) {
              return o("WebDi.Async").fromPromise(function () {
                return i(t);
              });
            },
            sendQueryGroupInvite: function (t) {
              return o("WebDi.Async").fromPromise(function () {
                return l(t);
              });
            },
            queryAndUpdateGroupMetadataById: function (t) {
              return o("WebDi.Async").fromPromise(function () {
                return d(t);
              });
            },
            getCommunityParticipants: function (t) {
              return o("WebDi.Async").fromPromise(function () {
                return r(t);
              });
            },
          };
        return m;
      });
    l.GroupQueryServiceWebLive = d;
  },
  98,
);
