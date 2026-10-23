__d(
  "WAWebCrashAnnotations",
  [
    "WALogger",
    "WAWebBuildConstants",
    "WAWebEnvironment",
    "WAWebLogForCrash",
    "WAWebSafeCrashAnnotation",
    "WAWebTemporaryStorage",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = "wa_crash_recent_load_times",
      c = 6e5,
      d = 20,
      m = 60 * 1e3,
      p = { isSystem: !0 },
      _ = 1024 * 1024 * 1024;
    function f() {
      o("WAWebLogForCrash").onLogForCrashReady(function () {
        h();
      });
    }
    function g() {
      o("WAWebSafeCrashAnnotation").runCrashAnnotationSafely(
        "wa:loadCount",
        function () {
          var e = v();
          o("WAWebLogForCrash").onLogForCrashReady(function () {
            return o("WAWebSafeCrashAnnotation").runCrashAnnotationSafely(
              "wa:loadCount",
              function () {
                return o("WAWebLogForCrash").logForCrash("wa:loadCount", e);
              },
            );
          });
        },
      );
    }
    function h() {
      var e = r("WAWebEnvironment").isWindows ? "hybrid" : "web";
      (o("WAWebLogForCrash").logForCrash("subplatform", e),
        r("WAWebEnvironment").isWindows &&
          o("WAWebSafeCrashAnnotation").runCrashAnnotationSafely(
            "wa:windowsBuild",
            function () {
              var e;
              return o("WAWebLogForCrash").logForCrash(
                "wa:windowsBuild",
                (e = o("WAWebBuildConstants").getWindowsBuild()) != null
                  ? e
                  : "unknown",
              );
            },
          ),
        b(),
        document.addEventListener("prerenderingchange", b, { once: !0 }),
        y(),
        self.setInterval(y, m));
    }
    function y() {
      o("WAWebSafeCrashAnnotation").runCrashAnnotationSafely(
        "used_js_heap_size",
        function () {
          var e = R(self.performance, "memory");
          (C("used_js_heap_size", R(e, "usedJSHeapSize")),
            C("js_heap_size_limit", R(e, "jsHeapSizeLimit")));
          var t = R(navigator, "deviceMemory");
          C("device_memory", typeof t == "number" ? t * _ : void 0);
        },
      );
    }
    function C(e, t) {
      typeof t == "number" && o("WAWebLogForCrash").logForCrash(e, t, p);
    }
    function b() {
      o("WAWebSafeCrashAnnotation").runCrashAnnotationSafely(
        "wa:nav",
        function () {
          var e,
            t =
              (e = self.performance) == null ||
              e.getEntriesByType == null ||
              (e = e.getEntriesByType("navigation")) == null
                ? void 0
                : e[0],
            n = document,
            r = R(t, "activationStart");
          o("WAWebLogForCrash").logForCrash(
            "wa:nav",
            JSON.stringify({
              type: R(t, "type"),
              act: typeof r == "number" && r > 0 ? Math.round(r) : void 0,
              pre: R(n, "prerendering") === !0 ? 1 : void 0,
              disc: R(n, "wasDiscarded") === !0 ? 1 : void 0,
              vis: document.visibilityState,
            }),
          );
        },
      );
    }
    function v() {
      var t = Date.now(),
        n = []
          .concat(S(), [t])
          .filter(function (e) {
            return e <= t && t - e < c;
          })
          .slice(-d);
      try {
        r("WAWebTemporaryStorage").setItem(u, JSON.stringify(n));
      } catch (t) {
        o("WALogger").WARN(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "[crash-annotations] failed to store recent load times: ",
              "",
            ])),
          t,
        );
      }
      return n.length;
    }
    function S() {
      try {
        var e,
          t = JSON.parse(
            (e = r("WAWebTemporaryStorage").getItem(u)) != null ? e : "[]",
          );
        return Array.isArray(t)
          ? t.filter(function (e) {
              return typeof e == "number";
            })
          : [];
      } catch (e) {
        return (
          o("WALogger").WARN(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "[crash-annotations] failed to read recent load times: ",
                "",
              ])),
            e,
          ),
          []
        );
      }
    }
    function R(e, t) {
      return e != null && typeof e == "object" ? e[t] : void 0;
    }
    function L(e) {
      o("WAWebLogForCrash").onLogForCrashReady(function () {
        o("WAWebLogForCrash").logForCrash(
          "wa:voipBootstrapMode",
          e ? "pre-init" : "legacy-pj",
        );
      });
    }
    ((l.initCrashAnnotations = f),
      (l.initRecentLoadCrashAnnotation = g),
      (l.logVoipWorkerBootstrapModeForCrash = L));
  },
  98,
);
