__d(
  "WAWebVoipScreenShareSurfaceState",
  ["WAWebTypedEventEmitter"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = new (r("WAWebTypedEventEmitter"))(),
      s = null;
    function u(t) {
      var n =
        t === "monitor"
          ? "monitor"
          : t === "window"
            ? "window"
            : t === "browser"
              ? "browser"
              : null;
      s !== n && ((s = n), e.trigger("change"));
    }
    function c() {
      return s;
    }
    ((l.WAWebVoipScreenShareSurfaceEventEmitter = e),
      (l.setSelfScreenShareSurface = u),
      (l.getSelfScreenShareSurface = c));
  },
  98,
);
