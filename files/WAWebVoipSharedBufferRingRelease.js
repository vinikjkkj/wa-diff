__d(
  "WAWebVoipSharedBufferRingRelease",
  ["WALogger", "WAWebAudioUtility", "WAWebNoop", "WAWebODS", "getErrorSafe"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c = 200;
    async function d(t, n, a) {
      var i = self.performance.now();
      if (n == null || (await m(n))) {
        await o("WAWebAudioUtility").freeWasmBuffer(t);
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
          c,
        ),
        n.then(function () {
          return p(t, a, i);
        }, r("WAWebNoop")));
    }
    function m(e) {
      return new Promise(function (t) {
        var n = window.setTimeout(function () {
            t(!1);
          }, c),
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
    async function p(e, t, n) {
      try {
        await o("WAWebAudioUtility").freeWasmBuffer(e);
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
    }
    ((l.WORKLET_STOP_TIMEOUT_MS = c),
      (l.freeRingBufferAfterWorkletStop = d),
      (l.didWorkletStop = m));
  },
  98,
);
