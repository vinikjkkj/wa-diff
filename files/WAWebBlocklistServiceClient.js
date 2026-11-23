__d(
  "WAWebBlocklistServiceClient",
  ["WAWebBlocklistService"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return {
        updateBlocklistDbJob: function (n, r) {
          return e(o("WAWebBlocklistService").BlocklistService, function (e) {
            return e.updateBlocklistDbJob(n, r);
          });
        },
      };
    }
    l.blocklistServiceClient = e;
  },
  98,
);
