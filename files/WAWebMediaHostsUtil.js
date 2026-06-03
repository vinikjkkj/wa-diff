__d(
  "WAWebMediaHostsUtil",
  ["WAMemoizeCache", "WAWebMediaHosts", "asyncToGeneratorRuntime"],
  function (t, n, r, o, a, i, l) {
    var e = "https://static.whatsapp.net",
      s = o("WAMemoizeCache").memoizeWithArgs(
        n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var t = yield o("WAWebMediaHosts").mediaHosts.getHostsInfoByBucket({
              preferredBuckets: [1],
            }),
            n = t.selectedHost;
          return n != null ? "https://" + n.hostname : e;
        }),
        function () {
          return "";
        },
      );
    l.getStaticMediaHostName = s;
  },
  98,
);
