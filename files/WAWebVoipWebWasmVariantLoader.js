__d(
  "WAWebVoipWebWasmVariantLoader",
  [
    "JSResourceForInteraction",
    "WALogger",
    "WAWebABProps",
    "WAWebABPropsConfigs",
    "WAWebVoipGatingUtils",
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
      g = 20;
    function h() {
      if (o("WAWebVoipGatingUtils").isWebKitBrowser())
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
        var t = o("WAWebABProps").getABPropConfigValue(
          "web_voip_dynamic_thread_preallocate_count",
        );
        if (typeof t == "number" && t > 0)
          return (
            o("WALogger").LOG(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: ThreadPoolManager: Using dynamic thread pool with initial size ",
                  "",
                ])),
              t,
            ),
            t
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
    function y() {
      return C.apply(this, arguments);
    }
    function C() {
      return (
        (C = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = yield r("JSResourceForInteraction")("WAWebVoipWebWasmLoader")
              .__setRef("WAWebVoipWebWasmVariantLoader")
              .load(),
            t = h();
          return e({ pthreadPoolSizeOverride: t });
        })),
        C.apply(this, arguments)
      );
    }
    function b(e) {
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
    function v(e) {
      return S.apply(this, arguments);
    }
    function S() {
      return (
        (S = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          return y();
        })),
        S.apply(this, arguments)
      );
    }
    function R() {
      return L.apply(this, arguments);
    }
    function L() {
      return (
        (L = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = o("WAWebABPropsConfigs").ABPropConfigs
            .web_voip_load_wasm_variant;
          if (e == null) return y();
          var t = null;
          try {
            t = o("WAWebABProps").getABPropConfigValue(
              "web_voip_load_wasm_variant",
            );
          } catch (e) {
            return y();
          }
          if (t == null) return y();
          var r = b(t);
          if (
            (o("WALogger").LOG(
              d ||
                (d = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: AB prop set to '",
                  "', validated variant: '",
                  "'",
                ])),
              String(t),
              r,
            ),
            !f.has(r))
          )
            return (
              o("WALogger").LOG(
                m ||
                  (m = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: Variant '",
                    "' not available, using default loader",
                  ])),
                r,
              ),
              y()
            );
          try {
            if (n("cr:12201") != null) {
              var a = yield n("cr:12201").tryLoadLabVariant(r);
              if (a != null) return a;
            }
            return v(r);
          } catch (e) {
            return (
              o("WALogger").ERROR(
                p ||
                  (p = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: Failed to load variant '",
                    "': ",
                    ", falling back to default",
                  ])),
                r,
                String(e),
              ),
              y()
            );
          }
        })),
        L.apply(this, arguments)
      );
    }
    function E() {
      return _;
    }
    ((l.loadVoipWasmVariant = R), (l.getVoipWasmVariant = E));
  },
  98,
);
