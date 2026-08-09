__d(
  "MAWMiActOnActThreadReadyQueue",
  [
    "ExecutionEnvironment",
    "I64",
    "LSPlatformLsInitLog",
    "MAWInit",
    "MAWMIC",
    "MAWMiActOnActThreadReadyInstrumentation",
    "MAWThreadMappingQPL",
    "MAWVerifyThreadExistsUtils",
    "MWChatInteraction",
    "MWFBLogger",
    "asyncToGeneratorRuntime",
    "clearTimeout",
    "getErrorSafe",
    "setTimeout",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c,
      d,
      m = o("MWFBLogger")
        .MWLogger()
        .tags(["MiActMapping", "UIActions", "ThreadReady"]),
      p = new Map(),
      _ = 3e4;
    function f(t, n, a, i, l, s) {
      var u;
      if ((d || (d = r("ExecutionEnvironment"))).isInBrowser) {
        o("MAWMiActOnActThreadReadyInstrumentation").addPointQPL(
          s,
          "enqueue_by_thread_key_start",
        );
        var f = (c || (c = o("I64"))).to_string(t),
          g = (u = p.get(f)) != null ? u : [],
          h = r("setTimeout")(function () {
            var n = o("MWChatInteraction").getInteractionTraceForThreadKey(
              (c || (c = o("I64"))).to_string(t),
            );
            (n == null ||
              n.addMarkerPoint(
                "timeout_when_waiting_for_act_thread",
                "AppTiming",
              ),
              n == null ||
                n.addAnnotation("callsite_waiting_for_act_thread", i),
              n == null || n.addAnnotation("initial_thread_state", l),
              n == null ||
                n.addAnnotationBoolean(
                  "is_mi_thread_requested",
                  o("MAWVerifyThreadExistsUtils").isThreadRequested(f),
                ),
              o("MAWMiActOnActThreadReadyInstrumentation").addAnnotationsQPL(
                s,
                {
                  bool: {
                    during_mic: o("MAWMIC").duringMIC(),
                    is_thread_requested: o(
                      "MAWVerifyThreadExistsUtils",
                    ).isThreadRequested(f),
                    ls_sync_has_ended: o(
                      "LSPlatformLsInitLog",
                    ).LsSync.hasEnded(),
                    maw_init_completed: o("MAWInit").MAWInitState.isCompleted(),
                  },
                },
              ),
              o("MAWMiActOnActThreadReadyInstrumentation").endFailureQPL(
                s,
                "enqueue_by_thread_key_timeout",
              ),
              m.MUSTFIX(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "Took longer than ",
                    " ms to execute: ",
                    " in threadState: ",
                    " for threadKey: ",
                    ", onActThreadReady",
                  ])),
                _,
                i,
                l,
                f,
              ),
              a(l));
          }, _);
        (g.push({
          callback: n,
          description: i,
          telemetryInstanceKey: s,
          threadState: l,
          timeoutId: h,
        }),
          p.set(f, g));
      }
    }
    function g(e, t, n, r) {
      var a, i, l, s;
      if (!(e == null && t == null)) {
        var u =
            e != null
              ? t != null
                ? "both"
                : "clientThreadKey"
              : "authoritativeThreadKey",
          c =
            e == null
              ? 0
              : (a = (i = p.get(e)) == null ? void 0 : i.length) != null
                ? a
                : 0,
          d =
            t == null
              ? 0
              : (l = (s = p.get(t)) == null ? void 0 : s.length) != null
                ? l
                : 0;
        (o("MAWThreadMappingQPL").addAnnotations(
          {
            int: {
              authorativeThreadKeyCallbacksNum: d,
              clientThreadKeyCallbacksNum: c,
            },
            string: { flushBasedOnKey: u, flushReason: r },
          },
          n,
        ),
          o("MAWThreadMappingQPL").addPoint("flush_awaiting_callbacks", n));
      }
    }
    function h(e, t, n, r) {
      return y.apply(this, arguments);
    }
    function y() {
      return (
        (y = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, a) {
            var i = (c || (c = o("I64"))).to_string(e),
              l = p.get(i);
            if (!(l == null || l.length === 0)) {
              for (; l.length !== 0; ) {
                var d = l.shift();
                if (d != null) {
                  var _ = d.callback,
                    f = d.description,
                    g = d.telemetryInstanceKey,
                    h = d.threadState,
                    y = d.timeoutId;
                  (o("MAWMiActOnActThreadReadyInstrumentation").addPointQPL(
                    g,
                    "enqueue_by_thread_key_end",
                  ),
                    o(
                      "MAWMiActOnActThreadReadyInstrumentation",
                    ).addAnnotationsQPL(g, {
                      string: {
                        caller_identifier: n,
                        processed_based_on_key: a,
                      },
                    }));
                  try {
                    (m.DEBUG(
                      s ||
                        (s = babelHelpers.taggedTemplateLiteralLoose([
                          "Executing queued ",
                          " for threadKey: ",
                          "",
                        ])),
                      f,
                      i,
                    ),
                      o(
                        "MAWMiActOnActThreadReadyInstrumentation",
                      ).endSuccessQPL(g),
                      yield _(e, t),
                      r("clearTimeout")(y));
                  } catch (e) {
                    (r("clearTimeout")(y),
                      o(
                        "MAWMiActOnActThreadReadyInstrumentation",
                      ).endFailureQPL(
                        g,
                        "process_queue_on_act_thread_ready_failure",
                      ),
                      m
                        .catching(r("getErrorSafe")(e))
                        .MUSTFIX(
                          u ||
                            (u = babelHelpers.taggedTemplateLiteralLoose([
                              "Error executing callback on ACT thread ready: ",
                              ", original threadState: ",
                              ", threadKey: ",
                              "",
                            ])),
                          f,
                          h,
                          i,
                        ));
                  }
                }
              }
              p.delete(i);
            }
          },
        )),
        y.apply(this, arguments)
      );
    }
    ((l.enqueueByThreadKey = f),
      (l.logOnFlushQueue = g),
      (l.processQueueOnActThreadReady = h));
  },
  98,
);
