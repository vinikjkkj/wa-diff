__d(
  "WAWebHandleServerClientExpiration",
  [
    "WATimeUtils",
    "WAWebBackendApi",
    "WAWebBuildConstants",
    "WAWebUserPrefsMultiDevice",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return s.apply(this, arguments);
    }
    function s() {
      return (
        (s = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield o("WAWebBackendApi").frontendSendAndReceive(
            "getHardExpireTime",
            {},
          );
          if (e == null)
            o(
              "WAWebUserPrefsMultiDevice",
            ).clearServerClientExpirationOverride();
          else {
            var n,
              r =
                (n = o(
                  "WAWebUserPrefsMultiDevice",
                ).getServerClientExpirationOverride()) == null
                  ? void 0
                  : n.timestamp;
            if ((r != null && e >= r) || e >= t) return;
            var a = o("WATimeUtils").futureUnixTime(
                3 * o("WATimeUtils").DAY_SECONDS,
              ),
              i = Math.max(a, Math.min(e, t));
            o("WAWebUserPrefsMultiDevice").setServerClientExpirationOverride(
              "" + i,
              o("WAWebBuildConstants").VERSION_BASE,
            );
          }
        })),
        s.apply(this, arguments)
      );
    }
    l.handleServerClientExpiration = e;
  },
  98,
);
