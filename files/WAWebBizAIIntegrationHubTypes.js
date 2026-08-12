__d(
  "WAWebBizAIIntegrationHubTypes",
  [],
  function (t, n, r, o, a, i) {
    var e = new Set(["GOOGLE_DRIVE", "GOOGLE_DRIVE_MEMBRANE"]);
    function l(e) {
      var t = [],
        n = [];
      for (var r of e) r.is_connected ? t.push(r) : n.push(r);
      return { availableApps: n, connectedApps: t };
    }
    function s(t) {
      var n = null;
      for (var r of t) {
        var o = r.apixfnPlugin;
        if (!(o == null || !e.has(o))) {
          if (r.is_connected) return r;
          n == null && (n = r);
        }
      }
      return n;
    }
    ((i.partitionPlugins = l), (i.findGoogleDrivePlugin = s));
  },
  66,
);
