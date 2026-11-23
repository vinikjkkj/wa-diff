__d(
  "WAWebSNAPLUploadMusicConsumptionLogs",
  [
    "WAWebBuildConstants",
    "WAWebCreateFile",
    "WAWebMobilePlatforms",
    "WAWebNetworkStatus",
    "WAWebOHAIClient",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = new URL("https://acs.whatsapp.com/music/reporting"),
      s = (656096963291760).toString(),
      u = (0x97e965c4439a).toString(),
      c = "WhatsAppMusicConsumptionReporting";
    async function d(t, n) {
      await r("WAWebNetworkStatus").waitIfOffline();
      var a = m(t),
        i = new Headers();
      i.append("X-FB-Friendly-Name", c);
      var l = await o("WAWebOHAIClient").fetchOHAI({
        url: e,
        project: n,
        payload: a,
        headers: i,
      });
      return l;
    }
    function m(e) {
      var t = new FormData(),
        n = o("WAWebMobilePlatforms").isSMB() ? s : u;
      return (
        t.append("app_id", n),
        t.append("app_version", o("WAWebBuildConstants").VERSION_STR),
        t.append(
          "events",
          o("WAWebCreateFile").createFile([p(e)], "snapl.txt"),
        ),
        t
      );
    }
    function p(e) {
      return e.map(function (e) {
        return JSON.stringify(e);
      }).join(`
`);
    }
    l.uploadMusicConsumptionLogs = d;
  },
  98,
);
