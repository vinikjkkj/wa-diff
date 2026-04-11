__d(
  "WAWebMediaHostsUtil",
  ["WAWebMediaHosts", "asyncToGeneratorRuntime", "lodash"],
  function (t, n, r, o, a, i, l) {
    var e = "https://static.whatsapp.net",
      s = r("lodash").memoize(
        n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var t = yield o("WAWebMediaHosts").mediaHosts.getHostsInfoByBucket({
              preferredBuckets: [1],
            }),
            n = t.selectedHost;
          return n != null ? "https://" + n.hostname : e;
        }),
      );
    l.getStaticMediaHostName = s;
  },
  98,
);
