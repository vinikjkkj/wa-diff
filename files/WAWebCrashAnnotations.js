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
    "WAWebReloadCrashAnnotations",
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
      h = null,
      y = new Map();
    function C() {
      o("WAWebLogForCrash").onLogForCrashReady(function () {
        R();
      });
    }
    function b() {
      (o("WAWebSafeCrashAnnotation").runCrashAnnotationSafely(
        "subplatform",
        function () {
          var e = r("WAWebEnvironment").isWindows ? "hybrid" : "web";
          (o("WAWebLogForCrash").onLogForCrashReady(function () {
            return o("WAWebSafeCrashAnnotation").runCrashAnnotationSafely(
              "subplatform",
              function () {
                return o("WAWebLogForCrash").logForCrash("subplatform", e);
              },
            );
          }),
            y.set("subplatform", e));
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
              (o("WAWebLogForCrash").onLogForCrashReady(function () {
                return o("WAWebSafeCrashAnnotation").runCrashAnnotationSafely(
                  "wa:windowsBuild",
                  function () {
                    return o("WAWebLogForCrash").logForCrash(
                      "wa:windowsBuild",
                      t,
                    );
                  },
                );
              }),
                y.set("wa:windowsBuild", t));
            }
          },
        ),
        o("WAWebAICrashAnnotationGate").runAICrashAnnotation(
          "wa:prevFail",
          function () {
            if (r("WAWebEnvironment").isWindows) {
              var e = v();
              e != null &&
                (o("WAWebLogForCrash").onLogForCrashReady(function () {
                  return o("WAWebSafeCrashAnnotation").runCrashAnnotationSafely(
                    "wa:prevFail",
                    function () {
                      return o("WAWebLogForCrash").logForCrash(
                        "wa:prevFail",
                        e,
                      );
                    },
                  );
                }),
                y.set("wa:prevFail", e));
            }
          },
        ));
    }
    function v() {
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
    function S() {
      (o("WAWebAICrashAnnotationGate").runAICrashAnnotation(
        "wa:loadCount",
        function () {
          var e = D();
          (o("WAWebLogForCrash").onLogForCrashReady(function () {
            return o("WAWebSafeCrashAnnotation").runCrashAnnotationSafely(
              "wa:loadCount",
              function () {
                return o("WAWebLogForCrash").logForCrash("wa:loadCount", e);
              },
            );
          }),
            y.set("wa:loadCount", e));
        },
      ),
        o("WAWebAICrashAnnotationGate").runAICrashAnnotation(
          "wa:reloadReason",
          function () {
            var e = o("WAWebReloadCrashAnnotations").takeReloadReasonForCrash();
            e != null &&
              (o("WAWebLogForCrash").onLogForCrashReady(function () {
                return o("WAWebSafeCrashAnnotation").runCrashAnnotationSafely(
                  "wa:reloadReason",
                  function () {
                    return o("WAWebLogForCrash").logForCrash(
                      "wa:reloadReason",
                      e,
                    );
                  },
                );
              }),
              y.set("wa:reloadReason", e));
          },
        ));
    }
    function R() {
      (y.forEach(function (e, t) {
        return (
          t === "subplatform"
            ? o("WAWebSafeCrashAnnotation").runCrashAnnotationSafely
            : o("WAWebAICrashAnnotationGate").runAICrashAnnotation
        )(t, function () {
          return o("WAWebLogForCrash").logForCrash(t, e);
        });
      }),
        o("WAWebAICrashAnnotationGate").runAICrashAnnotation(
          "wa:nav",
          function () {
            (T(),
              document.addEventListener("prerenderingchange", T, { once: !0 }));
          },
        ),
        (h = null),
        L(),
        self.setInterval(L, m));
    }
    function L() {
      (k(), E());
    }
    function E() {
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
    function k() {
      o("WAWebSafeCrashAnnotation").runCrashAnnotationSafely(
        "used_js_heap_size",
        function () {
          var e = $(self.performance, "memory");
          (I("used_js_heap_size", $(e, "usedJSHeapSize")),
            I("js_heap_size_limit", $(e, "jsHeapSizeLimit")));
          var t = $(navigator, "deviceMemory");
          (I("device_memory", typeof t == "number" ? t * _ : void 0),
            o("WAWebHeapCrashAnnotations").noteUsedHeapMBForCrash(
              o("WAWebHeapCrashAnnotations").readUsedHeapMB(),
            ));
        },
      );
    }
    function I(e, t) {
      typeof t == "number" && o("WAWebLogForCrash").logForCrash(e, t, p);
    }
    function T() {
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
            r = $(t, "activationStart");
          o("WAWebLogForCrash").logForCrash(
            "wa:nav",
            JSON.stringify({
              type: $(t, "type"),
              act: typeof r == "number" && r > 0 ? Math.round(r) : void 0,
              pre: $(n, "prerendering") === !0 ? 1 : void 0,
              disc: $(n, "wasDiscarded") === !0 ? 1 : void 0,
              vis: document.visibilityState,
            }),
          );
        },
      );
    }
    function D() {
      var t = Date.now(),
        n = []
          .concat(x(), [t])
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
    function x() {
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
    function $(e, t) {
      return e != null && typeof e == "object" ? e[t] : void 0;
    }
    function P(e) {
      o("WAWebLogForCrash").onLogForCrashReady(function () {
        o("WAWebLogForCrash").logForCrash(
          "wa:voipBootstrapMode",
          e ? "pre-init" : "legacy-pj",
        );
      });
    }
    ((l.initCrashAnnotations = C),
      (l.annotateCrashWithPlatform = b),
      (l.annotateCrashWithRecentLoads = S),
      (l.logVoipWorkerBootstrapModeForCrash = P));
  },
  98,
);
