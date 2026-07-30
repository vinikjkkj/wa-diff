__d(
  "WAWebBizAIIntegrationHubTypes",
  [],
  function (t, n, r, o, a, i) {
    function e(e) {
      var t = [],
        n = [];
      for (var r of e) r.is_connected ? t.push(r) : n.push(r);
      return { availableApps: n, connectedApps: t };
    }
    i.partitionPlugins = e;
  },
  66,
);
