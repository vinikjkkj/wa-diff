__d(
  "WAWebVoipWasmArtifactRecovery",
  [
    "JSResourceForInteraction",
    "Random",
    "WACustomError",
    "WALogger",
    "WAPromiseTimeout",
    "WAWebVoipBackendLoadable",
    "WAWebVoipInitEventEmitter",
    "WAWebVoipInitReliabilityGates",
    "WAWebVoipInitReloadRecovery",
    "WAWebVoipWasmArtifactRecoveryODS",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d = [15e3, 12e4, 6e5, 18e5, 36e5, 72e5],
      m = 10 * 6e4,
      p = 0.2,
      _ = 3e4,
      f = "idle";
    function g(e) {
      if (!(f !== "idle" || !h(e) || !y())) {
        if (D() == null) {
          R("unsupported");
          return;
        }
        (o(
          "WAWebVoipWasmArtifactRecoveryODS",
        ).logCallVoipInitWasmArtifactRecovery("armed"),
          C(0));
      }
    }
    function h(e) {
      var t = e.error,
        n = e.isContentAddressed,
        r = e.pinWorkerGlue;
      return (
        n &&
        r &&
        (t.name + ": " + t.message).toLowerCase().includes("unknown file path")
      );
    }
    function y() {
      try {
        return o("WAWebVoipInitReliabilityGates").isVoipInitBxRecoveryEnabled();
      } catch (t) {
        return (
          o("WALogger")
            .WARN(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: WASM artifact recovery gate unavailable",
                ])),
            )
            .catching(r("getErrorSafe")(t)),
          !1
        );
      }
    }
    function C(e) {
      var t = d[e];
      if (t == null) {
        R("exhausted");
        return;
      }
      ((f = "armed"),
        self.setTimeout(function () {
          v(e).catch(function (e) {
            (o("WALogger")
              .WARN(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: WASM artifact recovery attempt failed",
                  ])),
              )
              .catching(r("getErrorSafe")(e)),
              R("attempt_error"));
          });
        }, b(t)));
    }
    function b(e) {
      return e < m
        ? e
        : Math.round(e * (1 + (o("Random").random() * 2 - 1) * p));
    }
    function v(e) {
      return S.apply(this, arguments);
    }
    function S() {
      return (
        (S = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          if (
            o(
              "WAWebVoipInitEventEmitter",
            ).VoipInitEventEmitter.getIsVoipInited()
          ) {
            R("not_needed");
            return;
          }
          ((f = "attempting"),
            o(
              "WAWebVoipWasmArtifactRecoveryODS",
            ).logCallVoipInitWasmArtifactRecovery("attempt"));
          var t = yield L(e);
          if (t == null) {
            R("unsupported");
            return;
          }
          if (!t.wasm) {
            (o(
              "WAWebVoipWasmArtifactRecoveryODS",
            ).logCallVoipInitWasmArtifactRecovery("unresolved"),
              C(e + 1));
            return;
          }
          if (
            (o(
              "WAWebVoipWasmArtifactRecoveryODS",
            ).logCallVoipInitWasmArtifactRecovery("resolved"),
            o("WALogger").LOG(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: WASM artifact keys recovered in page attempt=",
                  " glue=",
                  "",
                ])),
              e + 1,
              String(t.glue),
            ),
            yield $(e + 1))
          ) {
            f = "recovered";
            return;
          }
          C(e + 1);
        })),
        S.apply(this, arguments)
      );
    }
    function R(e) {
      ((f = "stopped"),
        o(
          "WAWebVoipWasmArtifactRecoveryODS",
        ).logCallVoipInitWasmArtifactRecovery(e));
    }
    function L(e) {
      return E.apply(this, arguments);
    }
    function E() {
      return (
        (E = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = x();
          return t == null || t.wasm ? t : (yield k(e), x());
        })),
        E.apply(this, arguments)
      );
    }
    function k(e) {
      return I.apply(this, arguments);
    }
    function I() {
      return (
        (I = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          try {
            yield o("WAPromiseTimeout").promiseTimeout(T(e), _);
          } catch (e) {
            o(
              "WAWebVoipWasmArtifactRecoveryODS",
            ).logCallVoipInitWasmArtifactRecovery(
              e instanceof o("WACustomError").TimeoutError
                ? "carrier_timeout"
                : "carrier_failure",
            );
          }
        })),
        I.apply(this, arguments)
      );
    }
    function T(e) {
      return e === 0
        ? r("JSResourceForInteraction")("WAWebVoipWebWasmBxRefsCarrier1")
            .__setRef("WAWebVoipWasmArtifactRecovery")
            .load()
        : e === 1
          ? r("JSResourceForInteraction")("WAWebVoipWebWasmBxRefsCarrier2")
              .__setRef("WAWebVoipWasmArtifactRecovery")
              .load()
          : e === 2
            ? r("JSResourceForInteraction")("WAWebVoipWebWasmBxRefsCarrier3")
                .__setRef("WAWebVoipWasmArtifactRecovery")
                .load()
            : e === 3
              ? r("JSResourceForInteraction")("WAWebVoipWebWasmBxRefsCarrier4")
                  .__setRef("WAWebVoipWasmArtifactRecovery")
                  .load()
              : e === 4
                ? r("JSResourceForInteraction")(
                    "WAWebVoipWebWasmBxRefsCarrier5",
                  )
                    .__setRef("WAWebVoipWasmArtifactRecovery")
                    .load()
                : r("JSResourceForInteraction")(
                    "WAWebVoipWebWasmBxRefsCarrier6",
                  )
                    .__setRef("WAWebVoipWasmArtifactRecovery")
                    .load();
    }
    function D() {
      var e = r("JSResourceForInteraction")(
        "WAWebVoipWebWasmLoader_ContentAddressed_internal",
      )
        .__setRef("WAWebVoipWasmArtifactRecovery")
        .getModuleIfRequired();
      if (e == null) return null;
      var t = Reflect.get(e, "RESOLVE_ARTIFACTS");
      return typeof t == "function" ? t : null;
    }
    function x() {
      var e,
        t = (e = D()) == null ? void 0 : e();
      return t == null || typeof t != "object"
        ? null
        : {
            glue: Reflect.get(t, "glue") === !0,
            wasm: Reflect.get(t, "wasm") === !0,
          };
    }
    function $(e) {
      return P.apply(this, arguments);
    }
    function P() {
      return (
        (P = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          o(
            "WAWebVoipInitReloadRecovery",
          ).clearVoipWasmArtifactUnavailableForRecovery();
          var t = yield o("WAWebVoipBackendLoadable")
            .requireVoipJsBackend()
            .then(function (t) {
              return t.WAWebVoipInit.restartVoipInitAfterArtifactRecovery(e);
            })
            .catch(function (e) {
              return (
                o("WALogger")
                  .WARN(
                    c ||
                      (c = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: VoIP init restart after artifact recovery failed",
                      ])),
                  )
                  .catching(r("getErrorSafe")(e)),
                !1
              );
            });
          return (
            o(
              "WAWebVoipWasmArtifactRecoveryODS",
            ).logCallVoipInitWasmArtifactRecovery(
              t ? "restart_init_success" : "restart_init_failure",
            ),
            t
          );
        })),
        P.apply(this, arguments)
      );
    }
    l.armVoipWasmArtifactRecovery = g;
  },
  98,
);
