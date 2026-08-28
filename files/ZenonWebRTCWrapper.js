__d(
  "ZenonWebRTCWrapper",
  ["invariant", "asyncToGeneratorRuntime", "cr:1284813", "performanceNow"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e;
    function u(e) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var o = navigator,
            a = o.mediaDevices;
          a != null || s(0, 14422);
          var i = (e || (e = r("performanceNow")))(),
            l = yield a.getUserMedia(t);
          return (
            n("cr:1284813") &&
              n("cr:1284813").measureModern("getUserMedia", {
                end: (e || (e = r("performanceNow")))(),
                start: i,
              }),
            l
          );
        })),
        c.apply(this, arguments)
      );
    }
    l.getUserMedia = u;
  },
  98,
);
