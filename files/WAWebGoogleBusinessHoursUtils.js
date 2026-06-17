__d(
  "WAWebGoogleBusinessHoursUtils",
  ["WAWebBusinessProfileTypes"],
  function (t, n, r, o, a, i, l) {
    var e = {
      sunday: "sun",
      monday: "mon",
      tuesday: "tue",
      wednesday: "wed",
      thursday: "thu",
      friday: "fri",
      saturday: "sat",
    };
    function s(e) {
      var t = [];
      return (
        e.split(",").forEach(function (e) {
          for (
            var n = /(\d{1,2})(?::(\d{2}))?\s*(AM|PM)/gi, r = [], o = n.exec(e);
            o != null;
          ) {
            var a,
              i,
              l = parseInt((a = o[1]) != null ? a : "0", 10) % 12,
              s = o[2] != null ? parseInt(o[2], 10) : 0,
              u = ((i = o[3]) != null ? i : "").toUpperCase() === "PM";
            (r.push((u ? l + 12 : l) * 60 + s), (o = n.exec(e)));
          }
          r.length >= 2 && t.push([r[0], r[1]]);
        }),
        t
      );
    }
    function u(t) {
      var n = {};
      return (
        t.forEach(function (t) {
          var r = t.indexOf(":");
          if (r !== -1) {
            var a = t.slice(0, r).trim().toLowerCase(),
              i = t.slice(r + 1).trim(),
              l = e[a];
            if (
              !(
                l == null ||
                !o("WAWebBusinessProfileTypes").isBusinessHoursDayName(l)
              ) &&
              !/closed/i.test(i)
            ) {
              if (/24\s*hours/i.test(i)) {
                n[l] = {
                  mode: o("WAWebBusinessProfileTypes").BUSINESS_HOUR_MODES
                    .OPEN_24H,
                };
                return;
              }
              var u = s(i);
              u.length > 0 &&
                (n[l] = {
                  mode: o("WAWebBusinessProfileTypes").BUSINESS_HOUR_MODES
                    .SPECIFIC_HOURS,
                  hours: u,
                });
            }
          }
        }),
        { config: n }
      );
    }
    l.googleWeekdayHoursToBusinessHours = u;
  },
  98,
);
