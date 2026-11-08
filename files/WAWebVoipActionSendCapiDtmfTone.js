__d(
  "WAWebVoipActionSendCapiDtmfTone",
  [
    "Promise",
    "WALogger",
    "WAPromiseDelays",
    "WAWebVoipStackInterface",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c,
      d = 0,
      m = 70020,
      p = 100,
      _ = 20,
      f = (c || (c = n("Promise"))).resolve();
    function g(e) {
      var t = f.then(function () {
        return h(e);
      });
      return ((f = t), t);
    }
    function h(e) {
      return y.apply(this, arguments);
    }
    function y() {
      return (
        (y = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          try {
            var n = yield o("WAWebVoipStackInterface").getVoipStackInterface();
            if ((n == null ? void 0 : n.type) !== "web") {
              o("WALogger").WARN(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: sendCapiDtmfTone: no web VoIP stack",
                  ])),
              );
              return;
            }
            yield C(function () {
              return n.sendCapiDtmfTone(t);
            }, _);
          } catch (e) {
            o("WALogger")
              .WARN(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: sendCapiDtmfTone threw",
                  ])),
              )
              .catching(r("getErrorSafe")(e));
          }
        })),
        y.apply(this, arguments)
      );
    }
    function C(e, t) {
      return b.apply(this, arguments);
    }
    function b() {
      return (
        (b = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = yield e();
          if (n === m && t > 0)
            return (yield o("WAPromiseDelays").delayMs(p), C(e, t - 1));
          n !== d &&
            o("WALogger").WARN(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: sendCapiDtmfTone failed with status ",
                  "",
                ])),
              n,
            );
        })),
        b.apply(this, arguments)
      );
    }
    l.sendCapiDtmfTone = g;
  },
  98,
);
