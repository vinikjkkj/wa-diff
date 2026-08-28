__d(
  "ZenonLogPromiseRejection",
  ["FBLogger", "gkx"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      return (
        t === void 0 && (t = !1),
        e.catch(function (e) {
          if (
            (r("FBLogger")("rtc_www").catching(e).debug(e.message),
            t && r("gkx")("1083"))
          )
            throw e;
        })
      );
    }
    l.default = e;
  },
  98,
);
