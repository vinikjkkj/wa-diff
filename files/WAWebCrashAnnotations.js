__d(
  "WAWebCrashAnnotations",
  [
    "WALogger",
    "WAWebABPropsCache",
    "WAWebABPropsConfigs",
    "WAWebAICrashAnnotationGate",
    "WAWebBuildConstants",
    "WAWebEnvironment",
    "WAWebHeapCrashAnnotations",
    "WAWebLogForCrash",
    "WAWebSafeCrashAnnotation",
    "WAWebTemporaryStorage",
    "WAWebWindowsQueryParams",
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
      _ = 1024 * 1024 * 1024,
      f = ["web_syncd_individual_mutation_index_lookup"],
      g = /^([A-Za-z]{1,40})\.([A-Za-z]{1,40})\.(-?\d{1,11})\.(\d{1,11})$/,
      h = null;
    function y() {
      o("WAWebLogForCrash").onLogForCrashReady(function () {
        S();
      });
    }
    function C() {
      (o("WAWebSafeCrashAnnotation").runCrashAnnotationSafely(
        "subplatform",
        function () {
          return o("WAWebLogForCrash").onLogForCrashReady(function () {
            return o("WAWebSafeCrashAnnotation").runCrashAnnotationSafely(
              "subplatform",
              function () {
                return o("WAWebLogForCrash").logForCrash(
                  "subplatform",
                  r("WAWebEnvironment").isWindows ? "hybrid" : "web",
                );
              },
            );
          });
        },
      ),
        o("WAWebAICrashAnnotationGate").runAICrashAnnotation(
          "wa:windowsBuild",
          function () {
            var e;
            if (r("WAWebEnvironment").isWindows) {
              var t =
                (e = o("WAWebBuildConstants").getWindowsBuild()) != null
                  ? e
                  : "unknown";
              o("WAWebLogForCrash").onLogForCrashReady(function () {
                return o("WAWebSafeCrashAnnotation").runCrashAnnotationSafely(
                  "wa:windowsBuild",
                  function () {
                    return o("WAWebLogForCrash").logForCrash(
                      "wa:windowsBuild",
                      t,
                    );
                  },
                );
              });
            }
          },
        ),
        o("WAWebAICrashAnnotationGate").runAICrashAnnotation(
          "wa:prevFail",
          function () {
            if (r("WAWebEnvironment").isWindows) {
              var e = b();
              e != null &&
                o("WAWebLogForCrash").onLogForCrashReady(function () {
                  return o("WAWebSafeCrashAnnotation").runCrashAnnotationSafely(
                    "wa:prevFail",
                    function () {
                      return o("WAWebLogForCrash").logForCrash(
                        "wa:prevFail",
                        e,
                      );
                    },
                  );
                });
            }
          },
        ));
    }
    function b() {
      var e,
        t,
        n =
          (e = new URLSearchParams(
            (t = self.location.search) != null ? t : "",
          ).get(
            o("WAWebWindowsQueryParams").WindowsQueryParam
              .PREV_RENDERER_FAILURE,
          )) != null
            ? e
            : "";
      if (n === "") return null;
      var r = g.exec(n);
      return r == null
        ? JSON.stringify({ bad: 1 })
        : JSON.stringify({
            k: r[1],
            r: r[2],
            x: Number(r[3]),
            age: Math.round(Date.now() / 1e3) - Number(r[4]),
          });
    }
    function v() {
      o("WAWebAICrashAnnotationGate").runAICrashAnnotation(
        "wa:loadCount",
        function () {
          var e = T();
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
    function S() {
      (o("WAWebAICrashAnnotationGate").runAICrashAnnotation(
        "wa:nav",
        function () {
          (I(),
            document.addEventListener("prerenderingchange", I, { once: !0 }));
        },
      ),
        (h = null),
        R(),
        self.setInterval(R, m));
    }
    function R() {
      (E(), L());
    }
    function L() {
      o("WAWebAICrashAnnotationGate").runAICrashAnnotation(
        "wa:crashArms",
        function () {
          var e =
            f
              .flatMap(function (e) {
                var t = o("WAWebABPropsConfigs").ABPropConfigs[e],
                  n = t[0],
                  r = t[2],
                  a = o("WAWebABPropsCache").peekABPropConfigValue(e),
                  i = a.value;
                return i === r
                  ? []
                  : [n + "=" + (typeof i == "boolean" ? Number(i) : String(i))];
              })
              .join(",") || "-";
          e !== h &&
            (o("WAWebLogForCrash").logForCrash("wa:crashArms", e), (h = e));
        },
      );
    }
    function E() {
      o("WAWebSafeCrashAnnotation").runCrashAnnotationSafely(
        "used_js_heap_size",
        function () {
          var e = x(self.performance, "memory");
          (k("used_js_heap_size", x(e, "usedJSHeapSize")),
            k("js_heap_size_limit", x(e, "jsHeapSizeLimit")));
          var t = x(navigator, "deviceMemory");
          (k("device_memory", typeof t == "number" ? t * _ : void 0),
            o("WAWebHeapCrashAnnotations").noteUsedHeapMBForCrash(
              o("WAWebHeapCrashAnnotations").readUsedHeapMB(),
            ));
        },
      );
    }
    function k(e, t) {
      typeof t == "number" && o("WAWebLogForCrash").logForCrash(e, t, p);
    }
    function I() {
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
            r = x(t, "activationStart");
          o("WAWebLogForCrash").logForCrash(
            "wa:nav",
            JSON.stringify({
              type: x(t, "type"),
              act: typeof r == "number" && r > 0 ? Math.round(r) : void 0,
              pre: x(n, "prerendering") === !0 ? 1 : void 0,
              disc: x(n, "wasDiscarded") === !0 ? 1 : void 0,
              vis: document.visibilityState,
            }),
          );
        },
      );
    }
    function T() {
      var t = Date.now(),
        n = []
          .concat(D(), [t])
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
    function D() {
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
    function x(e, t) {
      return e != null && typeof e == "object" ? e[t] : void 0;
    }
    function $(e) {
      o("WAWebLogForCrash").onLogForCrashReady(function () {
        o("WAWebLogForCrash").logForCrash(
          "wa:voipBootstrapMode",
          e ? "pre-init" : "legacy-pj",
        );
      });
    }
    ((l.initCrashAnnotations = y),
      (l.annotateCrashWithPlatform = C),
      (l.annotateCrashWithRecentLoads = v),
      (l.logVoipWorkerBootstrapModeForCrash = $));
  },
  98,
);
