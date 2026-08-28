__d(
  "VultureJSDeadSelector",
  ["FBLogger", "adsCreateSelector"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      return r("adsCreateSelector")(
        [],
        function () {
          throw r("FBLogger")("vulture_js")
            .blameToPreviousDirectory()
            .mustfixThrow(
              "Vulture dead code is hit for dead selector %s in module %s",
              t,
              e,
            );
        },
        { name: i.id },
      );
    }
    l.default = e;
  },
  98,
);
