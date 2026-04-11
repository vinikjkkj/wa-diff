__d(
  "WebBloksHasteAnimationFrameRateAnalytics",
  ["Promise", "QuickPerformanceLogger", "WebBloksErrors", "qpl"],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = 60,
      c = [30, 48, u, 120, 240, 300],
      d = "sfd",
      m = "lfd",
      p = "animation_key",
      _ = "bloks_logging_id",
      f = "ts",
      g = r("qpl")._(36713009, "1890"),
      h = 0,
      y = (function () {
        function t() {
          ((this.$1 = null), (this.$2 = null), this.$3());
        }
        var a = t.prototype;
        return (
          (a.$3 = function () {
            var e = this;
            try {
              this.$4().then(function (t) {
                e.$1 = t;
              });
            } catch (e) {
              throw new (o("WebBloksErrors").WebBloksError)(
                "Failed to initialize WebBloksHasteAnimationFrameRateAnalytics",
              );
            }
          }),
          (a.$5 = function (t) {
            return c.reduce(function (e, n) {
              return Math.abs(n - t) < Math.abs(e - t) ? n : e;
            });
          }),
          (a.$4 = function () {
            var e = this;
            return new (s || (s = n("Promise")))(function (t) {
              window.requestAnimationFrame(function (n) {
                window.requestAnimationFrame(function (r) {
                  return t(n < r ? e.$5(1e3 / (r - n)) : u);
                });
              });
            });
          }),
          (a.reset = function () {
            this.$2 = null;
          }),
          (a.resume = function (t) {
            this.$2 = t;
          }),
          (a.incrementDroppedFrames = function (n, o, a) {
            var t = this.$1,
              i = this.$2;
            if (t !== null && i !== null && o > i) {
              var l = o - i,
                s = 1e3 / t,
                u = Math.max(Math.round(l / s) - 1, 0),
                c = u >= 4 ? u / 4 : 0,
                p = n != null ? this.$6(n) : h,
                _ = (e || (e = r("QuickPerformanceLogger"))).getMarker(g, p);
              if (_ != null) {
                var y,
                  C,
                  b,
                  v,
                  S,
                  R = (y = _.annotations) == null ? void 0 : y.int,
                  L = ((C = R == null ? void 0 : R[d]) != null ? C : 0) + u,
                  E = ((b = R == null ? void 0 : R[m]) != null ? b : 0) + c;
                (e || (e = r("QuickPerformanceLogger"))).markerAnnotate(
                  g,
                  {
                    int: ((v = {}), (v[d] = L), (v[f] = a), v),
                    double: ((S = {}), (S[m] = E), S),
                  },
                  { instanceKey: p },
                );
              }
            }
            this.$2 = o;
          }),
          (a.onStart = function (n, o) {
            var t;
            this.$2 = null;
            var a = n != null ? this.$6(n) : h;
            ((e || (e = r("QuickPerformanceLogger"))).markerStart(g, a),
              e.markerAnnotate(
                g,
                { string: ((t = {}), (t[p] = n), (t[_] = o), t) },
                { instanceKey: a },
              ));
          }),
          (a.onEnd = function (n) {
            var t = n != null ? this.$6(n) : h;
            (e || (e = r("QuickPerformanceLogger"))).markerEnd(g, 2, t);
          }),
          (a.$6 = function (t) {
            for (var e = 0, n = 0; n < t.length; n++) {
              var r = t.charCodeAt(n);
              ((e = (e << 5) - e + r), (e &= e));
            }
            return Math.abs(e);
          }),
          t
        );
      })();
    l.default = y;
  },
  98,
);
