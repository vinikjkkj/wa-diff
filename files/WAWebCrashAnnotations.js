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
    "WAWebNetworkCrashAnnotations",
    "WAWebReloadCrashAnnotations",
    "WAWebSafeCrashAnnotation",
    "WAWebSuspendCrashAnnotations",
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
      g = new Map([
        ["130603", "control"],
        ["130604", "rollout_test"],
        ["130605", "stage_test"],
      ]),
      h = /^([A-Za-z]{1,40})\.([A-Za-z]{1,40})\.(-?\d{1,11})\.(\d{1,11})$/,
      y = null,
      C = null,
      b = new Map();
    function v() {
      o("WAWebLogForCrash").onLogForCrashReady(function () {
        E();
      });
    }
    function S() {
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
            b.set("subplatform", e));
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
                b.set("wa:windowsBuild", t));
            }
          },
        ),
        o("WAWebAICrashAnnotationGate").runAICrashAnnotation(
          "wa:prevFail",
          function () {
            if (r("WAWebEnvironment").isWindows) {
              var e = R();
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
                b.set("wa:prevFail", e));
            }
          },
        ));
    }
    function R() {
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
      var r = h.exec(n);
      return r == null
        ? JSON.stringify({ bad: 1 })
        : JSON.stringify({
            k: r[1],
            r: r[2],
            x: Number(r[3]),
            age: Math.round(Date.now() / 1e3) - Number(r[4]),
          });
    }
    function L() {
      (o("WAWebAICrashAnnotationGate").runAICrashAnnotation(
        "wa:loadCount",
        function () {
          var e = N();
          (o("WAWebLogForCrash").onLogForCrashReady(function () {
            return o("WAWebSafeCrashAnnotation").runCrashAnnotationSafely(
              "wa:loadCount",
              function () {
                return o("WAWebLogForCrash").logForCrash("wa:loadCount", e);
              },
            );
          }),
            b.set("wa:loadCount", e));
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
              b.set("wa:reloadReason", e));
          },
        ));
    }
    function E() {
      (b.forEach(function (e, t) {
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
            (P(),
              document.addEventListener("prerenderingchange", P, { once: !0 }));
          },
        ),
        o("WAWebNetworkCrashAnnotations").rewriteNetworkStateForCrash(),
        (y = null),
        (C = null),
        k(),
        self.setInterval(k, m));
    }
    function k() {
      (x(),
        I(),
        T(),
        o("WAWebSuspendCrashAnnotations").annotateCrashWithRefreshTick(m));
    }
    function I() {
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
          e !== y &&
            (o("WAWebLogForCrash").logForCrash("wa:crashArms", e), (y = e));
        },
      );
    }
    function T() {
      o("WAWebAICrashAnnotationGate").runAICrashAnnotation(
        "wa:qeGroup",
        function () {
          var e = D();
          e == null ||
            e === C ||
            (o("WAWebLogForCrash").logForCrash("wa:qeGroup", e), (C = e));
        },
      );
    }
    function D() {
      for (var e of o("WAWebABPropsCache").getAllABPropsMap().values()) {
        var t = e.configExpoKey,
          n = t == null ? null : g.get(t);
        if (n != null) return n;
      }
      return null;
    }
    function x() {
      o("WAWebSafeCrashAnnotation").runCrashAnnotationSafely(
        "used_js_heap_size",
        function () {
          var e = w(self.performance, "memory");
          ($("used_js_heap_size", w(e, "usedJSHeapSize")),
            $("js_heap_size_limit", w(e, "jsHeapSizeLimit")));
          var t = w(navigator, "deviceMemory");
          ($("device_memory", typeof t == "number" ? t * _ : void 0),
            o("WAWebHeapCrashAnnotations").noteUsedHeapMBForCrash(
              o("WAWebHeapCrashAnnotations").readUsedHeapMB(),
            ));
        },
      );
    }
    function $(e, t) {
      typeof t == "number" && o("WAWebLogForCrash").logForCrash(e, t, p);
    }
    function P() {
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
            r = w(t, "activationStart");
          o("WAWebLogForCrash").logForCrash(
            "wa:nav",
            JSON.stringify({
              type: w(t, "type"),
              act: typeof r == "number" && r > 0 ? Math.round(r) : void 0,
              pre: w(n, "prerendering") === !0 ? 1 : void 0,
              disc: w(n, "wasDiscarded") === !0 ? 1 : void 0,
              vis: document.visibilityState,
            }),
          );
        },
      );
    }
    function N() {
      var t = Date.now(),
        n = []
          .concat(M(), [t])
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
    function M() {
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
    function w(e, t) {
      return e != null && typeof e == "object" ? e[t] : void 0;
    }
    function A(e) {
      o("WAWebLogForCrash").onLogForCrashReady(function () {
        o("WAWebLogForCrash").logForCrash(
          "wa:voipBootstrapMode",
          e ? "pre-init" : "legacy-pj",
        );
      });
    }
    ((l.initCrashAnnotations = v),
      (l.annotateCrashWithPlatform = S),
      (l.annotateCrashWithRecentLoads = L),
      (l.logVoipWorkerBootstrapModeForCrash = A));
  },
  98,
);
