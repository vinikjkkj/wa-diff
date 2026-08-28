__d(
  "BrowserToolsVisualCompletionInterop",
  ["BrowserToolsVisualCompletionData", "WebAPIs", "vc-tracker"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = null,
      s = null,
      u = null,
      c = null;
    (r("vc-tracker").VisualCompletionTraceObserver.subscribe(function (t) {
      var n;
      if (s !== t) {
        var r, a;
        ((s = t),
          (r = e) == null || r.restoreHiddenElements(),
          (a = s) == null ||
            a.elements.forEach(function (e, t) {
              var n = o("WebAPIs").derefOnlyAttachedElement(e.element);
              if (u && n && !e.reactStack) {
                var r = u(n);
                if (r != null) {
                  var a,
                    i = r.indexOf("HeroPagelet");
                  (i >= 0 && r.splice(i),
                    (a = s) != null &&
                      a.elements[t] &&
                      (s.elements[t].reactStack = r));
                }
              }
            }));
      }
      (n = e) == null || n.sendMetricsUpdate();
    }),
      r("vc-tracker").VisualCompletionTraceObserver.subscribeStart(
        function (t) {
          ((s = null), e && e.sendMetricsUpdate());
        },
      ));
    var d = (function () {
      function t(t) {
        var n = this;
        ((this.$1 = function (e, t) {
          switch (e) {
            case "init": {
              n.$3();
              break;
            }
            case "request_metrics": {
              n.sendMetricsUpdate();
              break;
            }
            case "draw_at_latency": {
              n.$2(t);
              break;
            }
            case "get_hide_nub": {
              n.$5();
              break;
            }
            case "set_hide_nub": {
              (n.$4(t), n.$5());
              break;
            }
            case "vc_object_metrics": {
              n.$6(t);
              break;
            }
            default:
              break;
          }
        }),
          (this.connection = t),
          this.connection.onMessage(this.$1),
          t.onDisconnected(function () {
            (n.restoreHiddenElements(), (e = null));
          }));
      }
      t.get = function () {
        return e;
      };
      var n = t.prototype;
      return (
        (n.$2 = function (t) {
          var e,
            n = (e = s) == null ? void 0 : e.elements;
          typeof t != "number" ||
            n == null ||
            n.forEach(function (e) {
              var n = o("WebAPIs").derefOnlyAttachedElement(e.element);
              n &&
                (e.latency > t
                  ? (n.style.visibility = "hidden")
                  : (n.style.visibility = ""));
            });
        }),
        (n.restoreHiddenElements = function () {
          s &&
            s.elements.forEach(function (e) {
              var t = o("WebAPIs").derefOnlyAttachedElement(e.element);
              t && (t.style.visibility = "");
            });
        }),
        (n.sendMetricsUpdate = function () {
          this.connection.postMessage(
            "metrics_update",
            s ? o("BrowserToolsVisualCompletionData").toSerializable(s) : null,
          );
        }),
        (n.$3 = function () {
          this.connection.postMessage("init", { app_id: c });
        }),
        (n.$4 = function (n) {
          localStorage.setItem(t.HIDE_NUB_PREFERENCE_KEY, String(n));
        }),
        (n.$5 = function () {
          var e = localStorage.getItem(t.HIDE_NUB_PREFERENCE_KEY) === "true";
          this.connection.postMessage("hide_nub_status", e);
        }),
        (n.$6 = function (t) {}),
        t
      );
    })();
    ((d.HIDE_NUB_PREFERENCE_KEY = "__fb_comet_visual_performance_hide_nub"),
      (d.namespace = "visual_completion"),
      (d.onConnection = function (t) {
        e = new d(t);
      }));
    function m(e) {
      ((u = e.getReactComponentStackFromDOMElement_THIS_CAN_BREAK),
        (c = e.appIdForScuba));
    }
    ((l.BrowserToolsVisualCompletionInterop = d),
      (l.BrowserToolsVisualCompletionInteropSetup = m));
  },
  98,
);
