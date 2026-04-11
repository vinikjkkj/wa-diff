__d(
  "WAWebRenderCursorGetWindowHeight",
  ["WAWebDebounce"],
  function (t, n, r, o, a, i, l) {
    var e = window.innerHeight,
      s = r("WAWebDebounce")(function (t) {
        e = window.innerHeight;
      }, 500);
    window.addEventListener("resize", s);
    function u() {
      return e;
    }
    l.default = u;
  },
  98,
);
