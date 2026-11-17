__d(
  "WAWebVoipLazyVideoEffectsProcessor",
  [
    "JSResourceForInteraction",
    "Promise",
    "WALogger",
    "WAPromiseTimeout",
    "WAWebUserPrefsVoip",
    "WAWebVoipWaitForRequiredModule",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = 1e3,
      c = 1e3,
      d = 15e3,
      m = 1e4,
      p = null,
      _ = !1,
      f = "none",
      g = -1 / 0,
      h = -1 / 0,
      y = {
        shouldProcess: function () {
          if (p != null) return p.shouldProcess();
          var e = self.performance.now();
          return ((h = e), !_ && e - g >= u && ((g = e), b() && C()), !1);
        },
        process: function (t) {
          return p != null
            ? p.process(t)
            : (s || (s = n("Promise"))).resolve(t);
        },
        recordCallEnd: function () {
          var e;
          (e = p) == null || e.recordCallEnd();
        },
        recordCallStart: function () {
          var e;
          (e = p) == null || e.recordCallStart();
        },
      };
    function C() {
      var t = r("JSResourceForInteraction")(
          "WAWebVoipVideoEffectsProcessor",
        ).__setRef("WAWebVoipLazyVideoEffectsProcessor"),
        a = t.getModuleIfRequired();
      if (a != null) {
        p = a.videoEffectsProcessor;
        return;
      }
      if (f !== "none") {
        S();
        return;
      }
      ((_ = !0),
        o("WAPromiseTimeout")
          .promiseTimeout(t.load(), d)
          .catch(
            (function () {
              var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                function* (e) {
                  var n = yield o(
                    "WAWebVoipWaitForRequiredModule",
                  ).waitForRequiredModule(t, m);
                  if (n == null) throw e;
                  return n;
                },
              );
              return function (t) {
                return e.apply(this, arguments);
              };
            })(),
          )
          .then(function (e) {
            p = e.videoEffectsProcessor;
          })
          .catch(function (t) {
            ((_ = !1),
              (f = "unreported"),
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
              self.performance.now() - h <= c && S());
          }));
    }
    function b() {
      var e,
        t = v(),
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
    function v() {
      return r("JSResourceForInteraction")("WAWebVoipVideoEffectsState")
        .__setRef("WAWebVoipLazyVideoEffectsProcessor")
        .getModuleIfRequired();
    }
    function S() {
      var e = v();
      e == null ||
        !b() ||
        (e.stopVideoEffects("start_error", { isRepeat: f === "reported" }),
        (f = "reported"));
    }
    function R() {
      ((p = null), (_ = !1), (f = "none"), (g = -1 / 0), (h = -1 / 0));
    }
    ((l.lazyVideoEffectsProcessor = y),
      (l.resetLazyVideoEffectsProcessorForTesting = R));
  },
  98,
);
