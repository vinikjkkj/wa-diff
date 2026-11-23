__d(
  "WAWebLidMappingServiceClient",
  ["WAWebLidMappingService"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return {
        createOrReplaceDisplayNamesAndLidPnMappingsInBatches: function (n, r) {
          return e(o("WAWebLidMappingService").LidMappingService, function (e) {
            return e.createOrReplaceDisplayNamesAndLidPnMappingsInBatches(n, r);
          });
        },
        processParsedGroupInfosForLidMappingAndUsernames: function (n) {
          return e(o("WAWebLidMappingService").LidMappingService, function (e) {
            return e.processParsedGroupInfosForLidMappingAndUsernames(n);
          });
        },
        setUsernamesJob: function (n) {
          return e(o("WAWebLidMappingService").LidMappingService, function (e) {
            return e.setUsernamesJob(n);
          });
        },
      };
    }
    l.lidMappingServiceClient = e;
  },
  98,
);
