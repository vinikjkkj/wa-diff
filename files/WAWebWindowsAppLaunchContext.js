__d(
  "WAWebWindowsAppLaunchContext",
  [],
  function (t, n, r, o, a, i) {
    var e =
      /^(off|skip|guard)\.(reused|added|failed)\.(lt25|lt50|lt100|lt250|lt1000|ge1000)$/;
    function l(t, n) {
      var r,
        o,
        a = new URLSearchParams(n),
        i = t,
        l = (r = a.get("launchContext")) != null ? r : "";
      l !== "" && (i = i == null ? l : i + "+launch:" + l);
      var s = (o = a.get("extensionsStartup")) != null ? o : "";
      if (e.test(s)) {
        var u = "ext:" + s;
        i = i == null ? u : i + "+" + u;
      }
      return i;
    }
    i.getNativeLaunchAppContext = l;
  },
  66,
);
