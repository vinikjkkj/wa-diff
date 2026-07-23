__d(
  "CometSSRHydrationHelpers",
  [
    "CometSSRClientRender",
    "CometSSRDebugHelper",
    "CometSSRMergedContentInjector",
    "FBLogger",
    "UserTimingUtils",
    "cr:2602",
    "gkx",
    "performanceNow",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(e, t) {
      if (r("gkx")("16599")) {
        var n = document.getElementById("verify-ssr-hydration-error");
        if (n == null) {
          var o,
            a = document.createElement("div");
          ((a.id = "verify-ssr-hydration-error"),
            (a.hidden = !0),
            (a.style.display = "none"),
            a.setAttribute("data-error-message", e),
            t != null && a.setAttribute("data-component-stack", t),
            (o = document.body) == null || o.appendChild(a));
        }
      }
    }
    var u,
      c = function (t) {
        u = t;
      },
      d = r("gkx")("4161"),
      m = function (n, a) {
        if (n != null && typeof n.message == "string") {
          var t,
            i,
            l,
            c = n.message;
          if (
            (c.includes(
              o("CometSSRClientRender").CometSSRClientRenderErrorSentinel,
            ) ||
              o("CometSSRMergedContentInjector").logRecoverableHydrationError(
                c,
                a,
                n,
              ),
            c.includes("Minified React error #421;"))
          ) {
            var d;
            (d = u) == null ||
              d.addAnnotationBoolean(
                "ssr_suspense_boundary_received_update",
                !0,
              );
            return;
          }
          if (
            (c.includes(
              o("CometSSRDebugHelper").ABORT_DUE_TO_PENDING_PROMISES,
            ) &&
              r("FBLogger")("comet_ssr").warn(
                "There are pending promises taking too long, have to switch back to client rendering.",
              ),
            c.includes("The server could not finish this Suspense boundary") ||
              c.includes("Minified React error #419;") ||
              c.includes("This Suspense boundary received an update") ||
              c.includes(
                "The render was aborted by the server without a reason",
              ) ||
              c.includes("The server did not finish this Suspense boundary") ||
              c.includes(
                o("CometSSRClientRender").CometSSRClientRenderErrorSentinel,
              ))
          )
            return;
          var m = null,
            p =
              a != null && typeof a == "object" && "componentStack" in a
                ? a.componentStack
                : void 0;
          if (typeof p == "string") m = p;
          else {
            var _;
            m = (_ = JSON.stringify(p)) != null ? _ : "null";
          }
          if (r("gkx")("13494")) {
            var f = (e || (e = r("performanceNow")))();
            o("UserTimingUtils").markModern("ssr hydration error", {
              detail: {
                devtools: {
                  dataType: "track-entry",
                  properties: [
                    ["error_type", "hydration_error"],
                    ["error_message", c],
                    ["error_componentStack", m],
                  ],
                  track: "SSR Client Side Logger",
                  trackGroup: "SSR",
                },
              },
              startTime: f,
            });
          }
          if (
            c.includes(
              "Minified React error #418; visit https://react.dev/errors/418?args[]=HTML",
            ) ||
            c.includes(
              "Hydration failed because the initial UI does not match what was rendered on the server.",
            )
          ) {
            var g;
            (g = u) == null || g.addAnnotationBoolean("hadSSRMismatch", !0);
          }
          if (
            c.includes(
              "Minified React error #418; visit https://react.dev/errors/418?args[]=text",
            ) ||
            c.includes("Hydration failed because the server rendered text")
          ) {
            var h;
            (h = u) == null || h.addAnnotationBoolean("hadSSRTextMismatch", !0);
          }
          if (typeof reportError == "function")
            if (
              a != null &&
              typeof a == "object" &&
              "componentStack" in a &&
              a.componentStack != null &&
              n instanceof Error
            ) {
              var y = n;
              ((y.componentStack = a.componentStack), reportError(y));
            } else reportError(n);
          (s(c, m),
            (t = u) == null || t.addAnnotationBoolean("hadSSRError", !0),
            (i = u) == null ||
              i.addAnnotation("ssr_error_message", c.slice(0, 500)),
            (l = u) == null ||
              l.addAnnotation("ssr_error_componentStack", m.slice(0, 500)));
        }
      };
    ((l.initHydrationHelperTraceAPIObj = c), (l.onRecoverableError = m));
  },
  98,
);
