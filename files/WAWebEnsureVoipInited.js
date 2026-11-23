__d(
  "WAWebEnsureVoipInited",
  [
    "WALogger",
    "WAWebCoreActionsODS",
    "WAWebPageVisibilityRecency",
    "WAWebVoipBackendLoadable",
    "WAWebVoipCallBlockedModals",
    "WAWebVoipCappedVisibleClock",
    "WAWebVoipChunkLoadFailFast",
    "WAWebVoipColdPathEarlyStart",
    "WAWebVoipDeferredBootLogging",
    "WAWebVoipInitEventEmitter",
    "WAWebVoipInitReliabilityGates",
    "WAWebVoipInitReloadRecovery",
    "err",
    "getErrorSafe",
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
      f = 6e4,
      g = (function (e) {
        function t(t) {
          var n;
          return (
            (n =
              e.call(this, "VoIP initialization requires a page reload") ||
              this),
            (n.name = "VoipInitUnavailableError"),
            (n.reason = t),
            n
          );
        }
        return (babelHelpers.inheritsLoose(t, e), t);
      })(babelHelpers.wrapNativeSuper(Error));
    async function h(t) {
      var n = o("WAWebPageVisibilityRecency").snapshotPageVisibility();
      (t === "call" &&
        o("WAWebVoipColdPathEarlyStart").startVoipColdPathEarly("call", n),
        o("WAWebVoipDeferredBootLogging").safelyLogVoipDeferredBootEvent(
          function () {
            o("WALogger").LOG(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [deferred-boot] intent init_start trigger=",
                  "",
                ])),
              t,
            );
          },
        ));
      var a = await o("WAWebVoipBackendLoadable")
          .requireVoipJsBackendForCall()
          .catch(function (e) {
            throw L(e);
          }),
        i = a.WAWebVoipInit;
      if (
        (o("WAWebVoipDeferredBootLogging").safelyLogVoipDeferredBootEvent(
          function () {
            o("WALogger").LOG(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [deferred-boot] intent backend_ready trigger=",
                  "",
                ])),
              t,
            );
          },
        ),
        await i.initWAWebVoip(
          t,
          void 0,
          void 0,
          Math.round(self.performance.now() - n.atMs),
          n,
        ),
        o("WAWebVoipInitEventEmitter").VoipInitEventEmitter.getIsVoipInited())
      )
        return !1;
      var l = !1;
      if (
        (o(
          "WAWebVoipInitEventEmitter",
        ).VoipInitEventEmitter.getDidVoipInitError() &&
          ((l = !0),
          o("WAWebVoipDeferredBootLogging").safelyLogVoipDeferredBootEvent(
            function () {
              o("WALogger").LOG(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [deferred-boot] intent retry_requested trigger=",
                    "",
                  ])),
                t,
              );
            },
          ),
          await i.retryWAWebVoipInitAfterFailure()),
        !o("WAWebVoipInitEventEmitter").VoipInitEventEmitter.getIsVoipInited())
      )
        throw r("err")("VoIP initialization did not complete");
      return l;
    }
    async function y(e, t) {
      var n = (function (e) {
        if (e === "cancelled") return null;
        if (e === "artifact_unavailable") return "artifact_unavailable";
        if (e === "unavailable") return "stuck";
        throw Error(
          "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
            e,
        );
      })(await e);
      if (n != null) throw new g(n);
      return await t;
    }
    async function C(e, t) {
      if (
        (e === void 0 && (e = "call"),
        o(
          "WAWebVoipInitEventEmitter",
        ).VoipInitEventEmitter.getIsVoipStackUnresponsive())
      )
        throw (
          o("WAWebVoipDeferredBootLogging").safelyLogVoipDeferredBootEvent(
            function () {
              o("WALogger").LOG(
                c ||
                  (c = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [deferred-boot] intent blocked trigger=",
                    " reason=stack_unresponsive",
                  ])),
                e,
              );
            },
          ),
          o("WAWebCoreActionsODS").logCallInitBlockedStackUnresponsive(),
          o("WAWebVoipCallBlockedModals").showVoipInitUnavailableModal(),
          new g("stack_unresponsive")
        );
      if (
        o("WAWebVoipInitEventEmitter").VoipInitEventEmitter.getIsVoipInited()
      ) {
        o("WAWebVoipDeferredBootLogging").safelyLogVoipDeferredBootEvent(
          function () {
            o("WALogger").LOG(
              d ||
                (d = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [deferred-boot] intent init_skip trigger=",
                  " reason=already_inited",
                ])),
              e,
            );
          },
        );
        return;
      }
      var n =
          e === "call"
            ? o(
                "WAWebVoipInitReloadRecovery",
              ).beginOutgoingVoipInitReloadRecovery(t)
            : null,
        r = null;
      try {
        r = v(n != null, t);
        var a = h(e),
          i = n == null ? await a : await b(a, n.result, r);
        o("WAWebVoipDeferredBootLogging").safelyLogVoipDeferredBootEvent(
          function () {
            o("WALogger").LOG(
              m ||
                (m = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [deferred-boot] intent init_ready trigger=",
                  " retry_requested=",
                  "",
                ])),
              e,
              i,
            );
          },
        );
      } catch (t) {
        var l = E(t),
          s = l instanceof g ? "reload_required" : "failed";
        throw (
          o("WAWebVoipDeferredBootLogging").safelyLogVoipDeferredBootEvent(
            function () {
              o("WALogger").LOG(
                p ||
                  (p = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [deferred-boot] intent init_failed trigger=",
                    " outcome=",
                    "",
                  ])),
                e,
                s,
              );
            },
          ),
          l
        );
      } finally {
        var u;
        ((u = r) == null || u.cancel(), n == null || n.finish());
      }
    }
    function b(e, t, n) {
      var r = [e, y(t, e)];
      return (n != null && r.push(n.promise), Promise.race(r));
    }
    function v(e, t) {
      return e &&
        (t == null ? void 0 : t.aborted) !== !0 &&
        o("WAWebVoipInitReliabilityGates").isVoipInitChunkFixEnabled()
        ? S(t)
        : null;
    }
    function S(e) {
      var t = null,
        n = function () {
          var e;
          return (e = t) == null ? void 0 : e.cancel();
        },
        r = new Promise(function (e, n) {
          var r = function () {
            t = o("WAWebVoipCappedVisibleClock").startCappedVisibleTimer(
              f,
              function () {
                navigator.onLine === !1
                  ? r()
                  : R() &&
                    n(
                      new (o(
                        "WAWebVoipChunkLoadFailFast",
                      ).VoipChunkLoadError)(),
                    );
              },
            );
          };
          r();
        });
      return (
        e == null || e.addEventListener("abort", n, { once: !0 }),
        { cancel: n, promise: r }
      );
    }
    function R() {
      return (
        !o("WAWebVoipBackendLoadable").isVoipJsBackendRequired() ||
        o(
          "WAWebVoipInitEventEmitter",
        ).VoipInitEventEmitter.getVoipWebStackCreatedAtMs() == null
      );
    }
    function L(e) {
      return e instanceof o("WAWebVoipChunkLoadFailFast").VoipChunkLoadError ||
        navigator.onLine === !1 ||
        !o("WAWebVoipInitReliabilityGates").isVoipInitChunkFixEnabled()
        ? e
        : (o("WALogger")
            .WARN(
              _ ||
                (_ = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: backend load failed online, treating it as a missing chunk",
                ])),
            )
            .catching(r("getErrorSafe")(e)),
          new (o("WAWebVoipChunkLoadFailFast").VoipChunkLoadError)());
    }
    function E(e) {
      return e instanceof o("WAWebVoipChunkLoadFailFast").VoipChunkLoadError
        ? (o("WAWebVoipInitReloadRecovery").markVoipChunkUnavailable(),
          new g("chunk_load_failed"))
        : e;
    }
    ((l.VoipInitUnavailableError = g), (l.ensureVoipInitialized = C));
  },
  98,
);
