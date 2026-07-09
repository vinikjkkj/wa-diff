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
      g = 20,
      h = 0;
    function y() {
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
                  "voip: ThreadPoolManager: Using on-demand worker startup with target pool size ",
                  "",
                ])),
              t,
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
      return { pthreadPoolSizeOverride: y() };
    }
    function b(e) {
      return v.apply(this, arguments);
    }
    function v() {
      return (
        (v = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield r("JSResourceForInteraction")("WAWebVoipWebWasmLoader")
            .__setRef("WAWebVoipWebWasmVariantLoader")
            .load();
          return t(e != null ? e : C());
        })),
        v.apply(this, arguments)
      );
    }
    function S(e) {
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
    function R(e) {
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
    function L(e, t) {
      return E.apply(this, arguments);
    }
    function E() {
      return (
        (E = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          return b(t);
        })),
        E.apply(this, arguments)
      );
    }
    function k() {
      return I.apply(this, arguments);
    }
    function I() {
      return (
        (I = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = o("WAWebABPropsConfigs").ABPropConfigs
            .web_voip_load_wasm_variant;
          if (e == null) return b();
          var t = null;
          try {
            t = o("WAWebABProps").getABPropConfigValue(
              "web_voip_load_wasm_variant",
            );
          } catch (e) {
            return b();
          }
          if (t == null) return b();
          var r = S(t);
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
              b()
            );
          var a = C();
          try {
            var i = R(r);
            return i != null && n("cr:12201") != null
              ? yield n("cr:12201").tryLoadLabVariant(i, a)
              : L(r, a);
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
              b(a)
            );
          }
        })),
        I.apply(this, arguments)
      );
    }
    function T() {
      return _;
    }
    ((l.loadVoipWasmVariant = k), (l.getVoipWasmVariant = T));
  },
  98,
);
