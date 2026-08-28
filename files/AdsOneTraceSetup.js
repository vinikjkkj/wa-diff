__d(
  "AdsOneTraceSetup",
  [
    "AdsALReactUtils",
    "AdsAccountStore",
    "AdsPerfInteractionLogDataUtil",
    "Env",
    "ExecutionEnvironment",
    "FBLogger",
    "JSSchedulerLoomProvider",
    "JSSelfProfilerLoomProvider",
    "LongAnimationFrameConfig",
    "OneTraceQPLLogger",
    "QPLEvent",
    "QPLLoomProvider",
    "ResourceTimingLoomProvider",
    "cr:1649",
    "getReactComponentStackFromDOMElement_THIS_CAN_BREAK",
    "gkx",
    "justknobx",
    "one-trace",
    "performanceAbsoluteNow",
    "qpl",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c,
      d = 12e4,
      m = r("justknobx")._("1520"),
      p = r("justknobx")._("4116"),
      _ = !1,
      f = null;
    function g(e) {
      var t = new URL(e),
        n = t.origin + t.pathname;
      return n;
    }
    function h(e) {
      var t;
      return ((t = e.annotations.string) == null
        ? void 0
        : t.inputEventType) === "mouseover"
        ? m
        : !0;
    }
    function y(e) {
      var t;
      switch (e.traceType) {
        case "SCROLL":
          return r("qpl")._(933036033, "3352");
        case "INP":
          return h(e) ? r("qpl")._(933042198, "927") : null;
        case "LONGTASK":
          return r("gkx")("3055") ? r("qpl")._(933036036, "3613") : null;
        case "LONG_ANIMATION_FRAME":
          return ((t = e.annotations.bool) == null
            ? void 0
            : t.isLoggingSample) === !0
            ? r("qpl")._(933051648, "3168")
            : null;
        case "RESPONSIVENESS":
          return r("qpl")._(933036034, "1471");
        case "TYPING":
          return r("qpl")._(933036038, "3119");
      }
      return null;
    }
    var C = (c || (c = o("QPLEvent"))).getMarkerId(
        r("qpl")._(933036034, "1471"),
      ),
      b = 0;
    function v() {
      _ ||
        ((_ = !0),
        (e || (e = r("ExecutionEnvironment"))).canUseDOM &&
          r("gkx")("9419") &&
          document.addEventListener(
            "click",
            function (e) {
              f = null;
              var t = e.target;
              if (t instanceof Element) {
                var n;
                f =
                  (n =
                    o("AdsALReactUtils").getReactComponentName_THIS_CAN_BREAK(
                      t,
                    )) != null
                    ? n
                    : null;
              }
            },
            !0,
          ),
        r("one-trace").setup({
          Image: { enableTracking: !1 },
          INP: {
            enableTracking: !0,
            getReactComponentStackFromDOMElement: r(
              "getReactComponentStackFromDOMElement_THIS_CAN_BREAK",
            ),
            eventTimingCallback: function (t, n) {
              var e = g(document.URL);
              r("one-trace").addAnnotations(n.annotations, {
                string: { sanitizedURL: e },
              });
              var a = o(
                "AdsPerfInteractionLogDataUtil",
              ).getAdsObjectSelectedIds();
              r("one-trace").addAnnotations(n.annotations, {
                string_array: babelHelpers.extends({}, a),
              });
              var i = t.target,
                l = null;
              if (i instanceof Element) {
                var s;
                (p &&
                  (i == null ? void 0 : i.isConnected) === !1 &&
                  r("FBLogger")("ads-one-trace").warn(
                    "INP target is not connected",
                  ),
                  (l =
                    (s =
                      o("AdsALReactUtils").getReactComponentName_THIS_CAN_BREAK(
                        i,
                      )) != null
                      ? s
                      : l));
              } else t.name === "click" && f != null && (l = f);
              r("one-trace").addAnnotations(n.annotations, {
                string: { reactComponentName: l },
              });
            },
            logReactStack: r("gkx")("504"),
            logReactStackHash: !1,
            overrideDelayedEventTypeFilter: ["click", "keyup", "mouseover"],
          },
          Longtask: { enableTracking: !0 },
          LoAF: {
            enableTracking: !0,
            enableLogging: function () {
              return o("LongAnimationFrameConfig").shouldLogLoAF(
                "119211728144504",
              );
            },
            enableScriptPositionConversion: function () {
              return r("justknobx")._("5031");
            },
            config: o("LongAnimationFrameConfig").getLoAFAppConfig(
              "119211728144504",
            ),
          },
          Responsiveness: {
            enableTracking: r("gkx")("21520"),
            sessionInterval: r("gkx")("407") ? d : null,
            logSubspans: !1,
          },
          Scroll: { enableTracking: !0 },
          Typing: { enableTracking: r("gkx")("21522") },
          enableCPUPressureTracking: r("gkx")("817"),
          includeInteractionTracePolicy: !0,
        }),
        r("one-trace").subscribe("trace-start", function (e) {
          if (e.traceType === "RESPONSIVENESS" && n("cr:1649") != null) {
            b++;
            var t = C + "_" + b;
            r("one-trace").addAnnotations(e.annotations, {
              string: { loom_trigger_id: t },
            });
            var a = {
                type: "QPL",
                qpl_marker_id: String(C),
                qpl_instance_key: b,
                sample_rate: 1,
                trace_policy: "am.responsiveness",
              },
              i = n("cr:1649").startTrace(
                t,
                a,
                (s || (s = r("performanceAbsoluteNow")))(),
                new Set([
                  r("QPLLoomProvider").loomProviderId,
                  r("JSSelfProfilerLoomProvider").loomProviderId,
                  r("JSSchedulerLoomProvider").loomProviderId,
                  r("ResourceTimingLoomProvider").loomProviderId,
                ]),
              );
            if (i) {
              var l,
                c = "" + ((l = (u || (u = r("Env"))).brsid) != null ? l : "");
              r("one-trace").addAnnotations(e.annotations, {
                string: { loomRefId: i.traceReferenceId, brsid: c },
                string_array: { loomProviders: Array.from(i.loomProviders) },
              });
            }
          }
          o("OneTraceQPLLogger").initQPL(y(e), e);
        }),
        r("one-trace").subscribe("trace-end", function (e) {
          var t;
          if (
            (r("one-trace").addAnnotations(e.annotations, {
              string: {
                ad_account_id: r("AdsAccountStore").getSelectedAccountID(),
              },
            }),
            o("OneTraceQPLLogger").logQPL(y(e), e),
            e.traceType === "RESPONSIVENESS" &&
              n("cr:1649") != null &&
              ((t = e.annotations.string) == null
                ? void 0
                : t.loom_trigger_id) != null)
          ) {
            var a;
            n("cr:1649").endTrace(
              (a = e.annotations.string) == null ? void 0 : a.loom_trigger_id,
              (s || (s = r("performanceAbsoluteNow")))(),
              { qpl_action: 2, hidden: 0 },
            );
          }
        }));
    }
    l.default = v;
  },
  98,
);
