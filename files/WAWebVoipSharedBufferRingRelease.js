__d(
  "WAWebVoipSharedBufferRingRelease",
  [
    "Promise",
    "WALogger",
    "WAWebAudioUtility",
    "WAWebNoop",
    "WAWebODS",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c,
      d = 200;
    function m(e, t, n) {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n, a) {
          var i = self.performance.now();
          if (n == null || (yield _(n))) {
            yield o("WAWebAudioUtility").freeWasmBuffer(t);
            return;
          }
          (r("WAWebODS").incr("web.call.audio.ring_buffer_stop_unconfirmed"),
            o("WALogger").LOG(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [AV:SharedBuffer:",
                  "] worklet did not confirm stop within ",
                  "ms, freeing its ring buffer once it does",
                ])),
              a,
              d,
            ),
            n.then(function () {
              return f(t, a, i);
            }, r("WAWebNoop")));
        })),
        p.apply(this, arguments)
      );
    }
    function _(e) {
      return new (c || (c = n("Promise")))(function (t) {
        var n = window.setTimeout(function () {
            t(!1);
          }, d),
          r = function (r) {
            (window.clearTimeout(n), t(r));
          };
        e.then(
          function () {
            return r(!0);
          },
          function () {
            return r(!1);
          },
        );
      });
    }
    function f(e, t, n) {
      return g.apply(this, arguments);
    }
    function g() {
      return (
        (g = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          try {
            yield o("WAWebAudioUtility").freeWasmBuffer(e);
          } catch (e) {
            o("WALogger")
              .WARN(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [AV:SharedBuffer:",
                    "] freeing the ring buffer after a late stop confirmation failed",
                  ])),
                t,
              )
              .catching(r("getErrorSafe")(e));
            return;
          }
          (r("WAWebODS").incr("web.call.audio.ring_buffer_freed_late"),
            o("WALogger").LOG(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [AV:SharedBuffer:",
                  "] worklet confirmed stop ",
                  "ms after it was asked, freed its ring buffer",
                ])),
              t,
              Math.round(self.performance.now() - n),
            ));
        })),
        g.apply(this, arguments)
      );
    }
    ((l.WORKLET_STOP_TIMEOUT_MS = d),
      (l.freeRingBufferAfterWorkletStop = m),
      (l.didWorkletStop = _));
  },
  98,
);
