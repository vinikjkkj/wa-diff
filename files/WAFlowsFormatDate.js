__d(
  "WAFlowsFormatDate",
  ["WAFlowsIntlDateTimeFormatter", "err"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function () {
        var e = {};
        return function (t, n, a) {
          if (typeof n != "string")
            throw r("err")("Format string must be a string");
          var i = t.toLocaleDateString() + "-" + n + "-" + a;
          if (i in e) {
            var l;
            return (l = e[i]) != null ? l : "";
          }
          var s = o(
              "WAFlowsIntlDateTimeFormatter",
            ).getDatePartsFromDateTimeFormatter(t, a),
            u = s.dayStr,
            c = s.hourStr,
            d = s.minuteStr,
            m = s.monthStr,
            p = s.secondStr,
            _ = s.yearStr,
            f = {
              YYYY: _,
              Y: _,
              MM: m,
              mm: d,
              M: m,
              m: m,
              DD: u,
              d: u,
              HH: c,
              ss: p,
              Z: "Z",
            },
            g = n;
          for (var h of Object.entries(f)) {
            var y = h[0],
              C = h[1];
            g = g.replace(new RegExp(y, "g"), C);
          }
          return ((e[i] = g), g);
        };
      })(),
      s = e;
    l.default = s;
  },
  98,
);
