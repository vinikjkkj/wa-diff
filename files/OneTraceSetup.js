__d(
  "OneTraceSetup",
  [
    "CPUPressure",
    "INPLogger",
    "ImagePerfLoggerV2",
    "LongAnimationFrameObserver",
    "LongtaskObserver",
    "ResponsivenessTracker",
    "ScrollPerfTracker",
    "TypingPerfTracker",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = null;
    function s() {
      return e;
    }
    function u(t) {
      e == null &&
        ((e = Object.freeze(t)),
        (e.Longtask.enableTracking ||
          e.Scroll.enableTracking ||
          e.Responsiveness.enableTracking) &&
          o("LongtaskObserver").init(),
        e.INP.enableTracking && o("INPLogger").init(e),
        e.LoAF.enableTracking && o("LongAnimationFrameObserver").init(),
        e.Scroll.enableTracking && o("ScrollPerfTracker").init(e),
        e.Responsiveness.enableTracking && o("ResponsivenessTracker").init(e),
        e.Typing.enableTracking && o("TypingPerfTracker").init(),
        e.Image.enableTracking && o("ImagePerfLoggerV2").init(),
        e.enableCPUPressureTracking === !0 && o("CPUPressure").init());
    }
    ((l.getConfig = s), (l.setup = u));
  },
  98,
);
