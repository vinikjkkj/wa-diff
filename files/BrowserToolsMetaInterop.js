__d(
  "BrowserToolsMetaInterop",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e, t, n, r) {
      e.connectOrFail(
        { namespace: "_meta", connectFromIFrame: n != null ? n : !1 },
        function (e) {
          e.onMessage(function (n, o) {
            switch (n) {
              case "init":
                e.postMessage("info", {
                  interops: r,
                  location: window.location.toString(),
                  surface: t,
                });
            }
          });
        },
      );
    }
    i.init = e;
  },
  66,
);
