__d(
  "WAWebEphemeralAboutDurationsUtils",
  ["WATimeUtils", "WAWebABProps", "WAWebEphemeralConstants", "fbs"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = [
        (e = o("WATimeUtils")).HOUR_SECONDS,
        8 * e.HOUR_SECONDS,
        e.DAY_SECONDS,
        2 * e.DAY_SECONDS,
        e.WEEK_SECONDS,
      ],
      u = 365 * e.DAY_SECONDS;
    function c(e) {
      var t = o("WAWebEphemeralConstants").getDurationForString(e, !0),
        n = t.duration,
        a = t.unit;
      switch (
        (a === o("WAWebEphemeralConstants").DurationUnit.Hours &&
          n % 24 === 0 &&
          ((n /= 24), (a = o("WAWebEphemeralConstants").DurationUnit.Days)),
        a)
      ) {
        case o("WAWebEphemeralConstants").DurationUnit.Seconds:
          return r("fbs")._(
            /*BTDS*/ '_j{"*":"{duration} seconds","_1":"1 second"}',
            [r("fbs")._plural(n, "duration")],
          );
        case o("WAWebEphemeralConstants").DurationUnit.Minutes:
          return r("fbs")._(
            /*BTDS*/ '_j{"*":"{duration} minutes","_1":"1 minute"}',
            [r("fbs")._plural(n, "duration")],
          );
        case o("WAWebEphemeralConstants").DurationUnit.Hours:
          return r("fbs")._(
            /*BTDS*/ '_j{"*":"{duration} hours","_1":"1 hour"}',
            [r("fbs")._plural(n, "duration")],
          );
        case o("WAWebEphemeralConstants").DurationUnit.Days:
          return r("fbs")._(/*BTDS*/ '_j{"*":"{duration} days","_1":"1 day"}', [
            r("fbs")._plural(n, "duration"),
          ]);
        case o("WAWebEphemeralConstants").DurationUnit.Weeks:
          return r("fbs")._(
            /*BTDS*/ '_j{"*":"{duration} weeks","_1":"1 week"}',
            [r("fbs")._plural(n, "duration")],
          );
      }
    }
    function d(e, t) {
      return { type: t, value: e, label: c(e) };
    }
    function m() {
      var e = s,
        t = o("WAWebABProps")
          .getABPropConfigValue("text_status_ttl_seconds_allowlist")
          .split(",");
      if (t.length !== 0) {
        var n = t
          .map(function (e) {
            return Number(e);
          })
          .filter(function (e) {
            return !Number.isNaN(e) && e <= u;
          });
        n.length !== 0 && (e = n);
      }
      var r = e.map(function (e) {
        return d(e, "default");
      });
      return (
        r.sort(function (e, t) {
          var n = e.value,
            r = t.value;
          return n - r;
        }),
        r
      );
    }
    ((l.defaultTextStatusEphemeralDuration = e.DAY_SECONDS),
      (l.getTextStatusEphemeralityDurations = m));
  },
  226,
);
