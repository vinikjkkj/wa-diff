__d(
  "shouldReportTopicsOnSchedule",
  ["FBLogger", "gpsTopicsConstants", "justknobx", "localStorageAccessor"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = "topicsLastReportingTime",
      s = 36e5;
    function u() {
      var t = r("justknobx")._("4782"),
        n = o("localStorageAccessor").isLocalItemSupported();
      if (t) {
        var a =
          r("gpsTopicsConstants").MESSAGE_PREFIX +
          " on-schedule reporting support status: " +
          String(n) +
          ", for reporting agent: " +
          navigator.userAgent;
        r("FBLogger")(
          r("gpsTopicsConstants").LOGGING_PROJECT_NAME,
          r("gpsTopicsConstants").LOGGING_EVENT_NAME,
        ).debug(a);
      }
      if (!n) return !1;
      var i = !1;
      try {
        var l = o("localStorageAccessor").getLocalItem(e);
        if (l == null)
          return (o("localStorageAccessor").setLocalItem(e, Date.now()), !0);
        var u = Number(l),
          c = Date.now(),
          d = Number(c),
          m = r("justknobx")._("4792");
        ((i = d - u >= m * s),
          i && o("localStorageAccessor").setLocalItem(e, Date.now()));
      } catch (e) {
        var p =
            e instanceof Error &&
            Object.prototype.hasOwnProperty.call(e, "message")
              ? e.message
              : "Unknown",
          _ =
            r("gpsTopicsConstants").MESSAGE_PREFIX +
            " shouldReportTopicsOnSchedule issue: " +
            p;
        (r("FBLogger")(
          r("gpsTopicsConstants").LOGGING_PROJECT_NAME,
          r("gpsTopicsConstants").LOGGING_EVENT_NAME,
        ).warn(_),
          (i = !1));
      }
      return i;
    }
    l.default = u;
  },
  98,
);
