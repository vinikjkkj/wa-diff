__d(
  "WAWebVoipSharedBufferRingQuarantine",
  [
    "WALogger",
    "WAWebVoipMainThreadLockODS",
    "WAWebVoipSharedBufferRingRelease",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c,
      d,
      m,
      p = 4,
      _ = new Map();
    function f(t, n) {
      var r,
        a = (r = _.get(t)) != null ? r : [],
        i = y(t);
      if (a.some(h(n.ringBufferPtr))) {
        o("WALogger").WARN(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "voip: [AV:SharedBuffer:",
              "] the ring buffer is already held",
            ])),
          i,
        );
        return;
      }
      if (a.length >= p) {
        (o("WAWebVoipMainThreadLockODS").logMainThreadLockRingEvent("leaked"),
          o("WALogger").WARN(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [AV:SharedBuffer:",
                "] already holding ",
                " ring buffers, leaking this one",
              ])),
            i,
            a.length,
          ));
        return;
      }
      (_.set(t, [].concat(a, [n])),
        o("WAWebVoipMainThreadLockODS").logMainThreadLockRingEvent(
          "quarantined",
        ),
        o("WALogger").LOG(
          u ||
            (u = babelHelpers.taggedTemplateLiteralLoose([
              "voip: [AV:SharedBuffer:",
              "] holding the ring buffer until the next audio thread start, ",
              " held",
            ])),
          i,
          a.length + 1,
        ));
    }
    function g(e, t) {
      var n,
        a = (n = _.get(e)) != null ? n : [],
        i = y(e),
        l = h(t);
      a.some(l) &&
        o("WALogger").WARN(
          c ||
            (c = babelHelpers.taggedTemplateLiteralLoose([
              "voip: [AV:SharedBuffer:",
              "] audio thread started on a held ring buffer, keeping it held",
            ])),
          i,
        );
      var s = a.filter(function (e) {
        return !l(e);
      });
      if (s.length !== 0) {
        (_.set(e, a.filter(l)),
          o("WALogger").LOG(
            d ||
              (d = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [AV:SharedBuffer:",
                "] audio thread started, releasing ",
                " held ring buffers",
              ])),
            i,
            s.length,
          ));
        for (var u of s) {
          var p = u.ringBufferPtr,
            f = u.workletStopped;
          (o("WAWebVoipSharedBufferRingRelease")
            .freeRingBufferAfterWorkletStop(p, f, i)
            .catch(function (e) {
              o("WALogger")
                .WARN(
                  m ||
                    (m = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [AV:SharedBuffer:",
                      "] freeing a held ring buffer failed",
                    ])),
                  i,
                )
                .catching(r("getErrorSafe")(e));
            }),
            o("WAWebVoipMainThreadLockODS").logMainThreadLockRingEvent(
              "released",
            ));
        }
      }
    }
    function h(e) {
      return function (t) {
        return t.ringBufferPtr === e;
      };
    }
    function y(e) {
      return e === "playback"
        ? "Playback"
        : e === "mic"
          ? "Capture"
          : e === "system"
            ? "SystemAudio"
            : (function () {
                throw Error(
                  "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                    e,
                );
              })();
    }
    ((l.holdSharedBufferRing = f), (l.releaseHeldSharedBufferRings = g));
  },
  98,
);
