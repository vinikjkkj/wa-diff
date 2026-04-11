__d(
  "VideoPlayerOzPlayerModuleLoaderDeferredForDisplay",
  ["requireDeferredForDisplay"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("requireDeferredForDisplay")("oz-player").__setRef(
      "VideoPlayerOzPlayerModuleLoaderDeferredForDisplay",
    );
    function s() {
      return {
        getModuleIfRequireable: function () {
          return e.getModuleIfRequireable() || null;
        },
        load: function () {
          return e.load();
        },
      };
    }
    l.default = s;
  },
  98,
);
