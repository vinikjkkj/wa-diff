__d(
  "WAWebVoipWebWasmVariantLoader",
  [
    "JSResourceForInteraction",
    "WALogger",
    "WAWebABProps",
    "WAWebABPropsConfigs",
    "WAWebVoipGatingUtils",
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
    async function b(e) {
      var t = await r("JSResourceForInteraction")("WAWebVoipWebWasmLoader")
        .__setRef("WAWebVoipWebWasmVariantLoader")
        .load();
      return t(e != null ? e : C());
    }
    function v(e) {
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
    function S(e) {
      return e === "prod-nonlab"
        ? null
        : e === "prod-lab"
          ? "prod-lab"
          : e === "prod-labvideo"
            ? "prod-labvideo"
            : (function () {
                throw Error(
                  "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                    e,
                );
              })();
    }
    async function R(e, t) {
      return b(t);
    }
    async function L() {
      var e = o("WAWebABPropsConfigs").ABPropConfigs.web_voip_load_wasm_variant;
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
      var r = v(t);
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
        var i = S(r);
        return i != null && n("cr:12201") != null
          ? await n("cr:12201").tryLoadLabVariant(i, a)
          : R(r, a);
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
    }
    function E() {
      return _;
    }
    ((l.loadVoipWasmVariant = L), (l.getVoipWasmVariant = E));
  },
  98,
);
