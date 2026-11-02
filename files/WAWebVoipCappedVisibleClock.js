__d(
  "WAWebVoipCappedVisibleClock",
  [],
  function (t, n, r, o, a, i) {
    var e = 5e3,
      l = 1e4;
    function s(t, n) {
      var r = 0,
        o = Date.now(),
        a = self.setInterval(function () {
          var e = Date.now(),
            i = e - o;
          ((o = e),
            !(i < 0 || i > l || !u()) &&
              ((r += i), r >= t && (self.clearInterval(a), n())));
        }, e);
      return {
        cancel: function () {
          return self.clearInterval(a);
        },
        getVisibleMs: function () {
          return r;
        },
      };
    }
    function u() {
      return document.visibilityState === "visible";
    }
    i.startCappedVisibleTimer = s;
  },
  66,
);
