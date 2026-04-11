__d(
  "WAWebSNAPLUploadMusicConsumptionLogs",
  [
    "WAWebACSTokenConfig",
    "WAWebBuildConstants",
    "WAWebFileUtils",
    "WAWebMobilePlatforms",
    "WAWebNetworkStatus",
    "WAWebOHAIClient",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = new URL("https://acs.whatsapp.com/music/reporting"),
      s = (656096963291760).toString(),
      u = (0x97e965c4439a).toString();
    function c(e) {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          yield r("WAWebNetworkStatus").waitIfOffline();
          var n = m(t),
            a = yield o("WAWebOHAIClient").fetchOHAI({
              url: e,
              project: o("WAWebACSTokenConfig").ACS_PROJECTS
                .WA_StatusMusicReporting,
              payload: n,
            });
          return a;
        })),
        d.apply(this, arguments)
      );
    }
    function m(e) {
      var t = new FormData(),
        n = o("WAWebMobilePlatforms").isSMB() ? s : u;
      return (
        t.append("app_id", n),
        t.append("app_version", o("WAWebBuildConstants").VERSION_STR),
        t.append("events", o("WAWebFileUtils").createFile([p(e)], "snapl.txt")),
        t
      );
    }
    function p(e) {
      return e
        .map(function (e) {
          return JSON.stringify(e);
        })
        .join("\n");
    }
    l.uploadMusicConsumptionLogs = c;
  },
  98,
);
