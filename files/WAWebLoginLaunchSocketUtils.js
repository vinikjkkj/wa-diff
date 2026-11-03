__d(
  "WAWebLoginLaunchSocketUtils",
  [
    "WAComms",
    "WAGzip",
    "WALogger",
    "WAWebCommsConfig",
    "WAWebLoginHandleStanza",
    "getErrorSafe",
    "requireDeferred",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = r("requireDeferred")("WAWebWamPageLoadReporter").__setRef(
        "WAWebLoginLaunchSocketUtils",
      );
    function c(t) {
      var n = Math.floor(self.performance.now());
      u.load()
        .then(function (e) {
          return e.reportLoggedOutPageLoadStage(t, n);
        })
        .catch(function (t) {
          o("WALogger")
            .ERROR(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[login] page-load stage report failed",
                ])),
            )
            .catching(r("getErrorSafe")(t))
            .sendLogs("login-page-load-stage-report-fail");
        });
    }
    function d() {
      (o("WAComms").stopComms(),
        m().catch(function (e) {
          o("WALogger")
            .ERROR(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "[login] QR refresh failed",
                ])),
            )
            .catching(r("getErrorSafe")(e))
            .sendLogs("login-qr-refresh-fail");
        }));
    }
    async function m() {
      c("ws_opening");
      var e = o("WAWebCommsConfig").getCommsConfig();
      (o("WAComms").startComms(r("WAWebLoginHandleStanza"), e, function (e) {
        return Promise.resolve(o("WAGzip").inflate(e));
      }),
        await o("WAComms").waitForConnection(),
        c("ws_pairing"),
        await o("WAComms").startHandlingRequests(),
        c("ws_normal"));
    }
    ((l.refreshLoginQR = d), (l.startLoginCommsAndHandleRequests = m));
  },
  98,
);
