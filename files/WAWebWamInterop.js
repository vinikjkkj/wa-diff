__d(
  "WAWebWamInterop",
  [
    "Promise",
    "WACustomError",
    "WATimeUtils",
    "WAWamStorage",
    "WAWebUserPrefsGeneral",
    "WAWebWamPrivateStats",
    "WAWebWamStorage",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = function (r, a) {
        return (e || (e = n("Promise"))).reject(
          new (o("WACustomError").UnimplementedMethod)(
            "saveBuffer not implemented yet",
          ),
        );
      },
      u = function (r) {
        return (e || (e = n("Promise"))).resolve();
      },
      c = function (r) {
        return (e || (e = n("Promise"))).reject(
          new (o("WACustomError").UnimplementedMethod)(
            "getStartingSequenceRow not implemented yet",
          ),
        );
      },
      d = function () {
        return (e || (e = n("Promise"))).reject(
          new (o("WACustomError").UnimplementedMethod)(
            "getBuffers not implemented yet",
          ),
        );
      },
      m = function () {
        return (e || (e = n("Promise"))).reject(
          new (o("WACustomError").UnimplementedMethod)(
            "nukeMetrics not implemented yet",
          ),
        );
      },
      p = function (r) {
        return (e || (e = n("Promise"))).reject(
          new (o("WACustomError").UnimplementedMethod)(
            "finishBuffer not implemented yet",
          ),
        );
      },
      _ = function () {
        return (e || (e = n("Promise"))).reject(
          new (o("WACustomError").UnimplementedMethod)(
            "updatePrivateStatsIds not implemented yet",
          ),
        );
      },
      f = (function () {
        var t = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var o = yield r("WAWebWamStorage").getPsToken();
          return o
            ? t(
                { redeemCount: o.redeemCount, creationTs: o.creationTs },
                { maxExpirySeconds: 86400 },
              )
              ? r("WAWebWamStorage")
                  .savePsToken(
                    babelHelpers.extends({}, o, {
                      redeemCount: o.redeemCount + 1,
                    }),
                  )
                  .then(function () {
                    return o.token;
                  })
              : (e || (e = n("Promise"))).resolve(null)
            : null;
        });
        return function (n) {
          return t.apply(this, arguments);
        };
      })();
    function g(e) {
      return r("WAWebWamStorage").savePsToken({
        key: "token",
        token: e,
        creationTs: o("WATimeUtils").unixTime(),
        redeemCount: 1,
      });
    }
    function h() {
      return (e || (e = n("Promise"))).resolve(
        o("WAWebUserPrefsGeneral").getPsKillSwitchToken(),
      );
    }
    function y(t) {
      return (
        o("WAWebUserPrefsGeneral").setPsKillSwitchToken(t),
        (e || (e = n("Promise"))).resolve()
      );
    }
    var C = {
      getStreamId: function () {
        return 1;
      },
      saveBuffer: s,
      finishBuffer: p,
      getStartingSequenceRow: c,
      getBuffers: d,
      removeBufferByKey: u,
      nukeMetrics: m,
      updatePrivateStatsIds: _,
      redeemPrivateStatsToken: f,
      savePrivateStatsToken: g,
      privateStatsKillSwitchGetBlockedToken: h,
      privateStatsKillSwitchSet: y,
    };
    function b() {
      o("WAWamStorage").startWamStorage(C);
    }
    l.startWamStore = b;
  },
  98,
);
