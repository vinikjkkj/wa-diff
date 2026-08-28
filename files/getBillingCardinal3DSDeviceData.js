__d(
  "getBillingCardinal3DSDeviceData",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e() {
      var e = window.navigator,
        t = e.language,
        n = e.languages,
        r = e.userAgent,
        o = window.screen,
        a = o.height,
        i = o.width;
      return {
        browser_user_agent: r,
        languages: n != null ? [].concat(n) : [t],
        locale: t,
        platform: "web",
        screen_resolution: i + "x" + a,
        time_zone: Intl.DateTimeFormat().resolvedOptions().timeZone,
        unavailable_data_params: [{ data_param: "D030", reason: "RE02" }],
      };
    }
    i.default = e;
  },
  66,
);
