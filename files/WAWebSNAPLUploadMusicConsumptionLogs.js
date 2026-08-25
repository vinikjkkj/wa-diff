__d(
  "WAWebSNAPLUploadMusicConsumptionLogs",
  [
    "WAWebACSTokenConfig",
    "WAWebBuildConstants",
    "WAWebCreateFile",
    "WAWebMobilePlatforms",
    "WAWebNetworkStatus",
    "WAWebOHAIClient",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = new URL("https://acs.whatsapp.com/music/reporting"),
      s = (656096963291760).toString(),
      u = (0x97e965c4439a).toString(),
      c = "WhatsAppMusicConsumptionReporting";
    function d(e) {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          yield r("WAWebNetworkStatus").waitIfOffline();
          var n = p(t),
            a = new Headers();
          a.append("X-FB-Friendly-Name", c);
          var i = yield o("WAWebOHAIClient").fetchOHAI({
            url: e,
            project: o("WAWebACSTokenConfig").ACS_PROJECTS
              .WA_StatusMusicReporting,
            payload: n,
            headers: a,
          });
          return i;
        })),
        m.apply(this, arguments)
      );
    }
    function p(e) {
      var t = new FormData(),
        n = o("WAWebMobilePlatforms").isSMB() ? s : u;
      return (
        t.append("app_id", n),
        t.append("app_version", o("WAWebBuildConstants").VERSION_STR),
        t.append(
          "events",
          o("WAWebCreateFile").createFile([_(e)], "snapl.txt"),
        ),
        t
      );
    }
    function _(e) {
      return e
        .map(function (e) {
          return JSON.stringify(e);
        })
        .join("\n");
    }
    l.uploadMusicConsumptionLogs = d;
  },
  98,
);
