__d(
  "CometSSRLogger",
  [
    "FBLogger",
    "SSRInjectedElements",
    "UserTimingUtils",
    "getPaintTime",
    "gkx",
    "performance",
    "performanceNow",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = "ssrInit did not run.",
      c = [];
    function d() {
      return {
        logLastSSRPayloadArrived: function () {
          c.push({ type: "logLastSSRPayloadArrived" });
        },
        logSSRFizzInit: function () {},
        logSSRIndividualPaint: function (t, n) {
          c.push({ count: n, status: t, type: "logSSRIndividualPaint" });
        },
        logSSRInjection: function (t) {
          c.push({ injectorStatus: t, type: "logSSRInjection" });
        },
        logSSRPayloadQueued: function (t) {
          c.push({ isPayloadQueueEmpty: t, type: "logSSRPayloadQueued" });
        },
        logSSRShown: function () {
          c.push({ type: "logSSRShown" });
        },
        logSSRSplashScreenRemoved: function () {
          c.push({ type: "logSSRSplashScreenRemoved" });
        },
        logViewportGuess: function (t) {
          c.push({ dimensionGuess: t, type: "logViewportGuess" });
        },
      };
    }
    var m = r("gkx")("14345"),
      p = { current: d() };
    function _(n) {
      function a() {
        t.__onSSRInject = function (t) {
          try {
            var o;
            t != null &&
              Array.isArray(t) &&
              t.forEach(function (e) {
                r("SSRInjectedElements").add(e);
              });
            var a = (o = n.getTrace()) == null ? void 0 : o.vcTracker;
            (a == null ||
              a.addMarkerPoint("ssr_paint", (e || (e = r("performanceNow")))()),
              i());
          } catch (e) {
            var l,
              s = r("FBLogger")("comet_ssr", "error_logging_paint_time"),
              u = ((l = n.getTrace()) == null ? void 0 : l.vcTracker) != null;
            (e instanceof Error && s.catching(e),
              s.mustfix(
                "initLogger(): Failed to log SSR paint time during __onSSRInject callback. VCTracker available: %s, Error: %s",
                u ? "yes" : "no",
                e instanceof Error ? e.message : String(e),
              ));
          }
        };
      }
      m && a();
      function i() {
        var e,
          t = (e = n.getTrace()) == null ? void 0 : e.vcTracker;
        r("getPaintTime")(function (e, n) {
          (r("gkx")("13494") &&
            o("UserTimingUtils").markModern("ssr paint completed", {
              detail: {
                devtools: {
                  dataType: "track-entry",
                  properties: [
                    ["paint_time", String(e != null ? e : n)],
                    ["estimated_paint", String(e == null)],
                  ],
                  track: "SSR Client Side Logger",
                  trackGroup: "SSR",
                },
              },
              startTime: e != null ? e : n,
            }),
            t == null ||
              t.addMarkerPoint("ssr_paint", e != null ? e : n, {
                estimatedPaintTime: e == null,
              }));
        });
      }
      var l = {
        logLastSSRPayloadArrived: function () {
          n.addMarkerPoint("ssr_last_payload_arrived", "AppTiming");
        },
        logSSRFizzInit: function () {
          if (r("gkx")("13494")) {
            var t = (e || (e = r("performanceNow")))();
            o("UserTimingUtils").markModern("ssr fizz initialization", {
              detail: {
                devtools: {
                  dataType: "track-entry",
                  properties: [["init_type", "fizz_init"]],
                  track: "SSR Client Side Logger",
                  trackGroup: "SSR",
                },
              },
              startTime: t,
            });
          }
          n.addMarkerPoint("ssr_fizz_init", "AppTiming");
        },
        logSSRIndividualPaint: function (t, o) {
          if (t) {
            var e,
              a = (e = n.getTrace()) == null ? void 0 : e.vcTracker;
            r("getPaintTime")(function (e, t) {
              a == null ||
                a.addMarkerPoint("ssr_paint_" + o, e != null ? e : t, {
                  estimatedPaintTime: e == null,
                });
            });
          }
        },
        logSSRInjection: function (l) {
          var t,
            u = l.msg,
            c = l.processedPayloads,
            d = l.status,
            p =
              (s || (s = r("performance"))) == null ||
              (t = (s || (s = r("performance"))).eventCounts) == null ||
              t.get == null
                ? void 0
                : t.get("click");
          if (r("gkx")("13494")) {
            var _ = (e || (e = r("performanceNow")))();
            o("UserTimingUtils").markModern("ssr injection status", {
              detail: {
                devtools: {
                  dataType: "track-entry",
                  properties: [
                    ["injection_status", d],
                    ["message", u || ""],
                    ["click_events", String(p)],
                  ],
                  track: "SSR Client Side Logger",
                  trackGroup: "SSR",
                },
              },
              startTime: _,
            });
          }
          (n.addMetadata("ssr_inline_status", d + " " + (u || "")),
            p != null && n.addMetadata("ssr_inline_click_events", String(p)),
            c &&
              c.forEach(function (e) {
                var t,
                  r = (t = e.id) != null ? t : "global_failure";
                n.addMetadata("ssr_status_" + r, e.status);
              }),
            n.addMetadata("ssr_is_injected", d === "INJECTED" ? 1 : 0),
            d === "INJECTED" && (m || a(), i()));
        },
        logSSRPayloadQueued: function (t) {
          n.addMetadata("ssr_payload_queued", t ? 0 : 1);
        },
        logSSRShown: function () {
          var t,
            o = (t = n.getTrace()) == null ? void 0 : t.vcTracker;
          o == null ||
            o.addMarkerPoint("ssr_shown", (e || (e = r("performanceNow")))());
        },
        logSSRSplashScreenRemoved: function () {
          n.addMarkerPoint("ssr_splash_screen_removed", "AppTiming");
        },
        logViewportGuess: function (t) {
          (n.addAnnotationInt("ssr_viewport_width", t.width_px),
            n.addAnnotationInt("ssr_viewport_height", t.height_px),
            n.addAnnotation("ssr_viewport_guess_source", t.guess_source));
        },
      };
      p.current = l;
      for (var u of c)
        switch (u.type) {
          case "logLastSSRPayloadArrived":
            l.logLastSSRPayloadArrived();
            break;
          case "logSSRIndividualPaint":
            l.logSSRIndividualPaint(u.status, u.count);
            break;
          case "logSSRInjection":
            l.logSSRInjection(u.injectorStatus);
            break;
          case "logSSRPayloadQueued":
            l.logSSRPayloadQueued(u.isPayloadQueueEmpty);
            break;
          case "logSSRShown":
            l.logSSRShown();
            break;
          case "logSSRSplashScreenRemoved":
            l.logSSRSplashScreenRemoved();
            break;
          case "logViewportGuess":
            l.logViewportGuess(u.dimensionGuess);
            break;
        }
      return ((c.length = 0), l);
    }
    function f() {
      return p;
    }
    ((l.SSR_NOT_INITIALIZED = u), (l.initLogger = _), (l.getSSRLogger = f));
  },
  98,
);
