__d(
  "WAWebVoipWebWasmVariantLoader",
  [
    "JSResourceForInteraction",
    "WALogger",
    "WAWebABProps",
    "WAWebABPropsConfigs",
    "WAWebCoreActionsODS",
    "WAWebVoipGatingUtils",
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
      _ = "prod-nonlab",
      f = new Set(["prod-nonlab", "prod-lab", "prod-labvideo"]),
      g = 20,
      h = 0;
    function y(t) {
      if (t)
        return (
          o("WALogger").LOG(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "voip: ThreadPoolManager: Using legacy pthread pool size ",
                " (WebKit browser)",
              ])),
            g,
          ),
          g
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
            h
          );
      } catch (e) {}
      return (
        o("WALogger").LOG(
          u ||
            (u = babelHelpers.taggedTemplateLiteralLoose([
              "voip: ThreadPoolManager: Using legacy pthread pool size ",
              "",
            ])),
          g,
        ),
        g
      );
    }
    function C() {
      var e = o("WAWebVoipGatingUtils").isWebKitBrowser(),
        t = y(e),
        n = o("WAWebVoipWebWasmMemory").createVoipWasmMemoryOverride(e),
        r = o("WAWebVoipWasmGlueSkewObserver").recordWasmGlueBuildSkewObserved;
      return n == null
        ? { onWasmGlueBuildSkewObserved: r, pthreadPoolSizeOverride: t }
        : {
            onWasmGlueBuildSkewObserved: r,
            pthreadPoolSizeOverride: t,
            wasmMemory: n,
          };
    }
    function b(e) {
      return v.apply(this, arguments);
    }
    function v() {
      return (
        (v = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          o(
            "WAWebCoreActionsODS",
          ).logCallVoipInitWasmArtifactUnversionedLoadAttempt();
          var t = yield r("JSResourceForInteraction")("WAWebVoipWebWasmLoader")
              .__setRef("WAWebVoipWebWasmVariantLoader")
              .load(),
            n = yield t(e != null ? e : C());
          return (
            o(
              "WAWebCoreActionsODS",
            ).logCallVoipInitWasmArtifactUnversionedLoadSuccess(),
            n
          );
        })),
        v.apply(this, arguments)
      );
    }
    function S(e, t) {
      return R.apply(this, arguments);
    }
    function R() {
      return (
        (R = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          (o(
            "WAWebCoreActionsODS",
          ).logCallVoipInitWasmArtifactContentAddressedLoadAttempt(),
            e &&
              o(
                "WAWebCoreActionsODS",
              ).logCallVoipInitWasmArtifactWorkerGluePinnedLoadAttempt());
          var n = yield r("JSResourceForInteraction")(
              "WAWebVoipWebWasmLoader_ContentAddressed_internal",
            )
              .__setRef("WAWebVoipWebWasmVariantLoader")
              .load(),
            a = yield n(
              babelHelpers.extends({}, t != null ? t : C(), {
                pinWorkerGlue: e,
              }),
            );
          return (
            o(
              "WAWebCoreActionsODS",
            ).logCallVoipInitWasmArtifactContentAddressedLoadSuccess(),
            a
          );
        })),
        R.apply(this, arguments)
      );
    }
    function L(e) {
      if (typeof e == "string") {
        for (var t of f) if (e === t) return t;
      }
      return (
        e !== _ &&
          o("WALogger").ERROR(
            c ||
              (c = babelHelpers.taggedTemplateLiteralLoose([
                "voip: Invalid WASM variant '",
                "', falling back to '",
                "'",
              ])),
            String(e),
            _,
          ),
        _
      );
    }
    function E(e) {
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
    function k(e, t, n, r) {
      return I.apply(this, arguments);
    }
    function I() {
      return (
        (I = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, r) {
            return t ? S(n, r) : b(r);
          },
        )),
        I.apply(this, arguments)
      );
    }
    function T(e, t) {
      return D.apply(this, arguments);
    }
    function D() {
      return (
        (D = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          (e === void 0 && (e = !1), t === void 0 && (t = !1));
          var r = o("WAWebABPropsConfigs").ABPropConfigs
            .web_voip_load_wasm_variant;
          if (r == null) return k(_, e, t);
          var a = null;
          try {
            a = o("WAWebABProps").getABPropConfigValue(
              "web_voip_load_wasm_variant",
            );
          } catch (n) {
            return k(_, e, t);
          }
          if (a == null) return k(_, e, t);
          var i = L(a);
          if (
            (o("WALogger").LOG(
              d ||
                (d = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: AB prop set to '",
                  "', validated variant: '",
                  "'",
                ])),
              String(a),
              i,
            ),
            !f.has(i))
          )
            return (
              o("WALogger").LOG(
                m ||
                  (m = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: Variant '",
                    "' not available, using default loader",
                  ])),
                i,
              ),
              k(_, e, t)
            );
          var l = C(),
            s = E(i);
          if (s != null && n("cr:12201") != null)
            try {
              return yield n("cr:12201").tryLoadLabVariant(s, l);
            } catch (n) {
              return (
                o("WALogger").ERROR(
                  p ||
                    (p = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: Failed to load variant '",
                      "': ",
                      ", falling back to default",
                    ])),
                  i,
                  String(n),
                ),
                k(_, e, t)
              );
            }
          return k(i, e, t, l);
        })),
        D.apply(this, arguments)
      );
    }
    l.loadVoipWasmVariant = T;
  },
  98,
);
