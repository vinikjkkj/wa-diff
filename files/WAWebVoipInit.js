__d(
  "WAWebVoipInit",
  [
    "WALogger",
    "WAResolvable",
    "WAWebCallWamEvent",
    "WAWebCoreActionsODS",
    "WAWebJoinableCallWamEvent",
    "WAWebPonyfillsIdleCallback",
    "WAWebUserPrefsGeneral",
    "WAWebUserPrefsMeUser",
    "WAWebVoipBrowserAudioStatus",
    "WAWebVoipCrashRecovery",
    "WAWebVoipGatingUtils",
    "WAWebVoipInitEventEmitter",
    "WAWebVoipNetworkMedium",
    "WAWebVoipQplHelpers",
    "WAWebVoipStackInterface",
    "WAWebWidFactory",
    "cr:17219",
    "justknobx",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c,
      d,
      m,
      p,
      _,
      f,
      g,
      h = (e = n("cr:17219")) != null ? e : {},
      y = h.getWindowsBridge,
      C = 1,
      b,
      v = !1,
      S = 0,
      R = null,
      L = null;
    async function E() {
      var e = o("WAWebUserPrefsMeUser").getMaybeMeDeviceLid();
      if (e == null) {
        (o("WALogger").WARN(
          s ||
            (s = babelHelpers.taggedTemplateLiteralLoose([
              "voip: init skipped, selfLid not available yet",
            ])),
        ),
          (v = !0),
          o(
            "WAWebVoipInitEventEmitter",
          ).VoipInitEventEmitter.triggerVoipInitFailure());
        return;
      }
      e.equals(b) ? D && (await D.promise) : ((b = e), P(), await x(e));
    }
    function k() {
      return (
        o(
          "WAWebVoipInitEventEmitter",
        ).VoipInitEventEmitter.getDidVoipInitError() &&
        v &&
        S < $()
      );
    }
    async function I() {
      if (L != null) return await L;
      var e = T();
      L = e;
      try {
        return await e;
      } finally {
        L === e && (L = null);
      }
    }
    async function T() {
      if (
        D &&
        (await D.promise,
        o("WAWebVoipInitEventEmitter").VoipInitEventEmitter.getIsVoipInited())
      )
        return !0;
      if (!k())
        return o(
          "WAWebVoipInitEventEmitter",
        ).VoipInitEventEmitter.getIsVoipInited();
      var e = o("WAWebUserPrefsMeUser").getMaybeMeDeviceLid();
      if (e == null) return !1;
      (S++,
        o("WAWebCoreActionsODS").logCallVoipInitRetryAttempt(),
        (b = e),
        o("WALogger").LOG(
          u ||
            (u = babelHelpers.taggedTemplateLiteralLoose([
              "voip: retrying init after transient failure attempt=",
              " max=",
              "",
            ])),
          S,
          $(),
        ),
        await N());
      var t = o("WAWebUserPrefsMeUser").getMaybeMeDeviceLid();
      if (t == null || !e.equals(t))
        return (
          o("WALogger").LOG(
            c ||
              (c = babelHelpers.taggedTemplateLiteralLoose([
                "voip: skip retry, identity changed in idle wait",
              ])),
          ),
          o("WAWebVoipInitEventEmitter").VoipInitEventEmitter.getIsVoipInited()
        );
      await x(e, !0);
      var n = o(
        "WAWebVoipInitEventEmitter",
      ).VoipInitEventEmitter.getIsVoipInited();
      return (
        n
          ? o("WAWebCoreActionsODS").logCallVoipInitRetrySuccess()
          : (o("WAWebCoreActionsODS").logCallVoipInitRetryFailure(),
            k() || o("WAWebCoreActionsODS").logCallVoipInitRetryExhausted()),
        n
      );
    }
    var D = null;
    async function x(e, t) {
      if (
        (t === void 0 && (t = !1),
        o("WALogger").LOG(
          d ||
            (d = babelHelpers.taggedTemplateLiteralLoose([
              "voip: init after me_ready",
            ])),
        ),
        !(
          o(
            "WAWebVoipInitEventEmitter",
          ).VoipInitEventEmitter.getDidVoipInitError() && !t
        ))
      ) {
        if (
          D &&
          (await D.promise,
          o(
            "WAWebVoipInitEventEmitter",
          ).VoipInitEventEmitter.getIsVoipInited() ||
            o(
              "WAWebVoipInitEventEmitter",
            ).VoipInitEventEmitter.getDidVoipInitError())
        ) {
          o("WALogger").LOG(
            m ||
              (m = babelHelpers.taggedTemplateLiteralLoose([
                "voip: init already done, ignoring duplicate call",
              ])),
          );
          return;
        }
        ((D = new (o("WAResolvable").Resolvable)()),
          o("WAWebVoipQplHelpers").startVoipInitQpl());
        try {
          var n, r, a;
          if (o("WAWebVoipGatingUtils").isUnsupportedBrowserForWebCalling()) {
            (o("WALogger").LOG(
              p ||
                (p = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: init skipped due to unsupported browser",
                ])),
            ),
              o("WAWebCoreActionsODS").logCallVoipInitSkipUnsupported(),
              (v = !1),
              o(
                "WAWebVoipInitEventEmitter",
              ).VoipInitEventEmitter.triggerVoipInitFailure());
            return;
          }
          o("WAWebVoipBrowserAudioStatus").preDetectBrowserAudioCapabilities();
          var i = await o("WAWebVoipStackInterface").getVoipStackInterface(),
            l = o("WAWebUserPrefsMeUser").getMaybeMeDevicePn(),
            s = l != null && !l.isLid() ? l : null,
            u = s != null ? o("WAWebWidFactory").asUserWidOrThrow(s) : null,
            c =
              i == null
                ? void 0
                : i.voipInit(
                    (n = s == null ? void 0 : s.toString({ legacy: !0 })) !=
                      null
                      ? n
                      : "",
                    (r = u == null ? void 0 : u.toString({ legacy: !0 })) !=
                      null
                      ? r
                      : "",
                    e.toString({ legacy: !0 }),
                  );
          if (
            (await Promise.all([
              c,
              i == null
                ? void 0
                : i.setHideMyIp(
                    (a = o("WAWebUserPrefsGeneral").getUserPrivacySettings()
                      .disallowAllP2p) != null
                      ? a
                      : !1,
                  ),
            ]),
            (i == null ? void 0 : i.type) === "web")
          )
            var g = new (o("WAWebCallWamEvent").CallWamEvent)(),
              h = new (o("WAWebJoinableCallWamEvent").JoinableCallWamEvent)();
          try {
            o("WAWebVoipNetworkMedium").startNetworkMediumMonitoring();
          } catch (e) {
            o("WALogger").WARN(
              _ ||
                (_ = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: network medium monitoring failed to start: ",
                  "",
                ])),
              e,
            );
          }
          if (
            ((i == null ? void 0 : i.type) === "web" &&
              o("WAWebVoipCrashRecovery").initCrashRecovery(),
            (i == null ? void 0 : i.type) === "windows")
          ) {
            var C;
            y == null ||
              (C = y()) == null ||
              (C = C.voip) == null ||
              C.setHandlers(i.callbacks);
          }
          (o(
            "WAWebVoipInitEventEmitter",
          ).VoipInitEventEmitter.triggerVoipInitSuccess(),
            P(),
            o("WAWebCoreActionsODS").logCallVoipInitSuccess(),
            o("WAWebVoipQplHelpers").endVoipInitQplSuccess({
              bool: { download_only: !1 },
            }));
        } catch (e) {
          (o("WAWebVoipQplHelpers").endVoipInitQplFail("init_error"),
            t || o("WAWebCoreActionsODS").logCallVoipInitError(),
            o("WALogger")
              .ERROR(
                f ||
                  (f = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: init failed: ",
                    "",
                  ])),
                e,
              )
              .sendLogs("voip: init-failed"),
            (v = !0),
            o(
              "WAWebVoipInitEventEmitter",
            ).VoipInitEventEmitter.triggerVoipInitFailure());
        } finally {
          var b;
          ((b = D) == null || b.resolve(), (D = null));
        }
      }
    }
    function $() {
      if (R == null)
        try {
          R = Math.max(0, r("justknobx")._("4786"));
        } catch (e) {
          (o("WALogger")
            .WARN(
              g ||
                (g = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: init retry count JK unavailable, using fallback=",
                  ": ",
                  "",
                ])),
              C,
              String(e),
            )
            .sendLogs("voip-init-retry-count-jk-missing"),
            (R = C));
        }
      return R;
    }
    function P() {
      ((v = !1), (S = 0), (R = null), (L = null));
    }
    async function N() {
      await new Promise(function (e) {
        o("WAWebPonyfillsIdleCallback").requestIdleCallback(function () {
          return e();
        });
      });
    }
    ((l.VoipInitEventEmitter = o(
      "WAWebVoipInitEventEmitter",
    ).VoipInitEventEmitter),
      (l.initWAWebVoip = E),
      (l.canRetryWAWebVoipInitAfterFailure = k),
      (l.retryWAWebVoipInitAfterFailure = I));
  },
  98,
);
