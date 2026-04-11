__d(
  "WAWebVoipStorageInit",
  [
    "WALogger",
    "WAWebBweModelPathProvider",
    "WAWebIDBFSStorageBackend",
    "WAWebMLModelCacheManager",
    "WAWebVoipPersistentFS",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e, s, u;
    function c(t) {
      o("WAWebVoipPersistentFS")
        .initPersistentFS(t)
        .then(
          function () {
            o("WALogger").LOG(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [IDBFS] Initialized persistent FS",
                ])),
            );
            try {
              var n = o("WAWebIDBFSStorageBackend").createIDBFSStorageBackend();
              n.initialize(t);
              var r = o("WAWebMLModelCacheManager").createMLModelCacheManager(
                n,
              );
              o("WAWebBweModelPathProvider").setCacheManager(r);
            } catch (e) {
              o("WALogger")
                .ERROR(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [IDBFS] Failed to set up ML model cache",
                    ])),
                )
                .catching(e);
            }
          },
          function (e) {
            return o("WALogger")
              .ERROR(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [IDBFS] Failed to initialize persistent FS",
                  ])),
              )
              .catching(e);
          },
        );
    }
    l.initVoipStorageAndMLCache = c;
  },
  98,
);
