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
      f,
      g,
      h = "prod-nonlab",
      y = new Set(["prod-nonlab", "prod-lab", "prod-labvideo"]),
      C = 20,
      b = 0;
    function v(t) {
      if (t)
        return (
          o("WALogger").LOG(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "voip: ThreadPoolManager: Using legacy pthread pool size ",
                " (WebKit browser)",
              ])),
            C,
          ),
          C
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
            b
          );
      } catch (e) {}
      return (
        o("WALogger").LOG(
          u ||
            (u = babelHelpers.taggedTemplateLiteralLoose([
              "voip: ThreadPoolManager: Using legacy pthread pool size ",
              "",
            ])),
          C,
        ),
        C
      );
    }
    function S() {
      var e = o("WAWebVoipGatingUtils").isWebKitBrowser(),
        t = v(e),
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
    async function R(e) {
      o(
        "WAWebCoreActionsODS",
      ).logCallVoipInitWasmArtifactUnversionedLoadAttempt();
      var t = await r("JSResourceForInteraction")("WAWebVoipWebWasmLoader")
          .__setRef("WAWebVoipWebWasmVariantLoader")
          .load(),
        n = await t(e != null ? e : S());
      return (
        o(
          "WAWebCoreActionsODS",
        ).logCallVoipInitWasmArtifactUnversionedLoadSuccess(),
        n
      );
    }
    async function L(e, t) {
      o(
        "WAWebCoreActionsODS",
      ).logCallVoipInitWasmArtifactContentAddressedLoadAttempt();
      var n = await r("JSResourceForInteraction")(
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
            c ||
              (c = babelHelpers.taggedTemplateLiteralLoose([
                "voip: pinned worker glue bx lookup failed; loading unpinned: ",
                "",
              ])),
            String(a),
          ))
        : i &&
          (o(
            "WAWebCoreActionsODS",
          ).logCallVoipInitWasmArtifactWorkerGluePinnedLoadAttempt(),
          k(Reflect.get(n, "PINNED_WORKER_GLUE_URL")));
      var l = await n(
        babelHelpers.extends({}, t != null ? t : S(), { pinWorkerGlue: i }),
      );
      return (
        o(
          "WAWebCoreActionsODS",
        ).logCallVoipInitWasmArtifactContentAddressedLoadSuccess(),
        l
      );
    }
    var E = new Set();
    function k(e) {
      if (typeof e != "string") {
        (o(
          "WAWebCoreActionsODS",
        ).logCallVoipInitWasmArtifactWorkerGluePrefetchSkipped(),
          o("WALogger").LOG(
            d ||
              (d = babelHelpers.taggedTemplateLiteralLoose([
                "voip: pinned worker glue prefetch skipped; URL export is ",
                "",
              ])),
            typeof e,
          ));
        return;
      }
      E.has(e) ||
        (E.add(e),
        o(
          "WAWebCoreActionsODS",
        ).logCallVoipInitWasmArtifactWorkerGluePrefetchAttempt(),
        fetch(e, {
          credentials: "same-origin",
          mode: "no-cors",
          priority: "low",
        })
          .then(function (e) {
            return e.arrayBuffer();
          })
          .catch(function (e) {
            (o(
              "WAWebCoreActionsODS",
            ).logCallVoipInitWasmArtifactWorkerGluePrefetchFailed(),
              o("WALogger").LOG(
                m ||
                  (m = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: pinned worker glue prefetch failed: ",
                    "",
                  ])),
                String(e),
              ));
          }));
    }
    function I(e) {
      if (typeof e == "string") {
        for (var t of y) if (e === t) return t;
      }
      return (
        e !== h &&
          o("WALogger").ERROR(
            p ||
              (p = babelHelpers.taggedTemplateLiteralLoose([
                "voip: Invalid WASM variant '",
                "', falling back to '",
                "'",
              ])),
            String(e),
            h,
          ),
        h
      );
    }
    function T(e) {
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
    async function D(e, t, n, r) {
      return t ? L(n, r) : R(r);
    }
    async function x(e, t) {
      (e === void 0 && (e = !1), t === void 0 && (t = !1));
      var r = o("WAWebABPropsConfigs").ABPropConfigs.web_voip_load_wasm_variant;
      if (r == null) return D(h, e, t);
      var a = null;
      try {
        a = o("WAWebABProps").getABPropConfigValue(
          "web_voip_load_wasm_variant",
        );
      } catch (n) {
        return D(h, e, t);
      }
      if (a == null) return D(h, e, t);
      var i = I(a);
      if (
        (o("WALogger").LOG(
          _ ||
            (_ = babelHelpers.taggedTemplateLiteralLoose([
              "voip: AB prop set to '",
              "', validated variant: '",
              "'",
            ])),
          String(a),
          i,
        ),
        !y.has(i))
      )
        return (
          o("WALogger").LOG(
            f ||
              (f = babelHelpers.taggedTemplateLiteralLoose([
                "voip: Variant '",
                "' not available, using default loader",
              ])),
            i,
          ),
          D(h, e, t)
        );
      var l = S(),
        s = T(i);
      if (s != null && n("cr:12201") != null)
        try {
          return await n("cr:12201").tryLoadLabVariant(s, l);
        } catch (n) {
          return (
            o("WALogger").ERROR(
              g ||
                (g = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: Failed to load variant '",
                  "': ",
                  ", falling back to default",
                ])),
              i,
              String(n),
            ),
            D(h, e, t)
          );
        }
      return D(i, e, t, l);
    }
    l.loadVoipWasmVariant = x;
  },
  98,
);
