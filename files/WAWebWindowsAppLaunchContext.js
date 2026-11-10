__d(
  "WAWebWindowsAppLaunchContext",
  ["WAWebStartupLaunchAttribution"],
  function (t, n, r, o, a, i, l) {
    var e =
      /^(off|skip|guard)\.(reused|added|failed)\.(lt25|lt50|lt100|lt250|lt1000|ge1000)$/;
    function s(t, n) {
      var r,
        a,
        i = new URLSearchParams(n),
        l = t,
        s = (r = i.get("launchContext")) != null ? r : "";
      s !== "" && (l = l == null ? s : l + "+launch:" + s);
      var u = (a = i.get("extensionsStartup")) != null ? a : "";
      if (e.test(u)) {
        var c = "ext:" + u;
        l = l == null ? c : l + "+" + c;
      }
      var d = o(
        "WAWebStartupLaunchAttribution",
      ).getLaunchAttributionAppContextPart(n);
      return (d != null && (l = l == null ? d : l + "+" + d), l);
    }
    l.getNativeLaunchAppContext = s;
  },
  98,
);
