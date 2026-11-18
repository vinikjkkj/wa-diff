__d(
  "WAWebPathfinderLifecycle",
  ["WAWebPathfinderHeldBackSurface"],
  function (t, n, r, o, a, i, l) {
    var e = null,
      s = 1 / 0,
      u = -1 / 0,
      c = !0,
      d = !1,
      m = 200,
      p = 5e3;
    function _() {
      return (
        e != null &&
          e !== o("WAWebPathfinderHeldBackSurface").getScreenUnlockCount() &&
          ((s = self.performance.now()), (u = s + p), (c = !1), (d = !0)),
        function () {
          (c && (d = !1),
            (e = o("WAWebPathfinderHeldBackSurface").getScreenUnlockCount()));
        }
      );
    }
    function f() {
      var e = window.setTimeout(function () {
        ((u = Math.min(u, self.performance.now() + m)), (c = !0));
      }, 0);
      return function () {
        return window.clearTimeout(e);
      };
    }
    function g(e) {
      return e.navigatedAtPerfMs < s
        ? !1
        : e.realSourceId < 0 && d
          ? ((d = !1), e.navigatedAtPerfMs <= s + p)
          : e.navigatedAtPerfMs <= u;
    }
    ((l.attachPathfinderLifecycleOwner = _),
      (l.stampRemountEnd = f),
      (l.isUnlockRemountRow = g));
  },
  98,
);
