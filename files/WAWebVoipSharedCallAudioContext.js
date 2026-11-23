__d(
  "WAWebVoipSharedCallAudioContext",
  [
    "WALogger",
    "WAWebABProps",
    "WAWebAudioDeviceManager",
    "WAWebAudioUtility",
    "WAWebODS",
    "WAWebVoipChromiumDesktopBrowser",
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
      v = ["resume", "default output", "no output"],
      S = 5,
      R = 1e4,
      L = 2e3,
      E = null;
    function k() {
      var e;
      return (
        ((e = o("WAWebAudioUtility").getCachedWasmModule()) == null ||
        e.isAudioPipelineV2Enabled == null
          ? void 0
          : e.isAudioPipelineV2Enabled()) === !0
      );
    }
    function I(t, n) {
      if (
        !k() ||
        !o("WAWebVoipChromiumDesktopBrowser").isChromiumDesktopBrowser() ||
        o("WAWebABProps").getABPropConfigValue(
          "web_voip_audio_shared_call_context",
        ) !== !0
      )
        return null;
      var a = E;
      if (a != null && a.context.state !== "closed")
        return a.context.sampleRate !== n
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
              a.context.sampleRate,
            ),
            null)
          : (a.holders.add(t),
            r("WAWebODS").incr("web.call.audio.call_context.joined"),
            o("WALogger").LOG(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [AV:SharedContext] ",
                  " joined the call context, state=",
                  "",
                ])),
              t,
              a.context.state,
            ),
            a.context);
      var i = U(n),
        l = {
          context: i,
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
        $(l),
        (E = l),
        r("WAWebODS").incr("web.call.audio.call_context.created"),
        o("WALogger").LOG(
          u ||
            (u = babelHelpers.taggedTemplateLiteralLoose([
              "voip: [AV:SharedContext] ",
              " created the call context, state=",
              "",
            ])),
          t,
          i.state,
        ),
        i
      );
    }
    async function T(e, t) {
      var n = E;
      if (n == null || e == null || n.context !== e) return t();
      (n.outputChangesInFlight++, (n.outputFailed = !1));
      try {
        return await t();
      } finally {
        self.setTimeout(function () {
          (n.outputChangesInFlight--, P(n));
        }, 0);
      }
    }
    function D(e, t) {
      var n = E;
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
            : ((E = null),
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
    function x(e) {
      var t;
      return ((t = E) == null ? void 0 : t.context) === e;
    }
    function $(e) {
      var t = e.context;
      (t.addEventListener("error", function () {
        (r("WAWebODS").incr("web.call.audio.call_context.error"),
          (e.outputFailed = !0),
          N(e, "error"));
      }),
        t.addEventListener("statechange", function () {
          t.state === "suspended" &&
            e.outputChangesInFlight === 0 &&
            !e.isRecovering &&
            (e.outputFailed ||
              r("WAWebODS").incr(
                "web.call.audio.call_context.unrequested_suspend",
              ),
            N(e, "suspension"));
        }));
    }
    async function P(e) {
      var t = e.context;
      if (e.isRecovering) {
        e.outputChangedMidRecovery = !0;
        return;
      }
      if (!(E !== e || e.outputChangesInFlight > 0)) {
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
            N(e, "output change error");
            return;
          }
          var n = await A(e, "resume");
          n === "resumed"
            ? ((e.recoveryLevel = 0),
              o("WALogger").LOG(
                p ||
                  (p = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [AV:SharedContext] resumed the call context after an output change",
                  ])),
              ))
            : n === "failed" &&
              (o("WALogger").WARN(
                _ ||
                  (_ = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [AV:SharedContext] resuming the call context after an output change failed",
                  ])),
              ),
              (e.outputFailed = !0),
              N(e, "output change"));
        }
      }
    }
    function N(e, t) {
      e.isRecoveryScheduled ||
        ((e.isRecoveryScheduled = !0),
        self.setTimeout(function () {
          ((e.isRecoveryScheduled = !1), M(e, t));
        }, 0));
    }
    async function M(e, t) {
      var n = e.context;
      if (
        (n.state === "running" && (e.outputFailed = !1),
        !(
          E !== e ||
          n.state !== "suspended" ||
          e.outputChangesInFlight > 0 ||
          e.isRecovering
        ))
      ) {
        var a = w(e, t);
        if (a != null) {
          o("WALogger").LOG(
            f ||
              (f = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [AV:SharedContext] recovering the call context after ",
                ": ",
                "",
              ])),
            t,
            a,
          );
          var i = await A(e, a);
          i === "resumed"
            ? (r("WAWebODS").incr("web.call.audio.call_context.recovered"),
              o("WALogger").LOG(
                g ||
                  (g = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [AV:SharedContext] recovered the call context with ",
                    "",
                  ])),
                a,
              ))
            : i === "failed" &&
              (r("WAWebODS").incr(
                "web.call.audio.call_context.recovery_failed",
              ),
              N(e, "failed " + a));
        }
      }
    }
    function w(e, t) {
      if (
        (Date.now() - e.lastRecoveryMs > R &&
          ((e.recoveries = 0), (e.recoveryLevel = 0)),
        e.recoveries >= S)
      )
        return (
          o("WALogger").WARN(
            h ||
              (h = babelHelpers.taggedTemplateLiteralLoose([
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
        e.outputFailed ? v.indexOf("default output") : 0,
      );
      return (
        e.recoveries++,
        (e.recoveryLevel = n + 1),
        v[Math.min(n, v.length - 1)]
      );
    }
    async function A(e, t) {
      ((e.isRecovering = !0), (e.outputChangedMidRecovery = !1));
      var n = "not resumed";
      try {
        n = await F(e, t);
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
      if (E !== e) return "released";
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
    }
    async function F(e, t) {
      var n = !0;
      return (
        t === "default output"
          ? (n = await O(e, ""))
          : t === "no output" && (n = await O(e, { type: "none" })),
        E !== e
          ? "not resumed"
          : (t === "no output" && q(e),
            n
              ? (await W(e.context))
                ? "resumed"
                : "not resumed"
              : "move pending")
      );
    }
    async function O(e, t) {
      var n = e.context,
        a = n.setSinkId;
      if (typeof a != "function") return !0;
      (e.outputChangesInFlight++, (e.outputFailed = !1));
      var i = a.call(n, t);
      if (!(await B(i))) {
        (r("WAWebODS").incr("web.call.audio.call_context.output_move_pending"),
          o("WALogger").WARN(
            b ||
              (b = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [AV:SharedContext] setSinkId is still pending after ",
                "ms, checking the output once it settles",
              ])),
            L,
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
      return (e.outputChangesInFlight--, await i, !0);
    }
    function B(e) {
      return new Promise(function (t) {
        var n = self.setTimeout(function () {
            t(!1);
          }, L),
          r = function () {
            (self.clearTimeout(n), t(!0));
          };
        e.then(r, r);
      });
    }
    function W(e) {
      return new Promise(function (t) {
        var n = self.setTimeout(function () {
          t(!1);
        }, L);
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
    function q(e) {
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
    function U(e) {
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
    ((l.isAudioPipelineV2Enabled = k),
      (l.acquireSharedCallAudioContext = I),
      (l.changeCallAudioOutput = T),
      (l.releaseSharedCallAudioContext = D),
      (l.isSharedCallAudioContext = x));
  },
  98,
);
