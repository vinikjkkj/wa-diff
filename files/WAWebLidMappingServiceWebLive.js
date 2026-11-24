__d(
  "WAWebLidMappingServiceWebLive",
  [
    "WAWebCreateOrReplaceDisplayNamesAndLidPnMappingsJob",
    "WAWebLidMappingService",
    "WAWebLidMappingUsernameLearnUtils",
    "WAWebSetUsernameJob",
    "WebDi.Async",
  ],
  function (t, n, r, o, a, i, l) {
    var e = o("WAWebLidMappingService").LidMappingService.make(function* () {
      var e = {
        createOrReplaceDisplayNamesAndLidPnMappingsInBatches: function (t, n) {
          return o("WebDi.Async").fromPromise(function () {
            return o(
              "WAWebCreateOrReplaceDisplayNamesAndLidPnMappingsJob",
            ).createOrReplaceDisplayNamesAndLidPnMappingsInBatches(t, n);
          });
        },
        processParsedGroupInfosForLidMappingAndUsernames: function (t) {
          return o("WebDi.Async").fromPromise(function () {
            return o(
              "WAWebLidMappingUsernameLearnUtils",
            ).processParsedGroupInfosForLidMappingAndUsernames(t);
          });
        },
        setUsernamesJob: function (t) {
          return o("WebDi.Async").fromPromise(function () {
            return o("WAWebSetUsernameJob").setUsernamesJob(t);
          });
        },
      };
      return e;
    });
    l.LidMappingServiceWebLive = e;
  },
  98,
);
