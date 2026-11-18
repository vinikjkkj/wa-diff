__d(
  "WAWebVoipStorageInit",
  [
    "WALogger",
    "WAWebIDBFSStorageBackend",
    "WAWebMLModelCacheManager",
    "WAWebMLModelPathProvider",
    "WAWebVoipPersistentFS",
    "getErrorSafe",
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
              var a = o("WAWebMLModelCacheManager").createMLModelCacheManager(
                n,
              );
              o("WAWebMLModelPathProvider").setCacheManager(a);
            } catch (e) {
              o("WALogger")
                .ERROR(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [IDBFS] Failed to set up ML model cache",
                    ])),
                )
                .catching(r("getErrorSafe")(e));
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
              .catching(r("getErrorSafe")(e));
          },
        );
    }
    l.initVoipStorageAndMLCache = c;
  },
  98,
);
