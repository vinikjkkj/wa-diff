__d(
  "WAWebBotCanonicalRetry",
  ["WALogger", "WATimeUtils", "WAWebCanonicalGating", "WAWebCanonicalUtils"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = o("WATimeUtils").HOUR_MILLISECONDS * 4,
      u = !1;
    function c(t) {
      if (
        !(
          u ||
          o("WAWebCanonicalUtils").isCanonicalPresent() ||
          !o("WAWebCanonicalGating").isCanonicalEnabled()
        )
      ) {
        u = !0;
        var n = self.setTimeout(function () {
          o("WALogger")
            .WARN(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[bot] bot profiles still waiting for canonical credentials",
                ])),
            )
            .sendLogs("bot-canonical-retry-slow", { sampling: 0.01 });
        }, s);
        o("WAWebCanonicalUtils")
          .waitForCanonicalPresent()
          .then(function () {
            (self.clearTimeout(n), (u = !1), t());
          });
      }
    }
    l.armCanonicalRetry = c;
  },
  98,
);
