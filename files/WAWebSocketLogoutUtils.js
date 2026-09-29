__d(
  "WAWebSocketLogoutUtils",
  [
    "WAComms",
    "WALogger",
    "WAWebLocalStorage",
    "WAWebUnpairDeviceJob",
    "WAWebUserPrefsKeys",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s;
    function u() {
      r("WAWebLocalStorage") == null ||
        r("WAWebLocalStorage").setItem(
          o("WAWebUserPrefsKeys").KEYS.LOGOUT_DIRTY_BIT,
          "1",
        );
    }
    function c() {
      r("WAWebLocalStorage") == null ||
        r("WAWebLocalStorage").removeItem(
          o("WAWebUserPrefsKeys").KEYS.LOGOUT_DIRTY_BIT,
        );
    }
    function d() {
      return (
        (r("WAWebLocalStorage") == null
          ? void 0
          : r("WAWebLocalStorage").getItem(
              o("WAWebUserPrefsKeys").KEYS.LOGOUT_DIRTY_BIT,
            )) === "1"
      );
    }
    function m(t) {
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
    ((l.setLogoutDirtyBit = u),
      (l.removeLogoutDirtyBit = c),
      (l.hasDirtyBitSet = d),
      (l.sendCurrentLogout = m));
  },
  98,
);
