__d(
  "DataCollector",
  [
    "CometBugReportStateUtils",
    "Env",
    "ErrorPubSub",
    "FBRTCBugReportStateUtils",
    "LogHistory",
    "MediaStream",
    "MessagingBugReportStateUtils",
    "ModuleDependencies",
    "SharedWorkerBugReportUtils",
    "URI",
    "VideoPlayerBugReportConfigStateUtils",
    "WorkGalahadBugReportStateUtils",
    "asyncToGeneratorRuntime",
    "ifRequired",
    "performance",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d = {};
    function m(e) {
      try {
        var t, n;
        return typeof e.toString == "function" &&
          e.toString !== Object.prototype.toString
          ? "[object toString='" + e.toString() + "']"
          : "[object " +
              ((t = (n = e.constructor) == null ? void 0 : n.name) != null
                ? t
                : "Unknown") +
              "]";
      } catch (e) {
        return "Failed to stringify object";
      }
    }
    function p(e) {
      var t = new Set();
      return JSON.stringify(e, function (e, n) {
        return typeof r("MediaStream") != "undefined" &&
          n instanceof r("MediaStream")
          ? "[mediaStream id=" + n.id + "]"
          : typeof n == "function"
            ? "[function]"
            : typeof n == "object" && n != null
              ? n.constructor === Array ||
                n.constructor === Object ||
                n.constructor === Set ||
                n.constructor === Map
                ? t.has(n)
                  ? "[circular reference toString='" + m(n) + "']"
                  : (t.add(n),
                    n.constructor === Map || n.constructor === Set
                      ? Array.from(n)
                      : n)
                : m(n)
              : n;
      });
    }
    Object.assign(d, {
      stringify: p,
      _metadata: {},
      _logs: {},
      addMetadata: function (t) {
        Object.assign(d._metadata, t);
      },
      addLog: function (t, n) {
        d._logs[t] = n;
      },
      getMetadata: function () {
        return d._metadata;
      },
      getLogsStats: function () {
        var e = {};
        return (
          Object.entries(d._logs).forEach(function (t) {
            var n = t[0],
              r = t[1];
            e[n] = { size: p(r).length };
          }),
          e
        );
      },
      collectMetadata: function () {
        return (
          d.addMetadata({
            URI: (e || (e = r("URI"))).getRequestURI().toString(),
            UserAgent: navigator.userAgent,
            ScriptPaths: d.getPageHistory(),
          }),
          p(d._metadata)
        );
      },
      collectBaseLogs: function () {
        d.addLog("browser_performance", d._getBrowserPerformanceLogs());
        var e = {
          Env: JSON.stringify(s || (s = r("Env"))),
          errors: (u || (u = r("ErrorPubSub"))).history,
          ScriptPaths: d.getPageHistory(),
          ModuleDependencies: r("ModuleDependencies").getNotLoadedModules(),
        };
        (d.addLog("jslogger", e),
          o("LogHistory").getEntries().length > 0 &&
            d.addLog(
              "Log History",
              o("LogHistory").formatEntries(o("LogHistory").getEntries()),
            ),
          r("ifRequired")("LSLogHistory", function (e) {
            try {
              d.addLog("lightspeed_web", e.getEntries().join("\n"));
            } catch (e) {
              d.addLog("lightspeed_web", { fetchError: e });
            }
          }));
        try {
          d.addLog(
            "messenger_state",
            o("MessagingBugReportStateUtils").getStateSnapshot(),
          );
        } catch (e) {
          d.addLog("messenger_state", { fetchError: e });
        }
        try {
          d.addLog(
            "rtweb_state",
            o("FBRTCBugReportStateUtils").getStateSnapshot(),
          );
        } catch (e) {
          d.addLog("rtweb_state", { fetchError: e });
        }
        try {
          d.addLog(
            "galahad_state",
            o("WorkGalahadBugReportStateUtils").getStateSnapshot(),
          );
        } catch (e) {
          d.addLog("galahad_state", { fetchError: e });
        }
        try {
          d.addLog(
            "comet_state",
            o("CometBugReportStateUtils").getStateSnapshot(),
          );
        } catch (e) {
          d.addLog("comet_state", { fetchError: e });
        }
        try {
          d.addLog(
            "shared_worker_state",
            o("SharedWorkerBugReportUtils").getSharedWorkerState(),
          );
        } catch (e) {
          d.addLog("shared_worker_state", { fetchError: e });
        }
        try {
          d.addLog(
            "video_player_config_state",
            o("VideoPlayerBugReportConfigStateUtils").getStateSnapshot(),
          );
        } catch (e) {
          d.addLog("video_player_config_state", { fetchError: e });
        }
      },
      collectFullAsyncBaseLogs: (function () {
        var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          d.collectBaseLogs();
          try {
            yield r("ifRequired")(
              "MAWMainThreadLogger",
              (function () {
                var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                  function* (e) {
                    var t = yield e.getEntries();
                    d.addLog("armadillo_web_log", e.formatEntries(t));
                  },
                );
                return function (t) {
                  return e.apply(this, arguments);
                };
              })(),
              n("asyncToGeneratorRuntime").asyncToGenerator(function* () {}),
            );
          } catch (e) {
            d.addLog(
              "armadillo_web_log",
              [
                new Date().toISOString(),
                "error",
                "LOGGER",
                "Error formatting log: " + (e.toString() || ""),
              ].join(" | "),
            );
          }
          try {
            var e = yield o("CometBugReportStateUtils").getAsyncStateSnapshot();
            d.addLog("comet_state", e);
          } catch (e) {
            d.addLog("comet_state", { fetchError: e });
          }
        });
        function t() {
          return e.apply(this, arguments);
        }
        return t;
      })(),
      collectLogs: function () {
        return (d.collectBaseLogs(), p(d._logs));
      },
      collectFullAsyncLogs: (function () {
        var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          return (yield d.collectFullAsyncBaseLogs(), p(d._logs));
        });
        function t() {
          return e.apply(this, arguments);
        }
        return t;
      })(),
      _getBrowserPerformanceLogs: function () {
        if (!(c || (c = r("performance"))).getEntriesByType) return null;
        var e = (c || (c = r("performance")))
          .getEntriesByType("resource")
          .slice(-500)
          .map(function (e) {
            return {
              decodedBodySize: e.decodedBodySize,
              duration: e.duration,
              encodedBodySize: e.encodedBodySize,
              entryType: e.entryType,
              fetchStart: e.fetchStart,
              initiatorType: e.initiatorType,
              name: e.name,
              redirectEnd: e.redirectEnd,
              redirectStart: e.redirectStart,
              responseEnd: e.responseEnd,
              responseStart: e.responseStart,
              responseStatus: e.responseStatus,
              startTime: e.startTime,
              transferSize: e.transferSize,
              workerStart: e.workerStart,
            };
          });
        return JSON.stringify(e);
      },
      getPageHistory: function () {
        return [t._script_path];
      },
      reset: function () {
        ((d._logs = {}), (d._metadata = {}));
      },
    });
    var _ = d;
    l.default = _;
  },
  98,
);
