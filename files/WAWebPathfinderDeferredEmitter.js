__d(
  "WAWebPathfinderDeferredEmitter",
  ["Promise", "WALogger", "WAWebODS", "getErrorSafe"],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c = 20,
      d = "web.pathfinder.deferred_row_drop",
      m = 3e4,
      p = "timed out",
      _ = 6e4,
      f = 6e5;
    function g(t, a, i, l) {
      l === void 0 && (l = c);
      var d = [],
        g = !1,
        C = 0,
        b = 0,
        v = !1,
        S = 0,
        R = _,
        L = new Set();
      function E(t, n) {
        if (!(!g || t !== C)) {
          g = !1;
          var a = d.length;
          ((d = []),
            (b += a),
            I(),
            (S = self.performance.now() + R),
            (R = Math.min(R * 2, f)));
          var l = n === p ? "timeout" : "load";
          L.has(l) ||
            (L.add(l),
            o("WALogger")
              .WARN(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[pathfinder] emitter not loaded (",
                    "): ",
                    " rows dropped",
                  ])),
                l,
                a,
              )
              .catching(r("getErrorSafe")(n))
              .sendLogs(i));
        }
      }
      function k() {
        g = !0;
        var e = ++C;
        try {
          var r = self.setTimeout(function () {
            E(e, p);
          }, m);
          (u || (u = n("Promise")))
            .resolve()
            .then(function () {
              return t.load();
            })
            .then(
              function (t) {
                (self.clearTimeout(r), e === C && (g = !1), (R = _), (S = 0));
                var n = d;
                d = [];
                for (var o of n) a(t, o);
                I();
              },
              function (t) {
                (self.clearTimeout(r), E(e, t));
              },
            );
        } catch (t) {
          E(e, t);
        }
      }
      function I() {
        if (b !== 0) {
          var e = b;
          ((b = 0), h(e));
        }
      }
      function T() {
        if ((b++, !v)) {
          v = !0;
          try {
            self.addEventListener("pagehide", I);
          } catch (e) {
            o("WALogger")
              .WARN(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "[pathfinder] dropped rows not reported on page close",
                  ])),
              )
              .catching(r("getErrorSafe")(e));
          }
        }
      }
      return function (e) {
        var n = y(t);
        if (n != null) {
          a(n, e);
          return;
        }
        if (d.length >= l) {
          T();
          return;
        }
        if (!g && S > 0 && self.performance.now() < S) {
          T();
          return;
        }
        (d.push(e), g || k());
      };
    }
    function h(e) {
      try {
        r("WAWebODS").incr("web.pathfinder.deferred_row_drop", e);
      } catch (e) {}
    }
    function y(e) {
      try {
        return e.getModuleIfRequireable();
      } catch (e) {
        return null;
      }
    }
    ((l.PATHFINDER_DEFERRED_ROW_DROP_ODS_KEY = d),
      (l.createPathfinderDeferredEmitter = g));
  },
  98,
);
