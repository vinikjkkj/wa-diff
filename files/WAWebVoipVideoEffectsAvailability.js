__d(
  "WAWebVoipVideoEffectsAvailability",
  [
    "WALogger",
    "WAWebABProps",
    "WAWebVoipVideoEffectsAssetsConfig",
    "WAWebVoipWasmSimdSupport",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = /swiftshader|llvmpipe|softpipe|basic render|software/i,
      u = 4,
      c = 3e4,
      d = null,
      m = null,
      p = !1,
      _ = new Set();
    function f(e) {
      var t = e.getExtension("WEBGL_debug_renderer_info"),
        n = e.getParameter(t != null ? t.UNMASKED_RENDERER_WEBGL : e.RENDERER);
      return typeof n == "string" && s.test(n);
    }
    function g() {
      var e = self.OffscreenCanvas,
        t = self.navigator.hardwareConcurrency;
      if (
        (typeof t == "number" && t < u) ||
        typeof self.VideoFrame != "function" ||
        typeof self.Worker != "function" ||
        typeof e != "function" ||
        !o("WAWebVoipWasmSimdSupport").supportsWasmSimd()
      )
        return "unsupported";
      try {
        var n = new e(1, 1).getContext("webgl2", {
          failIfMajorPerformanceCaveat: !0,
        });
        if (n == null) return "no_context";
        try {
          return f(n) ? "unsupported" : "supported";
        } finally {
          var r;
          (r = n.getExtension("WEBGL_lose_context")) == null || r.loseContext();
        }
      } catch (e) {
        return "no_context";
      }
    }
    function h() {
      var e = d,
        t = m;
      if (e != null && (t == null || self.performance.now() < t)) return e;
      var n = g(),
        r = n === "supported";
      return (
        (d = r),
        (m = n === "no_context" ? self.performance.now() + c : null),
        e === !1 && r && C(),
        r
      );
    }
    function y() {
      var e = r("WAWebVoipVideoEffectsAssetsConfig");
      return (
        e.model_url !== "" &&
        e.wasm_binary_url !== "" &&
        e.wasm_loader_url !== ""
      );
    }
    function C() {
      _.forEach(function (t) {
        try {
          t();
        } catch (t) {
          o("WALogger")
            .ERROR(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [effects] an availability listener failed",
                ])),
            )
            .catching(r("getErrorSafe")(t))
            .sendLogs("voip-effects-listener-failed");
        }
      });
    }
    function b() {
      return o("WAWebABProps").getABPropConfigValue(
        "web_voip_video_effects",
      ) !== !0 ||
        p ||
        !y()
        ? !1
        : h();
    }
    function v() {
      ((p = !0), C());
    }
    function S(e) {
      return (
        _.add(e),
        function () {
          _.delete(e);
        }
      );
    }
    function R() {
      return p;
    }
    ((l.isVideoEffectsAvailable = b),
      (l.markVideoEffectsTooSlow = v),
      (l.subscribeToVideoEffectsAvailability = S),
      (l.isVideoEffectsTooSlow = R));
  },
  98,
);
