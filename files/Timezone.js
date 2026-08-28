__d(
  "Timezone",
  [
    "invariant",
    "DateConsts",
    "EnvironmentTimezoneDecisionTree",
    "FormatExtractionTimezoneTransitionProvider",
    "RulesTimezoneTransitionProvider",
    "TimezoneNamesData",
    "TimezoneRulesFrom2009",
    "TimezoneUtil",
    "memoize",
    "nullthrows",
    "warning",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e = {
        constantOffsets: {},
        namesModule: void 0,
        overrideTransitions: {},
        providerEnabled: {
          override: !0,
          builtin: !0,
          rules: !1,
          formatExtraction: !0,
          environmentExtraction: !0,
          constantOffset: !0,
        },
        rulesProvider: void 0,
        timezoneIDsByName: void 0,
        transitionsByTimezoneID: {},
      },
      u = 1e4,
      c = function (t) {
        return new Date(1e3 * t).getTimezoneOffset() * -60;
      },
      d = 0,
      m = 1;
    function p(e, t) {
      _(e, t);
    }
    function _(t, n) {
      ((e.overrideTransitions[t] = n), delete e.transitionsByTimezoneID[t]);
    }
    function f(e, t) {
      var n = t.map(function (e) {
        return {
          start: typeof e.ts == "number" ? e.ts : NaN,
          offset: typeof e.offset == "number" ? e.offset : NaN,
        };
      });
      (n.push({
        start: o("DateConsts").private.instantRange.until,
        offset: NaN,
      }),
        p(e, n));
    }
    function g(t, n) {
      e.constantOffsets[t] = n;
    }
    function h(t, n) {
      e.rulesProvider = t;
      var r = t.tzDatabase.registerRulesModule(n);
      r && (e.transitionsByTimezoneID = {});
    }
    function y(t) {
      (!e.namesModule || e.namesModule.version < t.version) &&
        (r("warning")(
          o("TimezoneUtil").namesModuleIsSane(t),
          "Attemping to register a names module that incorrectly enumerates existing timezones. Check that you are using the TimezoneNamesData module.",
        ),
        (e.namesModule = t),
        (e.timezoneIDsByName = void 0));
    }
    function C() {
      (h(n("RulesTimezoneTransitionProvider"), n("TimezoneRulesFrom2009")),
        y(n("TimezoneNamesData")),
        S("rules", !0));
    }
    function b(t) {
      return (
        e.transitionsByTimezoneID[t] || (e.transitionsByTimezoneID[t] = v(t)),
        e.transitionsByTimezoneID[t]
      );
    }
    function v(t) {
      if (e.overrideTransitions[t]) return e.overrideTransitions[t];
      if (t === d) return o("TimezoneUtil").constantOffsetTransitions(0);
      var n = e.rulesProvider;
      if (e.providerEnabled.rules && n && n.tzDatabase.hasZone(t))
        return n.generateTransitions(t);
      if (e.providerEnabled.formatExtraction) {
        var a = o("FormatExtractionTimezoneTransitionProvider").extractOrNull(
          t,
        );
        if (a) return a;
      }
      if (e.providerEnabled.environmentExtraction && (t == L() || t === u))
        return o("TimezoneUtil").extractTimezoneTransitions(c);
      if (
        e.providerEnabled.constantOffset &&
        Object.prototype.hasOwnProperty.call(e.constantOffsets, t)
      )
        return (
          r("warning")(
            !1,
            "Timezone %s is configured with a constant offset. This is error prone, and support for it will be removed in the near future.",
            t,
          ),
          o("TimezoneUtil").constantOffsetTransitions(e.constantOffsets[t])
        );
      s(0, 1059, t);
    }
    function S(t, n, r) {
      (r === void 0 && (r = !0),
        t === "rules" ||
          t === "formatExtraction" ||
          t === "environmentExtraction" ||
          t === "constantOffset" ||
          s(0, 1060, t),
        (e.providerEnabled[t] = n),
        r && (e.transitionsByTimezoneID = {}));
    }
    function R(t) {
      return e.providerEnabled[t];
    }
    var L = r("memoize")(function () {
      var t = "",
        n = window.Intl;
      n != null &&
        n.DateTimeFormat() != null &&
        n.DateTimeFormat().resolvedOptions() != null &&
        (t = n.DateTimeFormat().resolvedOptions().timeZone || "");
      var r;
      return (
        e.namesModule && t !== "" && (r = D(t)),
        r == null && (r = E()),
        r
      );
    });
    function E() {
      return (
        o("TimezoneUtil").determineTimezoneID(
          r("EnvironmentTimezoneDecisionTree"),
          c,
        ) || u
      );
    }
    function k(e) {
      return e === u ? "Environment/Local" : I(e);
    }
    function I(e) {
      var t = P.getNamesModule("Timezone.getName");
      return t.zoneNames[String(e)];
    }
    function T(e) {
      return r("nullthrows")(D(e), "Did not find id for timezone " + e);
    }
    function D(t) {
      if (!e.timezoneIDsByName) {
        P.getNamesModule("Timezone.getByName");
        var n = {};
        for (var r of P.computeTimezoneIDs()) {
          var o = k(r);
          n[o] = r;
        }
        e.timezoneIDsByName = n;
      }
      return e.timezoneIDsByName[t];
    }
    function x() {
      var t = e.rulesProvider;
      return (
        (t && t.tzDatabase.getZoneCount()) || e.namesModule || s(0, 1061),
        (t && t.tzDatabase.getZoneCount()) ||
          Object.keys(P.getNamesModule().zoneNames).length
      );
    }
    function $(e, t) {
      var n = b(t),
        r = n[n.length - 1],
        a = r.start;
      return Math.min(e, a - 1, o("DateConsts").private.instantRange.until - 1);
    }
    var P = {
      state: e,
      localTimezoneID: u,
      computeTimezoneIDs: function () {
        for (var e = new Set(), t = x(), n = 0; n < t; n++) e.add(n);
        return (e.add(u), e);
      },
      getNamesModule: function (n) {
        return (
          n === void 0 && (n = "Timezone.getNamesModule"),
          e.namesModule || s(0, 1062, n),
          r("nullthrows")(e.namesModule)
        );
      },
    };
    (g(m, -7 * o("DateConsts").SEC_PER_HOUR),
      (l.UTC = d),
      (l.PST8PDT = m),
      (l.setupTimezone = p),
      (l.overrideTransitions = _),
      (l.setupTimezoneWithPHPTransitions = f),
      (l.setFallbackOffset = g),
      (l.registerRulesModule = h),
      (l.registerNamesModule = y),
      (l.registerDefaultNamesAndRulesModules = C),
      (l.getTransitions = b),
      (l.computeTransitions = v),
      (l.toggleTransitionProvider = S),
      (l.isTransitionProviderEnabled = R),
      (l.getEnvironmentTimezoneID = L),
      (l.getEnvironmentTimezoneIDFromTree = E),
      (l.getName = k),
      (l.getExactName = I),
      (l.getByName = T),
      (l.getByNameOrNull = D),
      (l.getGeographicTimezoneCount = x),
      (l.clampTimestamp = $),
      (l.private = P));
  },
  98,
);
