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
          (this.$2 = null),
          (this.$3 = new Map()),
          (this.$4 = new Map()),
          (this.$5 = 0),
          (this.$6 = null),
          (this.$7 = new Map()),
          (this.$8 = o("WAWebVoipWatchdogInvariants").ALL_INVARIANTS));
      }
      var n = t.prototype;
      return (
        (n.isActive = function () {
          return this.$1 != null;
        }),
        (n.start = function (n, r) {
          var t = this;
          g() &&
            this.$1 !== n &&
            (this.$1 != null && this.stop(),
            (this.$1 = n),
            (this.$2 = r),
            (this.$5 = window.performance.now()),
            o("WAWebVoipVideoEncodeFpsTracker").resetEncodedFrameCounters(),
            (this.$6 = window.setInterval(function () {
              return t.$9();
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
            for (var n of this.$7) {
              var r = n[0],
                a = n[1];
              if (a.isOpen) {
                var i = C(r),
                  l = i[0],
                  u = i[1];
                this.$10(
                  l,
                  u,
                  t - a.openedAtMs,
                  babelHelpers.extends({}, a.lastEvidence, {
                    closedReason: "watchdog_stopped",
                  }),
                );
              }
            }
            (this.$6 != null &&
              (window.clearInterval(this.$6), (this.$6 = null)),
              this.$3.clear(),
              this.$4.clear(),
              this.$7.clear(),
              (this.$1 = null),
              (this.$2 = null),
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
            var e = this.$3.get(t.key);
            (this.$3.set(t.key, t),
              t.hasLeft && e != null && !e.hasLeft && this.$4.delete(t.key));
          }
        }),
        (n.pushTileDom = function (t, n) {
          !g() ||
            this.$1 == null ||
            (n == null ? this.$4.delete(t) : this.$4.set(t, n));
        }),
        (n.removeParticipantState = function (t) {
          if (!(!g() || this.$1 == null)) {
            var e = window.performance.now();
            for (var n of this.$7) {
              var r = n[0],
                o = n[1],
                a = C(r),
                i = a[0],
                l = a[1];
              l === t &&
                (o.isOpen &&
                  this.$10(
                    i,
                    l,
                    e - o.openedAtMs,
                    babelHelpers.extends({}, o.lastEvidence, {
                      closedReason: "participant_pruned",
                    }),
                  ),
                this.$7.delete(r));
            }
            (this.$3.delete(t), this.$4.delete(t));
          }
        }),
        (n.noteSettlingEvent = function (t) {
          !g() ||
            this.$1 == null ||
            ((this.$5 = window.performance.now()),
            o("WALogger").LOG(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "voip:watchdog: settling event (",
                  ")",
                ])),
              t != null ? t : "manual",
            ));
        }),
        (n.$9 = function () {
          var e = this.$1;
          if (e != null) {
            var t;
            try {
              var n,
                a = o(
                  "WAWebVoipVideoEncodeFpsTracker",
                ).getEncodedFrameSnapshot();
              t = {
                callId: e,
                selfKey: (n = this.$2) != null ? n : "",
                nowMs: window.performance.now(),
                lastTransitionMs: this.$5,
                selfEncodedFrameCount: a.frameCount,
                selfEncodedLastFrameTimestampMs: a.lastFrameTimestampMs,
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
            for (var i of this.$8)
              try {
                if (i.scope === "per-participant")
                  for (var l of this.$3) {
                    var s,
                      u = l[0],
                      m = l[1],
                      p = {
                        state: m,
                        decode: o(
                          "WAWebVoipVideoRendererRegistry",
                        ).videoRendererRegistry.getDecodeStatsForJid(u),
                        tile: (s = this.$4.get(u)) != null ? s : null,
                      };
                    this.$11(i, u, p, t);
                  }
                else this.$11(i, null, null, t);
              } catch (e) {
                o("WALogger")
                  .ERROR(
                    d ||
                      (d = babelHelpers.taggedTemplateLiteralLoose([
                        "voip:watchdog: invariant ",
                        " threw",
                      ])),
                    i.kind,
                  )
                  .catching(r("getErrorSafe")(e))
                  .sendLogs("voip-watchdog-invariant-threw");
              }
          }
        }),
        (n.$11 = function (t, n, r, o) {
          var e;
          if (!(o.nowMs - o.lastTransitionMs < t.settlingMs)) {
            var a = t.evaluate(r, o),
              i = y(t.kind, n),
              l =
                (e = this.$7.get(i)) != null
                  ? e
                  : {
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
                    (this.$10(
                      t.kind,
                      n,
                      o.nowMs - l.openedAtMs,
                      l.lastEvidence,
                    ),
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
                    this.$12(t.kind, n, a.evidence)))),
              this.$7.set(i, l));
          }
        }),
        (n.$12 = function (t, n, r) {
          o("WALogger").LOG(
            m ||
              (m = babelHelpers.taggedTemplateLiteralLoose([
                "voip:rendererInvariant:opened ",
                " lid=",
                " evidence=",
                "",
              ])),
            t,
            n != null ? n : "call-wide",
            JSON.stringify(r),
          );
        }),
        (n.$10 = function (t, n, r, a) {
          o("WALogger").LOG(
            p ||
              (p = babelHelpers.taggedTemplateLiteralLoose([
                "voip:rendererInvariant:closed ",
                " lid=",
                " duration=",
                "ms evidence=",
                "",
              ])),
            t,
            n != null ? n : "call-wide",
            r.toFixed(0),
            JSON.stringify(a),
          );
        }),
        (n.__isOpenForTest = function (t, n) {
          var e;
          return (
            ((e = this.$7.get(y(t, n))) == null ? void 0 : e.isOpen) === !0
          );
        }),
        (n.__forceTickForTest = function () {
          this.$9();
        }),
        t
      );
    })();
    function y(e, t) {
      return e + "|" + (t != null ? t : "*");
    }
    function C(e) {
      var t = e.indexOf("|");
      if (t < 0) return [e, null];
      var n = e.substring(t + 1);
      return [e.substring(0, t), n === "*" ? null : n];
    }
    var b = new h();
    ((l.isRendererInvariantWatchdogEnabled = f),
      (l.rendererInvariantWatchdog = b));
  },
  98,
);
