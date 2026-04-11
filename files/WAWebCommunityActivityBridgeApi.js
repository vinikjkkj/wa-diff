__d(
  "WAWebCommunityActivityBridgeApi",
  [
    "Promise",
    "WAWebCommunityActivityCollection",
    "WAWebGroupMetadataCollection",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = {
        restoreCommunityActivity: (function () {
          var t = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            var t = r("WAWebGroupMetadataCollection").filter(function (e) {
                return e.isParentGroup;
              }),
              o = t.map(function (e) {
                return r("WAWebCommunityActivityCollection").syncActivityFor(
                  e.id,
                );
              });
            yield (e || (e = n("Promise"))).all(o);
          });
          function o() {
            return t.apply(this, arguments);
          }
          return o;
        })(),
      };
    l.CommunityActivityBridgeApi = s;
  },
  98,
);
