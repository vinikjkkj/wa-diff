__d(
  "WAWebVoipAvailabilityCheckpoints",
  [
    "WALogger",
    "WAWebBoolFunc",
    "WAWebRuntimeEnvironmentUtils",
    "WAWebVoipCappedVisibleClock",
    "WAWebVoipInitEventEmitter",
    "WAWebVoipInitReliabilityGates",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d,
      m,
      p,
      _ = 6e4,
      f = 10 * 6e4,
      g = 60 * 6e4,
      h = null,
      y = !1,
      C = null,
      b = null,
      v = o("WAWebBoolFunc").returnFalse;
    function S(e) {
      o("WAWebRuntimeEnvironmentUtils").isWorker() || ((v = e), I());
    }
    function R(e) {
      o("WAWebRuntimeEnvironmentUtils").isWorker() || C != null || (C = e);
    }
    function L() {
      C != null && ((C = null), P());
    }
    function E(e) {
      o("WAWebRuntimeEnvironmentUtils").isWorker() ||
        ((b = e), e == null && P());
    }
    function k() {
      if (!(o("WAWebRuntimeEnvironmentUtils").isWorker() || T())) {
        var t = D();
        o("WALogger")
          .LOG(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "voip: reload accepted while calling is unavailable kind=",
                "",
              ])),
            t,
          )
          .tags("non-sad", "kind:" + t)
          .sendLogs("voip-unavailable-reload", {
            sampling: 0,
            sendLogsType: o("WALogger").SendLogsType.COUNTING_STAT,
          });
      }
    }
    function I() {
      h != null ||
        T() ||
        ($(),
        (h = {
          didLogCheckpoint: !1,
          didLogEntry: !1,
          hourlyIntervalId: null,
          lastKind: D(),
          startedAtMs: Date.now(),
          timeoutIds: [
            self.setTimeout(function () {
              return M("ten_minutes");
            }, f),
            self.setTimeout(function () {
              (M("sixty_minutes"), N());
            }, g),
          ],
          visibleTimer: o(
            "WAWebVoipCappedVisibleClock",
          ).startCappedVisibleTimer(_, function () {
            return M("visible");
          }),
        }));
    }
    function T() {
      return (
        x() == null &&
        o("WAWebVoipInitEventEmitter").VoipInitEventEmitter.getIsVoipInited() &&
        !o(
          "WAWebVoipInitEventEmitter",
        ).VoipInitEventEmitter.getIsVoipStackUnresponsive()
      );
    }
    function D() {
      var e = x();
      return e != null
        ? e
        : o("WAWebVoipInitEventEmitter").VoipInitEventEmitter.getIsVoipInited()
          ? "unresponsive"
          : o(
                "WAWebVoipInitEventEmitter",
              ).VoipInitEventEmitter.getDidVoipInitError()
            ? "failed"
            : "pending";
    }
    function x() {
      return o(
        "WAWebVoipInitEventEmitter",
      ).VoipInitEventEmitter.getIsVoipInited()
        ? b === "artifact" ||
          o("WAWebVoipInitReliabilityGates").isVoipInitUnlatchEnabled()
          ? null
          : b
        : C != null
          ? C
          : b;
    }
    function $() {
      y ||
        ((y = !0),
        o("WAWebVoipInitEventEmitter").VoipInitEventEmitter.on(
          "voipInitSuccess",
          P,
        ));
    }
    function P() {
      h != null && T() && A();
    }
    function N() {
      var e = h;
      e != null &&
        (e.hourlyIntervalId = self.setInterval(function () {
          return M("hourly");
        }, g));
    }
    function M(e) {
      var t = h;
      if (t != null) {
        if (T()) {
          A();
          return;
        }
        var n = D();
        ((t.didLogCheckpoint = !0), (t.lastKind = n), w(t), F(e, n, v()));
      }
    }
    function w(e) {
      var t = o(
        "WAWebVoipInitEventEmitter",
      ).VoipInitEventEmitter.getIsVoipInited()
        ? null
        : x();
      t == null ||
        e.didLogEntry ||
        ((e.didLogEntry = !0),
        o("WALogger")
          .LOG(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "voip: calling unavailable until reload kind=",
                "",
              ])),
            t,
          )
          .tags("non-sad", "kind:" + t)
          .sendLogs("voip-unavailable-entry", {
            sampling: 0,
            sendLogsType: o("WALogger").SendLogsType.COUNTING_STAT,
          }));
    }
    function A() {
      var e = h;
      e != null &&
        ((h = null),
        e.visibleTimer.cancel(),
        e.timeoutIds.forEach(function (e) {
          return self.clearTimeout(e);
        }),
        e.hourlyIntervalId != null && self.clearInterval(e.hourlyIntervalId),
        e.didLogCheckpoint && O(e.lastKind, B(Date.now() - e.startedAtMs)));
    }
    function F(e, t, n) {
      var r = "kind:" + t,
        a = "be:" + (n ? "1" : "0");
      e: {
        if (e === "visible") {
          o("WALogger")
            .LOG(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: calling still unavailable after 60 s visible kind=",
                  "",
                ])),
              t,
            )
            .tags("non-sad", r, a)
            .sendLogs("voip-unavailable-60s-visible", {
              sampling: 0,
              sendLogsType: o("WALogger").SendLogsType.COUNTING_STAT,
            });
          break e;
        }
        if (e === "ten_minutes") {
          o("WALogger")
            .LOG(
              c ||
                (c = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: calling still unavailable after 10 min kind=",
                  "",
                ])),
              t,
            )
            .tags("non-sad", r, a)
            .sendLogs("voip-unavailable-10m", {
              sampling: 0,
              sendLogsType: o("WALogger").SendLogsType.COUNTING_STAT,
            });
          break e;
        }
        if (e === "sixty_minutes") {
          o("WALogger")
            .LOG(
              d ||
                (d = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: calling still unavailable after 60 min kind=",
                  "",
                ])),
              t,
            )
            .tags("non-sad", r, a)
            .sendLogs("voip-unavailable-60m", {
              sampling: 0,
              sendLogsType: o("WALogger").SendLogsType.COUNTING_STAT,
            });
          break e;
        }
        if (e === "hourly") {
          o("WALogger")
            .LOG(
              m ||
                (m = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: calling still unavailable after another hour kind=",
                  "",
                ])),
              t,
            )
            .tags("non-sad", r)
            .sendLogs("voip-unavailable-hourly", {
              sampling: 0,
              sendLogsType: o("WALogger").SendLogsType.COUNTING_STAT,
            });
          break e;
        }
        throw Error(
          "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
            e,
        );
      }
    }
    function O(e, t) {
      o("WALogger")
        .LOG(
          p ||
            (p = babelHelpers.taggedTemplateLiteralLoose([
              "voip: calling available again after a checkpoint kind=",
              " delay=",
              "",
            ])),
          e,
          t,
        )
        .tags("non-sad", "kind:" + e, "delay:" + t)
        .sendLogs("voip-unavailable-recovered", {
          sampling: 0,
          sendLogsType: o("WALogger").SendLogsType.COUNTING_STAT,
        });
    }
    function B(e) {
      return e < 2 * 6e4
        ? "lt_2m"
        : e < f
          ? "2m_10m"
          : e < g
            ? "10m_60m"
            : e < 6 * g
              ? "1h_6h"
              : "ge_6h";
    }
    ((l.startVoipAvailabilityEpisode = S),
      (l.reportVoipUnavailableLatch = R),
      (l.clearVoipUnavailableLatch = L),
      (l.reportVoipBackendReloadRequirement = E),
      (l.logVoipUnavailableReload = k));
  },
  98,
);
