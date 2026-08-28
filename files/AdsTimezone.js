__d(
  "AdsTimezone",
  [
    "AdsTimezoneConfig",
    "AdsTimezoneDisplayNamesStatic",
    "TimezoneNamesData",
    "compareString",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    for (
      var e = new Array(r("AdsTimezoneConfig").offsets.length), s = 1;
      s < r("AdsTimezoneConfig").offsets.length;
      s++
    ) {
      var u = r("AdsTimezoneConfig").offsets[s].split(":"),
        c = parseInt(u[0], 10),
        d = c >= 0 ? 1 : -1,
        m = d * parseInt(u[1] || "0", 10);
      e[s] = c + m / 60;
    }
    for (var p = {}, _ = 1; _ < r("AdsTimezoneConfig").offsets.length; _++) {
      var f;
      p[_] = {
        displayName:
          ((f = r("AdsTimezoneDisplayNamesStatic")[String(_)]) == null
            ? void 0
            : f.toString()) || r("AdsTimezoneConfig").names[_],
        name: r("AdsTimezoneConfig").names[_],
        offset: r("AdsTimezoneConfig").offsets[_],
      };
    }
    for (var g = [], h = 1; h < r("AdsTimezoneConfig").offsets.length; h++) {
      var y = p[h];
      g.push({
        id: h,
        displayName: "(GMT" + y.offset + ") " + y.name.replace("_", " "),
        name: y.name,
        offset: y.offset,
      });
    }
    g.sort(function (t, n) {
      var o = e[t.id] - e[n.id];
      return o || r("compareString")(t.name, n.name);
    });
    for (var C = [], b = 1; b < r("AdsTimezoneConfig").offsets.length; b++)
      C[b] = r("TimezoneNamesData").zoneNames[b];
    ((C[0] = ""),
      (l.timezoneIDToOffsetMap = e),
      (l.timezoneDataByID = p),
      (l.sortedTimezones = g),
      (l.names = C),
      (l.countryCodeToTimezoneIDsMap = r("AdsTimezoneConfig").byCountryCode));
  },
  98,
);
