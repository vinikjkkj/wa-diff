__d(
  "AdsCallAdsDaypartingPresetConstants",
  ["fbt", "AdsApiScheduleObjectFields"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e = [1, 2, 3, 4, 5],
      u = [1, 2, 3, 4, 5, 6],
      c = [0, 1, 2, 3, 4, 5, 6],
      d = {
        MON_FRI_10_4: {
          label: s._(/*BTDS*/ "Mon-Fri: 10 AM - 4 PM"),
          schedule: [
            {
              start_minute: 600,
              end_minute: 960,
              days: e,
              timezone_type: "ADVERTISER",
            },
          ],
        },
        MON_FRI_9_6: {
          label: s._(/*BTDS*/ "Mon-Fri: 9 AM - 6 PM"),
          schedule: [
            {
              start_minute: 540,
              end_minute: 1080,
              days: e,
              timezone_type: "ADVERTISER",
            },
          ],
        },
        MON_SAT_9_6: {
          label: s._(/*BTDS*/ "Mon-Sat: 9 AM - 6 PM"),
          schedule: [
            {
              start_minute: 540,
              end_minute: 1080,
              days: u,
              timezone_type: "ADVERTISER",
            },
          ],
        },
        ALL_WEEK_9_6: {
          label: s._(/*BTDS*/ "All Week: 9 AM - 6 PM"),
          schedule: [
            {
              start_minute: 540,
              end_minute: 1080,
              days: c,
              timezone_type: "ADVERTISER",
            },
          ],
        },
        ALL_WEEK_8_8: {
          label: s._(/*BTDS*/ "All Week: 8 AM - 8 PM"),
          schedule: [
            {
              start_minute: 480,
              end_minute: 1200,
              days: c,
              timezone_type: "ADVERTISER",
            },
          ],
        },
      };
    function m() {
      return [
        { value: "MON_FRI_10_4", label: d.MON_FRI_10_4.label },
        { value: "MON_FRI_9_6", label: d.MON_FRI_9_6.label },
        { value: "MON_SAT_9_6", label: d.MON_SAT_9_6.label },
        { value: "ALL_WEEK_9_6", label: d.ALL_WEEK_9_6.label },
        { value: "ALL_WEEK_8_8", label: d.ALL_WEEK_8_8.label },
      ];
    }
    function p(e) {
      if (e == null || e.length === 0) return null;
      var t = e.filter(Boolean);
      if (t.length !== 1) return null;
      var n = t[0],
        r = [
          "MON_FRI_10_4",
          "MON_FRI_9_6",
          "MON_SAT_9_6",
          "ALL_WEEK_9_6",
          "ALL_WEEK_8_8",
        ];
      for (var o of r) {
        var a = d[o].schedule;
        if (a != null && a.length === 1) {
          var i = a[0];
          if (
            i.start_minute === n.start_minute &&
            i.end_minute === n.end_minute &&
            JSON.stringify(i.days) === JSON.stringify(n.days)
          )
            return o;
        }
      }
      return null;
    }
    function _(e, t) {
      var n, r;
      return (
        t === void 0 && (t = "ADVERTISER"),
        (n =
          (r = d[e]) == null || (r = r.schedule) == null
            ? void 0
            : r.map(function (e) {
                var n;
                return babelHelpers.extends(
                  {},
                  e,
                  ((n = {}),
                  (n[o("AdsApiScheduleObjectFields").TIMEZONE_TYPE] = t),
                  n),
                );
              })) != null
          ? n
          : null
      );
    }
    ((l.CTC_PRESET_SCHEDULES = d),
      (l.getCTCPresetScheduleOptions = m),
      (l.getCTCPresetForSchedule = p),
      (l.getCTCScheduleForPreset = _));
  },
  226,
);
