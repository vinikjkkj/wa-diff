__d(
  "WAWebCanonicalTokenExchange",
  [
    "$InternalEnum",
    "WALogger",
    "WAWebCanonicalEntRecoveryWam",
    "WAWebCanonicalUtils",
    "WAWebCanonicalWamFalcoBuffer",
    "WAWebODS",
    "WAWebXControllerFetchUtils",
    "WAXWhatsAppWebAuthControllerRouteBuilder",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d,
      m = n("$InternalEnum").Mirrored(["SUCCESS", "FAILED"]);
    async function p(t, n, a) {
      try {
        var i,
          l = t.accessToken,
          c = t.deviceId,
          d = t.nonce,
          p = t.userId,
          _ = r("WAXWhatsAppWebAuthControllerRouteBuilder").buildUri({
            access_token: l != null ? l : "",
            nonce: d != null ? d : "",
            user_id: p,
            device_id: c,
          }),
          f = await o("WAWebXControllerFetchUtils").fetchFromXController(
            _.toString(),
            { method: "POST", retry: n.retry },
          );
        if (!f.ok)
          return (
            o("WALogger").ERROR(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[canonical] Auth controller failed: HTTP ",
                  "",
                ])),
              f.status,
            ),
            o("WAWebCanonicalEntRecoveryWam").logCriticalRecoveryEvent(
              "auth_controller_http_error",
              a,
              JSON.stringify({ status: f.status }),
            ),
            m.FAILED
          );
        var g = await o("WAWebXControllerFetchUtils").extractJsonFromResponse(
          f,
        );
        if (
          g == null ||
          ((i = g.payload) == null ? void 0 : i.status) !== "success"
        ) {
          var h,
            y,
            C,
            b,
            v =
              (h = g == null || (y = g.payload) == null ? void 0 : y.status) !=
              null
                ? h
                : "invalid response",
            S =
              (C = g == null || (b = g.payload) == null ? void 0 : b.error) !=
              null
                ? C
                : "unknown";
          return (
            o("WALogger")
              .ERROR(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "[canonical] Auth controller fail: ",
                    " err=",
                    "",
                  ])),
                v,
                S,
              )
              .sendLogs("canonical-error", { sampling: 0.01 }),
            o("WAWebCanonicalEntRecoveryWam").logCriticalRecoveryEvent(
              "auth_controller_payload_error",
              a,
              JSON.stringify({ status: v, server_error: S }),
            ),
            m.FAILED
          );
        }
        return m.SUCCESS;
      } catch (e) {
        return (
          o("WALogger")
            .ERROR(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "[canonical] Unexpected error in auth controller: ",
                  "",
                ])),
              e,
            )
            .sendLogs("canonical-error", { sampling: 0.01 }),
          o("WAWebCanonicalEntRecoveryWam").logCriticalRecoveryEvent(
            "auth_controller_unexpected_error",
            a,
            String(e),
          ),
          m.FAILED
        );
      }
    }
    function _(e, t) {
      e === m.SUCCESS
        ? (o("WAWebCanonicalUtils").setTokenCreationState(
            o("WAWebCanonicalUtils").TokenCreationState.PRESENT,
          ),
          o("WAWebCanonicalEntRecoveryWam").logCredentialsStored(t),
          o("WAWebCanonicalWamFalcoBuffer").drainCanonicalWamFalcoBuffer())
        : e === m.FAILED &&
          o("WAWebCanonicalUtils").setTokenCreationState(
            o("WAWebCanonicalUtils").TokenCreationState.IDLE,
          );
    }
    async function f(e, t) {
      (o("WALogger").LOG(
        c ||
          (c = babelHelpers.taggedTemplateLiteralLoose([
            "[canonical] Storing canonical credentials directly",
          ])),
      ),
        o("WAWebCanonicalUtils").setTokenCreationState(
          o("WAWebCanonicalUtils").TokenCreationState.IN_PROGRESS,
        ));
      var n = await p(e, { retry: !0 }, t);
      return (_(n, t), n);
    }
    async function g(e, t) {
      o("WALogger").LOG(
        d ||
          (d = babelHelpers.taggedTemplateLiteralLoose([
            "[canonical] Exchanging nonce for token",
          ])),
      );
      var n = o("WAWebCanonicalEntRecoveryWam").generateRequestId();
      (o("WAWebCanonicalEntRecoveryWam").logExchangeNonceStart(t, n),
        o("WAWebCanonicalUtils").setTokenCreationState(
          o("WAWebCanonicalUtils").TokenCreationState.IN_PROGRESS,
        ),
        r("WAWebODS").incr("web.app.canonical.exchange.attempt"));
      var a = await p(e, { retry: !0 }, t);
      return (
        _(a, t),
        a === m.SUCCESS
          ? (r("WAWebODS").incr("web.app.canonical.exchange.success"),
            o("WAWebCanonicalEntRecoveryWam").logExchangeNonceSuccess(t, n))
          : a === m.FAILED &&
            (r("WAWebODS").incr("web.app.canonical.exchange.failed"),
            o("WAWebCanonicalEntRecoveryWam").logExchangeNonceError(t, n)),
        a
      );
    }
    ((l.TokenExchangeResult = m),
      (l.storeCanonicalCredentials = f),
      (l.exchangeNonceForToken = g));
  },
  98,
);
