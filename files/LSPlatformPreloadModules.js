__d(
  "LSPlatformPreloadModules",
  ["JSResource", "JSResourceForInteraction", "emptyFunction"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = (e = r("JSResourceForInteraction"))("GetLsDatabase").__setRef(
        "LSPlatformPreloadModules",
      ),
      u = e("LSDatascriptEvaluator").__setRef("LSPlatformPreloadModules"),
      c = e("LSDedicatedMqttChannel").__setRef("LSPlatformPreloadModules"),
      d = e("LSPlatformClient").__setRef("LSPlatformPreloadModules"),
      m = e("LSPlatformDGWTransport").__setRef("LSPlatformPreloadModules"),
      p = e("LSPlatformMqttRealtimeTransport").__setRef(
        "LSPlatformPreloadModules",
      ),
      _ = e("LSPlatformSyncSystem").__setRef("LSPlatformPreloadModules");
    function f() {
      r("JSResource").loadAll([s, u, c, d, m, p, _], r("emptyFunction"));
    }
    l.preload = f;
  },
  98,
);
