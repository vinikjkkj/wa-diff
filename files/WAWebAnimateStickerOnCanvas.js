__d(
  "WAWebAnimateStickerOnCanvas",
  ["Promise", "WAAbortError", "WAWebNoop"],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(t) {
      var a = t.animationFrames,
        i = t.onFrameChange,
        l = t.shouldStop,
        s = t.signal;
      if (s.aborted)
        return (e || (e = n("Promise"))).reject(
          new (o("WAAbortError").AbortError)(),
        );
      if (a.length === 0) return (e || (e = n("Promise"))).resolve();
      var u = new Date().getTime(),
        c,
        d = 0,
        m = u,
        p = r("WAWebNoop");
      return new (e || (e = n("Promise")))(function (e, t) {
        var n = function () {
          (c != null && window.cancelAnimationFrame(c),
            t(new (o("WAAbortError").AbortError)()));
        };
        (s.addEventListener("abort", n),
          (p = function () {
            s.removeEventListener("abort", n);
          }));
        var r = function (n) {
          var t = new Date().getTime();
          if (t < m) {
            c = window.requestAnimationFrame(r);
            return;
          }
          var o = a[d],
            s = o.duration,
            u = o.rgbaBuffer;
          if ((i(u), (d = (d + 1) % a.length), (m = t + s), d === 1 && l())) {
            e();
            return;
          }
          c = window.requestAnimationFrame(r);
        };
        c = window.requestAnimationFrame(r);
      }).finally(function () {
        p();
      });
    }
    l.default = s;
  },
  98,
);
