__d(
  "WAWebVoipBatteryDiagnostics",
  ["WALogger"],
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
    async function S() {
      if (!v()) return null;
      try {
        var t = await navigator.getBattery();
        return t;
      } catch (t) {
        return (
          o("WALogger").LOG(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "[voip:batteryDiagnostics] Failed to get battery manager: ",
                "",
              ])),
            t,
          ),
          null
        );
      }
    }
    function R(e) {
      return {
        level: e.level,
        charging: e.charging,
        chargingTime: e.chargingTime,
        dischargingTime: e.dischargingTime,
      };
    }
    function L() {
      ((_ = null), (f = null), (g = null), (h = null), (b = null));
    }
    async function E() {
      var e = await S();
      if (e == null) {
        o("WALogger").LOG(
          s ||
            (s = babelHelpers.taggedTemplateLiteralLoose([
              "[voip:batteryDiagnostics] Battery API not available",
            ])),
        );
        return;
      }
      if (!y) {
        o("WALogger").LOG(
          u ||
            (u = babelHelpers.taggedTemplateLiteralLoose([
              "[voip:batteryDiagnostics] init completed but metrics already stopped, discarding",
            ])),
        );
        return;
      }
      _ = e;
      var t = R(e);
      ((f = t.level),
        (g = t.charging),
        (h = t.level),
        o("WALogger").LOG(
          c ||
            (c = babelHelpers.taggedTemplateLiteralLoose([
              "[voip:batteryDiagnostics] started (level=",
              "%, charging=",
              ")",
            ])),
          Math.round(t.level * 100),
          String(t.charging),
        ));
    }
    function k() {
      (y &&
        o("WALogger").LOG(
          d ||
            (d = babelHelpers.taggedTemplateLiteralLoose([
              "[voip:batteryDiagnostics] was already active, resetting for new call",
            ])),
        ),
        L(),
        (C = null),
        (y = !0),
        (b = E()));
    }
    async function I() {
      y &&
        (b != null && (await b, (b = null)),
        (C = T()),
        (y = !1),
        o("WALogger").LOG(
          m ||
            (m = babelHelpers.taggedTemplateLiteralLoose([
              "[voip:batteryDiagnostics] stopped",
            ])),
        ));
    }
    function T() {
      if (!y) return C;
      var e = f;
      if (_ == null || e == null) return null;
      var t = R(_),
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
          p ||
            (p = babelHelpers.taggedTemplateLiteralLoose([
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
    function D() {
      _ != null && ((f = _.level), (g = _.charging));
    }
    function x() {
      return h == null ? null : Math.round(h * 100);
    }
    function $() {
      return { browserBatterySupported: v() };
    }
    ((l.startBatteryDiagnostics = k),
      (l.stopBatteryDiagnostics = I),
      (l.snapshotBatteryDiagnostics = T),
      (l.resetBatteryDiagnostics = D),
      (l.getBatteryLevelAtCallStart = x),
      (l.getBatteryDiagnosticsCapabilities = $));
  },
  98,
);
