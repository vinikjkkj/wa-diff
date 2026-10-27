__d(
  "WAWebVoipSharedCallAudioContext",
  [
    "Promise",
    "WALogger",
    "WAWebAudioDeviceManager",
    "WAWebAudioUtility",
    "WAWebODS",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c,
      d,
      m,
      p,
      _,
      f,
      g,
      h,
      y,
      C,
      b,
      v,
      S = ["resume", "default output", "no output"],
      R = 5,
      L = 1e4,
      E = 2e3,
      k = null;
    function I(t, n) {
      var a;
      if (
        ((a = o("WAWebAudioUtility").getCachedWasmModule()) == null ||
        a.isAudioPipelineV2Enabled == null
          ? void 0
          : a.isAudioPipelineV2Enabled()) !== !0
      )
        return null;
      var i = k;
      if (i != null && i.context.state !== "closed")
        return i.context.sampleRate !== n
          ? (r("WAWebODS").incr("web.call.audio.call_context.rate_mismatch"),
            o("WALogger").WARN(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [AV:SharedContext] ",
                  " runs at ",
                  "Hz and the call context at ",
                  "Hz, using a context of its own",
                ])),
              t,
              n,
              i.context.sampleRate,
            ),
            null)
          : (i.holders.add(t),
            r("WAWebODS").incr("web.call.audio.call_context.joined"),
            o("WALogger").LOG(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [AV:SharedContext] ",
                  " joined the call context, state=",
                  "",
                ])),
              t,
              i.context.state,
            ),
            i.context);
      var l = j(n),
        c = {
          context: l,
          holders: new Set([t]),
          isRecovering: !1,
          isRecoveryScheduled: !1,
          lastRecoveryMs: 0,
          outputChangedMidRecovery: !1,
          outputChangesInFlight: 0,
          outputFailed: !1,
          recoveries: 0,
          recoveryLevel: 0,
          stopWatchingOutputDevices: null,
        };
      return (
        $(c),
        (k = c),
        r("WAWebODS").incr("web.call.audio.call_context.created"),
        o("WALogger").LOG(
          u ||
            (u = babelHelpers.taggedTemplateLiteralLoose([
              "voip: [AV:SharedContext] ",
              " created the call context, state=",
              "",
            ])),
          t,
          l.state,
        ),
        l
      );
    }
    function T(e, t) {
      return D.apply(this, arguments);
    }
    function D() {
      return (
        (D = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = k;
          if (n == null || e == null || n.context !== e) return t();
          (n.outputChangesInFlight++, (n.outputFailed = !1));
          try {
            return yield t();
          } finally {
            self.setTimeout(function () {
              (n.outputChangesInFlight--, P(n));
            }, 0);
          }
        })),
        D.apply(this, arguments)
      );
    }
    function x(e, t) {
      var n = k;
      return n == null || n.context !== t
        ? !1
        : (n.holders.delete(e),
          n.holders.size > 0
            ? (o("WALogger").LOG(
                c ||
                  (c = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [AV:SharedContext] ",
                    " left the call context",
                  ])),
                e,
              ),
              !0)
            : ((k = null),
              n.stopWatchingOutputDevices == null ||
                n.stopWatchingOutputDevices(),
              t.state !== "closed" &&
                t.close().catch(function (e) {
                  o("WALogger")
                    .WARN(
                      d ||
                        (d = babelHelpers.taggedTemplateLiteralLoose([
                          "voip: [AV:SharedContext] closing the call context failed",
                        ])),
                    )
                    .catching(r("getErrorSafe")(e));
                }),
              o("WALogger").LOG(
                m ||
                  (m = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [AV:SharedContext] ",
                    " left the call context, closing it",
                  ])),
                e,
              ),
              !0));
    }
    function $(e) {
      var t = e.context;
      (t.addEventListener("error", function () {
        (r("WAWebODS").incr("web.call.audio.call_context.error"),
          (e.outputFailed = !0),
          M(e, "error"));
      }),
        t.addEventListener("statechange", function () {
          t.state === "suspended" &&
            e.outputChangesInFlight === 0 &&
            !e.isRecovering &&
            (e.outputFailed ||
              r("WAWebODS").incr(
                "web.call.audio.call_context.unrequested_suspend",
              ),
            M(e, "suspension"));
        }));
    }
    function P(e) {
      return N.apply(this, arguments);
    }
    function N() {
      return (
        (N = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.context;
          if (e.isRecovering) {
            e.outputChangedMidRecovery = !0;
            return;
          }
          if (!(k !== e || e.outputChangesInFlight > 0)) {
            if (t.state === "running") {
              ((e.outputFailed = !1), (e.recoveryLevel = 0));
              return;
            }
            if (t.state === "suspended") {
              if (
                (r("WAWebODS").incr(
                  "web.call.audio.call_context.suspended_after_output_change",
                ),
                e.outputFailed)
              ) {
                M(e, "output change error");
                return;
              }
              var n = yield O(e, "resume");
              n === "resumed"
                ? ((e.recoveryLevel = 0),
                  o("WALogger").LOG(
                    _ ||
                      (_ = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [AV:SharedContext] resumed the call context after an output change",
                      ])),
                  ))
                : n === "failed" &&
                  (o("WALogger").WARN(
                    f ||
                      (f = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [AV:SharedContext] resuming the call context after an output change failed",
                      ])),
                  ),
                  (e.outputFailed = !0),
                  M(e, "output change"));
            }
          }
        })),
        N.apply(this, arguments)
      );
    }
    function M(e, t) {
      e.isRecoveryScheduled ||
        ((e.isRecoveryScheduled = !0),
        self.setTimeout(function () {
          ((e.isRecoveryScheduled = !1), w(e, t));
        }, 0));
    }
    function w(e, t) {
      return A.apply(this, arguments);
    }
    function A() {
      return (
        (A = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = e.context;
          if (
            (n.state === "running" && (e.outputFailed = !1),
            !(
              k !== e ||
              n.state !== "suspended" ||
              e.outputChangesInFlight > 0 ||
              e.isRecovering
            ))
          ) {
            var a = F(e, t);
            if (a != null) {
              o("WALogger").LOG(
                g ||
                  (g = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [AV:SharedContext] recovering the call context after ",
                    ": ",
                    "",
                  ])),
                t,
                a,
              );
              var i = yield O(e, a);
              i === "resumed"
                ? (r("WAWebODS").incr("web.call.audio.call_context.recovered"),
                  o("WALogger").LOG(
                    h ||
                      (h = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [AV:SharedContext] recovered the call context with ",
                        "",
                      ])),
                    a,
                  ))
                : i === "failed" &&
                  (r("WAWebODS").incr(
                    "web.call.audio.call_context.recovery_failed",
                  ),
                  M(e, "failed " + a));
            }
          }
        })),
        A.apply(this, arguments)
      );
    }
    function F(e, t) {
      if (
        (Date.now() - e.lastRecoveryMs > L &&
          ((e.recoveries = 0), (e.recoveryLevel = 0)),
        e.recoveries >= R)
      )
        return (
          o("WALogger").WARN(
            p ||
              (p = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [AV:SharedContext] leaving the call context suspended after ",
                ": ",
                " recoveries in a row",
              ])),
            t,
            e.recoveries,
          ),
          null
        );
      e.lastRecoveryMs = Date.now();
      var n = Math.max(
        e.recoveryLevel,
        e.outputFailed ? S.indexOf("default output") : 0,
      );
      return (
        e.recoveries++,
        (e.recoveryLevel = n + 1),
        S[Math.min(n, S.length - 1)]
      );
    }
    function O(e, t) {
      return B.apply(this, arguments);
    }
    function B() {
      return (
        (B = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          ((e.isRecovering = !0), (e.outputChangedMidRecovery = !1));
          var n = "not resumed";
          try {
            n = yield W(e, t);
          } catch (e) {
            o("WALogger")
              .WARN(
                y ||
                  (y = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [AV:SharedContext] ",
                    " failed",
                  ])),
                t,
              )
              .catching(r("getErrorSafe")(e));
          } finally {
            e.isRecovering = !1;
          }
          if (k !== e) return "released";
          var a = n === "resumed";
          return (
            a && (e.outputFailed = !1),
            e.outputChangedMidRecovery
              ? (o("WALogger").LOG(
                  C ||
                    (C = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [AV:SharedContext] an output change landed during ",
                      "",
                    ])),
                  t,
                ),
                P(e),
                a ? "resumed" : "output changed")
              : n === "move pending"
                ? "output changed"
                : a
                  ? "resumed"
                  : "failed"
          );
        })),
        B.apply(this, arguments)
      );
    }
    function W(e, t) {
      return q.apply(this, arguments);
    }
    function q() {
      return (
        (q = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = !0;
          return (
            t === "default output"
              ? (n = yield U(e, ""))
              : t === "no output" && (n = yield U(e, { type: "none" })),
            k !== e
              ? "not resumed"
              : (t === "no output" && z(e),
                n
                  ? (yield G(e.context))
                    ? "resumed"
                    : "not resumed"
                  : "move pending")
          );
        })),
        q.apply(this, arguments)
      );
    }
    function U(e, t) {
      return V.apply(this, arguments);
    }
    function V() {
      return (
        (V = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = e.context,
            a = n.setSinkId;
          if (typeof a != "function") return !0;
          (e.outputChangesInFlight++, (e.outputFailed = !1));
          var i = a.call(n, t);
          if (!(yield H(i))) {
            (r("WAWebODS").incr(
              "web.call.audio.call_context.output_move_pending",
            ),
              o("WALogger").WARN(
                b ||
                  (b = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [AV:SharedContext] setSinkId is still pending after ",
                    "ms, checking the output once it settles",
                  ])),
                E,
              ));
            var l = function () {
              (r("WAWebODS").incr(
                "web.call.audio.call_context.output_move_settled_late",
              ),
                self.setTimeout(function () {
                  (e.outputChangesInFlight--, P(e));
                }, 0));
            };
            return (i.then(l, l), !1);
          }
          return (e.outputChangesInFlight--, yield i, !0);
        })),
        V.apply(this, arguments)
      );
    }
    function H(e) {
      return new (v || (v = n("Promise")))(function (t) {
        var n = self.setTimeout(function () {
            t(!1);
          }, E),
          r = function () {
            (self.clearTimeout(n), t(!0));
          };
        e.then(r, r);
      });
    }
    function G(e) {
      return new (v || (v = n("Promise")))(function (t) {
        var n = self.setTimeout(function () {
          t(!1);
        }, E);
        e.resume().then(
          function () {
            (self.clearTimeout(n), t(e.state === "running"));
          },
          function () {
            (self.clearTimeout(n), t(!1));
          },
        );
      });
    }
    function z(e) {
      var t = navigator.mediaDevices;
      if (!(e.stopWatchingOutputDevices != null || t == null)) {
        var n = e.context,
          r = function () {
            T(e.context, function () {
              return o("WAWebAudioDeviceManager").applyPreferredAudioOutputSink(
                n,
                "AV:SharedContext",
              );
            }).then(function (t) {
              t &&
                (e.stopWatchingOutputDevices == null ||
                  e.stopWatchingOutputDevices());
            });
          };
        (t.addEventListener("devicechange", r),
          (e.stopWatchingOutputDevices = function () {
            (t.removeEventListener("devicechange", r),
              (e.stopWatchingOutputDevices = null));
          }));
      }
    }
    function j(e) {
      var t,
        n =
          (t = o(
            "WAWebAudioDeviceManager",
          ).getCurrentSelectedAudioOutputDevice()) != null
            ? t
            : "default";
      return new AudioContext({
        latencyHint: "interactive",
        sampleRate: e,
        sinkId: n,
      });
    }
    ((l.acquireSharedCallAudioContext = I),
      (l.changeCallAudioOutput = T),
      (l.releaseSharedCallAudioContext = x));
  },
  98,
);
