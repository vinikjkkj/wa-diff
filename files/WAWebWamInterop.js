__d(
  "WAWebWamInterop",
  [
    "WACustomError",
    "WATimeUtils",
    "WAWamStorage",
    "WAWebUserPrefsGeneral",
    "WAWebWamPrivateStats",
    "WAWebWamStorage",
  ],
  function (t, n, r, o, a, i, l) {
    var e = function (t, n) {
        return Promise.reject(
          new (o("WACustomError").UnimplementedMethod)(
            "saveBuffer not implemented yet",
          ),
        );
      },
      s = function (t) {
        return Promise.resolve();
      },
      u = function (t) {
        return Promise.reject(
          new (o("WACustomError").UnimplementedMethod)(
            "getStartingSequenceRow not implemented yet",
          ),
        );
      },
      c = function () {
        return Promise.reject(
          new (o("WACustomError").UnimplementedMethod)(
            "getBuffers not implemented yet",
          ),
        );
      },
      d = function () {
        return Promise.reject(
          new (o("WACustomError").UnimplementedMethod)(
            "nukeMetrics not implemented yet",
          ),
        );
      },
      m = function (t) {
        return Promise.reject(
          new (o("WACustomError").UnimplementedMethod)(
            "finishBuffer not implemented yet",
          ),
        );
      },
      p = function () {
        return Promise.reject(
          new (o("WACustomError").UnimplementedMethod)(
            "updatePrivateStatsIds not implemented yet",
          ),
        );
      },
      _ = async function (t) {
        var e = await r("WAWebWamStorage").getPsToken();
        return e
          ? t(
              { redeemCount: e.redeemCount, creationTs: e.creationTs },
              { maxExpirySeconds: 86400 },
            )
            ? r("WAWebWamStorage")
                .savePsToken(
                  babelHelpers.extends({}, e, {
                    redeemCount: e.redeemCount + 1,
                  }),
                )
                .then(function () {
                  return e.token;
                })
            : Promise.resolve(null)
          : null;
      };
    function f(e) {
      return r("WAWebWamStorage").savePsToken({
        key: "token",
        token: e,
        creationTs: o("WATimeUtils").unixTime(),
        redeemCount: 1,
      });
    }
    function g() {
      return Promise.resolve(o("WAWebUserPrefsGeneral").getPsKillSwitchToken());
    }
    function h(e) {
      return (
        o("WAWebUserPrefsGeneral").setPsKillSwitchToken(e),
        Promise.resolve()
      );
    }
    var y = {
      getStreamId: function () {
        return 1;
      },
      saveBuffer: e,
      finishBuffer: m,
      getStartingSequenceRow: u,
      getBuffers: c,
      removeBufferByKey: s,
      nukeMetrics: d,
      updatePrivateStatsIds: p,
      redeemPrivateStatsToken: _,
      savePrivateStatsToken: f,
      privateStatsKillSwitchGetBlockedToken: g,
      privateStatsKillSwitchSet: h,
    };
    function C() {
      o("WAWamStorage").startWamStorage(y);
    }
    l.startWamStore = C;
  },
  98,
);
