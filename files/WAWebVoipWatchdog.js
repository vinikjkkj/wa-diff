__d(
  "WAWebVoipWatchdog",
  [
    "WALogger",
    "WAWebVoipVideoEncodeFpsTracker",
    "WAWebVoipVideoRendererRegistry",
    "WAWebVoipWatchdogInvariants",
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
      _ = 1e3;
    function f() {
      return !1;
    }
    function g() {
      return f();
    }
    var h = (function () {
      function t() {
        ((this.$1 = null),
          (this.$2 = new Map()),
          (this.$3 = new Map()),
          (this.$4 = 0),
          (this.$5 = null),
          (this.$6 = new Map()),
          (this.$7 = o("WAWebVoipWatchdogInvariants").ALL_INVARIANTS));
      }
      var n = t.prototype;
      return (
        (n.isActive = function () {
          return this.$1 != null;
        }),
        (n.start = function (n) {
          var t = this;
          g() &&
            this.$1 !== n &&
            (this.$1 != null && this.stop(),
            (this.$1 = n),
            (this.$4 = window.performance.now()),
            o("WAWebVoipVideoEncodeFpsTracker").resetEncodedFrameCounters(),
            (this.$5 = window.setInterval(function () {
              return t.$8();
            }, _)),
            o("WALogger").LOG(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "voip:watchdog: started for call ",
                  "",
                ])),
              n,
            ));
        }),
        (n.stop = function () {
          if (this.$1 != null) {
            var e = this.$1,
              t = window.performance.now();
            for (var n of this.$6.values())
              n.isOpen &&
                this.$9({
                  durationMs: t - n.openedAtMs,
                  evidence: babelHelpers.extends({}, n.lastEvidence, {
                    closedReason: "watchdog_stopped",
                  }),
                  kind: n.kind,
                  participantKey: n.participantKey,
                });
            (this.$5 != null &&
              (window.clearInterval(this.$5), (this.$5 = null)),
              this.$2.clear(),
              this.$3.clear(),
              this.$6.clear(),
              (this.$1 = null),
              o("WALogger").LOG(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "voip:watchdog: stopped for call ",
                    "",
                  ])),
                e,
              ));
          }
        }),
        (n.pushParticipantState = function (t) {
          if (!(!g() || this.$1 == null)) {
            var e = this.$2.get(t.key);
            (this.$2.set(t.key, t),
              t.hasLeft && e != null && !e.hasLeft && this.$3.delete(t.key));
          }
        }),
        (n.pushTileDom = function (t, n) {
          !g() ||
            this.$1 == null ||
            (n == null ? this.$3.delete(t) : this.$3.set(t, n));
        }),
        (n.removeParticipantState = function (t) {
          if (!(!g() || this.$1 == null)) {
            var e = window.performance.now();
            for (var n of this.$6) {
              var r = n[0],
                o = n[1];
              o.participantKey === t &&
                (o.isOpen &&
                  this.$9({
                    durationMs: e - o.openedAtMs,
                    evidence: babelHelpers.extends({}, o.lastEvidence, {
                      closedReason: "participant_pruned",
                    }),
                    kind: o.kind,
                    participantKey: t,
                  }),
                this.$6.delete(r));
            }
            (this.$2.delete(t), this.$3.delete(t));
          }
        }),
        (n.noteSettlingEvent = function (t) {
          !g() ||
            this.$1 == null ||
            ((this.$4 = window.performance.now()),
            o("WALogger").LOG(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "voip:watchdog: settling event (",
                  ")",
                ])),
              t != null ? t : "manual",
            ));
        }),
        (n.$8 = function () {
          var e = this.$1;
          if (e != null) {
            var t;
            try {
              var n = o(
                "WAWebVoipVideoEncodeFpsTracker",
              ).getEncodedFrameSnapshot();
              t = {
                callId: e,
                nowMs: window.performance.now(),
                lastTransitionMs: this.$4,
                selfEncodedFrameCount: n.frameCount,
                selfEncodedLastFrameTimestampMs: n.lastFrameTimestampMs,
              };
            } catch (e) {
              o("WALogger")
                .ERROR(
                  c ||
                    (c = babelHelpers.taggedTemplateLiteralLoose([
                      "voip:watchdog: failed to build tick context",
                    ])),
                )
                .catching(r("getErrorSafe")(e))
                .sendLogs("voip-watchdog-build-ctx-threw");
              return;
            }
            for (var a of this.$7)
              try {
                if (a.scope === "per-participant")
                  for (var i of this.$2) {
                    var l,
                      s = i[0],
                      u = i[1],
                      m = {
                        state: u,
                        decode: o(
                          "WAWebVoipVideoRendererRegistry",
                        ).videoRendererRegistry.getDecodeStatsForSource(s),
                        tile: (l = this.$3.get(s)) != null ? l : null,
                      };
                    this.$10(a, s, m, t);
                  }
                else this.$10(a, null, null, t);
              } catch (e) {
                o("WALogger")
                  .ERROR(
                    d ||
                      (d = babelHelpers.taggedTemplateLiteralLoose([
                        "voip:watchdog: invariant ",
                        " threw",
                      ])),
                    a.kind,
                  )
                  .catching(r("getErrorSafe")(e))
                  .sendLogs("voip-watchdog-invariant-threw");
              }
          }
        }),
        (n.$10 = function (t, n, r, o) {
          var e;
          if (!(o.nowMs - o.lastTransitionMs < t.settlingMs)) {
            var a = t.evaluate(r, o),
              i = y(t.kind, n),
              l =
                (e = this.$6.get(i)) != null
                  ? e
                  : {
                      kind: t.kind,
                      participantKey: n,
                      openTicks: 0,
                      closeTicks: 0,
                      isOpen: !1,
                      openedAtMs: 0,
                      lastEvidence: {},
                    };
            (a.ok
              ? ((l.openTicks = 0),
                l.isOpen &&
                  ((l.closeTicks += 1),
                  l.closeTicks >= t.clearTicks &&
                    (this.$9({
                      durationMs: o.nowMs - l.openedAtMs,
                      evidence: l.lastEvidence,
                      kind: t.kind,
                      participantKey: n,
                    }),
                    (l.isOpen = !1),
                    (l.closeTicks = 0),
                    (l.openedAtMs = 0),
                    (l.lastEvidence = {}))))
              : ((l.closeTicks = 0),
                (l.lastEvidence = a.evidence),
                l.isOpen ||
                  ((l.openTicks += 1),
                  l.openTicks >= t.triggerTicks &&
                    ((l.isOpen = !0),
                    (l.openedAtMs = o.nowMs),
                    this.$11(t.kind, n, a.evidence)))),
              this.$6.set(i, l));
          }
        }),
        (n.$11 = function (t, n, r) {
          var e;
          o("WALogger").LOG(
            m ||
              (m = babelHelpers.taggedTemplateLiteralLoose([
                "voip:rendererInvariant:opened ",
                " lid=",
                " evidence=",
                "",
              ])),
            t,
            (e = n == null ? void 0 : n.key) != null ? e : "call-wide",
            JSON.stringify(r),
          );
        }),
        (n.$9 = function (t) {
          var e,
            n = t.durationMs,
            r = t.evidence,
            a = t.kind,
            i = t.participantKey;
          o("WALogger").LOG(
            p ||
              (p = babelHelpers.taggedTemplateLiteralLoose([
                "voip:rendererInvariant:closed ",
                " lid=",
                " duration=",
                "ms evidence=",
                "",
              ])),
            a,
            (e = i == null ? void 0 : i.key) != null ? e : "call-wide",
            n.toFixed(0),
            JSON.stringify(r),
          );
        }),
        (n.__isOpenForTest = function (t, n) {
          var e;
          return (
            ((e = this.$6.get(y(t, n))) == null ? void 0 : e.isOpen) === !0
          );
        }),
        (n.__forceTickForTest = function () {
          this.$8();
        }),
        t
      );
    })();
    function y(e, t) {
      var n;
      return e + "|" + ((n = t == null ? void 0 : t.key) != null ? n : "*");
    }
    var C = new h();
    ((l.isRendererInvariantWatchdogEnabled = f),
      (l.rendererInvariantWatchdog = C));
  },
  98,
);
