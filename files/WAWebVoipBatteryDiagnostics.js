__d(
  "WAWebVoipBatteryDiagnostics",
  ["WALogger", "asyncToGeneratorRuntime"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c,
      d,
      m,
      p,
      _ = null,
      f = null,
      g = null,
      h = null,
      y = !1,
      C = null,
      b = null;
    function v() {
      return navigator === void 0 ? !1 : navigator.getBattery != null;
    }
    function S() {
      return R.apply(this, arguments);
    }
    function R() {
      return (
        (R = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          if (!v()) return null;
          try {
            var e = yield navigator.getBattery();
            return e;
          } catch (e) {
            return (
              o("WALogger").LOG(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "[voip:batteryDiagnostics] Failed to get battery manager: ",
                    "",
                  ])),
                e,
              ),
              null
            );
          }
        })),
        R.apply(this, arguments)
      );
    }
    function L(e) {
      return {
        level: e.level,
        charging: e.charging,
        chargingTime: e.chargingTime,
        dischargingTime: e.dischargingTime,
      };
    }
    function E() {
      ((_ = null), (f = null), (g = null), (h = null), (b = null));
    }
    function k() {
      return I.apply(this, arguments);
    }
    function I() {
      return (
        (I = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = yield S();
          if (e == null) {
            o("WALogger").LOG(
              c ||
                (c = babelHelpers.taggedTemplateLiteralLoose([
                  "[voip:batteryDiagnostics] Battery API not available",
                ])),
            );
            return;
          }
          if (!y) {
            o("WALogger").LOG(
              d ||
                (d = babelHelpers.taggedTemplateLiteralLoose([
                  "[voip:batteryDiagnostics] init completed but metrics already stopped, discarding",
                ])),
            );
            return;
          }
          _ = e;
          var t = L(e);
          ((f = t.level),
            (g = t.charging),
            (h = t.level),
            o("WALogger").LOG(
              m ||
                (m = babelHelpers.taggedTemplateLiteralLoose([
                  "[voip:batteryDiagnostics] started (level=",
                  "%, charging=",
                  ")",
                ])),
              Math.round(t.level * 100),
              String(t.charging),
            ));
        })),
        I.apply(this, arguments)
      );
    }
    function T() {
      (y &&
        o("WALogger").LOG(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "[voip:batteryDiagnostics] was already active, resetting for new call",
            ])),
        ),
        E(),
        (C = null),
        (y = !0),
        (b = k()));
    }
    function D() {
      return x.apply(this, arguments);
    }
    function x() {
      return (
        (x = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          y &&
            (b != null && (yield b, (b = null)),
            (C = $()),
            (y = !1),
            o("WALogger").LOG(
              p ||
                (p = babelHelpers.taggedTemplateLiteralLoose([
                  "[voip:batteryDiagnostics] stopped",
                ])),
            ));
        })),
        x.apply(this, arguments)
      );
    }
    function $() {
      if (!y) return C;
      var e = f;
      if (_ == null || e == null) return null;
      var t = L(_),
        n = Math.round(e * 100),
        r = Math.round(t.level * 100),
        a = null;
      isFinite(t.chargingTime) &&
        t.chargingTime > 0 &&
        (a = Math.round(t.chargingTime));
      var i = null;
      return (
        isFinite(t.dischargingTime) &&
          t.dischargingTime > 0 &&
          (i = Math.round(t.dischargingTime)),
        o("WALogger").LOG(
          s ||
            (s = babelHelpers.taggedTemplateLiteralLoose([
              "[voip:batteryDiagnostics] snapshot: start=",
              "% end=",
              "% drain=",
              "% chargingStart=",
              " chargingEnd=",
              "",
            ])),
          n,
          r,
          Math.max(0, n - r),
          String(g),
          String(t.charging),
        ),
        {
          browserBatterySupported: v(),
          browserBatteryLevelStartPct: n,
          browserBatteryLevelEndPct: r,
          browserBatteryDrainPct: Math.max(0, n - r),
          browserBatteryChargingAtStart: g,
          browserBatteryChargingAtEnd: t.charging,
          browserBatteryChargingTimeSec: a,
          browserBatteryDischargingTimeSec: i,
        }
      );
    }
    function P() {
      _ != null && ((f = _.level), (g = _.charging));
    }
    function N() {
      return h == null ? null : Math.round(h * 100);
    }
    function M() {
      return { browserBatterySupported: v() };
    }
    ((l.startBatteryDiagnostics = T),
      (l.stopBatteryDiagnostics = D),
      (l.snapshotBatteryDiagnostics = $),
      (l.resetBatteryDiagnostics = P),
      (l.getBatteryLevelAtCallStart = N),
      (l.getBatteryDiagnosticsCapabilities = M));
  },
  98,
);
