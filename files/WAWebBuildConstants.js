__d(
  "WAWebBuildConstants",
  ["SiteData", "WALogger", "WAWebEnvironment", "gkx", "justknobx"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = r("gkx")("26258") || r("gkx")("26259"),
      u = s ? "2" : "3",
      c = s ? "3000" : "0",
      d = s ? "" + r("SiteData").client_revision : "0",
      m = u + "." + c + "." + d,
      p = y(),
      _ = C(),
      f = function () {
        return p;
      },
      g = function () {
        var t = p;
        if (t == null || t.length !== 6 || !/^\d{6}$/.test(t))
          return (
            o("WALogger")
              .LOG(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "getWindowsVersion: invalid version string",
                  ])),
              )
              .sendLogs("invalid-windows-version"),
            null
          );
        var n = parseInt(t, 10);
        return Number.isNaN(n) ? null : n;
      },
      h = p == null ? m : m + "." + p;
    function y() {
      if (r("WAWebEnvironment").isWindows) {
        var e,
          t = new URLSearchParams((e = self.location.search) != null ? e : "");
        return t.get("windowsBuild");
      }
      return null;
    }
    function C() {
      return b(self.location.href);
    }
    function b(e) {
      if (!r("justknobx")._("5257")) return !1;
      var t = new URLSearchParams(e != null ? e : "");
      return (
        r("WAWebEnvironment").isWindows && t.get("windows_offline") === "1"
      );
    }
    var v = "";
    r("gkx")("26258") || (r("gkx")("26259") ? (v = ".i") : (v = ".d"));
    var S = h + v,
      R = self.location.origin + "/",
      L = "/",
      E = self.location.origin + "/";
    ((l.VERSION_PRIMARY = u),
      (l.VERSION_SECONDARY = c),
      (l.VERSION_TERTIARY = d),
      (l.VERSION_BASE = m),
      (l.WINDOWS_BUILD = p),
      (l.WINDOWS_OFFLINE = _),
      (l.getWindowsBuild = f),
      (l.getWindowsVersion = g),
      (l.VERSION_BASE_WITH_WINDOWS_BUILD = h),
      (l.PUSH_PHASE = r("SiteData").push_phase),
      (l.isWindowsOfflineUrl = b),
      (l.VERSION_STR = S),
      (l.DYN_ORIGIN = R),
      (l.WEB_PUBLIC_PATH = L),
      (l.BUILD_URL = E));
  },
  98,
);
