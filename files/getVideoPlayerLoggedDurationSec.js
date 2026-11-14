__d(
  "getVideoPlayerLoggedDurationSec",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e, t, n) {
      return t == null ||
        Number.isFinite(t) ||
        (e !== "comet_nextgendash" && e !== "comet_nextgendash_wasm")
        ? t
        : n != null && Number.isFinite(n)
          ? n
          : void 0;
    }
    i.default = e;
  },
  66,
);
