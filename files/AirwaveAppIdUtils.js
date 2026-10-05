__d(
  "AirwaveAppIdUtils",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = 0x879790db98806,
      l = 0xafba07116043a,
      s = 0x55d28841f2380,
      u = 0x5d058ff9df629,
      c = 0x8c740fa369aac,
      d = 0x4ac4e5104cd87,
      m = new Set(["" + e, "" + s, "" + u, "" + c, "" + d]);
    function p(e) {
      return e != null && m.has("" + e);
    }
    ((i.AIRWAVE_LG_APP_ID = e),
      (i.AIRWAVE_ROKU_APP_ID = l),
      (i.AIRWAVE_SAMSUNG_APP_ID = s),
      (i.AIRWAVE_VEGA_APP_ID = u),
      (i.AIRWAVE_VIZIO_APP_ID = c),
      (i.AIRWAVE_WEB_APP_ID = d),
      (i.isAirwaveWebAppId = p));
  },
  66,
);
