__d(
  "WebBloksCAARegLogoutCurrentUser",
  ["WebBloksURLUtils", "XLogoutControllerRouteBuilder"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      var n = r("XLogoutControllerRouteBuilder").buildURL({
        source: "caa_fb_mobile_web_reg_conf_screen",
      });
      o("WebBloksURLUtils").openURL(n);
    }
    l.default = e;
  },
  98,
);
