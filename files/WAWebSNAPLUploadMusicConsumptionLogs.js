__d(
  "WAWebSNAPLUploadMusicConsumptionLogs",
  [
    "WAWebACSTokenConfig",
    "WAWebBuildConstants",
    "WAWebFileUtils",
    "WAWebMobilePlatforms",
    "WAWebNetworkStatus",
    "WAWebOHAIClient",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = new URL("https://acs.whatsapp.com/music/reporting"),
      s = (656096963291760).toString(),
      u = (0x97e965c4439a).toString();
    async function c(t) {
      await r("WAWebNetworkStatus").waitIfOffline();
      var n = d(t),
        a = await o("WAWebOHAIClient").fetchOHAI({
          url: e,
          project: o("WAWebACSTokenConfig").ACS_PROJECTS
            .WA_StatusMusicReporting,
          payload: n,
        });
      return a;
    }
    function d(e) {
      var t = new FormData(),
        n = o("WAWebMobilePlatforms").isSMB() ? s : u;
      return (
        t.append("app_id", n),
        t.append("app_version", o("WAWebBuildConstants").VERSION_STR),
        t.append("events", o("WAWebFileUtils").createFile([m(e)], "snapl.txt")),
        t
      );
    }
    function m(e) {
      return e.map(function (e) {
        return JSON.stringify(e);
      }).join(`
`);
    }
    l.uploadMusicConsumptionLogs = c;
  },
  98,
);
