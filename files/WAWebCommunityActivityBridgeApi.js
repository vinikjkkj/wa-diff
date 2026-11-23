__d(
  "WAWebCommunityActivityBridgeApi",
  ["WAWebCommunityActivityCollection", "WAWebGroupMetadataCollection"],
  function (t, n, r, o, a, i, l) {
    var e = {
      restoreCommunityActivity: async function () {
        var e = r("WAWebGroupMetadataCollection").filter(function (e) {
            return e.isParentGroup;
          }),
          t = e.map(function (e) {
            return r("WAWebCommunityActivityCollection").syncActivityFor(e.id);
          });
        await Promise.all(t);
      },
    };
    l.CommunityActivityBridgeApi = e;
  },
  98,
);
