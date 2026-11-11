__d(
  "WAWebVoipAudioContextResume",
  [
    "Promise",
    "WALogger",
    "WAWebVoipSharedCallAudioContext",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c,
      d,
      m = 3e3,
      p = 2e3;
    function _(e, t) {
      return f.apply(this, arguments);
    }
    function f() {
      return (
        (f = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n) {
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
                m,
                t.state,
              );
            }, m);
          try {
            yield t.resume();
          } finally {
            self.clearTimeout(a);
            var i = Date.now() - r;
            i >= m &&
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
        })),
        f.apply(this, arguments)
      );
    }
    function g(e, t) {
      return h.apply(this, arguments);
    }
    function h() {
      return (
        (h = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = _(e, t);
          return o(
            "WAWebVoipSharedCallAudioContext",
          ).isAudioPipelineV2Enabled() && !(yield b(n, p))
            ? (o("WALogger").WARN(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [AV:",
                    "] continuing with AudioContext.resume() pending after ",
                    "ms, state=",
                    "",
                  ])),
                t,
                p,
                e.state,
              ),
              !1)
            : (yield n, !0);
        })),
        h.apply(this, arguments)
      );
    }
    function y(e) {
      return C.apply(this, arguments);
    }
    function C() {
      return (
        (C = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          (yield g(e, "startCapture")) &&
            o("WALogger").LOG(
              c ||
                (c = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [AV:startCapture] AudioContext resumed successfully",
                ])),
            );
        })),
        C.apply(this, arguments)
      );
    }
    function b(e, t) {
      return new (d || (d = n("Promise")))(function (n) {
        var r = self.setTimeout(function () {
            n(!1);
          }, t),
          o = function () {
            (self.clearTimeout(r), n(!0));
          };
        e.then(o, o);
      });
    }
    ((l.resumeAudioContextLoggingDelays = _),
      (l.resumeAudioContextWithinV2Wait = g),
      (l.resumeCaptureAudioContext = y));
  },
  98,
);
