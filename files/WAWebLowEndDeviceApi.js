__d(
  "WAWebLowEndDeviceApi",
  ["WAWebABProps", "WAWebBrowserApi", "WAWebCurrentUser"],
  function (t, n, r, o, a, i, l) {
    var e = new Map(),
      s = new Map();
    function u() {
      var t = o("WAWebABProps").getABPropConfigValue(
        "web_low_end_device_level",
      );
      if (e.has(t)) {
        var n;
        return (n = e.get(t)) != null ? n : !1;
      }
      var r = d(t);
      return (e.set(t, r), r);
    }
    function c() {
      var e = o("WAWebABProps").getABPropConfigValue(
        "web_low_end_device_level",
      );
      if (s.has(e)) {
        var t;
        return (t = s.get(e)) != null ? t : !1;
      }
      var n = d(e);
      return (
        n &&
          !o("WAWebCurrentUser").isEmployee() &&
          Math.random() < 0.1 &&
          (n = !1),
        s.set(e, n),
        n
      );
    }
    function d(e) {
      var t = o("WAWebBrowserApi").getMemClass(),
        n = o("WAWebBrowserApi").getNumCpu(),
        r = n != null && n <= 2,
        a = n != null && n <= 4,
        i = t != null && t <= 4e3,
        l = t != null && t < 4e3;
      return e === 1
        ? r || (l && a)
        : e === 2
          ? r || (i && a)
          : e === 3
            ? a || i
            : !1;
    }
    ((l.isLowEndDeviceCache = e),
      (l.shouldReduceLogsCache = s),
      (l.isLowEndDevice = u),
      (l.shouldReduceLogsForLowEndDevice = c));
  },
  98,
);
