__d(
  "WAWebVoipCaptureCap",
  ["WAWebVoipMobileDevice"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = [
      { minParticipants: 3, cap: { width: 640, height: 480 } },
      { minParticipants: 9, cap: { width: 480, height: 360 } },
    ];
    function s(t) {
      if (!o("WAWebVoipMobileDevice").isVoipMobileDevice()) return null;
      var n = null;
      for (var r of e) t >= r.minParticipants && (n = r.cap);
      return n;
    }
    function u(e, t) {
      return t == null
        ? e
        : {
            width: Math.min(e.width, t.width),
            height: Math.min(e.height, t.height),
            maxFps: e.maxFps,
          };
    }
    ((l.getGroupCallCaptureCap = s), (l.applyCaptureCap = u));
  },
  98,
);
