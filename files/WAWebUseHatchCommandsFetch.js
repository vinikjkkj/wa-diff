__d(
  "WAWebUseHatchCommandsFetch",
  [
    "WALogger",
    "WAWebBotGating",
    "WAWebBotUtils",
    "WAWebCanonicalHatchCommandGetQuery",
    "WAWebHatchCommandCache",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = (s || (s = o("react"))).useEffect;
    function c(t) {
      var n = t.toJid(),
        r =
          o("WAWebBotGating").isHatchCommandsEnabled() &&
          o("WAWebBotUtils").isHatchBot(t);
      u(
        function () {
          r &&
            o("WAWebHatchCommandCache").getHatchCommands(n) == null &&
            o("WAWebCanonicalHatchCommandGetQuery")
              .fetchHatchCommandGet()
              .then(function (e) {
                o("WAWebHatchCommandCache").setHatchCommands(n, e);
              })
              .catch(function (t) {
                o("WALogger").WARN(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "useHatchCommandsFetch: failed to fetch commands for ",
                      "",
                    ])),
                  n,
                );
              });
        },
        [r, n],
      );
    }
    l.useHatchCommandsFetch = c;
  },
  98,
);
