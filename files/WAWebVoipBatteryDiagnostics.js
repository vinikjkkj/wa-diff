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
      p = null,
      _ = null,
      f = null,
      g = null,
      h = null,
      y = null,
      C = null,
      b = !1,
      v = null,
      S = null;
    function R() {
      return navigator === void 0 ? !1 : navigator.getBattery != null;
    }
    function L() {
      return E.apply(this, arguments);
    }
    function E() {
      return (
        (E = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          if (!R()) return null;
          try {
            var e = yield navigator.getBattery();
            return e;
          } catch (e) {
            return (
              o("WALogger").LOG(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "[voip:batteryDiagnostics] Failed to get battery manager: ",
                    "",
                  ])),
                e,
              ),
              null
            );
          }
        })),
        E.apply(this, arguments)
      );
    }
    function k(e) {
      return {
        level: e.level,
        charging: e.charging,
        chargingTime: e.chargingTime,
        dischargingTime: e.dischargingTime,
      };
    }
    function I() {
      var e = _ != null ? Math.round(_ * 100) : null,
        t = g != null ? Math.round(g * 100) : null,
        n = null;
      e != null && t != null && (n = Math.max(0, e - t));
      var r = null;
      if (y != null) {
        var o = y;
        isFinite(o) && o > 0 && (r = Math.round(o));
      }
      var a = null;
      if (C != null) {
        var i = C;
        isFinite(i) && i > 0 && (a = Math.round(i));
      }
      return {
        levelStartPct: e,
        levelEndPct: t,
        drainPct: n,
        chargingAtStart: f,
        chargingAtEnd: h,
        chargingTimeSec: r,
        dischargingTimeSec: a,
      };
    }
    function T() {
      ((p = null),
        (_ = null),
        (f = null),
        (g = null),
        (h = null),
        (y = null),
        (C = null),
        (S = null));
    }
    function D() {
      return x.apply(this, arguments);
    }
    function x() {
      return (
        (x = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = yield L();
          if (e == null) {
            o("WALogger").LOG(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "[voip:batteryDiagnostics] Battery API not available",
                ])),
            );
            return;
          }
          if (!b) {
            o("WALogger").LOG(
              c ||
                (c = babelHelpers.taggedTemplateLiteralLoose([
                  "[voip:batteryDiagnostics] init completed but metrics already stopped, discarding",
                ])),
            );
            return;
          }
          p = e;
          var t = k(e);
          ((_ = t.level),
            (f = t.charging),
            o("WALogger").LOG(
              d ||
                (d = babelHelpers.taggedTemplateLiteralLoose([
                  "[voip:batteryDiagnostics] started (level=",
                  "%, charging=",
                  ")",
                ])),
              Math.round(t.level * 100),
              String(t.charging),
            ));
        })),
        x.apply(this, arguments)
      );
    }
    function $() {
      (b &&
        o("WALogger").LOG(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "[voip:batteryDiagnostics] was already active, resetting for new call",
            ])),
        ),
        T(),
        (v = null),
        (b = !0),
        (S = D()));
    }
    function P() {
      return N.apply(this, arguments);
    }
    function N() {
      return (
        (N = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e, t, n;
          if (b) {
            if (((b = !1), S != null && (yield S, (S = null)), p != null)) {
              var r = k(p);
              ((g = r.level),
                (h = r.charging),
                (y = r.chargingTime),
                (C = r.dischargingTime));
            }
            var a = I();
            v = {
              browserBatterySupported: R(),
              browserBatteryLevelStartPct: a.levelStartPct,
              browserBatteryLevelEndPct: a.levelEndPct,
              browserBatteryDrainPct: a.drainPct,
              browserBatteryChargingAtStart: a.chargingAtStart,
              browserBatteryChargingAtEnd: a.chargingAtEnd,
              browserBatteryChargingTimeSec: a.chargingTimeSec,
              browserBatteryDischargingTimeSec: a.dischargingTimeSec,
            };
            var i = (e = a.levelStartPct) != null ? e : "N/A",
              l = (t = a.levelEndPct) != null ? t : "N/A",
              s = (n = a.drainPct) != null ? n : "N/A",
              u = a.chargingAtStart != null ? String(a.chargingAtStart) : "N/A",
              c = a.chargingAtEnd != null ? String(a.chargingAtEnd) : "N/A";
            o("WALogger").LOG(
              m ||
                (m = babelHelpers.taggedTemplateLiteralLoose([
                  "[voip:batteryDiagnostics] Call ended - Battery stats: startLevel=",
                  "%, endLevel=",
                  "%, drain=",
                  "%, chargingAtStart=",
                  ", chargingAtEnd=",
                  "",
                ])),
              i,
              l,
              s,
              u,
              c,
            );
          }
        })),
        N.apply(this, arguments)
      );
    }
    function M() {
      var e = v;
      return ((v = null), e);
    }
    function w() {
      return { browserBatterySupported: R() };
    }
    ((l.startBatteryDiagnostics = $),
      (l.stopBatteryDiagnostics = P),
      (l.consumeBatteryDiagnostics = M),
      (l.getBatteryDiagnosticsCapabilities = w));
  },
  98,
);
