__d(
  "WAWebVoipStackInterface",
  [
    "JSResourceForInteraction",
    "WALogger",
    "WAWebLazyLoadedRetriable",
    "WAWebVoipGatingUtils",
    "err",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c = "WAWebVoipStackInterfaceImpl",
      d = 3e4,
      m = "m#WAWebVoipStackInterfaceImpl",
      p = "wa_web_voip_stack_interface",
      _;
    function f() {
      return (
        _ == null &&
          (_ = r("JSResourceForInteraction")(
            "WAWebVoipStackInterfaceLoadTelemetry",
          )
            .__setRef("WAWebVoipStackInterface")
            .load()
            .catch(function (e) {
              throw ((_ = null), e);
            })),
        _
      );
    }
    function g(t) {
      f()
        .then(t)
        .catch(function (t) {
          o("WALogger")
            .WARN(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: stack interface load telemetry failed",
                ])),
            )
            .catching(r("getErrorSafe")(t))
            .sendLogs("voip-stack-interface-load-telemetry-failed");
        });
    }
    async function h() {
      o("WALogger").LOG(
        s ||
          (s = babelHelpers.taggedTemplateLiteralLoose([
            "voip: getVoipStackInterface awaiting lazy bundle",
          ])),
      );
      var e = r("JSResourceForInteraction")("WAWebVoipStackInterfaceImpl")
          .__setRef("WAWebVoipStackInterface")
          .load(),
        t = null,
        n = new Promise(function (e, n) {
          t = self.setTimeout(function () {
            ((t = null), n(r("err")("voip stack interface load timed out")));
          }, d);
        });
      try {
        return await Promise.race([e, n]);
      } finally {
        t != null && self.clearTimeout(t);
      }
    }
    var y = r("WAWebLazyLoadedRetriable")(h, c, {
      onAttemptFailure: function () {
        g(function (e) {
          e.logVoipStackInterfaceLoadAttemptFailure();
        });
      },
      onFinalFailure: function (t, n) {
        (g(function (e) {
          e.logVoipStackInterfaceLoadRetryExhausted();
        }),
          o("WALogger")
            .ERROR(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: stack load failed comp=",
                  " mod=",
                  " res=",
                  " attempts=",
                  "",
                ])),
              c,
              m,
              p,
              n,
            )
            .catching(t)
            .sendLogs("voip-stack-interface-lazy-load-failed"));
      },
      onRetrySuccess: function () {
        g(function (e) {
          e.logVoipStackInterfaceLoadRetrySuccess();
        });
      },
    });
    async function C() {
      if (!o("WAWebVoipGatingUtils").isVoipDownloadEnabled()) return null;
      var e = await y(),
        t = e.getVoipStackInterfaceImpl;
      return t();
    }
    l.getVoipStackInterface = C;
  },
  98,
);
