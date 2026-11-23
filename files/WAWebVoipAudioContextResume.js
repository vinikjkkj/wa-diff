__d(
  "WAWebVoipAudioContextResume",
  ["WALogger", "WAWebVoipSharedCallAudioContext"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c,
      d = 3e3,
      m = 2e3;
    async function p(t, n) {
      var r = Date.now(),
        a = self.setTimeout(function () {
          o("WALogger").WARN(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [AV:",
                "] AudioContext.resume() still pending after ",
                "ms, state=",
                "",
              ])),
            n,
            d,
            t.state,
          );
        }, d);
      try {
        await t.resume();
      } finally {
        self.clearTimeout(a);
        var i = Date.now() - r;
        i >= d &&
          o("WALogger").LOG(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [AV:",
                "] AudioContext.resume() settled after ",
                "ms, state=",
                "",
              ])),
            n,
            i,
            t.state,
          );
      }
    }
    async function _(e, t) {
      var n = p(e, t);
      return o("WAWebVoipSharedCallAudioContext").isAudioPipelineV2Enabled() &&
        !(await g(n, m))
        ? (o("WALogger").WARN(
            u ||
              (u = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [AV:",
                "] continuing with AudioContext.resume() pending after ",
                "ms, state=",
                "",
              ])),
            t,
            m,
            e.state,
          ),
          !1)
        : (await n, !0);
    }
    async function f(e) {
      (await _(e, "startCapture")) &&
        o("WALogger").LOG(
          c ||
            (c = babelHelpers.taggedTemplateLiteralLoose([
              "voip: [AV:startCapture] AudioContext resumed successfully",
            ])),
        );
    }
    function g(e, t) {
      return new Promise(function (n) {
        var r = self.setTimeout(function () {
            n(!1);
          }, t),
          o = function () {
            (self.clearTimeout(r), n(!0));
          };
        e.then(o, o);
      });
    }
    ((l.resumeAudioContextLoggingDelays = p),
      (l.resumeAudioContextWithinV2Wait = _),
      (l.resumeCaptureAudioContext = f));
  },
  98,
);
