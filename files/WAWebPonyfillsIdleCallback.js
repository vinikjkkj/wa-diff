__d(
  "WAWebPonyfillsIdleCallback",
  [],
  function (t, n, r, o, a, i) {
    function e(e) {
      var t = self.setTimeout(function () {
        var t = Date.now();
        e({
          didTimeout: !1,
          timeRemaining: function () {
            return Math.max(0, 50 - (Date.now() - t));
          },
        });
      }, 1);
      return t;
    }
    function l(e) {
      self.clearTimeout(e);
    }
    var s = window.requestIdleCallback,
      u = window.cancelIdleCallback,
      c = "requestIdleCallback" in window ? s.bind(window) : e.bind(window),
      d = "cancelIdleCallback" in window ? u.bind(window) : l.bind(window);
    ((i.requestIdleCallback = c), (i.cancelIdleCallback = d));
  },
  66,
);
