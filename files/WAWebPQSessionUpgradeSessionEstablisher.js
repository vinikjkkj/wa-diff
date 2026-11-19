__d(
  "WAWebPQSessionUpgradeSessionEstablisher",
  [
    "WAWebFetchPrekeysJob",
    "WAWebManageE2ESessionsJob",
    "WAWebPQGatingUtils",
    "WAWebProcessKeyBundle",
    "WAWebRunInBatches",
    "WAWebSessionScope",
    "WAWebWamEnumPrekeysFetchContext",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return s.apply(this, arguments);
    }
    function s() {
      return (
        (s = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          if (!o("WAWebPQGatingUtils").isPq1on1MessageEnabled())
            return {
              upgradedWids: [],
              unavailableWids: [],
              depletedPrekeyCount: 0,
            };
          var t = yield o("WAWebFetchPrekeysJob").fetchPrekeys(
              e,
              !1,
              o("WAWebWamEnumPrekeysFetchContext").PREKEYS_FETCH_CONTEXT
                .PQ_SESSION_UPGRADE,
              { requestPqBundles: !0 },
            ),
            r = t.prekeyBundles,
            a = u(e),
            i = r.filter(function (e) {
              return (
                a.has(e.wid.toString()) &&
                o("WAWebManageE2ESessionsJob").getPrekeyBundleSessionScope(
                  e,
                  o("WAWebSessionScope").SessionScope.PQ,
                ) === o("WAWebSessionScope").SessionScope.PQ
              );
            }),
            l = u(
              i.map(function (e) {
                return e.wid;
              }),
            );
          yield o("WAWebRunInBatches").runInBatches(
            i,
            (function () {
              var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                function* (e) {
                  var t = yield o(
                      "WAWebManageE2ESessionsJob",
                    ).getSignalSessionWids(
                      e.map(function (e) {
                        return e.wid;
                      }),
                    ),
                    n = t.pq;
                  n.length === 0 &&
                    (yield o("WAWebProcessKeyBundle").processKeyBundles(
                      e,
                      o("WAWebSessionScope").SessionScope.PQ,
                    ));
                },
              );
              return function (t) {
                return e.apply(this, arguments);
              };
            })(),
            { batchSize: 1 },
          );
          var s = u(
            (yield o("WAWebManageE2ESessionsJob").getSignalSessionWids(
              i.map(function (e) {
                return e.wid;
              }),
            )).pq,
          );
          return {
            upgradedWids: e.filter(function (e) {
              return s.has(e.toString());
            }),
            unavailableWids: e.filter(function (e) {
              return !l.has(e.toString());
            }),
            depletedPrekeyCount: r.filter(function (e) {
              return e.key == null && !e.wid.isBot();
            }).length,
          };
        })),
        s.apply(this, arguments)
      );
    }
    function u(e) {
      return new Set(
        e.map(function (e) {
          return e.toString();
        }),
      );
    }
    l.establishPQSessionUpgrades = e;
  },
  98,
);
