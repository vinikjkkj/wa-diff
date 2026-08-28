__d(
  "RulesTimezoneTransitionProvider",
  ["DateConsts", "LazyTimezoneDatabase", "TimezoneDatabaseUtil"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = [1860, 2100],
      s = (function () {
        function t() {
          this.tzDatabase = new (r("LazyTimezoneDatabase"))();
        }
        var n = t.prototype;
        return (
          (n.generateTransitions = function (n) {
            var t = this,
              r = [Math.max(this.tzDatabase.rulesModule.fromYear, e[0]), e[1]],
              a = [
                Date.UTC(r[0], 0, 1) / o("DateConsts").MS_PER_SEC,
                Date.UTC(r[1], 0, 1) / o("DateConsts").MS_PER_SEC,
              ];
            return o("TimezoneDatabaseUtil").generateTransitions(
              this.tzDatabase.getTerminalZone(n),
              function (e) {
                return t.tzDatabase.getRuleSet(e);
              },
              a,
            );
          }),
          t
        );
      })(),
      u = new s();
    l.default = u;
  },
  98,
);
