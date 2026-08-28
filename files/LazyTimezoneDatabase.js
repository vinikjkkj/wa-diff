__d(
  "LazyTimezoneDatabase",
  [
    "invariant",
    "Instant",
    "TimezoneRulesModuleParser",
    "compareString",
    "nullthrows",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e = (function () {
      function e() {
        ((this.rulesModule = {
          zones: [],
          ruleSets: [],
          version: "0",
          fromYear: o("Instant").wholeYearRangeInYears.until,
        }),
          (this.zones = new Map()),
          (this.ruleSets = new Map()));
      }
      var t = e.prototype;
      return (
        (t.registerRulesModule = function (t) {
          return t.fromYear < this.rulesModule.fromYear ||
            (r("compareString")(this.rulesModule.version, t.version) < 0 &&
              this.rulesModule.fromYear === t.fromYear)
            ? ((this.rulesModule = t),
              this.zones.clear(),
              this.ruleSets.clear(),
              !0)
            : !1;
        }),
        (t.getZone = function (t) {
          return (
            this.zones.has(t) || this.zones.set(t, this.$1(t)),
            r("nullthrows")(this.zones.get(t))
          );
        }),
        (t.getRuleSet = function (t) {
          return (
            this.ruleSets.has(t) || this.ruleSets.set(t, this.$2(t)),
            r("nullthrows")(this.ruleSets.get(t))
          );
        }),
        (t.hasZone = function (t) {
          return 0 <= t && t < this.rulesModule.zones.length;
        }),
        (t.getTerminalZone = function (t) {
          var e = this.getZone(t);
          return typeof e.linkTo == "number" ? this.getZone(e.linkTo) : e;
        }),
        (t.getZoneCount = function () {
          return this.rulesModule.zones.length;
        }),
        (t.$1 = function (t) {
          (0 <= t && t < this.rulesModule.zones.length) || s(0, 5776, t);
          var e = o("TimezoneRulesModuleParser").parseZone(
            this.rulesModule.zones[t],
            t,
          );
          if (e.records)
            for (var n of e.records)
              n.ruleSetID != null &&
                n.ruleSetID !== 0 &&
                this.getRuleSet(n.ruleSetID);
          else this.getZone(r("nullthrows")(e.linkTo));
          return e;
        }),
        (t.$2 = function (t) {
          return (
            t < this.rulesModule.ruleSets.length || s(0, 5777, t),
            o("TimezoneRulesModuleParser").parseRuleSet(
              this.rulesModule.ruleSets[t],
              t,
            )
          );
        }),
        e
      );
    })();
    l.default = e;
  },
  98,
);
