__d(
  "WAWebVoipLazyVideoEffectsProcessor",
  [
    "JSResourceForInteraction",
    "WALogger",
    "WAPromiseTimeout",
    "WAWebUserPrefsVoip",
    "WAWebVoipWaitForRequiredModule",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = 1e3,
      u = 1e3,
      c = 15e3,
      d = 1e4,
      m = null,
      p = !1,
      _ = "none",
      f = -1 / 0,
      g = -1 / 0,
      h = {
        shouldProcess: function () {
          if (m != null) return m.shouldProcess();
          var e = self.performance.now();
          return ((g = e), !p && e - f >= s && ((f = e), C() && y()), !1);
        },
        process: function (t) {
          return m != null ? m.process(t) : Promise.resolve(t);
        },
        recordCallEnd: function () {
          var e;
          (e = m) == null || e.recordCallEnd();
        },
        recordCallStart: function () {
          var e;
          (e = m) == null || e.recordCallStart();
        },
      };
    function y() {
      var t = r("JSResourceForInteraction")(
          "WAWebVoipVideoEffectsProcessor",
        ).__setRef("WAWebVoipLazyVideoEffectsProcessor"),
        n = t.getModuleIfRequired();
      if (n != null) {
        m = n.videoEffectsProcessor;
        return;
      }
      if (_ !== "none") {
        v();
        return;
      }
      ((p = !0),
        o("WAPromiseTimeout")
          .promiseTimeout(t.load(), c)
          .catch(async function (e) {
            var n = await o(
              "WAWebVoipWaitForRequiredModule",
            ).waitForRequiredModule(t, d);
            if (n == null) throw e;
            return n;
          })
          .then(function (e) {
            m = e.videoEffectsProcessor;
          })
          .catch(function (t) {
            ((p = !1),
              (_ = "unreported"),
              o("WALogger")
                .ERROR(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [effects] could not load the effects processor",
                    ])),
                )
                .catching(r("getErrorSafe")(t))
                .sendLogs("voip-effects-processor-load-failed", {
                  sampling: 0.1,
                }),
              self.performance.now() - g <= u && v());
          }));
    }
    function C() {
      var e,
        t = b(),
        n =
          t != null
            ? t.isVideoEffectsRequested()
            : o("WAWebUserPrefsVoip").getVideoEffectsEnabled();
      if (!n) return !1;
      var a = r("JSResourceForInteraction")("WAWebVoipVideoEffectsAvailability")
        .__setRef("WAWebVoipLazyVideoEffectsProcessor")
        .getModuleIfRequired();
      return (e = a == null ? void 0 : a.isVideoEffectsAvailable()) != null
        ? e
        : !0;
    }
    function b() {
      return r("JSResourceForInteraction")("WAWebVoipVideoEffectsState")
        .__setRef("WAWebVoipLazyVideoEffectsProcessor")
        .getModuleIfRequired();
    }
    function v() {
      var e = b();
      e == null ||
        !C() ||
        (e.stopVideoEffects("start_error", { isRepeat: _ === "reported" }),
        (_ = "reported"));
    }
    l.lazyVideoEffectsProcessor = h;
  },
  98,
);
