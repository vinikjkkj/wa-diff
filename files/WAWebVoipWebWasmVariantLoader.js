__d(
  "WAWebVoipWebWasmVariantLoader",
  [
    "JSResourceForInteraction",
    "WALogger",
    "WAWebABProps",
    "WAWebABPropsConfigs",
    "WAWebCoreActionsODS",
    "WAWebVoipGatingUtils",
    "WAWebVoipPthreadGlueFailureTracker",
    "WAWebVoipWasmGlueSkewObserver",
    "WAWebVoipWebWasmMemory",
    "asyncToGeneratorRuntime",
    "cr:12201",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d,
      m,
      p,
      _,
      f = "prod-nonlab",
      g = new Set(["prod-nonlab", "prod-lab", "prod-labvideo"]),
      h = 20,
      y = 0;
    function C(t) {
      if (t)
        return (
          o("WALogger").LOG(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "voip: ThreadPoolManager: Using legacy pthread pool size ",
                " (WebKit browser)",
              ])),
            h,
          ),
          h
        );
      try {
        var n = o("WAWebABProps").getABPropConfigValue(
          "web_voip_dynamic_thread_preallocate_count",
        );
        if (typeof n == "number" && n > 0)
          return (
            o("WALogger").LOG(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: ThreadPoolManager: Using on-demand worker startup with target pool size ",
                  "",
                ])),
              n,
            ),
            y
          );
      } catch (e) {}
      return (
        o("WALogger").LOG(
          u ||
            (u = babelHelpers.taggedTemplateLiteralLoose([
              "voip: ThreadPoolManager: Using legacy pthread pool size ",
              "",
            ])),
          h,
        ),
        h
      );
    }
    function b() {
      var e = o("WAWebVoipGatingUtils").isWebKitBrowser(),
        t = C(e),
        n = o("WAWebVoipWebWasmMemory").createVoipWasmMemoryOverride(e),
        r = o("WAWebVoipPthreadGlueFailureTracker").recordPthreadGlueFailure,
        a = o("WAWebVoipWasmGlueSkewObserver").recordWasmGlueBuildSkewObserved;
      return n == null
        ? {
            onPthreadGlueFailure: r,
            onWasmGlueBuildSkewObserved: a,
            pthreadPoolSizeOverride: t,
          }
        : {
            onPthreadGlueFailure: r,
            onWasmGlueBuildSkewObserved: a,
            pthreadPoolSizeOverride: t,
            wasmMemory: n,
          };
    }
    function v(e) {
      return S.apply(this, arguments);
    }
    function S() {
      return (
        (S = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          o(
            "WAWebCoreActionsODS",
          ).logCallVoipInitWasmArtifactUnversionedLoadAttempt();
          var t = yield r("JSResourceForInteraction")("WAWebVoipWebWasmLoader")
              .__setRef("WAWebVoipWebWasmVariantLoader")
              .load(),
            n = yield t(e != null ? e : b());
          return (
            o(
              "WAWebCoreActionsODS",
            ).logCallVoipInitWasmArtifactUnversionedLoadSuccess(),
            n
          );
        })),
        S.apply(this, arguments)
      );
    }
    function R(e, t) {
      return L.apply(this, arguments);
    }
    function L() {
      return (
        (L = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          o(
            "WAWebCoreActionsODS",
          ).logCallVoipInitWasmArtifactContentAddressedLoadAttempt();
          var n = yield r("JSResourceForInteraction")(
              "WAWebVoipWebWasmLoader_ContentAddressed_internal",
            )
              .__setRef("WAWebVoipWebWasmVariantLoader")
              .load(),
            a = Reflect.get(n, "PINNED_WORKER_GLUE_BX_ERROR"),
            i = e && a == null;
          e && !i
            ? (o(
                "WAWebCoreActionsODS",
              ).logCallVoipInitWasmArtifactWorkerGlueBxLookupFailure(),
              o(
                "WAWebCoreActionsODS",
              ).logCallVoipInitWasmArtifactWorkerGlueUnpinnedFallback(),
              o("WALogger").LOG(
                d ||
                  (d = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: pinned worker glue bx lookup failed; loading unpinned: ",
                    "",
                  ])),
                String(a),
              ))
            : i &&
              o(
                "WAWebCoreActionsODS",
              ).logCallVoipInitWasmArtifactWorkerGluePinnedLoadAttempt();
          var l = yield n(
            babelHelpers.extends({}, t != null ? t : b(), { pinWorkerGlue: i }),
          );
          return (
            o(
              "WAWebCoreActionsODS",
            ).logCallVoipInitWasmArtifactContentAddressedLoadSuccess(),
            l
          );
        })),
        L.apply(this, arguments)
      );
    }
    function E(e) {
      if (typeof e == "string") {
        for (var t of g) if (e === t) return t;
      }
      return (
        e !== f &&
          o("WALogger").ERROR(
            c ||
              (c = babelHelpers.taggedTemplateLiteralLoose([
                "voip: Invalid WASM variant '",
                "', falling back to '",
                "'",
              ])),
            String(e),
            f,
          ),
        f
      );
    }
    function k(e) {
      switch (e) {
        case "prod-nonlab":
          return null;
        case "prod-lab":
          return "prod-lab";
        case "prod-labvideo":
          return "prod-labvideo";
        default:
          return null;
      }
    }
    function I(e, t, n, r) {
      return T.apply(this, arguments);
    }
    function T() {
      return (
        (T = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, r) {
            return t ? R(n, r) : v(r);
          },
        )),
        T.apply(this, arguments)
      );
    }
    function D(e, t) {
      return x.apply(this, arguments);
    }
    function x() {
      return (
        (x = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          (e === void 0 && (e = !1), t === void 0 && (t = !1));
          var r = o("WAWebABPropsConfigs").ABPropConfigs
            .web_voip_load_wasm_variant;
          if (r == null) return I(f, e, t);
          var a = null;
          try {
            a = o("WAWebABProps").getABPropConfigValue(
              "web_voip_load_wasm_variant",
            );
          } catch (n) {
            return I(f, e, t);
          }
          if (a == null) return I(f, e, t);
          var i = E(a);
          if (
            (o("WALogger").LOG(
              m ||
                (m = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: AB prop set to '",
                  "', validated variant: '",
                  "'",
                ])),
              String(a),
              i,
            ),
            !g.has(i))
          )
            return (
              o("WALogger").LOG(
                p ||
                  (p = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: Variant '",
                    "' not available, using default loader",
                  ])),
                i,
              ),
              I(f, e, t)
            );
          var l = b(),
            s = k(i);
          if (s != null && n("cr:12201") != null)
            try {
              return yield n("cr:12201").tryLoadLabVariant(s, l);
            } catch (n) {
              return (
                o("WALogger").ERROR(
                  _ ||
                    (_ = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: Failed to load variant '",
                      "': ",
                      ", falling back to default",
                    ])),
                  i,
                  String(n),
                ),
                I(f, e, t)
              );
            }
          return I(i, e, t, l);
        })),
        x.apply(this, arguments)
      );
    }
    l.loadVoipWasmVariant = D;
  },
  98,
);
