__d(
  "TimezoneUtil",
  ["BinarySearch", "DateConsts"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return [
        { start: o("DateConsts").private.instantRange.since, offset: e },
        { start: o("DateConsts").private.instantRange.until, offset: NaN },
      ];
    }
    function s(e, t) {
      t === void 0 && (t = c());
      var n = [],
        r = e(t.start);
      n.push({ start: t.start, offset: r });
      for (
        var a = function () {
            var a = i + t.step,
              l = e(a);
            if (r !== l) {
              var s = o("BinarySearch").leastUpperBound(
                function (t) {
                  return e(t) === l;
                },
                1,
                i,
                a,
                function (e, t) {
                  return (e ? 1 : 0) - t;
                },
              );
              s < t.end && n.push({ start: s, offset: l });
            }
            r = l;
          },
          i = t.start;
        i < t.end;
        i += t.step
      )
        a();
      return (n.push({ start: t.end, offset: NaN }), n);
    }
    function u(e, t) {
      if (e.timezone != null) return e.timezone;
      var n = e.instant != null && t(e.instant),
        r = e[String(n)];
      return r ? u(r, t) : void 0;
    }
    function c() {
      return {
        start: new Date("2004-01-01").valueOf() / o("DateConsts").MS_PER_SEC,
        end: new Date("2107-01-01").valueOf() / o("DateConsts").MS_PER_SEC,
        step: 30 * o("DateConsts").SEC_PER_DAY,
      };
    }
    function d(e) {
      return (
        e.zoneNames[1] === "America/Los_Angeles" &&
        e.zoneNames[141] === "Africa/Johannesburg" &&
        e.zoneNames[475] === "WET"
      );
    }
    ((l.constantOffsetTransitions = e),
      (l.extractTimezoneTransitions = s),
      (l.determineTimezoneID = u),
      (l.namesModuleIsSane = d));
  },
  98,
);
