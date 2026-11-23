__d(
  "WAPrewarmMediaValidate",
  [
    "WAGetKaleidoscopeWasm",
    "WALogger",
    "WAPreloadWamediaUtilsWasm",
    "WAPreloadWebpCheckWasm",
    "getErrorSafe",
    "gkx",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e, s;
    function u(t) {
      if (r("gkx")("3272")) {
        o("WAGetKaleidoscopeWasm")
          .getKaleidoscopeWasm()
          .catch(function (t) {
            var n = r("getErrorSafe")(t);
            o("WALogger").WARN(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "prewarm Kaleidoscop wasm failed with error: ",
                  "",
                ])),
              n.message,
            );
          });
        return;
      }
      if (t == null) {
        o("WALogger").WARN(
          s ||
            (s = babelHelpers.taggedTemplateLiteralLoose([
              "prewarmMediaValidate: serverMediaType is null",
            ])),
        );
        return;
      }
      ((t === "sticker" || t === "image") &&
        o("WAPreloadWebpCheckWasm").preloadWebpCheckWasm(),
        (t === "video" || t === "audio") &&
          o("WAPreloadWamediaUtilsWasm").preloadWamediaUtilsWasm());
    }
    l.prewarmMediaValidate = u;
  },
  98,
);
