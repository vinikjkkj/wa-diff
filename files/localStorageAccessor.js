__d(
  "localStorageAccessor",
  ["FBLogger", "WebStorage", "gpsTopicsConstants", "vulture"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = function () {
        try {
          var t = (e || (e = r("WebStorage"))).getLocalStorage();
          if (t == null) return !1;
        } catch (e) {
          var n =
              e instanceof Error &&
              Object.prototype.hasOwnProperty.call(e, "message")
                ? e.message
                : "Unknown",
            o =
              r("gpsTopicsConstants").MESSAGE_PREFIX +
              " isLocalItemSupported issue: " +
              n;
          return (
            r("FBLogger")(
              r("gpsTopicsConstants").LOGGING_PROJECT_NAME,
              r("gpsTopicsConstants").LOGGING_EVENT_NAME,
            ).warn(o),
            !1
          );
        }
        return !0;
      },
      u = function (n, o) {
        if (s()) {
          var t = (e || (e = r("WebStorage"))).getLocalStorage();
          e.setItemGuarded(t, n, o.toString());
        }
      },
      c = function (n) {
        if ((r("vulture")("ngH3BO6KBtJUIiffECcVl_KwTbE="), !s())) return null;
        var t = (e || (e = r("WebStorage"))).getLocalStorage();
        if (t == null) return null;
        var o = t.getItem(n);
        if (o == null) return null;
        var a = Number(o);
        return a;
      };
    ((l.isLocalItemSupported = s), (l.getLocalItem = c), (l.setLocalItem = u));
  },
  98,
);
