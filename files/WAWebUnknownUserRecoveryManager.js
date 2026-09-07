__d(
  "WAWebUnknownUserRecoveryManager",
  [
    "WALogger",
    "WATimeUtils",
    "WAWebABProps",
    "WAWebApiContact",
    "WAWebCooldownBatcher",
    "WAWebRecoverUnknownUsernamesBatchJob",
    "WAWebUnknownUserRecoveryStore",
    "WAWebUsernameGatingUtils",
    "WAWebWamEnumUnknownUserRecoveryPath",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = 250,
      u = 2e3,
      c = 250,
      d = new Set(),
      m = o("WAWebCooldownBatcher").createCooldownBatcher(
        { windowMs: s, maxWindowMs: u, cooldownMs: c },
        o("WAWebRecoverUnknownUsernamesBatchJob").recoverUsernamesForLids,
      );
    function p(e, t) {
      if (
        h(e, t) &&
        o("WAWebUsernameGatingUtils").unknownUserRecoveryEnabled() &&
        o("WAWebABProps").getABPropConfigValue("mex_usync_username_query")
      ) {
        var n = e;
        if (!o("WAWebApiContact").isDeprecatedLid(n) && !d.has(n)) {
          var r = o("WATimeUtils").unixTime();
          o("WAWebUnknownUserRecoveryStore").tryReserveUsyncFetch(
            n,
            o("WAWebUsernameGatingUtils").unknownUserUsyncRequestCoolDownSecs(),
            r,
          ) && (d.add(n), y(n, r));
        }
      }
    }
    function _(e) {
      return e.hasPn === !0 || e.hasUn === !0 || e.hasPush === !0;
    }
    function f(e) {
      return e.hasPn === !1 && e.hasUn === !1 && e.hasPush === !1;
    }
    function g(e, t) {
      return e.isLid()
        ? _(t)
          ? o("WAWebWamEnumUnknownUserRecoveryPath").UNKNOWN_USER_RECOVERY_PATH
              .LOCAL_HEAL
          : f(t) &&
              o("WAWebUsernameGatingUtils").unknownUserRecoveryEnabled() &&
              o("WAWebABProps").getABPropConfigValue("mex_usync_username_query")
            ? o("WAWebWamEnumUnknownUserRecoveryPath")
                .UNKNOWN_USER_RECOVERY_PATH.USYNC
            : o("WAWebWamEnumUnknownUserRecoveryPath")
                .UNKNOWN_USER_RECOVERY_PATH.NONE
        : o("WAWebWamEnumUnknownUserRecoveryPath").UNKNOWN_USER_RECOVERY_PATH
            .NONE;
    }
    function h(e, t) {
      return e.isLid() && t.hasUn === !1 && t.hasPn === !1;
    }
    function y(e, t) {
      return C.apply(this, arguments);
    }
    function C() {
      return (
        (C = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n) {
          try {
            var a = yield m(t);
            a.errored
              ? o("WAWebUnknownUserRecoveryStore").releaseUsyncReservation(n)
              : o("WAWebUnknownUserRecoveryStore").commitUsyncFetched(t, n);
          } catch (t) {
            (o("WAWebUnknownUserRecoveryStore").releaseUsyncReservation(n),
              o("WALogger")
                .WARN(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "WAWebUnknownUserRecoveryManager: recovery usync failed",
                    ])),
                )
                .sendLogs("unknown-user-recovery-usync-failed")
                .catching(r("getErrorSafe")(t)));
          } finally {
            d.delete(t);
          }
        })),
        C.apply(this, arguments)
      );
    }
    ((l.maybeRecoverUnknownUser = p), (l.getUnknownUserRecoveryPath = g));
  },
  98,
);
