__d(
  "WAWebMediaHostsUtil",
  ["WAMemoizeCache", "WAWebMediaHosts"],
  function (t, n, r, o, a, i, l) {
    var e = "https://static.whatsapp.net",
      s = o("WAMemoizeCache").memoizeWithArgs(
        async function () {
          var t = await o("WAWebMediaHosts").mediaHosts.getHostsInfoByBucket({
              preferredBuckets: [1],
            }),
            n = t.selectedHost;
          return n != null ? "https://" + n.hostname : e;
        },
        function () {
          return "";
        },
      );
    l.getStaticMediaHostName = s;
  },
  98,
);
