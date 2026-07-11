__d(
  "WAWebVoipAvDriverInitQpl",
  ["$InternalEnum", "WAWebQplFlow", "qpl"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("qpl")._(891432214, "3399"),
      s = 12e4,
      u = n("$InternalEnum")({
        CAPTURE_DRIVER_INIT_START: "capture_driver_init_start",
        CAPTURE_DRIVER_INIT_END: "capture_driver_init_end",
        PLAYBACK_DRIVER_INIT_START: "playback_driver_init_start",
        PLAYBACK_DRIVER_INIT_END: "playback_driver_init_end",
      });
    function c() {
      return o("WAWebQplFlow").startQplFlow(e, { timeoutInMs: s });
    }
    function d(e, t) {
      e.addPoint(t);
    }
    function m(e) {
      e.endSuccess();
    }
    function p(e, t) {
      e.endFail(t);
    }
    ((l.VoipAvDriverInitQplPoint = u),
      (l.startVoipAvDriverInitQpl = c),
      (l.voipAvDriverInitQplAddPoint = d),
      (l.endVoipAvDriverInitQplSuccess = m),
      (l.endVoipAvDriverInitQplFail = p));
  },
  98,
);
