__d(
  "WAWebBizAIIntegrationHubTypes",
  [],
  function (t, n, r, o, a, i) {
    var e = "GOOGLE_DRIVE",
      l = "GOOGLE_DRIVE_MEMBRANE",
      s = new Set([e, l]);
    function u(e) {
      var t = [],
        n = [];
      for (var r of e) r.is_connected ? t.push(r) : n.push(r);
      return { availableApps: n, connectedApps: t };
    }
    function c(e) {
      var t = null;
      for (var n of e) {
        var r = n.apixfnPlugin;
        if (!(r == null || !s.has(r))) {
          if (n.is_connected) return n;
          t == null && (t = n);
        }
      }
      return t;
    }
    ((i.GOOGLE_DRIVE_APIXFN_PLUGIN = e),
      (i.partitionPlugins = u),
      (i.findGoogleDrivePlugin = c));
  },
  66,
);
