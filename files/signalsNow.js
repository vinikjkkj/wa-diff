__d(
  "signalsNow",
  ["AdsCurrentUser", "DateTime", "Timezone", "TimezoneNamesData"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    o("Timezone").registerNamesModule(n("TimezoneNamesData"));
    function e() {
      return e.getNow();
    }
    var s =
      r("AdsCurrentUser").timezoneName != null &&
      r("AdsCurrentUser").timezoneName !== ""
        ? o("Timezone").getByNameOrNull(r("AdsCurrentUser").timezoneName)
        : null;
    ((e.getNow = function () {
      return r("DateTime").localNow().instant;
    }),
      (e.UTC = o("Timezone").UTC),
      (e.PST8PDT = o("Timezone").PST8PDT),
      (e.LOCAL_TIMEZONE_ID =
        s != null ? s : o("Timezone").getEnvironmentTimezoneID()),
      (e.asPSTDateTime = function () {
        return new (r("DateTime"))(e.getNow(), o("Timezone").PST8PDT);
      }),
      (e.asUTCDateTime = function () {
        return new (r("DateTime"))(e.getNow(), o("Timezone").UTC);
      }),
      (e.asLocalDateTime = function () {
        return new (r("DateTime"))(e.getNow(), e.LOCAL_TIMEZONE_ID);
      }));
    var u = e;
    l.default = u;
  },
  98,
);
