__d(
  "WAWebVoipActionSendCapiDtmfTone",
  ["WALogger", "WAPromiseDelays", "WAWebVoipStackInterface", "getErrorSafe"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c = 0,
      d = 70020,
      m = 100,
      p = 20,
      _ = Promise.resolve();
    function f(e) {
      var t = _.then(function () {
        return g(e);
      });
      return ((_ = t), t);
    }
    async function g(t) {
      try {
        var n = await o("WAWebVoipStackInterface").getVoipStackInterface();
        if ((n == null ? void 0 : n.type) !== "web") {
          o("WALogger").WARN(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "voip: sendCapiDtmfTone: no web VoIP stack",
              ])),
          );
          return;
        }
        await h(function () {
          return n.sendCapiDtmfTone(t);
        }, p);
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
    }
    async function h(e, t) {
      var n = await e();
      if (n === d && t > 0)
        return (await o("WAPromiseDelays").delayMs(m), h(e, t - 1));
      n !== c &&
        o("WALogger").WARN(
          u ||
            (u = babelHelpers.taggedTemplateLiteralLoose([
              "voip: sendCapiDtmfTone failed with status ",
              "",
            ])),
          n,
        );
    }
    l.sendCapiDtmfTone = f;
  },
  98,
);
