__d(
  "WAWebLidMappingServiceWebLive",
  [
    "JSResourceForInteraction",
    "Promise",
    "WAWebLidMappingService",
    "WebDi.Async",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = r("JSResourceForInteraction")(
        "WAWebCreateOrReplaceDisplayNamesAndLidPnMappingsJob",
      ).__setRef("WAWebLidMappingServiceWebLive"),
      u = r("JSResourceForInteraction")(
        "WAWebLidMappingUsernameLearnUtils",
      ).__setRef("WAWebLidMappingServiceWebLive"),
      c = r("JSResourceForInteraction")("WAWebSetUsernameJob").__setRef(
        "WAWebLidMappingServiceWebLive",
      ),
      d = o("WAWebLidMappingService").LidMappingService.make(function* () {
        var t = yield* o("WebDi.Async").fromPromise(function () {
            return (e || (e = n("Promise"))).all([
              s.load(),
              u.load(),
              c.load(),
            ]);
          }),
          r = t[0].createOrReplaceDisplayNamesAndLidPnMappingsInBatches,
          a = t[1].processParsedGroupInfosForLidMappingAndUsernames,
          i = t[2].setUsernamesJob,
          l = {
            createOrReplaceDisplayNamesAndLidPnMappingsInBatches: function (
              t,
              n,
            ) {
              return o("WebDi.Async").fromPromise(function () {
                return r(t, n);
              });
            },
            processParsedGroupInfosForLidMappingAndUsernames: function (t) {
              return o("WebDi.Async").fromPromise(function () {
                return a(t);
              });
            },
            setUsernamesJob: function (t) {
              return o("WebDi.Async").fromPromise(function () {
                return i(t);
              });
            },
          };
        return l;
      });
    l.LidMappingServiceWebLive = d;
  },
  98,
);
