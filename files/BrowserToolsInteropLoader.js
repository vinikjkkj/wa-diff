__d(
  "BrowserToolsInteropLoader",
  ["BrowserTools", "BrowserToolsMetaInterop", "JSScheduler"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = o("BrowserTools").getInstance();
    function u(t, n, a) {
      var i = Array.from(new Set(t.filter(Boolean))),
        l = i.map(function (e) {
          return e.namespace;
        });
      o("BrowserToolsMetaInterop").init(s, n, a, l);
      for (
        var u = function () {
            var t = i[c];
            t &&
              (e || (e = r("JSScheduler"))).scheduleLoggingPriCallback(
                function () {
                  s.connectOrFail(
                    {
                      namespace: t.namespace,
                      connectFromIFrame: a != null ? a : !1,
                    },
                    t.onConnection,
                  );
                },
              );
          },
          c = 0;
        c < i.length;
        c++
      )
        u();
    }
    l.loadModules = u;
  },
  98,
);
