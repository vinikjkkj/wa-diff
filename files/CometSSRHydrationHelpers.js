__d(
  "CometSSRHydrationHelpers",
  [
    "CometSSRClientRender",
    "CometSSRDebugHelper",
    "CometSSRMergedContentInjector",
    "ExecutionEnvironment",
    "FBLogger",
    "UserTimingUtils",
    "cr:2602",
    "gkx",
    "performanceNow",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e, s;
    function u(t, n) {
      if (
        r("gkx")("16599") &&
        (e || (e = r("ExecutionEnvironment"))).canUseDOM
      ) {
        var o = document.getElementById("verify-ssr-hydration-error");
        if (o == null) {
          var a,
            i = document.createElement("div");
          ((i.id = "verify-ssr-hydration-error"),
            (i.hidden = !0),
            (i.style.display = "none"),
            i.setAttribute("data-error-message", t),
            n != null && i.setAttribute("data-component-stack", n),
            (a = document.body) == null || a.appendChild(i));
        }
      }
    }
    var c,
      d = function (t) {
        c = t;
      },
      m = r("gkx")("4161"),
      p = "data-meta-iab-translation-active";
    function _() {
      if ((e || (e = r("ExecutionEnvironment"))).canUseDOM) {
        var t = document.documentElement;
        if (t.hasAttribute(p)) {
          var n;
          (n = c) == null ||
            n.addAnnotationBoolean(
              "hadIABTranslationMarkerAtSSRHydrationError",
              !0,
            );
        }
        if (
          t.classList.contains("translated-ltr") ||
          t.classList.contains("translated-rtl")
        ) {
          var o;
          (o = c) == null ||
            o.addAnnotationBoolean(
              "hadBrowserTranslationMarkerAtSSRHydrationError",
              !0,
            );
        }
      }
    }
    var f = function (t, n) {
      if (t != null && typeof t.message == "string") {
        var e,
          a,
          i,
          l = t.message;
        if (
          (l.includes(
            o("CometSSRClientRender").CometSSRClientRenderErrorSentinel,
          ) ||
            o("CometSSRMergedContentInjector").logRecoverableHydrationError(
              l,
              n,
              t,
            ),
          l.includes("Minified React error #421;"))
        ) {
          var d;
          (d = c) == null ||
            d.addAnnotationBoolean("ssr_suspense_boundary_received_update", !0);
          return;
        }
        if (
          (l.includes(o("CometSSRDebugHelper").ABORT_DUE_TO_PENDING_PROMISES) &&
            r("FBLogger")("comet_ssr").warn(
              "There are pending promises taking too long, have to switch back to client rendering.",
            ),
          l.includes("The server could not finish this Suspense boundary") ||
            l.includes("Minified React error #419;") ||
            l.includes("This Suspense boundary received an update") ||
            l.includes(
              "The render was aborted by the server without a reason",
            ) ||
            l.includes("The server did not finish this Suspense boundary") ||
            l.includes(
              o("CometSSRClientRender").CometSSRClientRenderErrorSentinel,
            ))
        )
          return;
        var m = null,
          p =
            n != null && typeof n == "object" && "componentStack" in n
              ? n.componentStack
              : void 0;
        if (typeof p == "string") m = p;
        else {
          var f;
          m = (f = JSON.stringify(p)) != null ? f : "null";
        }
        if (r("gkx")("13494")) {
          var g = (s || (s = r("performanceNow")))();
          o("UserTimingUtils").markModern("ssr hydration error", {
            detail: {
              devtools: {
                dataType: "track-entry",
                properties: [
                  ["error_type", "hydration_error"],
                  ["error_message", l],
                  ["error_componentStack", m],
                ],
                track: "SSR Client Side Logger",
                trackGroup: "SSR",
              },
            },
            startTime: g,
          });
        }
        var h = !1;
        if (
          l.includes(
            "Minified React error #418; visit https://react.dev/errors/418?args[]=HTML",
          ) ||
          l.includes(
            "Hydration failed because the initial UI does not match what was rendered on the server.",
          )
        ) {
          var y;
          ((h = !0),
            (y = c) == null || y.addAnnotationBoolean("hadSSRMismatch", !0));
        }
        if (
          l.includes(
            "Minified React error #418; visit https://react.dev/errors/418?args[]=text",
          ) ||
          l.includes("Hydration failed because the server rendered text")
        ) {
          var C;
          ((h = !0),
            (C = c) == null ||
              C.addAnnotationBoolean("hadSSRTextMismatch", !0));
        }
        if ((h && _(), typeof reportError == "function"))
          if (
            n != null &&
            typeof n == "object" &&
            "componentStack" in n &&
            n.componentStack != null &&
            t instanceof Error
          ) {
            var b = t;
            ((b.componentStack = n.componentStack), reportError(b));
          } else reportError(t);
        (u(l, m),
          (e = c) == null || e.addAnnotationBoolean("hadSSRError", !0),
          (a = c) == null ||
            a.addAnnotation("ssr_error_message", l.slice(0, 500)),
          (i = c) == null ||
            i.addAnnotation("ssr_error_componentStack", m.slice(0, 500)));
      }
    };
    ((l.initHydrationHelperTraceAPIObj = d), (l.onRecoverableError = f));
  },
  98,
);
