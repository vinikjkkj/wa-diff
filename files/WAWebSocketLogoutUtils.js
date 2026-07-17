__d(
  "WAWebSocketLogoutUtils",
  ["WAComms", "WALogger", "WAWebUnpairDeviceJob", "getErrorSafe"],
  function (t, n, r, o, a, i, l) {
    var e, s;
    function u(t) {
      return o("WAWebUnpairDeviceJob")
        .unpairDevice(t)
        .then(function (t) {
          (t.status !== 200 &&
            o("WALogger").WARN(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "ws2:multi-device logout failed with error code ",
                  "",
                ])),
              t.status,
            ),
            o("WAComms").stopComms());
        })
        .catch(function (e) {
          var t = r("getErrorSafe")(e);
          o("WALogger")
            .ERROR(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "[CRITICAL] unpairDevice failed, proceeding with local logout",
                ])),
            )
            .catching(t)
            .verbose();
        });
    }
    l.sendCurrentLogout = u;
  },
  98,
);
