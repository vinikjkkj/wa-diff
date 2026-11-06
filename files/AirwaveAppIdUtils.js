__d(
  "AirwaveAppIdUtils",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = 0x879790db98806,
      l = 0x55d28841f2380,
      s = 0x5d058ff9df629,
      u = 0x8c740fa369aac,
      c = 0x4ac4e5104cd87,
      d = new Set(["" + e, "" + l, "" + s, "" + u, "" + c]);
    function m(e) {
      return e != null && d.has("" + e);
    }
    ((i.AIRWAVE_LG_APP_ID = e),
      (i.AIRWAVE_SAMSUNG_APP_ID = l),
      (i.AIRWAVE_VEGA_APP_ID = s),
      (i.AIRWAVE_VIZIO_APP_ID = u),
      (i.AIRWAVE_WEB_APP_ID = c),
      (i.isAirwaveWebAppId = m));
  },
  66,
);
