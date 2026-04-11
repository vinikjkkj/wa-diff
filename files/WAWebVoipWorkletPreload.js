__d(
  "WAWebVoipWorkletPreload",
  ["WALogger"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(t, n, r) {
      var a = n(),
        i = new Blob([a], { type: "application/javascript" }),
        l = URL.createObjectURL(i);
      return t.audioWorklet
        .addModule(l)
        .then(function () {
          return !0;
        })
        .catch(function (t) {
          return (
            o("WALogger").ERROR(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: ",
                  " worklet preload failed, will load normally: ",
                  "",
                ])),
              r,
              t,
            ),
            !1
          );
        })
        .finally(function () {
          URL.revokeObjectURL(l);
        });
    }
    l.preloadWorkletProcessorModule = s;
  },
  98,
);
