__d(
  "WAWebVoipDtlsCertCallRegistration",
  [
    "WALogger",
    "WAWebABProps",
    "WAWebCoreActionsODS",
    "WAWebPonyfillsIdleCallback",
    "WAWebVoipDtlsCertCache",
    "WAWebVoipDtlsCertCacheMode",
    "WAWebVoipSctpConnectionManager",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = null;
    function u(e) {
      if (!(e == null || e === "" || e === s)) {
        var t = s;
        ((s = e),
          o("WAWebVoipDtlsCertCache").beginDtlsCertCall(
            e,
            o("WAWebVoipDtlsCertCacheMode").dtlsCertCacheModeFromInt(
              o("WAWebABProps").getABPropConfigValue(
                "web_voip_dtls_cert_cache_mode",
              ),
            ),
          ),
          t != null &&
            o("WAWebVoipSctpConnectionManager").markSctpCallIdentityChanged(),
          c(e));
      }
    }
    function c(t) {
      o("WAWebVoipDtlsCertCacheMode").isCertPrewarmEnabled(
        o("WAWebVoipDtlsCertCache").getDtlsCertCallMode(t),
      ) &&
        o("WAWebPonyfillsIdleCallback").requestIdleCallback(function () {
          o("WAWebVoipDtlsCertCache").isDtlsCertCallLive(t) &&
            o("WAWebVoipDtlsCertCache")
              .getOrCreateDtlsCert(t)
              .catch(function (t) {
                (o("WAWebCoreActionsODS").logCallSctpDtlsCertPrewarmFailed(),
                  o("WALogger")
                    .WARN(
                      e ||
                        (e = babelHelpers.taggedTemplateLiteralLoose([
                          "voip: [DtlsCertCallRegistration] Certificate prewarm failed",
                        ])),
                    )
                    .catching(r("getErrorSafe")(t)));
              });
        });
    }
    function d() {
      var e = s;
      ((s = null), e != null && o("WAWebVoipDtlsCertCache").endDtlsCertCall(e));
    }
    ((l.syncDtlsCertCall = u), (l.endDtlsCertCallForRegisteredCall = d));
  },
  98,
);
