__d(
  "WAWebVoipAudioContextResume",
  ["WALogger", "asyncToGeneratorRuntime"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = 3e3;
    function c(e, t) {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n) {
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
                u,
                t.state,
              );
            }, u);
          try {
            yield t.resume();
          } finally {
            self.clearTimeout(a);
            var i = Date.now() - r;
            i >= u &&
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
        d.apply(this, arguments)
      );
    }
    l.resumeAudioContextLoggingDelays = c;
  },
  98,
);
